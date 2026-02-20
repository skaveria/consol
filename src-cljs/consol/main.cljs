;; CONTRACT: src-cljs/consol/main.cljs
;; Purpose:
;; - Client bootstrap for Consol surface.
;; - Poll state, render panes/modeline, and keep chrome updated.
;; - Avoid DOM churn: interactive tokens expand once; substitutions re-apply after pane renders.
;;
;; Non-goals:
;; - No developer telemetry UI by default.

(ns consol.main
  (:require [consol.events :as events]
            [consol.config :as cfg]
            [consol.chrome :as chrome]
            [consol.tokens :as tokens]
            [consol.panes :as panes]
            [consol.theme :as theme]
            [consol.state :as state]))

(defn- get-json [url]
  (-> (js/fetch url) (.then (fn [resp] (.json resp)))))

(defn- state-val [st k fallback]
  (let [v (when st (aget st k))]
    (if (or (nil? v) (undefined? v) (= "" (str v)))
      fallback
      (str v))))

(defn tick! []
  (chrome/ensure-chrome!)
  (chrome/highlight-active-tab!)
  (theme/fetch-theme!)
  (panes/mount-all-panes!)

  ;; state drives panes
  (-> (state/fetch-state!)
      (.then (fn [s]
               (when s
                 (panes/render-panes! s))
               ;; panes may recreate data-template placeholders:
               ;; re-apply cached substitutions without rebuilding interactive tokens.
               (tokens/ensure-substitutions!)))))

(defonce ^:private started? (atom false))

(defn start! []
  (when-not @started?
    (reset! started? true)

    ;; interactive token clicks
    (events/attach!)

    ;; Expand interactive tokens once (no flicker).
    (tokens/expand-interactive-tokens!)

    ;; tabs.edn once
    (-> (cfg/fetch-tabs!)
        (.then (fn [_]
                 (chrome/ensure-chrome!)
                 (chrome/highlight-active-tab!))))

    ;; battery in titlebar (QoL)
    (-> (get-json "/api/status")
        (.then (fn [st]
                 (chrome/set-titlebar-battery! (state-val st "battery" "—"))))
        (.catch (fn [_] nil)))

    (tick!)
    (js/setInterval tick! cfg/poll-ms)

    (js/console.log "consol client online (full)")))

(defn init! []
  (if (.-body js/document)
    (start!)
    (.addEventListener js/document "DOMContentLoaded" start!)))

(init!)
