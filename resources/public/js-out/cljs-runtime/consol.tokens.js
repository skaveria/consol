goog.provide('consol.tokens');
consol.tokens.token_interactive_re = (new RegExp("\\{\\{([A-Za-z0-9_]+)\\*\\}\\}","g"));
consol.tokens.current_page_stem = (function consol$tokens$current_page_stem(){
var p = (function (){var or__5142__auto__ = location.pathname;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "index.html";
}
})();
var base = clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(p,/.*\//,""),/\?.*$/,""),/#.*$/,""),/\.html?$/,"");
if(cljs.core.seq(base)){
return base;
} else {
return "index";
}
});
/**
 * Nearest Org export outline container id.
 *   Org HTML usually emits: <div id="outline-container-...">
 */
consol.tokens.find_section_id = (function consol$tokens$find_section_id(el){
var cur = el;
while(true){
if((cur == null)){
return null;
} else {
if((function (){var id = cur.id;
return ((typeof id === 'string') && (clojure.string.starts_with_QMARK_(id,"outline-container-")));
})()){
return consol.tokens.id;
} else {
var G__7718 = cur.parentElement;
cur = G__7718;
continue;

}
}
break;
}
});
/**
 * Extract token metadata from an interactive token element.
 */
consol.tokens.token_info = (function consol$tokens$token_info(el){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),consol.util.dataset(el,"slabToken"),new cljs.core.Keyword(null,"token-id","token-id",-764089526),consol.util.dataset(el,"slabTokenId"),new cljs.core.Keyword(null,"section","section",-300141526),(function (){var or__5142__auto__ = consol.util.dataset(el,"slabSection");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = consol.tokens.find_section_id(el);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return consol.tokens.current_page_stem();
}
}
})(),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);
});
consol.tokens.mk_token_el = (function consol$tokens$mk_token_el(token,token_id,section){
var el = document.createElement("span");
(el.className = "slab-token slab-token--interactive");

el.setAttribute("data-slab-action","run-token");

el.setAttribute("data-slab-token",token);

el.setAttribute("data-slab-token-id",token_id);

if(cljs.core.truth_(section)){
el.setAttribute("data-slab-section",section);
} else {
}

(el.textContent = (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)+"*]"));

return el;
});
consol.tokens.mk_slot_el = (function consol$tokens$mk_slot_el(token_id){
var slot = document.createElement("div");
(slot.className = "slab-output-slot");

slot.setAttribute("data-slab-slot",token_id);

return slot;
});
/**
 * Replace a text node with nodes.
 */
consol.tokens.replace_text_node_BANG_ = (function consol$tokens$replace_text_node_BANG_(text_node,nodes){
var temp__5823__auto__ = text_node.parentNode;
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
var seq__7654_7725 = cljs.core.seq(nodes);
var chunk__7655_7726 = null;
var count__7656_7727 = (0);
var i__7657_7728 = (0);
while(true){
if((i__7657_7728 < count__7656_7727)){
var n_7729 = chunk__7655_7726.cljs$core$IIndexed$_nth$arity$2(null,i__7657_7728);
p.insertBefore(n_7729,text_node);


var G__7730 = seq__7654_7725;
var G__7731 = chunk__7655_7726;
var G__7732 = count__7656_7727;
var G__7733 = (i__7657_7728 + (1));
seq__7654_7725 = G__7730;
chunk__7655_7726 = G__7731;
count__7656_7727 = G__7732;
i__7657_7728 = G__7733;
continue;
} else {
var temp__5823__auto___7738__$1 = cljs.core.seq(seq__7654_7725);
if(temp__5823__auto___7738__$1){
var seq__7654_7739__$1 = temp__5823__auto___7738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7654_7739__$1)){
var c__5673__auto___7740 = cljs.core.chunk_first(seq__7654_7739__$1);
var G__7741 = cljs.core.chunk_rest(seq__7654_7739__$1);
var G__7742 = c__5673__auto___7740;
var G__7743 = cljs.core.count(c__5673__auto___7740);
var G__7744 = (0);
seq__7654_7725 = G__7741;
chunk__7655_7726 = G__7742;
count__7656_7727 = G__7743;
i__7657_7728 = G__7744;
continue;
} else {
var n_7749 = cljs.core.first(seq__7654_7739__$1);
p.insertBefore(n_7749,text_node);


var G__7754 = cljs.core.next(seq__7654_7739__$1);
var G__7755 = null;
var G__7756 = (0);
var G__7757 = (0);
seq__7654_7725 = G__7754;
chunk__7655_7726 = G__7755;
count__7656_7727 = G__7756;
i__7657_7728 = G__7757;
continue;
}
} else {
}
}
break;
}

