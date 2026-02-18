;; src-cljs/slab/actions.cljs
(ns slab.actions
  (:require [slab.tokens :as tokens]
            [slab.dom :as dom]
            [slab.net :as net]))

(defn run-token! [{:keys [el]}]
  (let [info (tokens/token-info el)
        slot (dom/ensure-output-slot! info)]
    (when slot
      (dom/show-loading! slot)
      (-> (net/run-token! info)
          (.then (fn [resp]
                   (case (:type resp)
                     :text (dom/show-text! slot resp)
                     :rich (dom/show-rich! slot resp)
                     ;; unknown type: render the whole response as text
                     (dom/show-text! slot {:body (pr-str resp)}))))
          (.catch (fn [e]
                    (dom/show-error! slot e)))))))

(def ^:private actions
  {:run-token run-token!})

(defn dispatch! [{:keys [action] :as ctx}]
  (if-let [f (get actions action)]
    (f ctx)
    (js/console.warn "Unknown action:" (name action) ctx)))
