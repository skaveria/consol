;; src-cljs/slab/render.cljs
(ns slab.render)

(defmulti render-rich
  "Return a DOM node for a rich body map, dispatched by :kind."
  (fn [body] (:kind body)))

(defmethod render-rich :image [{:keys [src alt]}]
  (doto (.createElement js/document "img")
    (aset "src" src)
    (aset "alt" (or alt ""))))

(defmethod render-rich :video [{:keys [src controls autoplay loop muted]}]
  (let [v (.createElement js/document "video")]
    (when (not= false controls) (aset v "controls" true))
    (when autoplay (aset v "autoplay" true))
    (when loop (aset v "loop" true))
    (when muted (aset v "muted" true))
    (aset v "src" src)
    v))

(defmethod render-rich :pre [{:keys [text]}]
  (doto (.createElement js/document "pre")
    (aset "textContent" (or text ""))))

(defmethod render-rich :default [body]
  (doto (.createElement js/document "pre")
    (aset "textContent" (str "Unknown rich kind: " (pr-str body)))))
