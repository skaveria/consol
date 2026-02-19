goog.provide('consol.chrome');
consol.chrome.by_id = (function consol$chrome$by_id(id){
return document.getElementById(id);
});
consol.chrome.qs = (function consol$chrome$qs(sel){
return document.querySelector(sel);
});
consol.chrome.mk_el = (function consol$chrome$mk_el(var_args){
var G__8626 = arguments.length;
switch (G__8626) {
case 1:
return consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(tag);
}));

(consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$2 = (function (tag,class_name){
var e = document.createElement(tag);
(e.className = class_name);

return e;
}));

(consol.chrome.mk_el.cljs$lang$maxFixedArity = 2);

consol.chrome.set_text_BANG_ = (function consol$chrome$set_text_BANG_(el,s){
(el.textContent = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));

return el;
});
consol.chrome.clear_children_BANG_ = (function consol$chrome$clear_children_BANG_(el){
(el.innerHTML = "");

return el;
});
consol.chrome.append_BANG_ = (function consol$chrome$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
consol.chrome.insert_after_BANG_ = (function consol$chrome$insert_after_BANG_(new_node,ref_node){
var temp__5823__auto___8727 = ref_node.parentNode;
if(cljs.core.truth_(temp__5823__auto___8727)){
var p_8728 = temp__5823__auto___8727;
var temp__5821__auto___8729 = ref_node.nextSibling;
if(cljs.core.truth_(temp__5821__auto___8729)){
var n_8730 = temp__5821__auto___8729;
p_8728.insertBefore(new_node,n_8730);
} else {
p_8728.appendChild(new_node);
}
} else {
}

return new_node;
});
consol.chrome.ensure_content_root_BANG_ = (function consol$chrome$ensure_content_root_BANG_(){
var or__5142__auto__ = consol.chrome.by_id("content");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var content = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("div","content");
var body = document.body;
var post = consol.chrome.by_id("postamble");
var kids = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(body.childNodes);
(content.id = "content");

var seq__8642_8731 = cljs.core.seq(kids);
var chunk__8643_8733 = null;
var count__8644_8734 = (0);
var i__8645_8735 = (0);
while(true){
if((i__8645_8735 < count__8644_8734)){
var k_8737 = chunk__8643_8733.cljs$core$IIndexed$_nth$arity$2(null,i__8645_8735);
if(cljs.core.truth_((function (){var and__5140__auto__ = k_8737;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_8737.id,"postamble");
} else {
return and__5140__auto__;
}
})())){
content.appendChild(k_8737);
} else {
}


var G__8739 = seq__8642_8731;
var G__8740 = chunk__8643_8733;
var G__8741 = count__8644_8734;
var G__8742 = (i__8645_8735 + (1));
seq__8642_8731 = G__8739;
chunk__8643_8733 = G__8740;
count__8644_8734 = G__8741;
i__8645_8735 = G__8742;
continue;
} else {
var temp__5823__auto___8743 = cljs.core.seq(seq__8642_8731);
if(temp__5823__auto___8743){
var seq__8642_8744__$1 = temp__5823__auto___8743;
if(cljs.core.chunked_seq_QMARK_(seq__8642_8744__$1)){
var c__5673__auto___8745 = cljs.core.chunk_first(seq__8642_8744__$1);
var G__8746 = cljs.core.chunk_rest(seq__8642_8744__$1);
var G__8747 = c__5673__auto___8745;
var G__8748 = cljs.core.count(c__5673__auto___8745);
var G__8749 = (0);
seq__8642_8731 = G__8746;
chunk__8643_8733 = G__8747;
count__8644_8734 = G__8748;
i__8645_8735 = G__8749;
continue;
} else {
var k_8754 = cljs.core.first(seq__8642_8744__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = k_8754;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_8754.id,"postamble");
} else {
return and__5140__auto__;
}
})())){
content.appendChild(k_8754);
} else {
}


var G__8757 = cljs.core.next(seq__8642_8744__$1);
var G__8758 = null;
var G__8759 = (0);
var G__8760 = (0);
seq__8642_8731 = G__8757;
chunk__8643_8733 = G__8758;
count__8644_8734 = G__8759;
i__8645_8735 = G__8760;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(post)){
body.insertBefore(content,post);
} else {
body.appendChild(content);
}

