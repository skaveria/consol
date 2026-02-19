goog.provide('pixelSlab.compositor');
pixelSlab.compositor.poll_ms = (2500);
pixelSlab.compositor.token_test = cljs.core.re_pattern("\\{\\{[a-zA-Z0-9_]+\\}\\}");
pixelSlab.compositor.token_repl = cljs.core.re_pattern("\\{\\{([a-zA-Z0-9_]+)\\}\\}");
pixelSlab.compositor.basename = (function pixelSlab$compositor$basename(s){
var s__$1 = (function (){var or__5002__auto__ = s;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
var s__$2 = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/[?#]/));
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$2,/\//);
var or__5002__auto__ = cljs.core.last(parts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "index.html";
}
});
pixelSlab.compositor.current_page_name = (function pixelSlab$compositor$current_page_name(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file:",location.protocol)){
return pixelSlab.compositor.basename(location.pathname);
} else {
var p = location.pathname;
if((((p == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"/")))){
return "index.html";
} else {
return pixelSlab.compositor.basename(p);
}
}
});
pixelSlab.compositor.apply_template = (function pixelSlab$compositor$apply_template(tmpl,state){
var tmpl__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tmpl);
if(cljs.core.not(cljs.core.re_find(pixelSlab.compositor.token_test,tmpl__$1))){
return tmpl__$1;
} else {
return clojure.string.replace(tmpl__$1,pixelSlab.compositor.token_repl,(function (p__7571){
var vec__7572 = p__7571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7572,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7572,(1),null);
var v = (cljs.core.truth_(state)?(state[k]):null);
if((((v == null)) || ((void 0 === v)))){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
}));
}
});
pixelSlab.compositor.classify_value = (function pixelSlab$compositor$classify_value(v){
var t = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(((clojure.string.includes_QMARK_(t,"error")) || (((clojure.string.includes_QMARK_(t,"failed")) || (((clojure.string.includes_QMARK_(t,"offline")) || (clojure.string.includes_QMARK_(t,"down")))))))){
return "bad";
} else {
if(((clojure.string.includes_QMARK_(t,"warn")) || (((clojure.string.includes_QMARK_(t,"charging")) || (((clojure.string.includes_QMARK_(t,"dirty")) || (((clojure.string.includes_QMARK_(t,"throttl")) || (clojure.string.includes_QMARK_(t,"hot")))))))))){
return "warn";
} else {
return "";

}
}
});
pixelSlab.compositor.split_kv = (function pixelSlab$compositor$split_kv(line){
if(clojure.string.includes_QMARK_(line,"::")){
var vec__7578 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/::/);
var seq__7579 = cljs.core.seq(vec__7578);
var first__7580 = cljs.core.first(seq__7579);
var seq__7579__$1 = cljs.core.next(seq__7579);
var k = first__7580;
var more = seq__7579__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2("::",more))], null);
} else {
var temp__5804__auto__ = cljs.core.re_matches(/^\s*([^\s]+)\s{2,}(.+)$/,line);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__7581 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7581,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7581,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7581,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);
} else {
return null;
}

}
});
pixelSlab.compositor.append_BANG_ = (function pixelSlab$compositor$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
pixelSlab.compositor.mk_span = (function pixelSlab$compositor$mk_span(cls,txt){
var el = document.createElement("span");
(el.className = cls);

(el.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt));

return el;
});
pixelSlab.compositor.clear_children_BANG_ = (function pixelSlab$compositor$clear_children_BANG_(el){
(el.innerHTML = "");

return el;
});
pixelSlab.compositor.state_val = (function pixelSlab$compositor$state_val(state,k,fallback){
var v = (cljs.core.truth_(state)?(state[k]):null);
if((((v == null)) || ((((void 0 === v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))))))){
return fallback;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
});
/**
 * Create: <span class='seg'><span class='k'>..</span><span class='v ..'>..</span></span>
 */
