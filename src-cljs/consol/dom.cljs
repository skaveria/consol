(ns consol.dom
  (:require [consol.render :as render]))

(defn- q1 [sel]
  (.querySelector js/document sel))

(defn ensure-output-slot!
  "Find output slot by token-id.
  If missing, create one right after the token element."
  [{:keys [token-id]} ^js token-el]
  (when token-id
    (or (q1 (str "[data-slab-slot=\"" token-id "\"]"))
        (when token-el
          (let [slot (.createElement js/document "div")]
            (set! (.-className slot) "slab-output-slot")
            (.setAttribute slot "data-slab-slot" token-id)
            (when-let [p (.-parentNode token-el)]
              (if-let [n (.-nextSibling token-el)]
                (.insertBefore p slot n)
                (.appendChild p slot)))
            slot)))))

(defn clear! [^js el]
  (when el
    (set! (.-innerHTML el) "")
    el))

(defn- example-box-node
  "Outer chrome box. Uses your existing .example styling."
  []
  (let [box (.createElement js/document "div")]
    (set! (.-className box) "example slab-output")
    box))

(defn- terminal-node
  "Inner terminal output."
  [{:keys [text loading?]}]
  (let [pre (.createElement js/document "pre")]
    (set! (.-className pre) "slab-terminal")
    (set! (.-textContent pre)
          (cond
            loading? "▌"
            :else (or text "")))
    pre))

(defn- media-node
  "Inner media container. Map .slab-media to your existing scaled media CSS."
  [rich-node]
  (let [wrap (.createElement js/document "div")]
    (set! (.-className wrap) "slab-media")
    (.appendChild wrap rich-node)
    wrap))

(defn show-loading! [slot]
  (when slot
    (clear! slot)
    (let [box (example-box-node)]
      (.appendChild box (terminal-node {:loading? true}))
      (.appendChild slot box))
    slot))

(defn show-text! [slot {:keys [body]}]
  (when slot
    (clear! slot)
    (let [box (example-box-node)]
      (.appendChild box (terminal-node {:text body}))
      (.appendChild slot box))
    slot))

(defn show-rich! [slot {:keys [body]}]
  (when slot
    (clear! slot)
    (let [box  (example-box-node)
          node (render/render-rich body)]
      (.appendChild box (media-node node))
      (.appendChild slot box))
    slot))

(defn show-error! [slot err]
  (when slot
    (clear! slot)
    (let [box (example-box-node)]
      (.appendChild box (terminal-node {:text (str err)}))
      (.appendChild slot box))
    slot))
