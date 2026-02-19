goog.provide('slab.dom');
slab.dom.q1 = (function slab$dom$q1(sel){
return document.querySelector(sel);
});
/**
 * Find output slot by token-id.
 *   If missing, create one right after the token element.
 */
slab.dom.ensure_output_slot_BANG_ = (function slab$dom$ensure_output_slot_BANG_(p__6046,token_el){
var map__6047 = p__6046;
var map__6047__$1 = cljs.core.__destructure_map(map__6047);
var token_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6047__$1,new cljs.core.Keyword(null,"token-id","token-id",-764089526));
if(cljs.core.truth_(token_id)){
var or__5002__auto__ = slab.dom.q1(["[data-slab-slot=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_id),"\"]"].join(''));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_(token_el)){
var slot = document.createElement("div");
(slot.className = "slab-output-slot");

slot.setAttribute("data-slab-slot",token_id);

var temp__5804__auto___6061 = token_el.parentNode;
if(cljs.core.truth_(temp__5804__auto___6061)){
var p_6062 = temp__5804__auto___6061;
var temp__5802__auto___6063 = token_el.nextSibling;
if(cljs.core.truth_(temp__5802__auto___6063)){
var n_6064 = temp__5802__auto___6063;
p_6062.insertBefore(slot,n_6064);
} else {
p_6062.appendChild(slot);
}
} else {
}

return slot;
} else {
return null;
}
}
} else {
return null;
}
});
slab.dom.clear_BANG_ = (function slab$dom$clear_BANG_(el){
if(cljs.core.truth_(el)){
(el.innerHTML = "");

return el;
} else {
return null;
}
});
/**
 * Outer chrome box. Uses your existing .example styling.
 */
slab.dom.example_box_node = (function slab$dom$example_box_node(){
var box = document.createElement("div");
(box.className = "example slab-output");

return box;
});
/**
 * Inner terminal output.
 */
slab.dom.terminal_node = (function slab$dom$terminal_node(p__6048){
var map__6049 = p__6048;
var map__6049__$1 = cljs.core.__destructure_map(map__6049);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6049__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6049__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var pre = document.createElement("pre");
(pre.className = "slab-terminal");

(pre.textContent = (cljs.core.truth_(loading_QMARK_)?"\u258C":(function (){var or__5002__auto__ = text;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})()
));

return pre;
});
/**
 * Inner media container. Map .slab-media to your existing scaled media CSS.
 */
slab.dom.media_node = (function slab$dom$media_node(rich_node){
var wrap = document.createElement("div");
(wrap.className = "slab-media");

wrap.appendChild(rich_node);

return wrap;
});
slab.dom.show_loading_BANG_ = (function slab$dom$show_loading_BANG_(slot){
if(cljs.core.truth_(slot)){
slab.dom.clear_BANG_(slot);

var box_6066 = slab.dom.example_box_node();
box_6066.appendChild(slab.dom.terminal_node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true], null)));

slot.appendChild(box_6066);

return slot;
} else {
return null;
}
});
slab.dom.show_text_BANG_ = (function slab$dom$show_text_BANG_(slot,p__6054){
var map__6055 = p__6054;
var map__6055__$1 = cljs.core.__destructure_map(map__6055);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6055__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(slot)){
slab.dom.clear_BANG_(slot);

var box_6072 = slab.dom.example_box_node();
box_6072.appendChild(slab.dom.terminal_node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),body], null)));

slot.appendChild(box_6072);

return slot;
} else {
return null;
}
});
slab.dom.show_rich_BANG_ = (function slab$dom$show_rich_BANG_(slot,p__6056){
var map__6057 = p__6056;
var map__6057__$1 = cljs.core.__destructure_map(map__6057);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6057__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(slot)){
slab.dom.clear_BANG_(slot);

var box_6075 = slab.dom.example_box_node();
var node_6076 = slab.render.render_rich.cljs$core$IFn$_invoke$arity$1(body);
box_6075.appendChild(slab.dom.media_node(node_6076));

slot.appendChild(box_6075);

return slot;
} else {
return null;
}
});
slab.dom.show_error_BANG_ = (function slab$dom$show_error_BANG_(slot,err){
if(cljs.core.truth_(slot)){
slab.dom.clear_BANG_(slot);

var box_6082 = slab.dom.example_box_node();
box_6082.appendChild(slab.dom.terminal_node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)], null)));

slot.appendChild(box_6082);

return slot;
} else {
return null;
}
});

//# sourceMappingURL=slab.dom.js.map
