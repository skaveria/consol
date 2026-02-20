;; CONTRACT: src/consol/status.clj
;; Purpose:
;; - Server-authoritative modeline status (QoL): battery, wifi strength, uptime.
;; - On Termux, uses termux-api commands when available.
;;
;; Non-goals:
;; - No SSID display (too long).
;; - Volume omitted for now (stream selection varies by device).

(ns consol.status
  (:require [clojure.java.shell :as sh]
            [clojure.data.json :as json]))

(defonce ^:private started-ms*
  (System/currentTimeMillis))

(defn- now-ms []
  (System/currentTimeMillis))

(defn- uptime-ms []
  (max 0 (- (now-ms) started-ms*)))

(defn- fmt-uptime [ms]
  (let [total-sec (long (/ ms 1000))
        total-min (long (/ total-sec 60))
        hours     (long (/ total-min 60))
        minutes   (long (mod total-min 60))]
    (if (pos? hours)
      (str hours "h" (format "%02d" minutes) "m")
      (str minutes "m"))))

(defn- run [& args]
  (let [{:keys [exit out]} (apply sh/sh args)]
    {:ok? (zero? exit)
     :out (or out "")}))

(defn- command-available? [cmd]
  (:ok? (run "sh" "-lc" (str "command -v " cmd " >/dev/null 2>&1"))))

(defn- read-json [s]
  (try
    (json/read-str (str s))
    (catch Exception _ nil)))

(defn- battery-text []
  (if-not (command-available? "termux-battery-status")
    "—"
    (let [{:keys [ok? out]} (run "termux-battery-status")
          m (when ok? (read-json out))
          pct (some-> (get m "percentage") str)]
      (if (seq pct) (str pct "%") "—"))))

(defn- wifi-rssi-text []
  (if-not (command-available? "termux-wifi-connectioninfo")
    "—"
    (let [{:keys [ok? out]} (run "termux-wifi-connectioninfo")
          m (when ok? (read-json out))
          rssi (or (get m "rssi") (get m "signal_level"))]
      (cond
        (number? rssi) (str rssi)
        (some? rssi)   (str rssi)
        :else          "—"))))

(defn snapshot
  "Return modeline status. Values are short strings."
  []
  {:node "consol"
   :battery (battery-text)
   :wifi (wifi-rssi-text)
   :uptime (fmt-uptime (uptime-ms))})
