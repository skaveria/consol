;; src-cljs/slab/util.cljs
(ns consol.util)

(defn dataset
  "Read a dataset key from a DOM element. Returns nil if missing."
  [^js el k]
  (when el
    (let [v (aget (.-dataset el) k)]
      (when (and v (not= v "")) v))))

(defn kw
  "Convert a non-empty string to a keyword. Returns nil on nil/empty."
  [s]
  (when (and s (string? s) (not= s ""))
    (keyword s)))
