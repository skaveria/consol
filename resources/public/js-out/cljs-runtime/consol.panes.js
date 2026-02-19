goog.provide('consol.panes');
consol.panes.token_test = cljs.core.re_pattern("\\{\\{[a-zA-Z0-9_]+\\}\\}");
consol.panes.token_repl = cljs.core.re_pattern("\\{\\{([a-zA-Z0-9_]+)\\}\\}");
consol.panes.apply_template = (function consol$panes$apply_template(tmpl,state){
var tmpl__$1 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tmpl));
if(cljs.core.not(cljs.core.re_find(consol.panes.token_test,tmpl__$1))){
return tmpl__$1;
} else {
return clojure.string.replace(tmpl__$1,consol.panes.token_repl,(function (p__8653){
var vec__8654 = p__8653;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8654,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8654,(1),null);
var v = (cljs.core.truth_(state)?(state[k]):null);
if((((v == null)) || ((void 0 === v)))){
return "";
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
}
}));
}
});
consol.panes.classify_value = (function consol$panes$classify_value(v){
var t = clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
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
consol.panes.split_kv = (function consol$panes$split_kv(line){
if(clojure.string.includes_QMARK_(line,"::")){
var vec__8679 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/::/);
var seq__8680 = cljs.core.seq(vec__8679);
var first__8681 = cljs.core.first(seq__8680);
var seq__8680__$1 = cljs.core.next(seq__8680);
var k = first__8681;
var more = seq__8680__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$2("::",more))], null);
} else {
var temp__5823__auto__ = cljs.core.re_matches(/^\s*([^\s]+)\s{2,}(.+)$/,line);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__8687 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.trim(k),clojure.string.trim(v)], null);
} else {
return null;
}

}
});
consol.panes.mk_el = (function consol$panes$mk_el(var_args){
var G__8693 = arguments.length;
switch (G__8693) {
case 1:
return consol.panes.mk_el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(consol.panes.mk_el.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(tag);
}));

(consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2 = (function (tag,class_name){
var e = document.createElement(tag);
(e.className = class_name);

return e;
}));

(consol.panes.mk_el.cljs$lang$maxFixedArity = 2);

consol.panes.set_text_BANG_ = (function consol$panes$set_text_BANG_(el,s){
(el.textContent = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));

return el;
});
consol.panes.append_BANG_ = (function consol$panes$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
consol.panes.mount_pane_BANG_ = (function consol$panes$mount_pane_BANG_(pre){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",pre.getAttribute("data-slab-mounted"))){
return null;
} else {
pre.setAttribute("data-slab-mounted","1");

var raw = clojure.string.trimr(clojure.string.replace(pre.textContent,/\r\n/,"\n"));
var lines = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trimr,clojure.string.split.cljs$core$IFn$_invoke$arity$2(raw,/\n/)));
var vec__8705 = ((((cljs.core.seq(lines)) && (clojure.string.starts_with_QMARK_(cljs.core.first(lines),"@"))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lines),(1)))),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(lines,(1))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var pane_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(1),null);
var _ = (cljs.core.truth_(pane_type)?pre.classList.add((""+"pane-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pane_type))):null);
var non_empty = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__8701_SHARP_){
return cljs.core.seq(clojure.string.trim(p1__8701_SHARP_));
}),lines__$1));
var kv_pairs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(consol.panes.split_kv,non_empty)));
var is_kv = (cljs.core.count(kv_pairs) >= cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),Math.floor((0.7 * cljs.core.count(non_empty)))));
if((!(is_kv))){
pre.setAttribute("data-pane-kind","text");

return pre.setAttribute("data-template",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines__$1));
} else {
pre.setAttribute("data-pane-kind","kv");

pre.classList.add("pane-kv");

var kv = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$1("div");
(kv.className = "kv");

var seq__8713_8885 = cljs.core.seq(kv_pairs);
var chunk__8714_8886 = null;
var count__8715_8887 = (0);
var i__8716_8888 = (0);
while(true){
if((i__8716_8888 < count__8715_8887)){
var vec__8723_8889 = chunk__8714_8886.cljs$core$IIndexed$_nth$arity$2(null,i__8716_8888);
var k_8890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723_8889,(0),null);
var v_8891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8723_8889,(1),null);
var row_8892 = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","row");
var kdiv_8893 = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","k");
var vdiv_8894 = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","v");
consol.panes.set_text_BANG_(kdiv_8893,k_8890);

vdiv_8894.setAttribute("data-template",v_8891);

consol.panes.set_text_BANG_(vdiv_8894,v_8891);

consol.panes.append_BANG_(row_8892,kdiv_8893);

consol.panes.append_BANG_(row_8892,vdiv_8894);

consol.panes.append_BANG_(kv,row_8892);


var G__8896 = seq__8713_8885;
var G__8897 = chunk__8714_8886;
var G__8898 = count__8715_8887;
var G__8899 = (i__8716_8888 + (1));
seq__8713_8885 = G__8896;
chunk__8714_8886 = G__8897;
count__8715_8887 = G__8898;
i__8716_8888 = G__8899;
continue;
} else {
var temp__5823__auto___8902 = cljs.core.seq(seq__8713_8885);
if(temp__5823__auto___8902){
var seq__8713_8903__$1 = temp__5823__auto___8902;
if(cljs.core.chunked_seq_QMARK_(seq__8713_8903__$1)){
var c__5673__auto___8904 = cljs.core.chunk_first(seq__8713_8903__$1);
var G__8905 = cljs.core.chunk_rest(seq__8713_8903__$1);
var G__8906 = c__5673__auto___8904;
var G__8907 = cljs.core.count(c__5673__auto___8904);
var G__8908 = (0);
seq__8713_8885 = G__8905;
chunk__8714_8886 = G__8906;
count__8715_8887 = G__8907;
i__8716_8888 = G__8908;
continue;
} else {
var vec__8750_8910 = cljs.core.first(seq__8713_8903__$1);
var k_8911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750_8910,(0),null);
var v_8912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8750_8910,(1),null);
var row_8913 = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","row");
var kdiv_8914 = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","k");
var vdiv_8915 = consol.panes.mk_el.cljs$core$IFn$_invoke$arity$2("div","v");
consol.panes.set_text_BANG_(kdiv_8914,k_8911);

vdiv_8915.setAttribute("data-template",v_8912);

consol.panes.set_text_BANG_(vdiv_8915,v_8912);

consol.panes.append_BANG_(row_8913,kdiv_8914);

consol.panes.append_BANG_(row_8913,vdiv_8915);

consol.panes.append_BANG_(kv,row_8913);


var G__8916 = cljs.core.next(seq__8713_8903__$1);
var G__8917 = null;
var G__8918 = (0);
var G__8919 = (0);
seq__8713_8885 = G__8916;
chunk__8714_8886 = G__8917;
count__8715_8887 = G__8918;
i__8716_8888 = G__8919;
continue;
}
} else {
}
}
break;
}

