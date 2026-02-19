goog.provide('consol.dom');
consol.dom.q1 = (function consol$dom$q1(sel){
return document.querySelector(sel);
});
/**
 * Find output slot by token-id.
 *   If missing, create one right after the token element.
 */
consol.dom.ensure_output_slot_BANG_ = (function consol$dom$ensure_output_slot_BANG_(p__7586,token_el){
var map__7587 = p__7586;
var map__7587__$1 = cljs.core.__destructure_map(map__7587);
var token_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7587__$1,new cljs.core.Keyword(null,"token-id","token-id",-764089526));
if(cljs.core.truth_(token_id)){
var or__5142__auto__ = consol.dom.q1((""+"[data-slab-slot=\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(token_id)+"\"]"));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(token_el)){
var slot = document.createElement("div");
(slot.className = "slab-output-slot");

slot.setAttribute("data-slab-slot",token_id);

var temp__5823__auto___7599 = token_el.parentNode;
if(cljs.core.truth_(temp__5823__auto___7599)){
var p_7600 = temp__5823__auto___7599;
var temp__5821__auto___7601 = token_el.nextSibling;
if(cljs.core.truth_(temp__5821__auto___7601)){
var n_7602 = temp__5821__auto___7601;
p_7600.insertBefore(slot,n_7602);
} else {
p_7600.appendChild(slot);
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
consol.dom.clear_BANG_ = (function consol$dom$clear_BANG_(el){
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
consol.dom.example_box_node = (function consol$dom$example_box_node(){
var box = document.createElement("div");
(box.className = "example slab-output");

return box;
});
/**
 * Inner terminal output.
 */
consol.dom.terminal_node = (function consol$dom$terminal_node(p__7591){
var map__7592 = p__7591;
var map__7592__$1 = cljs.core.__destructure_map(map__7592);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7592__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var loading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7592__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
var pre = document.createElement("pre");
(pre.className = "slab-terminal");

(pre.textContent = (cljs.core.truth_(loading_QMARK_)?"\u258C":(function (){var or__5142__auto__ = text;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
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
consol.dom.media_node = (function consol$dom$media_node(rich_node){
var wrap = document.createElement("div");
(wrap.className = "slab-media");

wrap.appendChild(rich_node);

return wrap;
});
consol.dom.show_loading_BANG_ = (function consol$dom$show_loading_BANG_(slot){
if(cljs.core.truth_(slot)){
consol.dom.clear_BANG_(slot);

var box_7605 = consol.dom.example_box_node();
box_7605.appendChild(consol.dom.terminal_node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true], null)));

slot.appendChild(box_7605);

return slot;
} else {
return null;
}
});
consol.dom.show_text_BANG_ = (function consol$dom$show_text_BANG_(slot,p__7595){
var map__7596 = p__7595;
var map__7596__$1 = cljs.core.__destructure_map(map__7596);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7596__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(slot)){
consol.dom.clear_BANG_(slot);

var box_7606 = consol.dom.example_box_node();
box_7606.appendChild(consol.dom.terminal_node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),body], null)));

slot.appendChild(box_7606);

return slot;
} else {
return null;
}
});
consol.dom.show_rich_BANG_ = (function consol$dom$show_rich_BANG_(slot,p__7597){
var map__7598 = p__7597;
var map__7598__$1 = cljs.core.__destructure_map(map__7598);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7598__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(slot)){
consol.dom.clear_BANG_(slot);

var box_7609 = consol.dom.example_box_node();
var node_7610 = consol.render.render_rich.cljs$core$IFn$_invoke$arity$1(body);
box_7609.appendChild(consol.dom.media_node(node_7610));

slot.appendChild(box_7609);

return slot;
} else {
return null;
}
});
consol.dom.show_error_BANG_ = (function consol$dom$show_error_BANG_(slot,err){
if(cljs.core.truth_(slot)){
consol.dom.clear_BANG_(slot);

var box_7611 = consol.dom.example_box_node();
box_7611.appendChild(consol.dom.terminal_node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(err))], null)));

slot.appendChild(box_7611);

return slot;
} else {
return null;
}
});

//# sourceMappingURL=consol.dom.js.map
