(ns consol.theme
  (:require [clojure.string :as str]
            [cljs.reader :as reader]))

(defn- set-css-var! [k v]
  (.. js/document -documentElement -style (setProperty k (str v))))

(defn- ->hue-kw [x]
  (cond
    (keyword? x) x
    (string? x)  (keyword (str/lower-case x))
    :else        nil))

(defn fetch-theme! []
  (let [proto (.-protocol js/location)]
    (cond
      (= proto "file:")
      (js/Promise.resolve nil)

      :else
      (-> (js/fetch "/theme.edn" (clj->js {:cache "no-store"}))
          (.then (fn [res] (if (.-ok res) (.text res) nil)))
          (.then (fn [txt]
                   (when (and txt (seq (str/trim txt)))
                     (let [m   (reader/read-string txt)
                           h   (:header m)
                           hue (or (->hue-kw (:hue h)) :green)
                           hdr-color (case hue
                                       :amber "#fd971f"
                                       :ice   "#a8d8ff"
                                       :white "#e8e3d6"
                                       :green "#a6e22e"
                                       "#a6e22e")]

                       ;; Let CSS key off this immediately on future loads.
                       (.. js/document -documentElement
                           (setAttribute "data-hdr-hue" (name hue)))

                       ;; Also set CSS var directly for this load.
                       (set-css-var! "--hdr-color" hdr-color)

                       (when-let [w  (:text-weight h)]    (set-css-var! "--hdr-weight" w))
                       (when-let [g  (:glow h)]           (set-css-var! "--hdr-glow-a" g))
                       (when-let [g2 (:glow2 h)]          (set-css-var! "--hdr-glow-b" g2))
                       (when-let [cg (:cursor-glow h)]    (set-css-var! "--cursor-glow-a" cg))
                       (when-let [cg2 (:cursor-glow2 h)]  (set-css-var! "--cursor-glow-b" cg2))))))
          (.catch (fn [_] nil))))))
