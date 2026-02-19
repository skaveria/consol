goog.provide('consol.actions');
consol.actions.run_token_BANG_ = (function consol$actions$run_token_BANG_(p__8601){
var map__8602 = p__8601;
var map__8602__$1 = cljs.core.__destructure_map(map__8602);
var el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8602__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var info = consol.tokens.token_info(el);
var slot = consol.dom.ensure_output_slot_BANG_(info,el);
if(cljs.core.truth_(slot)){
consol.dom.show_loading_BANG_(slot);

return consol.net.run_token_BANG_(info).then((function (resp){
var G__8603 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(resp);
var G__8603__$1 = (((G__8603 instanceof cljs.core.Keyword))?G__8603.fqn:null);
switch (G__8603__$1) {
case "text":
return consol.dom.show_text_BANG_(slot,resp);

break;
case "rich":
return consol.dom.show_rich_BANG_(slot,resp);

break;
default:
return consol.dom.show_text_BANG_(slot,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0))], null));

}
})).catch((function (e){
return consol.dom.show_error_BANG_(slot,e);
}));
} else {
return null;
}
});
consol.actions.actions = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-token","run-token",167403507),consol.actions.run_token_BANG_], null);
consol.actions.dispatch_BANG_ = (function consol$actions$dispatch_BANG_(p__8604){
var map__8605 = p__8604;
var map__8605__$1 = cljs.core.__destructure_map(map__8605);
var ctx = map__8605__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8605__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(consol.actions.actions,action);
if(cljs.core.truth_(temp__5821__auto__)){
var f = temp__5821__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
} else {
return console.warn("Unknown action:",cljs.core.name(action),ctx);
}
});

//# sourceMappingURL=consol.actions.js.map
