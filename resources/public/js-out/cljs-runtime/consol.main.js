goog.provide('consol.main');
consol.main.classify_value = (function consol$main$classify_value(v){
return consol.panes.classify_value(v);
});
consol.main.state_val = (function consol$main$state_val(st,k,fallback){
var v = (cljs.core.truth_(st)?(st[k]):null);
if((((v == null)) || ((((void 0 === v)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))))))){
return fallback;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}
});
consol.main.mk_el = (function consol$main$mk_el(tag,class_name){
var e = document.createElement(tag);
(e.className = class_name);

return e;
});
consol.main.mk_span = (function consol$main$mk_span(cls,txt){
var el = document.createElement("span");
(el.className = cls);

(el.textContent = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt)));

return el;
});
consol.main.clear_children_BANG_ = (function consol$main$clear_children_BANG_(el){
(el.innerHTML = "");

return el;
});
consol.main.append_BANG_ = (function consol$main$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
consol.main.mk_seg = (function consol$main$mk_seg(k,v){
var seg = consol.main.mk_el("span","seg");
var k_el = consol.main.mk_span("k",k);
var v_el = consol.main.mk_span("v",v);
var klass = consol.main.classify_value(v);
if(cljs.core.seq(klass)){
v_el.classList.add(klass);
} else {
}

consol.main.append_BANG_(seg,k_el);

consol.main.append_BANG_(seg,v_el);

return seg;
});
consol.main.render_modeline_BANG_ = (function consol$main$render_modeline_BANG_(st){
var temp__5823__auto___9022 = consol.chrome.ensure_modeline_BANG_();
if(cljs.core.truth_(temp__5823__auto___9022)){
var m_9024 = temp__5823__auto___9022;
consol.main.clear_children_BANG_(m_9024);

var nrepl_9026 = consol.main.state_val(st,"nrepl","\u2014");
var http_9027 = consol.main.state_val(st,"http","\u2014");
var time_9028 = consol.main.state_val(st,"time","\u2014");
var battery_9029 = consol.main.state_val(st,"battery","\u2014");
var volume_9030 = consol.main.state_val(st,"volume","\u2014");
var sep_9031 = (function (){
return consol.main.mk_span("sep","\u00B7");
});
consol.main.append_BANG_(m_9024,consol.main.mk_span("node","consol"));

var seq__8948_9034 = cljs.core.seq(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_9031(),consol.main.mk_seg(":nrepl",nrepl_9026),sep_9031(),consol.main.mk_seg(":http",http_9027),sep_9031(),consol.main.mk_seg(":time",time_9028),sep_9031(),consol.main.mk_seg(":battery",battery_9029),sep_9031(),consol.main.mk_seg(":volume",volume_9030)], null));
var chunk__8949_9035 = null;
var count__8950_9036 = (0);
var i__8951_9037 = (0);
while(true){
if((i__8951_9037 < count__8950_9036)){
var x_9041 = chunk__8949_9035.cljs$core$IIndexed$_nth$arity$2(null,i__8951_9037);
consol.main.append_BANG_(m_9024,x_9041);


var G__9042 = seq__8948_9034;
var G__9043 = chunk__8949_9035;
var G__9044 = count__8950_9036;
var G__9045 = (i__8951_9037 + (1));
seq__8948_9034 = G__9042;
chunk__8949_9035 = G__9043;
count__8950_9036 = G__9044;
i__8951_9037 = G__9045;
continue;
} else {
var temp__5823__auto___9046__$1 = cljs.core.seq(seq__8948_9034);
if(temp__5823__auto___9046__$1){
var seq__8948_9047__$1 = temp__5823__auto___9046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8948_9047__$1)){
var c__5673__auto___9048 = cljs.core.chunk_first(seq__8948_9047__$1);
var G__9049 = cljs.core.chunk_rest(seq__8948_9047__$1);
var G__9050 = c__5673__auto___9048;
var G__9051 = cljs.core.count(c__5673__auto___9048);
var G__9052 = (0);
seq__8948_9034 = G__9049;
chunk__8949_9035 = G__9050;
count__8950_9036 = G__9051;
i__8951_9037 = G__9052;
continue;
} else {
var x_9054 = cljs.core.first(seq__8948_9047__$1);
consol.main.append_BANG_(m_9024,x_9054);


var G__9055 = cljs.core.next(seq__8948_9047__$1);
var G__9056 = null;
var G__9057 = (0);
var G__9058 = (0);
seq__8948_9034 = G__9055;
chunk__8949_9035 = G__9056;
count__8950_9036 = G__9057;
i__8951_9037 = G__9058;
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
consol.main.tick_BANG_ = (function consol$main$tick_BANG_(){
consol.chrome.ensure_chrome_BANG_();

consol.chrome.highlight_active_tab_BANG_();

consol.theme.fetch_theme_BANG_();

consol.panes.mount_all_panes_BANG_();

return consol.state.fetch_state_BANG_().then((function (s){
if(cljs.core.truth_(s)){
consol.panes.render_panes_BANG_(s);
} else {
}

return consol.main.render_modeline_BANG_(s);
}));
});
if((typeof consol !== 'undefined') && (typeof consol.main !== 'undefined') && (typeof consol.main.started_QMARK_ !== 'undefined')){
} else {
consol.main.started_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
consol.main.start_BANG_ = (function consol$main$start_BANG_(){
if(cljs.core.truth_(cljs.core.deref(consol.main.started_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(consol.main.started_QMARK_,true);

consol.events.attach_BANG_();

consol.tokens.hydrate_interactive_tokens_BANG_();

consol.config.fetch_tabs_BANG_().then((function (_){
consol.chrome.ensure_chrome_BANG_();

return consol.chrome.highlight_active_tab_BANG_();
}));

consol.main.tick_BANG_();

setInterval(consol.main.tick_BANG_,consol.config.poll_ms);

return console.log("consol client online (full)");
}
});
consol.main.init_BANG_ = (function consol$main$init_BANG_(){
if(cljs.core.truth_(document.body)){
return consol.main.start_BANG_();
} else {
return document.addEventListener("DOMContentLoaded",consol.main.start_BANG_);
}
});
consol.main.init_BANG_();

//# sourceMappingURL=consol.main.js.map
