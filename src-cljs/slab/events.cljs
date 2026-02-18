;; src-cljs/slab/events.cljs
(ns slab.events
  (:require [slab.util :as u]
            [slab.actions :as actions]))

(defonce ^:private installed? (atom false))

(defn- find-action-el
  "Walk up from target to find an element with data-slab-action."
  [^js target]
  (loop [el target]
    (cond
      (nil? el) nil
      (u/dataset el "slabAction") el
      :else (recur (.-parentElement el)))))

(defn- on-click [^js e]
  (let [el (find-action-el (.-target e))
        action (u/kw (u/dataset el "slabAction"))]
    (when action
      (.preventDefault e)
      (actions/dispatch! {:action action :el el :event e}))))

(defn attach!
  []
  (when-not @installed?
    (.addEventListener js/document "click" on-click)
    (reset! installed? true)))

(defn detach!
  []
  (when @installed?
    (.removeEventListener js/document "click" on-click)
    (reset! installed? false)))
