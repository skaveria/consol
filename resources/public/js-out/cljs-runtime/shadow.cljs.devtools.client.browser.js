goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21384 = arguments.length;
var i__5727__auto___21385 = (0);
while(true){
if((i__5727__auto___21385 < len__5726__auto___21384)){
args__5732__auto__.push((arguments[i__5727__auto___21385]));

var G__21386 = (i__5727__auto___21385 + (1));
i__5727__auto___21385 = G__21386;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20773){
var G__20774 = cljs.core.first(seq20773);
var seq20773__$1 = cljs.core.next(seq20773);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20774,seq20773__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20830 = cljs.core.seq(sources);
var chunk__20831 = null;
var count__20833 = (0);
var i__20834 = (0);
while(true){
if((i__20834 < count__20833)){
var map__20843 = chunk__20831.cljs$core$IIndexed$_nth$arity$2(null,i__20834);
var map__20843__$1 = cljs.core.__destructure_map(map__20843);
var src = map__20843__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20844){var e_21390 = e20844;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21390);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21390.message)].join('')));
}

var G__21391 = seq__20830;
var G__21392 = chunk__20831;
var G__21393 = count__20833;
var G__21394 = (i__20834 + (1));
seq__20830 = G__21391;
chunk__20831 = G__21392;
count__20833 = G__21393;
i__20834 = G__21394;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20830);
if(temp__5804__auto__){
var seq__20830__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20830__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20830__$1);
var G__21395 = cljs.core.chunk_rest(seq__20830__$1);
var G__21396 = c__5525__auto__;
var G__21397 = cljs.core.count(c__5525__auto__);
var G__21398 = (0);
seq__20830 = G__21395;
chunk__20831 = G__21396;
count__20833 = G__21397;
i__20834 = G__21398;
continue;
} else {
var map__20849 = cljs.core.first(seq__20830__$1);
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var src = map__20849__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20850){var e_21402 = e20850;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21402);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21402.message)].join('')));
}

var G__21403 = cljs.core.next(seq__20830__$1);
var G__21404 = null;
var G__21405 = (0);
var G__21406 = (0);
seq__20830 = G__21403;
chunk__20831 = G__21404;
count__20833 = G__21405;
i__20834 = G__21406;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20886 = cljs.core.seq(js_requires);
var chunk__20887 = null;
var count__20888 = (0);
var i__20889 = (0);
while(true){
if((i__20889 < count__20888)){
var js_ns = chunk__20887.cljs$core$IIndexed$_nth$arity$2(null,i__20889);
var require_str_21407 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21407);


var G__21408 = seq__20886;
var G__21409 = chunk__20887;
var G__21410 = count__20888;
var G__21411 = (i__20889 + (1));
seq__20886 = G__21408;
chunk__20887 = G__21409;
count__20888 = G__21410;
i__20889 = G__21411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20886);
if(temp__5804__auto__){
var seq__20886__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20886__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20886__$1);
var G__21412 = cljs.core.chunk_rest(seq__20886__$1);
var G__21413 = c__5525__auto__;
var G__21414 = cljs.core.count(c__5525__auto__);
var G__21415 = (0);
seq__20886 = G__21412;
chunk__20887 = G__21413;
count__20888 = G__21414;
i__20889 = G__21415;
continue;
} else {
var js_ns = cljs.core.first(seq__20886__$1);
var require_str_21416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21416);


