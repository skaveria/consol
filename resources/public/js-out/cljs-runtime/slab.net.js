goog.provide('slab.net');
/**
 * POST token execution request to /api/run-token.
 *   Request: EDN, Response: EDN.
 *   Returns a JS Promise resolving to a CLJS map.
 */
slab.net.run_token_BANG_ = (function slab$net$run_token_BANG_(p__22035){
var map__22036 = p__22035;
var map__22036__$1 = cljs.core.__destructure_map(map__22036);
var info = map__22036__$1;
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var token_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"token-id","token-id",-764089526));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"params","params",710516235));
var payload = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"token-id","token-id",-764089526),token_id,new cljs.core.Keyword(null,"section","section",-300141526),section,new cljs.core.Keyword(null,"params","params",710516235),(function (){var or__5002__auto__ = params;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null)], 0));
return fetch("/api/run-token",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/edn"], null),new cljs.core.Keyword(null,"body","body",-2049205669),payload], null))).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
return resp.text().then((function (t){
throw (new Error(["HTTP ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp.status),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
}));
}
})).then((function (txt){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(txt);
}));
});

//# sourceMappingURL=slab.net.js.map
