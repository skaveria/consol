goog.provide('slab.panes');
slab.panes.token_test = cljs.core.re_pattern("\\{\\{[a-zA-Z0-9_]+\\}\\}");
slab.panes.token_repl = cljs.core.re_pattern("\\{\\{([a-zA-Z0-9_]+)\\}\\}");
slab.panes.apply_template = (function slab$panes$apply_template(tmpl,state){
var tmpl__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tmpl);
if(cljs.core.not(cljs.core.re_find(slab.panes.token_test,tmpl__$1))){
return tmpl__$1;
} else {
return clojure.string.replace(tmpl__$1,slab.panes.token_repl,(function (p__6078){
var vec__6084 = p__6078;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6084,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6084,(1),null);
var v = (cljs.core.truth_(state)?(state[k]):null);
if((((v == null)) || ((void 0 === v)))){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
}));
}
});
slab.panes.classify_value = (function slab$panes$classify_value(v){
var t = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
if(((clojure.string.includes_QMARK_(t,"error")) || (((clojure.string.includes_QMARK_(t,"failed")) || (((clojure.string.includes_QMARK_(t,"offline")) || (clojure.string.includes_QMARK_(t,"down")))))))){
return "bad";
} else {
if(((clojure.string.includes_QMARK_(t,"warn")) || (((clojure.string.includes_QMARK_(t,"charging")) || (((clojure.string.includes_QMARK_(t,"dirty")) || (((clojure.string.includes_QMARK_(t,"throttl")) || (clojure.string.includes_QMARK_(t,"hot")))))))))){
return "warn";
} else {
return "";

}
}
});
slab.panes.split_kv = (function slab$panes$split_kv(line){
if(clojure.string.includes_QMARK_(line,"::")){
var vec__6087 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/::/);
var seq__6088 = cljs.core.seq(vec__6087);
var first__6089 = cljs.core.first(seq__6088);
var seq__6088__$1 = cljs.core.next(seq__6088);
var k = first__6089;
var more = seq__6088__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2("::",more))], null);
} else {
var temp__5804__auto__ = cljs.core.re_matches(/^\s*([^\s]+)\s{2,}(.+)$/,line);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__6090 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6090,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6090,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6090,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);
} else {
return null;
}

}
});
slab.panes.mk_el = (function slab$panes$mk_el(var_args){
var G__6095 = arguments.length;
switch (G__6095) {
case 1:
return slab.panes.mk_el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(slab.panes.mk_el.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(tag);
}));

(slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2 = (function (tag,class_name){
var e = document.createElement(tag);
(e.className = class_name);

return e;
}));

(slab.panes.mk_el.cljs$lang$maxFixedArity = 2);

slab.panes.set_text_BANG_ = (function slab$panes$set_text_BANG_(el,s){
(el.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));

return el;
});
slab.panes.append_BANG_ = (function slab$panes$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
slab.panes.mount_pane_BANG_ = (function slab$panes$mount_pane_BANG_(pre){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",pre.getAttribute("data-slab-mounted"))){
return null;
} else {
pre.setAttribute("data-slab-mounted","1");

var raw = clojure.string.trimr(clojure.string.replace(pre.textContent,/\r\n/,"\n"));
var lines = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split.cljs$core$IFn$_invoke$arity$2(raw,/\n/)));
var vec__6100 = ((((cljs.core.seq(lines)) && (clojure.string.starts_with_QMARK_(cljs.core.first(lines),"@"))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lines),(1)))),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var pane_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6100,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6100,(1),null);
var _ = (cljs.core.truth_(pane_type)?pre.classList.add(["pane-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_type)].join('')):null);
var non_empty = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6097_SHARP_){
return cljs.core.seq(clojure.string.trim(p1__6097_SHARP_));
}),lines__$1));
var kv_pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(slab.panes.split_kv,non_empty)));
var is_kv = (cljs.core.count(kv_pairs) >= (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = Math.floor((0.7 * cljs.core.count(non_empty)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
if((!(is_kv))){
pre.setAttribute("data-pane-kind","text");

return pre.setAttribute("data-template",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1));
} else {
pre.setAttribute("data-pane-kind","kv");

pre.classList.add("pane-kv");

var kv = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$1("div");
(kv.className = "kv");

var seq__6110_6268 = cljs.core.seq(kv_pairs);
var chunk__6111_6269 = null;
var count__6112_6270 = (0);
var i__6113_6271 = (0);
while(true){
if((i__6113_6271 < count__6112_6270)){
var vec__6126_6276 = chunk__6111_6269.cljs$core$IIndexed$_nth$arity$2(null,i__6113_6271);
var k_6277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6126_6276,(0),null);
var v_6278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6126_6276,(1),null);
var row_6281 = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","row");
var kdiv_6282 = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","k");
var vdiv_6283 = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","v");
slab.panes.set_text_BANG_(kdiv_6282,k_6277);

vdiv_6283.setAttribute("data-template",v_6278);

slab.panes.set_text_BANG_(vdiv_6283,v_6278);

slab.panes.append_BANG_(row_6281,kdiv_6282);

slab.panes.append_BANG_(row_6281,vdiv_6283);

slab.panes.append_BANG_(kv,row_6281);


var G__6294 = seq__6110_6268;
var G__6295 = chunk__6111_6269;
var G__6296 = count__6112_6270;
var G__6297 = (i__6113_6271 + (1));
seq__6110_6268 = G__6294;
chunk__6111_6269 = G__6295;
count__6112_6270 = G__6296;
i__6113_6271 = G__6297;
continue;
} else {
var temp__5804__auto___6298 = cljs.core.seq(seq__6110_6268);
if(temp__5804__auto___6298){
var seq__6110_6299__$1 = temp__5804__auto___6298;
if(cljs.core.chunked_seq_QMARK_(seq__6110_6299__$1)){
var c__5525__auto___6300 = cljs.core.chunk_first(seq__6110_6299__$1);
var G__6301 = cljs.core.chunk_rest(seq__6110_6299__$1);
var G__6302 = c__5525__auto___6300;
var G__6303 = cljs.core.count(c__5525__auto___6300);
var G__6304 = (0);
seq__6110_6268 = G__6301;
chunk__6111_6269 = G__6302;
count__6112_6270 = G__6303;
i__6113_6271 = G__6304;
continue;
} else {
var vec__6129_6305 = cljs.core.first(seq__6110_6299__$1);
var k_6306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6129_6305,(0),null);
var v_6307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6129_6305,(1),null);
var row_6308 = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","row");
var kdiv_6309 = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","k");
var vdiv_6310 = slab.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","v");
slab.panes.set_text_BANG_(kdiv_6309,k_6306);

vdiv_6310.setAttribute("data-template",v_6307);

slab.panes.set_text_BANG_(vdiv_6310,v_6307);

slab.panes.append_BANG_(row_6308,kdiv_6309);

slab.panes.append_BANG_(row_6308,vdiv_6310);

slab.panes.append_BANG_(kv,row_6308);


var G__6311 = cljs.core.next(seq__6110_6299__$1);
var G__6312 = null;
var G__6313 = (0);
var G__6314 = (0);
seq__6110_6268 = G__6311;
chunk__6111_6269 = G__6312;
count__6112_6270 = G__6313;
i__6113_6271 = G__6314;
continue;
}
} else {
}
}
break;
}

