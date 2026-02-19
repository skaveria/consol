goog.provide('consol.render');
if((typeof consol !== 'undefined') && (typeof consol.render !== 'undefined') && (typeof consol.render.render_rich !== 'undefined')){
} else {
/**
 * Return a DOM node for a rich body map, dispatched by :kind.
 */
consol.render.render_rich = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7571 = cljs.core.get_global_hierarchy;
return (fexpr__7571.cljs$core$IFn$_invoke$arity$0 ? fexpr__7571.cljs$core$IFn$_invoke$arity$0() : fexpr__7571.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("consol.render","render-rich"),(function (body){
return new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(body);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
consol.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__7572){
var map__7573 = p__7572;
var map__7573__$1 = cljs.core.__destructure_map(map__7573);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7573__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7573__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var G__7574 = document.createElement("img");
(G__7574["src"] = src);

(G__7574["alt"] = (function (){var or__5142__auto__ = alt;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());

return G__7574;
}));
consol.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"video","video",156888130),(function (p__7576){
var map__7577 = p__7576;
var map__7577__$1 = cljs.core.__destructure_map(map__7577);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7577__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7577__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var autoplay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7577__$1,new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991));
var loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7577__$1,new cljs.core.Keyword(null,"loop","loop",-395552849));
var muted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7577__$1,new cljs.core.Keyword(null,"muted","muted",1275109029));
var v = document.createElement("video");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,controls)){
(v["controls"] = true);
} else {
}

if(cljs.core.truth_(autoplay)){
(v["autoplay"] = true);
} else {
}

if(cljs.core.truth_(loop)){
(v["loop"] = true);
} else {
}

if(cljs.core.truth_(muted)){
(v["muted"] = true);
} else {
}

(v["src"] = src);

return v;
}));
consol.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pre","pre",2118456869),(function (p__7578){
var map__7579 = p__7578;
var map__7579__$1 = cljs.core.__destructure_map(map__7579);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var G__7580 = document.createElement("pre");
(G__7580["textContent"] = (function (){var or__5142__auto__ = text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());

return G__7580;
}));
consol.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (body){
var G__7582 = document.createElement("pre");
(G__7582["textContent"] = (""+"Unknown rich kind: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))));

return G__7582;
}));

//# sourceMappingURL=consol.render.js.map
