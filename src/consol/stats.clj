(ns consol.stats
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.java.shell :as sh]))

(defn- slurp-safe [path]
  (try (slurp path)
       (catch Exception _ nil)))

(defn- first-line [s]
  (some-> s str/split-lines first))

(defn- trim-or [s fallback]
  (let [s (some-> s str/trim)]
    (if (seq s) s fallback)))

(defn- now-hhmm []
  (let [t (java.time.LocalTime/now)]
    (format "%02d:%02d" (.getHour t) (.getMinute t))))

(defn- uptime-seconds []
  (when-let [u (slurp-safe "/proc/uptime")]
    (some-> u str/trim (str/split #"\s+") first Double/parseDouble long)))

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

(defn- kernel []
  (trim-or (first-line (slurp-safe "/proc/sys/kernel/osrelease")) "unknown"))

(defn- android-version []
  ;; Termux usually has getprop available
  (try
    (let [r (sh/sh "getprop" "ro.build.version.release")
          s (str/trim (:out r))]
      (if (seq s) s "unknown"))
    (catch Exception _ "unknown")))

(defn- device-model []
  (try
    (let [r (sh/sh "getprop" "ro.product.model")
          s (str/trim (:out r))]
      (if (seq s) s "unknown"))
    (catch Exception _ "unknown")))

(defn- cpu-model []
  (let [c (slurp-safe "/proc/cpuinfo")
        lines (when c (str/split-lines c))]
    (or (some->> lines
                 (keep #(when (re-find #"model name\s*:" %) %))
                 first
                 (str/split #":\s*" 2)
                 second
                 str/trim)
        (some->> lines
                 (keep #(when (re-find #"Hardware\s*:" %) %))
                 first
                 (str/split #":\s*" 2)
                 second
                 str/trim)
        "unknown")))

(defn- loadavg []
  (trim-or (first-line (slurp-safe "/proc/loadavg")) "unknown"))

(defn- meminfo []
  (let [m (slurp-safe "/proc/meminfo")
        kv (when m
             (into {}
                   (for [line (str/split-lines m)
                         :let [[k v] (str/split line #":\s*" 2)]
                         :when (and k v)]
                     [k (Long/parseLong (first (str/split (str/trim v) #"\s+")))])))
        total (get kv "MemTotal")
        avail (or (get kv "MemAvailable")
                  (when (and (get kv "MemFree") (get kv "Buffers") (get kv "Cached"))
                    (+ (get kv "MemFree") (get kv "Buffers") (get kv "Cached"))))]
    (when (and total avail)
      {:total-kb total
       :used-kb  (- total avail)})))

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

(defn- battery-percent []
  ;; Pixel/Android devices typically expose this
  (or (some-> (slurp-safe "/sys/class/power_supply/battery/capacity") str/trim)
      (some-> (slurp-safe "/sys/class/power_supply/BAT0/capacity") str/trim)
      "n/a"))

(defn- battery-status []
  (or (some-> (slurp-safe "/sys/class/power_supply/battery/status") str/trim)
      (some-> (slurp-safe "/sys/class/power_supply/BAT0/status") str/trim)
      "n/a"))

(defn- ip-addr []
  (try
    ;; Prefer ip route get (gives the current primary IP)
    (let [r (sh/sh "sh" "-lc" "ip route get 1.1.1.1 2>/dev/null | awk '{for(i=1;i<=NF;i++) if($i==\"src\") print $(i+1)}' | head -n1")
          s (str/trim (:out r))]
      (if (seq s) s "n/a"))
    (catch Exception _ "n/a")))

(defn- wifi-ssid []
  ;; Works on many Android builds; may return <unknown ssid> if restricted
  (try
    (let [r (sh/sh "sh" "-lc" "cmd wifi status 2>/dev/null | grep -E 'SSID|WifiInfo' | head -n1")]
      (let [s (str/trim (:out r))]
        (if (seq s) s "n/a")))
    (catch Exception _ "n/a")))

(defn- java-version []
  (try
    ;; java -version prints to stderr usually
    (let [r (sh/sh "sh" "-lc" "java -version 2>&1 | head -n1")]
      (trim-or (:out r) "unknown"))
    (catch Exception _ "unknown")))

(defn- git-rev [repo-dir]
  (try
    (let [r (sh/sh "sh" "-lc" (str "cd " (pr-str repo-dir) " && git rev-parse --short HEAD 2>/dev/null || true"))
          s (str/trim (:out r))]
      (if (seq s) s "n/a"))
    (catch Exception _ "n/a")))

(defn- git-dirty? [repo-dir]
  (try
    (let [r (sh/sh "sh" "-lc" (str "cd " (pr-str repo-dir) " && git status --porcelain 2>/dev/null | head -n1 || true"))
          s (str/trim (:out r))]
      (if (seq s) "dirty" "clean"))
    (catch Exception _ "n/a")))

(defn snapshot
  "Return a map of current system stats as strings for templating."
  [{:keys [repo-dir node role nrepl-port http-port refresh-seconds ip-override]
    :or {repo-dir (System/getProperty "user.dir")
         node "(cons 'ol)-01"
         role "pixel-slab"
         nrepl-port 7888
         http-port 8080
         refresh-seconds 10}}]
  (let [up-secs (uptime-seconds)
        mem (meminfo)
        disk (disk-root)
        ip (or ip-override (ip-addr))]
    {:node node
     :role role
     :time (now-hhmm)
     :ip ip
     :ssid (wifi-ssid)

     :android (android-version)
     :model (device-model)
     :kernel (kernel)
     :cpu (cpu-model)
     :load (loadavg)
     :uptime (if up-secs (fmt-uptime up-secs) "unknown")

     :mem (if mem
            (str (fmt-bytes (* 1024 (:used-kb mem))) " / " (fmt-bytes (* 1024 (:total-kb mem))))
            "unknown")
     :disk (if disk
             (str (fmt-bytes (:used disk)) " / " (fmt-bytes (:total disk)))
             "unknown")

     :battery (str (battery-percent) "%")
     :battery_status (battery-status)

     :java (java-version)
     :nrepl_port (str nrepl-port)
     :http_port (str http-port)
     :refresh_seconds (str refresh-seconds)

     :git_rev (git-rev repo-dir)
     :git_state (git-dirty? repo-dir)}))
