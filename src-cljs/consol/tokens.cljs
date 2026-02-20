;; CONTRACT: src-cljs/consol/tokens.cljs
;; Purpose:
;; - Token expansion utilities for Org-exported pages.
;; - Interactive: {{name*}} -> clickable token + output slot.
;; - Substitution: {{git.rev}} -> plain values (text nodes + data-template attrs).
;; - Substitution values are cached per page load and can be re-applied after rerenders.
;;
;; Non-goals:
;; - No global app state beyond small caches needed for hydration.

(ns consol.tokens
  (:require [clojure.string :as str]
            [cljs.reader :as reader]
            [consol.util :as u]
            [consol.dom :as dom]))

(def ^:private interactive-token-pattern
  #"\{\{([A-Za-z0-9_]+)\*\}\}")

(def ^:private substitution-token-pattern
  #"\{\{([A-Za-z0-9_]+)\.([A-Za-z0-9_.-]+)\}\}")

(defonce ^:private git-cache* (atom nil))
(defonce ^:private git-fetch-inflight* (atom false))

;; -----------------------------------------------------------------------------
;; DOM helpers
;; -----------------------------------------------------------------------------

(defn- text-node? [^js n] (= 3 (.-nodeType n)))
(defn- element-node? [^js n] (= 1 (.-nodeType n)))

(defn- replace-node! [^js old-node new-node]
  (when-let [p (.-parentNode old-node)]
    (.replaceChild p new-node old-node))
  new-node)

(defn- all-text-nodes [^js root]
  (let [out (transient [])]
    (letfn [(walk [^js node]
              (cond
                (text-node? node) (conj! out node)
                (element-node? node) (doseq [c (array-seq (.-childNodes node))] (walk c))
                :else nil))]
      (walk root)
      (persistent! out))))

(defn- all-elements [selector]
  (array-seq (.querySelectorAll js/document selector)))

(defn- mk-token-el [token token-id section]
  (let [el (.createElement js/document "span")]
    (set! (.-className el) "slab-token slab-token--interactive")
    (set! (.-textContent el) (str token))
    (.setAttribute el "data-slab-action" "run-token")
    (.setAttribute el "data-slab-token-id" token-id)
    (.setAttribute el "data-slab-section" (or section ""))
    el))

(defn- mk-slot-el [token-id]
  (let [slot (.createElement js/document "span")]
    (set! (.-className slot) "slab-slot")
    (.setAttribute slot "data-slab-slot" token-id)
    slot))

(defn- page-name []
  (u/basename (.-pathname js/location)))

(defn- section-name-for-node [^js node]
  (or (some-> (dom/closest node "div.outline-2, div.outline-3, div.outline-4")
              (.querySelector "h2,h3,h4")
              (.-textContent)
              (str/trim))
      ""))

;; -----------------------------------------------------------------------------
;; Interactive tokens: {{name*}}
;; -----------------------------------------------------------------------------

(defn parse-interactive [s]
  (let [s (str s)]
    (if-not (re-find interactive-token-pattern s)
      [(.createTextNode js/document s)]
      (let [page (page-name)
            parts (str/split s interactive-token-pattern)
            matches (re-seq interactive-token-pattern s)]
        (loop [nodes []
               i 0
               parts parts
               matches matches]
          (cond
            (and (empty? parts) (empty? matches)) nodes
            :else
            (let [text-part (first parts)
                  token-m   (first matches)
                  token     (second token-m)
                  nodes     (if (seq text-part)
                              (conj nodes (.createTextNode js/document text-part))
                              nodes)]
              (if token
                (let [token-id (str page "::" token "::" i)
                      token-el (mk-token-el token token-id "")
                      slot-el  (mk-slot-el token-id)]
                  (recur (-> nodes (conj token-el) (conj slot-el))
                         (inc i)
                         (rest parts)
                         (rest matches)))
                (recur nodes
                       (inc i)
                       (rest parts)
                       (rest matches))))))))))

(defn expand-interactive-tokens! []
  (let [root (.-body js/document)]
    (doseq [^js t (all-text-nodes root)]
      (let [txt (.-nodeValue t)]
        (when (and txt (re-find interactive-token-pattern txt))
          (let [frag (.createDocumentFragment js/document)
                nodes (parse-interactive txt)
                section (section-name-for-node t)]
            (doseq [^js n nodes]
              (when (and (element-node? n)
                         (= "run-token" (.getAttribute n "data-slab-action")))
                (.setAttribute n "data-slab-section" section)))
            (doseq [^js n nodes] (.appendChild frag n))
            (replace-node! t frag)))))))

;; -----------------------------------------------------------------------------
;; Substitution tokens: {{git.rev}} etc (cached)
;; -----------------------------------------------------------------------------

(defn- fetch-edn! [url on-ok on-err]
  (-> (js/fetch url)
      (.then (fn [resp]
               (if (.-ok resp)
                 (.text resp)
                 (throw (js/Error. (str "HTTP " (.-status resp)))))))
      (.then (fn [txt]
               (try
                 (on-ok (reader/read-string txt))
                 (catch :default e
                   (on-err e)))))
      (.catch on-err)))

(defn- replace-substitution-tokens-in-string [s data]
  (str/replace
   (str s)
   substitution-token-pattern
   (fn [[_ ns k]]
     (let [ns (str ns)
           k  (str k)]
       (or (some-> (get data ns) (get k)) "")))))

(defn- apply-git-to-text-nodes! [git-map]
  (let [data {"git" (or git-map {})}
        root (.-body js/document)]
    (doseq [^js t (all-text-nodes root)]
      (let [txt (.-nodeValue t)]
        (when (and txt (re-find #"\{\{git\." txt))
          (set! (.-nodeValue t)
                (replace-substitution-tokens-in-string txt data)))))))

(defn- apply-git-to-templates! [git-map]
  (let [data {"git" (or git-map {})}]
    (doseq [^js el (all-elements "[data-template]")]
      (let [tmpl (.getAttribute el "data-template")]
        (when (and tmpl (re-find #"\{\{git\." tmpl))
          (set! (.-textContent el)
                (replace-substitution-tokens-in-string tmpl data)))))))

(defn apply-substitutions!
  "Apply cached substitution values to the current DOM.
  Safe to call after any pane re-render."
  []
  (when-let [git-map @git-cache*]
    (apply-git-to-text-nodes! git-map)
    (apply-git-to-templates! git-map))
  nil)

(defn ensure-substitutions!
  "Ensure substitution values are available, fetching once if needed.
  Applies substitutions to the current DOM when data is available."
  []
  (cond
    @git-cache*
    (apply-substitutions!)

    @git-fetch-inflight*
    nil

    :else
    (do
      (reset! git-fetch-inflight* true)
      (fetch-edn!
       "/api/git"
       (fn [git-map]
         (reset! git-cache* git-map)
         (reset! git-fetch-inflight* false)
         (apply-substitutions!))
       (fn [_]
         (reset! git-fetch-inflight* false)
         nil)))))

;; -----------------------------------------------------------------------------
;; Public entry
;; -----------------------------------------------------------------------------

(defn expand-tokens!
  "Expand all supported tokens on the page.
  Interactive tokens expand once; substitutions are ensured and applied."
  []
  (expand-interactive-tokens!)
  (ensure-substitutions!)
  nil)