return content;
}
});
consol.chrome.ensure_titlebar_BANG_ = (function consol$chrome$ensure_titlebar_BANG_(){
var content = consol.chrome.ensure_content_root_BANG_();
var existing = consol.chrome.qs("#content > h1.title");
var page = consol.config.current_page_name();
var title = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(consol.config.chrome_STAR_)))+" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(consol.config.page_label(page)));
if(cljs.core.truth_(existing)){
consol.chrome.set_text_BANG_(existing,title);

return existing;
} else {
var h = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("h1","title");
consol.chrome.set_text_BANG_(h,title);

var temp__5821__auto___8761 = content.firstElementChild;
if(cljs.core.truth_(temp__5821__auto___8761)){
var first_el_8762 = temp__5821__auto___8761;
content.insertBefore(h,first_el_8762);
} else {
content.appendChild(h);
}

return h;
}
});
consol.chrome.ensure_tabsbar_BANG_ = (function consol$chrome$ensure_tabsbar_BANG_(){
var content = consol.chrome.ensure_content_root_BANG_();
var existing = consol.chrome.qs("#content > p.slab-tabs");
var title = (function (){var or__5142__auto__ = consol.chrome.qs("#content > h1.title");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return consol.chrome.ensure_titlebar_BANG_();
}
})();
if(cljs.core.truth_(existing)){
consol.chrome.clear_children_BANG_(existing);

var seq__8682_8763 = cljs.core.seq(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(consol.config.chrome_STAR_)));
var chunk__8683_8764 = null;
var count__8684_8765 = (0);
var i__8685_8766 = (0);
while(true){
if((i__8685_8766 < count__8684_8765)){
var map__8692_8771 = chunk__8683_8764.cljs$core$IIndexed$_nth$arity$2(null,i__8685_8766);
var map__8692_8772__$1 = cljs.core.__destructure_map(map__8692_8771);
var href_8773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8692_8772__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_8774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8692_8772__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_8775 = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_8775.setAttribute("href",href_8773);

consol.chrome.set_text_BANG_(a_8775,label_8774);

consol.chrome.append_BANG_(existing,a_8775);


var G__8776 = seq__8682_8763;
var G__8777 = chunk__8683_8764;
var G__8778 = count__8684_8765;
var G__8779 = (i__8685_8766 + (1));
seq__8682_8763 = G__8776;
chunk__8683_8764 = G__8777;
count__8684_8765 = G__8778;
i__8685_8766 = G__8779;
continue;
} else {
var temp__5823__auto___8780 = cljs.core.seq(seq__8682_8763);
if(temp__5823__auto___8780){
var seq__8682_8781__$1 = temp__5823__auto___8780;
if(cljs.core.chunked_seq_QMARK_(seq__8682_8781__$1)){
var c__5673__auto___8782 = cljs.core.chunk_first(seq__8682_8781__$1);
var G__8783 = cljs.core.chunk_rest(seq__8682_8781__$1);
var G__8784 = c__5673__auto___8782;
var G__8785 = cljs.core.count(c__5673__auto___8782);
var G__8786 = (0);
seq__8682_8763 = G__8783;
chunk__8683_8764 = G__8784;
count__8684_8765 = G__8785;
i__8685_8766 = G__8786;
continue;
} else {
var map__8694_8787 = cljs.core.first(seq__8682_8781__$1);
var map__8694_8788__$1 = cljs.core.__destructure_map(map__8694_8787);
var href_8789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8694_8788__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_8790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8694_8788__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_8791 = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_8791.setAttribute("href",href_8789);

consol.chrome.set_text_BANG_(a_8791,label_8790);

consol.chrome.append_BANG_(existing,a_8791);


var G__8792 = cljs.core.next(seq__8682_8781__$1);
var G__8793 = null;
var G__8794 = (0);
var G__8795 = (0);
seq__8682_8763 = G__8792;
chunk__8683_8764 = G__8793;
count__8684_8765 = G__8794;
i__8685_8766 = G__8795;
continue;
}
} else {
}
}
break;
}

return existing;
} else {
var p = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("p","slab-tabs");
var seq__8695_8796 = cljs.core.seq(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(consol.config.chrome_STAR_)));
var chunk__8696_8797 = null;
var count__8697_8798 = (0);
var i__8698_8799 = (0);
while(true){
if((i__8698_8799 < count__8697_8798)){
var map__8702_8800 = chunk__8696_8797.cljs$core$IIndexed$_nth$arity$2(null,i__8698_8799);
var map__8702_8801__$1 = cljs.core.__destructure_map(map__8702_8800);
var href_8802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8702_8801__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_8803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8702_8801__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_8804 = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_8804.setAttribute("href",href_8802);

consol.chrome.set_text_BANG_(a_8804,label_8803);

consol.chrome.append_BANG_(p,a_8804);


var G__8805 = seq__8695_8796;
var G__8806 = chunk__8696_8797;
var G__8807 = count__8697_8798;
var G__8808 = (i__8698_8799 + (1));
seq__8695_8796 = G__8805;
chunk__8696_8797 = G__8806;
count__8697_8798 = G__8807;
i__8698_8799 = G__8808;
continue;
} else {
var temp__5823__auto___8809 = cljs.core.seq(seq__8695_8796);
if(temp__5823__auto___8809){
var seq__8695_8810__$1 = temp__5823__auto___8809;
if(cljs.core.chunked_seq_QMARK_(seq__8695_8810__$1)){
var c__5673__auto___8811 = cljs.core.chunk_first(seq__8695_8810__$1);
var G__8812 = cljs.core.chunk_rest(seq__8695_8810__$1);
var G__8813 = c__5673__auto___8811;
var G__8814 = cljs.core.count(c__5673__auto___8811);
var G__8815 = (0);
seq__8695_8796 = G__8812;
chunk__8696_8797 = G__8813;
count__8697_8798 = G__8814;
i__8698_8799 = G__8815;
continue;
} else {
var map__8703_8816 = cljs.core.first(seq__8695_8810__$1);
var map__8703_8817__$1 = cljs.core.__destructure_map(map__8703_8816);
var href_8818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8703_8817__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_8819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8703_8817__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_8820 = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_8820.setAttribute("href",href_8818);

consol.chrome.set_text_BANG_(a_8820,label_8819);

consol.chrome.append_BANG_(p,a_8820);


var G__8826 = cljs.core.next(seq__8695_8810__$1);
var G__8827 = null;
var G__8828 = (0);
var G__8829 = (0);
seq__8695_8796 = G__8826;
chunk__8696_8797 = G__8827;
count__8697_8798 = G__8828;
i__8698_8799 = G__8829;
continue;
}
} else {
}
}
break;
}