pixelSlab.compositor.mk_seg = (function pixelSlab$compositor$mk_seg(k,v){
var seg = document.createElement("span");
var k_el = pixelSlab.compositor.mk_span("k",k);
var v_el = pixelSlab.compositor.mk_span("v",v);
var klass = pixelSlab.compositor.classify_value(v);
(seg.className = "seg");

if(cljs.core.seq(klass)){
v_el.classList.add(klass);
} else {
}

pixelSlab.compositor.append_BANG_(seg,k_el);

pixelSlab.compositor.append_BANG_(seg,v_el);

return seg;
});
pixelSlab.compositor.highlight_active_tab_BANG_ = (function pixelSlab$compositor$highlight_active_tab_BANG_(){
var temp__5804__auto__ = document.querySelector("h1 + p");
if(cljs.core.truth_(temp__5804__auto__)){
var bar = temp__5804__auto__;
var current = pixelSlab.compositor.current_page_name();
var links = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(bar.querySelectorAll("a"));
var seq__7596_7736 = cljs.core.seq(links);
var chunk__7597_7737 = null;
var count__7598_7738 = (0);
var i__7599_7739 = (0);
while(true){
if((i__7599_7739 < count__7598_7738)){
var a_7740 = chunk__7597_7737.cljs$core$IIndexed$_nth$arity$2(null,i__7599_7739);
a_7740.classList.remove("active");


var G__7741 = seq__7596_7736;
var G__7742 = chunk__7597_7737;
var G__7743 = count__7598_7738;
var G__7744 = (i__7599_7739 + (1));
seq__7596_7736 = G__7741;
chunk__7597_7737 = G__7742;
count__7598_7738 = G__7743;
i__7599_7739 = G__7744;
continue;
} else {
var temp__5804__auto___7745__$1 = cljs.core.seq(seq__7596_7736);
if(temp__5804__auto___7745__$1){
var seq__7596_7746__$1 = temp__5804__auto___7745__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7596_7746__$1)){
var c__5525__auto___7747 = cljs.core.chunk_first(seq__7596_7746__$1);
var G__7748 = cljs.core.chunk_rest(seq__7596_7746__$1);
var G__7749 = c__5525__auto___7747;
var G__7750 = cljs.core.count(c__5525__auto___7747);
var G__7751 = (0);
seq__7596_7736 = G__7748;
chunk__7597_7737 = G__7749;
count__7598_7738 = G__7750;
i__7599_7739 = G__7751;
continue;
} else {
var a_7752 = cljs.core.first(seq__7596_7746__$1);
a_7752.classList.remove("active");


var G__7753 = cljs.core.next(seq__7596_7746__$1);
var G__7754 = null;
var G__7755 = (0);
var G__7756 = (0);
seq__7596_7736 = G__7753;
chunk__7597_7737 = G__7754;
count__7598_7738 = G__7755;
i__7599_7739 = G__7756;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___7757__$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pixelSlab.compositor.basename(a.getAttribute("href")),current);
}),links));
if(cljs.core.truth_(temp__5804__auto___7757__$1)){
var match_7758 = temp__5804__auto___7757__$1;
match_7758.classList.add("active");
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,"index.html")) && (((cljs.core.seq(links)) && ((cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pixelSlab.compositor.basename(a.getAttribute("href")),current);
}),links)) == null)))))){
return cljs.core.first(links).classList.add("active");
} else {
return null;
}
} else {
return null;
}
});
pixelSlab.compositor.ensure_modeline_BANG_ = (function pixelSlab$compositor$ensure_modeline_BANG_(){
var temp__5804__auto__ = document.getElementById("postamble");
if(cljs.core.truth_(temp__5804__auto__)){
var post = temp__5804__auto__;
var existing = document.getElementById("modeline");
var modeline = (function (){var or__5002__auto__ = existing;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var d = document.createElement("div");
(d.id = "modeline");

post.appendChild(d);

return d;
}
})();
return modeline;
} else {
return null;
}
});
pixelSlab.compositor.render_modeline_BANG_ = (function pixelSlab$compositor$render_modeline_BANG_(state){
var temp__5804__auto___7759 = pixelSlab.compositor.ensure_modeline_BANG_();
if(cljs.core.truth_(temp__5804__auto___7759)){
var m_7760 = temp__5804__auto___7759;
pixelSlab.compositor.clear_children_BANG_(m_7760);

var nrepl_7761 = pixelSlab.compositor.state_val(state,"nrepl","\u2014");
var http_7762 = pixelSlab.compositor.state_val(state,"http","\u2014");
var time_7763 = pixelSlab.compositor.state_val(state,"time","\u2014");
var battery_7764 = pixelSlab.compositor.state_val(state,"battery","\u2014");
var volume_7765 = pixelSlab.compositor.state_val(state,"volume","\u2014");
var gitrev_7766 = pixelSlab.compositor.state_val(state,"git_rev","\u2014");
var sep_el_7767 = (function (){
return pixelSlab.compositor.mk_span("sep","\u00B7");
});
pixelSlab.compositor.append_BANG_(m_7760,pixelSlab.compositor.mk_span("node","pixel-slab"));

var seq__7612_7768 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_el_7767(),pixelSlab.compositor.mk_seg(":nrepl",nrepl_7761),sep_el_7767(),pixelSlab.compositor.mk_seg(":http",http_7762),sep_el_7767(),pixelSlab.compositor.mk_seg(":time",time_7763),sep_el_7767(),pixelSlab.compositor.mk_seg(":battery",battery_7764),sep_el_7767(),pixelSlab.compositor.mk_seg(":volume",volume_7765),sep_el_7767(),pixelSlab.compositor.mk_seg(":git",gitrev_7766)], null));
var chunk__7613_7769 = null;
var count__7614_7770 = (0);
var i__7615_7771 = (0);
while(true){
if((i__7615_7771 < count__7614_7770)){
var seg_7772 = chunk__7613_7769.cljs$core$IIndexed$_nth$arity$2(null,i__7615_7771);
pixelSlab.compositor.append_BANG_(m_7760,seg_7772);


var G__7773 = seq__7612_7768;
var G__7774 = chunk__7613_7769;
var G__7775 = count__7614_7770;
var G__7776 = (i__7615_7771 + (1));
seq__7612_7768 = G__7773;
chunk__7613_7769 = G__7774;
count__7614_7770 = G__7775;
i__7615_7771 = G__7776;
continue;
} else {
var temp__5804__auto___7777__$1 = cljs.core.seq(seq__7612_7768);
if(temp__5804__auto___7777__$1){
var seq__7612_7778__$1 = temp__5804__auto___7777__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7612_7778__$1)){
var c__5525__auto___7779 = cljs.core.chunk_first(seq__7612_7778__$1);
var G__7780 = cljs.core.chunk_rest(seq__7612_7778__$1);
var G__7781 = c__5525__auto___7779;
var G__7782 = cljs.core.count(c__5525__auto___7779);
var G__7783 = (0);
seq__7612_7768 = G__7780;
chunk__7613_7769 = G__7781;
count__7614_7770 = G__7782;
i__7615_7771 = G__7783;
continue;
} else {
var seg_7784 = cljs.core.first(seq__7612_7778__$1);
pixelSlab.compositor.append_BANG_(m_7760,seg_7784);


var G__7785 = cljs.core.next(seq__7612_7778__$1);
var G__7786 = null;
var G__7787 = (0);
var G__7788 = (0);
seq__7612_7768 = G__7785;
chunk__7613_7769 = G__7786;
count__7614_7770 = G__7787;
i__7615_7771 = G__7788;
continue;
}
} else {
}
}
break;
}
} else {
}

