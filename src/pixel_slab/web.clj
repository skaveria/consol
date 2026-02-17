(ns pixel-slab.web
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [org.httpkit.server :as http]
            [pixel-slab.state :as state]))

(defonce ^:private server* (atom nil))

(defn running? [] (some? @server*))

(defn stop!
  []
  (when-let [stop-fn @server*]
    (stop-fn)
    (reset! server* nil)
    :stopped))

(defn- content-type [uri]
  (cond
    (str/ends-with? uri ".css")  "text/css; charset=utf-8"
    (str/ends-with? uri ".js")   "application/javascript; charset=utf-8"
    (str/ends-with? uri ".html") "text/html; charset=utf-8"
    (str/ends-with? uri ".json") "application/json; charset=utf-8"
    :else                        "application/octet-stream"))

(defn- resource-response [uri resource-path]
  (if-let [res (io/resource resource-path)]
    {:status 200
     :headers {"Content-Type" (content-type uri)}
     :body (io/input-stream res)}
    {:status 404
     :headers {"Content-Type" "text/plain; charset=utf-8"}
     :body (str "not found: " uri)}))

(defn- json-escape [s]
  (-> (str s)
      (str/replace "\\" "\\\\")
      (str/replace "\"" "\\\"")
      (str/replace "\n" "\\n")
      (str/replace "\r" "\\r")
      (str/replace "\t" "\\t")))

(defn- map->json [m]
  ;; minimal JSON encoder (string values)
  (str "{"
       (str/join
        ","
        (for [[k v] m]
          (str "\"" (name k) "\":\"" (json-escape v) "\"")))
       "}"))

(defn- handler []
  (fn [req]
    (let [uri (:uri req)]
      (cond
        ;; API
        (= uri "/api/state")
        (let [m (state/snapshot)]
          {:status 200
           :headers {"Content-Type" "application/json; charset=utf-8"
                     "Cache-Control" "no-store"}
           :body (map->json m)})

        ;; Root -> index.html
        (= uri "/")
        (resource-response "index.html" "public/index.html")

        ;; Any static file under resources/public
        (re-matches #"/[A-Za-z0-9._/-]+" uri)
        (resource-response uri (str "public/" (subs uri 1)))

        :else
        {:status 404
         :headers {"Content-Type" "text/plain; charset=utf-8"}
         :body "not found"}))))

(defn start!
  [{:keys [ip port]
    :or {ip "127.0.0.1" port 8080}}]
  (when (running?) (stop!))
  (let [stop-fn (http/run-server (handler) {:ip ip :port port})]
    (reset! server* stop-fn)
    {:status :started :ip ip :port port}))
