goog.provide('slab.theme');
slab.theme.set_css_var_BANG_ = (function slab$theme$set_css_var_BANG_(k,v){
return document.documentElement.style.setProperty(k,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});
slab.theme.__GT_hue_kw = (function slab$theme$__GT_hue_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(x));
} else {
return null;

}
}
});
slab.theme.fetch_theme_BANG_ = (function slab$theme$fetch_theme_BANG_(){
var proto = location.protocol;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(proto,"file:")){
return Promise.resolve(null);
} else {
return fetch("/theme.edn",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache","cache",-1237023054),"no-store"], null))).then((function (res){
if(cljs.core.truth_(res.ok)){
return res.text();
} else {
return null;
}
})).then((function (txt){
if(cljs.core.truth_((function (){var and__5000__auto__ = txt;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(clojure.string.trim(txt));
} else {
return and__5000__auto__;
}
})())){
var m = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(txt);
var h = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(m);
var hue = (function (){var or__5002__auto__ = slab.theme.__GT_hue_kw(new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(h));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"green","green",-945526839);
}
})();
var hdr_color = (function (){var G__6096 = hue;
var G__6096__$1 = (((G__6096 instanceof cljs.core.Keyword))?G__6096.fqn:null);
switch (G__6096__$1) {
case "amber":
return "#fd971f";

break;
case "ice":
return "#a8d8ff";

break;
case "white":
return "#e8e3d6";

break;
case "green":
return "#a6e22e";

break;
default:
return "#a6e22e";

}
})();
document.documentElement.setAttribute("data-hdr-hue",cljs.core.name(hue));

slab.theme.set_css_var_BANG_("--hdr-color",hdr_color);

var temp__5804__auto___6104 = new cljs.core.Keyword(null,"text-weight","text-weight",1651412753).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(temp__5804__auto___6104)){
var w_6105 = temp__5804__auto___6104;
slab.theme.set_css_var_BANG_("--hdr-weight",w_6105);
} else {
}

var temp__5804__auto___6106 = new cljs.core.Keyword(null,"glow","glow",216329469).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(temp__5804__auto___6106)){
var g_6107 = temp__5804__auto___6106;
slab.theme.set_css_var_BANG_("--hdr-glow-a",g_6107);
} else {
}

var temp__5804__auto___6108 = new cljs.core.Keyword(null,"glow2","glow2",2044041327).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(temp__5804__auto___6108)){
var g2_6109 = temp__5804__auto___6108;
slab.theme.set_css_var_BANG_("--hdr-glow-b",g2_6109);
} else {
}

var temp__5804__auto___6114 = new cljs.core.Keyword(null,"cursor-glow","cursor-glow",-185030830).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(temp__5804__auto___6114)){
var cg_6115 = temp__5804__auto___6114;
slab.theme.set_css_var_BANG_("--cursor-glow-a",cg_6115);
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"cursor-glow2","cursor-glow2",1078753089).cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(temp__5804__auto__)){
var cg2 = temp__5804__auto__;
return slab.theme.set_css_var_BANG_("--cursor-glow-b",cg2);
} else {
return null;
}
} else {
return null;
}
})).catch((function (_){
return null;
}));

}
});

//# sourceMappingURL=slab.theme.js.map
