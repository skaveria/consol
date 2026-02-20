;; CONTRACT: src-cljs/consol/main.cljs
;; Purpose:
;; - Client bootstrap for Consol surface.
;; - Attaches interactive token handling, mounts panes, fetches state, renders modeline.
;; - Ensures substitution tokens (e.g. {{git.rev}}) are filled and re-applied after pane rerenders.
;;
;; Non-goals:
;; - No business logic here beyond orchestration.

(ns consol.main
  (:require [consol.events :as events]
            [consol.config :as cfg]
            [consol.chrome :as chrome]
            [consol.tokens :as tokens]
            [consol.panes :as panes]
            [consol.theme :as theme]
            [consol.state :as state]))

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
      (append! m (mk-span "node" "consol"))
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
  ;; chrome + navigation
  (chrome/ensure-chrome!)
  (chrome/highlight-active-tab!)

  ;; theme + panes
  (theme/fetch-theme!)
  (panes/mount-all-panes!)

  ;; state -> panes -> modeline -> substitutions
  (-> (state/fetch-state!)
      (.then (fn [s]
               (when s
                 (panes/render-panes! s))
               (render-modeline! s)

               ;; Important: panes may re-create data-template placeholders.
               ;; This call fetches once (if needed) and re-applies thereafter.
               (tokens/ensure-substitutions!)))))


(defonce ^:private started? (atom false))

(defn start! []
  (when-not @started?
    (reset! started? true)

    ;; interactive token clicks
    (events/attach!)

    ;; Expand interactive {{name*}} tokens + slots once at startup.
    (tokens/expand-interactive-tokens!)

    ;; tabs.edn once
    (-> (cfg/fetch-tabs!)
        (.then (fn [_]
                 (chrome/ensure-chrome!)
                 (chrome/highlight-active-tab!))))

    (tick!)
    (js/setInterval tick! cfg/poll-ms)

    (js/console.log "consol client online (full)")))

(defn init! []
  ;; Delay until <body> exists.
  (if (.-body js/document)
    (start!)
    (.addEventListener js/document "DOMContentLoaded" start!)))

(init!)
