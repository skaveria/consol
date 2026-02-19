goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12705 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12705(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12712 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12712(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11734 = coll;
var G__11735 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11734,G__11735) : shadow.dom.lazy_native_coll_seq.call(null,G__11734,G__11735));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11751 = arguments.length;
switch (G__11751) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11762 = arguments.length;
switch (G__11762) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11764 = arguments.length;
switch (G__11764) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11771 = arguments.length;
switch (G__11771) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11775 = arguments.length;
switch (G__11775) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11785 = arguments.length;
switch (G__11785) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11791){if((e11791 instanceof Object)){
var e = e11791;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11791;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11802 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11803 = null;
var count__11804 = (0);
var i__11805 = (0);
while(true){
if((i__11805 < count__11804)){
var el = chunk__11803.cljs$core$IIndexed$_nth$arity$2(null,i__11805);
var handler_12768__$1 = ((function (seq__11802,chunk__11803,count__11804,i__11805,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11802,chunk__11803,count__11804,i__11805,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12768__$1);


var G__12774 = seq__11802;
var G__12775 = chunk__11803;
var G__12776 = count__11804;
var G__12777 = (i__11805 + (1));
seq__11802 = G__12774;
chunk__11803 = G__12775;
count__11804 = G__12776;
i__11805 = G__12777;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11802);
if(temp__5804__auto__){
var seq__11802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11802__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11802__$1);
var G__12778 = cljs.core.chunk_rest(seq__11802__$1);
var G__12779 = c__5525__auto__;
var G__12780 = cljs.core.count(c__5525__auto__);
var G__12781 = (0);
seq__11802 = G__12778;
chunk__11803 = G__12779;
count__11804 = G__12780;
i__11805 = G__12781;
continue;
} else {
var el = cljs.core.first(seq__11802__$1);
var handler_12783__$1 = ((function (seq__11802,chunk__11803,count__11804,i__11805,el,seq__11802__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11802,chunk__11803,count__11804,i__11805,el,seq__11802__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12783__$1);


var G__12790 = cljs.core.next(seq__11802__$1);
var G__12791 = null;
var G__12792 = (0);
var G__12793 = (0);
seq__11802 = G__12790;
chunk__11803 = G__12791;
count__11804 = G__12792;
i__11805 = G__12793;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11821 = arguments.length;
switch (G__11821) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11826 = cljs.core.seq(events);
var chunk__11827 = null;
var count__11828 = (0);
var i__11829 = (0);
while(true){
if((i__11829 < count__11828)){
var vec__11852 = chunk__11827.cljs$core$IIndexed$_nth$arity$2(null,i__11829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11852,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12805 = seq__11826;
var G__12806 = chunk__11827;
var G__12807 = count__11828;
var G__12808 = (i__11829 + (1));
seq__11826 = G__12805;
chunk__11827 = G__12806;
count__11828 = G__12807;
i__11829 = G__12808;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11826);
if(temp__5804__auto__){
var seq__11826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11826__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11826__$1);
var G__12809 = cljs.core.chunk_rest(seq__11826__$1);
var G__12810 = c__5525__auto__;
var G__12811 = cljs.core.count(c__5525__auto__);
var G__12812 = (0);
seq__11826 = G__12809;
chunk__11827 = G__12810;
count__11828 = G__12811;
i__11829 = G__12812;
continue;
} else {
var vec__11860 = cljs.core.first(seq__11826__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11860,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12814 = cljs.core.next(seq__11826__$1);
var G__12815 = null;
var G__12816 = (0);
var G__12817 = (0);
seq__11826 = G__12814;
chunk__11827 = G__12815;
count__11828 = G__12816;
i__11829 = G__12817;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11864 = cljs.core.seq(styles);
var chunk__11865 = null;
var count__11866 = (0);
var i__11867 = (0);
while(true){
if((i__11867 < count__11866)){
var vec__11878 = chunk__11865.cljs$core$IIndexed$_nth$arity$2(null,i__11867);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12820 = seq__11864;
var G__12821 = chunk__11865;
var G__12822 = count__11866;
var G__12823 = (i__11867 + (1));
seq__11864 = G__12820;
chunk__11865 = G__12821;
count__11866 = G__12822;
i__11867 = G__12823;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11864);
if(temp__5804__auto__){
var seq__11864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11864__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11864__$1);
var G__12826 = cljs.core.chunk_rest(seq__11864__$1);
var G__12827 = c__5525__auto__;
var G__12828 = cljs.core.count(c__5525__auto__);
var G__12829 = (0);
seq__11864 = G__12826;
chunk__11865 = G__12827;
count__11866 = G__12828;
i__11867 = G__12829;
continue;
} else {
var vec__11882 = cljs.core.first(seq__11864__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12830 = cljs.core.next(seq__11864__$1);
var G__12831 = null;
var G__12832 = (0);
var G__12833 = (0);
seq__11864 = G__12830;
chunk__11865 = G__12831;
count__11866 = G__12832;
i__11867 = G__12833;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11890_12834 = key;
var G__11890_12835__$1 = (((G__11890_12834 instanceof cljs.core.Keyword))?G__11890_12834.fqn:null);
switch (G__11890_12835__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12847 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12847,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12847,"aria-");
}
})())){
el.setAttribute(ks_12847,value);
} else {
(el[ks_12847] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11918){
var map__11919 = p__11918;
var map__11919__$1 = cljs.core.__destructure_map(map__11919);
var props = map__11919__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11919__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11922 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11922,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11922,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11922,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11926 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11926,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11926;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11928 = arguments.length;
switch (G__11928) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11931){
var vec__11932 = p__11931;
var seq__11933 = cljs.core.seq(vec__11932);
var first__11934 = cljs.core.first(seq__11933);
var seq__11933__$1 = cljs.core.next(seq__11933);
var nn = first__11934;
var first__11934__$1 = cljs.core.first(seq__11933__$1);
var seq__11933__$2 = cljs.core.next(seq__11933__$1);
var np = first__11934__$1;
var nc = seq__11933__$2;
var node = vec__11932;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11935 = nn;
var G__11936 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11935,G__11936) : create_fn.call(null,G__11935,G__11936));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11937 = nn;
var G__11938 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11937,G__11938) : create_fn.call(null,G__11937,G__11938));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11939 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11939,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11939,(1),null);
var seq__11943_12883 = cljs.core.seq(node_children);
var chunk__11947_12884 = null;
var count__11948_12885 = (0);
var i__11949_12886 = (0);
while(true){
if((i__11949_12886 < count__11948_12885)){
var child_struct_12888 = chunk__11947_12884.cljs$core$IIndexed$_nth$arity$2(null,i__11949_12886);
var children_12890 = shadow.dom.dom_node(child_struct_12888);
if(cljs.core.seq_QMARK_(children_12890)){
var seq__11976_12891 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12890));
var chunk__11978_12892 = null;
var count__11979_12893 = (0);
var i__11980_12894 = (0);
while(true){
if((i__11980_12894 < count__11979_12893)){
var child_12899 = chunk__11978_12892.cljs$core$IIndexed$_nth$arity$2(null,i__11980_12894);
if(cljs.core.truth_(child_12899)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12899);


var G__12901 = seq__11976_12891;
var G__12902 = chunk__11978_12892;
var G__12903 = count__11979_12893;
var G__12904 = (i__11980_12894 + (1));
seq__11976_12891 = G__12901;
chunk__11978_12892 = G__12902;
count__11979_12893 = G__12903;
i__11980_12894 = G__12904;
continue;
} else {
var G__12905 = seq__11976_12891;
var G__12906 = chunk__11978_12892;
var G__12907 = count__11979_12893;
var G__12908 = (i__11980_12894 + (1));
seq__11976_12891 = G__12905;
chunk__11978_12892 = G__12906;
count__11979_12893 = G__12907;
i__11980_12894 = G__12908;
continue;
}
} else {
var temp__5804__auto___12909 = cljs.core.seq(seq__11976_12891);
if(temp__5804__auto___12909){
var seq__11976_12911__$1 = temp__5804__auto___12909;
if(cljs.core.chunked_seq_QMARK_(seq__11976_12911__$1)){
var c__5525__auto___12912 = cljs.core.chunk_first(seq__11976_12911__$1);
var G__12913 = cljs.core.chunk_rest(seq__11976_12911__$1);
var G__12914 = c__5525__auto___12912;
var G__12915 = cljs.core.count(c__5525__auto___12912);
var G__12916 = (0);
seq__11976_12891 = G__12913;
chunk__11978_12892 = G__12914;
count__11979_12893 = G__12915;
i__11980_12894 = G__12916;
continue;
} else {
var child_12918 = cljs.core.first(seq__11976_12911__$1);
if(cljs.core.truth_(child_12918)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12918);


var G__12919 = cljs.core.next(seq__11976_12911__$1);
var G__12920 = null;
var G__12921 = (0);
var G__12922 = (0);
seq__11976_12891 = G__12919;
chunk__11978_12892 = G__12920;
count__11979_12893 = G__12921;
i__11980_12894 = G__12922;
continue;
} else {
var G__12923 = cljs.core.next(seq__11976_12911__$1);
var G__12924 = null;
var G__12925 = (0);
var G__12926 = (0);
seq__11976_12891 = G__12923;
chunk__11978_12892 = G__12924;
count__11979_12893 = G__12925;
i__11980_12894 = G__12926;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12890);
}


var G__12928 = seq__11943_12883;
var G__12929 = chunk__11947_12884;
var G__12930 = count__11948_12885;
var G__12931 = (i__11949_12886 + (1));
seq__11943_12883 = G__12928;
chunk__11947_12884 = G__12929;
count__11948_12885 = G__12930;
i__11949_12886 = G__12931;
continue;
} else {
var temp__5804__auto___12932 = cljs.core.seq(seq__11943_12883);
if(temp__5804__auto___12932){
var seq__11943_12933__$1 = temp__5804__auto___12932;
if(cljs.core.chunked_seq_QMARK_(seq__11943_12933__$1)){
var c__5525__auto___12936 = cljs.core.chunk_first(seq__11943_12933__$1);
var G__12937 = cljs.core.chunk_rest(seq__11943_12933__$1);
var G__12938 = c__5525__auto___12936;
var G__12939 = cljs.core.count(c__5525__auto___12936);
var G__12940 = (0);
seq__11943_12883 = G__12937;
chunk__11947_12884 = G__12938;
count__11948_12885 = G__12939;
i__11949_12886 = G__12940;
continue;
} else {
var child_struct_12941 = cljs.core.first(seq__11943_12933__$1);
var children_12942 = shadow.dom.dom_node(child_struct_12941);
if(cljs.core.seq_QMARK_(children_12942)){
var seq__12008_12943 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12942));
var chunk__12010_12944 = null;
var count__12011_12945 = (0);
var i__12012_12946 = (0);
while(true){
if((i__12012_12946 < count__12011_12945)){
var child_12948 = chunk__12010_12944.cljs$core$IIndexed$_nth$arity$2(null,i__12012_12946);
if(cljs.core.truth_(child_12948)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12948);


var G__12950 = seq__12008_12943;
var G__12951 = chunk__12010_12944;
var G__12952 = count__12011_12945;
var G__12953 = (i__12012_12946 + (1));
seq__12008_12943 = G__12950;
chunk__12010_12944 = G__12951;
count__12011_12945 = G__12952;
i__12012_12946 = G__12953;
continue;
} else {
var G__12954 = seq__12008_12943;
var G__12955 = chunk__12010_12944;
var G__12956 = count__12011_12945;
var G__12957 = (i__12012_12946 + (1));
seq__12008_12943 = G__12954;
chunk__12010_12944 = G__12955;
count__12011_12945 = G__12956;
i__12012_12946 = G__12957;
continue;
}
} else {
var temp__5804__auto___12958__$1 = cljs.core.seq(seq__12008_12943);
if(temp__5804__auto___12958__$1){
var seq__12008_12960__$1 = temp__5804__auto___12958__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12008_12960__$1)){
var c__5525__auto___12963 = cljs.core.chunk_first(seq__12008_12960__$1);
var G__12966 = cljs.core.chunk_rest(seq__12008_12960__$1);
var G__12967 = c__5525__auto___12963;
var G__12968 = cljs.core.count(c__5525__auto___12963);
var G__12969 = (0);
seq__12008_12943 = G__12966;
chunk__12010_12944 = G__12967;
count__12011_12945 = G__12968;
i__12012_12946 = G__12969;
continue;
} else {
var child_12972 = cljs.core.first(seq__12008_12960__$1);
if(cljs.core.truth_(child_12972)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12972);


var G__12973 = cljs.core.next(seq__12008_12960__$1);
var G__12974 = null;
var G__12975 = (0);
var G__12976 = (0);
seq__12008_12943 = G__12973;
chunk__12010_12944 = G__12974;
count__12011_12945 = G__12975;
i__12012_12946 = G__12976;
continue;
} else {
var G__12977 = cljs.core.next(seq__12008_12960__$1);
var G__12978 = null;
var G__12979 = (0);
var G__12980 = (0);
seq__12008_12943 = G__12977;
chunk__12010_12944 = G__12978;
count__12011_12945 = G__12979;
i__12012_12946 = G__12980;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12942);
}


var G__12981 = cljs.core.next(seq__11943_12933__$1);
var G__12982 = null;
var G__12983 = (0);
var G__12984 = (0);
seq__11943_12883 = G__12981;
chunk__11947_12884 = G__12982;
count__11948_12885 = G__12983;
i__11949_12886 = G__12984;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12075 = cljs.core.seq(node);
var chunk__12076 = null;
var count__12077 = (0);
var i__12078 = (0);
while(true){
if((i__12078 < count__12077)){
var n = chunk__12076.cljs$core$IIndexed$_nth$arity$2(null,i__12078);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12993 = seq__12075;
var G__12994 = chunk__12076;
var G__12995 = count__12077;
var G__12996 = (i__12078 + (1));
seq__12075 = G__12993;
chunk__12076 = G__12994;
count__12077 = G__12995;
i__12078 = G__12996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12075);
if(temp__5804__auto__){
var seq__12075__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12075__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12075__$1);
var G__12997 = cljs.core.chunk_rest(seq__12075__$1);
var G__12998 = c__5525__auto__;
var G__12999 = cljs.core.count(c__5525__auto__);
var G__13000 = (0);
seq__12075 = G__12997;
chunk__12076 = G__12998;
count__12077 = G__12999;
i__12078 = G__13000;
continue;
} else {
var n = cljs.core.first(seq__12075__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13003 = cljs.core.next(seq__12075__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__12075 = G__13003;
chunk__12076 = G__13004;
count__12077 = G__13005;
i__12078 = G__13006;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12154 = arguments.length;
switch (G__12154) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12165 = arguments.length;
switch (G__12165) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12178 = arguments.length;
switch (G__12178) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13037 = arguments.length;
var i__5727__auto___13039 = (0);
while(true){
if((i__5727__auto___13039 < len__5726__auto___13037)){
args__5732__auto__.push((arguments[i__5727__auto___13039]));

var G__13044 = (i__5727__auto___13039 + (1));
i__5727__auto___13039 = G__13044;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12250_13046 = cljs.core.seq(nodes);
var chunk__12251_13048 = null;
var count__12252_13049 = (0);
var i__12253_13050 = (0);
while(true){
if((i__12253_13050 < count__12252_13049)){
var node_13051 = chunk__12251_13048.cljs$core$IIndexed$_nth$arity$2(null,i__12253_13050);
fragment.appendChild(shadow.dom._to_dom(node_13051));


var G__13053 = seq__12250_13046;
var G__13054 = chunk__12251_13048;
var G__13055 = count__12252_13049;
var G__13056 = (i__12253_13050 + (1));
seq__12250_13046 = G__13053;
chunk__12251_13048 = G__13054;
count__12252_13049 = G__13055;
i__12253_13050 = G__13056;
continue;
} else {
var temp__5804__auto___13060 = cljs.core.seq(seq__12250_13046);
if(temp__5804__auto___13060){
var seq__12250_13062__$1 = temp__5804__auto___13060;
if(cljs.core.chunked_seq_QMARK_(seq__12250_13062__$1)){
var c__5525__auto___13063 = cljs.core.chunk_first(seq__12250_13062__$1);
var G__13064 = cljs.core.chunk_rest(seq__12250_13062__$1);
var G__13065 = c__5525__auto___13063;
var G__13066 = cljs.core.count(c__5525__auto___13063);
var G__13067 = (0);
seq__12250_13046 = G__13064;
chunk__12251_13048 = G__13065;
count__12252_13049 = G__13066;
i__12253_13050 = G__13067;
continue;
} else {
var node_13070 = cljs.core.first(seq__12250_13062__$1);
fragment.appendChild(shadow.dom._to_dom(node_13070));


var G__13072 = cljs.core.next(seq__12250_13062__$1);
var G__13073 = null;
var G__13074 = (0);
var G__13075 = (0);
seq__12250_13046 = G__13072;
chunk__12251_13048 = G__13073;
count__12252_13049 = G__13074;
i__12253_13050 = G__13075;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12232){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12232));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12271_13076 = cljs.core.seq(scripts);
var chunk__12272_13077 = null;
var count__12273_13078 = (0);
var i__12274_13079 = (0);
while(true){
if((i__12274_13079 < count__12273_13078)){
var vec__12290_13080 = chunk__12272_13077.cljs$core$IIndexed$_nth$arity$2(null,i__12274_13079);
var script_tag_13081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_13080,(0),null);
var script_body_13082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_13080,(1),null);
eval(script_body_13082);


var G__13083 = seq__12271_13076;
var G__13084 = chunk__12272_13077;
var G__13085 = count__12273_13078;
var G__13086 = (i__12274_13079 + (1));
seq__12271_13076 = G__13083;
chunk__12272_13077 = G__13084;
count__12273_13078 = G__13085;
i__12274_13079 = G__13086;
continue;
} else {
var temp__5804__auto___13087 = cljs.core.seq(seq__12271_13076);
if(temp__5804__auto___13087){
var seq__12271_13088__$1 = temp__5804__auto___13087;
if(cljs.core.chunked_seq_QMARK_(seq__12271_13088__$1)){
var c__5525__auto___13090 = cljs.core.chunk_first(seq__12271_13088__$1);
var G__13091 = cljs.core.chunk_rest(seq__12271_13088__$1);
var G__13092 = c__5525__auto___13090;
var G__13093 = cljs.core.count(c__5525__auto___13090);
var G__13094 = (0);
seq__12271_13076 = G__13091;
chunk__12272_13077 = G__13092;
count__12273_13078 = G__13093;
i__12274_13079 = G__13094;
continue;
} else {
var vec__12297_13095 = cljs.core.first(seq__12271_13088__$1);
var script_tag_13096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12297_13095,(0),null);
var script_body_13097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12297_13095,(1),null);
eval(script_body_13097);


var G__13099 = cljs.core.next(seq__12271_13088__$1);
var G__13100 = null;
var G__13101 = (0);
var G__13102 = (0);
seq__12271_13076 = G__13099;
chunk__12272_13077 = G__13100;
count__12273_13078 = G__13101;
i__12274_13079 = G__13102;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12303){
var vec__12304 = p__12303;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12304,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12304,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12310 = arguments.length;
switch (G__12310) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12324 = cljs.core.seq(style_keys);
var chunk__12325 = null;
var count__12326 = (0);
var i__12327 = (0);
while(true){
if((i__12327 < count__12326)){
var it = chunk__12325.cljs$core$IIndexed$_nth$arity$2(null,i__12327);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13114 = seq__12324;
var G__13115 = chunk__12325;
var G__13116 = count__12326;
var G__13117 = (i__12327 + (1));
seq__12324 = G__13114;
chunk__12325 = G__13115;
count__12326 = G__13116;
i__12327 = G__13117;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12324);
if(temp__5804__auto__){
var seq__12324__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12324__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12324__$1);
var G__13119 = cljs.core.chunk_rest(seq__12324__$1);
var G__13120 = c__5525__auto__;
var G__13121 = cljs.core.count(c__5525__auto__);
var G__13122 = (0);
seq__12324 = G__13119;
chunk__12325 = G__13120;
count__12326 = G__13121;
i__12327 = G__13122;
continue;
} else {
var it = cljs.core.first(seq__12324__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13127 = cljs.core.next(seq__12324__$1);
var G__13128 = null;
var G__13129 = (0);
var G__13130 = (0);
seq__12324 = G__13127;
chunk__12325 = G__13128;
count__12326 = G__13129;
i__12327 = G__13130;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12359,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12372 = k12359;
var G__12372__$1 = (((G__12372 instanceof cljs.core.Keyword))?G__12372.fqn:null);
switch (G__12372__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12359,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12374){
var vec__12375 = p__12374;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12375,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12375,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12358){
var self__ = this;
var G__12358__$1 = this;
return (new cljs.core.RecordIter((0),G__12358__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12360,other12361){
var self__ = this;
var this12360__$1 = this;
return (((!((other12361 == null)))) && ((((this12360__$1.constructor === other12361.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12360__$1.x,other12361.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12360__$1.y,other12361.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12360__$1.__extmap,other12361.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12359){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12394 = k12359;
var G__12394__$1 = (((G__12394 instanceof cljs.core.Keyword))?G__12394.fqn:null);
switch (G__12394__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12359);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12358){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12395 = cljs.core.keyword_identical_QMARK_;
var expr__12396 = k__5309__auto__;
if(cljs.core.truth_((pred__12395.cljs$core$IFn$_invoke$arity$2 ? pred__12395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12396) : pred__12395.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12396)))){
return (new shadow.dom.Coordinate(G__12358,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12395.cljs$core$IFn$_invoke$arity$2 ? pred__12395.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12396) : pred__12395.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12396)))){
return (new shadow.dom.Coordinate(self__.x,G__12358,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12358),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12358){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12358,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12366){
var extmap__5342__auto__ = (function (){var G__12400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12366,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12366)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12400);
} else {
return G__12400;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12366),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12366),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12410,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12424 = k12410;
var G__12424__$1 = (((G__12424 instanceof cljs.core.Keyword))?G__12424.fqn:null);
switch (G__12424__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12410,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12427){
var vec__12429 = p__12427;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12429,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12429,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12409){
var self__ = this;
var G__12409__$1 = this;
return (new cljs.core.RecordIter((0),G__12409__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12411,other12412){
var self__ = this;
var this12411__$1 = this;
return (((!((other12412 == null)))) && ((((this12411__$1.constructor === other12412.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12411__$1.w,other12412.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12411__$1.h,other12412.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12411__$1.__extmap,other12412.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12410){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12446 = k12410;
var G__12446__$1 = (((G__12446 instanceof cljs.core.Keyword))?G__12446.fqn:null);
switch (G__12446__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12410);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12409){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12448 = cljs.core.keyword_identical_QMARK_;
var expr__12449 = k__5309__auto__;
if(cljs.core.truth_((pred__12448.cljs$core$IFn$_invoke$arity$2 ? pred__12448.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12449) : pred__12448.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12449)))){
return (new shadow.dom.Size(G__12409,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12448.cljs$core$IFn$_invoke$arity$2 ? pred__12448.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12449) : pred__12448.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12449)))){
return (new shadow.dom.Size(self__.w,G__12409,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12409),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12409){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12409,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12418){
var extmap__5342__auto__ = (function (){var G__12473 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12418,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12418)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12473);
} else {
return G__12473;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12418),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12418),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13358 = (i + (1));
var G__13359 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13358;
ret = G__13359;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12497){
var vec__12499 = p__12497;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12499,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12511 = arguments.length;
switch (G__12511) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13429 = ps;
var G__13430 = (i + (1));
el__$1 = G__13429;
i = G__13430;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12551 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12551,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12555_13464 = cljs.core.seq(props);
var chunk__12556_13465 = null;
var count__12557_13466 = (0);
var i__12558_13467 = (0);
while(true){
if((i__12558_13467 < count__12557_13466)){
var vec__12573_13468 = chunk__12556_13465.cljs$core$IIndexed$_nth$arity$2(null,i__12558_13467);
var k_13469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573_13468,(0),null);
var v_13470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573_13468,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13469);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13469),v_13470);


var G__13473 = seq__12555_13464;
var G__13474 = chunk__12556_13465;
var G__13475 = count__12557_13466;
var G__13476 = (i__12558_13467 + (1));
seq__12555_13464 = G__13473;
chunk__12556_13465 = G__13474;
count__12557_13466 = G__13475;
i__12558_13467 = G__13476;
continue;
} else {
var temp__5804__auto___13477 = cljs.core.seq(seq__12555_13464);
if(temp__5804__auto___13477){
var seq__12555_13478__$1 = temp__5804__auto___13477;
if(cljs.core.chunked_seq_QMARK_(seq__12555_13478__$1)){
var c__5525__auto___13479 = cljs.core.chunk_first(seq__12555_13478__$1);
var G__13481 = cljs.core.chunk_rest(seq__12555_13478__$1);
var G__13482 = c__5525__auto___13479;
var G__13483 = cljs.core.count(c__5525__auto___13479);
var G__13484 = (0);
seq__12555_13464 = G__13481;
chunk__12556_13465 = G__13482;
count__12557_13466 = G__13483;
i__12558_13467 = G__13484;
continue;
} else {
var vec__12578_13489 = cljs.core.first(seq__12555_13478__$1);
var k_13490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578_13489,(0),null);
var v_13491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12578_13489,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13490);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13490),v_13491);


var G__13493 = cljs.core.next(seq__12555_13478__$1);
var G__13494 = null;
var G__13495 = (0);
var G__13496 = (0);
seq__12555_13464 = G__13493;
chunk__12556_13465 = G__13494;
count__12557_13466 = G__13495;
i__12558_13467 = G__13496;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12589 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
var seq__12595_13504 = cljs.core.seq(node_children);
var chunk__12598_13505 = null;
var count__12599_13506 = (0);
var i__12600_13507 = (0);
while(true){
if((i__12600_13507 < count__12599_13506)){
var child_struct_13510 = chunk__12598_13505.cljs$core$IIndexed$_nth$arity$2(null,i__12600_13507);
if((!((child_struct_13510 == null)))){
if(typeof child_struct_13510 === 'string'){
var text_13511 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13511),child_struct_13510].join(''));
} else {
var children_13512 = shadow.dom.svg_node(child_struct_13510);
if(cljs.core.seq_QMARK_(children_13512)){
var seq__12638_13514 = cljs.core.seq(children_13512);
var chunk__12640_13515 = null;
var count__12641_13516 = (0);
var i__12642_13517 = (0);
while(true){
if((i__12642_13517 < count__12641_13516)){
var child_13575 = chunk__12640_13515.cljs$core$IIndexed$_nth$arity$2(null,i__12642_13517);
if(cljs.core.truth_(child_13575)){
node.appendChild(child_13575);


var G__13578 = seq__12638_13514;
var G__13579 = chunk__12640_13515;
var G__13580 = count__12641_13516;
var G__13581 = (i__12642_13517 + (1));
seq__12638_13514 = G__13578;
chunk__12640_13515 = G__13579;
count__12641_13516 = G__13580;
i__12642_13517 = G__13581;
continue;
} else {
var G__13582 = seq__12638_13514;
var G__13583 = chunk__12640_13515;
var G__13584 = count__12641_13516;
var G__13585 = (i__12642_13517 + (1));
seq__12638_13514 = G__13582;
chunk__12640_13515 = G__13583;
count__12641_13516 = G__13584;
i__12642_13517 = G__13585;
continue;
}
} else {
var temp__5804__auto___13586 = cljs.core.seq(seq__12638_13514);
if(temp__5804__auto___13586){
var seq__12638_13614__$1 = temp__5804__auto___13586;
if(cljs.core.chunked_seq_QMARK_(seq__12638_13614__$1)){
var c__5525__auto___13615 = cljs.core.chunk_first(seq__12638_13614__$1);
var G__13617 = cljs.core.chunk_rest(seq__12638_13614__$1);
var G__13619 = c__5525__auto___13615;
var G__13620 = cljs.core.count(c__5525__auto___13615);
var G__13621 = (0);
seq__12638_13514 = G__13617;
chunk__12640_13515 = G__13619;
count__12641_13516 = G__13620;
i__12642_13517 = G__13621;
continue;
} else {
var child_13623 = cljs.core.first(seq__12638_13614__$1);
if(cljs.core.truth_(child_13623)){
node.appendChild(child_13623);


var G__13624 = cljs.core.next(seq__12638_13614__$1);
var G__13625 = null;
var G__13626 = (0);
var G__13627 = (0);
seq__12638_13514 = G__13624;
chunk__12640_13515 = G__13625;
count__12641_13516 = G__13626;
i__12642_13517 = G__13627;
continue;
} else {
var G__13628 = cljs.core.next(seq__12638_13614__$1);
var G__13629 = null;
var G__13630 = (0);
var G__13631 = (0);
seq__12638_13514 = G__13628;
chunk__12640_13515 = G__13629;
count__12641_13516 = G__13630;
i__12642_13517 = G__13631;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13512);
}
}


var G__13635 = seq__12595_13504;
var G__13636 = chunk__12598_13505;
var G__13637 = count__12599_13506;
var G__13638 = (i__12600_13507 + (1));
seq__12595_13504 = G__13635;
chunk__12598_13505 = G__13636;
count__12599_13506 = G__13637;
i__12600_13507 = G__13638;
continue;
} else {
var G__13645 = seq__12595_13504;
var G__13646 = chunk__12598_13505;
var G__13647 = count__12599_13506;
var G__13648 = (i__12600_13507 + (1));
seq__12595_13504 = G__13645;
chunk__12598_13505 = G__13646;
count__12599_13506 = G__13647;
i__12600_13507 = G__13648;
continue;
}
} else {
var temp__5804__auto___13651 = cljs.core.seq(seq__12595_13504);
if(temp__5804__auto___13651){
var seq__12595_13653__$1 = temp__5804__auto___13651;
if(cljs.core.chunked_seq_QMARK_(seq__12595_13653__$1)){
var c__5525__auto___13655 = cljs.core.chunk_first(seq__12595_13653__$1);
var G__13656 = cljs.core.chunk_rest(seq__12595_13653__$1);
var G__13657 = c__5525__auto___13655;
var G__13658 = cljs.core.count(c__5525__auto___13655);
var G__13659 = (0);
seq__12595_13504 = G__13656;
chunk__12598_13505 = G__13657;
count__12599_13506 = G__13658;
i__12600_13507 = G__13659;
continue;
} else {
var child_struct_13664 = cljs.core.first(seq__12595_13653__$1);
if((!((child_struct_13664 == null)))){
if(typeof child_struct_13664 === 'string'){
var text_13666 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13666),child_struct_13664].join(''));
} else {
var children_13667 = shadow.dom.svg_node(child_struct_13664);
if(cljs.core.seq_QMARK_(children_13667)){
var seq__12653_13695 = cljs.core.seq(children_13667);
var chunk__12655_13696 = null;
var count__12656_13697 = (0);
var i__12657_13698 = (0);
while(true){
if((i__12657_13698 < count__12656_13697)){
var child_13699 = chunk__12655_13696.cljs$core$IIndexed$_nth$arity$2(null,i__12657_13698);
if(cljs.core.truth_(child_13699)){
node.appendChild(child_13699);


var G__13703 = seq__12653_13695;
var G__13704 = chunk__12655_13696;
var G__13705 = count__12656_13697;
var G__13706 = (i__12657_13698 + (1));
seq__12653_13695 = G__13703;
chunk__12655_13696 = G__13704;
count__12656_13697 = G__13705;
i__12657_13698 = G__13706;
continue;
} else {
var G__13707 = seq__12653_13695;
var G__13708 = chunk__12655_13696;
var G__13709 = count__12656_13697;
var G__13710 = (i__12657_13698 + (1));
seq__12653_13695 = G__13707;
chunk__12655_13696 = G__13708;
count__12656_13697 = G__13709;
i__12657_13698 = G__13710;
continue;
}
} else {
var temp__5804__auto___13712__$1 = cljs.core.seq(seq__12653_13695);
if(temp__5804__auto___13712__$1){
var seq__12653_13713__$1 = temp__5804__auto___13712__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12653_13713__$1)){
var c__5525__auto___13714 = cljs.core.chunk_first(seq__12653_13713__$1);
var G__13720 = cljs.core.chunk_rest(seq__12653_13713__$1);
var G__13721 = c__5525__auto___13714;
var G__13722 = cljs.core.count(c__5525__auto___13714);
var G__13723 = (0);
seq__12653_13695 = G__13720;
chunk__12655_13696 = G__13721;
count__12656_13697 = G__13722;
i__12657_13698 = G__13723;
continue;
} else {
var child_13726 = cljs.core.first(seq__12653_13713__$1);
if(cljs.core.truth_(child_13726)){
node.appendChild(child_13726);


var G__13727 = cljs.core.next(seq__12653_13713__$1);
var G__13728 = null;
var G__13729 = (0);
var G__13730 = (0);
seq__12653_13695 = G__13727;
chunk__12655_13696 = G__13728;
count__12656_13697 = G__13729;
i__12657_13698 = G__13730;
continue;
} else {
var G__13758 = cljs.core.next(seq__12653_13713__$1);
var G__13759 = null;
var G__13760 = (0);
var G__13761 = (0);
seq__12653_13695 = G__13758;
chunk__12655_13696 = G__13759;
count__12656_13697 = G__13760;
i__12657_13698 = G__13761;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13667);
}
}


var G__13764 = cljs.core.next(seq__12595_13653__$1);
var G__13765 = null;
var G__13766 = (0);
var G__13767 = (0);
seq__12595_13504 = G__13764;
chunk__12598_13505 = G__13765;
count__12599_13506 = G__13766;
i__12600_13507 = G__13767;
continue;
} else {
var G__13768 = cljs.core.next(seq__12595_13653__$1);
var G__13769 = null;
var G__13770 = (0);
var G__13771 = (0);
seq__12595_13504 = G__13768;
chunk__12598_13505 = G__13769;
count__12599_13506 = G__13770;
i__12600_13507 = G__13771;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13782 = arguments.length;
var i__5727__auto___13783 = (0);
while(true){
if((i__5727__auto___13783 < len__5726__auto___13782)){
args__5732__auto__.push((arguments[i__5727__auto___13783]));

var G__13785 = (i__5727__auto___13783 + (1));
i__5727__auto___13783 = G__13785;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12681){
var G__12682 = cljs.core.first(seq12681);
var seq12681__$1 = cljs.core.next(seq12681);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12682,seq12681__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
