(ns pixel-slab.state
  (:require [clojure.java.shell :as sh]
            [clojure.string :as str]))

(defn- sh* [& args]
  (try
    (apply sh/sh args)
    (catch Exception e {:exit 1 :out "" :err (str e)})))

(defn- trim1 [s] (some-> s str/trim))
(defn- first-line [s] (some-> s str/split-lines first trim1))

(defn- uptime-seconds []
  (when-let [u (first-line (slurp "/proc/uptime"))]
    (some-> u (str/split #"\s+") first Double/parseDouble long)))

(defn- fmt-uptime [secs]
  (let [m (quot secs 60)
        h (quot m 60)
        d (quot h 24)
        h (mod h 24)
        m (mod m 60)]
    (cond
      (>= d 1) (format "%dd %dh %dm" d h m)
      (>= h 1) (format "%dh %dm" h m)
      :else    (format "%dm" m))))

(defn- loadavg []
  (or (first-line (slurp "/proc/loadavg")) "n/a"))

(defn- meminfo []
  (let [m (slurp "/proc/meminfo")
        kv (into {}
                 (for [line (str/split-lines m)
                       :let [[k v] (str/split line #":\s*" 2)]
                       :when (and k v)]
                   [k (Long/parseLong (first (str/split (str/trim v) #"\s+")))]))
        total (get kv "MemTotal")
        avail (or (get kv "MemAvailable")
                  (when (and (get kv "MemFree") (get kv "Buffers") (get kv "Cached"))
                    (+ (get kv "MemFree") (get kv "Buffers") (get kv "Cached"))))]
    (when (and total avail)
      {:total-kb total :used-kb (- total avail)})))

(defn- fmt-bytes [bytes]
  (let [units ["B" "KiB" "MiB" "GiB" "TiB"]
        step 1024.0]
    (loop [b (double bytes) i 0]
      (if (or (< b step) (= i (dec (count units))))
        (format "%.1f %s" b (nth units i))
        (recur (/ b step) (inc i))))))

(defn- disk-root []
  (try
    (let [f (java.io.File. "/")
          total (.getTotalSpace f)
          free  (.getUsableSpace f)
          used  (- total free)]
      {:total total :used used})
    (catch Exception _ nil)))

(defn- battery []
  (let [cap (some-> (or (try (slurp "/sys/class/power_supply/battery/capacity") (catch Exception _ nil))
                        (try (slurp "/sys/class/power_supply/BAT0/capacity") (catch Exception _ nil)))
                    trim1)
        st  (some-> (or (try (slurp "/sys/class/power_supply/battery/status") (catch Exception _ nil))
                        (try (slurp "/sys/class/power_supply/BAT0/status") (catch Exception _ nil)))
                    trim1)]
    (cond
      (and cap st) (str cap "% · " (str/lower-case st))
      cap          (str cap "%")
      :else        "n/a")))

(defn- git-rev []
  (let [{:keys [out]} (sh* "sh" "-lc" "git rev-parse --short HEAD 2>/dev/null || true")
        s (trim1 out)]
    (if (seq s) s "n/a")))

(defn- git-state []
  (let [{:keys [out]} (sh* "sh" "-lc" "git status --porcelain 2>/dev/null | head -n1 || true")
        s (trim1 out)]
    (if (seq s) "dirty" "clean")))

(defn- now-hhmm []
  (let [t (java.time.LocalTime/now)]
    (format "%02d:%02d" (.getHour t) (.getMinute t))))

(defn- port-open? [port]
  (let [{:keys [out]} (sh* "sh" "-lc" (str "ss -lnt 2>/dev/null | grep -q ':" port " ' && echo up || echo down"))]
    (or (trim1 out) "down")))

(defn snapshot
  "Return a map matching {{tokens}} used in index.org"
  []
  (let [up (uptime-seconds)
        memm (meminfo)
        disk (disk-root)
        gitrev (git-rev)
        gitst (git-state)]
    {:uptime (if up (fmt-uptime up) "n/a")
     :load (loadavg)
     :mem (if memm
            (str (fmt-bytes (* 1024 (:used-kb memm))) " / " (fmt-bytes (* 1024 (:total-kb memm))))
            "n/a")
     :disk (if disk
             (str (fmt-bytes (:used disk)) " / " (fmt-bytes (:total disk)))
             "n/a")
     :battery (battery)

     :nrepl (port-open? 7888)
     :http  (port-open? 8080)
     :sshd  (port-open? 8022)

     :git_rev gitrev
     :git_state gitst
     :last_event "none"
     :time (now-hhmm)}))
