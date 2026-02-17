(ns pixel-slab.state
  (:require [clojure.java.shell :as sh]
            [clojure.string :as str]))

(defn- sh* [& args]
  (try
    (apply sh/sh args)
    (catch Exception e {:exit 1 :out "" :err (str e)})))

(defn- trim1 [s] (some-> s str/trim))
(defn- safe-slurp [path]
  (try
    (slurp path)
    (catch Exception _ nil)))

(defn- now-hhmm []
  (let [t (java.time.LocalTime/now)]
    (format "%02d:%02d" (.getHour t) (.getMinute t))))

(defn- uptime-human []
  ;; Prefer command output over /proc (Android often restricts /proc/*)
  ;; "uptime -p" works on many systems; fallback to plain uptime.
  (let [r1 (sh* "sh" "-lc" "uptime -p 2>/dev/null || true")
        s1 (trim1 (:out r1))]
    (cond
      (seq s1) s1
      :else
      (let [r2 (sh* "sh" "-lc" "uptime 2>/dev/null || true")
            s2 (trim1 (:out r2))]
        (if (seq s2) s2 "n/a")))))

(defn- loadavg []
  (or (some-> (safe-slurp "/proc/loadavg") trim1 (str/split #"\s+") (->> (take 3)) (str/join " · "))
      "n/a"))

(defn- mem-human []
  ;; Prefer /proc/meminfo if readable, else fallback to `free` if available.
  (if-let [m (safe-slurp "/proc/meminfo")]
    (let [kv (into {}
                   (for [line (str/split-lines m)
                         :let [[k v] (str/split line #":\s*" 2)]
                         :when (and k v)]
                     [k (Long/parseLong (first (str/split (str/trim v) #"\s+")))]))
          total (get kv "MemTotal")
          avail (or (get kv "MemAvailable")
                    (when (and (get kv "MemFree") (get kv "Buffers") (get kv "Cached"))
                      (+ (get kv "MemFree") (get kv "Buffers") (get kv "Cached"))))]
      (if (and total avail)
        (let [used (- total avail)]
          (format "%.1f GiB / %.1f GiB"
                  (/ used 1048576.0) (/ total 1048576.0)))
        "n/a"))
    (let [r (sh* "sh" "-lc" "free -h 2>/dev/null | awk 'NR==2{print $3\" / \"$2}' || true")
          s (trim1 (:out r))]
      (if (seq s) s "n/a"))))

(defn- disk-human []
  ;; For Termux, "/" is sandbox; prefer df -h /storage/emulated if present.
  (let [r (sh* "sh" "-lc"
               "df -h /storage/emulated 2>/dev/null | awk 'NR==2{print $3\" / \"$2}' || df -h / 2>/dev/null | awk 'NR==2{print $3\" / \"$2}' || true")
        s (trim1 (:out r))]
    (if (seq s) s "n/a")))

(defn- battery-human []
  ;; Android paths vary
  (let [cap (or (some-> (safe-slurp "/sys/class/power_supply/battery/capacity") trim1)
                (some-> (safe-slurp "/sys/class/power_supply/BAT0/capacity") trim1))
        st  (or (some-> (safe-slurp "/sys/class/power_supply/battery/status") trim1)
                (some-> (safe-slurp "/sys/class/power_supply/BAT0/status") trim1))]
    (cond
      (and cap st) (str cap "% · " (str/lower-case st))
      cap          (str cap "%")
      :else        "n/a")))

(defn- port-open? [port]
  (let [r (sh* "sh" "-lc" (str "ss -lnt 2>/dev/null | grep -q ':" port " ' && echo up || echo down"))
        s (trim1 (:out r))]
    (if (seq s) s "down")))

(defn- git-rev []
  (let [r (sh* "sh" "-lc" "git rev-parse --short HEAD 2>/dev/null || true")
        s (trim1 (:out r))]
    (if (seq s) s "n/a")))

(defn- git-state []
  (let [r (sh* "sh" "-lc" "git status --porcelain 2>/dev/null | head -n1 || true")
        s (trim1 (:out r))]
    (if (seq s) "dirty" "clean")))

(defn snapshot
  "Return a map matching {{tokens}} used in index.org.
   Must never throw (API must always return)."
  []
  (try
    {:uptime (uptime-human)
     :load (loadavg)
     :mem (mem-human)
     :disk (disk-human)
     :battery (battery-human)

     :nrepl (port-open? 7888)
     :http  (port-open? 8080)
     :sshd  (port-open? 8022)

     :git_rev (git-rev)
     :git_state (git-state)

     :last_event "none"
     :time (now-hhmm)}
    (catch Exception e
      ;; worst-case, still return something
      {:uptime "n/a"
       :load "n/a"
       :mem "n/a"
       :disk "n/a"
       :battery "n/a"
       :nrepl "down"
       :http "down"
       :sshd "down"
       :git_rev "n/a"
       :git_state "n/a"
       :last_event (str "state error: " (.getMessage e))
       :time (now-hhmm)})))
