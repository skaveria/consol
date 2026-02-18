;; src-cljs/slab/net.cljs
(ns slab.net
  (:require [cljs.reader :as reader]))

(defn run-token!
  "POST token execution request to /api/run-token.
  Request: EDN, Response: EDN.
  Returns a JS Promise resolving to a CLJS map."
  [{:keys [token token-id section params] :as info}]
  (let [payload (pr-str {:token token
                         :token-id token-id
                         :section section
                         :params (or params {})})]
    (-> (js/fetch "/api/run-token"
                  (clj->js {:method "POST"
                            :headers {"Content-Type" "application/edn"}
                            :body payload}))
        (.then (fn [resp]
                 (if (.-ok resp)
                   (.text resp)
                   (-> (.text resp)
                       (.then (fn [t]
                                (throw (js/Error. (str "HTTP " (.-status resp) ": " t)))))))))
        (.then (fn [txt]
                 ;; Server must return EDN map: {:type ... :body ... :meta {...}}
                 (reader/read-string txt))))))
