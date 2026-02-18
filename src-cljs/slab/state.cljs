(ns slab.state)

(defn dev-state-override []
  (let [x (aget js/window "SLAB_STATE")]
    (when (and x (not (undefined? x)) (= "object" (js/typeof x))) x)))

(defn fetch-state! []
  (cond
    (dev-state-override)
    (js/Promise.resolve (dev-state-override))

    (= "file:" (.-protocol js/location))
    (js/Promise.resolve nil)

    :else
    (-> (js/fetch "/api/state" (clj->js {:cache "no-store"}))
        (.then (fn [res] (if (.-ok res) (.json res) nil)))
        (.catch (fn [_] nil)))))