return null;
});
pixelSlab.compositor.mount_pane_BANG_ = (function pixelSlab$compositor$mount_pane_BANG_(pre){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",pre.getAttribute("data-slab-mounted"))){
return null;
} else {
pre.setAttribute("data-slab-mounted","1");

var raw = clojure.string.trimr(clojure.string.replace(pre.textContent,/\r\n/,"\n"));
var lines = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split.cljs$core$IFn$_invoke$arity$2(raw,/\n/)));
var vec__7628 = ((((cljs.core.seq(lines)) && (clojure.string.starts_with_QMARK_(cljs.core.first(lines),"@"))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lines),(1)))),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var pane_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7628,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7628,(1),null);
var _ = (cljs.core.truth_(pane_type)?pre.classList.add(["pane-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_type)].join('')):null);
var non_empty = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7624_SHARP_){
return cljs.core.seq(clojure.string.trim(p1__7624_SHARP_));
}),lines__$1));
var kv_pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(pixelSlab.compositor.split_kv,non_empty)));
var is_kv = (cljs.core.count(kv_pairs) >= (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = Math.floor((0.7 * cljs.core.count(non_empty)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
if((!(is_kv))){
pre.setAttribute("data-pane-kind","text");

return pre.setAttribute("data-template",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1));
} else {
pre.setAttribute("data-pane-kind","kv");

pre.classList.add("pane-kv");

var kv = document.createElement("div");
(kv.className = "kv");

var seq__7634_7789 = cljs.core.seq(kv_pairs);
var chunk__7635_7790 = null;
var count__7636_7791 = (0);
var i__7637_7792 = (0);
while(true){
if((i__7637_7792 < count__7636_7791)){
var vec__7656_7793 = chunk__7635_7790.cljs$core$IIndexed$_nth$arity$2(null,i__7637_7792);
var k_7794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656_7793,(0),null);
var v_7795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656_7793,(1),null);
var row_7796 = document.createElement("div");
var kdiv_7797 = document.createElement("div");
var vdiv_7798 = document.createElement("div");
(row_7796.className = "row");

(kdiv_7797.className = "k");

(kdiv_7797.textContent = k_7794);

(vdiv_7798.className = "v");

vdiv_7798.setAttribute("data-template",v_7795);

(vdiv_7798.textContent = v_7795);

row_7796.appendChild(kdiv_7797);

row_7796.appendChild(vdiv_7798);

kv.appendChild(row_7796);


var G__7799 = seq__7634_7789;
var G__7800 = chunk__7635_7790;
var G__7801 = count__7636_7791;
var G__7802 = (i__7637_7792 + (1));
seq__7634_7789 = G__7799;
chunk__7635_7790 = G__7800;
count__7636_7791 = G__7801;
i__7637_7792 = G__7802;
continue;
} else {
var temp__5804__auto___7803 = cljs.core.seq(seq__7634_7789);
if(temp__5804__auto___7803){
var seq__7634_7804__$1 = temp__5804__auto___7803;
if(cljs.core.chunked_seq_QMARK_(seq__7634_7804__$1)){
var c__5525__auto___7805 = cljs.core.chunk_first(seq__7634_7804__$1);
var G__7806 = cljs.core.chunk_rest(seq__7634_7804__$1);
var G__7807 = c__5525__auto___7805;
var G__7808 = cljs.core.count(c__5525__auto___7805);
var G__7809 = (0);
seq__7634_7789 = G__7806;
chunk__7635_7790 = G__7807;
count__7636_7791 = G__7808;
i__7637_7792 = G__7809;
continue;
} else {
var vec__7664_7810 = cljs.core.first(seq__7634_7804__$1);
var k_7811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664_7810,(0),null);
var v_7812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7664_7810,(1),null);
var row_7813 = document.createElement("div");
var kdiv_7814 = document.createElement("div");
var vdiv_7815 = document.createElement("div");
(row_7813.className = "row");

(kdiv_7814.className = "k");

(kdiv_7814.textContent = k_7811);

(vdiv_7815.className = "v");

vdiv_7815.setAttribute("data-template",v_7812);

(vdiv_7815.textContent = v_7812);

row_7813.appendChild(kdiv_7814);

row_7813.appendChild(vdiv_7815);

kv.appendChild(row_7813);


var G__7816 = cljs.core.next(seq__7634_7804__$1);
var G__7817 = null;
var G__7818 = (0);
var G__7819 = (0);
seq__7634_7789 = G__7816;
chunk__7635_7790 = G__7817;
count__7636_7791 = G__7818;
i__7637_7792 = G__7819;
continue;
}
} else {
}
}
break;
}