var G__21417 = cljs.core.next(seq__20886__$1);
var G__21418 = null;
var G__21419 = (0);
var G__21420 = (0);
seq__20886 = G__21417;
chunk__20887 = G__21418;
count__20888 = G__21419;
i__20889 = G__21420;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20915){
var map__20918 = p__20915;
var map__20918__$1 = cljs.core.__destructure_map(map__20918);
var msg = map__20918__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20921(s__20922){
return (new cljs.core.LazySeq(null,(function (){
var s__20922__$1 = s__20922;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20922__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20937 = cljs.core.first(xs__6360__auto__);
var map__20937__$1 = cljs.core.__destructure_map(map__20937);
var src = map__20937__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20922__$1,map__20937,map__20937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20921_$_iter__20923(s__20924){
return (new cljs.core.LazySeq(null,((function (s__20922__$1,map__20937,map__20937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info){
return (function (){
var s__20924__$1 = s__20924;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20924__$1);
if(temp__5804__auto____$1){
var s__20924__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20924__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20924__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20926 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20925 = (0);
while(true){
if((i__20925 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20925);
cljs.core.chunk_append(b__20926,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21421 = (i__20925 + (1));
i__20925 = G__21421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20926),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20921_$_iter__20923(cljs.core.chunk_rest(s__20924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20926),null);
}
} else {
var warning = cljs.core.first(s__20924__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20921_$_iter__20923(cljs.core.rest(s__20924__$2)));
}
} else {
return null;
}
break;
}
});})(s__20922__$1,map__20937,map__20937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info))
,null,null));
});})(s__20922__$1,map__20937,map__20937__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20921(cljs.core.rest(s__20922__$1)));
} else {
var G__21422 = cljs.core.rest(s__20922__$1);
s__20922__$1 = G__21422;
continue;
}
} else {
var G__21423 = cljs.core.rest(s__20922__$1);
s__20922__$1 = G__21423;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20963_21424 = cljs.core.seq(warnings);
var chunk__20964_21425 = null;
var count__20965_21426 = (0);
var i__20966_21427 = (0);
while(true){
if((i__20966_21427 < count__20965_21426)){
var map__20982_21428 = chunk__20964_21425.cljs$core$IIndexed$_nth$arity$2(null,i__20966_21427);
var map__20982_21429__$1 = cljs.core.__destructure_map(map__20982_21428);
var w_21430 = map__20982_21429__$1;
var msg_21431__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982_21429__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982_21429__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982_21429__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982_21429__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21434)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21432),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21433),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21431__$1)].join(''));


var G__21435 = seq__20963_21424;
var G__21436 = chunk__20964_21425;
var G__21437 = count__20965_21426;
var G__21438 = (i__20966_21427 + (1));
seq__20963_21424 = G__21435;
chunk__20964_21425 = G__21436;
count__20965_21426 = G__21437;
i__20966_21427 = G__21438;
continue;
} else {
var temp__5804__auto___21439 = cljs.core.seq(seq__20963_21424);
if(temp__5804__auto___21439){
var seq__20963_21441__$1 = temp__5804__auto___21439;
if(cljs.core.chunked_seq_QMARK_(seq__20963_21441__$1)){
var c__5525__auto___21443 = cljs.core.chunk_first(seq__20963_21441__$1);
var G__21444 = cljs.core.chunk_rest(seq__20963_21441__$1);
var G__21445 = c__5525__auto___21443;
var G__21446 = cljs.core.count(c__5525__auto___21443);
var G__21447 = (0);
seq__20963_21424 = G__21444;
chunk__20964_21425 = G__21445;
count__20965_21426 = G__21446;
i__20966_21427 = G__21447;
continue;
} else {
var map__20986_21448 = cljs.core.first(seq__20963_21441__$1);
var map__20986_21449__$1 = cljs.core.__destructure_map(map__20986_21448);
var w_21450 = map__20986_21449__$1;
var msg_21451__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20986_21449__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20986_21449__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20986_21449__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20986_21449__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21454)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21452),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21453),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21451__$1)].join(''));


var G__21455 = cljs.core.next(seq__20963_21441__$1);
var G__21456 = null;
var G__21457 = (0);
var G__21458 = (0);
seq__20963_21424 = G__21455;
chunk__20964_21425 = G__21456;
count__20965_21426 = G__21457;
i__20966_21427 = G__21458;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20912_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20912_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20989 = node_uri;
G__20989.setQuery(null);

G__20989.setPath(new$);

