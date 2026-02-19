(ns user
  (:require
   [clojure.java.shell :as sh]
   [clojure.string :as str]
   [clojure.tools.namespace.repl :refer [refresh]]
   [consol.core :as slab]
   [consol.web :as web]))

(defn go []
  (consol/start!))

(defn stop []
  (consol/stop!))

(defn say
  ([text] (consol/say! text))
  ([opts text] (consol/say! opts text)))

(defn- sh-ok
  "Run a command and return {:ok? .. :out .. :err .. :exit ..}."
  [& args]
  (let [{:keys [exit out err]} (apply sh/sh args)]
    {:ok? (zero? exit)
     :exit exit
     :out (or out "")
     :err (or err "")}))

(defn git-rev []
  (let [{:keys [out]} (sh-ok "git" "rev-parse" "--short" "HEAD")]
    (-> out str/trim)))

(defn git-status []
  ;; "clean" or "dirty"
  (let [{:keys [out]} (sh-ok "sh" "-lc" "git status --porcelain | head -n1")]
    (if (seq (str/trim out)) "dirty" "clean")))

(defn git-pull []
  (println "Pulling latest changes...")
  (let [res (sh-ok "git" "pull")]
    (when (seq (:out res)) (print (:out res)))
    (when (seq (:err res)) (print (:err res)))
    (if (:ok? res)
      (println "Pull complete.")
      (println "Git pull failed."))
    (assoc res :rev (git-rev) :state (git-status))))

(defn consol-reload []
  (println "Reloading namespaces...")
  (refresh))

(defn consol-update []
  (git-pull)
  (consol-reload)
  :updated)

(defn deploy
  "Deploy the latest code to the consol runtime.
  Steps:
  1) git pull
  2) tools.namespace refresh
  3) optionally restart the web server if it's running
  4) speak a short confirmation
  Returns a summary map."
  []
  (let [pull (git-pull)
        _    (consol-reload)
        ;; If the web server is running, restart it to pick up handler/template changes cleanly.
        ;; Safe even if no changes.
        web-was-running? (web/running?)
        _    (when web-was-running?
               (println "Restarting web server...")
               (web/stop!)
               (go))
        rev  (:rev pull)
        state (:state pull)
        msg  (str "Deployed " (if (seq rev) rev "latest") ". " state ".")]
    (println msg)
    (try
      (say {:rate 0.95 :pitch 1.05} msg)
      (catch Exception _ nil))
    {:deployed true
     :rev rev
     :git-state state
     :web-restarted? web-was-running?}))