(pre.textContent = "");

return pre.appendChild(kv);
}
}
});
pixelSlab.compositor.mount_all_panes_BANG_ = (function pixelSlab$compositor$mount_all_panes_BANG_(){
var seq__7667 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("pre.example")));
var chunk__7668 = null;
var count__7669 = (0);
var i__7670 = (0);
while(true){
if((i__7670 < count__7669)){
var pre = chunk__7668.cljs$core$IIndexed$_nth$arity$2(null,i__7670);
pixelSlab.compositor.mount_pane_BANG_(pre);


var G__7820 = seq__7667;
var G__7821 = chunk__7668;
var G__7822 = count__7669;
var G__7823 = (i__7670 + (1));
seq__7667 = G__7820;
chunk__7668 = G__7821;
count__7669 = G__7822;
i__7670 = G__7823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7667);
if(temp__5804__auto__){
var seq__7667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7667__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7667__$1);
var G__7824 = cljs.core.chunk_rest(seq__7667__$1);
var G__7825 = c__5525__auto__;
var G__7826 = cljs.core.count(c__5525__auto__);
var G__7827 = (0);
seq__7667 = G__7824;
chunk__7668 = G__7825;
count__7669 = G__7826;
i__7670 = G__7827;
continue;
} else {
var pre = cljs.core.first(seq__7667__$1);
pixelSlab.compositor.mount_pane_BANG_(pre);


var G__7828 = cljs.core.next(seq__7667__$1);
var G__7829 = null;
var G__7830 = (0);
var G__7831 = (0);
seq__7667 = G__7828;
chunk__7668 = G__7829;
count__7669 = G__7830;
i__7670 = G__7831;
continue;
}
} else {
return null;
}
}
break;
}
});
pixelSlab.compositor.render_panes_BANG_ = (function pixelSlab$compositor$render_panes_BANG_(state){
var seq__7692 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("pre.example")));
var chunk__7693 = null;
var count__7694 = (0);
var i__7695 = (0);
while(true){
if((i__7695 < count__7694)){
var pre = chunk__7693.cljs$core$IIndexed$_nth$arity$2(null,i__7695);
var kind_7832 = pre.getAttribute("data-pane-kind");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_7832,"text")){
var tmpl_7833 = pre.getAttribute("data-template");
(pre.textContent = pixelSlab.compositor.apply_template(tmpl_7833,state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_7832,"kv")){
var seq__7713_7834 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(pre.querySelectorAll(".v")));
var chunk__7714_7835 = null;
var count__7715_7836 = (0);
var i__7716_7837 = (0);
while(true){
if((i__7716_7837 < count__7715_7836)){
var vdiv_7838 = chunk__7714_7835.cljs$core$IIndexed$_nth$arity$2(null,i__7716_7837);
var tmpl_7839 = vdiv_7838.getAttribute("data-template");
var rendered_7840 = pixelSlab.compositor.apply_template(tmpl_7839,state);
var klass_7841 = pixelSlab.compositor.classify_value(rendered_7840);
(vdiv_7838.textContent = rendered_7840);

vdiv_7838.classList.remove("warn");

vdiv_7838.classList.remove("bad");

if(cljs.core.seq(klass_7841)){
vdiv_7838.classList.add(klass_7841);
} else {
}


var G__7842 = seq__7713_7834;
var G__7843 = chunk__7714_7835;
var G__7844 = count__7715_7836;
var G__7845 = (i__7716_7837 + (1));
seq__7713_7834 = G__7842;
chunk__7714_7835 = G__7843;
count__7715_7836 = G__7844;
i__7716_7837 = G__7845;
continue;
} else {
var temp__5804__auto___7846 = cljs.core.seq(seq__7713_7834);
if(temp__5804__auto___7846){
var seq__7713_7847__$1 = temp__5804__auto___7846;
if(cljs.core.chunked_seq_QMARK_(seq__7713_7847__$1)){
var c__5525__auto___7848 = cljs.core.chunk_first(seq__7713_7847__$1);
var G__7849 = cljs.core.chunk_rest(seq__7713_7847__$1);
var G__7850 = c__5525__auto___7848;
var G__7851 = cljs.core.count(c__5525__auto___7848);
var G__7852 = (0);
seq__7713_7834 = G__7849;
chunk__7714_7835 = G__7850;
count__7715_7836 = G__7851;
i__7716_7837 = G__7852;
continue;
} else {
var vdiv_7853 = cljs.core.first(seq__7713_7847__$1);
var tmpl_7854 = vdiv_7853.getAttribute("data-template");
var rendered_7855 = pixelSlab.compositor.apply_template(tmpl_7854,state);
var klass_7856 = pixelSlab.compositor.classify_value(rendered_7855);
(vdiv_7853.textContent = rendered_7855);

vdiv_7853.classList.remove("warn");

vdiv_7853.classList.remove("bad");

if(cljs.core.seq(klass_7856)){
vdiv_7853.classList.add(klass_7856);
} else {
}


var G__7857 = cljs.core.next(seq__7713_7847__$1);
var G__7858 = null;
var G__7859 = (0);
var G__7860 = (0);
seq__7713_7834 = G__7857;
chunk__7714_7835 = G__7858;
count__7715_7836 = G__7859;
i__7716_7837 = G__7860;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__7861 = seq__7692;
var G__7862 = chunk__7693;
var G__7863 = count__7694;
var G__7864 = (i__7695 + (1));
seq__7692 = G__7861;
chunk__7693 = G__7862;
count__7694 = G__7863;
i__7695 = G__7864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7692);
if(temp__5804__auto__){
var seq__7692__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7692__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7692__$1);
var G__7865 = cljs.core.chunk_rest(seq__7692__$1);
var G__7866 = c__5525__auto__;
var G__7867 = cljs.core.count(c__5525__auto__);
var G__7868 = (0);
seq__7692 = G__7865;
chunk__7693 = G__7866;
count__7694 = G__7867;
i__7695 = G__7868;
continue;
} else {
var pre = cljs.core.first(seq__7692__$1);
var kind_7869 = pre.getAttribute("data-pane-kind");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_7869,"text")){
var tmpl_7870 = pre.getAttribute("data-template");
(pre.textContent = pixelSlab.compositor.apply_template(tmpl_7870,state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_7869,"kv")){
var seq__7722_7871 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(pre.querySelectorAll(".v")));
var chunk__7723_7872 = null;
var count__7724_7873 = (0);
var i__7725_7874 = (0);
while(true){
if((i__7725_7874 < count__7724_7873)){
var vdiv_7875 = chunk__7723_7872.cljs$core$IIndexed$_nth$arity$2(null,i__7725_7874);
var tmpl_7876 = vdiv_7875.getAttribute("data-template");
var rendered_7877 = pixelSlab.compositor.apply_template(tmpl_7876,state);
var klass_7878 = pixelSlab.compositor.classify_value(rendered_7877);
(vdiv_7875.textContent = rendered_7877);

vdiv_7875.classList.remove("warn");

vdiv_7875.classList.remove("bad");

if(cljs.core.seq(klass_7878)){
vdiv_7875.classList.add(klass_7878);
} else {
}


var G__7879 = seq__7722_7871;
var G__7880 = chunk__7723_7872;
var G__7881 = count__7724_7873;
var G__7882 = (i__7725_7874 + (1));
seq__7722_7871 = G__7879;
chunk__7723_7872 = G__7880;
count__7724_7873 = G__7881;
i__7725_7874 = G__7882;
continue;
} else {
var temp__5804__auto___7883__$1 = cljs.core.seq(seq__7722_7871);
if(temp__5804__auto___7883__$1){
var seq__7722_7884__$1 = temp__5804__auto___7883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7722_7884__$1)){
var c__5525__auto___7885 = cljs.core.chunk_first(seq__7722_7884__$1);
var G__7886 = cljs.core.chunk_rest(seq__7722_7884__$1);
var G__7887 = c__5525__auto___7885;
var G__7888 = cljs.core.count(c__5525__auto___7885);
var G__7889 = (0);
seq__7722_7871 = G__7886;
chunk__7723_7872 = G__7887;
count__7724_7873 = G__7888;
i__7725_7874 = G__7889;
continue;
} else {
var vdiv_7890 = cljs.core.first(seq__7722_7884__$1);
var tmpl_7891 = vdiv_7890.getAttribute("data-template");
var rendered_7892 = pixelSlab.compositor.apply_template(tmpl_7891,state);
var klass_7893 = pixelSlab.compositor.classify_value(rendered_7892);
(vdiv_7890.textContent = rendered_7892);

vdiv_7890.classList.remove("warn");

vdiv_7890.classList.remove("bad");

if(cljs.core.seq(klass_7893)){
vdiv_7890.classList.add(klass_7893);
} else {
}


var G__7894 = cljs.core.next(seq__7722_7884__$1);
var G__7895 = null;
var G__7896 = (0);
var G__7897 = (0);
seq__7722_7871 = G__7894;
chunk__7723_7872 = G__7895;
count__7724_7873 = G__7896;
i__7725_7874 = G__7897;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__7898 = cljs.core.next(seq__7692__$1);
var G__7899 = null;
var G__7900 = (0);
var G__7901 = (0);
seq__7692 = G__7898;
chunk__7693 = G__7899;
count__7694 = G__7900;
i__7695 = G__7901;
continue;
}
} else {
return null;
}
}
break;
}
});
pixelSlab.compositor.dev_state_override = (function pixelSlab$compositor$dev_state_override(){
var x = (window["SLAB_STATE"]);
if(cljs.core.truth_((function (){var and__5000__auto__ = x;
if(cljs.core.truth_(and__5000__auto__)){
return (((!((void 0 === x)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",typeof$(x))));
} else {
return and__5000__auto__;
}
})())){
return x;
} else {
return null;
}
});
pixelSlab.compositor.fetch_state_BANG_ = (function pixelSlab$compositor$fetch_state_BANG_(){
if(cljs.core.truth_(pixelSlab.compositor.dev_state_override())){
return Promise.resolve(pixelSlab.compositor.dev_state_override());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file:",location.protocol)){
return Promise.resolve(null);
} else {
return fetch("/api/state",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),"no-store"], null))).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.json();
} else {
return null;
}
})).catch((function (_){
return null;
}));

}
}
});
pixelSlab.compositor.tick_BANG_ = (function pixelSlab$compositor$tick_BANG_(){
pixelSlab.compositor.highlight_active_tab_BANG_();

pixelSlab.compositor.mount_all_panes_BANG_();

return pixelSlab.compositor.fetch_state_BANG_().then((function (state){
if(cljs.core.truth_(state)){
pixelSlab.compositor.render_panes_BANG_(state);

return pixelSlab.compositor.render_modeline_BANG_(state);
} else {
return pixelSlab.compositor.render_modeline_BANG_(cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY));
}
}));
});
pixelSlab.compositor.init = (function pixelSlab$compositor$init(){
pixelSlab.compositor.tick_BANG_();

return setInterval(pixelSlab.compositor.tick_BANG_,pixelSlab.compositor.poll_ms);
});

//# sourceMappingURL=pixelSlab.compositor.js.map
