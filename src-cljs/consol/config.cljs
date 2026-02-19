(ns consol.config
  (:require [clojure.string :as str]
            [cljs.reader :as reader]))

(def poll-ms 2500)

;; ------------------------------------------------------------
;; Defaults + runtime config (tabs.edn)
;; ------------------------------------------------------------

(def default-node "slab-01")

(def default-tabs
  [{:href "index.html"  :label "dashboard"}
   {:href "system.html" :label "system"}
   {:href "git.html"    :label "git"}
   {:href "event.html"  :label "event"}
   {:href "notes.html"  :label "notes"}
   {:href "about.html"  :label "about"}
   {:href "media.html"  :label "media"}])

(defonce chrome* (atom {:node default-node :tabs default-tabs}))

;; ------------------------------------------------------------
;; Small helpers
;; ------------------------------------------------------------

(defn basename [s]
  (let [s (or s "")
        s (first (str/split s #"[?#]"))
        parts (str/split s #"/")]
    (or (last parts) "index.html")))

(defn current-page-name []
  (let [proto (.-protocol js/location)
        p (.-pathname js/location)]
    (cond
      (= proto "file:") (basename p)
      (or (nil? p) (= p "/")) "index.html"
      :else (basename p))))

(defn- file-stem [filename]
  (-> filename
      (str/replace #"\.html$" "")
      (str/replace #"\.htm$"  "")))

(defn page-label [page]
  (let [tabs (:tabs @chrome*)]
    (or (:label (first (filter #(= (:href %) page) tabs)))
        (file-stem page))))

;; ------------------------------------------------------------
;; Load tabs.edn (editable tabs config)
;; ------------------------------------------------------------

(defn fetch-tabs! []
  ;; file:// dev mode: keep defaults
  (if (= "file:" (.-protocol js/location))
    (js/Promise.resolve nil)
    (-> (js/fetch "/tabs.edn" (clj->js {:cache "no-store"}))
        (.then (fn [res] (if (.-ok res) (.text res) nil)))
        (.then (fn [txt]
                 (when (and txt (seq (str/trim txt)))
                   (let [m (reader/read-string txt)]
                     (reset! chrome*
                             {:node (or (:node m) default-node)
                              :tabs (or (:tabs m) default-tabs)})))))
        (.catch (fn [_] nil)))))
