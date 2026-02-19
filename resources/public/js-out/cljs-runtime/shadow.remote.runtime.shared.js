goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14549){
var map__14550 = p__14549;
var map__14550__$1 = cljs.core.__destructure_map(map__14550);
var runtime = map__14550__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14550__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15018 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15018)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14551 = runtime;
var G__14552 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15018);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14551,G__14552) : shadow.remote.runtime.shared.process.call(null,G__14551,G__14552));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14556,res){
var map__14557 = p__14556;
var map__14557__$1 = cljs.core.__destructure_map(map__14557);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14557__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14557__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14558 = res;
var G__14558__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14558,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14558);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14558__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14558__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14563 = arguments.length;
switch (G__14563) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14565,msg,handlers,timeout_after_ms){
var map__14566 = p__14565;
var map__14566__$1 = cljs.core.__destructure_map(map__14566);
var runtime = map__14566__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14566__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15028 = arguments.length;
var i__5727__auto___15029 = (0);
while(true){
if((i__5727__auto___15029 < len__5726__auto___15028)){
args__5732__auto__.push((arguments[i__5727__auto___15029]));

var G__15031 = (i__5727__auto___15029 + (1));
i__5727__auto___15029 = G__15031;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14607,ev,args){
var map__14608 = p__14607;
var map__14608__$1 = cljs.core.__destructure_map(map__14608);
var runtime = map__14608__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14608__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14610 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14613 = null;
var count__14614 = (0);
var i__14615 = (0);
while(true){
if((i__14615 < count__14614)){
var ext = chunk__14613.cljs$core$IIndexed$_nth$arity$2(null,i__14615);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15033 = seq__14610;
var G__15034 = chunk__14613;
var G__15035 = count__14614;
var G__15036 = (i__14615 + (1));
seq__14610 = G__15033;
chunk__14613 = G__15034;
count__14614 = G__15035;
i__14615 = G__15036;
continue;
} else {
var G__15037 = seq__14610;
var G__15038 = chunk__14613;
var G__15039 = count__14614;
var G__15040 = (i__14615 + (1));
seq__14610 = G__15037;
chunk__14613 = G__15038;
count__14614 = G__15039;
i__14615 = G__15040;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14610);
if(temp__5804__auto__){
var seq__14610__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14610__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14610__$1);
var G__15041 = cljs.core.chunk_rest(seq__14610__$1);
var G__15042 = c__5525__auto__;
var G__15043 = cljs.core.count(c__5525__auto__);
var G__15044 = (0);
seq__14610 = G__15041;
chunk__14613 = G__15042;
count__14614 = G__15043;
i__14615 = G__15044;
continue;
} else {
var ext = cljs.core.first(seq__14610__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15045 = cljs.core.next(seq__14610__$1);
var G__15046 = null;
var G__15047 = (0);
var G__15048 = (0);
seq__14610 = G__15045;
chunk__14613 = G__15046;
count__14614 = G__15047;
i__14615 = G__15048;
continue;
} else {
var G__15049 = cljs.core.next(seq__14610__$1);
var G__15050 = null;
var G__15051 = (0);
var G__15052 = (0);
seq__14610 = G__15049;
chunk__14613 = G__15050;
count__14614 = G__15051;
i__14615 = G__15052;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14579){
var G__14580 = cljs.core.first(seq14579);
var seq14579__$1 = cljs.core.next(seq14579);
var G__14581 = cljs.core.first(seq14579__$1);
var seq14579__$2 = cljs.core.next(seq14579__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14580,G__14581,seq14579__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14701,p__14702){
var map__14703 = p__14701;
var map__14703__$1 = cljs.core.__destructure_map(map__14703);
var runtime = map__14703__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14703__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14704 = p__14702;
var map__14704__$1 = cljs.core.__destructure_map(map__14704);
var msg = map__14704__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14704__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14705 = cljs.core.deref(state_ref);
var map__14705__$1 = cljs.core.__destructure_map(map__14705);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14705__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14706,msg){
var map__14707 = p__14706;
var map__14707__$1 = cljs.core.__destructure_map(map__14707);
var runtime = map__14707__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14707__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14712,key,p__14713){
var map__14714 = p__14712;
var map__14714__$1 = cljs.core.__destructure_map(map__14714);
var state = map__14714__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14714__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14715 = p__14713;
var map__14715__$1 = cljs.core.__destructure_map(map__14715);
var spec = map__14715__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14715__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14715__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14726,key,spec){
var map__14727 = p__14726;
var map__14727__$1 = cljs.core.__destructure_map(map__14727);
var runtime = map__14727__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___15110 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___15110 == null)){
} else {
var on_welcome_15114 = temp__5808__auto___15110;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15114.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15114.cljs$core$IFn$_invoke$arity$0() : on_welcome_15114.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14729_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14729_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14730_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14730_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14731_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14731_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14732_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14732_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14734_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14734_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14743,key){
var map__14745 = p__14743;
var map__14745__$1 = cljs.core.__destructure_map(map__14745);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14745__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14747,msg){
var map__14750 = p__14747;
var map__14750__$1 = cljs.core.__destructure_map(map__14750);
var runtime = map__14750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14761,p__14762){
var map__14763 = p__14761;
var map__14763__$1 = cljs.core.__destructure_map(map__14763);
var runtime = map__14763__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14764 = p__14762;
var map__14764__$1 = cljs.core.__destructure_map(map__14764);
var msg = map__14764__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14764__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14764__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14813 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14815 = null;
var count__14816 = (0);
var i__14817 = (0);
while(true){
if((i__14817 < count__14816)){
var map__14963 = chunk__14815.cljs$core$IIndexed$_nth$arity$2(null,i__14817);
var map__14963__$1 = cljs.core.__destructure_map(map__14963);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15128 = seq__14813;
var G__15129 = chunk__14815;
var G__15130 = count__14816;
var G__15131 = (i__14817 + (1));
seq__14813 = G__15128;
chunk__14815 = G__15129;
count__14816 = G__15130;
i__14817 = G__15131;
continue;
} else {
var G__15132 = seq__14813;
var G__15133 = chunk__14815;
var G__15134 = count__14816;
var G__15135 = (i__14817 + (1));
seq__14813 = G__15132;
chunk__14815 = G__15133;
count__14816 = G__15134;
i__14817 = G__15135;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14813);
if(temp__5804__auto__){
var seq__14813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14813__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14813__$1);
var G__15136 = cljs.core.chunk_rest(seq__14813__$1);
var G__15137 = c__5525__auto__;
var G__15138 = cljs.core.count(c__5525__auto__);
var G__15139 = (0);
seq__14813 = G__15136;
chunk__14815 = G__15137;
count__14816 = G__15138;
i__14817 = G__15139;
continue;
} else {
var map__14986 = cljs.core.first(seq__14813__$1);
var map__14986__$1 = cljs.core.__destructure_map(map__14986);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14986__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15143 = cljs.core.next(seq__14813__$1);
var G__15144 = null;
var G__15145 = (0);
var G__15146 = (0);
seq__14813 = G__15143;
chunk__14815 = G__15144;
count__14816 = G__15145;
i__14817 = G__15146;
continue;
} else {
var G__15148 = cljs.core.next(seq__14813__$1);
var G__15149 = null;
var G__15150 = (0);
var G__15151 = (0);
seq__14813 = G__15148;
chunk__14815 = G__15149;
count__14816 = G__15150;
i__14817 = G__15151;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