return G__20989;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21022){
var map__21023 = p__21022;
var map__21023__$1 = cljs.core.__destructure_map(map__21023);
var msg = map__21023__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21024 = cljs.core.seq(updates);
var chunk__21026 = null;
var count__21027 = (0);
var i__21028 = (0);
while(true){
if((i__21028 < count__21027)){
var path = chunk__21026.cljs$core$IIndexed$_nth$arity$2(null,i__21028);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21197_21459 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21201_21460 = null;
var count__21202_21461 = (0);
var i__21203_21462 = (0);
while(true){
if((i__21203_21462 < count__21202_21461)){
var node_21463 = chunk__21201_21460.cljs$core$IIndexed$_nth$arity$2(null,i__21203_21462);
if(cljs.core.not(node_21463.shadow$old)){
var path_match_21464 = shadow.cljs.devtools.client.browser.match_paths(node_21463.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21464)){
var new_link_21465 = (function (){var G__21230 = node_21463.cloneNode(true);
G__21230.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21464),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21230;
})();
(node_21463.shadow$old = true);

(new_link_21465.onload = ((function (seq__21197_21459,chunk__21201_21460,count__21202_21461,i__21203_21462,seq__21024,chunk__21026,count__21027,i__21028,new_link_21465,path_match_21464,node_21463,path,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21232_21466 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21234_21467 = null;
var count__21235_21468 = (0);
var i__21236_21469 = (0);
while(true){
if((i__21236_21469 < count__21235_21468)){
var map__21241_21470 = chunk__21234_21467.cljs$core$IIndexed$_nth$arity$2(null,i__21236_21469);
var map__21241_21471__$1 = cljs.core.__destructure_map(map__21241_21470);
var task_21472 = map__21241_21471__$1;
var fn_str_21473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21241_21471__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21241_21471__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21475 = goog.getObjectByName(fn_str_21473,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21474)].join(''));

(fn_obj_21475.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21475.cljs$core$IFn$_invoke$arity$2(path,new_link_21465) : fn_obj_21475.call(null,path,new_link_21465));


var G__21476 = seq__21232_21466;
var G__21477 = chunk__21234_21467;
var G__21478 = count__21235_21468;
var G__21479 = (i__21236_21469 + (1));
seq__21232_21466 = G__21476;
chunk__21234_21467 = G__21477;
count__21235_21468 = G__21478;
i__21236_21469 = G__21479;
continue;
} else {
var temp__5804__auto___21480 = cljs.core.seq(seq__21232_21466);
if(temp__5804__auto___21480){
var seq__21232_21481__$1 = temp__5804__auto___21480;
if(cljs.core.chunked_seq_QMARK_(seq__21232_21481__$1)){
var c__5525__auto___21482 = cljs.core.chunk_first(seq__21232_21481__$1);
var G__21483 = cljs.core.chunk_rest(seq__21232_21481__$1);
var G__21484 = c__5525__auto___21482;
var G__21485 = cljs.core.count(c__5525__auto___21482);
var G__21486 = (0);
seq__21232_21466 = G__21483;
chunk__21234_21467 = G__21484;
count__21235_21468 = G__21485;
i__21236_21469 = G__21486;
continue;
} else {
var map__21244_21487 = cljs.core.first(seq__21232_21481__$1);
var map__21244_21488__$1 = cljs.core.__destructure_map(map__21244_21487);
var task_21489 = map__21244_21488__$1;
var fn_str_21490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244_21488__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244_21488__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21492 = goog.getObjectByName(fn_str_21490,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21491)].join(''));

(fn_obj_21492.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21492.cljs$core$IFn$_invoke$arity$2(path,new_link_21465) : fn_obj_21492.call(null,path,new_link_21465));


var G__21494 = cljs.core.next(seq__21232_21481__$1);
var G__21495 = null;
var G__21496 = (0);
var G__21497 = (0);
seq__21232_21466 = G__21494;
chunk__21234_21467 = G__21495;
count__21235_21468 = G__21496;
i__21236_21469 = G__21497;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21463);
});})(seq__21197_21459,chunk__21201_21460,count__21202_21461,i__21203_21462,seq__21024,chunk__21026,count__21027,i__21028,new_link_21465,path_match_21464,node_21463,path,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21464], 0));

goog.dom.insertSiblingAfter(new_link_21465,node_21463);


var G__21498 = seq__21197_21459;
var G__21499 = chunk__21201_21460;
var G__21500 = count__21202_21461;
var G__21501 = (i__21203_21462 + (1));
seq__21197_21459 = G__21498;
chunk__21201_21460 = G__21499;
count__21202_21461 = G__21500;
i__21203_21462 = G__21501;
continue;
} else {
var G__21502 = seq__21197_21459;
var G__21503 = chunk__21201_21460;
var G__21504 = count__21202_21461;
var G__21505 = (i__21203_21462 + (1));
seq__21197_21459 = G__21502;
chunk__21201_21460 = G__21503;
count__21202_21461 = G__21504;
i__21203_21462 = G__21505;
continue;
}
} else {
var G__21506 = seq__21197_21459;
var G__21507 = chunk__21201_21460;
var G__21508 = count__21202_21461;
var G__21509 = (i__21203_21462 + (1));
seq__21197_21459 = G__21506;
chunk__21201_21460 = G__21507;
count__21202_21461 = G__21508;
i__21203_21462 = G__21509;
continue;
}
} else {
var temp__5804__auto___21510 = cljs.core.seq(seq__21197_21459);
if(temp__5804__auto___21510){
var seq__21197_21511__$1 = temp__5804__auto___21510;
if(cljs.core.chunked_seq_QMARK_(seq__21197_21511__$1)){
var c__5525__auto___21512 = cljs.core.chunk_first(seq__21197_21511__$1);
var G__21513 = cljs.core.chunk_rest(seq__21197_21511__$1);
var G__21514 = c__5525__auto___21512;
var G__21515 = cljs.core.count(c__5525__auto___21512);
var G__21516 = (0);
seq__21197_21459 = G__21513;
chunk__21201_21460 = G__21514;
count__21202_21461 = G__21515;
i__21203_21462 = G__21516;
continue;
} else {
var node_21517 = cljs.core.first(seq__21197_21511__$1);
if(cljs.core.not(node_21517.shadow$old)){
var path_match_21518 = shadow.cljs.devtools.client.browser.match_paths(node_21517.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21518)){
var new_link_21519 = (function (){var G__21248 = node_21517.cloneNode(true);
G__21248.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21518),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21248;
})();
(node_21517.shadow$old = true);

(new_link_21519.onload = ((function (seq__21197_21459,chunk__21201_21460,count__21202_21461,i__21203_21462,seq__21024,chunk__21026,count__21027,i__21028,new_link_21519,path_match_21518,node_21517,seq__21197_21511__$1,temp__5804__auto___21510,path,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21249_21520 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21251_21521 = null;
var count__21252_21522 = (0);
var i__21253_21523 = (0);
while(true){
if((i__21253_21523 < count__21252_21522)){
var map__21257_21524 = chunk__21251_21521.cljs$core$IIndexed$_nth$arity$2(null,i__21253_21523);
var map__21257_21525__$1 = cljs.core.__destructure_map(map__21257_21524);
var task_21526 = map__21257_21525__$1;
var fn_str_21527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257_21525__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257_21525__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21529 = goog.getObjectByName(fn_str_21527,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21528)].join(''));

(fn_obj_21529.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21529.cljs$core$IFn$_invoke$arity$2(path,new_link_21519) : fn_obj_21529.call(null,path,new_link_21519));


var G__21530 = seq__21249_21520;
var G__21531 = chunk__21251_21521;
var G__21532 = count__21252_21522;
var G__21533 = (i__21253_21523 + (1));
seq__21249_21520 = G__21530;
chunk__21251_21521 = G__21531;
count__21252_21522 = G__21532;
i__21253_21523 = G__21533;
continue;
} else {
var temp__5804__auto___21534__$1 = cljs.core.seq(seq__21249_21520);
if(temp__5804__auto___21534__$1){
var seq__21249_21535__$1 = temp__5804__auto___21534__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21249_21535__$1)){
var c__5525__auto___21536 = cljs.core.chunk_first(seq__21249_21535__$1);
var G__21537 = cljs.core.chunk_rest(seq__21249_21535__$1);
var G__21538 = c__5525__auto___21536;
var G__21539 = cljs.core.count(c__5525__auto___21536);
var G__21540 = (0);
seq__21249_21520 = G__21537;
chunk__21251_21521 = G__21538;
count__21252_21522 = G__21539;
i__21253_21523 = G__21540;
continue;
} else {
var map__21258_21541 = cljs.core.first(seq__21249_21535__$1);
var map__21258_21542__$1 = cljs.core.__destructure_map(map__21258_21541);
var task_21543 = map__21258_21542__$1;
var fn_str_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21258_21542__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21258_21542__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21546 = goog.getObjectByName(fn_str_21544,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21545)].join(''));

(fn_obj_21546.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21546.cljs$core$IFn$_invoke$arity$2(path,new_link_21519) : fn_obj_21546.call(null,path,new_link_21519));


var G__21547 = cljs.core.next(seq__21249_21535__$1);
var G__21548 = null;
var G__21549 = (0);
var G__21550 = (0);
seq__21249_21520 = G__21547;
chunk__21251_21521 = G__21548;
count__21252_21522 = G__21549;
i__21253_21523 = G__21550;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21517);
});})(seq__21197_21459,chunk__21201_21460,count__21202_21461,i__21203_21462,seq__21024,chunk__21026,count__21027,i__21028,new_link_21519,path_match_21518,node_21517,seq__21197_21511__$1,temp__5804__auto___21510,path,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21518], 0));

