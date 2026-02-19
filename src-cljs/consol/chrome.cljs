;; CONTRACT: src-cljs/consol/chrome.cljs
;; Purpose:
;; - Inject and maintain a minimal chrome layer on Org-exported pages:
;;   - Title bar: page name + blinking cursor (left), current time (right)
;;   - Tabs bar: navigation links from tabs configuration
;;   - Modeline hook: reserved footer container for future use
;; - Provide active-tab highlighting.
;;
;; Boundaries:
;; - This namespace owns DOM injection only.
;; - It does not load configuration files; it reads config via consol.config.
;; - It does not manage application state beyond a small internal clock timer.

(ns consol.chrome
  (:require [consol.config :as cfg]
            [clojure.string :as str]))

;; ------------------------------------------------------------
;; DOM helpers
;; ------------------------------------------------------------

(defn- get-element-by-id [id]
  (.getElementById js/document id))

(defn- query-selector [selector]
  (.querySelector js/document selector))

(defn- query-selector-all [selector]
  (array-seq (.querySelectorAll js/document selector)))

(defn- create-element
  ([tag-name]
   (.createElement js/document tag-name))
  ([tag-name class-name]
   (let [element (.createElement js/document tag-name)]
     (set! (.-className element) class-name)
     element)))

(defn- set-text-content! [element text]
  (set! (.-textContent element) (str text))
  element)

(defn- clear-element-children! [element]
  (set! (.-innerHTML element) "")
  element)

(defn- append-child! [parent child]
  (.appendChild parent child)
  parent)

(defn- insert-after! [new-node reference-node]
  (when-let [parent (.-parentNode reference-node)]
    (if-let [next (.-nextSibling reference-node)]
      (.insertBefore parent new-node next)
      (.appendChild parent new-node)))
  new-node)

;; ------------------------------------------------------------
;; Content root management
;; ------------------------------------------------------------

