(defproject pixel-slab "0.1.0"
  :description "A kiosk-friendly Clojure slab node (Termux + CIDER + local dashboard + TTS)."
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [nrepl/nrepl "1.1.1"]
                 [org.clojure/data.json "2.5.0"]
                 [org.clojure/tools.namespace "1.4.4"]
                 [http-kit/http-kit "2.7.0"]]
  :plugins [[cider/cider-nrepl "0.57.0"]]
  :source-paths ["src"]
  :test-paths []
  :profiles {:dev {:source-paths ["dev"]}}
  :repl-options {:init-ns user})
