goog.provide('consol.events');
if((typeof consol !== 'undefined') && (typeof consol.events !== 'undefined') && (typeof consol.events.installed_QMARK_ !== 'undefined')){
} else {
consol.events.installed_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
/**
 * Walk up from target to find an element with data-slab-action.
 */
consol.events.find_action_el = (function consol$events$find_action_el(target){
var el = target;
while(true){
if((el == null)){
return null;
} else {
if(cljs.core.truth_(consol.util.dataset(el,"slabAction"))){
return el;
} else {
var G__8708 = el.parentElement;
el = G__8708;
continue;

}
}
break;
}
});
consol.events.on_click = (function consol$events$on_click(e){
var el = consol.events.find_action_el(e.target);
var action = consol.util.kw(consol.util.dataset(el,"slabAction"));
if(cljs.core.truth_(action)){
e.preventDefault();

return consol.actions.dispatch_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"event","event",301435442),e], null));
} else {
return null;
}
});
consol.events.attach_BANG_ = (function consol$events$attach_BANG_(){
if(cljs.core.truth_(cljs.core.deref(consol.events.installed_QMARK_))){
return null;
} else {
document.addEventListener("click",consol.events.on_click);

return cljs.core.reset_BANG_(consol.events.installed_QMARK_,true);
}
});
consol.events.detach_BANG_ = (function consol$events$detach_BANG_(){
if(cljs.core.truth_(cljs.core.deref(consol.events.installed_QMARK_))){
document.removeEventListener("click",consol.events.on_click);

return cljs.core.reset_BANG_(consol.events.installed_QMARK_,false);
} else {
return null;
}
});

//# sourceMappingURL=consol.events.js.map
