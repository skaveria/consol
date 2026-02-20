;; CONTRACT: src/consol/web.clj
;; Purpose:
;; - Serve Consol's static document surface from resources/public.
;; - Provide small inspection and command endpoints:
;;   - /api/state (JSON, string values)
;;   - /api/git (EDN)
;;   - /api/run-token (EDN request -> EDN response)
;;
;; Non-goals:
;; - No authentication in 0.1.
;; - No complex routing framework.
;; - Keep responses inspectable and cache-disabled.

(ns consol.web
  (:require [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [org.httpkit.server :as http]
            [consol.git :as git]
            [consol.state :as state]
            [consol.registry :as registry]))

(defonce ^:private server* (atom nil))

(defn running?
  "Return true if the HTTP server is running."
  []
  (some? @server*))

(defn stop!
  "Stop the HTTP server if it is running."
  []
  (when-let [stop-fn @server*]
    (stop-fn)
    (reset! server* nil)
    :stopped))

(defn- content-type
  "Infer a Content-Type header from a request URI."
  [uri]
  (cond
    (str/ends-with? uri ".css")  "text/css; charset=utf-8"
    (str/ends-with? uri ".js")   "application/javascript; charset=utf-8"
    (str/ends-with? uri ".html") "text/html; charset=utf-8"
    (str/ends-with? uri ".json") "application/json; charset=utf-8"
    (str/ends-with? uri ".edn")  "application/edn; charset=utf-8"
    (str/ends-with? uri ".png")  "image/png"
    (str/ends-with? uri ".jpg")  "image/jpeg"
    (str/ends-with? uri ".jpeg") "image/jpeg"
    (str/ends-with? uri ".gif")  "image/gif"
    (str/ends-with? uri ".mp4")  "video/mp4"
    :else                        "application/octet-stream"))

(def ^:private public-dir
  ;; Serve from filesystem first so built js-out is available immediately.
  (io/file "resources" "public"))

(defn- file-response
  "Serve a file from resources/public if it exists on disk."
  [uri]
  (let [path (subs uri 1)
        f (io/file public-dir path)]
    (when (and (.exists f) (.isFile f))
      {:status 200
       :headers {"Content-Type" (content-type uri)
                 "Cache-Control" "no-store"}
       :body (io/input-stream f)})))

(defn- resource-response
  "Fallback: serve a classpath resource under public/ (useful if packaged)."
  [uri]
  (let [resource-path (str "public/" (subs uri 1))]
    (when-let [res (io/resource resource-path)]
      {:status 200
       :headers {"Content-Type" (content-type uri)
                 "Cache-Control" "no-store"}
       :body (io/input-stream res)})))

(defn- not-found
  "Return a plain-text 404."
  [uri]
  {:status 404
   :headers {"Content-Type" "text/plain; charset=utf-8"
             "Cache-Control" "no-store"}
   :body (str "not found: " uri)})

(defn- static-response
  "Serve a static resource from disk or classpath."
  [uri]
  (or (file-response uri)
      (resource-response uri)
      (not-found uri)))

(defn- json-escape [s]
  (-> (str s)
      (str/replace "\\" "\\\\")
      (str/replace "\"" "\\\"")
      (str/replace "\n" "\\n")
      (str/replace "\r" "\\r")
      (str/replace "\t" "\\t")))

(defn- map->json
  "Minimal JSON encoder for maps with string-ish values."
  [m]
  (str "{"
       (str/join
        ","
        (for [[k v] m]
          (str "\"" (name k) "\":\"" (json-escape v) "\"")))
       "}"))

(defn- edn-response
  "Return an EDN response with no-store caching."
  [status m]
  {:status status
   :headers {"Content-Type" "application/edn; charset=utf-8"
             "Cache-Control" "no-store"}
   :body (pr-str m)})

(defn- read-edn-body
  "Read EDN request body into a map. Returns {} for empty/missing body."
  [req]
  (let [b (:body req)]
    (if-not b
      {}
      (let [s (slurp b)]
        (if (seq (str/trim (str s)))
          (edn/read-string s)
          {})))))
(defn- registry-map
  "Return the active registry map.
  Compatibility: prefers registry/command-registry, falls back to registry/slab-registry."
  []
  (or (some-> (resolve 'registry/command-registry) deref)
      (some-> (resolve 'registry/slab-registry) deref)
      {}))

(defn- run-token!
  "Execute a command handler by token name and return an EDN response map."
  [req]
  (let [m     (read-edn-body req)
        token (:token m)
        f     (get (registry-map) token)]
    (if-not f
      (edn-response 404 {:type :text
                         :body (str "Unknown token: " token)
                         :meta {:token token}})
      (try
        (edn-response 200 (f m))
        (catch Exception e
          (edn-response 500 {:type :text
                             :body (str "ERROR: " (.getMessage e))
                             :meta {:token token}}))))))

(defn- handler
  "Create the main HTTP handler."
  []
  (fn [req]
    (let [uri (:uri req)]
      (cond
        ;; -------------------------
        ;; API
        ;; -------------------------

        (= uri "/api/state")
        (let [m (state/snapshot)]
          {:status 200
           :headers {"Content-Type" "application/json; charset=utf-8"
                     "Cache-Control" "no-store"}
           :body (map->json m)})

        (= uri "/api/git")
        (edn-response 200 (git/git-info))

        (= uri "/api/run-token")
        (run-token! req)

        ;; -------------------------
        ;; Root
        ;; -------------------------

        (= uri "/")
        (static-response "/index.html")

        ;; -------------------------
        ;; Static files
        ;; -------------------------

        (re-matches #"/[A-Za-z0-9._/-]+" uri)
        (static-response uri)

        :else
        (not-found uri)))))

(defn start!
  "Start the HTTP server.
  Options:
  - :ip   (default \"0.0.0.0\")
  - :port (default 8080)"
  [{:keys [ip port]
    :or {ip "0.0.0.0" port 8080}}]
  (when (running?) (stop!))
  (let [stop-fn (http/run-server (handler) {:ip ip :port port})]
    (reset! server* stop-fn)
    {:status :started :ip ip :port port}))