goog.dom.insertSiblingAfter(new_link_21519,node_21517);


var G__21551 = cljs.core.next(seq__21197_21511__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__21197_21459 = G__21551;
chunk__21201_21460 = G__21552;
count__21202_21461 = G__21553;
i__21203_21462 = G__21554;
continue;
} else {
var G__21555 = cljs.core.next(seq__21197_21511__$1);
var G__21556 = null;
var G__21557 = (0);
var G__21558 = (0);
seq__21197_21459 = G__21555;
chunk__21201_21460 = G__21556;
count__21202_21461 = G__21557;
i__21203_21462 = G__21558;
continue;
}
} else {
var G__21559 = cljs.core.next(seq__21197_21511__$1);
var G__21560 = null;
var G__21561 = (0);
var G__21562 = (0);
seq__21197_21459 = G__21559;
chunk__21201_21460 = G__21560;
count__21202_21461 = G__21561;
i__21203_21462 = G__21562;
continue;
}
}
} else {
}
}
break;
}


var G__21563 = seq__21024;
var G__21564 = chunk__21026;
var G__21565 = count__21027;
var G__21566 = (i__21028 + (1));
seq__21024 = G__21563;
chunk__21026 = G__21564;
count__21027 = G__21565;
i__21028 = G__21566;
continue;
} else {
var G__21567 = seq__21024;
var G__21568 = chunk__21026;
var G__21569 = count__21027;
var G__21570 = (i__21028 + (1));
seq__21024 = G__21567;
chunk__21026 = G__21568;
count__21027 = G__21569;
i__21028 = G__21570;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21024);
if(temp__5804__auto__){
var seq__21024__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21024__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21024__$1);
var G__21571 = cljs.core.chunk_rest(seq__21024__$1);
var G__21572 = c__5525__auto__;
var G__21573 = cljs.core.count(c__5525__auto__);
var G__21574 = (0);
seq__21024 = G__21571;
chunk__21026 = G__21572;
count__21027 = G__21573;
i__21028 = G__21574;
continue;
} else {
var path = cljs.core.first(seq__21024__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21261_21575 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21265_21576 = null;
var count__21266_21577 = (0);
var i__21267_21578 = (0);
while(true){
if((i__21267_21578 < count__21266_21577)){
var node_21579 = chunk__21265_21576.cljs$core$IIndexed$_nth$arity$2(null,i__21267_21578);
if(cljs.core.not(node_21579.shadow$old)){
var path_match_21580 = shadow.cljs.devtools.client.browser.match_paths(node_21579.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21580)){
var new_link_21581 = (function (){var G__21302 = node_21579.cloneNode(true);
G__21302.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21580),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21302;
})();
(node_21579.shadow$old = true);

(new_link_21581.onload = ((function (seq__21261_21575,chunk__21265_21576,count__21266_21577,i__21267_21578,seq__21024,chunk__21026,count__21027,i__21028,new_link_21581,path_match_21580,node_21579,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21303_21582 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21305_21583 = null;
var count__21306_21584 = (0);
var i__21307_21585 = (0);
while(true){
if((i__21307_21585 < count__21306_21584)){
var map__21312_21586 = chunk__21305_21583.cljs$core$IIndexed$_nth$arity$2(null,i__21307_21585);
var map__21312_21587__$1 = cljs.core.__destructure_map(map__21312_21586);
var task_21588 = map__21312_21587__$1;
var fn_str_21589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312_21587__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312_21587__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21591 = goog.getObjectByName(fn_str_21589,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21590)].join(''));

(fn_obj_21591.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21591.cljs$core$IFn$_invoke$arity$2(path,new_link_21581) : fn_obj_21591.call(null,path,new_link_21581));


var G__21592 = seq__21303_21582;
var G__21593 = chunk__21305_21583;
var G__21594 = count__21306_21584;
var G__21595 = (i__21307_21585 + (1));
seq__21303_21582 = G__21592;
chunk__21305_21583 = G__21593;
count__21306_21584 = G__21594;
i__21307_21585 = G__21595;
continue;
} else {
var temp__5804__auto___21596__$1 = cljs.core.seq(seq__21303_21582);
if(temp__5804__auto___21596__$1){
var seq__21303_21597__$1 = temp__5804__auto___21596__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21303_21597__$1)){
var c__5525__auto___21598 = cljs.core.chunk_first(seq__21303_21597__$1);
var G__21599 = cljs.core.chunk_rest(seq__21303_21597__$1);
var G__21600 = c__5525__auto___21598;
var G__21601 = cljs.core.count(c__5525__auto___21598);
var G__21602 = (0);
seq__21303_21582 = G__21599;
chunk__21305_21583 = G__21600;
count__21306_21584 = G__21601;
i__21307_21585 = G__21602;
continue;
} else {
var map__21313_21603 = cljs.core.first(seq__21303_21597__$1);
var map__21313_21604__$1 = cljs.core.__destructure_map(map__21313_21603);
var task_21605 = map__21313_21604__$1;
var fn_str_21606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313_21604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313_21604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21608 = goog.getObjectByName(fn_str_21606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21607)].join(''));

(fn_obj_21608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21608.cljs$core$IFn$_invoke$arity$2(path,new_link_21581) : fn_obj_21608.call(null,path,new_link_21581));


var G__21609 = cljs.core.next(seq__21303_21597__$1);
var G__21610 = null;
var G__21611 = (0);
var G__21612 = (0);
seq__21303_21582 = G__21609;
chunk__21305_21583 = G__21610;
count__21306_21584 = G__21611;
i__21307_21585 = G__21612;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21579);
});})(seq__21261_21575,chunk__21265_21576,count__21266_21577,i__21267_21578,seq__21024,chunk__21026,count__21027,i__21028,new_link_21581,path_match_21580,node_21579,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21580], 0));