(defn ensure-content-root!
  "Ensure the page has a #content root element and return it.

  Org export typically provides #content. If it is missing, this function
  creates it and moves all body children (except #postamble) into it."
  []
  (or (get-element-by-id "content")
      (let [content (create-element "div" "content")
            body (.-body js/document)
            postamble (get-element-by-id "postamble")
            body-children (array-seq (.-childNodes body))]
        (set! (.-id content) "content")
        (doseq [child body-children]
          (when (and child (not= (.-id child) "postamble"))
            (.appendChild content child)))
        (if postamble
          (.insertBefore body content postamble)
          (.appendChild body content))
        content)))

;; ------------------------------------------------------------
;; Time formatting
;; ------------------------------------------------------------

(defn- pad-two-digits [n]
  (let [s (str n)]
    (if (= 1 (count s)) (str "0" s) s)))

(defn- current-time-hhmm
  "Return local time as HH:MM (24-hour)."
  []
  (let [d (js/Date.)]
    (str (pad-two-digits (.getHours d))
         ":"
         (pad-two-digits (.getMinutes d)))))

;; ------------------------------------------------------------
;; Title bar
;; ------------------------------------------------------------

(defonce ^:private titlebar-clock-interval-id* (atom nil))

(defn- current-page-title-text
  "Return the page title text used in the title bar.
  This is intended to reflect the current file/page name."
  []
  (let [page-name (cfg/current-page-name)
        label (cfg/page-label page-name)
        label-text (str/trim (str label))]
    (if (seq label-text) label-text page-name)))

(defn- ensure-titlebar-element!
  "Ensure an h1.title exists as the first element within #content and return it."
  []
  (let [content (ensure-content-root!)
        existing (query-selector "#content > h1.title")]
    (if existing
      existing
      (let [titlebar (create-element "h1" "title")]
        (if-let [first-element (.-firstElementChild content)]
          (.insertBefore content titlebar first-element)
          (.appendChild content titlebar))
        titlebar))))

(defonce ^:private titlebar-clock-interval-id* (atom nil))

(defn- pad-two-digits [n]
  (let [s (str n)]
    (if (= 1 (count s)) (str "0" s) s)))

(defn- current-time-hhmm []
  (let [d (js/Date.)]
    (str (pad-two-digits (.getHours d))
         ":"
         (pad-two-digits (.getMinutes d)))))

(defn- current-page-title-text []
  (let [page-name (cfg/current-page-name)
        label (cfg/page-label page-name)
        label-text (str/trim (str label))]
    (if (seq label-text) label-text page-name)))

(defn- ensure-titlebar-element! []
  (let [content (ensure-content-root!)
        existing (query-selector "#content > h1.title")]
    (if existing
      existing
      (let [titlebar (create-element "h1" "title")]
        (if-let [first-element (.-firstElementChild content)]
          (.insertBefore content titlebar first-element)
          (.appendChild content titlebar))
        titlebar))))

(defn- update-titlebar-time! []
  (when-let [time-element (query-selector "#content > h1.title .title-right")]
    (set-text-content! time-element (current-time-hhmm))))

(defn- ensure-titlebar-clock! []
  (update-titlebar-time!)
  (when-not @titlebar-clock-interval-id*
    (reset! titlebar-clock-interval-id*
            (js/setInterval update-titlebar-time! 60000))))

(defn- render-titlebar!
  "Render titlebar:
  - left group: page name segment + blinking indicator at the join
  - right segment: current time"
  []
  (let [titlebar (ensure-titlebar-element!)
        left-group (create-element "span" "title-left-group")

        left-segment (create-element "span" "title-left")
        title-text (create-element "span" "title-text")

        indicator (create-element "span" "title-indicator")

        right-segment (create-element "span" "title-right")]
    (clear-element-children! titlebar)

    (set-text-content! title-text (current-page-title-text))
    (set-text-content! indicator "") ;; visual only
    (set-text-content! right-segment (current-time-hhmm))

    (append-child! left-segment title-text)
    (append-child! left-group left-segment)
    (append-child! left-group indicator)

    (append-child! titlebar left-group)
    (append-child! titlebar right-segment)

    (ensure-titlebar-clock!)
    titlebar))


(defn- update-titlebar-time!
  "Update the time shown in the title bar, if the element exists."
  []
  (when-let [time-element (query-selector "#content > h1.title .title-right")]
    (set-text-content! time-element (current-time-hhmm))))

(defn- ensure-titlebar-clock!
  "Ensure the title bar time stays current.
  Updates once per minute."
  []
  (update-titlebar-time!)
  (when-not @titlebar-clock-interval-id*
    (reset! titlebar-clock-interval-id*
            (js/setInterval update-titlebar-time! 60000))))

;; ------------------------------------------------------------
;; Tabs bar
;; ------------------------------------------------------------

(defn- create-tab-link-element [{:keys [href label]}]
  (let [link (create-element "a")]
    (.setAttribute link "href" href)
    (set-text-content! link label)
    link))

(defn- ensure-tabsbar-element!
  "Ensure the tabs bar element exists directly under #content and return it.
  The element is a <p> with class 'slab-tabs' (legacy class name retained)."
  []
  (let [content (ensure-content-root!)
        existing (query-selector "#content > p.slab-tabs")
        titlebar (or (query-selector "#content > h1.title") (ensure-titlebar-element!))]
    (if existing
      existing
      (let [tabsbar (create-element "p" "slab-tabs")]
        (insert-after! tabsbar titlebar)
        tabsbar))))

(defn- render-tabsbar!
  "Render tabs into the tabs bar from the current chrome config."
  []
  (let [tabsbar (ensure-tabsbar-element!)
        tabs (:tabs @cfg/chrome*)]
    (clear-element-children! tabsbar)
    (doseq [tab tabs]
      (append-child! tabsbar (create-tab-link-element tab)))
    tabsbar))

;; ------------------------------------------------------------
;; Postamble + modeline hook
;; ------------------------------------------------------------

(defn- ensure-postamble-element!
  "Ensure #postamble exists and return it.
  Org export typically provides this. If missing, it is created."
  []
  (or (get-element-by-id "postamble")
      (let [postamble (create-element "div" "status")]
        (set! (.-id postamble) "postamble")
        (.appendChild (.-body js/document) postamble)
        postamble)))

(defn ensure-modeline!
  "Ensure a #modeline element exists inside #postamble and return it.
  The modeline is reserved for future footer/status information."
  []
  (let [postamble (ensure-postamble-element!)
        existing (get-element-by-id "modeline")]
    (or existing
        (let [modeline (create-element "div")]
          (set! (.-id modeline) "modeline")
          (.appendChild postamble modeline)
          modeline))))

;; ------------------------------------------------------------
;; Active tab highlight
;; ------------------------------------------------------------

(defn highlight-active-tab!
  "Mark the current page as active in the tabs bar, if present."
  []
  (when-let [tabsbar (query-selector "#content > p.slab-tabs")]
    (let [current (cfg/current-page-name)
          links (array-seq (.querySelectorAll tabsbar "a"))]
      (doseq [link links]
        (.. link -classList (remove "active")))
      (when-let [match (first (filter (fn [link]
                                        (= (cfg/basename (.getAttribute link "href"))
                                           current))
                                      links))]
        (.. match -classList (add "active"))))))

;; ------------------------------------------------------------
;; Public entry
;; ------------------------------------------------------------

(defn ensure-chrome!
  "Ensure the chrome is present and up-to-date.
  Safe to call repeatedly."
  []
  (render-titlebar!)
  (ensure-titlebar-clock!)
  (render-tabsbar!)
  (ensure-modeline!)
  nil)
