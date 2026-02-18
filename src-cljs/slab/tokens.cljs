;; src-cljs/slab/tokens.cljs
(ns slab.tokens
  (:require [slab.util :as u]))

(defn token-info
  "Extract token metadata from an interactive token element."
  [^js el]
  {:token     (u/dataset el "slabToken")     ;; e.g. \"status\"
   :token-id  (u/dataset el "slabTokenId")   ;; e.g. \"system--cpu::status\"
   :section   (u/dataset el "slabSection")   ;; optional, nice for logs
   :params    {}})
