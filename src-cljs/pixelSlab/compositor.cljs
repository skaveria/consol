(ns pixelSlab.compositor
  (:require [clojure.string :as str]))

(def poll-ms 2500)

(defn basename [s]
  (let [s (or s "")
        s (first (str/split s #"[?#]"))
        parts (str/split s #"/")]
    (or (last parts) "index.html")))

(defn current-page-name []
  (if (= "file:" (.-protocol js/location))
    (basename (.-pathname js/location))
    (let [p (.-pathname js/location)]
      (if (or (nil? p) (= p "/")) "index.html" (basename p)))))

(defn highlight-active-tab! []
  (when-let [bar (.querySelector js/document "h1 + p")]
    (let [current (current-page-name)
          links (array-seq (.querySelectorAll bar "a"))]
      (doseq [a links] (.classList.remove (.-classList a) "active"))
      (when-let [match (first (filter (fn [a]
                                        (= (basename (.getAttribute a "href"))
                                           current))
                                      links))]
        (.classList.add (.-classList match) "active"))
      (when (and (= current "index.html") (seq links)
                 (nil? (first (filter (fn [a]
                                        (= (basename (.getAttribute a "href")) current))
                                      links))))
        (.classList.add (.-classList (first links)) "active")))))

(defn ensure-modeline! []
  (when-let [post (.getElementById js/document "postamble")]
    (when-not (.getElementById js/document "modeline")
      (let [d (.createElement js/document "div")]
        (set! (.-id d) "modeline")
        (set! (.-textContent d) "pixel-slab · nrepl:7888 · http:8080 · git:… · …")
        (.appendChild post d)))))

(defn tick! []
  (highlight-active-tab!)
  (ensure-modeline!))

(defn init []
  (tick!)
  (js/setInterval tick! poll-ms))
