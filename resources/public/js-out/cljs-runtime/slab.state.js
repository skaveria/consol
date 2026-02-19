goog.provide('slab.state');
slab.state.dev_state_override = (function slab$state$dev_state_override(){
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
slab.state.fetch_state_BANG_ = (function slab$state$fetch_state_BANG_(){
if(cljs.core.truth_(slab.state.dev_state_override())){
return Promise.resolve(slab.state.dev_state_override());
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

//# sourceMappingURL=slab.state.js.map
