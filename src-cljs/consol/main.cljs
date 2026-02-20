;; CONTRACT: src-cljs/consol/main.cljs
;; Purpose:
;; - Client bootstrap for Consol surface.
;; - Tick renders panes and a QoL modeline using /api/status.
;;
;; Non-goals:
;; - No developer telemetry in the modeline by default.

(ns consol.main
  (:require [consol.events :as events]
            [consol.config :as cfg]
            [consol.chrome :as chrome]
            [consol.tokens :as tokens]
            [consol.panes :as panes]
            [consol.theme :as theme]
            [consol.state :as state]))

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

(defn- get-json
  "Fetch URL and parse JSON response."
  [url]
  (-> (js/fetch url)
      (.then (fn [resp] (.json resp)))))

(defn- state-val [st k fallback]
  (let [v (when st (aget st k))]
    (if (or (nil? v) (undefined? v) (= "" (str v)))
      fallback
      (str v))))

(defn- mk-seg [k v]
  (let [seg (mk-el "span" "seg")
        k-el (mk-span "k" k)
        v-el (mk-span "v" v)]
    (append! seg k-el)
    (append! seg v-el)
    seg))

(defn render-modeline! [st]
  (when-let [m (chrome/ensure-modeline!)]
    (clear-children! m)
    (let [node   (state-val st "node" "consol")
          battery (state-val st "battery" "—")
          volume  (state-val st "volume" "—")
          net     (state-val st "net" "—")
          uptime  (state-val st "uptime" "—")
          sep     (fn [] (mk-span "sep" "·"))]
      (append! m (mk-span "node" node))
      (doseq [x [(sep) (mk-seg ":bat" battery)
                 (sep) (mk-seg ":vol" volume)
                 (sep) (mk-seg ":net" net)
                 (sep) (mk-seg ":up" uptime)]]
        (append! m x))))
  nil)

(defn tick! []
  (chrome/ensure-chrome!)
  (chrome/highlight-active-tab!)
  (theme/fetch-theme!)
  (panes/mount-all-panes!)

  ;; state drives panes
  (-> (state/fetch-state!)
      (.then (fn [s]
               (when s (panes/render-panes! s)))))

  ;; status drives modeline (QoL)
  (-> (get-json "/api/status")
      (.then (fn [st]
               (render-modeline! st))))

  ;; tokens (interactive + substitutions) – safe to re-run
  (tokens/expand-tokens!)
  nil)

(defonce ^:private started? (atom false))

(defn start! []
  (when-not @started?
    (reset! started? true)

    (events/attach!)

    ;; tabs.edn once
    (-> (cfg/fetch-tabs!)
        (.then (fn [_]
                 (chrome/ensure-chrome!)
                 (chrome/highlight-active-tab!))))

    (tick!)
    (js/setInterval tick! cfg/poll-ms)

    (js/console.log "consol client online (full)")))

(defn init! []
  (if (.-body js/document)
    (start!)
    (.addEventListener js/document "DOMContentLoaded" start!)))

(init!)
