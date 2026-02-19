goog.provide('slab.render');
if((typeof slab !== 'undefined') && (typeof slab.render !== 'undefined') && (typeof slab.render.render_rich !== 'undefined')){
} else {
/**
 * Return a DOM node for a rich body map, dispatched by :kind.
 */
slab.render.render_rich = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20759 = cljs.core.get_global_hierarchy;
return (fexpr__20759.cljs$core$IFn$_invoke$arity$0 ? fexpr__20759.cljs$core$IFn$_invoke$arity$0() : fexpr__20759.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("slab.render","render-rich"),(function (body){
return new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(body);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
slab.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__20763){
var map__20764 = p__20763;
var map__20764__$1 = cljs.core.__destructure_map(map__20764);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20764__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20764__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var G__20765 = document.createElement("img");
(G__20765["src"] = src);

(G__20765["alt"] = (function (){var or__5002__auto__ = alt;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return G__20765;
}));
slab.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"video","video",156888130),(function (p__20771){
var map__20772 = p__20771;
var map__20772__$1 = cljs.core.__destructure_map(map__20772);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var autoplay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991));
var loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,new cljs.core.Keyword(null,"loop","loop",-395552849));
var muted = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772__$1,new cljs.core.Keyword(null,"muted","muted",1275109029));
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
slab.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pre","pre",2118456869),(function (p__20791){
var map__20792 = p__20791;
var map__20792__$1 = cljs.core.__destructure_map(map__20792);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var G__20793 = document.createElement("pre");
(G__20793["textContent"] = (function (){var or__5002__auto__ = text;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return G__20793;
}));
slab.render.render_rich.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (body){
var G__20796 = document.createElement("pre");
(G__20796["textContent"] = ["Unknown rich kind: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))].join(''));

return G__20796;
}));

//# sourceMappingURL=slab.render.js.map
