(ns consol.actions
  (:require [consol.tokens :as tokens]
            [consol.dom :as dom]
            [consol.net :as net]))

(defn run-token! [{:keys [el]}]
  (let [info (tokens/token-info el)
        slot (dom/ensure-output-slot! info el)]
    (when slot
      (dom/show-loading! slot)
      (-> (net/run-token! info)
          (.then (fn [resp]
                   (case (:type resp)
                     :text (dom/show-text! slot resp)
                     :rich (dom/show-rich! slot resp)
                     (dom/show-text! slot {:body (pr-str resp)}))))
          (.catch (fn [e]
                    (dom/show-error! slot e)))))))

(def ^:private actions
  {:run-token run-token!})

(defn dispatch! [{:keys [action] :as ctx}]
  (if-let [f (get actions action)]
    (f ctx)
    (js/console.warn "Unknown action:" (name action) ctx)))
