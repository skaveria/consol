goog.provide('slab.events');
if((typeof slab !== 'undefined') && (typeof slab.events !== 'undefined') && (typeof slab.events.installed_QMARK_ !== 'undefined')){
} else {
slab.events.installed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * Walk up from target to find an element with data-slab-action.
 */
slab.events.find_action_el = (function slab$events$find_action_el(target){
var el = target;
while(true){
if((el == null)){
return null;
} else {
if(cljs.core.truth_(slab.util.dataset(el,"slabAction"))){
return el;
} else {
var G__6125 = el.parentElement;
el = G__6125;
continue;

}
}
break;
}
});
slab.events.on_click = (function slab$events$on_click(e){
var el = slab.events.find_action_el(e.target);
var action = slab.util.kw(slab.util.dataset(el,"slabAction"));
if(cljs.core.truth_(action)){
e.preventDefault();

return slab.actions.dispatch_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"event","event",301435442),e], null));
} else {
return null;
}
});
slab.events.attach_BANG_ = (function slab$events$attach_BANG_(){
if(cljs.core.truth_(cljs.core.deref(slab.events.installed_QMARK_))){
return null;
} else {
document.addEventListener("click",slab.events.on_click);

return cljs.core.reset_BANG_(slab.events.installed_QMARK_,true);
}
});
slab.events.detach_BANG_ = (function slab$events$detach_BANG_(){
if(cljs.core.truth_(cljs.core.deref(slab.events.installed_QMARK_))){
document.removeEventListener("click",slab.events.on_click);

return cljs.core.reset_BANG_(slab.events.installed_QMARK_,false);
} else {
return null;
}
});

//# sourceMappingURL=slab.events.js.map
