goog.provide('slab.chrome');
slab.chrome.by_id = (function slab$chrome$by_id(id){
return document.getElementById(id);
});
slab.chrome.qs = (function slab$chrome$qs(sel){
return document.querySelector(sel);
});
slab.chrome.mk_el = (function slab$chrome$mk_el(var_args){
var G__6099 = arguments.length;
switch (G__6099) {
case 1:
return slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(tag);
}));

(slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$2 = (function (tag,class_name){
var e = document.createElement(tag);
(e.className = class_name);

return e;
}));

(slab.chrome.mk_el.cljs$lang$maxFixedArity = 2);

slab.chrome.set_text_BANG_ = (function slab$chrome$set_text_BANG_(el,s){
(el.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));

return el;
});
slab.chrome.clear_children_BANG_ = (function slab$chrome$clear_children_BANG_(el){
(el.innerHTML = "");

return el;
});
slab.chrome.append_BANG_ = (function slab$chrome$append_BANG_(parent,child){
parent.appendChild(child);

return parent;
});
slab.chrome.insert_after_BANG_ = (function slab$chrome$insert_after_BANG_(new_node,ref_node){
var temp__5804__auto___6177 = ref_node.parentNode;
if(cljs.core.truth_(temp__5804__auto___6177)){
var p_6178 = temp__5804__auto___6177;
var temp__5802__auto___6179 = ref_node.nextSibling;
if(cljs.core.truth_(temp__5802__auto___6179)){
var n_6180 = temp__5802__auto___6179;
p_6178.insertBefore(new_node,n_6180);
} else {
p_6178.appendChild(new_node);
}
} else {
}

return new_node;
});
slab.chrome.ensure_content_root_BANG_ = (function slab$chrome$ensure_content_root_BANG_(){
var or__5002__auto__ = slab.chrome.by_id("content");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var content = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("div","content");
var body = document.body;
var post = slab.chrome.by_id("postamble");
var kids = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(body.childNodes);
(content.id = "content");

var seq__6116_6181 = cljs.core.seq(kids);
var chunk__6117_6182 = null;
var count__6118_6183 = (0);
var i__6119_6184 = (0);
while(true){
if((i__6119_6184 < count__6118_6183)){
var k_6185 = chunk__6117_6182.cljs$core$IIndexed$_nth$arity$2(null,i__6119_6184);
if(cljs.core.truth_((function (){var and__5000__auto__ = k_6185;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_6185.id,"postamble");
} else {
return and__5000__auto__;
}
})())){
content.appendChild(k_6185);
} else {
}


var G__6186 = seq__6116_6181;
var G__6187 = chunk__6117_6182;
var G__6188 = count__6118_6183;
var G__6189 = (i__6119_6184 + (1));
seq__6116_6181 = G__6186;
chunk__6117_6182 = G__6187;
count__6118_6183 = G__6188;
i__6119_6184 = G__6189;
continue;
} else {
var temp__5804__auto___6190 = cljs.core.seq(seq__6116_6181);
if(temp__5804__auto___6190){
var seq__6116_6191__$1 = temp__5804__auto___6190;
if(cljs.core.chunked_seq_QMARK_(seq__6116_6191__$1)){
var c__5525__auto___6192 = cljs.core.chunk_first(seq__6116_6191__$1);
var G__6193 = cljs.core.chunk_rest(seq__6116_6191__$1);
var G__6194 = c__5525__auto___6192;
var G__6195 = cljs.core.count(c__5525__auto___6192);
var G__6196 = (0);
seq__6116_6181 = G__6193;
chunk__6117_6182 = G__6194;
count__6118_6183 = G__6195;
i__6119_6184 = G__6196;
continue;
} else {
var k_6197 = cljs.core.first(seq__6116_6191__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = k_6197;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k_6197.id,"postamble");
} else {
return and__5000__auto__;
}
})())){
content.appendChild(k_6197);
} else {
}


