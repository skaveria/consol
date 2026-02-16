(ns pixel-slab.web
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [org.httpkit.server :as http]
            [pixel-slab.stats :as stats]))

(defonce ^:private server* (atom nil))

(defn- slurp-resource [resource-path]
  (when-let [res (io/resource resource-path)]
    (slurp res)))

(defn- render-template [template vars]
  (reduce-kv
    (fn [s k v]
      (str/replace s (str "{{" (name k) "}}") (str v)))
    template
    vars))

(defn- content-type [uri]
  (cond
    (str/ends-with? uri ".css")  "text/css; charset=utf-8"
    (str/ends-with? uri ".html") "text/html; charset=utf-8"
    :else                        "application/octet-stream"))

(defn- resource-response [uri resource-path]
  (if-let [res (io/resource resource-path)]
    {:status 200
     :headers {"Content-Type" (content-type uri)}
     :body (io/input-stream res)}
    {:status 404
     :headers {"Content-Type" "text/plain; charset=utf-8"}
     :body (str "not found: " uri)}))

(defn- handler
  [{:keys [node role ip nrepl-port http-port refresh-seconds repo-dir]
    :or {node "slab-01"
         role "pixel-slab"
         ip "127.0.0.1"
         nrepl-port 7888
         http-port 8080
         refresh-seconds 10
         repo-dir (System/getProperty "user.dir")}}]
  (let [index-tpl (slurp-resource "public/os.html")]
    (fn [req]
      (let [uri (:uri req)]
        (cond
          (= uri "/")
          (let [vars (stats/snapshot {:repo-dir repo-dir
                                      :node node
                                      :role role
                                      :nrepl-port nrepl-port
                                      :http-port http-port
                                      :refresh-seconds refresh-seconds
                                      ;; since you're local-kiosk, show localhost as "ip" if you want:
                                      :ip-override ip})]
            {:status 200
             :headers {"Content-Type" "text/html; charset=utf-8"}
             :body (render-template index-tpl vars)})

          ;; Serve any file directly under resources/public/ via URL "/<name>"
          (re-matches #"/[A-Za-z0-9._-]+" uri)
          (let [name (subs uri 1)]
            (resource-response uri (str "public/" name)))

          :else
          {:status 404
           :headers {"Content-Type" "text/plain; charset=utf-8"}
           :body "not found"})))))

(defn running? [] (some? @server*))

(defn stop!
  []
  (when-let [stop-fn @server*]
    (stop-fn)
    (reset! server* nil)
    :stopped))

(defn start!
  [{:keys [ip port node role nrepl-port refresh-seconds repo-dir]
    :or {ip "127.0.0.1"
         port 8080
         node "slab-01"
         role "pixel-slab"
         nrepl-port 7888
         refresh-seconds 10
         repo-dir (System/getProperty "user.dir")}}]
  (when (running?) (stop!))
  (let [stop-fn (http/run-server
                  (handler {:node node
                            :role role
                            :ip ip
                            :nrepl-port nrepl-port
                            :http-port port
                            :refresh-seconds refresh-seconds
                            :repo-dir repo-dir})
                  {:ip ip :port port})]
    (reset! server* stop-fn)
    {:status :started :ip ip :port port}))
