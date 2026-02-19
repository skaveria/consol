goog.provide('consol.config');
consol.config.poll_ms = (2500);
consol.config.default_node = "slab-01";
consol.config.default_tabs = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"index.html",new cljs.core.Keyword(null,"label","label",1718410804),"dashboard"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"system.html",new cljs.core.Keyword(null,"label","label",1718410804),"system"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"git.html",new cljs.core.Keyword(null,"label","label",1718410804),"git"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"event.html",new cljs.core.Keyword(null,"label","label",1718410804),"event"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"notes.html",new cljs.core.Keyword(null,"label","label",1718410804),"notes"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"about.html",new cljs.core.Keyword(null,"label","label",1718410804),"about"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"media.html",new cljs.core.Keyword(null,"label","label",1718410804),"media"], null)], null);
if((typeof consol !== 'undefined') && (typeof consol.config !== 'undefined') && (typeof consol.config.chrome_STAR_ !== 'undefined')){
} else {
consol.config.chrome_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),consol.config.default_node,new cljs.core.Keyword(null,"tabs","tabs",-779855354),consol.config.default_tabs], null));
}
consol.config.basename = (function consol$config$basename(s){
var s__$1 = (function (){var or__5142__auto__ = s;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var s__$2 = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/[?#]/));
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$2,/\//);
var or__5142__auto__ = cljs.core.last(parts);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "index.html";
}
});
consol.config.current_page_name = (function consol$config$current_page_name(){
var proto = location.protocol;
var p = location.pathname;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(proto,"file:")){
return consol.config.basename(p);
} else {
if((((p == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"/")))){
return "index.html";
} else {
return consol.config.basename(p);

}
}
});
consol.config.file_stem = (function consol$config$file_stem(filename){
return clojure.string.replace(clojure.string.replace(filename,/\.html$/,""),/\.htm$/,"");
});
consol.config.page_label = (function consol$config$page_label(page){
var tabs = new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(consol.config.chrome_STAR_));
var or__5142__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__8595_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(p1__8595_SHARP_),page);
}),tabs)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return consol.config.file_stem(page);
}
});
consol.config.fetch_tabs_BANG_ = (function consol$config$fetch_tabs_BANG_(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file:",location.protocol)){
return Promise.resolve(null);
} else {
return fetch("/tabs.edn",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),"no-store"], null))).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.text();
} else {
return null;
}
})).then((function (txt){
if(cljs.core.truth_((function (){var and__5140__auto__ = txt;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.seq(clojure.string.trim(txt));
} else {
return and__5140__auto__;
}
})())){
var m = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(txt);
return cljs.core.reset_BANG_(consol.config.chrome_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return consol.config.default_node;
}
})(),new cljs.core.Keyword(null,"tabs","tabs",-779855354),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return consol.config.default_tabs;
}
})()], null));
} else {
return null;
}
})).catch((function (_){
return null;
}));
}
});

//# sourceMappingURL=consol.config.js.map
