(ns pixel-slab.core
  (:require [pixel-slab.web :as web]
            [pixel-slab.tts :as tts]))

(defn start!
  []
  (web/start! {:ip "127.0.0.1"
               :port 8080
               :node "slab-01"
               :role "pixel-slab"
               :nrepl-port 7888
               :refresh-seconds 10}))

(defn stop! [] (web/stop!))

(defn say!
  ([text] (tts/speak! text))
  ([opts text] (tts/speak! opts text)))