var G__6198 = cljs.core.next(seq__6116_6191__$1);
var G__6199 = null;
var G__6200 = (0);
var G__6201 = (0);
seq__6116_6181 = G__6198;
chunk__6117_6182 = G__6199;
count__6118_6183 = G__6200;
i__6119_6184 = G__6201;
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
slab.chrome.ensure_titlebar_BANG_ = (function slab$chrome$ensure_titlebar_BANG_(){
var content = slab.chrome.ensure_content_root_BANG_();
var existing = slab.chrome.qs("#content > h1.title");
var page = slab.config.current_page_name();
var title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slab.config.chrome_STAR_)))," \u00B7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slab.config.page_label(page))].join('');
if(cljs.core.truth_(existing)){
slab.chrome.set_text_BANG_(existing,title);

return existing;
} else {
var h = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("h1","title");
slab.chrome.set_text_BANG_(h,title);

var temp__5802__auto___6202 = content.firstElementChild;
if(cljs.core.truth_(temp__5802__auto___6202)){
var first_el_6203 = temp__5802__auto___6202;
content.insertBefore(h,first_el_6203);
} else {
content.appendChild(h);
}

return h;
}
});
slab.chrome.ensure_tabsbar_BANG_ = (function slab$chrome$ensure_tabsbar_BANG_(){
var content = slab.chrome.ensure_content_root_BANG_();
var existing = slab.chrome.qs("#content > p.slab-tabs");
var title = (function (){var or__5002__auto__ = slab.chrome.qs("#content > h1.title");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return slab.chrome.ensure_titlebar_BANG_();
}
})();
if(cljs.core.truth_(existing)){
slab.chrome.clear_children_BANG_(existing);

var seq__6132_6204 = cljs.core.seq(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slab.config.chrome_STAR_)));
var chunk__6133_6205 = null;
var count__6134_6206 = (0);
var i__6135_6207 = (0);
while(true){
if((i__6135_6207 < count__6134_6206)){
var map__6150_6208 = chunk__6133_6205.cljs$core$IIndexed$_nth$arity$2(null,i__6135_6207);
var map__6150_6209__$1 = cljs.core.__destructure_map(map__6150_6208);
var href_6210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6150_6209__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_6211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6150_6209__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_6212 = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_6212.setAttribute("href",href_6210);

slab.chrome.set_text_BANG_(a_6212,label_6211);

slab.chrome.append_BANG_(existing,a_6212);


var G__6213 = seq__6132_6204;
var G__6214 = chunk__6133_6205;
var G__6215 = count__6134_6206;
var G__6216 = (i__6135_6207 + (1));
seq__6132_6204 = G__6213;
chunk__6133_6205 = G__6214;
count__6134_6206 = G__6215;
i__6135_6207 = G__6216;
continue;
} else {
var temp__5804__auto___6217 = cljs.core.seq(seq__6132_6204);
if(temp__5804__auto___6217){
var seq__6132_6218__$1 = temp__5804__auto___6217;
if(cljs.core.chunked_seq_QMARK_(seq__6132_6218__$1)){
var c__5525__auto___6219 = cljs.core.chunk_first(seq__6132_6218__$1);
var G__6220 = cljs.core.chunk_rest(seq__6132_6218__$1);
var G__6221 = c__5525__auto___6219;
var G__6222 = cljs.core.count(c__5525__auto___6219);
var G__6223 = (0);
seq__6132_6204 = G__6220;
chunk__6133_6205 = G__6221;
count__6134_6206 = G__6222;
i__6135_6207 = G__6223;
continue;
} else {
var map__6151_6224 = cljs.core.first(seq__6132_6218__$1);
var map__6151_6225__$1 = cljs.core.__destructure_map(map__6151_6224);
var href_6226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6151_6225__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_6227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6151_6225__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_6228 = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_6228.setAttribute("href",href_6226);

slab.chrome.set_text_BANG_(a_6228,label_6227);

slab.chrome.append_BANG_(existing,a_6228);


var G__6229 = cljs.core.next(seq__6132_6218__$1);
var G__6230 = null;
var G__6231 = (0);
var G__6232 = (0);
seq__6132_6204 = G__6229;
chunk__6133_6205 = G__6230;
count__6134_6206 = G__6231;
i__6135_6207 = G__6232;
continue;
}
} else {
}
}
break;
}

return existing;
} else {
var p = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("p","slab-tabs");
var seq__6152_6233 = cljs.core.seq(new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slab.config.chrome_STAR_)));
var chunk__6153_6234 = null;
var count__6154_6235 = (0);
var i__6155_6236 = (0);
while(true){
if((i__6155_6236 < count__6154_6235)){
var map__6162_6237 = chunk__6153_6234.cljs$core$IIndexed$_nth$arity$2(null,i__6155_6236);
var map__6162_6238__$1 = cljs.core.__destructure_map(map__6162_6237);
var href_6239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162_6238__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_6240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162_6238__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_6242 = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_6242.setAttribute("href",href_6239);

slab.chrome.set_text_BANG_(a_6242,label_6240);

slab.chrome.append_BANG_(p,a_6242);


var G__6243 = seq__6152_6233;
var G__6244 = chunk__6153_6234;
var G__6245 = count__6154_6235;
var G__6246 = (i__6155_6236 + (1));
seq__6152_6233 = G__6243;
chunk__6153_6234 = G__6244;
count__6154_6235 = G__6245;
i__6155_6236 = G__6246;
continue;
} else {
var temp__5804__auto___6247 = cljs.core.seq(seq__6152_6233);
if(temp__5804__auto___6247){
var seq__6152_6248__$1 = temp__5804__auto___6247;
if(cljs.core.chunked_seq_QMARK_(seq__6152_6248__$1)){
var c__5525__auto___6249 = cljs.core.chunk_first(seq__6152_6248__$1);
var G__6250 = cljs.core.chunk_rest(seq__6152_6248__$1);
var G__6251 = c__5525__auto___6249;
var G__6252 = cljs.core.count(c__5525__auto___6249);
var G__6253 = (0);
seq__6152_6233 = G__6250;
chunk__6153_6234 = G__6251;
count__6154_6235 = G__6252;
i__6155_6236 = G__6253;
continue;
} else {
var map__6163_6254 = cljs.core.first(seq__6152_6248__$1);
var map__6163_6255__$1 = cljs.core.__destructure_map(map__6163_6254);
var href_6256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6163_6255__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var label_6257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6163_6255__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var a_6258 = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("a");
a_6258.setAttribute("href",href_6256);

slab.chrome.set_text_BANG_(a_6258,label_6257);

slab.chrome.append_BANG_(p,a_6258);


var G__6259 = cljs.core.next(seq__6152_6248__$1);
var G__6260 = null;
var G__6261 = (0);
var G__6262 = (0);
seq__6152_6233 = G__6259;
chunk__6153_6234 = G__6260;
count__6154_6235 = G__6261;
i__6155_6236 = G__6262;
continue;
}
} else {
}
}
break;
}