goog.dom.insertSiblingAfter(new_link_21581,node_21579);


var G__21613 = seq__21261_21575;
var G__21614 = chunk__21265_21576;
var G__21615 = count__21266_21577;
var G__21616 = (i__21267_21578 + (1));
seq__21261_21575 = G__21613;
chunk__21265_21576 = G__21614;
count__21266_21577 = G__21615;
i__21267_21578 = G__21616;
continue;
} else {
var G__21617 = seq__21261_21575;
var G__21618 = chunk__21265_21576;
var G__21619 = count__21266_21577;
var G__21620 = (i__21267_21578 + (1));
seq__21261_21575 = G__21617;
chunk__21265_21576 = G__21618;
count__21266_21577 = G__21619;
i__21267_21578 = G__21620;
continue;
}
} else {
var G__21621 = seq__21261_21575;
var G__21622 = chunk__21265_21576;
var G__21623 = count__21266_21577;
var G__21624 = (i__21267_21578 + (1));
seq__21261_21575 = G__21621;
chunk__21265_21576 = G__21622;
count__21266_21577 = G__21623;
i__21267_21578 = G__21624;
continue;
}
} else {
var temp__5804__auto___21625__$1 = cljs.core.seq(seq__21261_21575);
if(temp__5804__auto___21625__$1){
var seq__21261_21626__$1 = temp__5804__auto___21625__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21261_21626__$1)){
var c__5525__auto___21627 = cljs.core.chunk_first(seq__21261_21626__$1);
var G__21628 = cljs.core.chunk_rest(seq__21261_21626__$1);
var G__21629 = c__5525__auto___21627;
var G__21630 = cljs.core.count(c__5525__auto___21627);
var G__21631 = (0);
seq__21261_21575 = G__21628;
chunk__21265_21576 = G__21629;
count__21266_21577 = G__21630;
i__21267_21578 = G__21631;
continue;
} else {
var node_21632 = cljs.core.first(seq__21261_21626__$1);
if(cljs.core.not(node_21632.shadow$old)){
var path_match_21633 = shadow.cljs.devtools.client.browser.match_paths(node_21632.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21633)){
var new_link_21634 = (function (){var G__21314 = node_21632.cloneNode(true);
G__21314.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21633),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21314;
})();
(node_21632.shadow$old = true);

(new_link_21634.onload = ((function (seq__21261_21575,chunk__21265_21576,count__21266_21577,i__21267_21578,seq__21024,chunk__21026,count__21027,i__21028,new_link_21634,path_match_21633,node_21632,seq__21261_21626__$1,temp__5804__auto___21625__$1,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info){
return (function (e){
var seq__21315_21635 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21317_21636 = null;
var count__21318_21637 = (0);
var i__21319_21638 = (0);
while(true){
if((i__21319_21638 < count__21318_21637)){
var map__21323_21639 = chunk__21317_21636.cljs$core$IIndexed$_nth$arity$2(null,i__21319_21638);
var map__21323_21640__$1 = cljs.core.__destructure_map(map__21323_21639);
var task_21641 = map__21323_21640__$1;
var fn_str_21642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323_21640__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323_21640__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21644 = goog.getObjectByName(fn_str_21642,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21643)].join(''));

(fn_obj_21644.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21644.cljs$core$IFn$_invoke$arity$2(path,new_link_21634) : fn_obj_21644.call(null,path,new_link_21634));


var G__21645 = seq__21315_21635;
var G__21646 = chunk__21317_21636;
var G__21647 = count__21318_21637;
var G__21648 = (i__21319_21638 + (1));
seq__21315_21635 = G__21645;
chunk__21317_21636 = G__21646;
count__21318_21637 = G__21647;
i__21319_21638 = G__21648;
continue;
} else {
var temp__5804__auto___21649__$2 = cljs.core.seq(seq__21315_21635);
if(temp__5804__auto___21649__$2){
var seq__21315_21650__$1 = temp__5804__auto___21649__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21315_21650__$1)){
var c__5525__auto___21651 = cljs.core.chunk_first(seq__21315_21650__$1);
var G__21652 = cljs.core.chunk_rest(seq__21315_21650__$1);
var G__21653 = c__5525__auto___21651;
var G__21654 = cljs.core.count(c__5525__auto___21651);
var G__21655 = (0);
seq__21315_21635 = G__21652;
chunk__21317_21636 = G__21653;
count__21318_21637 = G__21654;
i__21319_21638 = G__21655;
continue;
} else {
var map__21324_21656 = cljs.core.first(seq__21315_21650__$1);
var map__21324_21657__$1 = cljs.core.__destructure_map(map__21324_21656);
var task_21658 = map__21324_21657__$1;
var fn_str_21659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324_21657__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324_21657__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21661 = goog.getObjectByName(fn_str_21659,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21660)].join(''));

(fn_obj_21661.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21661.cljs$core$IFn$_invoke$arity$2(path,new_link_21634) : fn_obj_21661.call(null,path,new_link_21634));


var G__21662 = cljs.core.next(seq__21315_21650__$1);
var G__21663 = null;
var G__21664 = (0);
var G__21665 = (0);
seq__21315_21635 = G__21662;
chunk__21317_21636 = G__21663;
count__21318_21637 = G__21664;
i__21319_21638 = G__21665;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21632);
});})(seq__21261_21575,chunk__21265_21576,count__21266_21577,i__21267_21578,seq__21024,chunk__21026,count__21027,i__21028,new_link_21634,path_match_21633,node_21632,seq__21261_21626__$1,temp__5804__auto___21625__$1,path,seq__21024__$1,temp__5804__auto__,map__21023,map__21023__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21633], 0));