consol.chrome.insert_after_BANG_(p,title);

return p;
}
});
consol.chrome.ensure_postamble_BANG_ = (function consol$chrome$ensure_postamble_BANG_(){
var or__5142__auto__ = consol.chrome.by_id("postamble");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var p = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("div","status");
(p.id = "postamble");

document.body.appendChild(p);

return p;
}
});
consol.chrome.ensure_modeline_BANG_ = (function consol$chrome$ensure_modeline_BANG_(){
var post = consol.chrome.ensure_postamble_BANG_();
var existing = consol.chrome.by_id("modeline");
var or__5142__auto__ = existing;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var m = consol.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("div");
(m.id = "modeline");

post.appendChild(m);

return m;
}
});
consol.chrome.ensure_chrome_BANG_ = (function consol$chrome$ensure_chrome_BANG_(){
consol.chrome.ensure_titlebar_BANG_();

consol.chrome.ensure_tabsbar_BANG_();

consol.chrome.ensure_modeline_BANG_();

return null;
});
consol.chrome.highlight_active_tab_BANG_ = (function consol$chrome$highlight_active_tab_BANG_(){
var temp__5823__auto__ = consol.chrome.qs("#content > p.slab-tabs");
if(cljs.core.truth_(temp__5823__auto__)){
var bar = temp__5823__auto__;
var current = consol.config.current_page_name();
var links = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(bar.querySelectorAll("a"));
var seq__8709_8850 = cljs.core.seq(links);
var chunk__8710_8851 = null;
var count__8711_8852 = (0);
var i__8712_8853 = (0);
while(true){
if((i__8712_8853 < count__8711_8852)){
var a_8855 = chunk__8710_8851.cljs$core$IIndexed$_nth$arity$2(null,i__8712_8853);
a_8855.classList.remove("active");


var G__8856 = seq__8709_8850;
var G__8857 = chunk__8710_8851;
var G__8858 = count__8711_8852;
var G__8859 = (i__8712_8853 + (1));
seq__8709_8850 = G__8856;
chunk__8710_8851 = G__8857;
count__8711_8852 = G__8858;
i__8712_8853 = G__8859;
continue;
} else {
var temp__5823__auto___8860__$1 = cljs.core.seq(seq__8709_8850);
if(temp__5823__auto___8860__$1){
var seq__8709_8861__$1 = temp__5823__auto___8860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8709_8861__$1)){
var c__5673__auto___8862 = cljs.core.chunk_first(seq__8709_8861__$1);
var G__8863 = cljs.core.chunk_rest(seq__8709_8861__$1);
var G__8864 = c__5673__auto___8862;
var G__8865 = cljs.core.count(c__5673__auto___8862);
var G__8866 = (0);
seq__8709_8850 = G__8863;
chunk__8710_8851 = G__8864;
count__8711_8852 = G__8865;
i__8712_8853 = G__8866;
continue;
} else {
var a_8867 = cljs.core.first(seq__8709_8861__$1);
a_8867.classList.remove("active");


var G__8868 = cljs.core.next(seq__8709_8861__$1);
var G__8869 = null;
var G__8870 = (0);
var G__8871 = (0);
seq__8709_8850 = G__8868;
chunk__8710_8851 = G__8869;
count__8711_8852 = G__8870;
i__8712_8853 = G__8871;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto____$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(consol.config.basename(a.getAttribute("href")),current);
}),links));
if(cljs.core.truth_(temp__5823__auto____$1)){
var match = temp__5823__auto____$1;
return match.classList.add("active");
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=consol.chrome.js.map
