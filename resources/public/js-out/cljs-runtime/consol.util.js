goog.provide('consol.util');
/**
 * Read a dataset key from a DOM element. Returns nil if missing.
 */
consol.util.dataset = (function consol$util$dataset(el,k){
if(cljs.core.truth_(el)){
var v = (el.dataset[k]);
if(cljs.core.truth_((function (){var and__5140__auto__ = v;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,"");
} else {
return and__5140__auto__;
}
})())){
return v;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert a non-empty string to a keyword. Returns nil on nil/empty.
 */
consol.util.kw = (function consol$util$kw(s){
if(cljs.core.truth_((function (){var and__5140__auto__ = s;
if(cljs.core.truth_(and__5140__auto__)){
return ((typeof s === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,"")));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
return null;
}
});

//# sourceMappingURL=consol.util.js.map
