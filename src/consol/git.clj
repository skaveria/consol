;; CONTRACT: src/consol/git.clj
;; Purpose:
;; - Provide inspectable git metadata for the current working directory.
;;
;; Non-goals:
;; - No mutation of the repo.
;; - No deployment logic.

(ns consol.git
  (:require [clojure.java.shell :as sh]
            [clojure.string :as str]))

(defn- run
  "Run a command and return {:ok? .. :exit .. :out .. :err .. :cmd ..}."
  [& args]
  (let [{:keys [exit out err]} (apply sh/sh args)]
    {:ok?  (zero? exit)
     :exit exit
     :out  (or out "")
     :err  (or err "")
     :cmd  (vec args)}))

(defn- trim-out [s]
  (str/trim (or s "")))

(defn- git
  "Run a git command and return trimmed stdout, or \"\" on failure."
  [& args]
  (let [res (apply run "git" args)]
    (if (:ok? res) (trim-out (:out res)) "")))

(defn- dirty?
  "Return true if there are uncommitted changes."
  []
  (boolean (seq (git "status" "--porcelain"))))

(defn git-info
  "Return a stable map of git metadata for display (string keys)."
  []
  (let [rev    (git "rev-parse" "--short" "HEAD")
        branch (git "rev-parse" "--abbrev-ref" "HEAD")
        remote (git "remote" "get-url" "origin")
        state  (if (dirty?) "dirty" "clean")]
    {"rev" rev
     "branch" branch
     "remote" remote
     "state" state}))
