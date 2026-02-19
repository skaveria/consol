goog.provide('slab.main');
slab.main.classify_value = (function slab$main$classify_value(v){
return slab.panes.classify_value(v);
});
slab.main.state_val = (function slab$main$state_val(st,k,fallback){
var v = (cljs.core.truth_(st)?(st[k]):null);
if((((v == null)) || ((((void 0 === v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))))))){
return fallback;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
});
slab.main.mk_el = (function slab$main$mk_el(tag,class_name){
var e = document.createElement(tag);
(e.className = class_name);

return e;
});
slab.main.mk_span = (function slab$main$mk_span(cls,txt){
var el = document.createElement("span");
(el.className = cls);

(el.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt));

return el;
});
slab.main.clear_children_BANG_ = (function slab$main$clear_children_BANG_(el){
(el.innerHTML = "");

return el;
});
slab.main.append_BANG_ = (function slab$main$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
slab.main.mk_seg = (function slab$main$mk_seg(k,v){
var seg = slab.main.mk_el("span","seg");
var k_el = slab.main.mk_span("k",k);
var v_el = slab.main.mk_span("v",v);
var klass = slab.main.classify_value(v);
if(cljs.core.seq(klass)){
v_el.classList.add(klass);
} else {
}

slab.main.append_BANG_(seg,k_el);

slab.main.append_BANG_(seg,v_el);

return seg;
});
slab.main.render_modeline_BANG_ = (function slab$main$render_modeline_BANG_(st){
var temp__5804__auto___6130 = slab.chrome.ensure_modeline_BANG_();
if(cljs.core.truth_(temp__5804__auto___6130)){
var m_6131 = temp__5804__auto___6130;
slab.main.clear_children_BANG_(m_6131);

var nrepl_6132 = slab.main.state_val(st,"nrepl","\u2014");
var http_6133 = slab.main.state_val(st,"http","\u2014");
var time_6134 = slab.main.state_val(st,"time","\u2014");
var battery_6135 = slab.main.state_val(st,"battery","\u2014");
var volume_6136 = slab.main.state_val(st,"volume","\u2014");
var sep_6137 = (function (){
return slab.main.mk_span("sep","\u00B7");
});
slab.main.append_BANG_(m_6131,slab.main.mk_span("node","slab"));

var seq__6126_6138 = cljs.core.seq(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_6137(),slab.main.mk_seg(":nrepl",nrepl_6132),sep_6137(),slab.main.mk_seg(":http",http_6133),sep_6137(),slab.main.mk_seg(":time",time_6134),sep_6137(),slab.main.mk_seg(":battery",battery_6135),sep_6137(),slab.main.mk_seg(":volume",volume_6136)], null));
var chunk__6127_6139 = null;
var count__6128_6140 = (0);
var i__6129_6141 = (0);
while(true){
if((i__6129_6141 < count__6128_6140)){
var x_6142 = chunk__6127_6139.cljs$core$IIndexed$_nth$arity$2(null,i__6129_6141);
slab.main.append_BANG_(m_6131,x_6142);


var G__6143 = seq__6126_6138;
var G__6144 = chunk__6127_6139;
var G__6145 = count__6128_6140;
var G__6146 = (i__6129_6141 + (1));
seq__6126_6138 = G__6143;
chunk__6127_6139 = G__6144;
count__6128_6140 = G__6145;
i__6129_6141 = G__6146;
continue;
} else {
var temp__5804__auto___6147__$1 = cljs.core.seq(seq__6126_6138);
if(temp__5804__auto___6147__$1){
var seq__6126_6148__$1 = temp__5804__auto___6147__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6126_6148__$1)){
var c__5525__auto___6149 = cljs.core.chunk_first(seq__6126_6148__$1);
var G__6150 = cljs.core.chunk_rest(seq__6126_6148__$1);
var G__6151 = c__5525__auto___6149;
var G__6152 = cljs.core.count(c__5525__auto___6149);
var G__6153 = (0);
seq__6126_6138 = G__6150;
chunk__6127_6139 = G__6151;
count__6128_6140 = G__6152;
i__6129_6141 = G__6153;
continue;
} else {
var x_6154 = cljs.core.first(seq__6126_6148__$1);
slab.main.append_BANG_(m_6131,x_6154);


var G__6155 = cljs.core.next(seq__6126_6148__$1);
var G__6156 = null;
var G__6157 = (0);
var G__6158 = (0);
seq__6126_6138 = G__6155;
chunk__6127_6139 = G__6156;
count__6128_6140 = G__6157;
i__6129_6141 = G__6158;
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
slab.main.tick_BANG_ = (function slab$main$tick_BANG_(){
slab.chrome.ensure_chrome_BANG_();

slab.chrome.highlight_active_tab_BANG_();

slab.theme.fetch_theme_BANG_();

slab.panes.mount_all_panes_BANG_();

return slab.state.fetch_state_BANG_().then((function (s){
if(cljs.core.truth_(s)){
slab.panes.render_panes_BANG_(s);
} else {
}

return slab.main.render_modeline_BANG_(s);
}));
});
if((typeof slab !== 'undefined') && (typeof slab.main !== 'undefined') && (typeof slab.main.started_QMARK_ !== 'undefined')){
} else {
slab.main.started_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
slab.main.start_BANG_ = (function slab$main$start_BANG_(){
if(cljs.core.truth_(cljs.core.deref(slab.main.started_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(slab.main.started_QMARK_,true);

slab.events.attach_BANG_();

slab.tokens.hydrate_interactive_tokens_BANG_();

slab.config.fetch_tabs_BANG_().then((function (_){
slab.chrome.ensure_chrome_BANG_();

return slab.chrome.highlight_active_tab_BANG_();
}));

slab.main.tick_BANG_();

setInterval(slab.main.tick_BANG_,slab.config.poll_ms);

return console.log("slab client online (full)");
}
});
slab.main.init_BANG_ = (function slab$main$init_BANG_(){
if(cljs.core.truth_(document.body)){
return slab.main.start_BANG_();
} else {
return document.addEventListener("DOMContentLoaded",slab.main.start_BANG_);
}
});
slab.main.init_BANG_();

//# sourceMappingURL=slab.main.js.map
