(ns slab.chrome
  (:require [slab.config :as cfg]
            [clojure.string :as str]))

;; ------------------------------------------------------------
;; DOM helpers
;; ------------------------------------------------------------

(defn- by-id [id] (.getElementById js/document id))
(defn- qs [sel] (.querySelector js/document sel))

(defn- mk-el
  ([tag] (.createElement js/document tag))
  ([tag class-name]
   (let [e (.createElement js/document tag)]
     (set! (.-className e) class-name)
     e)))

(defn- set-text! [el s]
  (set! (.-textContent el) (str s))
  el)

(defn- clear-children! [el]
  (set! (.-innerHTML el) "")
  el)

(defn- append! [parent child]
  (.appendChild parent child)
  parent)

(defn- insert-after! [new-node ref-node]
  (when-let [p (.-parentNode ref-node)]
    (if-let [n (.-nextSibling ref-node)]
      (.insertBefore p new-node n)
      (.appendChild p new-node)))
  new-node)

;; ------------------------------------------------------------
;; Static serving contract: ensure #content exists
;; ------------------------------------------------------------

(defn ensure-content-root! []
  ;; Org export gives #content; if missing, we create it and wrap everything except #postamble.
  (or (by-id "content")
      (let [content (mk-el "div" "content")
            body (.-body js/document)
            post (by-id "postamble")
            kids (array-seq (.-childNodes body))]
        (set! (.-id content) "content")
        ;; Move children into #content, skipping postamble if present.
        (doseq [k kids]
          (when (and k (not= (.-id k) "postamble"))
            (.appendChild content k)))
        ;; Insert content before postamble if it exists, else append.
        (if post
          (.insertBefore body content post)
          (.appendChild body content))
        content)))

;; ------------------------------------------------------------
;; Chrome injection (title + tabs + postamble/modeline)
;; ------------------------------------------------------------

(defn- ensure-titlebar! []
  (let [content (ensure-content-root!)
        existing (qs "#content > h1.title")
        page (cfg/current-page-name)
        title (str (:node @cfg/chrome*) " · " (cfg/page-label page))]
    (if existing
      (do (set-text! existing title) existing)
      (let [h (mk-el "h1" "title")]
        (set-text! h title)
        ;; Insert at top (element-aware)
        (if-let [first-el (.-firstElementChild content)]
          (.insertBefore content h first-el)
          (.appendChild content h))
        h))))

(defn- ensure-tabsbar! []
  (let [content (ensure-content-root!)
        existing (qs "#content > p.slab-tabs")
        title (or (qs "#content > h1.title") (ensure-titlebar!))]
    (if existing
      ;; Update in-place to match current tabs config
      (do
        (clear-children! existing)
        (doseq [{:keys [href label]} (:tabs @cfg/chrome*)]
          (let [a (mk-el "a")]
            (.setAttribute a "href" href)
            (set-text! a label)
            (append! existing a)))
        existing)
      ;; Create new and insert after title
      (let [p (mk-el "p" "slab-tabs")]
        (doseq [{:keys [href label]} (:tabs @cfg/chrome*)]
          (let [a (mk-el "a")]
            (.setAttribute a "href" href)
            (set-text! a label)
            (append! p a)))
        (insert-after! p title)
        p))))

(defn- ensure-postamble! []
  (or (by-id "postamble")
      (let [p (mk-el "div" "status")]
        (set! (.-id p) "postamble")
        (.appendChild (.-body js/document) p)
        p)))

(defn ensure-modeline! []
  (let [post (ensure-postamble!)
        existing (by-id "modeline")]
    (or existing
        (let [m (mk-el "div")]
          (set! (.-id m) "modeline")
          (.appendChild post m)
          m))))

(defn ensure-chrome! []
  ;; idempotent
  (ensure-titlebar!)
  (ensure-tabsbar!)
  (ensure-modeline!)
  nil)

;; ------------------------------------------------------------
;; Active tab highlight
;; ------------------------------------------------------------

(defn highlight-active-tab! []
  (when-let [bar (qs "#content > p.slab-tabs")]
    (let [current (cfg/current-page-name)
          links (array-seq (.querySelectorAll bar "a"))]
      (doseq [a links] (.. a -classList (remove "active")))
      (when-let [match (first (filter (fn [a]
                                        (= (cfg/basename (.getAttribute a "href"))
                                           current))
                                      links))]
        (.. match -classList (add "active"))))))
