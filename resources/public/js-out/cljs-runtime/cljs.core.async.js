goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14544 = (function (f,blockable,meta14545){
this.f = f;
this.blockable = blockable;
this.meta14545 = meta14545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14546,meta14545__$1){
var self__ = this;
var _14546__$1 = this;
return (new cljs.core.async.t_cljs$core$async14544(self__.f,self__.blockable,meta14545__$1));
}));

(cljs.core.async.t_cljs$core$async14544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14546){
var self__ = this;
var _14546__$1 = this;
return self__.meta14545;
}));

(cljs.core.async.t_cljs$core$async14544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14545","meta14545",-1070545907,null)], null);
}));

(cljs.core.async.t_cljs$core$async14544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14544");

(cljs.core.async.t_cljs$core$async14544.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14544.
 */
cljs.core.async.__GT_t_cljs$core$async14544 = (function cljs$core$async$__GT_t_cljs$core$async14544(f,blockable,meta14545){
return (new cljs.core.async.t_cljs$core$async14544(f,blockable,meta14545));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14518 = arguments.length;
switch (G__14518) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14544(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14573 = arguments.length;
switch (G__14573) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14584 = arguments.length;
switch (G__14584) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14642 = arguments.length;
switch (G__14642) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17903 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17903) : fn1.call(null,val_17903));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17903) : fn1.call(null,val_17903));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14694 = arguments.length;
switch (G__14694) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17907 = n;
var x_17908 = (0);
while(true){
if((x_17908 < n__5593__auto___17907)){
(a[x_17908] = x_17908);

var G__17918 = (x_17908 + (1));
x_17908 = G__17918;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14765 = (function (flag,meta14766){
this.flag = flag;
this.meta14766 = meta14766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14767,meta14766__$1){
var self__ = this;
var _14767__$1 = this;
return (new cljs.core.async.t_cljs$core$async14765(self__.flag,meta14766__$1));
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14767){
var self__ = this;
var _14767__$1 = this;
return self__.meta14766;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14766","meta14766",860635932,null)], null);
}));

(cljs.core.async.t_cljs$core$async14765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14765");

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14765.
 */
cljs.core.async.__GT_t_cljs$core$async14765 = (function cljs$core$async$__GT_t_cljs$core$async14765(flag,meta14766){
return (new cljs.core.async.t_cljs$core$async14765(flag,meta14766));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14765(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14819 = (function (flag,cb,meta14820){
this.flag = flag;
this.cb = cb;
this.meta14820 = meta14820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14821,meta14820__$1){
var self__ = this;
var _14821__$1 = this;
return (new cljs.core.async.t_cljs$core$async14819(self__.flag,self__.cb,meta14820__$1));
}));

(cljs.core.async.t_cljs$core$async14819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14821){
var self__ = this;
var _14821__$1 = this;
return self__.meta14820;
}));

(cljs.core.async.t_cljs$core$async14819.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14820","meta14820",824252804,null)], null);
}));

(cljs.core.async.t_cljs$core$async14819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14819");

(cljs.core.async.t_cljs$core$async14819.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14819.
 */
cljs.core.async.__GT_t_cljs$core$async14819 = (function cljs$core$async$__GT_t_cljs$core$async14819(flag,cb,meta14820){
return (new cljs.core.async.t_cljs$core$async14819(flag,cb,meta14820));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14819(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14860_SHARP_){
var G__14884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14860_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14884) : fret.call(null,G__14884));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14861_SHARP_){
var G__14912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14861_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14912) : fret.call(null,G__14912));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17931 = (i + (1));
i = G__17931;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17932 = arguments.length;
var i__5727__auto___17933 = (0);
while(true){
if((i__5727__auto___17933 < len__5726__auto___17932)){
args__5732__auto__.push((arguments[i__5727__auto___17933]));

var G__17934 = (i__5727__auto___17933 + (1));
i__5727__auto___17933 = G__17934;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14940){
var map__14941 = p__14940;
var map__14941__$1 = cljs.core.__destructure_map(map__14941);
var opts = map__14941__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14935){
var G__14936 = cljs.core.first(seq14935);
var seq14935__$1 = cljs.core.next(seq14935);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14936,seq14935__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14962 = arguments.length;
switch (G__14962) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14388__auto___17943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15016){
var state_val_15017 = (state_15016[(1)]);
if((state_val_15017 === (7))){
var inst_15012 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15020_17944 = state_15016__$1;
(statearr_15020_17944[(2)] = inst_15012);

(statearr_15020_17944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (1))){
var state_15016__$1 = state_15016;
var statearr_15021_17945 = state_15016__$1;
(statearr_15021_17945[(2)] = null);

(statearr_15021_17945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (4))){
var inst_14982 = (state_15016[(7)]);
var inst_14982__$1 = (state_15016[(2)]);
var inst_14990 = (inst_14982__$1 == null);
var state_15016__$1 = (function (){var statearr_15026 = state_15016;
(statearr_15026[(7)] = inst_14982__$1);

return statearr_15026;
})();
if(cljs.core.truth_(inst_14990)){
var statearr_15027_17946 = state_15016__$1;
(statearr_15027_17946[(1)] = (5));

} else {
var statearr_15030_17947 = state_15016__$1;
(statearr_15030_17947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (13))){
var state_15016__$1 = state_15016;
var statearr_15032_17948 = state_15016__$1;
(statearr_15032_17948[(2)] = null);

(statearr_15032_17948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (6))){
var inst_14982 = (state_15016[(7)]);
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15016__$1,(11),to,inst_14982);
} else {
if((state_val_15017 === (3))){
var inst_15014 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15016__$1,inst_15014);
} else {
if((state_val_15017 === (12))){
var state_15016__$1 = state_15016;
var statearr_15053_17965 = state_15016__$1;
(statearr_15053_17965[(2)] = null);

(statearr_15053_17965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (2))){
var state_15016__$1 = state_15016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15016__$1,(4),from);
} else {
if((state_val_15017 === (11))){
var inst_15005 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
if(cljs.core.truth_(inst_15005)){
var statearr_15054_17966 = state_15016__$1;
(statearr_15054_17966[(1)] = (12));

} else {
var statearr_15055_17967 = state_15016__$1;
(statearr_15055_17967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (9))){
var state_15016__$1 = state_15016;
var statearr_15056_17968 = state_15016__$1;
(statearr_15056_17968[(2)] = null);

(statearr_15056_17968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (5))){
var state_15016__$1 = state_15016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15057_17969 = state_15016__$1;
(statearr_15057_17969[(1)] = (8));

} else {
var statearr_15058_17979 = state_15016__$1;
(statearr_15058_17979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (14))){
var inst_15010 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15059_17981 = state_15016__$1;
(statearr_15059_17981[(2)] = inst_15010);

(statearr_15059_17981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (10))){
var inst_15002 = (state_15016[(2)]);
var state_15016__$1 = state_15016;
var statearr_15060_17982 = state_15016__$1;
(statearr_15060_17982[(2)] = inst_15002);

(statearr_15060_17982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15017 === (8))){
var inst_14996 = cljs.core.async.close_BANG_(to);
var state_15016__$1 = state_15016;
var statearr_15061_17983 = state_15016__$1;
(statearr_15061_17983[(2)] = inst_14996);

(statearr_15061_17983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_15062 = [null,null,null,null,null,null,null,null];
(statearr_15062[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_15062[(1)] = (1));

return statearr_15062;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_15016){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15016);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15063){var ex__14088__auto__ = e15063;
var statearr_15064_17984 = state_15016;
(statearr_15064_17984[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15016[(4)]))){
var statearr_15065_17987 = state_15016;
(statearr_15065_17987[(1)] = cljs.core.first((state_15016[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17990 = state_15016;
state_15016 = G__17990;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_15016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_15016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15066 = f__14389__auto__();
(statearr_15066[(6)] = c__14388__auto___17943);

return statearr_15066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15079){
var vec__15080 = p__15079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15080,(1),null);
var job = vec__15080;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14388__auto___17999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15091){
var state_val_15092 = (state_15091[(1)]);
if((state_val_15092 === (1))){
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15091__$1,(2),res,v);
} else {
if((state_val_15092 === (2))){
var inst_15088 = (state_15091[(2)]);
var inst_15089 = cljs.core.async.close_BANG_(res);
var state_15091__$1 = (function (){var statearr_15099 = state_15091;
(statearr_15099[(7)] = inst_15088);

return statearr_15099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15091__$1,inst_15089);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0 = (function (){
var statearr_15115 = [null,null,null,null,null,null,null,null];
(statearr_15115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__);

(statearr_15115[(1)] = (1));

return statearr_15115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1 = (function (state_15091){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15091);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15119){var ex__14088__auto__ = e15119;
var statearr_15120_18006 = state_15091;
(statearr_15120_18006[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15091[(4)]))){
var statearr_15121_18007 = state_15091;
(statearr_15121_18007[(1)] = cljs.core.first((state_15091[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18010 = state_15091;
state_15091 = G__18010;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = function(state_15091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1.call(this,state_15091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15122 = f__14389__auto__();
(statearr_15122[(6)] = c__14388__auto___17999);

return statearr_15122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15123){
var vec__15124 = p__15123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15124,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15124,(1),null);
var job = vec__15124;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18023 = n;
var __18024 = (0);
while(true){
if((__18024 < n__5593__auto___18023)){
var G__15127_18025 = type;
var G__15127_18026__$1 = (((G__15127_18025 instanceof cljs.core.Keyword))?G__15127_18025.fqn:null);
switch (G__15127_18026__$1) {
case "compute":
var c__14388__auto___18030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18024,c__14388__auto___18030,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async){
return (function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = ((function (__18024,c__14388__auto___18030,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async){
return (function (state_15160){
var state_val_15161 = (state_15160[(1)]);
if((state_val_15161 === (1))){
var state_15160__$1 = state_15160;
var statearr_15163_18035 = state_15160__$1;
(statearr_15163_18035[(2)] = null);

(statearr_15163_18035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (2))){
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15160__$1,(4),jobs);
} else {
if((state_val_15161 === (3))){
var inst_15158 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15160__$1,inst_15158);
} else {
if((state_val_15161 === (4))){
var inst_15142 = (state_15160[(2)]);
var inst_15147 = process__$1(inst_15142);
var state_15160__$1 = state_15160;
if(cljs.core.truth_(inst_15147)){
var statearr_15164_18042 = state_15160__$1;
(statearr_15164_18042[(1)] = (5));

} else {
var statearr_15165_18043 = state_15160__$1;
(statearr_15165_18043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (5))){
var state_15160__$1 = state_15160;
var statearr_15166_18045 = state_15160__$1;
(statearr_15166_18045[(2)] = null);

(statearr_15166_18045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (6))){
var state_15160__$1 = state_15160;
var statearr_15167_18046 = state_15160__$1;
(statearr_15167_18046[(2)] = null);

(statearr_15167_18046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15161 === (7))){
var inst_15156 = (state_15160[(2)]);
var state_15160__$1 = state_15160;
var statearr_15168_18048 = state_15160__$1;
(statearr_15168_18048[(2)] = inst_15156);

(statearr_15168_18048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18024,c__14388__auto___18030,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async))
;
return ((function (__18024,switch__14084__auto__,c__14388__auto___18030,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0 = (function (){
var statearr_15169 = [null,null,null,null,null,null,null];
(statearr_15169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__);

(statearr_15169[(1)] = (1));

return statearr_15169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1 = (function (state_15160){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15160);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15170){var ex__14088__auto__ = e15170;
var statearr_15171_18050 = state_15160;
(statearr_15171_18050[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15160[(4)]))){
var statearr_15172_18051 = state_15160;
(statearr_15172_18051[(1)] = cljs.core.first((state_15160[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18052 = state_15160;
state_15160 = G__18052;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = function(state_15160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1.call(this,state_15160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__;
})()
;})(__18024,switch__14084__auto__,c__14388__auto___18030,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async))
})();
var state__14390__auto__ = (function (){var statearr_15173 = f__14389__auto__();
(statearr_15173[(6)] = c__14388__auto___18030);

return statearr_15173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
});})(__18024,c__14388__auto___18030,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async))
);


break;
case "async":
var c__14388__auto___18058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18024,c__14388__auto___18058,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async){
return (function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = ((function (__18024,c__14388__auto___18058,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async){
return (function (state_15188){
var state_val_15189 = (state_15188[(1)]);
if((state_val_15189 === (1))){
var state_15188__$1 = state_15188;
var statearr_15190_18065 = state_15188__$1;
(statearr_15190_18065[(2)] = null);

(statearr_15190_18065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (2))){
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15188__$1,(4),jobs);
} else {
if((state_val_15189 === (3))){
var inst_15186 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15188__$1,inst_15186);
} else {
if((state_val_15189 === (4))){
var inst_15177 = (state_15188[(2)]);
var inst_15179 = async(inst_15177);
var state_15188__$1 = state_15188;
if(cljs.core.truth_(inst_15179)){
var statearr_15191_18081 = state_15188__$1;
(statearr_15191_18081[(1)] = (5));

} else {
var statearr_15192_18082 = state_15188__$1;
(statearr_15192_18082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (5))){
var state_15188__$1 = state_15188;
var statearr_15193_18083 = state_15188__$1;
(statearr_15193_18083[(2)] = null);

(statearr_15193_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (6))){
var state_15188__$1 = state_15188;
var statearr_15194_18086 = state_15188__$1;
(statearr_15194_18086[(2)] = null);

(statearr_15194_18086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15189 === (7))){
var inst_15184 = (state_15188[(2)]);
var state_15188__$1 = state_15188;
var statearr_15196_18090 = state_15188__$1;
(statearr_15196_18090[(2)] = inst_15184);

(statearr_15196_18090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18024,c__14388__auto___18058,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async))
;
return ((function (__18024,switch__14084__auto__,c__14388__auto___18058,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0 = (function (){
var statearr_15197 = [null,null,null,null,null,null,null];
(statearr_15197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__);

(statearr_15197[(1)] = (1));

return statearr_15197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1 = (function (state_15188){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15188);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15198){var ex__14088__auto__ = e15198;
var statearr_15199_18095 = state_15188;
(statearr_15199_18095[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15188[(4)]))){
var statearr_15200_18096 = state_15188;
(statearr_15200_18096[(1)] = cljs.core.first((state_15188[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18097 = state_15188;
state_15188 = G__18097;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = function(state_15188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1.call(this,state_15188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__;
})()
;})(__18024,switch__14084__auto__,c__14388__auto___18058,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async))
})();
var state__14390__auto__ = (function (){var statearr_15201 = f__14389__auto__();
(statearr_15201[(6)] = c__14388__auto___18058);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
});})(__18024,c__14388__auto___18058,G__15127_18025,G__15127_18026__$1,n__5593__auto___18023,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15127_18026__$1)].join('')));

}

var G__18099 = (__18024 + (1));
__18024 = G__18099;
continue;
} else {
}
break;
}

var c__14388__auto___18100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15223){
var state_val_15224 = (state_15223[(1)]);
if((state_val_15224 === (7))){
var inst_15219 = (state_15223[(2)]);
var state_15223__$1 = state_15223;
var statearr_15228_18101 = state_15223__$1;
(statearr_15228_18101[(2)] = inst_15219);

(statearr_15228_18101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15224 === (1))){
var state_15223__$1 = state_15223;
var statearr_15229_18103 = state_15223__$1;
(statearr_15229_18103[(2)] = null);

(statearr_15229_18103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15224 === (4))){
var inst_15204 = (state_15223[(7)]);
var inst_15204__$1 = (state_15223[(2)]);
var inst_15205 = (inst_15204__$1 == null);
var state_15223__$1 = (function (){var statearr_15231 = state_15223;
(statearr_15231[(7)] = inst_15204__$1);

return statearr_15231;
})();
if(cljs.core.truth_(inst_15205)){
var statearr_15232_18104 = state_15223__$1;
(statearr_15232_18104[(1)] = (5));

} else {
var statearr_15233_18105 = state_15223__$1;
(statearr_15233_18105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15224 === (6))){
var inst_15209 = (state_15223[(8)]);
var inst_15204 = (state_15223[(7)]);
var inst_15209__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15211 = [inst_15204,inst_15209__$1];
var inst_15212 = (new cljs.core.PersistentVector(null,2,(5),inst_15210,inst_15211,null));
var state_15223__$1 = (function (){var statearr_15234 = state_15223;
(statearr_15234[(8)] = inst_15209__$1);

return statearr_15234;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15223__$1,(8),jobs,inst_15212);
} else {
if((state_val_15224 === (3))){
var inst_15221 = (state_15223[(2)]);
var state_15223__$1 = state_15223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15223__$1,inst_15221);
} else {
if((state_val_15224 === (2))){
var state_15223__$1 = state_15223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15223__$1,(4),from);
} else {
if((state_val_15224 === (9))){
var inst_15216 = (state_15223[(2)]);
var state_15223__$1 = (function (){var statearr_15235 = state_15223;
(statearr_15235[(9)] = inst_15216);

return statearr_15235;
})();
var statearr_15236_18120 = state_15223__$1;
(statearr_15236_18120[(2)] = null);

(statearr_15236_18120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15224 === (5))){
var inst_15207 = cljs.core.async.close_BANG_(jobs);
var state_15223__$1 = state_15223;
var statearr_15238_18124 = state_15223__$1;
(statearr_15238_18124[(2)] = inst_15207);

(statearr_15238_18124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15224 === (8))){
var inst_15209 = (state_15223[(8)]);
var inst_15214 = (state_15223[(2)]);
var state_15223__$1 = (function (){var statearr_15239 = state_15223;
(statearr_15239[(10)] = inst_15214);

return statearr_15239;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15223__$1,(9),results,inst_15209);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0 = (function (){
var statearr_15240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__);

(statearr_15240[(1)] = (1));

return statearr_15240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1 = (function (state_15223){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15223);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15242){var ex__14088__auto__ = e15242;
var statearr_15243_18145 = state_15223;
(statearr_15243_18145[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15223[(4)]))){
var statearr_15244_18146 = state_15223;
(statearr_15244_18146[(1)] = cljs.core.first((state_15223[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18147 = state_15223;
state_15223 = G__18147;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = function(state_15223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1.call(this,state_15223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15245 = f__14389__auto__();
(statearr_15245[(6)] = c__14388__auto___18100);

return statearr_15245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


var c__14388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15318){
var state_val_15319 = (state_15318[(1)]);
if((state_val_15319 === (7))){
var inst_15314 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
var statearr_15320_18151 = state_15318__$1;
(statearr_15320_18151[(2)] = inst_15314);

(statearr_15320_18151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (20))){
var state_15318__$1 = state_15318;
var statearr_15322_18152 = state_15318__$1;
(statearr_15322_18152[(2)] = null);

(statearr_15322_18152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (1))){
var state_15318__$1 = state_15318;
var statearr_15323_18153 = state_15318__$1;
(statearr_15323_18153[(2)] = null);

(statearr_15323_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (4))){
var inst_15250 = (state_15318[(7)]);
var inst_15250__$1 = (state_15318[(2)]);
var inst_15251 = (inst_15250__$1 == null);
var state_15318__$1 = (function (){var statearr_15327 = state_15318;
(statearr_15327[(7)] = inst_15250__$1);

return statearr_15327;
})();
if(cljs.core.truth_(inst_15251)){
var statearr_15328_18154 = state_15318__$1;
(statearr_15328_18154[(1)] = (5));

} else {
var statearr_15329_18156 = state_15318__$1;
(statearr_15329_18156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (15))){
var inst_15267 = (state_15318[(8)]);
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15318__$1,(18),to,inst_15267);
} else {
if((state_val_15319 === (21))){
var inst_15309 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
var statearr_15330_18157 = state_15318__$1;
(statearr_15330_18157[(2)] = inst_15309);

(statearr_15330_18157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (13))){
var inst_15311 = (state_15318[(2)]);
var state_15318__$1 = (function (){var statearr_15331 = state_15318;
(statearr_15331[(9)] = inst_15311);

return statearr_15331;
})();
var statearr_15332_18158 = state_15318__$1;
(statearr_15332_18158[(2)] = null);

(statearr_15332_18158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (6))){
var inst_15250 = (state_15318[(7)]);
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15318__$1,(11),inst_15250);
} else {
if((state_val_15319 === (17))){
var inst_15304 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
if(cljs.core.truth_(inst_15304)){
var statearr_15333_18163 = state_15318__$1;
(statearr_15333_18163[(1)] = (19));

} else {
var statearr_15334_18164 = state_15318__$1;
(statearr_15334_18164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (3))){
var inst_15316 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15318__$1,inst_15316);
} else {
if((state_val_15319 === (12))){
var inst_15263 = (state_15318[(10)]);
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15318__$1,(14),inst_15263);
} else {
if((state_val_15319 === (2))){
var state_15318__$1 = state_15318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15318__$1,(4),results);
} else {
if((state_val_15319 === (19))){
var state_15318__$1 = state_15318;
var statearr_15335_18170 = state_15318__$1;
(statearr_15335_18170[(2)] = null);

(statearr_15335_18170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (11))){
var inst_15263 = (state_15318[(2)]);
var state_15318__$1 = (function (){var statearr_15336 = state_15318;
(statearr_15336[(10)] = inst_15263);

return statearr_15336;
})();
var statearr_15341_18171 = state_15318__$1;
(statearr_15341_18171[(2)] = null);

(statearr_15341_18171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (9))){
var state_15318__$1 = state_15318;
var statearr_15342_18172 = state_15318__$1;
(statearr_15342_18172[(2)] = null);

(statearr_15342_18172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (5))){
var state_15318__$1 = state_15318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15343_18174 = state_15318__$1;
(statearr_15343_18174[(1)] = (8));

} else {
var statearr_15345_18175 = state_15318__$1;
(statearr_15345_18175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (14))){
var inst_15267 = (state_15318[(8)]);
var inst_15270 = (state_15318[(11)]);
var inst_15267__$1 = (state_15318[(2)]);
var inst_15269 = (inst_15267__$1 == null);
var inst_15270__$1 = cljs.core.not(inst_15269);
var state_15318__$1 = (function (){var statearr_15348 = state_15318;
(statearr_15348[(8)] = inst_15267__$1);

(statearr_15348[(11)] = inst_15270__$1);

return statearr_15348;
})();
if(inst_15270__$1){
var statearr_15349_18178 = state_15318__$1;
(statearr_15349_18178[(1)] = (15));

} else {
var statearr_15350_18179 = state_15318__$1;
(statearr_15350_18179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (16))){
var inst_15270 = (state_15318[(11)]);
var state_15318__$1 = state_15318;
var statearr_15351_18180 = state_15318__$1;
(statearr_15351_18180[(2)] = inst_15270);

(statearr_15351_18180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (10))){
var inst_15258 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
var statearr_15352_18183 = state_15318__$1;
(statearr_15352_18183[(2)] = inst_15258);

(statearr_15352_18183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (18))){
var inst_15301 = (state_15318[(2)]);
var state_15318__$1 = state_15318;
var statearr_15357_18190 = state_15318__$1;
(statearr_15357_18190[(2)] = inst_15301);

(statearr_15357_18190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15319 === (8))){
var inst_15254 = cljs.core.async.close_BANG_(to);
var state_15318__$1 = state_15318;
var statearr_15358_18191 = state_15318__$1;
(statearr_15358_18191[(2)] = inst_15254);

(statearr_15358_18191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0 = (function (){
var statearr_15359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__);

(statearr_15359[(1)] = (1));

return statearr_15359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1 = (function (state_15318){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15318);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15361){var ex__14088__auto__ = e15361;
var statearr_15364_18195 = state_15318;
(statearr_15364_18195[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15318[(4)]))){
var statearr_15365_18196 = state_15318;
(statearr_15365_18196[(1)] = cljs.core.first((state_15318[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18197 = state_15318;
state_15318 = G__18197;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__ = function(state_15318){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1.call(this,state_15318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14085__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15369 = f__14389__auto__();
(statearr_15369[(6)] = c__14388__auto__);

return statearr_15369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));

return c__14388__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15376 = arguments.length;
switch (G__15376) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15404 = arguments.length;
switch (G__15404) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15414 = arguments.length;
switch (G__15414) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14388__auto___18214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15442){
var state_val_15443 = (state_15442[(1)]);
if((state_val_15443 === (7))){
var inst_15438 = (state_15442[(2)]);
var state_15442__$1 = state_15442;
var statearr_15445_18222 = state_15442__$1;
(statearr_15445_18222[(2)] = inst_15438);

(statearr_15445_18222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (1))){
var state_15442__$1 = state_15442;
var statearr_15447_18223 = state_15442__$1;
(statearr_15447_18223[(2)] = null);

(statearr_15447_18223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (4))){
var inst_15418 = (state_15442[(7)]);
var inst_15418__$1 = (state_15442[(2)]);
var inst_15419 = (inst_15418__$1 == null);
var state_15442__$1 = (function (){var statearr_15451 = state_15442;
(statearr_15451[(7)] = inst_15418__$1);

return statearr_15451;
})();
if(cljs.core.truth_(inst_15419)){
var statearr_15452_18224 = state_15442__$1;
(statearr_15452_18224[(1)] = (5));

} else {
var statearr_15453_18225 = state_15442__$1;
(statearr_15453_18225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (13))){
var state_15442__$1 = state_15442;
var statearr_15454_18226 = state_15442__$1;
(statearr_15454_18226[(2)] = null);

(statearr_15454_18226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (6))){
var inst_15418 = (state_15442[(7)]);
var inst_15424 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15418) : p.call(null,inst_15418));
var state_15442__$1 = state_15442;
if(cljs.core.truth_(inst_15424)){
var statearr_15455_18233 = state_15442__$1;
(statearr_15455_18233[(1)] = (9));

} else {
var statearr_15456_18234 = state_15442__$1;
(statearr_15456_18234[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (3))){
var inst_15440 = (state_15442[(2)]);
var state_15442__$1 = state_15442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15442__$1,inst_15440);
} else {
if((state_val_15443 === (12))){
var state_15442__$1 = state_15442;
var statearr_15457_18238 = state_15442__$1;
(statearr_15457_18238[(2)] = null);

(statearr_15457_18238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (2))){
var state_15442__$1 = state_15442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15442__$1,(4),ch);
} else {
if((state_val_15443 === (11))){
var inst_15418 = (state_15442[(7)]);
var inst_15429 = (state_15442[(2)]);
var state_15442__$1 = state_15442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15442__$1,(8),inst_15429,inst_15418);
} else {
if((state_val_15443 === (9))){
var state_15442__$1 = state_15442;
var statearr_15459_18239 = state_15442__$1;
(statearr_15459_18239[(2)] = tc);

(statearr_15459_18239[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (5))){
var inst_15421 = cljs.core.async.close_BANG_(tc);
var inst_15422 = cljs.core.async.close_BANG_(fc);
var state_15442__$1 = (function (){var statearr_15460 = state_15442;
(statearr_15460[(8)] = inst_15421);

return statearr_15460;
})();
var statearr_15461_18240 = state_15442__$1;
(statearr_15461_18240[(2)] = inst_15422);

(statearr_15461_18240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (14))){
var inst_15436 = (state_15442[(2)]);
var state_15442__$1 = state_15442;
var statearr_15465_18242 = state_15442__$1;
(statearr_15465_18242[(2)] = inst_15436);

(statearr_15465_18242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (10))){
var state_15442__$1 = state_15442;
var statearr_15466_18243 = state_15442__$1;
(statearr_15466_18243[(2)] = fc);

(statearr_15466_18243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15443 === (8))){
var inst_15431 = (state_15442[(2)]);
var state_15442__$1 = state_15442;
if(cljs.core.truth_(inst_15431)){
var statearr_15467_18244 = state_15442__$1;
(statearr_15467_18244[(1)] = (12));

} else {
var statearr_15468_18245 = state_15442__$1;
(statearr_15468_18245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_15471 = [null,null,null,null,null,null,null,null,null];
(statearr_15471[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_15471[(1)] = (1));

return statearr_15471;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_15442){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15442);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15472){var ex__14088__auto__ = e15472;
var statearr_15473_18251 = state_15442;
(statearr_15473_18251[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15442[(4)]))){
var statearr_15474_18252 = state_15442;
(statearr_15474_18252[(1)] = cljs.core.first((state_15442[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18255 = state_15442;
state_15442 = G__18255;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_15442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_15442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15478 = f__14389__auto__();
(statearr_15478[(6)] = c__14388__auto___18214);

return statearr_15478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15514){
var state_val_15515 = (state_15514[(1)]);
if((state_val_15515 === (7))){
var inst_15510 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
var statearr_15532_18257 = state_15514__$1;
(statearr_15532_18257[(2)] = inst_15510);

(statearr_15532_18257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (1))){
var inst_15490 = init;
var inst_15491 = inst_15490;
var state_15514__$1 = (function (){var statearr_15545 = state_15514;
(statearr_15545[(7)] = inst_15491);

return statearr_15545;
})();
var statearr_15546_18262 = state_15514__$1;
(statearr_15546_18262[(2)] = null);

(statearr_15546_18262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (4))){
var inst_15495 = (state_15514[(8)]);
var inst_15495__$1 = (state_15514[(2)]);
var inst_15496 = (inst_15495__$1 == null);
var state_15514__$1 = (function (){var statearr_15547 = state_15514;
(statearr_15547[(8)] = inst_15495__$1);

return statearr_15547;
})();
if(cljs.core.truth_(inst_15496)){
var statearr_15549_18263 = state_15514__$1;
(statearr_15549_18263[(1)] = (5));

} else {
var statearr_15550_18264 = state_15514__$1;
(statearr_15550_18264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (6))){
var inst_15499 = (state_15514[(9)]);
var inst_15491 = (state_15514[(7)]);
var inst_15495 = (state_15514[(8)]);
var inst_15499__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15491,inst_15495) : f.call(null,inst_15491,inst_15495));
var inst_15501 = cljs.core.reduced_QMARK_(inst_15499__$1);
var state_15514__$1 = (function (){var statearr_15558 = state_15514;
(statearr_15558[(9)] = inst_15499__$1);

return statearr_15558;
})();
if(inst_15501){
var statearr_15559_18265 = state_15514__$1;
(statearr_15559_18265[(1)] = (8));

} else {
var statearr_15560_18266 = state_15514__$1;
(statearr_15560_18266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (3))){
var inst_15512 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15514__$1,inst_15512);
} else {
if((state_val_15515 === (2))){
var state_15514__$1 = state_15514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15514__$1,(4),ch);
} else {
if((state_val_15515 === (9))){
var inst_15499 = (state_15514[(9)]);
var inst_15491 = inst_15499;
var state_15514__$1 = (function (){var statearr_15561 = state_15514;
(statearr_15561[(7)] = inst_15491);

return statearr_15561;
})();
var statearr_15562_18268 = state_15514__$1;
(statearr_15562_18268[(2)] = null);

(statearr_15562_18268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (5))){
var inst_15491 = (state_15514[(7)]);
var state_15514__$1 = state_15514;
var statearr_15564_18270 = state_15514__$1;
(statearr_15564_18270[(2)] = inst_15491);

(statearr_15564_18270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (10))){
var inst_15508 = (state_15514[(2)]);
var state_15514__$1 = state_15514;
var statearr_15565_18271 = state_15514__$1;
(statearr_15565_18271[(2)] = inst_15508);

(statearr_15565_18271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15515 === (8))){
var inst_15499 = (state_15514[(9)]);
var inst_15503 = cljs.core.deref(inst_15499);
var state_15514__$1 = state_15514;
var statearr_15567_18277 = state_15514__$1;
(statearr_15567_18277[(2)] = inst_15503);

(statearr_15567_18277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14085__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14085__auto____0 = (function (){
var statearr_15575 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15575[(0)] = cljs$core$async$reduce_$_state_machine__14085__auto__);

(statearr_15575[(1)] = (1));

return statearr_15575;
});
var cljs$core$async$reduce_$_state_machine__14085__auto____1 = (function (state_15514){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15514);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15577){var ex__14088__auto__ = e15577;
var statearr_15578_18283 = state_15514;
(statearr_15578_18283[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15514[(4)]))){
var statearr_15579_18284 = state_15514;
(statearr_15579_18284[(1)] = cljs.core.first((state_15514[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18285 = state_15514;
state_15514 = G__18285;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14085__auto__ = function(state_15514){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14085__auto____1.call(this,state_15514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14085__auto____0;
cljs$core$async$reduce_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14085__auto____1;
return cljs$core$async$reduce_$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15580 = f__14389__auto__();
(statearr_15580[(6)] = c__14388__auto__);

return statearr_15580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));

return c__14388__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15587){
var state_val_15588 = (state_15587[(1)]);
if((state_val_15588 === (1))){
var inst_15582 = cljs.core.async.reduce(f__$1,init,ch);
var state_15587__$1 = state_15587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15587__$1,(2),inst_15582);
} else {
if((state_val_15588 === (2))){
var inst_15584 = (state_15587[(2)]);
var inst_15585 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15584) : f__$1.call(null,inst_15584));
var state_15587__$1 = state_15587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15587__$1,inst_15585);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14085__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14085__auto____0 = (function (){
var statearr_15594 = [null,null,null,null,null,null,null];
(statearr_15594[(0)] = cljs$core$async$transduce_$_state_machine__14085__auto__);

(statearr_15594[(1)] = (1));

return statearr_15594;
});
var cljs$core$async$transduce_$_state_machine__14085__auto____1 = (function (state_15587){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15587);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15595){var ex__14088__auto__ = e15595;
var statearr_15596_18291 = state_15587;
(statearr_15596_18291[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15587[(4)]))){
var statearr_15597_18292 = state_15587;
(statearr_15597_18292[(1)] = cljs.core.first((state_15587[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18293 = state_15587;
state_15587 = G__18293;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14085__auto__ = function(state_15587){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14085__auto____1.call(this,state_15587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14085__auto____0;
cljs$core$async$transduce_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14085__auto____1;
return cljs$core$async$transduce_$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15598 = f__14389__auto__();
(statearr_15598[(6)] = c__14388__auto__);

return statearr_15598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));

return c__14388__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15600 = arguments.length;
switch (G__15600) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15631){
var state_val_15632 = (state_15631[(1)]);
if((state_val_15632 === (7))){
var inst_15612 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
var statearr_15638_18297 = state_15631__$1;
(statearr_15638_18297[(2)] = inst_15612);

(statearr_15638_18297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (1))){
var inst_15606 = cljs.core.seq(coll);
var inst_15607 = inst_15606;
var state_15631__$1 = (function (){var statearr_15640 = state_15631;
(statearr_15640[(7)] = inst_15607);

return statearr_15640;
})();
var statearr_15641_18307 = state_15631__$1;
(statearr_15641_18307[(2)] = null);

(statearr_15641_18307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (4))){
var inst_15607 = (state_15631[(7)]);
var inst_15610 = cljs.core.first(inst_15607);
var state_15631__$1 = state_15631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15631__$1,(7),ch,inst_15610);
} else {
if((state_val_15632 === (13))){
var inst_15624 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
var statearr_15643_18312 = state_15631__$1;
(statearr_15643_18312[(2)] = inst_15624);

(statearr_15643_18312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (6))){
var inst_15615 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
if(cljs.core.truth_(inst_15615)){
var statearr_15646_18313 = state_15631__$1;
(statearr_15646_18313[(1)] = (8));

} else {
var statearr_15647_18314 = state_15631__$1;
(statearr_15647_18314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (3))){
var inst_15628 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15631__$1,inst_15628);
} else {
if((state_val_15632 === (12))){
var state_15631__$1 = state_15631;
var statearr_15648_18315 = state_15631__$1;
(statearr_15648_18315[(2)] = null);

(statearr_15648_18315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (2))){
var inst_15607 = (state_15631[(7)]);
var state_15631__$1 = state_15631;
if(cljs.core.truth_(inst_15607)){
var statearr_15649_18316 = state_15631__$1;
(statearr_15649_18316[(1)] = (4));

} else {
var statearr_15650_18317 = state_15631__$1;
(statearr_15650_18317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (11))){
var inst_15621 = cljs.core.async.close_BANG_(ch);
var state_15631__$1 = state_15631;
var statearr_15651_18318 = state_15631__$1;
(statearr_15651_18318[(2)] = inst_15621);

(statearr_15651_18318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (9))){
var state_15631__$1 = state_15631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15653_18320 = state_15631__$1;
(statearr_15653_18320[(1)] = (11));

} else {
var statearr_15656_18324 = state_15631__$1;
(statearr_15656_18324[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (5))){
var inst_15607 = (state_15631[(7)]);
var state_15631__$1 = state_15631;
var statearr_15659_18325 = state_15631__$1;
(statearr_15659_18325[(2)] = inst_15607);

(statearr_15659_18325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (10))){
var inst_15626 = (state_15631[(2)]);
var state_15631__$1 = state_15631;
var statearr_15661_18326 = state_15631__$1;
(statearr_15661_18326[(2)] = inst_15626);

(statearr_15661_18326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15632 === (8))){
var inst_15607 = (state_15631[(7)]);
var inst_15617 = cljs.core.next(inst_15607);
var inst_15607__$1 = inst_15617;
var state_15631__$1 = (function (){var statearr_15662 = state_15631;
(statearr_15662[(7)] = inst_15607__$1);

return statearr_15662;
})();
var statearr_15663_18327 = state_15631__$1;
(statearr_15663_18327[(2)] = null);

(statearr_15663_18327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_15665 = [null,null,null,null,null,null,null,null];
(statearr_15665[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_15665[(1)] = (1));

return statearr_15665;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_15631){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15631);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e15666){var ex__14088__auto__ = e15666;
var statearr_15667_18332 = state_15631;
(statearr_15667_18332[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15631[(4)]))){
var statearr_15668_18333 = state_15631;
(statearr_15668_18333[(1)] = cljs.core.first((state_15631[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18335 = state_15631;
state_15631 = G__18335;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_15631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_15631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_15669 = f__14389__auto__();
(statearr_15669[(6)] = c__14388__auto__);

return statearr_15669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));

return c__14388__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15675 = arguments.length;
switch (G__15675) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18340 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18340(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18341 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18341(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18349 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18349(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18353 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18353(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15700 = (function (ch,cs,meta15701){
this.ch = ch;
this.cs = cs;
this.meta15701 = meta15701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15702,meta15701__$1){
var self__ = this;
var _15702__$1 = this;
return (new cljs.core.async.t_cljs$core$async15700(self__.ch,self__.cs,meta15701__$1));
}));

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15702){
var self__ = this;
var _15702__$1 = this;
return self__.meta15701;
}));

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15700.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15701","meta15701",-1620054352,null)], null);
}));

(cljs.core.async.t_cljs$core$async15700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15700");

(cljs.core.async.t_cljs$core$async15700.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15700.
 */
cljs.core.async.__GT_t_cljs$core$async15700 = (function cljs$core$async$__GT_t_cljs$core$async15700(ch,cs,meta15701){
return (new cljs.core.async.t_cljs$core$async15700(ch,cs,meta15701));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15700(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14388__auto___18357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_15885){
var state_val_15886 = (state_15885[(1)]);
if((state_val_15886 === (7))){
var inst_15881 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_15892_18361 = state_15885__$1;
(statearr_15892_18361[(2)] = inst_15881);

(statearr_15892_18361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (20))){
var inst_15764 = (state_15885[(7)]);
var inst_15778 = cljs.core.first(inst_15764);
var inst_15779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15778,(0),null);
var inst_15781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15778,(1),null);
var state_15885__$1 = (function (){var statearr_15893 = state_15885;
(statearr_15893[(8)] = inst_15779);

return statearr_15893;
})();
if(cljs.core.truth_(inst_15781)){
var statearr_15894_18362 = state_15885__$1;
(statearr_15894_18362[(1)] = (22));

} else {
var statearr_15895_18363 = state_15885__$1;
(statearr_15895_18363[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (27))){
var inst_15725 = (state_15885[(9)]);
var inst_15813 = (state_15885[(10)]);
var inst_15821 = (state_15885[(11)]);
var inst_15815 = (state_15885[(12)]);
var inst_15821__$1 = cljs.core._nth(inst_15813,inst_15815);
var inst_15823 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15821__$1,inst_15725,done);
var state_15885__$1 = (function (){var statearr_15896 = state_15885;
(statearr_15896[(11)] = inst_15821__$1);

return statearr_15896;
})();
if(cljs.core.truth_(inst_15823)){
var statearr_15898_18364 = state_15885__$1;
(statearr_15898_18364[(1)] = (30));

} else {
var statearr_15899_18365 = state_15885__$1;
(statearr_15899_18365[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (1))){
var state_15885__$1 = state_15885;
var statearr_15923_18366 = state_15885__$1;
(statearr_15923_18366[(2)] = null);

(statearr_15923_18366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (24))){
var inst_15764 = (state_15885[(7)]);
var inst_15786 = (state_15885[(2)]);
var inst_15788 = cljs.core.next(inst_15764);
var inst_15735 = inst_15788;
var inst_15736 = null;
var inst_15737 = (0);
var inst_15738 = (0);
var state_15885__$1 = (function (){var statearr_15935 = state_15885;
(statearr_15935[(13)] = inst_15736);

(statearr_15935[(14)] = inst_15786);

(statearr_15935[(15)] = inst_15735);

(statearr_15935[(16)] = inst_15737);

(statearr_15935[(17)] = inst_15738);

return statearr_15935;
})();
var statearr_15936_18372 = state_15885__$1;
(statearr_15936_18372[(2)] = null);

(statearr_15936_18372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (39))){
var state_15885__$1 = state_15885;
var statearr_15941_18373 = state_15885__$1;
(statearr_15941_18373[(2)] = null);

(statearr_15941_18373[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (4))){
var inst_15725 = (state_15885[(9)]);
var inst_15725__$1 = (state_15885[(2)]);
var inst_15727 = (inst_15725__$1 == null);
var state_15885__$1 = (function (){var statearr_15943 = state_15885;
(statearr_15943[(9)] = inst_15725__$1);

return statearr_15943;
})();
if(cljs.core.truth_(inst_15727)){
var statearr_15944_18376 = state_15885__$1;
(statearr_15944_18376[(1)] = (5));

} else {
var statearr_15945_18377 = state_15885__$1;
(statearr_15945_18377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (15))){
var inst_15736 = (state_15885[(13)]);
var inst_15735 = (state_15885[(15)]);
var inst_15737 = (state_15885[(16)]);
var inst_15738 = (state_15885[(17)]);
var inst_15757 = (state_15885[(2)]);
var inst_15759 = (inst_15738 + (1));
var tmp15938 = inst_15736;
var tmp15939 = inst_15735;
var tmp15940 = inst_15737;
var inst_15735__$1 = tmp15939;
var inst_15736__$1 = tmp15938;
var inst_15737__$1 = tmp15940;
var inst_15738__$1 = inst_15759;
var state_15885__$1 = (function (){var statearr_15946 = state_15885;
(statearr_15946[(13)] = inst_15736__$1);

(statearr_15946[(15)] = inst_15735__$1);

(statearr_15946[(18)] = inst_15757);

(statearr_15946[(16)] = inst_15737__$1);

(statearr_15946[(17)] = inst_15738__$1);

return statearr_15946;
})();
var statearr_15948_18380 = state_15885__$1;
(statearr_15948_18380[(2)] = null);

(statearr_15948_18380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (21))){
var inst_15791 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_15953_18381 = state_15885__$1;
(statearr_15953_18381[(2)] = inst_15791);

(statearr_15953_18381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (31))){
var inst_15821 = (state_15885[(11)]);
var inst_15826 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15821);
var state_15885__$1 = state_15885;
var statearr_15956_18382 = state_15885__$1;
(statearr_15956_18382[(2)] = inst_15826);

(statearr_15956_18382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (32))){
var inst_15814 = (state_15885[(19)]);
var inst_15813 = (state_15885[(10)]);
var inst_15815 = (state_15885[(12)]);
var inst_15812 = (state_15885[(20)]);
var inst_15828 = (state_15885[(2)]);
var inst_15829 = (inst_15815 + (1));
var tmp15949 = inst_15814;
var tmp15950 = inst_15813;
var tmp15951 = inst_15812;
var inst_15812__$1 = tmp15951;
var inst_15813__$1 = tmp15950;
var inst_15814__$1 = tmp15949;
var inst_15815__$1 = inst_15829;
var state_15885__$1 = (function (){var statearr_15962 = state_15885;
(statearr_15962[(21)] = inst_15828);

(statearr_15962[(19)] = inst_15814__$1);

(statearr_15962[(10)] = inst_15813__$1);

(statearr_15962[(12)] = inst_15815__$1);

(statearr_15962[(20)] = inst_15812__$1);

return statearr_15962;
})();
var statearr_15963_18383 = state_15885__$1;
(statearr_15963_18383[(2)] = null);

(statearr_15963_18383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (40))){
var inst_15845 = (state_15885[(22)]);
var inst_15850 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15845);
var state_15885__$1 = state_15885;
var statearr_15964_18384 = state_15885__$1;
(statearr_15964_18384[(2)] = inst_15850);

(statearr_15964_18384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (33))){
var inst_15835 = (state_15885[(23)]);
var inst_15837 = cljs.core.chunked_seq_QMARK_(inst_15835);
var state_15885__$1 = state_15885;
if(inst_15837){
var statearr_15966_18389 = state_15885__$1;
(statearr_15966_18389[(1)] = (36));

} else {
var statearr_15967_18390 = state_15885__$1;
(statearr_15967_18390[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (13))){
var inst_15750 = (state_15885[(24)]);
var inst_15754 = cljs.core.async.close_BANG_(inst_15750);
var state_15885__$1 = state_15885;
var statearr_15971_18394 = state_15885__$1;
(statearr_15971_18394[(2)] = inst_15754);

(statearr_15971_18394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (22))){
var inst_15779 = (state_15885[(8)]);
var inst_15783 = cljs.core.async.close_BANG_(inst_15779);
var state_15885__$1 = state_15885;
var statearr_15972_18395 = state_15885__$1;
(statearr_15972_18395[(2)] = inst_15783);

(statearr_15972_18395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (36))){
var inst_15835 = (state_15885[(23)]);
var inst_15840 = cljs.core.chunk_first(inst_15835);
var inst_15841 = cljs.core.chunk_rest(inst_15835);
var inst_15842 = cljs.core.count(inst_15840);
var inst_15812 = inst_15841;
var inst_15813 = inst_15840;
var inst_15814 = inst_15842;
var inst_15815 = (0);
var state_15885__$1 = (function (){var statearr_15973 = state_15885;
(statearr_15973[(19)] = inst_15814);

(statearr_15973[(10)] = inst_15813);

(statearr_15973[(12)] = inst_15815);

(statearr_15973[(20)] = inst_15812);

return statearr_15973;
})();
var statearr_15976_18396 = state_15885__$1;
(statearr_15976_18396[(2)] = null);

(statearr_15976_18396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (41))){
var inst_15835 = (state_15885[(23)]);
var inst_15852 = (state_15885[(2)]);
var inst_15857 = cljs.core.next(inst_15835);
var inst_15812 = inst_15857;
var inst_15813 = null;
var inst_15814 = (0);
var inst_15815 = (0);
var state_15885__$1 = (function (){var statearr_15977 = state_15885;
(statearr_15977[(25)] = inst_15852);

(statearr_15977[(19)] = inst_15814);

(statearr_15977[(10)] = inst_15813);

(statearr_15977[(12)] = inst_15815);

(statearr_15977[(20)] = inst_15812);

return statearr_15977;
})();
var statearr_15978_18399 = state_15885__$1;
(statearr_15978_18399[(2)] = null);

(statearr_15978_18399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (43))){
var state_15885__$1 = state_15885;
var statearr_15979_18400 = state_15885__$1;
(statearr_15979_18400[(2)] = null);

(statearr_15979_18400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (29))){
var inst_15869 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_15980_18406 = state_15885__$1;
(statearr_15980_18406[(2)] = inst_15869);

(statearr_15980_18406[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (44))){
var inst_15878 = (state_15885[(2)]);
var state_15885__$1 = (function (){var statearr_15982 = state_15885;
(statearr_15982[(26)] = inst_15878);

return statearr_15982;
})();
var statearr_15983_18407 = state_15885__$1;
(statearr_15983_18407[(2)] = null);

(statearr_15983_18407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (6))){
var inst_15804 = (state_15885[(27)]);
var inst_15803 = cljs.core.deref(cs);
var inst_15804__$1 = cljs.core.keys(inst_15803);
var inst_15805 = cljs.core.count(inst_15804__$1);
var inst_15806 = cljs.core.reset_BANG_(dctr,inst_15805);
var inst_15811 = cljs.core.seq(inst_15804__$1);
var inst_15812 = inst_15811;
var inst_15813 = null;
var inst_15814 = (0);
var inst_15815 = (0);
var state_15885__$1 = (function (){var statearr_15986 = state_15885;
(statearr_15986[(28)] = inst_15806);

(statearr_15986[(27)] = inst_15804__$1);

(statearr_15986[(19)] = inst_15814);

(statearr_15986[(10)] = inst_15813);

(statearr_15986[(12)] = inst_15815);

(statearr_15986[(20)] = inst_15812);

return statearr_15986;
})();
var statearr_15992_18408 = state_15885__$1;
(statearr_15992_18408[(2)] = null);

(statearr_15992_18408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (28))){
var inst_15835 = (state_15885[(23)]);
var inst_15812 = (state_15885[(20)]);
var inst_15835__$1 = cljs.core.seq(inst_15812);
var state_15885__$1 = (function (){var statearr_15998 = state_15885;
(statearr_15998[(23)] = inst_15835__$1);

return statearr_15998;
})();
if(inst_15835__$1){
var statearr_15999_18412 = state_15885__$1;
(statearr_15999_18412[(1)] = (33));

} else {
var statearr_16000_18413 = state_15885__$1;
(statearr_16000_18413[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (25))){
var inst_15814 = (state_15885[(19)]);
var inst_15815 = (state_15885[(12)]);
var inst_15817 = (inst_15815 < inst_15814);
var inst_15818 = inst_15817;
var state_15885__$1 = state_15885;
if(cljs.core.truth_(inst_15818)){
var statearr_16005_18414 = state_15885__$1;
(statearr_16005_18414[(1)] = (27));

} else {
var statearr_16006_18415 = state_15885__$1;
(statearr_16006_18415[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (34))){
var state_15885__$1 = state_15885;
var statearr_16011_18417 = state_15885__$1;
(statearr_16011_18417[(2)] = null);

(statearr_16011_18417[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (17))){
var state_15885__$1 = state_15885;
var statearr_16018_18418 = state_15885__$1;
(statearr_16018_18418[(2)] = null);

(statearr_16018_18418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (3))){
var inst_15883 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15885__$1,inst_15883);
} else {
if((state_val_15886 === (12))){
var inst_15797 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_16021_18419 = state_15885__$1;
(statearr_16021_18419[(2)] = inst_15797);

(statearr_16021_18419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (2))){
var state_15885__$1 = state_15885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15885__$1,(4),ch);
} else {
if((state_val_15886 === (23))){
var state_15885__$1 = state_15885;
var statearr_16022_18421 = state_15885__$1;
(statearr_16022_18421[(2)] = null);

(statearr_16022_18421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (35))){
var inst_15865 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_16029_18422 = state_15885__$1;
(statearr_16029_18422[(2)] = inst_15865);

(statearr_16029_18422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (19))){
var inst_15764 = (state_15885[(7)]);
var inst_15770 = cljs.core.chunk_first(inst_15764);
var inst_15771 = cljs.core.chunk_rest(inst_15764);
var inst_15772 = cljs.core.count(inst_15770);
var inst_15735 = inst_15771;
var inst_15736 = inst_15770;
var inst_15737 = inst_15772;
var inst_15738 = (0);
var state_15885__$1 = (function (){var statearr_16030 = state_15885;
(statearr_16030[(13)] = inst_15736);

(statearr_16030[(15)] = inst_15735);

(statearr_16030[(16)] = inst_15737);

(statearr_16030[(17)] = inst_15738);

return statearr_16030;
})();
var statearr_16032_18427 = state_15885__$1;
(statearr_16032_18427[(2)] = null);

(statearr_16032_18427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (11))){
var inst_15735 = (state_15885[(15)]);
var inst_15764 = (state_15885[(7)]);
var inst_15764__$1 = cljs.core.seq(inst_15735);
var state_15885__$1 = (function (){var statearr_16034 = state_15885;
(statearr_16034[(7)] = inst_15764__$1);

return statearr_16034;
})();
if(inst_15764__$1){
var statearr_16036_18428 = state_15885__$1;
(statearr_16036_18428[(1)] = (16));

} else {
var statearr_16037_18431 = state_15885__$1;
(statearr_16037_18431[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (9))){
var inst_15799 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_16040_18432 = state_15885__$1;
(statearr_16040_18432[(2)] = inst_15799);

(statearr_16040_18432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (5))){
var inst_15733 = cljs.core.deref(cs);
var inst_15734 = cljs.core.seq(inst_15733);
var inst_15735 = inst_15734;
var inst_15736 = null;
var inst_15737 = (0);
var inst_15738 = (0);
var state_15885__$1 = (function (){var statearr_16042 = state_15885;
(statearr_16042[(13)] = inst_15736);

(statearr_16042[(15)] = inst_15735);

(statearr_16042[(16)] = inst_15737);

(statearr_16042[(17)] = inst_15738);

return statearr_16042;
})();
var statearr_16043_18433 = state_15885__$1;
(statearr_16043_18433[(2)] = null);

(statearr_16043_18433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (14))){
var state_15885__$1 = state_15885;
var statearr_16045_18434 = state_15885__$1;
(statearr_16045_18434[(2)] = null);

(statearr_16045_18434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (45))){
var inst_15875 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_16046_18436 = state_15885__$1;
(statearr_16046_18436[(2)] = inst_15875);

(statearr_16046_18436[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (26))){
var inst_15804 = (state_15885[(27)]);
var inst_15871 = (state_15885[(2)]);
var inst_15872 = cljs.core.seq(inst_15804);
var state_15885__$1 = (function (){var statearr_16048 = state_15885;
(statearr_16048[(29)] = inst_15871);

return statearr_16048;
})();
if(inst_15872){
var statearr_16049_18446 = state_15885__$1;
(statearr_16049_18446[(1)] = (42));

} else {
var statearr_16050_18447 = state_15885__$1;
(statearr_16050_18447[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (16))){
var inst_15764 = (state_15885[(7)]);
var inst_15768 = cljs.core.chunked_seq_QMARK_(inst_15764);
var state_15885__$1 = state_15885;
if(inst_15768){
var statearr_16052_18453 = state_15885__$1;
(statearr_16052_18453[(1)] = (19));

} else {
var statearr_16053_18457 = state_15885__$1;
(statearr_16053_18457[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (38))){
var inst_15862 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_16057_18458 = state_15885__$1;
(statearr_16057_18458[(2)] = inst_15862);

(statearr_16057_18458[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (30))){
var state_15885__$1 = state_15885;
var statearr_16059_18459 = state_15885__$1;
(statearr_16059_18459[(2)] = null);

(statearr_16059_18459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (10))){
var inst_15736 = (state_15885[(13)]);
var inst_15738 = (state_15885[(17)]);
var inst_15749 = cljs.core._nth(inst_15736,inst_15738);
var inst_15750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15749,(0),null);
var inst_15752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15749,(1),null);
var state_15885__$1 = (function (){var statearr_16060 = state_15885;
(statearr_16060[(24)] = inst_15750);

return statearr_16060;
})();
if(cljs.core.truth_(inst_15752)){
var statearr_16061_18460 = state_15885__$1;
(statearr_16061_18460[(1)] = (13));

} else {
var statearr_16062_18461 = state_15885__$1;
(statearr_16062_18461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (18))){
var inst_15795 = (state_15885[(2)]);
var state_15885__$1 = state_15885;
var statearr_16063_18462 = state_15885__$1;
(statearr_16063_18462[(2)] = inst_15795);

(statearr_16063_18462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (42))){
var state_15885__$1 = state_15885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15885__$1,(45),dchan);
} else {
if((state_val_15886 === (37))){
var inst_15725 = (state_15885[(9)]);
var inst_15845 = (state_15885[(22)]);
var inst_15835 = (state_15885[(23)]);
var inst_15845__$1 = cljs.core.first(inst_15835);
var inst_15847 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15845__$1,inst_15725,done);
var state_15885__$1 = (function (){var statearr_16066 = state_15885;
(statearr_16066[(22)] = inst_15845__$1);

return statearr_16066;
})();
if(cljs.core.truth_(inst_15847)){
var statearr_16067_18464 = state_15885__$1;
(statearr_16067_18464[(1)] = (39));

} else {
var statearr_16071_18465 = state_15885__$1;
(statearr_16071_18465[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15886 === (8))){
var inst_15737 = (state_15885[(16)]);
var inst_15738 = (state_15885[(17)]);
var inst_15740 = (inst_15738 < inst_15737);
var inst_15741 = inst_15740;
var state_15885__$1 = state_15885;
if(cljs.core.truth_(inst_15741)){
var statearr_16072_18469 = state_15885__$1;
(statearr_16072_18469[(1)] = (10));

} else {
var statearr_16073_18472 = state_15885__$1;
(statearr_16073_18472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14085__auto__ = null;
var cljs$core$async$mult_$_state_machine__14085__auto____0 = (function (){
var statearr_16075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16075[(0)] = cljs$core$async$mult_$_state_machine__14085__auto__);

(statearr_16075[(1)] = (1));

return statearr_16075;
});
var cljs$core$async$mult_$_state_machine__14085__auto____1 = (function (state_15885){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_15885);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e16077){var ex__14088__auto__ = e16077;
var statearr_16079_18473 = state_15885;
(statearr_16079_18473[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_15885[(4)]))){
var statearr_16081_18474 = state_15885;
(statearr_16081_18474[(1)] = cljs.core.first((state_15885[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18475 = state_15885;
state_15885 = G__18475;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14085__auto__ = function(state_15885){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14085__auto____1.call(this,state_15885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14085__auto____0;
cljs$core$async$mult_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14085__auto____1;
return cljs$core$async$mult_$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_16082 = f__14389__auto__();
(statearr_16082[(6)] = c__14388__auto___18357);

return statearr_16082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16084 = arguments.length;
switch (G__16084) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18485 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18485(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18514 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18514(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18516 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18516(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18517 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18517(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18530 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18530(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18541 = arguments.length;
var i__5727__auto___18542 = (0);
while(true){
if((i__5727__auto___18542 < len__5726__auto___18541)){
args__5732__auto__.push((arguments[i__5727__auto___18542]));

var G__18549 = (i__5727__auto___18542 + (1));
i__5727__auto___18542 = G__18549;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16210){
var map__16213 = p__16210;
var map__16213__$1 = cljs.core.__destructure_map(map__16213);
var opts = map__16213__$1;
var statearr_16214_18555 = state;
(statearr_16214_18555[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16222_18560 = state;
(statearr_16222_18560[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16225_18561 = state;
(statearr_16225_18561[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16192){
var G__16194 = cljs.core.first(seq16192);
var seq16192__$1 = cljs.core.next(seq16192);
var G__16195 = cljs.core.first(seq16192__$1);
var seq16192__$2 = cljs.core.next(seq16192__$1);
var G__16196 = cljs.core.first(seq16192__$2);
var seq16192__$3 = cljs.core.next(seq16192__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16194,G__16195,G__16196,seq16192__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16247 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16248){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16248 = meta16248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16249,meta16248__$1){
var self__ = this;
var _16249__$1 = this;
return (new cljs.core.async.t_cljs$core$async16247(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16248__$1));
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16249){
var self__ = this;
var _16249__$1 = this;
return self__.meta16248;
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16248","meta16248",671805351,null)], null);
}));

(cljs.core.async.t_cljs$core$async16247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16247");

(cljs.core.async.t_cljs$core$async16247.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16247.
 */
cljs.core.async.__GT_t_cljs$core$async16247 = (function cljs$core$async$__GT_t_cljs$core$async16247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16248){
return (new cljs.core.async.t_cljs$core$async16247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16248));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16247(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14388__auto___18585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_16350){
var state_val_16352 = (state_16350[(1)]);
if((state_val_16352 === (7))){
var inst_16308 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
if(cljs.core.truth_(inst_16308)){
var statearr_16353_18589 = state_16350__$1;
(statearr_16353_18589[(1)] = (8));

} else {
var statearr_16354_18590 = state_16350__$1;
(statearr_16354_18590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (20))){
var inst_16299 = (state_16350[(7)]);
var state_16350__$1 = state_16350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16350__$1,(23),out,inst_16299);
} else {
if((state_val_16352 === (1))){
var inst_16278 = calc_state();
var inst_16279 = cljs.core.__destructure_map(inst_16278);
var inst_16280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16279,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16279,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16279,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16285 = inst_16278;
var state_16350__$1 = (function (){var statearr_16360 = state_16350;
(statearr_16360[(8)] = inst_16283);

(statearr_16360[(9)] = inst_16284);

(statearr_16360[(10)] = inst_16280);

(statearr_16360[(11)] = inst_16285);

return statearr_16360;
})();
var statearr_16361_18592 = state_16350__$1;
(statearr_16361_18592[(2)] = null);

(statearr_16361_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (24))){
var inst_16290 = (state_16350[(12)]);
var inst_16285 = inst_16290;
var state_16350__$1 = (function (){var statearr_16362 = state_16350;
(statearr_16362[(11)] = inst_16285);

return statearr_16362;
})();
var statearr_16363_18593 = state_16350__$1;
(statearr_16363_18593[(2)] = null);

(statearr_16363_18593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (4))){
var inst_16303 = (state_16350[(13)]);
var inst_16299 = (state_16350[(7)]);
var inst_16298 = (state_16350[(2)]);
var inst_16299__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16298,(0),null);
var inst_16300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16298,(1),null);
var inst_16303__$1 = (inst_16299__$1 == null);
var state_16350__$1 = (function (){var statearr_16419 = state_16350;
(statearr_16419[(13)] = inst_16303__$1);

(statearr_16419[(14)] = inst_16300);

(statearr_16419[(7)] = inst_16299__$1);

return statearr_16419;
})();
if(cljs.core.truth_(inst_16303__$1)){
var statearr_16420_18599 = state_16350__$1;
(statearr_16420_18599[(1)] = (5));

} else {
var statearr_16421_18604 = state_16350__$1;
(statearr_16421_18604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (15))){
var inst_16322 = (state_16350[(15)]);
var inst_16291 = (state_16350[(16)]);
var inst_16322__$1 = cljs.core.empty_QMARK_(inst_16291);
var state_16350__$1 = (function (){var statearr_16422 = state_16350;
(statearr_16422[(15)] = inst_16322__$1);

return statearr_16422;
})();
if(inst_16322__$1){
var statearr_16423_18606 = state_16350__$1;
(statearr_16423_18606[(1)] = (17));

} else {
var statearr_16424_18607 = state_16350__$1;
(statearr_16424_18607[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (21))){
var inst_16290 = (state_16350[(12)]);
var inst_16285 = inst_16290;
var state_16350__$1 = (function (){var statearr_16425 = state_16350;
(statearr_16425[(11)] = inst_16285);

return statearr_16425;
})();
var statearr_16426_18608 = state_16350__$1;
(statearr_16426_18608[(2)] = null);

(statearr_16426_18608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (13))){
var inst_16315 = (state_16350[(2)]);
var inst_16316 = calc_state();
var inst_16285 = inst_16316;
var state_16350__$1 = (function (){var statearr_16427 = state_16350;
(statearr_16427[(17)] = inst_16315);

(statearr_16427[(11)] = inst_16285);

return statearr_16427;
})();
var statearr_16428_18609 = state_16350__$1;
(statearr_16428_18609[(2)] = null);

(statearr_16428_18609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (22))){
var inst_16344 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
var statearr_16429_18610 = state_16350__$1;
(statearr_16429_18610[(2)] = inst_16344);

(statearr_16429_18610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (6))){
var inst_16300 = (state_16350[(14)]);
var inst_16306 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16300,change);
var state_16350__$1 = state_16350;
var statearr_16430_18616 = state_16350__$1;
(statearr_16430_18616[(2)] = inst_16306);

(statearr_16430_18616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (25))){
var state_16350__$1 = state_16350;
var statearr_16431_18617 = state_16350__$1;
(statearr_16431_18617[(2)] = null);

(statearr_16431_18617[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (17))){
var inst_16300 = (state_16350[(14)]);
var inst_16292 = (state_16350[(18)]);
var inst_16324 = (inst_16292.cljs$core$IFn$_invoke$arity$1 ? inst_16292.cljs$core$IFn$_invoke$arity$1(inst_16300) : inst_16292.call(null,inst_16300));
var inst_16325 = cljs.core.not(inst_16324);
var state_16350__$1 = state_16350;
var statearr_16433_18623 = state_16350__$1;
(statearr_16433_18623[(2)] = inst_16325);

(statearr_16433_18623[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (3))){
var inst_16348 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16350__$1,inst_16348);
} else {
if((state_val_16352 === (12))){
var state_16350__$1 = state_16350;
var statearr_16434_18624 = state_16350__$1;
(statearr_16434_18624[(2)] = null);

(statearr_16434_18624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (2))){
var inst_16290 = (state_16350[(12)]);
var inst_16285 = (state_16350[(11)]);
var inst_16290__$1 = cljs.core.__destructure_map(inst_16285);
var inst_16291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16290__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16350__$1 = (function (){var statearr_16435 = state_16350;
(statearr_16435[(12)] = inst_16290__$1);

(statearr_16435[(16)] = inst_16291);

(statearr_16435[(18)] = inst_16292);

return statearr_16435;
})();
return cljs.core.async.ioc_alts_BANG_(state_16350__$1,(4),inst_16293);
} else {
if((state_val_16352 === (23))){
var inst_16334 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
if(cljs.core.truth_(inst_16334)){
var statearr_16438_18628 = state_16350__$1;
(statearr_16438_18628[(1)] = (24));

} else {
var statearr_16439_18629 = state_16350__$1;
(statearr_16439_18629[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (19))){
var inst_16328 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
var statearr_16440_18634 = state_16350__$1;
(statearr_16440_18634[(2)] = inst_16328);

(statearr_16440_18634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (11))){
var inst_16300 = (state_16350[(14)]);
var inst_16312 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16300);
var state_16350__$1 = state_16350;
var statearr_16444_18640 = state_16350__$1;
(statearr_16444_18640[(2)] = inst_16312);

(statearr_16444_18640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (9))){
var inst_16300 = (state_16350[(14)]);
var inst_16319 = (state_16350[(19)]);
var inst_16291 = (state_16350[(16)]);
var inst_16319__$1 = (inst_16291.cljs$core$IFn$_invoke$arity$1 ? inst_16291.cljs$core$IFn$_invoke$arity$1(inst_16300) : inst_16291.call(null,inst_16300));
var state_16350__$1 = (function (){var statearr_16445 = state_16350;
(statearr_16445[(19)] = inst_16319__$1);

return statearr_16445;
})();
if(cljs.core.truth_(inst_16319__$1)){
var statearr_16446_18645 = state_16350__$1;
(statearr_16446_18645[(1)] = (14));

} else {
var statearr_16447_18646 = state_16350__$1;
(statearr_16447_18646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (5))){
var inst_16303 = (state_16350[(13)]);
var state_16350__$1 = state_16350;
var statearr_16448_18647 = state_16350__$1;
(statearr_16448_18647[(2)] = inst_16303);

(statearr_16448_18647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (14))){
var inst_16319 = (state_16350[(19)]);
var state_16350__$1 = state_16350;
var statearr_16449_18648 = state_16350__$1;
(statearr_16449_18648[(2)] = inst_16319);

(statearr_16449_18648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (26))){
var inst_16339 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
var statearr_16450_18649 = state_16350__$1;
(statearr_16450_18649[(2)] = inst_16339);

(statearr_16450_18649[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (16))){
var inst_16330 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
if(cljs.core.truth_(inst_16330)){
var statearr_16451_18651 = state_16350__$1;
(statearr_16451_18651[(1)] = (20));

} else {
var statearr_16452_18652 = state_16350__$1;
(statearr_16452_18652[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (10))){
var inst_16346 = (state_16350[(2)]);
var state_16350__$1 = state_16350;
var statearr_16453_18653 = state_16350__$1;
(statearr_16453_18653[(2)] = inst_16346);

(statearr_16453_18653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (18))){
var inst_16322 = (state_16350[(15)]);
var state_16350__$1 = state_16350;
var statearr_16454_18654 = state_16350__$1;
(statearr_16454_18654[(2)] = inst_16322);

(statearr_16454_18654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16352 === (8))){
var inst_16299 = (state_16350[(7)]);
var inst_16310 = (inst_16299 == null);
var state_16350__$1 = state_16350;
if(cljs.core.truth_(inst_16310)){
var statearr_16455_18655 = state_16350__$1;
(statearr_16455_18655[(1)] = (11));

} else {
var statearr_16456_18656 = state_16350__$1;
(statearr_16456_18656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14085__auto__ = null;
var cljs$core$async$mix_$_state_machine__14085__auto____0 = (function (){
var statearr_16457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16457[(0)] = cljs$core$async$mix_$_state_machine__14085__auto__);

(statearr_16457[(1)] = (1));

return statearr_16457;
});
var cljs$core$async$mix_$_state_machine__14085__auto____1 = (function (state_16350){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_16350);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e16458){var ex__14088__auto__ = e16458;
var statearr_16459_18660 = state_16350;
(statearr_16459_18660[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_16350[(4)]))){
var statearr_16460_18661 = state_16350;
(statearr_16460_18661[(1)] = cljs.core.first((state_16350[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18662 = state_16350;
state_16350 = G__18662;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14085__auto__ = function(state_16350){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14085__auto____1.call(this,state_16350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14085__auto____0;
cljs$core$async$mix_$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14085__auto____1;
return cljs$core$async$mix_$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_16467 = f__14389__auto__();
(statearr_16467[(6)] = c__14388__auto___18585);

return statearr_16467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18672 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18672(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18674 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18674(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18675 = (function() {
var G__18676 = null;
var G__18676__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18676__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18676 = function(p,v){
switch(arguments.length){
case 1:
return G__18676__1.call(this,p);
case 2:
return G__18676__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18676.cljs$core$IFn$_invoke$arity$1 = G__18676__1;
G__18676.cljs$core$IFn$_invoke$arity$2 = G__18676__2;
return G__18676;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16528 = arguments.length;
switch (G__16528) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18675(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18675(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16558 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16559){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16559 = meta16559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16560,meta16559__$1){
var self__ = this;
var _16560__$1 = this;
return (new cljs.core.async.t_cljs$core$async16558(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16559__$1));
}));

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16560){
var self__ = this;
var _16560__$1 = this;
return self__.meta16559;
}));

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16558.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16559","meta16559",-586435446,null)], null);
}));

(cljs.core.async.t_cljs$core$async16558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16558");

(cljs.core.async.t_cljs$core$async16558.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16558.
 */
cljs.core.async.__GT_t_cljs$core$async16558 = (function cljs$core$async$__GT_t_cljs$core$async16558(ch,topic_fn,buf_fn,mults,ensure_mult,meta16559){
return (new cljs.core.async.t_cljs$core$async16558(ch,topic_fn,buf_fn,mults,ensure_mult,meta16559));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16546 = arguments.length;
switch (G__16546) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16543_SHARP_){
if(cljs.core.truth_((p1__16543_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16543_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16543_SHARP_.call(null,topic)))){
return p1__16543_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16543_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16558(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14388__auto___18709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_16641){
var state_val_16642 = (state_16641[(1)]);
if((state_val_16642 === (7))){
var inst_16633 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16643_18713 = state_16641__$1;
(statearr_16643_18713[(2)] = inst_16633);

(statearr_16643_18713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (20))){
var state_16641__$1 = state_16641;
var statearr_16644_18717 = state_16641__$1;
(statearr_16644_18717[(2)] = null);

(statearr_16644_18717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (1))){
var state_16641__$1 = state_16641;
var statearr_16645_18718 = state_16641__$1;
(statearr_16645_18718[(2)] = null);

(statearr_16645_18718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (24))){
var inst_16616 = (state_16641[(7)]);
var inst_16625 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16616);
var state_16641__$1 = state_16641;
var statearr_16647_18720 = state_16641__$1;
(statearr_16647_18720[(2)] = inst_16625);

(statearr_16647_18720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (4))){
var inst_16568 = (state_16641[(8)]);
var inst_16568__$1 = (state_16641[(2)]);
var inst_16569 = (inst_16568__$1 == null);
var state_16641__$1 = (function (){var statearr_16648 = state_16641;
(statearr_16648[(8)] = inst_16568__$1);

return statearr_16648;
})();
if(cljs.core.truth_(inst_16569)){
var statearr_16649_18725 = state_16641__$1;
(statearr_16649_18725[(1)] = (5));

} else {
var statearr_16650_18726 = state_16641__$1;
(statearr_16650_18726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (15))){
var inst_16610 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16651_18727 = state_16641__$1;
(statearr_16651_18727[(2)] = inst_16610);

(statearr_16651_18727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (21))){
var inst_16630 = (state_16641[(2)]);
var state_16641__$1 = (function (){var statearr_16652 = state_16641;
(statearr_16652[(9)] = inst_16630);

return statearr_16652;
})();
var statearr_16653_18738 = state_16641__$1;
(statearr_16653_18738[(2)] = null);

(statearr_16653_18738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (13))){
var inst_16592 = (state_16641[(10)]);
var inst_16594 = cljs.core.chunked_seq_QMARK_(inst_16592);
var state_16641__$1 = state_16641;
if(inst_16594){
var statearr_16654_18742 = state_16641__$1;
(statearr_16654_18742[(1)] = (16));

} else {
var statearr_16655_18743 = state_16641__$1;
(statearr_16655_18743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (22))){
var inst_16622 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
if(cljs.core.truth_(inst_16622)){
var statearr_16656_18751 = state_16641__$1;
(statearr_16656_18751[(1)] = (23));

} else {
var statearr_16657_18752 = state_16641__$1;
(statearr_16657_18752[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (6))){
var inst_16568 = (state_16641[(8)]);
var inst_16616 = (state_16641[(7)]);
var inst_16618 = (state_16641[(11)]);
var inst_16616__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16568) : topic_fn.call(null,inst_16568));
var inst_16617 = cljs.core.deref(mults);
var inst_16618__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16617,inst_16616__$1);
var state_16641__$1 = (function (){var statearr_16658 = state_16641;
(statearr_16658[(7)] = inst_16616__$1);

(statearr_16658[(11)] = inst_16618__$1);

return statearr_16658;
})();
if(cljs.core.truth_(inst_16618__$1)){
var statearr_16659_18753 = state_16641__$1;
(statearr_16659_18753[(1)] = (19));

} else {
var statearr_16660_18754 = state_16641__$1;
(statearr_16660_18754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (25))){
var inst_16627 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16664_18755 = state_16641__$1;
(statearr_16664_18755[(2)] = inst_16627);

(statearr_16664_18755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (17))){
var inst_16592 = (state_16641[(10)]);
var inst_16601 = cljs.core.first(inst_16592);
var inst_16602 = cljs.core.async.muxch_STAR_(inst_16601);
var inst_16603 = cljs.core.async.close_BANG_(inst_16602);
var inst_16604 = cljs.core.next(inst_16592);
var inst_16578 = inst_16604;
var inst_16579 = null;
var inst_16580 = (0);
var inst_16581 = (0);
var state_16641__$1 = (function (){var statearr_16666 = state_16641;
(statearr_16666[(12)] = inst_16579);

(statearr_16666[(13)] = inst_16580);

(statearr_16666[(14)] = inst_16603);

(statearr_16666[(15)] = inst_16578);

(statearr_16666[(16)] = inst_16581);

return statearr_16666;
})();
var statearr_16667_18769 = state_16641__$1;
(statearr_16667_18769[(2)] = null);

(statearr_16667_18769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (3))){
var inst_16635 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16641__$1,inst_16635);
} else {
if((state_val_16642 === (12))){
var inst_16612 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16669_18771 = state_16641__$1;
(statearr_16669_18771[(2)] = inst_16612);

(statearr_16669_18771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (2))){
var state_16641__$1 = state_16641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16641__$1,(4),ch);
} else {
if((state_val_16642 === (23))){
var state_16641__$1 = state_16641;
var statearr_16670_18773 = state_16641__$1;
(statearr_16670_18773[(2)] = null);

(statearr_16670_18773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (19))){
var inst_16568 = (state_16641[(8)]);
var inst_16618 = (state_16641[(11)]);
var inst_16620 = cljs.core.async.muxch_STAR_(inst_16618);
var state_16641__$1 = state_16641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16641__$1,(22),inst_16620,inst_16568);
} else {
if((state_val_16642 === (11))){
var inst_16578 = (state_16641[(15)]);
var inst_16592 = (state_16641[(10)]);
var inst_16592__$1 = cljs.core.seq(inst_16578);
var state_16641__$1 = (function (){var statearr_16671 = state_16641;
(statearr_16671[(10)] = inst_16592__$1);

return statearr_16671;
})();
if(inst_16592__$1){
var statearr_16672_18777 = state_16641__$1;
(statearr_16672_18777[(1)] = (13));

} else {
var statearr_16673_18778 = state_16641__$1;
(statearr_16673_18778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (9))){
var inst_16614 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16674_18779 = state_16641__$1;
(statearr_16674_18779[(2)] = inst_16614);

(statearr_16674_18779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (5))){
var inst_16575 = cljs.core.deref(mults);
var inst_16576 = cljs.core.vals(inst_16575);
var inst_16577 = cljs.core.seq(inst_16576);
var inst_16578 = inst_16577;
var inst_16579 = null;
var inst_16580 = (0);
var inst_16581 = (0);
var state_16641__$1 = (function (){var statearr_16675 = state_16641;
(statearr_16675[(12)] = inst_16579);

(statearr_16675[(13)] = inst_16580);

(statearr_16675[(15)] = inst_16578);

(statearr_16675[(16)] = inst_16581);

return statearr_16675;
})();
var statearr_16676_18782 = state_16641__$1;
(statearr_16676_18782[(2)] = null);

(statearr_16676_18782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (14))){
var state_16641__$1 = state_16641;
var statearr_16683_18783 = state_16641__$1;
(statearr_16683_18783[(2)] = null);

(statearr_16683_18783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (16))){
var inst_16592 = (state_16641[(10)]);
var inst_16596 = cljs.core.chunk_first(inst_16592);
var inst_16597 = cljs.core.chunk_rest(inst_16592);
var inst_16598 = cljs.core.count(inst_16596);
var inst_16578 = inst_16597;
var inst_16579 = inst_16596;
var inst_16580 = inst_16598;
var inst_16581 = (0);
var state_16641__$1 = (function (){var statearr_16684 = state_16641;
(statearr_16684[(12)] = inst_16579);

(statearr_16684[(13)] = inst_16580);

(statearr_16684[(15)] = inst_16578);

(statearr_16684[(16)] = inst_16581);

return statearr_16684;
})();
var statearr_16686_18784 = state_16641__$1;
(statearr_16686_18784[(2)] = null);

(statearr_16686_18784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (10))){
var inst_16579 = (state_16641[(12)]);
var inst_16580 = (state_16641[(13)]);
var inst_16578 = (state_16641[(15)]);
var inst_16581 = (state_16641[(16)]);
var inst_16586 = cljs.core._nth(inst_16579,inst_16581);
var inst_16587 = cljs.core.async.muxch_STAR_(inst_16586);
var inst_16588 = cljs.core.async.close_BANG_(inst_16587);
var inst_16589 = (inst_16581 + (1));
var tmp16677 = inst_16579;
var tmp16678 = inst_16580;
var tmp16679 = inst_16578;
var inst_16578__$1 = tmp16679;
var inst_16579__$1 = tmp16677;
var inst_16580__$1 = tmp16678;
var inst_16581__$1 = inst_16589;
var state_16641__$1 = (function (){var statearr_16690 = state_16641;
(statearr_16690[(12)] = inst_16579__$1);

(statearr_16690[(13)] = inst_16580__$1);

(statearr_16690[(15)] = inst_16578__$1);

(statearr_16690[(16)] = inst_16581__$1);

(statearr_16690[(17)] = inst_16588);

return statearr_16690;
})();
var statearr_16691_18788 = state_16641__$1;
(statearr_16691_18788[(2)] = null);

(statearr_16691_18788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (18))){
var inst_16607 = (state_16641[(2)]);
var state_16641__$1 = state_16641;
var statearr_16692_18790 = state_16641__$1;
(statearr_16692_18790[(2)] = inst_16607);

(statearr_16692_18790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16642 === (8))){
var inst_16580 = (state_16641[(13)]);
var inst_16581 = (state_16641[(16)]);
var inst_16583 = (inst_16581 < inst_16580);
var inst_16584 = inst_16583;
var state_16641__$1 = state_16641;
if(cljs.core.truth_(inst_16584)){
var statearr_16693_18794 = state_16641__$1;
(statearr_16693_18794[(1)] = (10));

} else {
var statearr_16694_18795 = state_16641__$1;
(statearr_16694_18795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_16695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16695[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_16695[(1)] = (1));

return statearr_16695;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_16641){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_16641);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e16699){var ex__14088__auto__ = e16699;
var statearr_16700_18798 = state_16641;
(statearr_16700_18798[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_16641[(4)]))){
var statearr_16702_18799 = state_16641;
(statearr_16702_18799[(1)] = cljs.core.first((state_16641[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18800 = state_16641;
state_16641 = G__18800;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_16641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_16641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_16703 = f__14389__auto__();
(statearr_16703[(6)] = c__14388__auto___18709);

return statearr_16703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16707 = arguments.length;
switch (G__16707) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16713 = arguments.length;
switch (G__16713) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16715 = arguments.length;
switch (G__16715) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14388__auto___18810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_16763){
var state_val_16764 = (state_16763[(1)]);
if((state_val_16764 === (7))){
var state_16763__$1 = state_16763;
var statearr_16766_18811 = state_16763__$1;
(statearr_16766_18811[(2)] = null);

(statearr_16766_18811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (1))){
var state_16763__$1 = state_16763;
var statearr_16767_18812 = state_16763__$1;
(statearr_16767_18812[(2)] = null);

(statearr_16767_18812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (4))){
var inst_16723 = (state_16763[(7)]);
var inst_16722 = (state_16763[(8)]);
var inst_16725 = (inst_16723 < inst_16722);
var state_16763__$1 = state_16763;
if(cljs.core.truth_(inst_16725)){
var statearr_16770_18813 = state_16763__$1;
(statearr_16770_18813[(1)] = (6));

} else {
var statearr_16771_18814 = state_16763__$1;
(statearr_16771_18814[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (15))){
var inst_16749 = (state_16763[(9)]);
var inst_16754 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16749);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16763__$1,(17),out,inst_16754);
} else {
if((state_val_16764 === (13))){
var inst_16749 = (state_16763[(9)]);
var inst_16749__$1 = (state_16763[(2)]);
var inst_16750 = cljs.core.some(cljs.core.nil_QMARK_,inst_16749__$1);
var state_16763__$1 = (function (){var statearr_16774 = state_16763;
(statearr_16774[(9)] = inst_16749__$1);

return statearr_16774;
})();
if(cljs.core.truth_(inst_16750)){
var statearr_16775_18818 = state_16763__$1;
(statearr_16775_18818[(1)] = (14));

} else {
var statearr_16776_18819 = state_16763__$1;
(statearr_16776_18819[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (6))){
var state_16763__$1 = state_16763;
var statearr_16777_18820 = state_16763__$1;
(statearr_16777_18820[(2)] = null);

(statearr_16777_18820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (17))){
var inst_16756 = (state_16763[(2)]);
var state_16763__$1 = (function (){var statearr_16787 = state_16763;
(statearr_16787[(10)] = inst_16756);

return statearr_16787;
})();
var statearr_16788_18821 = state_16763__$1;
(statearr_16788_18821[(2)] = null);

(statearr_16788_18821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (3))){
var inst_16761 = (state_16763[(2)]);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16763__$1,inst_16761);
} else {
if((state_val_16764 === (12))){
var _ = (function (){var statearr_16816 = state_16763;
(statearr_16816[(4)] = cljs.core.rest((state_16763[(4)])));

return statearr_16816;
})();
var state_16763__$1 = state_16763;
var ex16781 = (state_16763__$1[(2)]);
var statearr_16818_18826 = state_16763__$1;
(statearr_16818_18826[(5)] = ex16781);


if((ex16781 instanceof Object)){
var statearr_16820_18827 = state_16763__$1;
(statearr_16820_18827[(1)] = (11));

(statearr_16820_18827[(5)] = null);

} else {
throw ex16781;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (2))){
var inst_16721 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16722 = cnt;
var inst_16723 = (0);
var state_16763__$1 = (function (){var statearr_16830 = state_16763;
(statearr_16830[(11)] = inst_16721);

(statearr_16830[(7)] = inst_16723);

(statearr_16830[(8)] = inst_16722);

return statearr_16830;
})();
var statearr_16832_18828 = state_16763__$1;
(statearr_16832_18828[(2)] = null);

(statearr_16832_18828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (11))){
var inst_16728 = (state_16763[(2)]);
var inst_16729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16763__$1 = (function (){var statearr_16833 = state_16763;
(statearr_16833[(12)] = inst_16728);

return statearr_16833;
})();
var statearr_16834_18835 = state_16763__$1;
(statearr_16834_18835[(2)] = inst_16729);

(statearr_16834_18835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (9))){
var inst_16723 = (state_16763[(7)]);
var _ = (function (){var statearr_16836 = state_16763;
(statearr_16836[(4)] = cljs.core.cons((12),(state_16763[(4)])));

return statearr_16836;
})();
var inst_16735 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16723) : chs__$1.call(null,inst_16723));
var inst_16736 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16723) : done.call(null,inst_16723));
var inst_16737 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16735,inst_16736);
var ___$1 = (function (){var statearr_16837 = state_16763;
(statearr_16837[(4)] = cljs.core.rest((state_16763[(4)])));

return statearr_16837;
})();
var state_16763__$1 = state_16763;
var statearr_16838_18842 = state_16763__$1;
(statearr_16838_18842[(2)] = inst_16737);

(statearr_16838_18842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (5))){
var inst_16747 = (state_16763[(2)]);
var state_16763__$1 = (function (){var statearr_16839 = state_16763;
(statearr_16839[(13)] = inst_16747);

return statearr_16839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16763__$1,(13),dchan);
} else {
if((state_val_16764 === (14))){
var inst_16752 = cljs.core.async.close_BANG_(out);
var state_16763__$1 = state_16763;
var statearr_16841_18843 = state_16763__$1;
(statearr_16841_18843[(2)] = inst_16752);

(statearr_16841_18843[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (16))){
var inst_16759 = (state_16763[(2)]);
var state_16763__$1 = state_16763;
var statearr_16843_18845 = state_16763__$1;
(statearr_16843_18845[(2)] = inst_16759);

(statearr_16843_18845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (10))){
var inst_16723 = (state_16763[(7)]);
var inst_16740 = (state_16763[(2)]);
var inst_16741 = (inst_16723 + (1));
var inst_16723__$1 = inst_16741;
var state_16763__$1 = (function (){var statearr_16844 = state_16763;
(statearr_16844[(14)] = inst_16740);

(statearr_16844[(7)] = inst_16723__$1);

return statearr_16844;
})();
var statearr_16845_18850 = state_16763__$1;
(statearr_16845_18850[(2)] = null);

(statearr_16845_18850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (8))){
var inst_16745 = (state_16763[(2)]);
var state_16763__$1 = state_16763;
var statearr_16856_18851 = state_16763__$1;
(statearr_16856_18851[(2)] = inst_16745);

(statearr_16856_18851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_16858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16858[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_16858[(1)] = (1));

return statearr_16858;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_16763){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_16763);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e16859){var ex__14088__auto__ = e16859;
var statearr_16861_18855 = state_16763;
(statearr_16861_18855[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_16763[(4)]))){
var statearr_16865_18856 = state_16763;
(statearr_16865_18856[(1)] = cljs.core.first((state_16763[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18869 = state_16763;
state_16763 = G__18869;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_16763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_16763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_16873 = f__14389__auto__();
(statearr_16873[(6)] = c__14388__auto___18810);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16891 = arguments.length;
switch (G__16891) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14388__auto___18874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_16941){
var state_val_16948 = (state_16941[(1)]);
if((state_val_16948 === (7))){
var inst_16907 = (state_16941[(7)]);
var inst_16908 = (state_16941[(8)]);
var inst_16907__$1 = (state_16941[(2)]);
var inst_16908__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16907__$1,(0),null);
var inst_16909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16907__$1,(1),null);
var inst_16910 = (inst_16908__$1 == null);
var state_16941__$1 = (function (){var statearr_16964 = state_16941;
(statearr_16964[(7)] = inst_16907__$1);

(statearr_16964[(9)] = inst_16909);

(statearr_16964[(8)] = inst_16908__$1);

return statearr_16964;
})();
if(cljs.core.truth_(inst_16910)){
var statearr_16968_18880 = state_16941__$1;
(statearr_16968_18880[(1)] = (8));

} else {
var statearr_16969_18881 = state_16941__$1;
(statearr_16969_18881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (1))){
var inst_16894 = cljs.core.vec(chs);
var inst_16895 = inst_16894;
var state_16941__$1 = (function (){var statearr_16975 = state_16941;
(statearr_16975[(10)] = inst_16895);

return statearr_16975;
})();
var statearr_16976_18883 = state_16941__$1;
(statearr_16976_18883[(2)] = null);

(statearr_16976_18883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (4))){
var inst_16895 = (state_16941[(10)]);
var state_16941__$1 = state_16941;
return cljs.core.async.ioc_alts_BANG_(state_16941__$1,(7),inst_16895);
} else {
if((state_val_16948 === (6))){
var inst_16926 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16984_18885 = state_16941__$1;
(statearr_16984_18885[(2)] = inst_16926);

(statearr_16984_18885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (3))){
var inst_16928 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16941__$1,inst_16928);
} else {
if((state_val_16948 === (2))){
var inst_16895 = (state_16941[(10)]);
var inst_16897 = cljs.core.count(inst_16895);
var inst_16898 = (inst_16897 > (0));
var state_16941__$1 = state_16941;
if(cljs.core.truth_(inst_16898)){
var statearr_16986_18889 = state_16941__$1;
(statearr_16986_18889[(1)] = (4));

} else {
var statearr_16987_18890 = state_16941__$1;
(statearr_16987_18890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (11))){
var inst_16895 = (state_16941[(10)]);
var inst_16917 = (state_16941[(2)]);
var tmp16985 = inst_16895;
var inst_16895__$1 = tmp16985;
var state_16941__$1 = (function (){var statearr_16988 = state_16941;
(statearr_16988[(11)] = inst_16917);

(statearr_16988[(10)] = inst_16895__$1);

return statearr_16988;
})();
var statearr_16989_18892 = state_16941__$1;
(statearr_16989_18892[(2)] = null);

(statearr_16989_18892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (9))){
var inst_16908 = (state_16941[(8)]);
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16941__$1,(11),out,inst_16908);
} else {
if((state_val_16948 === (5))){
var inst_16924 = cljs.core.async.close_BANG_(out);
var state_16941__$1 = state_16941;
var statearr_16992_18893 = state_16941__$1;
(statearr_16992_18893[(2)] = inst_16924);

(statearr_16992_18893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (10))){
var inst_16922 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16994_18895 = state_16941__$1;
(statearr_16994_18895[(2)] = inst_16922);

(statearr_16994_18895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16948 === (8))){
var inst_16907 = (state_16941[(7)]);
var inst_16909 = (state_16941[(9)]);
var inst_16895 = (state_16941[(10)]);
var inst_16908 = (state_16941[(8)]);
var inst_16912 = (function (){var cs = inst_16895;
var vec__16903 = inst_16907;
var v = inst_16908;
var c = inst_16909;
return (function (p1__16884_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16884_SHARP_);
});
})();
var inst_16913 = cljs.core.filterv(inst_16912,inst_16895);
var inst_16895__$1 = inst_16913;
var state_16941__$1 = (function (){var statearr_16995 = state_16941;
(statearr_16995[(10)] = inst_16895__$1);

return statearr_16995;
})();
var statearr_16996_18897 = state_16941__$1;
(statearr_16996_18897[(2)] = null);

(statearr_16996_18897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_16997 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16997[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_16997[(1)] = (1));

return statearr_16997;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_16941){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_16941);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17006){var ex__14088__auto__ = e17006;
var statearr_17007_18898 = state_16941;
(statearr_17007_18898[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_16941[(4)]))){
var statearr_17009_18899 = state_16941;
(statearr_17009_18899[(1)] = cljs.core.first((state_16941[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18900 = state_16941;
state_16941 = G__18900;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_16941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_16941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17017 = f__14389__auto__();
(statearr_17017[(6)] = c__14388__auto___18874);

return statearr_17017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17022 = arguments.length;
switch (G__17022) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14388__auto___18909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_17058){
var state_val_17059 = (state_17058[(1)]);
if((state_val_17059 === (7))){
var inst_17033 = (state_17058[(7)]);
var inst_17033__$1 = (state_17058[(2)]);
var inst_17034 = (inst_17033__$1 == null);
var inst_17035 = cljs.core.not(inst_17034);
var state_17058__$1 = (function (){var statearr_17072 = state_17058;
(statearr_17072[(7)] = inst_17033__$1);

return statearr_17072;
})();
if(inst_17035){
var statearr_17073_18911 = state_17058__$1;
(statearr_17073_18911[(1)] = (8));

} else {
var statearr_17074_18912 = state_17058__$1;
(statearr_17074_18912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (1))){
var inst_17025 = (0);
var state_17058__$1 = (function (){var statearr_17075 = state_17058;
(statearr_17075[(8)] = inst_17025);

return statearr_17075;
})();
var statearr_17077_18913 = state_17058__$1;
(statearr_17077_18913[(2)] = null);

(statearr_17077_18913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (4))){
var state_17058__$1 = state_17058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17058__$1,(7),ch);
} else {
if((state_val_17059 === (6))){
var inst_17048 = (state_17058[(2)]);
var state_17058__$1 = state_17058;
var statearr_17081_18914 = state_17058__$1;
(statearr_17081_18914[(2)] = inst_17048);

(statearr_17081_18914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (3))){
var inst_17053 = (state_17058[(2)]);
var inst_17054 = cljs.core.async.close_BANG_(out);
var state_17058__$1 = (function (){var statearr_17082 = state_17058;
(statearr_17082[(9)] = inst_17053);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17058__$1,inst_17054);
} else {
if((state_val_17059 === (2))){
var inst_17025 = (state_17058[(8)]);
var inst_17027 = (inst_17025 < n);
var state_17058__$1 = state_17058;
if(cljs.core.truth_(inst_17027)){
var statearr_17086_18915 = state_17058__$1;
(statearr_17086_18915[(1)] = (4));

} else {
var statearr_17087_18916 = state_17058__$1;
(statearr_17087_18916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (11))){
var inst_17025 = (state_17058[(8)]);
var inst_17038 = (state_17058[(2)]);
var inst_17040 = (inst_17025 + (1));
var inst_17025__$1 = inst_17040;
var state_17058__$1 = (function (){var statearr_17089 = state_17058;
(statearr_17089[(10)] = inst_17038);

(statearr_17089[(8)] = inst_17025__$1);

return statearr_17089;
})();
var statearr_17091_18917 = state_17058__$1;
(statearr_17091_18917[(2)] = null);

(statearr_17091_18917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (9))){
var state_17058__$1 = state_17058;
var statearr_17094_18918 = state_17058__$1;
(statearr_17094_18918[(2)] = null);

(statearr_17094_18918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (5))){
var state_17058__$1 = state_17058;
var statearr_17116_18919 = state_17058__$1;
(statearr_17116_18919[(2)] = null);

(statearr_17116_18919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (10))){
var inst_17045 = (state_17058[(2)]);
var state_17058__$1 = state_17058;
var statearr_17119_18920 = state_17058__$1;
(statearr_17119_18920[(2)] = inst_17045);

(statearr_17119_18920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17059 === (8))){
var inst_17033 = (state_17058[(7)]);
var state_17058__$1 = state_17058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17058__$1,(11),out,inst_17033);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_17120 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17120[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_17120[(1)] = (1));

return statearr_17120;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_17058){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_17058);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17121){var ex__14088__auto__ = e17121;
var statearr_17122_18921 = state_17058;
(statearr_17122_18921[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_17058[(4)]))){
var statearr_17123_18926 = state_17058;
(statearr_17123_18926[(1)] = cljs.core.first((state_17058[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18928 = state_17058;
state_17058 = G__18928;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_17058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_17058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17124 = f__14389__auto__();
(statearr_17124[(6)] = c__14388__auto___18909);

return statearr_17124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17147 = (function (f,ch,meta17132,_,fn1,meta17148){
this.f = f;
this.ch = ch;
this.meta17132 = meta17132;
this._ = _;
this.fn1 = fn1;
this.meta17148 = meta17148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17149,meta17148__$1){
var self__ = this;
var _17149__$1 = this;
return (new cljs.core.async.t_cljs$core$async17147(self__.f,self__.ch,self__.meta17132,self__._,self__.fn1,meta17148__$1));
}));

(cljs.core.async.t_cljs$core$async17147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17149){
var self__ = this;
var _17149__$1 = this;
return self__.meta17148;
}));

(cljs.core.async.t_cljs$core$async17147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17129_SHARP_){
var G__17154 = (((p1__17129_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17129_SHARP_) : self__.f.call(null,p1__17129_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17154) : f1.call(null,G__17154));
});
}));

(cljs.core.async.t_cljs$core$async17147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17132","meta17132",1411433104,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17131","cljs.core.async/t_cljs$core$async17131",-133556900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17148","meta17148",-314748931,null)], null);
}));

(cljs.core.async.t_cljs$core$async17147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17147");

(cljs.core.async.t_cljs$core$async17147.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17147.
 */
cljs.core.async.__GT_t_cljs$core$async17147 = (function cljs$core$async$__GT_t_cljs$core$async17147(f,ch,meta17132,_,fn1,meta17148){
return (new cljs.core.async.t_cljs$core$async17147(f,ch,meta17132,_,fn1,meta17148));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17131 = (function (f,ch,meta17132){
this.f = f;
this.ch = ch;
this.meta17132 = meta17132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17133,meta17132__$1){
var self__ = this;
var _17133__$1 = this;
return (new cljs.core.async.t_cljs$core$async17131(self__.f,self__.ch,meta17132__$1));
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17133){
var self__ = this;
var _17133__$1 = this;
return self__.meta17132;
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17147(self__.f,self__.ch,self__.meta17132,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17161 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17161) : self__.f.call(null,G__17161));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17132","meta17132",1411433104,null)], null);
}));

(cljs.core.async.t_cljs$core$async17131.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17131");

(cljs.core.async.t_cljs$core$async17131.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17131");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17131.
 */
cljs.core.async.__GT_t_cljs$core$async17131 = (function cljs$core$async$__GT_t_cljs$core$async17131(f,ch,meta17132){
return (new cljs.core.async.t_cljs$core$async17131(f,ch,meta17132));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17131(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17167 = (function (f,ch,meta17168){
this.f = f;
this.ch = ch;
this.meta17168 = meta17168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17169,meta17168__$1){
var self__ = this;
var _17169__$1 = this;
return (new cljs.core.async.t_cljs$core$async17167(self__.f,self__.ch,meta17168__$1));
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17169){
var self__ = this;
var _17169__$1 = this;
return self__.meta17168;
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17168","meta17168",-1382711938,null)], null);
}));

(cljs.core.async.t_cljs$core$async17167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17167");

(cljs.core.async.t_cljs$core$async17167.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17167.
 */
cljs.core.async.__GT_t_cljs$core$async17167 = (function cljs$core$async$__GT_t_cljs$core$async17167(f,ch,meta17168){
return (new cljs.core.async.t_cljs$core$async17167(f,ch,meta17168));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17167(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17197 = (function (p,ch,meta17198){
this.p = p;
this.ch = ch;
this.meta17198 = meta17198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17199,meta17198__$1){
var self__ = this;
var _17199__$1 = this;
return (new cljs.core.async.t_cljs$core$async17197(self__.p,self__.ch,meta17198__$1));
}));

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17199){
var self__ = this;
var _17199__$1 = this;
return self__.meta17198;
}));

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17198","meta17198",342617244,null)], null);
}));

(cljs.core.async.t_cljs$core$async17197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17197");

(cljs.core.async.t_cljs$core$async17197.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17197.
 */
cljs.core.async.__GT_t_cljs$core$async17197 = (function cljs$core$async$__GT_t_cljs$core$async17197(p,ch,meta17198){
return (new cljs.core.async.t_cljs$core$async17197(p,ch,meta17198));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17197(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17212 = arguments.length;
switch (G__17212) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14388__auto___18964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_17234){
var state_val_17235 = (state_17234[(1)]);
if((state_val_17235 === (7))){
var inst_17230 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
var statearr_17236_18966 = state_17234__$1;
(statearr_17236_18966[(2)] = inst_17230);

(statearr_17236_18966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (1))){
var state_17234__$1 = state_17234;
var statearr_17237_18969 = state_17234__$1;
(statearr_17237_18969[(2)] = null);

(statearr_17237_18969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (4))){
var inst_17215 = (state_17234[(7)]);
var inst_17215__$1 = (state_17234[(2)]);
var inst_17217 = (inst_17215__$1 == null);
var state_17234__$1 = (function (){var statearr_17241 = state_17234;
(statearr_17241[(7)] = inst_17215__$1);

return statearr_17241;
})();
if(cljs.core.truth_(inst_17217)){
var statearr_17242_18970 = state_17234__$1;
(statearr_17242_18970[(1)] = (5));

} else {
var statearr_17243_18971 = state_17234__$1;
(statearr_17243_18971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (6))){
var inst_17215 = (state_17234[(7)]);
var inst_17221 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17215) : p.call(null,inst_17215));
var state_17234__$1 = state_17234;
if(cljs.core.truth_(inst_17221)){
var statearr_17244_18972 = state_17234__$1;
(statearr_17244_18972[(1)] = (8));

} else {
var statearr_17245_18973 = state_17234__$1;
(statearr_17245_18973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (3))){
var inst_17232 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17234__$1,inst_17232);
} else {
if((state_val_17235 === (2))){
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17234__$1,(4),ch);
} else {
if((state_val_17235 === (11))){
var inst_17224 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
var statearr_17246_18974 = state_17234__$1;
(statearr_17246_18974[(2)] = inst_17224);

(statearr_17246_18974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (9))){
var state_17234__$1 = state_17234;
var statearr_17247_18975 = state_17234__$1;
(statearr_17247_18975[(2)] = null);

(statearr_17247_18975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (5))){
var inst_17219 = cljs.core.async.close_BANG_(out);
var state_17234__$1 = state_17234;
var statearr_17248_18976 = state_17234__$1;
(statearr_17248_18976[(2)] = inst_17219);

(statearr_17248_18976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (10))){
var inst_17227 = (state_17234[(2)]);
var state_17234__$1 = (function (){var statearr_17249 = state_17234;
(statearr_17249[(8)] = inst_17227);

return statearr_17249;
})();
var statearr_17250_18981 = state_17234__$1;
(statearr_17250_18981[(2)] = null);

(statearr_17250_18981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (8))){
var inst_17215 = (state_17234[(7)]);
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17234__$1,(11),out,inst_17215);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_17251 = [null,null,null,null,null,null,null,null,null];
(statearr_17251[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_17251[(1)] = (1));

return statearr_17251;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_17234){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_17234);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17252){var ex__14088__auto__ = e17252;
var statearr_17253_18989 = state_17234;
(statearr_17253_18989[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_17234[(4)]))){
var statearr_17254_18990 = state_17234;
(statearr_17254_18990[(1)] = cljs.core.first((state_17234[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18991 = state_17234;
state_17234 = G__18991;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_17234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_17234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17255 = f__14389__auto__();
(statearr_17255[(6)] = c__14388__auto___18964);

return statearr_17255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17258 = arguments.length;
switch (G__17258) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14388__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_17335){
var state_val_17336 = (state_17335[(1)]);
if((state_val_17336 === (7))){
var inst_17331 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17337_19002 = state_17335__$1;
(statearr_17337_19002[(2)] = inst_17331);

(statearr_17337_19002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (20))){
var inst_17289 = (state_17335[(7)]);
var inst_17312 = (state_17335[(2)]);
var inst_17313 = cljs.core.next(inst_17289);
var inst_17275 = inst_17313;
var inst_17276 = null;
var inst_17277 = (0);
var inst_17278 = (0);
var state_17335__$1 = (function (){var statearr_17338 = state_17335;
(statearr_17338[(8)] = inst_17277);

(statearr_17338[(9)] = inst_17312);

(statearr_17338[(10)] = inst_17276);

(statearr_17338[(11)] = inst_17275);

(statearr_17338[(12)] = inst_17278);

return statearr_17338;
})();
var statearr_17339_19010 = state_17335__$1;
(statearr_17339_19010[(2)] = null);

(statearr_17339_19010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (1))){
var state_17335__$1 = state_17335;
var statearr_17340_19012 = state_17335__$1;
(statearr_17340_19012[(2)] = null);

(statearr_17340_19012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (4))){
var inst_17264 = (state_17335[(13)]);
var inst_17264__$1 = (state_17335[(2)]);
var inst_17265 = (inst_17264__$1 == null);
var state_17335__$1 = (function (){var statearr_17342 = state_17335;
(statearr_17342[(13)] = inst_17264__$1);

return statearr_17342;
})();
if(cljs.core.truth_(inst_17265)){
var statearr_17343_19016 = state_17335__$1;
(statearr_17343_19016[(1)] = (5));

} else {
var statearr_17344_19017 = state_17335__$1;
(statearr_17344_19017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (15))){
var state_17335__$1 = state_17335;
var statearr_17351_19025 = state_17335__$1;
(statearr_17351_19025[(2)] = null);

(statearr_17351_19025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (21))){
var state_17335__$1 = state_17335;
var statearr_17352_19026 = state_17335__$1;
(statearr_17352_19026[(2)] = null);

(statearr_17352_19026[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (13))){
var inst_17277 = (state_17335[(8)]);
var inst_17276 = (state_17335[(10)]);
var inst_17275 = (state_17335[(11)]);
var inst_17278 = (state_17335[(12)]);
var inst_17285 = (state_17335[(2)]);
var inst_17286 = (inst_17278 + (1));
var tmp17348 = inst_17277;
var tmp17349 = inst_17276;
var tmp17350 = inst_17275;
var inst_17275__$1 = tmp17350;
var inst_17276__$1 = tmp17349;
var inst_17277__$1 = tmp17348;
var inst_17278__$1 = inst_17286;
var state_17335__$1 = (function (){var statearr_17355 = state_17335;
(statearr_17355[(14)] = inst_17285);

(statearr_17355[(8)] = inst_17277__$1);

(statearr_17355[(10)] = inst_17276__$1);

(statearr_17355[(11)] = inst_17275__$1);

(statearr_17355[(12)] = inst_17278__$1);

return statearr_17355;
})();
var statearr_17384_19045 = state_17335__$1;
(statearr_17384_19045[(2)] = null);

(statearr_17384_19045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (22))){
var state_17335__$1 = state_17335;
var statearr_17405_19050 = state_17335__$1;
(statearr_17405_19050[(2)] = null);

(statearr_17405_19050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (6))){
var inst_17264 = (state_17335[(13)]);
var inst_17273 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17264) : f.call(null,inst_17264));
var inst_17274 = cljs.core.seq(inst_17273);
var inst_17275 = inst_17274;
var inst_17276 = null;
var inst_17277 = (0);
var inst_17278 = (0);
var state_17335__$1 = (function (){var statearr_17413 = state_17335;
(statearr_17413[(8)] = inst_17277);

(statearr_17413[(10)] = inst_17276);

(statearr_17413[(11)] = inst_17275);

(statearr_17413[(12)] = inst_17278);

return statearr_17413;
})();
var statearr_17414_19062 = state_17335__$1;
(statearr_17414_19062[(2)] = null);

(statearr_17414_19062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (17))){
var inst_17289 = (state_17335[(7)]);
var inst_17296 = cljs.core.chunk_first(inst_17289);
var inst_17298 = cljs.core.chunk_rest(inst_17289);
var inst_17301 = cljs.core.count(inst_17296);
var inst_17275 = inst_17298;
var inst_17276 = inst_17296;
var inst_17277 = inst_17301;
var inst_17278 = (0);
var state_17335__$1 = (function (){var statearr_17415 = state_17335;
(statearr_17415[(8)] = inst_17277);

(statearr_17415[(10)] = inst_17276);

(statearr_17415[(11)] = inst_17275);

(statearr_17415[(12)] = inst_17278);

return statearr_17415;
})();
var statearr_17416_19081 = state_17335__$1;
(statearr_17416_19081[(2)] = null);

(statearr_17416_19081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (3))){
var inst_17333 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17335__$1,inst_17333);
} else {
if((state_val_17336 === (12))){
var inst_17321 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17420_19083 = state_17335__$1;
(statearr_17420_19083[(2)] = inst_17321);

(statearr_17420_19083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (2))){
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17335__$1,(4),in$);
} else {
if((state_val_17336 === (23))){
var inst_17329 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17421_19085 = state_17335__$1;
(statearr_17421_19085[(2)] = inst_17329);

(statearr_17421_19085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (19))){
var inst_17316 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17425_19086 = state_17335__$1;
(statearr_17425_19086[(2)] = inst_17316);

(statearr_17425_19086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (11))){
var inst_17289 = (state_17335[(7)]);
var inst_17275 = (state_17335[(11)]);
var inst_17289__$1 = cljs.core.seq(inst_17275);
var state_17335__$1 = (function (){var statearr_17429 = state_17335;
(statearr_17429[(7)] = inst_17289__$1);

return statearr_17429;
})();
if(inst_17289__$1){
var statearr_17430_19088 = state_17335__$1;
(statearr_17430_19088[(1)] = (14));

} else {
var statearr_17431_19091 = state_17335__$1;
(statearr_17431_19091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (9))){
var inst_17323 = (state_17335[(2)]);
var inst_17324 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17335__$1 = (function (){var statearr_17432 = state_17335;
(statearr_17432[(15)] = inst_17323);

return statearr_17432;
})();
if(cljs.core.truth_(inst_17324)){
var statearr_17433_19093 = state_17335__$1;
(statearr_17433_19093[(1)] = (21));

} else {
var statearr_17434_19094 = state_17335__$1;
(statearr_17434_19094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (5))){
var inst_17267 = cljs.core.async.close_BANG_(out);
var state_17335__$1 = state_17335;
var statearr_17435_19095 = state_17335__$1;
(statearr_17435_19095[(2)] = inst_17267);

(statearr_17435_19095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (14))){
var inst_17289 = (state_17335[(7)]);
var inst_17294 = cljs.core.chunked_seq_QMARK_(inst_17289);
var state_17335__$1 = state_17335;
if(inst_17294){
var statearr_17436_19096 = state_17335__$1;
(statearr_17436_19096[(1)] = (17));

} else {
var statearr_17439_19097 = state_17335__$1;
(statearr_17439_19097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (16))){
var inst_17319 = (state_17335[(2)]);
var state_17335__$1 = state_17335;
var statearr_17440_19098 = state_17335__$1;
(statearr_17440_19098[(2)] = inst_17319);

(statearr_17440_19098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17336 === (10))){
var inst_17276 = (state_17335[(10)]);
var inst_17278 = (state_17335[(12)]);
var inst_17283 = cljs.core._nth(inst_17276,inst_17278);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17335__$1,(13),out,inst_17283);
} else {
if((state_val_17336 === (18))){
var inst_17289 = (state_17335[(7)]);
var inst_17305 = cljs.core.first(inst_17289);
var state_17335__$1 = state_17335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17335__$1,(20),out,inst_17305);
} else {
if((state_val_17336 === (8))){
var inst_17277 = (state_17335[(8)]);
var inst_17278 = (state_17335[(12)]);
var inst_17280 = (inst_17278 < inst_17277);
var inst_17281 = inst_17280;
var state_17335__$1 = state_17335;
if(cljs.core.truth_(inst_17281)){
var statearr_17445_19099 = state_17335__$1;
(statearr_17445_19099[(1)] = (10));

} else {
var statearr_17446_19104 = state_17335__$1;
(statearr_17446_19104[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14085__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14085__auto____0 = (function (){
var statearr_17452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17452[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14085__auto__);

(statearr_17452[(1)] = (1));

return statearr_17452;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14085__auto____1 = (function (state_17335){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_17335);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17453){var ex__14088__auto__ = e17453;
var statearr_17454_19107 = state_17335;
(statearr_17454_19107[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_17335[(4)]))){
var statearr_17455_19108 = state_17335;
(statearr_17455_19108[(1)] = cljs.core.first((state_17335[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19111 = state_17335;
state_17335 = G__19111;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14085__auto__ = function(state_17335){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14085__auto____1.call(this,state_17335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14085__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14085__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17456 = f__14389__auto__();
(statearr_17456[(6)] = c__14388__auto__);

return statearr_17456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));

return c__14388__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17458 = arguments.length;
switch (G__17458) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17464 = arguments.length;
switch (G__17464) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14388__auto___19178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (7))){
var inst_17499 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17506_19184 = state_17504__$1;
(statearr_17506_19184[(2)] = inst_17499);

(statearr_17506_19184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (1))){
var inst_17479 = null;
var state_17504__$1 = (function (){var statearr_17510 = state_17504;
(statearr_17510[(7)] = inst_17479);

return statearr_17510;
})();
var statearr_17511_19200 = state_17504__$1;
(statearr_17511_19200[(2)] = null);

(statearr_17511_19200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (4))){
var inst_17482 = (state_17504[(8)]);
var inst_17482__$1 = (state_17504[(2)]);
var inst_17485 = (inst_17482__$1 == null);
var inst_17486 = cljs.core.not(inst_17485);
var state_17504__$1 = (function (){var statearr_17512 = state_17504;
(statearr_17512[(8)] = inst_17482__$1);

return statearr_17512;
})();
if(inst_17486){
var statearr_17513_19205 = state_17504__$1;
(statearr_17513_19205[(1)] = (5));

} else {
var statearr_17514_19210 = state_17504__$1;
(statearr_17514_19210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (6))){
var state_17504__$1 = state_17504;
var statearr_17515_19211 = state_17504__$1;
(statearr_17515_19211[(2)] = null);

(statearr_17515_19211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (3))){
var inst_17501 = (state_17504[(2)]);
var inst_17502 = cljs.core.async.close_BANG_(out);
var state_17504__$1 = (function (){var statearr_17518 = state_17504;
(statearr_17518[(9)] = inst_17501);

return statearr_17518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17504__$1,inst_17502);
} else {
if((state_val_17505 === (2))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17504__$1,(4),ch);
} else {
if((state_val_17505 === (11))){
var inst_17482 = (state_17504[(8)]);
var inst_17493 = (state_17504[(2)]);
var inst_17479 = inst_17482;
var state_17504__$1 = (function (){var statearr_17525 = state_17504;
(statearr_17525[(10)] = inst_17493);

(statearr_17525[(7)] = inst_17479);

return statearr_17525;
})();
var statearr_17535_19239 = state_17504__$1;
(statearr_17535_19239[(2)] = null);

(statearr_17535_19239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (9))){
var inst_17482 = (state_17504[(8)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17504__$1,(11),out,inst_17482);
} else {
if((state_val_17505 === (5))){
var inst_17482 = (state_17504[(8)]);
var inst_17479 = (state_17504[(7)]);
var inst_17488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17482,inst_17479);
var state_17504__$1 = state_17504;
if(inst_17488){
var statearr_17537_19243 = state_17504__$1;
(statearr_17537_19243[(1)] = (8));

} else {
var statearr_17538_19245 = state_17504__$1;
(statearr_17538_19245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (10))){
var inst_17496 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17539_19499 = state_17504__$1;
(statearr_17539_19499[(2)] = inst_17496);

(statearr_17539_19499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (8))){
var inst_17479 = (state_17504[(7)]);
var tmp17536 = inst_17479;
var inst_17479__$1 = tmp17536;
var state_17504__$1 = (function (){var statearr_17540 = state_17504;
(statearr_17540[(7)] = inst_17479__$1);

return statearr_17540;
})();
var statearr_17541_19617 = state_17504__$1;
(statearr_17541_19617[(2)] = null);

(statearr_17541_19617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_17542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17542[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_17542[(1)] = (1));

return statearr_17542;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_17504){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_17504);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17543){var ex__14088__auto__ = e17543;
var statearr_17544_19619 = state_17504;
(statearr_17544_19619[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_17504[(4)]))){
var statearr_17545_19620 = state_17504;
(statearr_17545_19620[(1)] = cljs.core.first((state_17504[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19622 = state_17504;
state_17504 = G__19622;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17547 = f__14389__auto__();
(statearr_17547[(6)] = c__14388__auto___19178);

return statearr_17547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17553 = arguments.length;
switch (G__17553) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14388__auto___19625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_17592){
var state_val_17593 = (state_17592[(1)]);
if((state_val_17593 === (7))){
var inst_17588 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
var statearr_17601_19626 = state_17592__$1;
(statearr_17601_19626[(2)] = inst_17588);

(statearr_17601_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (1))){
var inst_17555 = (new Array(n));
var inst_17556 = inst_17555;
var inst_17557 = (0);
var state_17592__$1 = (function (){var statearr_17602 = state_17592;
(statearr_17602[(7)] = inst_17556);

(statearr_17602[(8)] = inst_17557);

return statearr_17602;
})();
var statearr_17603_19628 = state_17592__$1;
(statearr_17603_19628[(2)] = null);

(statearr_17603_19628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (4))){
var inst_17560 = (state_17592[(9)]);
var inst_17560__$1 = (state_17592[(2)]);
var inst_17561 = (inst_17560__$1 == null);
var inst_17562 = cljs.core.not(inst_17561);
var state_17592__$1 = (function (){var statearr_17606 = state_17592;
(statearr_17606[(9)] = inst_17560__$1);

return statearr_17606;
})();
if(inst_17562){
var statearr_17607_19629 = state_17592__$1;
(statearr_17607_19629[(1)] = (5));

} else {
var statearr_17608_19630 = state_17592__$1;
(statearr_17608_19630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (15))){
var inst_17582 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
var statearr_17609_19631 = state_17592__$1;
(statearr_17609_19631[(2)] = inst_17582);

(statearr_17609_19631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (13))){
var state_17592__$1 = state_17592;
var statearr_17610_19632 = state_17592__$1;
(statearr_17610_19632[(2)] = null);

(statearr_17610_19632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (6))){
var inst_17557 = (state_17592[(8)]);
var inst_17578 = (inst_17557 > (0));
var state_17592__$1 = state_17592;
if(cljs.core.truth_(inst_17578)){
var statearr_17613_19633 = state_17592__$1;
(statearr_17613_19633[(1)] = (12));

} else {
var statearr_17614_19634 = state_17592__$1;
(statearr_17614_19634[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (3))){
var inst_17590 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17592__$1,inst_17590);
} else {
if((state_val_17593 === (12))){
var inst_17556 = (state_17592[(7)]);
var inst_17580 = cljs.core.vec(inst_17556);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17592__$1,(15),out,inst_17580);
} else {
if((state_val_17593 === (2))){
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17592__$1,(4),ch);
} else {
if((state_val_17593 === (11))){
var inst_17572 = (state_17592[(2)]);
var inst_17573 = (new Array(n));
var inst_17556 = inst_17573;
var inst_17557 = (0);
var state_17592__$1 = (function (){var statearr_17618 = state_17592;
(statearr_17618[(10)] = inst_17572);

(statearr_17618[(7)] = inst_17556);

(statearr_17618[(8)] = inst_17557);

return statearr_17618;
})();
var statearr_17619_19635 = state_17592__$1;
(statearr_17619_19635[(2)] = null);

(statearr_17619_19635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (9))){
var inst_17556 = (state_17592[(7)]);
var inst_17570 = cljs.core.vec(inst_17556);
var state_17592__$1 = state_17592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17592__$1,(11),out,inst_17570);
} else {
if((state_val_17593 === (5))){
var inst_17565 = (state_17592[(11)]);
var inst_17556 = (state_17592[(7)]);
var inst_17560 = (state_17592[(9)]);
var inst_17557 = (state_17592[(8)]);
var inst_17564 = (inst_17556[inst_17557] = inst_17560);
var inst_17565__$1 = (inst_17557 + (1));
var inst_17566 = (inst_17565__$1 < n);
var state_17592__$1 = (function (){var statearr_17620 = state_17592;
(statearr_17620[(12)] = inst_17564);

(statearr_17620[(11)] = inst_17565__$1);

return statearr_17620;
})();
if(cljs.core.truth_(inst_17566)){
var statearr_17621_19637 = state_17592__$1;
(statearr_17621_19637[(1)] = (8));

} else {
var statearr_17622_19638 = state_17592__$1;
(statearr_17622_19638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (14))){
var inst_17585 = (state_17592[(2)]);
var inst_17586 = cljs.core.async.close_BANG_(out);
var state_17592__$1 = (function (){var statearr_17624 = state_17592;
(statearr_17624[(13)] = inst_17585);

return statearr_17624;
})();
var statearr_17625_19639 = state_17592__$1;
(statearr_17625_19639[(2)] = inst_17586);

(statearr_17625_19639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (10))){
var inst_17576 = (state_17592[(2)]);
var state_17592__$1 = state_17592;
var statearr_17626_19640 = state_17592__$1;
(statearr_17626_19640[(2)] = inst_17576);

(statearr_17626_19640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17593 === (8))){
var inst_17565 = (state_17592[(11)]);
var inst_17556 = (state_17592[(7)]);
var tmp17623 = inst_17556;
var inst_17556__$1 = tmp17623;
var inst_17557 = inst_17565;
var state_17592__$1 = (function (){var statearr_17627 = state_17592;
(statearr_17627[(7)] = inst_17556__$1);

(statearr_17627[(8)] = inst_17557);

return statearr_17627;
})();
var statearr_17628_19641 = state_17592__$1;
(statearr_17628_19641[(2)] = null);

(statearr_17628_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_17630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17630[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_17630[(1)] = (1));

return statearr_17630;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_17592){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_17592);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17631){var ex__14088__auto__ = e17631;
var statearr_17632_19642 = state_17592;
(statearr_17632_19642[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_17592[(4)]))){
var statearr_17633_19643 = state_17592;
(statearr_17633_19643[(1)] = cljs.core.first((state_17592[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19644 = state_17592;
state_17592 = G__19644;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_17592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_17592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17634 = f__14389__auto__();
(statearr_17634[(6)] = c__14388__auto___19625);

return statearr_17634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17642 = arguments.length;
switch (G__17642) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14388__auto___19655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14389__auto__ = (function (){var switch__14084__auto__ = (function (state_17735){
var state_val_17736 = (state_17735[(1)]);
if((state_val_17736 === (7))){
var inst_17728 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17744_19660 = state_17735__$1;
(statearr_17744_19660[(2)] = inst_17728);

(statearr_17744_19660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (1))){
var inst_17665 = [];
var inst_17669 = inst_17665;
var inst_17670 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17735__$1 = (function (){var statearr_17758 = state_17735;
(statearr_17758[(7)] = inst_17670);

(statearr_17758[(8)] = inst_17669);

return statearr_17758;
})();
var statearr_17761_19666 = state_17735__$1;
(statearr_17761_19666[(2)] = null);

(statearr_17761_19666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (4))){
var inst_17673 = (state_17735[(9)]);
var inst_17673__$1 = (state_17735[(2)]);
var inst_17674 = (inst_17673__$1 == null);
var inst_17675 = cljs.core.not(inst_17674);
var state_17735__$1 = (function (){var statearr_17763 = state_17735;
(statearr_17763[(9)] = inst_17673__$1);

return statearr_17763;
})();
if(inst_17675){
var statearr_17764_19679 = state_17735__$1;
(statearr_17764_19679[(1)] = (5));

} else {
var statearr_17765_19680 = state_17735__$1;
(statearr_17765_19680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (15))){
var inst_17669 = (state_17735[(8)]);
var inst_17717 = cljs.core.vec(inst_17669);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17735__$1,(18),out,inst_17717);
} else {
if((state_val_17736 === (13))){
var inst_17708 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17766_19686 = state_17735__$1;
(statearr_17766_19686[(2)] = inst_17708);

(statearr_17766_19686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (6))){
var inst_17669 = (state_17735[(8)]);
var inst_17710 = inst_17669.length;
var inst_17711 = (inst_17710 > (0));
var state_17735__$1 = state_17735;
if(cljs.core.truth_(inst_17711)){
var statearr_17767_19687 = state_17735__$1;
(statearr_17767_19687[(1)] = (15));

} else {
var statearr_17780_19688 = state_17735__$1;
(statearr_17780_19688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (17))){
var inst_17722 = (state_17735[(2)]);
var inst_17726 = cljs.core.async.close_BANG_(out);
var state_17735__$1 = (function (){var statearr_17783 = state_17735;
(statearr_17783[(10)] = inst_17722);

return statearr_17783;
})();
var statearr_17784_19690 = state_17735__$1;
(statearr_17784_19690[(2)] = inst_17726);

(statearr_17784_19690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (3))){
var inst_17730 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17735__$1,inst_17730);
} else {
if((state_val_17736 === (12))){
var inst_17669 = (state_17735[(8)]);
var inst_17698 = cljs.core.vec(inst_17669);
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17735__$1,(14),out,inst_17698);
} else {
if((state_val_17736 === (2))){
var state_17735__$1 = state_17735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17735__$1,(4),ch);
} else {
if((state_val_17736 === (11))){
var inst_17677 = (state_17735[(11)]);
var inst_17673 = (state_17735[(9)]);
var inst_17669 = (state_17735[(8)]);
var inst_17695 = inst_17669.push(inst_17673);
var tmp17785 = inst_17669;
var inst_17669__$1 = tmp17785;
var inst_17670 = inst_17677;
var state_17735__$1 = (function (){var statearr_17786 = state_17735;
(statearr_17786[(7)] = inst_17670);

(statearr_17786[(12)] = inst_17695);

(statearr_17786[(8)] = inst_17669__$1);

return statearr_17786;
})();
var statearr_17787_19695 = state_17735__$1;
(statearr_17787_19695[(2)] = null);

(statearr_17787_19695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (9))){
var inst_17670 = (state_17735[(7)]);
var inst_17681 = cljs.core.keyword_identical_QMARK_(inst_17670,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17735__$1 = state_17735;
var statearr_17790_19696 = state_17735__$1;
(statearr_17790_19696[(2)] = inst_17681);

(statearr_17790_19696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (5))){
var inst_17678 = (state_17735[(13)]);
var inst_17670 = (state_17735[(7)]);
var inst_17677 = (state_17735[(11)]);
var inst_17673 = (state_17735[(9)]);
var inst_17677__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17673) : f.call(null,inst_17673));
var inst_17678__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17677__$1,inst_17670);
var state_17735__$1 = (function (){var statearr_17791 = state_17735;
(statearr_17791[(13)] = inst_17678__$1);

(statearr_17791[(11)] = inst_17677__$1);

return statearr_17791;
})();
if(inst_17678__$1){
var statearr_17792_19697 = state_17735__$1;
(statearr_17792_19697[(1)] = (8));

} else {
var statearr_17793_19698 = state_17735__$1;
(statearr_17793_19698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (14))){
var inst_17677 = (state_17735[(11)]);
var inst_17673 = (state_17735[(9)]);
var inst_17700 = (state_17735[(2)]);
var inst_17701 = [];
var inst_17705 = inst_17701.push(inst_17673);
var inst_17669 = inst_17701;
var inst_17670 = inst_17677;
var state_17735__$1 = (function (){var statearr_17794 = state_17735;
(statearr_17794[(7)] = inst_17670);

(statearr_17794[(14)] = inst_17700);

(statearr_17794[(15)] = inst_17705);

(statearr_17794[(8)] = inst_17669);

return statearr_17794;
})();
var statearr_17796_19707 = state_17735__$1;
(statearr_17796_19707[(2)] = null);

(statearr_17796_19707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (16))){
var state_17735__$1 = state_17735;
var statearr_17798_19708 = state_17735__$1;
(statearr_17798_19708[(2)] = null);

(statearr_17798_19708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (10))){
var inst_17693 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
if(cljs.core.truth_(inst_17693)){
var statearr_17814_19709 = state_17735__$1;
(statearr_17814_19709[(1)] = (11));

} else {
var statearr_17815_19710 = state_17735__$1;
(statearr_17815_19710[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (18))){
var inst_17719 = (state_17735[(2)]);
var state_17735__$1 = state_17735;
var statearr_17816_19711 = state_17735__$1;
(statearr_17816_19711[(2)] = inst_17719);

(statearr_17816_19711[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17736 === (8))){
var inst_17678 = (state_17735[(13)]);
var state_17735__$1 = state_17735;
var statearr_17817_19713 = state_17735__$1;
(statearr_17817_19713[(2)] = inst_17678);

(statearr_17817_19713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14085__auto__ = null;
var cljs$core$async$state_machine__14085__auto____0 = (function (){
var statearr_17818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17818[(0)] = cljs$core$async$state_machine__14085__auto__);

(statearr_17818[(1)] = (1));

return statearr_17818;
});
var cljs$core$async$state_machine__14085__auto____1 = (function (state_17735){
while(true){
var ret_value__14086__auto__ = (function (){try{while(true){
var result__14087__auto__ = switch__14084__auto__(state_17735);
if(cljs.core.keyword_identical_QMARK_(result__14087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14087__auto__;
}
break;
}
}catch (e17819){var ex__14088__auto__ = e17819;
var statearr_17820_19715 = state_17735;
(statearr_17820_19715[(2)] = ex__14088__auto__);


if(cljs.core.seq((state_17735[(4)]))){
var statearr_17821_19716 = state_17735;
(statearr_17821_19716[(1)] = cljs.core.first((state_17735[(4)])));

} else {
throw ex__14088__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14086__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19717 = state_17735;
state_17735 = G__19717;
continue;
} else {
return ret_value__14086__auto__;
}
break;
}
});
cljs$core$async$state_machine__14085__auto__ = function(state_17735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14085__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14085__auto____1.call(this,state_17735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14085__auto____0;
cljs$core$async$state_machine__14085__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14085__auto____1;
return cljs$core$async$state_machine__14085__auto__;
})()
})();
var state__14390__auto__ = (function (){var statearr_17825 = f__14389__auto__();
(statearr_17825[(6)] = c__14388__auto___19655);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14390__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
