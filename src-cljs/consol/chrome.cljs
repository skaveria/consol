;; CONTRACT: src-cljs/consol/chrome.cljs
;; Purpose:
;; - Inject minimal chrome into Org-exported pages:
;;   - Titlebar: page name (left), battery + time (right, powerline segments)
;;   - Tabsbar: navigation links
;;   - Modeline container: footer hook
;; - Provide setters for chrome fields that are fed by dynamic data.
;;
;; Non-goals:
;; - No app state ownership.
;; - No network calls.

(ns consol.chrome
  (:require [consol.config :as cfg]
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
;; Content root management
;; ------------------------------------------------------------

(defn ensure-content-root!
  "Ensure the page has a #content root and return it."
  []
  (or (by-id "content")
      (let [content (mk-el "div" "content")
            body (.-body js/document)
            post (by-id "postamble")
            kids (array-seq (.-childNodes body))]
        (set! (.-id content) "content")
        (doseq [k kids]
          (when (and k (not= (.-id k) "postamble"))
            (.appendChild content k)))
        (if post
          (.insertBefore body content post)
          (.appendChild body content))
        content)))

;; ------------------------------------------------------------
;; Time
;; ------------------------------------------------------------

(defonce ^:private clock-interval-id* (atom nil))

(defn- pad2 [n]
  (let [s (str n)]
    (if (= 1 (count s)) (str "0" s) s)))

(defn- time-hhmm []
  (let [d (js/Date.)]
    (str (pad2 (.getHours d)) ":" (pad2 (.getMinutes d)))))

(defn- set-titlebar-time! []
  (when-let [el (qs "#content > h1.title .title-time")]
    (set-text! el (time-hhmm))))

(defn- ensure-clock! []
  (set-titlebar-time!)
  (when-not @clock-interval-id*
    (reset! clock-interval-id*
            (js/setInterval set-titlebar-time! 60000))))

;; ------------------------------------------------------------
;; Titlebar
;; ------------------------------------------------------------

(defn- current-page-title-text []
  (let [page (cfg/current-page-name)
        label (cfg/page-label page)
        label-text (str/trim (str label))]
    (if (seq label-text) label-text page)))

(defn- ensure-titlebar! []
  (let [content (ensure-content-root!)
        existing (qs "#content > h1.title")]
    (if existing
      existing
      (let [h (mk-el "h1" "title")]
        (if-let [first-el (.-firstElementChild content)]
          (.insertBefore content h first-el)
          (.appendChild content h))
        h))))

(defn- render-titlebar! []
  (let [h (ensure-titlebar!)
        left-group (mk-el "span" "title-left-group")
        left-seg (mk-el "span" "title-left")
        title-text (mk-el "span" "title-text")
        right-group (mk-el "span" "title-right-group")
        battery-seg (mk-el "span" "title-battery")
        time-seg (mk-el "span" "title-time")]
    (clear-children! h)

    (set-text! title-text (current-page-title-text))
    (append! left-seg title-text)
    (append! left-group left-seg)

    ;; right powerline: battery -> time
    (set-text! battery-seg "—")
    (set-text! time-seg (time-hhmm))
    (append! right-group battery-seg)
    (append! right-group time-seg)

    (append! h left-group)
    (append! h right-group)

    (ensure-clock!)
    h))

(defn set-titlebar-battery!
  "Set the battery text in the titlebar (e.g. \"82%\"), if present."
  [s]
  (when-let [el (qs "#content > h1.title .title-battery")]
    (set-text! el (or s "—")))
  nil)

;; ------------------------------------------------------------
;; Tabs bar
;; ------------------------------------------------------------

(defn- ensure-tabsbar! []
  (let [content (ensure-content-root!)
        existing (qs "#content > p.slab-tabs")
        title (or (qs "#content > h1.title") (ensure-titlebar!))]
    (if existing
      existing
      (let [p (mk-el "p" "slab-tabs")]
        (insert-after! p title)
        p))))

(defn- render-tabsbar! []
  (let [bar (ensure-tabsbar!)]
    (clear-children! bar)
    (doseq [{:keys [href label]} (:tabs @cfg/chrome*)]
      (let [a (mk-el "a")]
        (.setAttribute a "href" href)
        (set-text! a label)
        (append! bar a)))
    bar))

;; ------------------------------------------------------------
;; Postamble + modeline hook
;; ------------------------------------------------------------

(defn- ensure-postamble! []
  (or (by-id "postamble")
      (let [p (mk-el "div" "status")]
        (set! (.-id p) "postamble")
        (.appendChild (.-body js/document) p)
        p)))

(defn ensure-modeline!
  "Ensure #modeline exists and return it."
  []
  (let [post (ensure-postamble!)
        existing (by-id "modeline")]
    (or existing
        (let [m (mk-el "div")]
          (set! (.-id m) "modeline")
          (.appendChild post m)
          m))))

(defn ensure-chrome!
  "Ensure chrome elements exist and are updated. Safe to call repeatedly."
  []
  (render-titlebar!)
  (render-tabsbar!)
  (ensure-modeline!)
  nil)

;; ------------------------------------------------------------
;; Active tab highlight
;; ------------------------------------------------------------

(defn highlight-active-tab!
  "Highlight the active tab link based on current page."
  []
  (when-let [bar (qs "#content > p.slab-tabs")]
    (let [current (cfg/current-page-name)
          links (array-seq (.querySelectorAll bar "a"))]
      (doseq [a links] (.. a -classList (remove "active")))
      (when-let [match (first (filter (fn [a]
                                        (= (cfg/basename (.getAttribute a "href"))
                                           current))
                                      links))]
        (.. match -classList (add "active"))))))
