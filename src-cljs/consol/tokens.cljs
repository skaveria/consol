(ns consol.tokens
  (:require [clojure.string :as str]
            [consol.util :as u]))

(def token-interactive-re
  ;; {{status*}} where status is [A-Za-z0-9_]+
  (js/RegExp. "\\{\\{([A-Za-z0-9_]+)\\*\\}\\}" "g"))

(defn- current-page-stem []
  (let [p (or (.-pathname js/location) "index.html")
        base (-> p
                 (str/replace #".*/" "")
                 (str/replace #"\?.*$" "")
                 (str/replace #"#.*$" "")
                 (str/replace #"\.html?$" ""))]
    (if (seq base) base "index")))

(defn- find-section-id
  "Nearest Org export outline container id.
  Org HTML usually emits: <div id=\"outline-container-...\">"
  [^js el]
  (loop [cur el]
    (cond
      (nil? cur) nil
      (let [id (.-id cur)]
        (and (string? id) (str/starts-with? id "outline-container-"))) id
      :else (recur (.-parentElement cur)))))

(defn token-info
  "Extract token metadata from an interactive token element."
  [^js el]
  {:token    (u/dataset el "slabToken")
   :token-id (u/dataset el "slabTokenId")
   :section  (or (u/dataset el "slabSection")
                 (find-section-id el)
                 (current-page-stem))
   :params   {}})

(defn- mk-token-el [token token-id section]
  (let [el (.createElement js/document "span")]
    (set! (.-className el) "slab-token slab-token--interactive")
    (.setAttribute el "data-slab-action" "run-token")
    (.setAttribute el "data-slab-token" token)
    (.setAttribute el "data-slab-token-id" token-id)
    (when section
      (.setAttribute el "data-slab-section" section))
    (set! (.-textContent el) (str "[" token "*]"))
    el))

(defn- mk-slot-el [token-id]
  (let [slot (.createElement js/document "div")]
    (set! (.-className slot) "slab-output-slot")
    (.setAttribute slot "data-slab-slot" token-id)
    slot))

(defn- replace-text-node!
  "Replace a text node with nodes."
  [^js text-node nodes]
  (when-let [p (.-parentNode text-node)]
    (doseq [n nodes]
      (.insertBefore p n text-node))
    (.removeChild p text-node)))

(defn- reset-regex! [^js re]
  (set! (.-lastIndex re) 0)
  re)

(defn- build-replacement-nodes
  "Turn a text string containing {{name*}} into a vector of DOM nodes.
  Returns nil if no matches."
  [txt {:keys [page section counter]}]
  (reset-regex! token-interactive-re)
  (loop [last-idx 0
         m (.exec token-interactive-re txt)
         out []]
    (if (nil? m)
      (let [tail (.substring txt last-idx)]
        (when (seq out) ;; only return if we actually matched something
          (cond-> out
            (seq tail) (conj (.createTextNode js/document tail)))))
      (let [match-idx (.-index m)
            token     (aget m 1)
            match-str (aget m 0)
            before    (.substring txt last-idx match-idx)
            i         (swap! counter inc)
            token-id  (str page "::" token "::" (dec i))
            token-el  (mk-token-el token token-id section)
            slot-el   (mk-slot-el token-id)]
        (recur (+ match-idx (.-length match-str))
               (.exec token-interactive-re txt)
               (cond-> out
                 (seq before) (conj (.createTextNode js/document before))
                 true         (conj token-el)
                 true         (conj slot-el)))))))

(defn- walk-text-nodes
  "Call f on each text node under root."
  [^js root f]
  (let [walker (.createTreeWalker js/document root js/NodeFilter.SHOW_TEXT nil false)]
    (loop [^js node (.nextNode walker)]
      (when node
        (f node)
        (recur (.nextNode walker))))))

(defn hydrate-interactive-tokens!
  "Find {{name*}} occurrences in text nodes and replace with clickable tokens + slots."
  []
  (let [root (or (.getElementById js/document "content")
                 (.-body js/document))]
    (when root
      (let [page    (current-page-stem)
            counter (atom 0)]
        (walk-text-nodes
         root
         (fn [^js node]
           (let [txt (.-nodeValue node)]
             (when (and (string? txt)
                        (re-find #"\{\{" txt)
                        (re-find token-interactive-re txt))
               (let [section (find-section-id (.-parentElement node))
                     nodes   (build-replacement-nodes txt {:page page
                                                           :section section
                                                           :counter counter})]
                 (when (seq nodes)
                   (replace-text-node! node nodes)))))))))))
