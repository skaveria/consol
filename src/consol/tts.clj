(ns pixel-slab.tts
  (:require [clojure.java.shell :as sh]))

(defn speak!
  "Speak text using Termux:API (termux-tts-speak)."
  ([text] (speak! {} text))
  ([{:keys [rate pitch]} text]
   (let [args (cond-> ["termux-tts-speak"]
                rate  (conj "-r" (str rate))
                pitch (conj "-p" (str pitch))
                true  (conj (str text)))]
     (apply sh/sh args))))
