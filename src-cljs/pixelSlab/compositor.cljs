(ns pixelSlab.compositor
  (:require [clojure.string :as str]
            [cljs.reader :as reader]))

(def poll-ms 2500)

(def token-test (re-pattern "\\{\\{[a-zA-Z0-9_]+\\}\\}"))
(def token-repl (re-pattern "\\{\\{([a-zA-Z0-9_]+)\\}\\}"))

;; ------------------------------------------------------------
;; Defaults + runtime config (tabs.edn)
;; ------------------------------------------------------------

(def default-node "slab-01")

(def default-tabs
  [{:href "index.html"  :label "dashboard"}
   {:href "system.html" :label "system"}
   {:href "git.html"    :label "git"}
   {:href "event.html"  :label "event"}
   {:href "notes.html"  :label "notes"}
   {:href "about.html"  :label "about"}
   {:href "media.html"  :label "media"}])

(defonce chrome* (atom {:node default-node :tabs default-tabs}))

;; ------------------------------------------------------------
;; Small helpers
;; ------------------------------------------------------------

(defn basename [s]
  (let [s (or s "")
        s (first (str/split s #"[?#]"))
        parts (str/split s #"/")]
    (or (last parts) "index.html")))

(defn current-page-name []
  (let [proto (.-protocol js/location)
        p (.-pathname js/location)]
    (cond
      (= proto "file:") (basename p)
      (or (nil? p) (= p "/")) "index.html"
      :else (basename p))))

(defn- file-stem [filename]
  (-> filename
      (str/replace #"\.html$" "")
      (str/replace #"\.htm$"  "")))

(defn- page-label [page]
  (let [tabs (:tabs @chrome*)]
    (or (:label (first (filter #(= (:href %) page) tabs)))
        (file-stem page))))

(defn apply-template [tmpl state]
  (let [tmpl (str tmpl)]
    (if-not (re-find token-test tmpl)
      tmpl
      (str/replace tmpl token-repl
                   (fn [[_ k]]
                     (let [v (when state (aget state k))]
                       (if (or (nil? v) (undefined? v)) "" (str v))))))))

(defn classify-value [v]
  (let [t (-> (str v) str/lower-case)]
    (cond
      (or (str/includes? t "error")
          (str/includes? t "failed")
          (str/includes? t "offline")
          (str/includes? t "down")) "bad"
      (or (str/includes? t "warn")
          (str/includes? t "charging")
          (str/includes? t "dirty")
          (str/includes? t "throttl")
          (str/includes? t "hot")) "warn"
      :else "")))

(defn split-kv [line]
  (cond
    (str/includes? line "::")
    (let [[k & more] (str/split line #"::")]
      [(str/trim k) (str/trim (str/join "::" more))])

    :else
    (when-let [[_ k v] (re-matches #"^\s*([^\s]+)\s{2,}(.+)$" line)]
      [(str/trim k) (str/trim v)])))

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

(defn- mk-span [cls txt]
  (let [el (mk-el "span")]
    (set! (.-className el) cls)
    (set-text! el txt)
    el))

;; ------------------------------------------------------------
;; Static serving contract: ensure #content exists
;; ------------------------------------------------------------

(defn- ensure-content-root! []
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
;; Load tabs.edn (editable tabs config)
;; ------------------------------------------------------------

(defn fetch-tabs! []
  ;; file:// dev mode: keep defaults
  (if (= "file:" (.-protocol js/location))
    (js/Promise.resolve nil)
    (-> (js/fetch "/tabs.edn" (clj->js {:cache "no-store"}))
        (.then (fn [res] (if (.-ok res) (.text res) nil)))
        (.then (fn [txt]
                 (when (and txt (seq (str/trim txt)))
                   (let [m (reader/read-string txt)]
                     (reset! chrome*
                             {:node (or (:node m) default-node)
                              :tabs (or (:tabs m) default-tabs)})))))
        (.catch (fn [_] nil)))))

;; ------------------------------------------------------------
;; Chrome injection (title + tabs + postamble/modeline)
;; ------------------------------------------------------------

(defn- ensure-titlebar! []
  (let [content (ensure-content-root!)
        existing (qs "#content > h1.title")
        page (current-page-name)
        title (str (:node @chrome*) " · " (page-label page))]
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
        (doseq [{:keys [href label]} (:tabs @chrome*)]
          (let [a (mk-el "a")]
            (.setAttribute a "href" href)
            (set-text! a label)
            (append! existing a)))
        existing)
      ;; Create new and insert after title
      (let [p (mk-el "p" "slab-tabs")]
        (doseq [{:keys [href label]} (:tabs @chrome*)]
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

(defn- ensure-modeline! []
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
    (let [current (current-page-name)
          links (array-seq (.querySelectorAll bar "a"))]
      (doseq [a links] (.. a -classList (remove "active")))
      (when-let [match (first (filter (fn [a]
                                        (= (basename (.getAttribute a "href"))
                                           current))
                                      links))]
        (.. match -classList (add "active"))))))

;; ------------------------------------------------------------
;; Modeline rendering (structured segments)
;; ------------------------------------------------------------

(defn- state-val [state k fallback]
  (let [v (when state (aget state k))]
    (if (or (nil? v) (undefined? v) (= "" (str v)))
      fallback
      (str v))))

(defn- mk-seg [k v]
  (let [seg (mk-el "span" "seg")
        k-el (mk-span "k" k)
        v-el (mk-span "v" v)
        klass (classify-value v)]
    (when (seq klass)
      (.. v-el -classList (add klass)))
    (append! seg k-el)
    (append! seg v-el)
    seg))

(defn render-modeline! [state]
  (when-let [m (ensure-modeline!)]
    (clear-children! m)
    (let [nrepl   (state-val state "nrepl" "—")
          http    (state-val state "http" "—")
          time    (state-val state "time" "—")
          battery (state-val state "battery" "—")
          volume  (state-val state "volume" "—")
          sep     (fn [] (mk-span "sep" "·"))]
      (append! m (mk-span "node" "pixel-slab"))
      (doseq [x [(sep) (mk-seg ":nrepl" nrepl)
                 (sep) (mk-seg ":http" http)
                 (sep) (mk-seg ":time" time)
                 (sep) (mk-seg ":battery" battery)
                 (sep) (mk-seg ":volume" volume)]]
        (append! m x))))
  nil)

;; ------------------------------------------------------------
;; Pane mount/render
;; ------------------------------------------------------------

(defn mount-pane! [pre]
  (when-not (= "1" (.getAttribute pre "data-slab-mounted"))
    (.setAttribute pre "data-slab-mounted" "1")

    (let [raw (-> (.-textContent pre) (str/replace #"\r\n" "\n") (str/trimr))
          lines (->> (str/split raw #"\n") (map str/trimr) (into []))

          [pane-type lines] (if (and (seq lines) (str/starts-with? (first lines) "@"))
                              [(-> (subs (first lines) 1) str/trim str/lower-case)
                               (subvec lines 1)]
                              [nil lines])

          _ (when pane-type
              (.. pre -classList (add (str "pane-" pane-type))))

          non-empty (->> lines (filter #(seq (str/trim %))) (into []))
          kv-pairs (->> non-empty (map split-kv) (filter some?) (into []))
          is-kv (>= (count kv-pairs) (max 1 (js/Math.floor (* 0.7 (count non-empty)))))]

      (if-not is-kv
        (do
          (.setAttribute pre "data-pane-kind" "text")
          (.setAttribute pre "data-template" (str/join "\n" lines)))
        (do
          (.setAttribute pre "data-pane-kind" "kv")
          (.. pre -classList (add "pane-kv"))

          (let [kv (mk-el "div")]
            (set! (.-className kv) "kv")

            (doseq [[k v] kv-pairs]
              (let [row (mk-el "div" "row")
                    kdiv (mk-el "div" "k")
                    vdiv (mk-el "div" "v")]
                (set-text! kdiv k)
                (.setAttribute vdiv "data-template" v)
                (set-text! vdiv v)
                (append! row kdiv)
                (append! row vdiv)
                (append! kv row)))

            (set! (.-textContent pre) "")
            (append! pre kv)))))))

(defn mount-all-panes! []
  (doseq [pre (array-seq (.querySelectorAll js/document "pre.example"))]
    (mount-pane! pre)))

(defn render-panes! [state]
  (doseq [pre (array-seq (.querySelectorAll js/document "pre.example"))]
    (let [kind (.getAttribute pre "data-pane-kind")]
      (cond
        (= kind "text")
        (let [tmpl (.getAttribute pre "data-template")]
          (set! (.-textContent pre) (apply-template tmpl state)))

        (= kind "kv")
        (doseq [vdiv (array-seq (.querySelectorAll pre ".v"))]
          (let [tmpl (.getAttribute vdiv "data-template")
                rendered (apply-template tmpl state)
                klass (classify-value rendered)]
            (set! (.-textContent vdiv) rendered)
            (.. vdiv -classList (remove "warn"))
            (.. vdiv -classList (remove "bad"))
            (when (seq klass)
              (.. vdiv -classList (add klass)))))))))

(defn- set-css-var! [k v]
  (.. js/document -documentElement -style (setProperty k (str v))))

(defn- ->hue-kw [x]
  (cond
    (keyword? x) x
    (string? x)  (keyword (str/lower-case x))
    :else        nil))

(defn fetch-theme! []
  (let [proto (.-protocol js/location)]
    (cond
      (= proto "file:")
      (js/Promise.resolve nil)

      :else
      (-> (js/fetch "/theme.edn" (clj->js {:cache "no-store"}))
          (.then (fn [res] (if (.-ok res) (.text res) nil)))
          (.then (fn [txt]
                   (when (and txt (seq (str/trim txt)))
                     (let [m   (reader/read-string txt)
                           h   (:header m)
                           hue (or (->hue-kw (:hue h)) :green)
                           hdr-color (case hue
                                       :amber "#f6c177"
                                       :ice   "#a8d8ff"
                                       :white "#e8e3d6"
                                       :green "#a6e22e"
                                       "#a6e22e")]

                       ;; Critical: let CSS key off this immediately on future loads.
                       ;; (You’ll add html[data-hdr-hue="amber"] { --hdr-color: ... } in CSS.)
                       (.. js/document -documentElement
                           (setAttribute "data-hdr-hue" (name hue)))

                       ;; Also set the CSS var directly (applies on this load).
                       (set-css-var! "--hdr-color" hdr-color)

                       (when-let [w  (:text-weight h)]    (set-css-var! "--hdr-weight" w))
                       (when-let [g  (:glow h)]           (set-css-var! "--hdr-glow-a" g))
                       (when-let [g2 (:glow2 h)]          (set-css-var! "--hdr-glow-b" g2))
                       (when-let [cg (:cursor-glow h)]    (set-css-var! "--cursor-glow-a" cg))
                       (when-let [cg2 (:cursor-glow2 h)]  (set-css-var! "--cursor-glow-b" cg2))))))
          (.catch (fn [_] nil))))))

;; ------------------------------------------------------------
;; State fetch
;; ------------------------------------------------------------

(defn dev-state-override []
  (let [x (aget js/window "SLAB_STATE")]
    (when (and x (not (undefined? x)) (= "object" (js/typeof x))) x)))

(defn fetch-state! []
  (cond
    (dev-state-override)
    (js/Promise.resolve (dev-state-override))

    (= "file:" (.-protocol js/location))
    (js/Promise.resolve nil)

    :else
    (-> (js/fetch "/api/state" (clj->js {:cache "no-store"}))
        (.then (fn [res] (if (.-ok res) (.json res) nil)))
        (.catch (fn [_] nil)))))

;; ------------------------------------------------------------
;; Tick/init
;; ------------------------------------------------------------

(defn tick! []
  (ensure-chrome!)
  (highlight-active-tab!)
  (fetch-theme!)
  (mount-all-panes!)
  (-> (fetch-state!)
      (.then (fn [state]
               (when state (render-panes! state))
               (render-modeline! state)))))

(defn init []
  ;; Load tabs once; once loaded, re-run chrome/tabs highlight immediately.
  (-> (fetch-tabs!)
      (.then (fn [_]
               (ensure-chrome!)
               (highlight-active-tab!))))
  (tick!)
  (js/setInterval tick! poll-ms))
