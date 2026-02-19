;; CONTRACT: dev/user.clj
;; Purpose: developer REPL entrypoints for running Consol locally / on a server.
;; Non-goals:
;; - This file is not part of the production runtime.
;; - Keep it boring: clear commands, clear output, minimal magic.

(ns user
  (:require
   [clojure.java.shell :as sh]
   [clojure.string :as str]
   [clojure.tools.namespace.repl :refer [refresh]]
   [consol.core :as consol]
   [consol.web :as web]))

;; -----------------------------------------------------------------------------
;; Basic runtime control
;; -----------------------------------------------------------------------------

(defn go
  "Start the Consol runtime."
  []
  (consol/start!))

(defn stop
  "Stop the Consol runtime."
  []
  (consol/stop!))

(defn say
  "Speak TEXT via Consol TTS. Optionally pass OPTS as the first arg."
  ([text]
   (consol/say! text))
  ([opts text]
   (consol/say! opts text)))

;; -----------------------------------------------------------------------------
;; Shell helpers
;; -----------------------------------------------------------------------------

(defn- run
  "Run a command and return:
  {:ok? boolean :exit int :out string :err string :cmd [..]}

  Use \"sh -lc\" for shell pipelines, otherwise pass args directly."
  [& args]
  (let [{:keys [exit out err]} (apply sh/sh args)]
    {:ok?  (zero? exit)
     :exit exit
     :out  (or out "")
     :err  (or err "")
     :cmd  (vec args)}))

(defn- print-run!
  "Print stdout/stderr from RES (a map from `run`). Returns RES unchanged."
  [res]
  (when (seq (:out res)) (print (:out res)))
  (when (seq (:err res)) (print (:err res)))
  res)

(defn- sh-lc
  "Run a shell command line via `sh -lc`."
  [cmdline]
  (run "sh" "-lc" cmdline))

(defn- file-exists?
  "Return true if PATH exists."
  [path]
  (.exists (java.io.File. path)))

;; -----------------------------------------------------------------------------
;; Git helpers
;; -----------------------------------------------------------------------------

(defn git-rev
  "Return the current short git SHA, or \"\" if unavailable."
  []
  (-> (run "git" "rev-parse" "--short" "HEAD")
      :out
      str/trim))

(defn git-state
  "Return \"clean\" or \"dirty\" based on `git status --porcelain`."
  []
  (let [out (:out (sh-lc "git status --porcelain | head -n1"))]
    (if (seq (str/trim out)) "dirty" "clean")))

(defn git-pull!
  "Pull latest git changes. Returns a summary map."
  []
  (println "Pulling latest changes...")
  (let [res (-> (run "git" "pull") print-run!)
        summary {:ok? (:ok? res)
                 :exit (:exit res)
                 :rev (git-rev)
                 :git-state (git-state)}]
    (if (:ok? res)
      (println "Pull complete.")
      (println "Git pull failed."))
    summary))

;; -----------------------------------------------------------------------------
;; CLJS build helpers
;; -----------------------------------------------------------------------------

(defn npm-install!
  "Install JS deps.
  Prefers `npm ci` when package-lock.json exists; otherwise uses `npm install`.

  Returns:
  {:ok? boolean :exit int :cmd string}"
  []
  (println "Installing JS deps...")
  (let [cmd (if (file-exists? "package-lock.json") "npm ci" "npm install")
        res (-> (sh-lc cmd) print-run!)]
    (if (:ok? res)
      (println "JS deps ready.")
      (println "JS deps install failed."))
    {:ok? (:ok? res) :exit (:exit res) :cmd cmd}))

(defn build-js!
  "Build the browser JS bundle via shadow-cljs.

  Expected output:
  - resources/public/js-out/consol.js

  Returns:
  {:ok? boolean :exit int :bundle string}"
  []
  (println "Building JS (shadow-cljs compile consol)...")
  (let [res (-> (sh-lc "npx shadow-cljs compile consol") print-run!)
        bundle "resources/public/js-out/consol.js"]
    (if (:ok? res)
      (println "JS build complete.")
      (println "JS build failed."))
    {:ok? (:ok? res) :exit (:exit res) :bundle bundle}))

;; -----------------------------------------------------------------------------
;; Reload / deploy
;; -----------------------------------------------------------------------------

(defn reload!
  "Reload Clojure namespaces using tools.namespace."
  []
  (println "Reloading namespaces...")
  (refresh))

(defn deploy!
  "Deploy the latest code to the running Consol instance.

  Steps:
  1) git pull
  2) npm install (ci if lockfile exists)
  3) shadow-cljs compile consol
  4) tools.namespace refresh
  5) if web server is running, restart it (stop + go)
  6) speak a short confirmation

  Returns a summary map."
  []
  (let [git (git-pull!)
        npm (npm-install!)
        _   (when-not (:ok? npm)
              (let [msg (str "Deploy blocked: JS deps install failed (" (:cmd npm) ").")]
                (println msg)
                (try (say {:rate 0.95 :pitch 1.05} msg) (catch Exception _ nil))
                (throw (ex-info msg {:stage :npm :result npm}))))

        js  (build-js!)
        _   (when-not (:ok? js)
              (let [msg "Deploy blocked: JS build failed."]
                (println msg)
                (try (say {:rate 0.95 :pitch 1.05} msg) (catch Exception _ nil))
                (throw (ex-info msg {:stage :shadow-cljs :result js}))))

        _   (reload!)
        web-was-running? (web/running?)
        _   (when web-was-running?
              (println "Restarting web server...")
              (web/stop!)
              (go))

        msg (str "Deployed " (if (seq (:rev git)) (:rev git) "latest")
                 ". " (:git-state git) ".")]
    (println msg)
    (try (say {:rate 0.95 :pitch 1.05} msg) (catch Exception _ nil))
    {:deployed true
     :rev (:rev git)
     :git-state (:git-state git)
     :web-restarted? web-was-running?
     :js js}))
