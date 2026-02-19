(ns pixel-slab.registry)

(defn ok-text
  ([s] (ok-text s {}))
  ([s meta]
   {:type :text
    :body (str s)
    :meta (or meta {})}))

(defn ok-rich
  ([body] (ok-rich body {}))
  ([body meta]
   {:type :rich
    :body body
    :meta (or meta {})}))

(def slab-registry
  {"echo"
   (fn [{:keys [token token-id section params]}]
     (ok-text (str "token=" token
                   " token-id=" token-id
                   " section=" section
                   " params=" (pr-str params))
              {:token token :token-id token-id :section section}))})