goog.dom.insertSiblingAfter(new_link_21634,node_21632);


var G__21666 = cljs.core.next(seq__21261_21626__$1);
var G__21667 = null;
var G__21668 = (0);
var G__21669 = (0);
seq__21261_21575 = G__21666;
chunk__21265_21576 = G__21667;
count__21266_21577 = G__21668;
i__21267_21578 = G__21669;
continue;
} else {
var G__21670 = cljs.core.next(seq__21261_21626__$1);
var G__21671 = null;
var G__21672 = (0);
var G__21673 = (0);
seq__21261_21575 = G__21670;
chunk__21265_21576 = G__21671;
count__21266_21577 = G__21672;
i__21267_21578 = G__21673;
continue;
}
} else {
var G__21674 = cljs.core.next(seq__21261_21626__$1);
var G__21675 = null;
var G__21676 = (0);
var G__21677 = (0);
seq__21261_21575 = G__21674;
chunk__21265_21576 = G__21675;
count__21266_21577 = G__21676;
i__21267_21578 = G__21677;
continue;
}
}
} else {
}
}
break;
}


var G__21678 = cljs.core.next(seq__21024__$1);
var G__21679 = null;
var G__21680 = (0);
var G__21681 = (0);
seq__21024 = G__21678;
chunk__21026 = G__21679;
count__21027 = G__21680;
i__21028 = G__21681;
continue;
} else {
var G__21682 = cljs.core.next(seq__21024__$1);
var G__21683 = null;
var G__21684 = (0);
var G__21685 = (0);
seq__21024 = G__21682;
chunk__21026 = G__21683;
count__21027 = G__21684;
i__21028 = G__21685;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21346 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21346) : success.call(null,G__21346));
}catch (e21345){var e = e21345;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21347,success,fail){
var map__21348 = p__21347;
var map__21348__$1 = cljs.core.__destructure_map(map__21348);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21348__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21350 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21350) : success.call(null,G__21350));
}catch (e21349){var e = e21349;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21351,done,error){
var map__21352 = p__21351;
var map__21352__$1 = cljs.core.__destructure_map(map__21352);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21352__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21353,done,error){
var map__21354 = p__21353;
var map__21354__$1 = cljs.core.__destructure_map(map__21354);
var msg = map__21354__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21355){
var map__21356 = p__21355;
var map__21356__$1 = cljs.core.__destructure_map(map__21356);
var src = map__21356__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21359 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21359) : done.call(null,G__21359));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21361){
var map__21362 = p__21361;
var map__21362__$1 = cljs.core.__destructure_map(map__21362);
var msg__$1 = map__21362__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21363){var ex = e21363;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21364){
var map__21365 = p__21364;
var map__21365__$1 = cljs.core.__destructure_map(map__21365);
var env = map__21365__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21365__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21376){
var map__21377 = p__21376;
var map__21377__$1 = cljs.core.__destructure_map(map__21377);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21377__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21378){
var map__21379 = p__21378;
var map__21379__$1 = cljs.core.__destructure_map(map__21379);
var svc = map__21379__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
