(ns user
  (:require
   [clojure.java.shell :as sh]
   [clojure.string :as str]
   [clojure.tools.namespace.repl :refer [refresh]]
   [pixel-slab.core :as slab]
   [pixel-slab.web :as web]))

(defn go []
  (slab/start!))

(defn stop []
  (slab/stop!))

(defn say
  ([text] (slab/say! text))
  ([opts text] (slab/say! opts text)))

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

(defn slab-reload []
  (println "Reloading namespaces...")
  (refresh))

(defn slab-update []
  (git-pull)
  (slab-reload)
  :updated)

;yay
