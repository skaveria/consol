goog.provide('slab.actions');
slab.actions.run_token_BANG_ = (function slab$actions$run_token_BANG_(p__6119){
var map__6120 = p__6119;
var map__6120__$1 = cljs.core.__destructure_map(map__6120);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6120__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var info = slab.tokens.token_info(el);
var slot = slab.dom.ensure_output_slot_BANG_(info,el);
if(cljs.core.truth_(slot)){
slab.dom.show_loading_BANG_(slot);

return slab.net.run_token_BANG_(info).then((function (resp){
var G__6121 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(resp);
var G__6121__$1 = (((G__6121 instanceof cljs.core.Keyword))?G__6121.fqn:null);
switch (G__6121__$1) {
case "text":
return slab.dom.show_text_BANG_(slot,resp);

break;
case "rich":
return slab.dom.show_rich_BANG_(slot,resp);

break;
default:
return slab.dom.show_text_BANG_(slot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0))], null));

}
})).catch((function (e){
return slab.dom.show_error_BANG_(slot,e);
}));
} else {
return null;
}
});
slab.actions.actions = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-token","run-token",167403507),slab.actions.run_token_BANG_], null);
slab.actions.dispatch_BANG_ = (function slab$actions$dispatch_BANG_(p__6122){
var map__6123 = p__6122;
var map__6123__$1 = cljs.core.__destructure_map(map__6123);
var ctx = map__6123__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6123__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(slab.actions.actions,action);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
} else {
return console.warn("Unknown action:",cljs.core.name(action),ctx);
}
});

//# sourceMappingURL=slab.actions.js.map