(pre.textContent = "");

return consol.panes.append_BANG_(pre,kv);
}
}
});
consol.panes.mount_all_panes_BANG_ = (function consol$panes$mount_all_panes_BANG_(){
var seq__8767 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("pre.example")));
var chunk__8768 = null;
var count__8769 = (0);
var i__8770 = (0);
while(true){
if((i__8770 < count__8769)){
var pre = chunk__8768.cljs$core$IIndexed$_nth$arity$2(null,i__8770);
consol.panes.mount_pane_BANG_(pre);


var G__8921 = seq__8767;
var G__8922 = chunk__8768;
var G__8923 = count__8769;
var G__8924 = (i__8770 + (1));
seq__8767 = G__8921;
chunk__8768 = G__8922;
count__8769 = G__8923;
i__8770 = G__8924;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__8767);
if(temp__5823__auto__){
var seq__8767__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8767__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__8767__$1);
var G__8925 = cljs.core.chunk_rest(seq__8767__$1);
var G__8926 = c__5673__auto__;
var G__8927 = cljs.core.count(c__5673__auto__);
var G__8928 = (0);
seq__8767 = G__8925;
chunk__8768 = G__8926;
count__8769 = G__8927;
i__8770 = G__8928;
continue;
} else {
var pre = cljs.core.first(seq__8767__$1);
consol.panes.mount_pane_BANG_(pre);


var G__8929 = cljs.core.next(seq__8767__$1);
var G__8930 = null;
var G__8931 = (0);
var G__8932 = (0);
seq__8767 = G__8929;
chunk__8768 = G__8930;
count__8769 = G__8931;
i__8770 = G__8932;
continue;
}
} else {
return null;
}
}
break;
}
});
consol.panes.render_panes_BANG_ = (function consol$panes$render_panes_BANG_(state){
var seq__8830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("pre.example")));
var chunk__8831 = null;
var count__8832 = (0);
var i__8833 = (0);
while(true){
if((i__8833 < count__8832)){
var pre = chunk__8831.cljs$core$IIndexed$_nth$arity$2(null,i__8833);
var kind_8933 = pre.getAttribute("data-pane-kind");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_8933,"text")){
var tmpl_8934 = pre.getAttribute("data-template");
(pre.textContent = consol.panes.apply_template(tmpl_8934,state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_8933,"kv")){
var seq__8876_8935 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(pre.querySelectorAll(".v")));
var chunk__8877_8936 = null;
var count__8878_8937 = (0);
var i__8879_8938 = (0);
while(true){
if((i__8879_8938 < count__8878_8937)){
var vdiv_8939 = chunk__8877_8936.cljs$core$IIndexed$_nth$arity$2(null,i__8879_8938);
var tmpl_8940 = vdiv_8939.getAttribute("data-template");
var rendered_8941 = consol.panes.apply_template(tmpl_8940,state);
var klass_8942 = consol.panes.classify_value(rendered_8941);
(vdiv_8939.textContent = rendered_8941);

vdiv_8939.classList.remove("warn");

vdiv_8939.classList.remove("bad");

if(cljs.core.seq(klass_8942)){
vdiv_8939.classList.add(klass_8942);
} else {
}


var G__8944 = seq__8876_8935;
var G__8945 = chunk__8877_8936;
var G__8946 = count__8878_8937;
var G__8947 = (i__8879_8938 + (1));
seq__8876_8935 = G__8944;
chunk__8877_8936 = G__8945;
count__8878_8937 = G__8946;
i__8879_8938 = G__8947;
continue;
} else {
var temp__5823__auto___8952 = cljs.core.seq(seq__8876_8935);
if(temp__5823__auto___8952){
var seq__8876_8953__$1 = temp__5823__auto___8952;
if(cljs.core.chunked_seq_QMARK_(seq__8876_8953__$1)){
var c__5673__auto___8954 = cljs.core.chunk_first(seq__8876_8953__$1);
var G__8955 = cljs.core.chunk_rest(seq__8876_8953__$1);
var G__8956 = c__5673__auto___8954;
var G__8957 = cljs.core.count(c__5673__auto___8954);
var G__8958 = (0);
seq__8876_8935 = G__8955;
chunk__8877_8936 = G__8956;
count__8878_8937 = G__8957;
i__8879_8938 = G__8958;
continue;
} else {
var vdiv_8959 = cljs.core.first(seq__8876_8953__$1);
var tmpl_8961 = vdiv_8959.getAttribute("data-template");
var rendered_8962 = consol.panes.apply_template(tmpl_8961,state);
var klass_8963 = consol.panes.classify_value(rendered_8962);
(vdiv_8959.textContent = rendered_8962);

vdiv_8959.classList.remove("warn");

vdiv_8959.classList.remove("bad");

if(cljs.core.seq(klass_8963)){
vdiv_8959.classList.add(klass_8963);
} else {
}


var G__8967 = cljs.core.next(seq__8876_8953__$1);
var G__8968 = null;
var G__8969 = (0);
var G__8970 = (0);
seq__8876_8935 = G__8967;
chunk__8877_8936 = G__8968;
count__8878_8937 = G__8969;
i__8879_8938 = G__8970;
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


var G__8971 = seq__8830;
var G__8972 = chunk__8831;
var G__8973 = count__8832;
var G__8974 = (i__8833 + (1));
seq__8830 = G__8971;
chunk__8831 = G__8972;
count__8832 = G__8973;
i__8833 = G__8974;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__8830);
if(temp__5823__auto__){
var seq__8830__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8830__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__8830__$1);
var G__8975 = cljs.core.chunk_rest(seq__8830__$1);
var G__8976 = c__5673__auto__;
var G__8977 = cljs.core.count(c__5673__auto__);
var G__8978 = (0);
seq__8830 = G__8975;
chunk__8831 = G__8976;
count__8832 = G__8977;
i__8833 = G__8978;
continue;
} else {
var pre = cljs.core.first(seq__8830__$1);
var kind_8979 = pre.getAttribute("data-pane-kind");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_8979,"text")){
var tmpl_8980 = pre.getAttribute("data-template");
(pre.textContent = consol.panes.apply_template(tmpl_8980,state));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kind_8979,"kv")){
var seq__8880_8981 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(pre.querySelectorAll(".v")));
var chunk__8881_8982 = null;
var count__8882_8983 = (0);
var i__8883_8984 = (0);
while(true){
if((i__8883_8984 < count__8882_8983)){
var vdiv_8985 = chunk__8881_8982.cljs$core$IIndexed$_nth$arity$2(null,i__8883_8984);
var tmpl_8986 = vdiv_8985.getAttribute("data-template");
var rendered_8987 = consol.panes.apply_template(tmpl_8986,state);
var klass_8988 = consol.panes.classify_value(rendered_8987);
(vdiv_8985.textContent = rendered_8987);

vdiv_8985.classList.remove("warn");

vdiv_8985.classList.remove("bad");

if(cljs.core.seq(klass_8988)){
vdiv_8985.classList.add(klass_8988);
} else {
}


var G__8989 = seq__8880_8981;
var G__8990 = chunk__8881_8982;
var G__8991 = count__8882_8983;
var G__8992 = (i__8883_8984 + (1));
seq__8880_8981 = G__8989;
chunk__8881_8982 = G__8990;
count__8882_8983 = G__8991;
i__8883_8984 = G__8992;
continue;
} else {
var temp__5823__auto___8995__$1 = cljs.core.seq(seq__8880_8981);
if(temp__5823__auto___8995__$1){
var seq__8880_8996__$1 = temp__5823__auto___8995__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8880_8996__$1)){
var c__5673__auto___8997 = cljs.core.chunk_first(seq__8880_8996__$1);
var G__8998 = cljs.core.chunk_rest(seq__8880_8996__$1);
var G__8999 = c__5673__auto___8997;
var G__9000 = cljs.core.count(c__5673__auto___8997);
var G__9001 = (0);
seq__8880_8981 = G__8998;
chunk__8881_8982 = G__8999;
count__8882_8983 = G__9000;
i__8883_8984 = G__9001;
continue;
} else {
var vdiv_9002 = cljs.core.first(seq__8880_8996__$1);
var tmpl_9003 = vdiv_9002.getAttribute("data-template");
var rendered_9004 = consol.panes.apply_template(tmpl_9003,state);
var klass_9005 = consol.panes.classify_value(rendered_9004);
(vdiv_9002.textContent = rendered_9004);

vdiv_9002.classList.remove("warn");

vdiv_9002.classList.remove("bad");

if(cljs.core.seq(klass_9005)){
vdiv_9002.classList.add(klass_9005);
} else {
}


var G__9008 = cljs.core.next(seq__8880_8996__$1);
var G__9009 = null;
var G__9010 = (0);
var G__9011 = (0);
seq__8880_8981 = G__9008;
chunk__8881_8982 = G__9009;
count__8882_8983 = G__9010;
i__8883_8984 = G__9011;
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


var G__9012 = cljs.core.next(seq__8830__$1);
var G__9013 = null;
var G__9014 = (0);
var G__9015 = (0);
seq__8830 = G__9012;
chunk__8831 = G__9013;
count__8832 = G__9014;
i__8833 = G__9015;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=consol.panes.js.map
