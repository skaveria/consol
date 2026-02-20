;; CONTRACT: src/consol/registry.clj
;; Purpose:
;; - Define and expose the command (token) registry for Consol.
;; - Provide small helpers for consistent handler return shapes.
;;
;; Non-goals:
;; - This is not a services registry.
;; - No process supervision or “running/stopped” semantics here.
;; - No IO side effects in registry definition.

(ns consol.registry)

(defn ok-text
  "Return a text response payload.
  HANDLERS should return either ok-text or ok-rich."
  ([s]
   (ok-text s {}))
  ([s meta]
   {:type :text
    :body (str s)
    :meta (or meta {})}))

(defn ok-rich
  "Return a rich response payload.
  BODY is an implementation-defined structure consumed by the surface."
  ([body]
   (ok-rich body {}))
  ([body meta]
   {:type :rich
    :body body
    :meta (or meta {})}))

(def command-registry
  "Map of command-name -> handler-fn.
  Handlers accept a request map (token, token-id, section, params, …)
  and return ok-text/ok-rich."
  {"echo"
   (fn [{:keys [token token-id section params]}]
     (ok-text (str "token=" token
                   " token-id=" token-id
                   " section=" section
                   " params=" (pr-str params))
              {:token token :token-id token-id :section section}))})

(defn command-names
  "Return sorted command names."
  []
  (sort (keys command-registry)))

(defn command-count
  "Return the number of registered commands."
  []
  (count command-registry))
