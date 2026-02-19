(ns consol.state
  (:require [clojure.string :as str]))

(defn- now-hhmm []
  (let [t (java.time.LocalTime/now)]
    (format "%02d:%02d" (.getHour t) (.getMinute t))))

(defn snapshot
  "Stub state for UI bring-up. No /proc reads, no shelling out, never throws."
  []
  {:uptime "3 days, 12 hours"
   :load "0.22 · 0.11 · 0.08"
   :mem "4.1 GiB / 11.2 GiB"
   :disk "6.2 GiB / 110 GiB"
   :battery "82% · charging"

   :nrepl "up"
   :http "up"
   :sshd "up"

   :git_rev "a1b2c3"
   :git_state "clean"

   :last_event "none"
   :time (now-hhmm)})
