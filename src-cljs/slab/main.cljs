;; src-cljs/slab/main.cljs
(ns slab.main
  (:require [slab.events :as events]   ;; interactive tokens (run-token)
            [slab.config :as cfg]
            [slab.chrome :as chrome]
            [slab.panes :as panes]
            [slab.theme :as theme]
            [slab.state :as state]))

;; ------------------------------------------------------------
;; Modeline rendering (kept here for now)
;; ------------------------------------------------------------

(defn- classify-value [v]
  (panes/classify-value v))

(defn- state-val [st k fallback]
  (let [v (when st (aget st k))]
    (if (or (nil? v) (undefined? v) (= "" (str v)))
      fallback
      (str v))))

(defn- mk-el [tag class-name]
  (let [e (.createElement js/document tag)]
    (set! (.-className e) class-name)
    e))

(defn- mk-span [cls txt]
  (let [el (.createElement js/document "span")]
    (set! (.-className el) cls)
    (set! (.-textContent el) (str txt))
    el))

(defn- clear-children! [el]
  (set! (.-innerHTML el) "")
  el)

(defn- append! [parent child]
  (.appendChild parent child)
  parent)

(defn- mk-seg [k v]
  (let [seg (mk-el "span" "seg")
        k-el (mk-span "k" k)
        v-el (mk-span "v" v)
        klass (classify-value v)]
    (when (seq klass)
      (.. v-el -classList (add klass)))
    (append! seg k-el)
    (append! seg v-el)
    seg))

(defn render-modeline! [st]
  (when-let [m (chrome/ensure-modeline!)]
    (clear-children! m)
    (let [nrepl   (state-val st "nrepl" "—")
          http    (state-val st "http" "—")
          time    (state-val st "time" "—")
          battery (state-val st "battery" "—")
          volume  (state-val st "volume" "—")
          sep     (fn [] (mk-span "sep" "·"))]
      (append! m (mk-span "node" "slab"))
      (doseq [x [(sep) (mk-seg ":nrepl" nrepl)
                 (sep) (mk-seg ":http" http)
                 (sep) (mk-seg ":time" time)
                 (sep) (mk-seg ":battery" battery)
                 (sep) (mk-seg ":volume" volume)]]
        (append! m x))))
  nil)

;; ------------------------------------------------------------
;; Tick/init
;; ------------------------------------------------------------

(defn tick! []
  (chrome/ensure-chrome!)
  (chrome/highlight-active-tab!)
  (theme/fetch-theme!)
  (panes/mount-all-panes!)
  (-> (state/fetch-state!)
      (.then (fn [s]
               (when s (panes/render-panes! s))
               (render-modeline! s)))))

(defonce ^:private started? (atom false))

(defn start! []
  (when-not @started?
    (reset! started? true)

    ;; interactive token clicks
    (events/attach!)

    ;; tabs.edn once
    (-> (cfg/fetch-tabs!)
        (.then (fn [_]
                 (chrome/ensure-chrome!)
                 (chrome/highlight-active-tab!))))

    (tick!)
    (js/setInterval tick! cfg/poll-ms)

    (js/console.log "slab client online (full)")))

(defn init! []
  ;; If we run before <body> exists, delay until DOM is ready.
  (if (.-body js/document)
    (start!)
    (.addEventListener js/document "DOMContentLoaded" start!)))

(init!)