(pre.textContent = "");

return slab.panes.append_BANG_(pre,kv);
}
}
});
slab.panes.mount_all_panes_BANG_ = (function slab$panes$mount_all_panes_BANG_(){
var seq__6137 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("pre.example")));
var chunk__6138 = null;
var count__6139 = (0);
var i__6140 = (0);
while(true){
if((i__6140 < count__6139)){
var pre = chunk__6138.cljs$core$IIndexed$_nth$arity$2(null,i__6140);
slab.panes.mount_pane_BANG_(pre);


var G__6315 = seq__6137;
var G__6316 = chunk__6138;
var G__6317 = count__6139;
var G__6318 = (i__6140 + (1));
seq__6137 = G__6315;
chunk__6138 = G__6316;
count__6139 = G__6317;
i__6140 = G__6318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__6137);
if(temp__5804__auto__){
var seq__6137__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6137__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__6137__$1);
var G__6319 = cljs.core.chunk_rest(seq__6137__$1);
var G__6320 = c__5525__auto__;
var G__6321 = cljs.core.count(c__5525__auto__);
var G__6322 = (0);
seq__6137 = G__6319;
chunk__6138 = G__6320;
count__6139 = G__6321;
i__6140 = G__6322;
continue;
} else {
var pre = cljs.core.first(seq__6137__$1);
slab.panes.mount_pane_BANG_(pre);


var G__6323 = cljs.core.next(seq__6137__$1);
var G__6324 = null;
var G__6325 = (0);
var G__6326 = (0);
seq__6137 = G__6323;
chunk__6138 = G__6324;
count__6139 = G__6325;
i__6140 = G__6326;
continue;
}
} else {
return null;
}
}
break;
}
});
slab.panes.render_panes_BANG_ = (function slab$panes$render_panes_BANG_(state){
var seq__6141 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("pre.example")));
var chunk__6142 = null;
var count__6143 = (0);
var i__6144 = (0);
while(true){
if((i__6144 < count__6143)){
var pre = chunk__6142.cljs$core$IIndexed$_nth$arity$2(null,i__6144);
var kind_6327 = pre.getAttribute("data-pane-kind");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_6327,"text")){
var tmpl_6328 = pre.getAttribute("data-template");
(pre.textContent = slab.panes.apply_template(tmpl_6328,state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_6327,"kv")){
var seq__6164_6329 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(pre.querySelectorAll(".v")));
var chunk__6165_6330 = null;
var count__6166_6331 = (0);
var i__6167_6332 = (0);
while(true){
if((i__6167_6332 < count__6166_6331)){
var vdiv_6333 = chunk__6165_6330.cljs$core$IIndexed$_nth$arity$2(null,i__6167_6332);
var tmpl_6334 = vdiv_6333.getAttribute("data-template");
var rendered_6335 = slab.panes.apply_template(tmpl_6334,state);
var klass_6336 = slab.panes.classify_value(rendered_6335);
(vdiv_6333.textContent = rendered_6335);

vdiv_6333.classList.remove("warn");

vdiv_6333.classList.remove("bad");

if(cljs.core.seq(klass_6336)){
vdiv_6333.classList.add(klass_6336);
} else {
}


var G__6337 = seq__6164_6329;
var G__6338 = chunk__6165_6330;
var G__6339 = count__6166_6331;
var G__6340 = (i__6167_6332 + (1));
seq__6164_6329 = G__6337;
chunk__6165_6330 = G__6338;
count__6166_6331 = G__6339;
i__6167_6332 = G__6340;
continue;
} else {
var temp__5804__auto___6341 = cljs.core.seq(seq__6164_6329);
if(temp__5804__auto___6341){
var seq__6164_6342__$1 = temp__5804__auto___6341;
if(cljs.core.chunked_seq_QMARK_(seq__6164_6342__$1)){
var c__5525__auto___6343 = cljs.core.chunk_first(seq__6164_6342__$1);
var G__6344 = cljs.core.chunk_rest(seq__6164_6342__$1);
var G__6345 = c__5525__auto___6343;
var G__6346 = cljs.core.count(c__5525__auto___6343);
var G__6347 = (0);
seq__6164_6329 = G__6344;
chunk__6165_6330 = G__6345;
count__6166_6331 = G__6346;
i__6167_6332 = G__6347;
continue;
} else {
var vdiv_6348 = cljs.core.first(seq__6164_6342__$1);
var tmpl_6349 = vdiv_6348.getAttribute("data-template");
var rendered_6350 = slab.panes.apply_template(tmpl_6349,state);
var klass_6351 = slab.panes.classify_value(rendered_6350);
(vdiv_6348.textContent = rendered_6350);

vdiv_6348.classList.remove("warn");

vdiv_6348.classList.remove("bad");

if(cljs.core.seq(klass_6351)){
vdiv_6348.classList.add(klass_6351);
} else {
}


var G__6352 = cljs.core.next(seq__6164_6342__$1);
var G__6353 = null;
var G__6354 = (0);
var G__6355 = (0);
seq__6164_6329 = G__6352;
chunk__6165_6330 = G__6353;
count__6166_6331 = G__6354;
i__6167_6332 = G__6355;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__6356 = seq__6141;
var G__6357 = chunk__6142;
var G__6358 = count__6143;
var G__6359 = (i__6144 + (1));
seq__6141 = G__6356;
chunk__6142 = G__6357;
count__6143 = G__6358;
i__6144 = G__6359;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__6141);
if(temp__5804__auto__){
var seq__6141__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6141__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__6141__$1);
var G__6360 = cljs.core.chunk_rest(seq__6141__$1);
var G__6361 = c__5525__auto__;
var G__6362 = cljs.core.count(c__5525__auto__);
var G__6363 = (0);
seq__6141 = G__6360;
chunk__6142 = G__6361;
count__6143 = G__6362;
i__6144 = G__6363;
continue;
} else {
var pre = cljs.core.first(seq__6141__$1);
var kind_6364 = pre.getAttribute("data-pane-kind");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_6364,"text")){
var tmpl_6365 = pre.getAttribute("data-template");
(pre.textContent = slab.panes.apply_template(tmpl_6365,state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_6364,"kv")){
var seq__6172_6366 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(pre.querySelectorAll(".v")));
var chunk__6173_6367 = null;
var count__6174_6368 = (0);
var i__6175_6369 = (0);
while(true){
if((i__6175_6369 < count__6174_6368)){
var vdiv_6370 = chunk__6173_6367.cljs$core$IIndexed$_nth$arity$2(null,i__6175_6369);
var tmpl_6371 = vdiv_6370.getAttribute("data-template");
var rendered_6372 = slab.panes.apply_template(tmpl_6371,state);
var klass_6373 = slab.panes.classify_value(rendered_6372);
(vdiv_6370.textContent = rendered_6372);

vdiv_6370.classList.remove("warn");

vdiv_6370.classList.remove("bad");

if(cljs.core.seq(klass_6373)){
vdiv_6370.classList.add(klass_6373);
} else {
}


var G__6374 = seq__6172_6366;
var G__6375 = chunk__6173_6367;
var G__6376 = count__6174_6368;
var G__6377 = (i__6175_6369 + (1));
seq__6172_6366 = G__6374;
chunk__6173_6367 = G__6375;
count__6174_6368 = G__6376;
i__6175_6369 = G__6377;
continue;
} else {
var temp__5804__auto___6378__$1 = cljs.core.seq(seq__6172_6366);
if(temp__5804__auto___6378__$1){
var seq__6172_6379__$1 = temp__5804__auto___6378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6172_6379__$1)){
var c__5525__auto___6380 = cljs.core.chunk_first(seq__6172_6379__$1);
var G__6381 = cljs.core.chunk_rest(seq__6172_6379__$1);
var G__6382 = c__5525__auto___6380;
var G__6383 = cljs.core.count(c__5525__auto___6380);
var G__6384 = (0);
seq__6172_6366 = G__6381;
chunk__6173_6367 = G__6382;
count__6174_6368 = G__6383;
i__6175_6369 = G__6384;
continue;
} else {
var vdiv_6385 = cljs.core.first(seq__6172_6379__$1);
var tmpl_6386 = vdiv_6385.getAttribute("data-template");
var rendered_6387 = slab.panes.apply_template(tmpl_6386,state);
var klass_6388 = slab.panes.classify_value(rendered_6387);
(vdiv_6385.textContent = rendered_6387);

vdiv_6385.classList.remove("warn");

vdiv_6385.classList.remove("bad");

if(cljs.core.seq(klass_6388)){
vdiv_6385.classList.add(klass_6388);
} else {
}


var G__6389 = cljs.core.next(seq__6172_6379__$1);
var G__6390 = null;
var G__6391 = (0);
var G__6392 = (0);
seq__6172_6366 = G__6389;
chunk__6173_6367 = G__6390;
count__6174_6368 = G__6391;
i__6175_6369 = G__6392;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__6393 = cljs.core.next(seq__6141__$1);
var G__6394 = null;
var G__6395 = (0);
var G__6396 = (0);
seq__6141 = G__6393;
chunk__6142 = G__6394;
count__6143 = G__6395;
i__6144 = G__6396;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=slab.panes.js.map