return p.removeChild(text_node);
} else {
return null;
}
});
consol.tokens.reset_regex_BANG_ = (function consol$tokens$reset_regex_BANG_(re){
(re.lastIndex = (0));

return re;
});
/**
 * Turn a text string containing {{name*}} into a vector of DOM nodes.
 *   Returns nil if no matches.
 */
consol.tokens.build_replacement_nodes = (function consol$tokens$build_replacement_nodes(txt,p__7669){
var map__7670 = p__7669;
var map__7670__$1 = cljs.core.__destructure_map(map__7670);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7670__$1,new cljs.core.Keyword(null,"page","page",849072397));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7670__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7670__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
consol.tokens.reset_regex_BANG_(consol.tokens.token_interactive_re);

var last_idx = (0);
var m = consol.tokens.token_interactive_re.exec(txt);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if((m == null)){
var tail = txt.substring(last_idx);
if(cljs.core.seq(out)){
var G__7674 = out;
if(cljs.core.seq(tail)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7674,document.createTextNode(tail));
} else {
return G__7674;
}
} else {
return null;
}
} else {
var match_idx = m.index;
var token = (m[(1)]);
var match_str = (m[(0)]);
var before = txt.substring(last_idx,match_idx);
var i = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
var token_id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)+"::"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)+"::"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((i - (1))));
var token_el = consol.tokens.mk_token_el(token,token_id,section);
var slot_el = consol.tokens.mk_slot_el(token_id);
var G__7763 = (match_idx + match_str.length);
var G__7764 = consol.tokens.token_interactive_re.exec(txt);
var G__7765 = (function (){var G__7676 = out;
var G__7676__$1 = ((cljs.core.seq(before))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7676,document.createTextNode(before)):G__7676);
var G__7676__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7676__$1,token_el)
;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7676__$2,slot_el);

})();
last_idx = G__7763;
m = G__7764;
out = G__7765;
continue;
}
break;
}
});
/**
 * Call f on each text node under root.
 */
consol.tokens.walk_text_nodes = (function consol$tokens$walk_text_nodes(root,f){
var walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false);
var node = walker.nextNode();
while(true){
if(cljs.core.truth_(node)){
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node));

var G__7769 = walker.nextNode();
node = G__7769;
continue;
} else {
return null;
}
break;
}
});
/**
 * Find {{name*}} occurrences in text nodes and replace with clickable tokens + slots.
 */
consol.tokens.hydrate_interactive_tokens_BANG_ = (function consol$tokens$hydrate_interactive_tokens_BANG_(){
var root = (function (){var or__5142__auto__ = document.getElementById("content");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document.body;
}
})();
if(cljs.core.truth_(root)){
var page = consol.tokens.current_page_stem();
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return consol.tokens.walk_text_nodes(root,(function (node){
var txt = node.nodeValue;
if(cljs.core.truth_((function (){var and__5140__auto__ = typeof txt === 'string';
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.re_find(/\{\{/,txt);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core.re_find(consol.tokens.token_interactive_re,txt);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
var section = consol.tokens.find_section_id(node.parentElement);
var nodes = consol.tokens.build_replacement_nodes(txt,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"section","section",-300141526),section,new cljs.core.Keyword(null,"counter","counter",804008177),counter], null));
if(cljs.core.seq(nodes)){
return consol.tokens.replace_text_node_BANG_(node,nodes);
} else {
return null;
}
} else {
return null;
}
}));
} else {
return null;
}
});

//# sourceMappingURL=consol.tokens.js.map
