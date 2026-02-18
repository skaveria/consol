(ns slab.panes
  (:require [clojure.string :as str]))

(def token-test (re-pattern "\\{\\{[a-zA-Z0-9_]+\\}\\}"))
(def token-repl (re-pattern "\\{\\{([a-zA-Z0-9_]+)\\}\\}"))

(defn apply-template [tmpl state]
  (let [tmpl (str tmpl)]
    (if-not (re-find token-test tmpl)
      tmpl
      (str/replace tmpl token-repl
                   (fn [[_ k]]
                     (let [v (when state (aget state k))]
                       (if (or (nil? v) (undefined? v)) "" (str v))))))))

(defn classify-value [v]
  (let [t (-> (str v) str/lower-case)]
    (cond
      (or (str/includes? t "error")
          (str/includes? t "failed")
          (str/includes? t "offline")
          (str/includes? t "down")) "bad"
      (or (str/includes? t "warn")
          (str/includes? t "charging")
          (str/includes? t "dirty")
          (str/includes? t "throttl")
          (str/includes? t "hot")) "warn"
      :else "")))

(defn split-kv [line]
  (cond
    (str/includes? line "::")
    (let [[k & more] (str/split line #"::")]
      [(str/trim k) (str/trim (str/join "::" more))])

    :else
    (when-let [[_ k v] (re-matches #"^\s*([^\s]+)\s{2,}(.+)$" line)]
      [(str/trim k) (str/trim v)])))

;; ------------------------------------------------------------
;; DOM helpers
;; ------------------------------------------------------------

(defn- mk-el
  ([tag] (.createElement js/document tag))
  ([tag class-name]
   (let [e (.createElement js/document tag)]
     (set! (.-className e) class-name)
     e)))

(defn- set-text! [el s]
  (set! (.-textContent el) (str s))
  el)

(defn- append! [parent child]
  (.appendChild parent child)
  parent)

;; ------------------------------------------------------------
;; Pane mount/render
;; ------------------------------------------------------------

(defn mount-pane! [pre]
  (when-not (= "1" (.getAttribute pre "data-slab-mounted"))
    (.setAttribute pre "data-slab-mounted" "1")

    (let [raw (-> (.-textContent pre) (str/replace #"\r\n" "\n") (str/trimr))
          lines (->> (str/split raw #"\n") (map str/trimr) (into []))

          [pane-type lines] (if (and (seq lines) (str/starts-with? (first lines) "@"))
                              [(-> (subs (first lines) 1) str/trim str/lower-case)
                               (subvec lines 1)]
                              [nil lines])

          _ (when pane-type
              (.. pre -classList (add (str "pane-" pane-type))))

          non-empty (->> lines (filter #(seq (str/trim %))) (into []))
          kv-pairs (->> non-empty (map split-kv) (filter some?) (into []))
          is-kv (>= (count kv-pairs) (max 1 (js/Math.floor (* 0.7 (count non-empty)))))]

      (if-not is-kv
        (do
          (.setAttribute pre "data-pane-kind" "text")
          (.setAttribute pre "data-template" (str/join "\n" lines)))
        (do
          (.setAttribute pre "data-pane-kind" "kv")
          (.. pre -classList (add "pane-kv"))

          (let [kv (mk-el "div")]
            (set! (.-className kv) "kv")

            (doseq [[k v] kv-pairs]
              (let [row (mk-el "div" "row")
                    kdiv (mk-el "div" "k")
                    vdiv (mk-el "div" "v")]
                (set-text! kdiv k)
                (.setAttribute vdiv "data-template" v)
                (set-text! vdiv v)
                (append! row kdiv)
                (append! row vdiv)
                (append! kv row)))

            (set! (.-textContent pre) "")
            (append! pre kv)))))))

(defn mount-all-panes! []
  (doseq [pre (array-seq (.querySelectorAll js/document "pre.example"))]
    (mount-pane! pre)))

(defn render-panes! [state]
  (doseq [pre (array-seq (.querySelectorAll js/document "pre.example"))]
    (let [kind (.getAttribute pre "data-pane-kind")]
      (cond
        (= kind "text")
        (let [tmpl (.getAttribute pre "data-template")]
          (set! (.-textContent pre) (apply-template tmpl state)))

        (= kind "kv")
        (doseq [vdiv (array-seq (.querySelectorAll pre ".v"))]
          (let [tmpl (.getAttribute vdiv "data-template")
                rendered (apply-template tmpl state)
                klass (classify-value rendered)]
            (set! (.-textContent vdiv) rendered)
            (.. vdiv -classList (remove "warn"))
            (.. vdiv -classList (remove "bad"))
            (when (seq klass)
              (.. vdiv -classList (add klass)))))))))
