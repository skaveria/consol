;; src-cljs/slab/dom.cljs
(ns slab.dom
  (:require [slab.render :as render]))

(defn- q1 [sel]
  (.querySelector js/document sel))

(defn ensure-output-slot!
  "Find the output slot for a token-id. Returns the slot element or nil.
  Expected markup: <div data-slab-slot=\"TOKEN-ID\"></div>"
  [{:keys [token-id]}]
  (when token-id
    (q1 (str "[data-slab-slot=\"" token-id "\"]"))))

(defn clear! [^js el]
  (when el
    (set! (.-innerHTML el) "")
    el))

(defn terminal-block-node
  "Create terminal-style output block node.
  NOTE: map these class names to your existing CSS example container styles."
  [{:keys [text loading?]}]
  (let [pre (.createElement js/document "pre")]
    (set! (.-className pre) "slab-terminal")
    (set! (.-textContent pre)
          (cond
            loading? "▌"
            :else (or text "")))
    pre))

(defn media-block-node
  "Create media-scaled container node and append rich content."
  [rich-node]
  (let [wrap (.createElement js/document "div")]
    (set! (.-className wrap) "slab-media")
    (.appendChild wrap rich-node)
    wrap))

(defn show-loading! [slot]
  (when slot
    (clear! slot)
    (.appendChild slot (terminal-block-node {:loading? true}))
    slot))

(defn show-text! [slot {:keys [body]}]
  (when slot
    (clear! slot)
    (.appendChild slot (terminal-block-node {:text body}))
    slot))

(defn show-rich! [slot {:keys [body]}]
  (when slot
    (clear! slot)
    (let [node (render/render-rich body)]
      (.appendChild slot (media-block-node node)))
    slot))

(defn show-error!
  "Raw, honest error output."
  [slot err]
  (when slot
    (clear! slot)
    (.appendChild slot (terminal-block-node {:text (str err)}))
    slot))