slab.chrome.insert_after_BANG_(p,title);

return p;
}
});
slab.chrome.ensure_postamble_BANG_ = (function slab$chrome$ensure_postamble_BANG_(){
var or__5002__auto__ = slab.chrome.by_id("postamble");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var p = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$2("div","status");
(p.id = "postamble");

document.body.appendChild(p);

return p;
}
});
slab.chrome.ensure_modeline_BANG_ = (function slab$chrome$ensure_modeline_BANG_(){
var post = slab.chrome.ensure_postamble_BANG_();
var existing = slab.chrome.by_id("modeline");
var or__5002__auto__ = existing;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var m = slab.chrome.mk_el.cljs$core$IFn$_invoke$arity$1("div");
(m.id = "modeline");

post.appendChild(m);

return m;
}
});
slab.chrome.ensure_chrome_BANG_ = (function slab$chrome$ensure_chrome_BANG_(){
slab.chrome.ensure_titlebar_BANG_();

slab.chrome.ensure_tabsbar_BANG_();

slab.chrome.ensure_modeline_BANG_();

return null;
});
slab.chrome.highlight_active_tab_BANG_ = (function slab$chrome$highlight_active_tab_BANG_(){
var temp__5804__auto__ = slab.chrome.qs("#content > p.slab-tabs");
if(cljs.core.truth_(temp__5804__auto__)){
var bar = temp__5804__auto__;
var current = slab.config.current_page_name();
var links = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(bar.querySelectorAll("a"));
var seq__6168_6263 = cljs.core.seq(links);
var chunk__6169_6264 = null;
var count__6170_6265 = (0);
var i__6171_6266 = (0);
while(true){
if((i__6171_6266 < count__6170_6265)){
var a_6267 = chunk__6169_6264.cljs$core$IIndexed$_nth$arity$2(null,i__6171_6266);
a_6267.classList.remove("active");


var G__6272 = seq__6168_6263;
var G__6273 = chunk__6169_6264;
var G__6274 = count__6170_6265;
var G__6275 = (i__6171_6266 + (1));
seq__6168_6263 = G__6272;
chunk__6169_6264 = G__6273;
count__6170_6265 = G__6274;
i__6171_6266 = G__6275;
continue;
} else {
var temp__5804__auto___6279__$1 = cljs.core.seq(seq__6168_6263);
if(temp__5804__auto___6279__$1){
var seq__6168_6280__$1 = temp__5804__auto___6279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6168_6280__$1)){
var c__5525__auto___6284 = cljs.core.chunk_first(seq__6168_6280__$1);
var G__6285 = cljs.core.chunk_rest(seq__6168_6280__$1);
var G__6286 = c__5525__auto___6284;
var G__6287 = cljs.core.count(c__5525__auto___6284);
var G__6288 = (0);
seq__6168_6263 = G__6285;
chunk__6169_6264 = G__6286;
count__6170_6265 = G__6287;
i__6171_6266 = G__6288;
continue;
} else {
var a_6289 = cljs.core.first(seq__6168_6280__$1);
a_6289.classList.remove("active");


var G__6290 = cljs.core.next(seq__6168_6280__$1);
var G__6291 = null;
var G__6292 = (0);
var G__6293 = (0);
seq__6168_6263 = G__6290;
chunk__6169_6264 = G__6291;
count__6170_6265 = G__6292;
i__6171_6266 = G__6293;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto____$1 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slab.config.basename(a.getAttribute("href")),current);
}),links));
if(cljs.core.truth_(temp__5804__auto____$1)){
var match = temp__5804__auto____$1;
return match.classList.add("active");
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=slab.chrome.js.map
