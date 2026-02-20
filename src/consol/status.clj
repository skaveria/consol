;; CONTRACT: src/consol/status.clj
;; Purpose:
;; - Provide a small, server-authoritative status snapshot for the modeline.
;; - Operator-focused (QoL): battery, volume, network, uptime.
;; - On Termux, uses termux-api commands when available.
;;
;; Non-goals:
;; - No auth.
;; - No heavy probing.
;; - No hard dependency on termux-api (fallback to "—").

(ns consol.status
  (:require [clojure.java.shell :as sh]
            [clojure.string :as str]
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

(defn- run
  "Run a command. Returns {:ok? .. :out ..}."
  [& args]
  (let [{:keys [exit out]} (apply sh/sh args)]
    {:ok? (zero? exit)
     :out (or out "")}))

(defn- command-available?
  "Return true if CMD exists on PATH."
  [cmd]
  (:ok? (run "sh" "-lc" (str "command -v " cmd " >/dev/null 2>&1"))))

(defn- read-json
  "Parse JSON string into a Clojure map (string keys). Returns nil on failure."
  [s]
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

(defn- volume-text []
  (if-not (command-available? "termux-volume")
    "—"
    (let [{:keys [ok? out]} (run "termux-volume")
          m (when ok? (read-json out))
          ;; termux-volume returns {"music":..,"ring":..,"notification":..,"alarm":..,"call":..,"system":..}
          ;; pick "music" as a reasonable primary volume
          v (some-> (get m "music") str)]
      (if (seq v) (str v "%") "—"))))

(defn- net-text []
  (cond
    (command-available? "termux-wifi-connectioninfo")
    (let [{:keys [ok? out]} (run "termux-wifi-connectioninfo")
          m (when ok? (read-json out))
          ssid (some-> (get m "ssid") str/trim)]
      (if (seq ssid) ssid "offline"))

    :else
    "—"))

(defn snapshot
  "Return modeline status. Values are short strings."
  []
  {:node "consol"
   :battery (battery-text)
   :volume (volume-text)
   :net (net-text)
   :uptime (fmt-uptime (uptime-ms))})
