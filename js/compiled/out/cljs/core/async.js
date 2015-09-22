// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26651 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26651 = (function (fn_handler,f,meta26652){
this.fn_handler = fn_handler;
this.f = f;
this.meta26652 = meta26652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26653,meta26652__$1){
var self__ = this;
var _26653__$1 = this;
return (new cljs.core.async.t26651(self__.fn_handler,self__.f,meta26652__$1));
});

cljs.core.async.t26651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26653){
var self__ = this;
var _26653__$1 = this;
return self__.meta26652;
});

cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26652","meta26652",623543758,null)], null);
});

cljs.core.async.t26651.cljs$lang$type = true;

cljs.core.async.t26651.cljs$lang$ctorStr = "cljs.core.async/t26651";

cljs.core.async.t26651.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t26651");
});

cljs.core.async.__GT_t26651 = (function cljs$core$async$fn_handler_$___GT_t26651(fn_handler__$1,f__$1,meta26652){
return (new cljs.core.async.t26651(fn_handler__$1,f__$1,meta26652));
});

}

return (new cljs.core.async.t26651(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args26656 = [];
var len__19567__auto___26659 = arguments.length;
var i__19568__auto___26660 = (0);
while(true){
if((i__19568__auto___26660 < len__19567__auto___26659)){
args26656.push((arguments[i__19568__auto___26660]));

var G__26661 = (i__19568__auto___26660 + (1));
i__19568__auto___26660 = G__26661;
continue;
} else {
}
break;
}

var G__26658 = args26656.length;
switch (G__26658) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26656.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args26663 = [];
var len__19567__auto___26666 = arguments.length;
var i__19568__auto___26667 = (0);
while(true){
if((i__19568__auto___26667 < len__19567__auto___26666)){
args26663.push((arguments[i__19568__auto___26667]));

var G__26668 = (i__19568__auto___26667 + (1));
i__19568__auto___26667 = G__26668;
continue;
} else {
}
break;
}

var G__26665 = args26663.length;
switch (G__26665) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26663.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26670 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26670);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26670,ret){
return (function (){
return fn1.call(null,val_26670);
});})(val_26670,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args26671 = [];
var len__19567__auto___26674 = arguments.length;
var i__19568__auto___26675 = (0);
while(true){
if((i__19568__auto___26675 < len__19567__auto___26674)){
args26671.push((arguments[i__19568__auto___26675]));

var G__26676 = (i__19568__auto___26675 + (1));
i__19568__auto___26675 = G__26676;
continue;
} else {
}
break;
}

var G__26673 = args26671.length;
switch (G__26673) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26671.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19412__auto___26678 = n;
var x_26679 = (0);
while(true){
if((x_26679 < n__19412__auto___26678)){
(a[x_26679] = (0));

var G__26680 = (x_26679 + (1));
x_26679 = G__26680;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26681 = (i + (1));
i = G__26681;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26685 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26685 = (function (alt_flag,flag,meta26686){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26686 = meta26686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26687,meta26686__$1){
var self__ = this;
var _26687__$1 = this;
return (new cljs.core.async.t26685(self__.alt_flag,self__.flag,meta26686__$1));
});})(flag))
;

cljs.core.async.t26685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26687){
var self__ = this;
var _26687__$1 = this;
return self__.meta26686;
});})(flag))
;

cljs.core.async.t26685.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26685.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26686","meta26686",-899972688,null)], null);
});})(flag))
;

cljs.core.async.t26685.cljs$lang$type = true;

cljs.core.async.t26685.cljs$lang$ctorStr = "cljs.core.async/t26685";

cljs.core.async.t26685.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t26685");
});})(flag))
;

cljs.core.async.__GT_t26685 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26685(alt_flag__$1,flag__$1,meta26686){
return (new cljs.core.async.t26685(alt_flag__$1,flag__$1,meta26686));
});})(flag))
;

}

return (new cljs.core.async.t26685(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26691 = (function (alt_handler,flag,cb,meta26692){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26692 = meta26692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26693,meta26692__$1){
var self__ = this;
var _26693__$1 = this;
return (new cljs.core.async.t26691(self__.alt_handler,self__.flag,self__.cb,meta26692__$1));
});

cljs.core.async.t26691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26693){
var self__ = this;
var _26693__$1 = this;
return self__.meta26692;
});

cljs.core.async.t26691.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26692","meta26692",-2005866360,null)], null);
});

cljs.core.async.t26691.cljs$lang$type = true;

cljs.core.async.t26691.cljs$lang$ctorStr = "cljs.core.async/t26691";

cljs.core.async.t26691.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t26691");
});

cljs.core.async.__GT_t26691 = (function cljs$core$async$alt_handler_$___GT_t26691(alt_handler__$1,flag__$1,cb__$1,meta26692){
return (new cljs.core.async.t26691(alt_handler__$1,flag__$1,cb__$1,meta26692));
});

}

return (new cljs.core.async.t26691(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26694_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26694_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26695_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26695_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18528__auto__ = wport;
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26696 = (i + (1));
i = G__26696;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18528__auto__ = ret;
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18516__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18516__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18516__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__19574__auto__ = [];
var len__19567__auto___26702 = arguments.length;
var i__19568__auto___26703 = (0);
while(true){
if((i__19568__auto___26703 < len__19567__auto___26702)){
args__19574__auto__.push((arguments[i__19568__auto___26703]));

var G__26704 = (i__19568__auto___26703 + (1));
i__19568__auto___26703 = G__26704;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((1) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19575__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26699){
var map__26700 = p__26699;
var map__26700__$1 = ((((!((map__26700 == null)))?((((map__26700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26700):map__26700);
var opts = map__26700__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26697){
var G__26698 = cljs.core.first.call(null,seq26697);
var seq26697__$1 = cljs.core.next.call(null,seq26697);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26698,seq26697__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args26705 = [];
var len__19567__auto___26755 = arguments.length;
var i__19568__auto___26756 = (0);
while(true){
if((i__19568__auto___26756 < len__19567__auto___26755)){
args26705.push((arguments[i__19568__auto___26756]));

var G__26757 = (i__19568__auto___26756 + (1));
i__19568__auto___26756 = G__26757;
continue;
} else {
}
break;
}

var G__26707 = args26705.length;
switch (G__26707) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26705.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21978__auto___26759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___26759){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___26759){
return (function (state_26731){
var state_val_26732 = (state_26731[(1)]);
if((state_val_26732 === (7))){
var inst_26727 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26733_26760 = state_26731__$1;
(statearr_26733_26760[(2)] = inst_26727);

(statearr_26733_26760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (1))){
var state_26731__$1 = state_26731;
var statearr_26734_26761 = state_26731__$1;
(statearr_26734_26761[(2)] = null);

(statearr_26734_26761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (4))){
var inst_26710 = (state_26731[(7)]);
var inst_26710__$1 = (state_26731[(2)]);
var inst_26711 = (inst_26710__$1 == null);
var state_26731__$1 = (function (){var statearr_26735 = state_26731;
(statearr_26735[(7)] = inst_26710__$1);

return statearr_26735;
})();
if(cljs.core.truth_(inst_26711)){
var statearr_26736_26762 = state_26731__$1;
(statearr_26736_26762[(1)] = (5));

} else {
var statearr_26737_26763 = state_26731__$1;
(statearr_26737_26763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (13))){
var state_26731__$1 = state_26731;
var statearr_26738_26764 = state_26731__$1;
(statearr_26738_26764[(2)] = null);

(statearr_26738_26764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (6))){
var inst_26710 = (state_26731[(7)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26731__$1,(11),to,inst_26710);
} else {
if((state_val_26732 === (3))){
var inst_26729 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26731__$1,inst_26729);
} else {
if((state_val_26732 === (12))){
var state_26731__$1 = state_26731;
var statearr_26739_26765 = state_26731__$1;
(statearr_26739_26765[(2)] = null);

(statearr_26739_26765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (2))){
var state_26731__$1 = state_26731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26731__$1,(4),from);
} else {
if((state_val_26732 === (11))){
var inst_26720 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
if(cljs.core.truth_(inst_26720)){
var statearr_26740_26766 = state_26731__$1;
(statearr_26740_26766[(1)] = (12));

} else {
var statearr_26741_26767 = state_26731__$1;
(statearr_26741_26767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (9))){
var state_26731__$1 = state_26731;
var statearr_26742_26768 = state_26731__$1;
(statearr_26742_26768[(2)] = null);

(statearr_26742_26768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (5))){
var state_26731__$1 = state_26731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26743_26769 = state_26731__$1;
(statearr_26743_26769[(1)] = (8));

} else {
var statearr_26744_26770 = state_26731__$1;
(statearr_26744_26770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (14))){
var inst_26725 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26745_26771 = state_26731__$1;
(statearr_26745_26771[(2)] = inst_26725);

(statearr_26745_26771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (10))){
var inst_26717 = (state_26731[(2)]);
var state_26731__$1 = state_26731;
var statearr_26746_26772 = state_26731__$1;
(statearr_26746_26772[(2)] = inst_26717);

(statearr_26746_26772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26732 === (8))){
var inst_26714 = cljs.core.async.close_BANG_.call(null,to);
var state_26731__$1 = state_26731;
var statearr_26747_26773 = state_26731__$1;
(statearr_26747_26773[(2)] = inst_26714);

(statearr_26747_26773[(1)] = (10));


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
});})(c__21978__auto___26759))
;
return ((function (switch__21913__auto__,c__21978__auto___26759){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_26751 = [null,null,null,null,null,null,null,null];
(statearr_26751[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_26751[(1)] = (1));

return statearr_26751;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_26731){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_26731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e26752){if((e26752 instanceof Object)){
var ex__21917__auto__ = e26752;
var statearr_26753_26774 = state_26731;
(statearr_26753_26774[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26775 = state_26731;
state_26731 = G__26775;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_26731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_26731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___26759))
})();
var state__21980__auto__ = (function (){var statearr_26754 = f__21979__auto__.call(null);
(statearr_26754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___26759);

return statearr_26754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___26759))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26959){
var vec__26960 = p__26959;
var v = cljs.core.nth.call(null,vec__26960,(0),null);
var p = cljs.core.nth.call(null,vec__26960,(1),null);
var job = vec__26960;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21978__auto___27142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___27142,res,vec__26960,v,p,job,jobs,results){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___27142,res,vec__26960,v,p,job,jobs,results){
return (function (state_26965){
var state_val_26966 = (state_26965[(1)]);
if((state_val_26966 === (1))){
var state_26965__$1 = state_26965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26965__$1,(2),res,v);
} else {
if((state_val_26966 === (2))){
var inst_26962 = (state_26965[(2)]);
var inst_26963 = cljs.core.async.close_BANG_.call(null,res);
var state_26965__$1 = (function (){var statearr_26967 = state_26965;
(statearr_26967[(7)] = inst_26962);

return statearr_26967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26965__$1,inst_26963);
} else {
return null;
}
}
});})(c__21978__auto___27142,res,vec__26960,v,p,job,jobs,results))
;
return ((function (switch__21913__auto__,c__21978__auto___27142,res,vec__26960,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0 = (function (){
var statearr_26971 = [null,null,null,null,null,null,null,null];
(statearr_26971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__);

(statearr_26971[(1)] = (1));

return statearr_26971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1 = (function (state_26965){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_26965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e26972){if((e26972 instanceof Object)){
var ex__21917__auto__ = e26972;
var statearr_26973_27143 = state_26965;
(statearr_26973_27143[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27144 = state_26965;
state_26965 = G__27144;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = function(state_26965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1.call(this,state_26965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___27142,res,vec__26960,v,p,job,jobs,results))
})();
var state__21980__auto__ = (function (){var statearr_26974 = f__21979__auto__.call(null);
(statearr_26974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___27142);

return statearr_26974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___27142,res,vec__26960,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26975){
var vec__26976 = p__26975;
var v = cljs.core.nth.call(null,vec__26976,(0),null);
var p = cljs.core.nth.call(null,vec__26976,(1),null);
var job = vec__26976;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19412__auto___27145 = n;
var __27146 = (0);
while(true){
if((__27146 < n__19412__auto___27145)){
var G__26977_27147 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26977_27147) {
case "compute":
var c__21978__auto___27149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27146,c__21978__auto___27149,G__26977_27147,n__19412__auto___27145,jobs,results,process,async){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (__27146,c__21978__auto___27149,G__26977_27147,n__19412__auto___27145,jobs,results,process,async){
return (function (state_26990){
var state_val_26991 = (state_26990[(1)]);
if((state_val_26991 === (1))){
var state_26990__$1 = state_26990;
var statearr_26992_27150 = state_26990__$1;
(statearr_26992_27150[(2)] = null);

(statearr_26992_27150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (2))){
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26990__$1,(4),jobs);
} else {
if((state_val_26991 === (3))){
var inst_26988 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26990__$1,inst_26988);
} else {
if((state_val_26991 === (4))){
var inst_26980 = (state_26990[(2)]);
var inst_26981 = process.call(null,inst_26980);
var state_26990__$1 = state_26990;
if(cljs.core.truth_(inst_26981)){
var statearr_26993_27151 = state_26990__$1;
(statearr_26993_27151[(1)] = (5));

} else {
var statearr_26994_27152 = state_26990__$1;
(statearr_26994_27152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (5))){
var state_26990__$1 = state_26990;
var statearr_26995_27153 = state_26990__$1;
(statearr_26995_27153[(2)] = null);

(statearr_26995_27153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (6))){
var state_26990__$1 = state_26990;
var statearr_26996_27154 = state_26990__$1;
(statearr_26996_27154[(2)] = null);

(statearr_26996_27154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26991 === (7))){
var inst_26986 = (state_26990[(2)]);
var state_26990__$1 = state_26990;
var statearr_26997_27155 = state_26990__$1;
(statearr_26997_27155[(2)] = inst_26986);

(statearr_26997_27155[(1)] = (3));


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
});})(__27146,c__21978__auto___27149,G__26977_27147,n__19412__auto___27145,jobs,results,process,async))
;
return ((function (__27146,switch__21913__auto__,c__21978__auto___27149,G__26977_27147,n__19412__auto___27145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0 = (function (){
var statearr_27001 = [null,null,null,null,null,null,null];
(statearr_27001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__);

(statearr_27001[(1)] = (1));

return statearr_27001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1 = (function (state_26990){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_26990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27002){if((e27002 instanceof Object)){
var ex__21917__auto__ = e27002;
var statearr_27003_27156 = state_26990;
(statearr_27003_27156[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27157 = state_26990;
state_26990 = G__27157;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = function(state_26990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1.call(this,state_26990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__;
})()
;})(__27146,switch__21913__auto__,c__21978__auto___27149,G__26977_27147,n__19412__auto___27145,jobs,results,process,async))
})();
var state__21980__auto__ = (function (){var statearr_27004 = f__21979__auto__.call(null);
(statearr_27004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___27149);

return statearr_27004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(__27146,c__21978__auto___27149,G__26977_27147,n__19412__auto___27145,jobs,results,process,async))
);


break;
case "async":
var c__21978__auto___27158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27146,c__21978__auto___27158,G__26977_27147,n__19412__auto___27145,jobs,results,process,async){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (__27146,c__21978__auto___27158,G__26977_27147,n__19412__auto___27145,jobs,results,process,async){
return (function (state_27017){
var state_val_27018 = (state_27017[(1)]);
if((state_val_27018 === (1))){
var state_27017__$1 = state_27017;
var statearr_27019_27159 = state_27017__$1;
(statearr_27019_27159[(2)] = null);

(statearr_27019_27159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (2))){
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27017__$1,(4),jobs);
} else {
if((state_val_27018 === (3))){
var inst_27015 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27017__$1,inst_27015);
} else {
if((state_val_27018 === (4))){
var inst_27007 = (state_27017[(2)]);
var inst_27008 = async.call(null,inst_27007);
var state_27017__$1 = state_27017;
if(cljs.core.truth_(inst_27008)){
var statearr_27020_27160 = state_27017__$1;
(statearr_27020_27160[(1)] = (5));

} else {
var statearr_27021_27161 = state_27017__$1;
(statearr_27021_27161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (5))){
var state_27017__$1 = state_27017;
var statearr_27022_27162 = state_27017__$1;
(statearr_27022_27162[(2)] = null);

(statearr_27022_27162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (6))){
var state_27017__$1 = state_27017;
var statearr_27023_27163 = state_27017__$1;
(statearr_27023_27163[(2)] = null);

(statearr_27023_27163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (7))){
var inst_27013 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
var statearr_27024_27164 = state_27017__$1;
(statearr_27024_27164[(2)] = inst_27013);

(statearr_27024_27164[(1)] = (3));


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
});})(__27146,c__21978__auto___27158,G__26977_27147,n__19412__auto___27145,jobs,results,process,async))
;
return ((function (__27146,switch__21913__auto__,c__21978__auto___27158,G__26977_27147,n__19412__auto___27145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0 = (function (){
var statearr_27028 = [null,null,null,null,null,null,null];
(statearr_27028[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__);

(statearr_27028[(1)] = (1));

return statearr_27028;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1 = (function (state_27017){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27029){if((e27029 instanceof Object)){
var ex__21917__auto__ = e27029;
var statearr_27030_27165 = state_27017;
(statearr_27030_27165[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27166 = state_27017;
state_27017 = G__27166;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = function(state_27017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1.call(this,state_27017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__;
})()
;})(__27146,switch__21913__auto__,c__21978__auto___27158,G__26977_27147,n__19412__auto___27145,jobs,results,process,async))
})();
var state__21980__auto__ = (function (){var statearr_27031 = f__21979__auto__.call(null);
(statearr_27031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___27158);

return statearr_27031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(__27146,c__21978__auto___27158,G__26977_27147,n__19412__auto___27145,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27167 = (__27146 + (1));
__27146 = G__27167;
continue;
} else {
}
break;
}

var c__21978__auto___27168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___27168,jobs,results,process,async){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___27168,jobs,results,process,async){
return (function (state_27053){
var state_val_27054 = (state_27053[(1)]);
if((state_val_27054 === (1))){
var state_27053__$1 = state_27053;
var statearr_27055_27169 = state_27053__$1;
(statearr_27055_27169[(2)] = null);

(statearr_27055_27169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (2))){
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27053__$1,(4),from);
} else {
if((state_val_27054 === (3))){
var inst_27051 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27053__$1,inst_27051);
} else {
if((state_val_27054 === (4))){
var inst_27034 = (state_27053[(7)]);
var inst_27034__$1 = (state_27053[(2)]);
var inst_27035 = (inst_27034__$1 == null);
var state_27053__$1 = (function (){var statearr_27056 = state_27053;
(statearr_27056[(7)] = inst_27034__$1);

return statearr_27056;
})();
if(cljs.core.truth_(inst_27035)){
var statearr_27057_27170 = state_27053__$1;
(statearr_27057_27170[(1)] = (5));

} else {
var statearr_27058_27171 = state_27053__$1;
(statearr_27058_27171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (5))){
var inst_27037 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27053__$1 = state_27053;
var statearr_27059_27172 = state_27053__$1;
(statearr_27059_27172[(2)] = inst_27037);

(statearr_27059_27172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (6))){
var inst_27034 = (state_27053[(7)]);
var inst_27039 = (state_27053[(8)]);
var inst_27039__$1 = cljs.core.async.chan.call(null,(1));
var inst_27040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27041 = [inst_27034,inst_27039__$1];
var inst_27042 = (new cljs.core.PersistentVector(null,2,(5),inst_27040,inst_27041,null));
var state_27053__$1 = (function (){var statearr_27060 = state_27053;
(statearr_27060[(8)] = inst_27039__$1);

return statearr_27060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27053__$1,(8),jobs,inst_27042);
} else {
if((state_val_27054 === (7))){
var inst_27049 = (state_27053[(2)]);
var state_27053__$1 = state_27053;
var statearr_27061_27173 = state_27053__$1;
(statearr_27061_27173[(2)] = inst_27049);

(statearr_27061_27173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27054 === (8))){
var inst_27039 = (state_27053[(8)]);
var inst_27044 = (state_27053[(2)]);
var state_27053__$1 = (function (){var statearr_27062 = state_27053;
(statearr_27062[(9)] = inst_27044);

return statearr_27062;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27053__$1,(9),results,inst_27039);
} else {
if((state_val_27054 === (9))){
var inst_27046 = (state_27053[(2)]);
var state_27053__$1 = (function (){var statearr_27063 = state_27053;
(statearr_27063[(10)] = inst_27046);

return statearr_27063;
})();
var statearr_27064_27174 = state_27053__$1;
(statearr_27064_27174[(2)] = null);

(statearr_27064_27174[(1)] = (2));


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
});})(c__21978__auto___27168,jobs,results,process,async))
;
return ((function (switch__21913__auto__,c__21978__auto___27168,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0 = (function (){
var statearr_27068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__);

(statearr_27068[(1)] = (1));

return statearr_27068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1 = (function (state_27053){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27069){if((e27069 instanceof Object)){
var ex__21917__auto__ = e27069;
var statearr_27070_27175 = state_27053;
(statearr_27070_27175[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27176 = state_27053;
state_27053 = G__27176;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = function(state_27053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1.call(this,state_27053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___27168,jobs,results,process,async))
})();
var state__21980__auto__ = (function (){var statearr_27071 = f__21979__auto__.call(null);
(statearr_27071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___27168);

return statearr_27071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___27168,jobs,results,process,async))
);


var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__,jobs,results,process,async){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__,jobs,results,process,async){
return (function (state_27109){
var state_val_27110 = (state_27109[(1)]);
if((state_val_27110 === (7))){
var inst_27105 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27111_27177 = state_27109__$1;
(statearr_27111_27177[(2)] = inst_27105);

(statearr_27111_27177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (20))){
var state_27109__$1 = state_27109;
var statearr_27112_27178 = state_27109__$1;
(statearr_27112_27178[(2)] = null);

(statearr_27112_27178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (1))){
var state_27109__$1 = state_27109;
var statearr_27113_27179 = state_27109__$1;
(statearr_27113_27179[(2)] = null);

(statearr_27113_27179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (4))){
var inst_27074 = (state_27109[(7)]);
var inst_27074__$1 = (state_27109[(2)]);
var inst_27075 = (inst_27074__$1 == null);
var state_27109__$1 = (function (){var statearr_27114 = state_27109;
(statearr_27114[(7)] = inst_27074__$1);

return statearr_27114;
})();
if(cljs.core.truth_(inst_27075)){
var statearr_27115_27180 = state_27109__$1;
(statearr_27115_27180[(1)] = (5));

} else {
var statearr_27116_27181 = state_27109__$1;
(statearr_27116_27181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (15))){
var inst_27087 = (state_27109[(8)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27109__$1,(18),to,inst_27087);
} else {
if((state_val_27110 === (21))){
var inst_27100 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27117_27182 = state_27109__$1;
(statearr_27117_27182[(2)] = inst_27100);

(statearr_27117_27182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (13))){
var inst_27102 = (state_27109[(2)]);
var state_27109__$1 = (function (){var statearr_27118 = state_27109;
(statearr_27118[(9)] = inst_27102);

return statearr_27118;
})();
var statearr_27119_27183 = state_27109__$1;
(statearr_27119_27183[(2)] = null);

(statearr_27119_27183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (6))){
var inst_27074 = (state_27109[(7)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27109__$1,(11),inst_27074);
} else {
if((state_val_27110 === (17))){
var inst_27095 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
if(cljs.core.truth_(inst_27095)){
var statearr_27120_27184 = state_27109__$1;
(statearr_27120_27184[(1)] = (19));

} else {
var statearr_27121_27185 = state_27109__$1;
(statearr_27121_27185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (3))){
var inst_27107 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27109__$1,inst_27107);
} else {
if((state_val_27110 === (12))){
var inst_27084 = (state_27109[(10)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27109__$1,(14),inst_27084);
} else {
if((state_val_27110 === (2))){
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27109__$1,(4),results);
} else {
if((state_val_27110 === (19))){
var state_27109__$1 = state_27109;
var statearr_27122_27186 = state_27109__$1;
(statearr_27122_27186[(2)] = null);

(statearr_27122_27186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (11))){
var inst_27084 = (state_27109[(2)]);
var state_27109__$1 = (function (){var statearr_27123 = state_27109;
(statearr_27123[(10)] = inst_27084);

return statearr_27123;
})();
var statearr_27124_27187 = state_27109__$1;
(statearr_27124_27187[(2)] = null);

(statearr_27124_27187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (9))){
var state_27109__$1 = state_27109;
var statearr_27125_27188 = state_27109__$1;
(statearr_27125_27188[(2)] = null);

(statearr_27125_27188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (5))){
var state_27109__$1 = state_27109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27126_27189 = state_27109__$1;
(statearr_27126_27189[(1)] = (8));

} else {
var statearr_27127_27190 = state_27109__$1;
(statearr_27127_27190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (14))){
var inst_27087 = (state_27109[(8)]);
var inst_27089 = (state_27109[(11)]);
var inst_27087__$1 = (state_27109[(2)]);
var inst_27088 = (inst_27087__$1 == null);
var inst_27089__$1 = cljs.core.not.call(null,inst_27088);
var state_27109__$1 = (function (){var statearr_27128 = state_27109;
(statearr_27128[(8)] = inst_27087__$1);

(statearr_27128[(11)] = inst_27089__$1);

return statearr_27128;
})();
if(inst_27089__$1){
var statearr_27129_27191 = state_27109__$1;
(statearr_27129_27191[(1)] = (15));

} else {
var statearr_27130_27192 = state_27109__$1;
(statearr_27130_27192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (16))){
var inst_27089 = (state_27109[(11)]);
var state_27109__$1 = state_27109;
var statearr_27131_27193 = state_27109__$1;
(statearr_27131_27193[(2)] = inst_27089);

(statearr_27131_27193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (10))){
var inst_27081 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27132_27194 = state_27109__$1;
(statearr_27132_27194[(2)] = inst_27081);

(statearr_27132_27194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (18))){
var inst_27092 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27133_27195 = state_27109__$1;
(statearr_27133_27195[(2)] = inst_27092);

(statearr_27133_27195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (8))){
var inst_27078 = cljs.core.async.close_BANG_.call(null,to);
var state_27109__$1 = state_27109;
var statearr_27134_27196 = state_27109__$1;
(statearr_27134_27196[(2)] = inst_27078);

(statearr_27134_27196[(1)] = (10));


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
});})(c__21978__auto__,jobs,results,process,async))
;
return ((function (switch__21913__auto__,c__21978__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0 = (function (){
var statearr_27138 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__);

(statearr_27138[(1)] = (1));

return statearr_27138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1 = (function (state_27109){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27139){if((e27139 instanceof Object)){
var ex__21917__auto__ = e27139;
var statearr_27140_27197 = state_27109;
(statearr_27140_27197[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27198 = state_27109;
state_27109 = G__27198;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__ = function(state_27109){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1.call(this,state_27109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21914__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__,jobs,results,process,async))
})();
var state__21980__auto__ = (function (){var statearr_27141 = f__21979__auto__.call(null);
(statearr_27141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_27141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__,jobs,results,process,async))
);

return c__21978__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args27199 = [];
var len__19567__auto___27202 = arguments.length;
var i__19568__auto___27203 = (0);
while(true){
if((i__19568__auto___27203 < len__19567__auto___27202)){
args27199.push((arguments[i__19568__auto___27203]));

var G__27204 = (i__19568__auto___27203 + (1));
i__19568__auto___27203 = G__27204;
continue;
} else {
}
break;
}

var G__27201 = args27199.length;
switch (G__27201) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27199.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args27206 = [];
var len__19567__auto___27209 = arguments.length;
var i__19568__auto___27210 = (0);
while(true){
if((i__19568__auto___27210 < len__19567__auto___27209)){
args27206.push((arguments[i__19568__auto___27210]));

var G__27211 = (i__19568__auto___27210 + (1));
i__19568__auto___27210 = G__27211;
continue;
} else {
}
break;
}

var G__27208 = args27206.length;
switch (G__27208) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27206.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args27213 = [];
var len__19567__auto___27266 = arguments.length;
var i__19568__auto___27267 = (0);
while(true){
if((i__19568__auto___27267 < len__19567__auto___27266)){
args27213.push((arguments[i__19568__auto___27267]));

var G__27268 = (i__19568__auto___27267 + (1));
i__19568__auto___27267 = G__27268;
continue;
} else {
}
break;
}

var G__27215 = args27213.length;
switch (G__27215) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27213.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21978__auto___27270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___27270,tc,fc){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___27270,tc,fc){
return (function (state_27241){
var state_val_27242 = (state_27241[(1)]);
if((state_val_27242 === (7))){
var inst_27237 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27243_27271 = state_27241__$1;
(statearr_27243_27271[(2)] = inst_27237);

(statearr_27243_27271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (1))){
var state_27241__$1 = state_27241;
var statearr_27244_27272 = state_27241__$1;
(statearr_27244_27272[(2)] = null);

(statearr_27244_27272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (4))){
var inst_27218 = (state_27241[(7)]);
var inst_27218__$1 = (state_27241[(2)]);
var inst_27219 = (inst_27218__$1 == null);
var state_27241__$1 = (function (){var statearr_27245 = state_27241;
(statearr_27245[(7)] = inst_27218__$1);

return statearr_27245;
})();
if(cljs.core.truth_(inst_27219)){
var statearr_27246_27273 = state_27241__$1;
(statearr_27246_27273[(1)] = (5));

} else {
var statearr_27247_27274 = state_27241__$1;
(statearr_27247_27274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (13))){
var state_27241__$1 = state_27241;
var statearr_27248_27275 = state_27241__$1;
(statearr_27248_27275[(2)] = null);

(statearr_27248_27275[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (6))){
var inst_27218 = (state_27241[(7)]);
var inst_27224 = p.call(null,inst_27218);
var state_27241__$1 = state_27241;
if(cljs.core.truth_(inst_27224)){
var statearr_27249_27276 = state_27241__$1;
(statearr_27249_27276[(1)] = (9));

} else {
var statearr_27250_27277 = state_27241__$1;
(statearr_27250_27277[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (3))){
var inst_27239 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27241__$1,inst_27239);
} else {
if((state_val_27242 === (12))){
var state_27241__$1 = state_27241;
var statearr_27251_27278 = state_27241__$1;
(statearr_27251_27278[(2)] = null);

(statearr_27251_27278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (2))){
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27241__$1,(4),ch);
} else {
if((state_val_27242 === (11))){
var inst_27218 = (state_27241[(7)]);
var inst_27228 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27241__$1,(8),inst_27228,inst_27218);
} else {
if((state_val_27242 === (9))){
var state_27241__$1 = state_27241;
var statearr_27252_27279 = state_27241__$1;
(statearr_27252_27279[(2)] = tc);

(statearr_27252_27279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (5))){
var inst_27221 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27222 = cljs.core.async.close_BANG_.call(null,fc);
var state_27241__$1 = (function (){var statearr_27253 = state_27241;
(statearr_27253[(8)] = inst_27221);

return statearr_27253;
})();
var statearr_27254_27280 = state_27241__$1;
(statearr_27254_27280[(2)] = inst_27222);

(statearr_27254_27280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (14))){
var inst_27235 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27255_27281 = state_27241__$1;
(statearr_27255_27281[(2)] = inst_27235);

(statearr_27255_27281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (10))){
var state_27241__$1 = state_27241;
var statearr_27256_27282 = state_27241__$1;
(statearr_27256_27282[(2)] = fc);

(statearr_27256_27282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (8))){
var inst_27230 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
if(cljs.core.truth_(inst_27230)){
var statearr_27257_27283 = state_27241__$1;
(statearr_27257_27283[(1)] = (12));

} else {
var statearr_27258_27284 = state_27241__$1;
(statearr_27258_27284[(1)] = (13));

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
});})(c__21978__auto___27270,tc,fc))
;
return ((function (switch__21913__auto__,c__21978__auto___27270,tc,fc){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_27262 = [null,null,null,null,null,null,null,null,null];
(statearr_27262[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_27262[(1)] = (1));

return statearr_27262;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_27241){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27263){if((e27263 instanceof Object)){
var ex__21917__auto__ = e27263;
var statearr_27264_27285 = state_27241;
(statearr_27264_27285[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27286 = state_27241;
state_27241 = G__27286;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_27241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_27241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___27270,tc,fc))
})();
var state__21980__auto__ = (function (){var statearr_27265 = f__21979__auto__.call(null);
(statearr_27265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___27270);

return statearr_27265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___27270,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__){
return (function (state_27333){
var state_val_27334 = (state_27333[(1)]);
if((state_val_27334 === (1))){
var inst_27319 = init;
var state_27333__$1 = (function (){var statearr_27335 = state_27333;
(statearr_27335[(7)] = inst_27319);

return statearr_27335;
})();
var statearr_27336_27351 = state_27333__$1;
(statearr_27336_27351[(2)] = null);

(statearr_27336_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (2))){
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27333__$1,(4),ch);
} else {
if((state_val_27334 === (3))){
var inst_27331 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27333__$1,inst_27331);
} else {
if((state_val_27334 === (4))){
var inst_27322 = (state_27333[(8)]);
var inst_27322__$1 = (state_27333[(2)]);
var inst_27323 = (inst_27322__$1 == null);
var state_27333__$1 = (function (){var statearr_27337 = state_27333;
(statearr_27337[(8)] = inst_27322__$1);

return statearr_27337;
})();
if(cljs.core.truth_(inst_27323)){
var statearr_27338_27352 = state_27333__$1;
(statearr_27338_27352[(1)] = (5));

} else {
var statearr_27339_27353 = state_27333__$1;
(statearr_27339_27353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (5))){
var inst_27319 = (state_27333[(7)]);
var state_27333__$1 = state_27333;
var statearr_27340_27354 = state_27333__$1;
(statearr_27340_27354[(2)] = inst_27319);

(statearr_27340_27354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (6))){
var inst_27322 = (state_27333[(8)]);
var inst_27319 = (state_27333[(7)]);
var inst_27326 = f.call(null,inst_27319,inst_27322);
var inst_27319__$1 = inst_27326;
var state_27333__$1 = (function (){var statearr_27341 = state_27333;
(statearr_27341[(7)] = inst_27319__$1);

return statearr_27341;
})();
var statearr_27342_27355 = state_27333__$1;
(statearr_27342_27355[(2)] = null);

(statearr_27342_27355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27334 === (7))){
var inst_27329 = (state_27333[(2)]);
var state_27333__$1 = state_27333;
var statearr_27343_27356 = state_27333__$1;
(statearr_27343_27356[(2)] = inst_27329);

(statearr_27343_27356[(1)] = (3));


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
});})(c__21978__auto__))
;
return ((function (switch__21913__auto__,c__21978__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21914__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21914__auto____0 = (function (){
var statearr_27347 = [null,null,null,null,null,null,null,null,null];
(statearr_27347[(0)] = cljs$core$async$reduce_$_state_machine__21914__auto__);

(statearr_27347[(1)] = (1));

return statearr_27347;
});
var cljs$core$async$reduce_$_state_machine__21914__auto____1 = (function (state_27333){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27348){if((e27348 instanceof Object)){
var ex__21917__auto__ = e27348;
var statearr_27349_27357 = state_27333;
(statearr_27349_27357[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27358 = state_27333;
state_27333 = G__27358;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21914__auto__ = function(state_27333){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21914__auto____1.call(this,state_27333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21914__auto____0;
cljs$core$async$reduce_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21914__auto____1;
return cljs$core$async$reduce_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__))
})();
var state__21980__auto__ = (function (){var statearr_27350 = f__21979__auto__.call(null);
(statearr_27350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__))
);

return c__21978__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args27359 = [];
var len__19567__auto___27411 = arguments.length;
var i__19568__auto___27412 = (0);
while(true){
if((i__19568__auto___27412 < len__19567__auto___27411)){
args27359.push((arguments[i__19568__auto___27412]));

var G__27413 = (i__19568__auto___27412 + (1));
i__19568__auto___27412 = G__27413;
continue;
} else {
}
break;
}

var G__27361 = args27359.length;
switch (G__27361) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27359.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__){
return (function (state_27386){
var state_val_27387 = (state_27386[(1)]);
if((state_val_27387 === (7))){
var inst_27368 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27388_27415 = state_27386__$1;
(statearr_27388_27415[(2)] = inst_27368);

(statearr_27388_27415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (1))){
var inst_27362 = cljs.core.seq.call(null,coll);
var inst_27363 = inst_27362;
var state_27386__$1 = (function (){var statearr_27389 = state_27386;
(statearr_27389[(7)] = inst_27363);

return statearr_27389;
})();
var statearr_27390_27416 = state_27386__$1;
(statearr_27390_27416[(2)] = null);

(statearr_27390_27416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (4))){
var inst_27363 = (state_27386[(7)]);
var inst_27366 = cljs.core.first.call(null,inst_27363);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27386__$1,(7),ch,inst_27366);
} else {
if((state_val_27387 === (13))){
var inst_27380 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27391_27417 = state_27386__$1;
(statearr_27391_27417[(2)] = inst_27380);

(statearr_27391_27417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (6))){
var inst_27371 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
if(cljs.core.truth_(inst_27371)){
var statearr_27392_27418 = state_27386__$1;
(statearr_27392_27418[(1)] = (8));

} else {
var statearr_27393_27419 = state_27386__$1;
(statearr_27393_27419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (3))){
var inst_27384 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else {
if((state_val_27387 === (12))){
var state_27386__$1 = state_27386;
var statearr_27394_27420 = state_27386__$1;
(statearr_27394_27420[(2)] = null);

(statearr_27394_27420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (2))){
var inst_27363 = (state_27386[(7)]);
var state_27386__$1 = state_27386;
if(cljs.core.truth_(inst_27363)){
var statearr_27395_27421 = state_27386__$1;
(statearr_27395_27421[(1)] = (4));

} else {
var statearr_27396_27422 = state_27386__$1;
(statearr_27396_27422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (11))){
var inst_27377 = cljs.core.async.close_BANG_.call(null,ch);
var state_27386__$1 = state_27386;
var statearr_27397_27423 = state_27386__$1;
(statearr_27397_27423[(2)] = inst_27377);

(statearr_27397_27423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (9))){
var state_27386__$1 = state_27386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27398_27424 = state_27386__$1;
(statearr_27398_27424[(1)] = (11));

} else {
var statearr_27399_27425 = state_27386__$1;
(statearr_27399_27425[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (5))){
var inst_27363 = (state_27386[(7)]);
var state_27386__$1 = state_27386;
var statearr_27400_27426 = state_27386__$1;
(statearr_27400_27426[(2)] = inst_27363);

(statearr_27400_27426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (10))){
var inst_27382 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27401_27427 = state_27386__$1;
(statearr_27401_27427[(2)] = inst_27382);

(statearr_27401_27427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (8))){
var inst_27363 = (state_27386[(7)]);
var inst_27373 = cljs.core.next.call(null,inst_27363);
var inst_27363__$1 = inst_27373;
var state_27386__$1 = (function (){var statearr_27402 = state_27386;
(statearr_27402[(7)] = inst_27363__$1);

return statearr_27402;
})();
var statearr_27403_27428 = state_27386__$1;
(statearr_27403_27428[(2)] = null);

(statearr_27403_27428[(1)] = (2));


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
});})(c__21978__auto__))
;
return ((function (switch__21913__auto__,c__21978__auto__){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_27407 = [null,null,null,null,null,null,null,null];
(statearr_27407[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_27407[(1)] = (1));

return statearr_27407;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_27386){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27408){if((e27408 instanceof Object)){
var ex__21917__auto__ = e27408;
var statearr_27409_27429 = state_27386;
(statearr_27409_27429[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27386;
state_27386 = G__27430;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__))
})();
var state__21980__auto__ = (function (){var statearr_27410 = f__21979__auto__.call(null);
(statearr_27410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__))
);

return c__21978__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19164__auto__ = (((_ == null))?null:_);
var m__19165__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,_);
} else {
var m__19165__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19165__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m,ch);
} else {
var m__19165__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m);
} else {
var m__19165__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27656 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27656 = (function (mult,ch,cs,meta27657){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27657 = meta27657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27658,meta27657__$1){
var self__ = this;
var _27658__$1 = this;
return (new cljs.core.async.t27656(self__.mult,self__.ch,self__.cs,meta27657__$1));
});})(cs))
;

cljs.core.async.t27656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27658){
var self__ = this;
var _27658__$1 = this;
return self__.meta27657;
});})(cs))
;

cljs.core.async.t27656.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27656.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27656.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27656.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27656.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27656.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27656.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27657","meta27657",438565423,null)], null);
});})(cs))
;

cljs.core.async.t27656.cljs$lang$type = true;

cljs.core.async.t27656.cljs$lang$ctorStr = "cljs.core.async/t27656";

cljs.core.async.t27656.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t27656");
});})(cs))
;

cljs.core.async.__GT_t27656 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27656(mult__$1,ch__$1,cs__$1,meta27657){
return (new cljs.core.async.t27656(mult__$1,ch__$1,cs__$1,meta27657));
});})(cs))
;

}

return (new cljs.core.async.t27656(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21978__auto___27877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___27877,cs,m,dchan,dctr,done){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___27877,cs,m,dchan,dctr,done){
return (function (state_27789){
var state_val_27790 = (state_27789[(1)]);
if((state_val_27790 === (7))){
var inst_27785 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27791_27878 = state_27789__$1;
(statearr_27791_27878[(2)] = inst_27785);

(statearr_27791_27878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (20))){
var inst_27690 = (state_27789[(7)]);
var inst_27700 = cljs.core.first.call(null,inst_27690);
var inst_27701 = cljs.core.nth.call(null,inst_27700,(0),null);
var inst_27702 = cljs.core.nth.call(null,inst_27700,(1),null);
var state_27789__$1 = (function (){var statearr_27792 = state_27789;
(statearr_27792[(8)] = inst_27701);

return statearr_27792;
})();
if(cljs.core.truth_(inst_27702)){
var statearr_27793_27879 = state_27789__$1;
(statearr_27793_27879[(1)] = (22));

} else {
var statearr_27794_27880 = state_27789__$1;
(statearr_27794_27880[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (27))){
var inst_27737 = (state_27789[(9)]);
var inst_27661 = (state_27789[(10)]);
var inst_27730 = (state_27789[(11)]);
var inst_27732 = (state_27789[(12)]);
var inst_27737__$1 = cljs.core._nth.call(null,inst_27730,inst_27732);
var inst_27738 = cljs.core.async.put_BANG_.call(null,inst_27737__$1,inst_27661,done);
var state_27789__$1 = (function (){var statearr_27795 = state_27789;
(statearr_27795[(9)] = inst_27737__$1);

return statearr_27795;
})();
if(cljs.core.truth_(inst_27738)){
var statearr_27796_27881 = state_27789__$1;
(statearr_27796_27881[(1)] = (30));

} else {
var statearr_27797_27882 = state_27789__$1;
(statearr_27797_27882[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (1))){
var state_27789__$1 = state_27789;
var statearr_27798_27883 = state_27789__$1;
(statearr_27798_27883[(2)] = null);

(statearr_27798_27883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (24))){
var inst_27690 = (state_27789[(7)]);
var inst_27707 = (state_27789[(2)]);
var inst_27708 = cljs.core.next.call(null,inst_27690);
var inst_27670 = inst_27708;
var inst_27671 = null;
var inst_27672 = (0);
var inst_27673 = (0);
var state_27789__$1 = (function (){var statearr_27799 = state_27789;
(statearr_27799[(13)] = inst_27670);

(statearr_27799[(14)] = inst_27673);

(statearr_27799[(15)] = inst_27707);

(statearr_27799[(16)] = inst_27672);

(statearr_27799[(17)] = inst_27671);

return statearr_27799;
})();
var statearr_27800_27884 = state_27789__$1;
(statearr_27800_27884[(2)] = null);

(statearr_27800_27884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (39))){
var state_27789__$1 = state_27789;
var statearr_27804_27885 = state_27789__$1;
(statearr_27804_27885[(2)] = null);

(statearr_27804_27885[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (4))){
var inst_27661 = (state_27789[(10)]);
var inst_27661__$1 = (state_27789[(2)]);
var inst_27662 = (inst_27661__$1 == null);
var state_27789__$1 = (function (){var statearr_27805 = state_27789;
(statearr_27805[(10)] = inst_27661__$1);

return statearr_27805;
})();
if(cljs.core.truth_(inst_27662)){
var statearr_27806_27886 = state_27789__$1;
(statearr_27806_27886[(1)] = (5));

} else {
var statearr_27807_27887 = state_27789__$1;
(statearr_27807_27887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (15))){
var inst_27670 = (state_27789[(13)]);
var inst_27673 = (state_27789[(14)]);
var inst_27672 = (state_27789[(16)]);
var inst_27671 = (state_27789[(17)]);
var inst_27686 = (state_27789[(2)]);
var inst_27687 = (inst_27673 + (1));
var tmp27801 = inst_27670;
var tmp27802 = inst_27672;
var tmp27803 = inst_27671;
var inst_27670__$1 = tmp27801;
var inst_27671__$1 = tmp27803;
var inst_27672__$1 = tmp27802;
var inst_27673__$1 = inst_27687;
var state_27789__$1 = (function (){var statearr_27808 = state_27789;
(statearr_27808[(13)] = inst_27670__$1);

(statearr_27808[(14)] = inst_27673__$1);

(statearr_27808[(18)] = inst_27686);

(statearr_27808[(16)] = inst_27672__$1);

(statearr_27808[(17)] = inst_27671__$1);

return statearr_27808;
})();
var statearr_27809_27888 = state_27789__$1;
(statearr_27809_27888[(2)] = null);

(statearr_27809_27888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (21))){
var inst_27711 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27813_27889 = state_27789__$1;
(statearr_27813_27889[(2)] = inst_27711);

(statearr_27813_27889[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (31))){
var inst_27737 = (state_27789[(9)]);
var inst_27741 = done.call(null,null);
var inst_27742 = cljs.core.async.untap_STAR_.call(null,m,inst_27737);
var state_27789__$1 = (function (){var statearr_27814 = state_27789;
(statearr_27814[(19)] = inst_27741);

return statearr_27814;
})();
var statearr_27815_27890 = state_27789__$1;
(statearr_27815_27890[(2)] = inst_27742);

(statearr_27815_27890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (32))){
var inst_27731 = (state_27789[(20)]);
var inst_27729 = (state_27789[(21)]);
var inst_27730 = (state_27789[(11)]);
var inst_27732 = (state_27789[(12)]);
var inst_27744 = (state_27789[(2)]);
var inst_27745 = (inst_27732 + (1));
var tmp27810 = inst_27731;
var tmp27811 = inst_27729;
var tmp27812 = inst_27730;
var inst_27729__$1 = tmp27811;
var inst_27730__$1 = tmp27812;
var inst_27731__$1 = tmp27810;
var inst_27732__$1 = inst_27745;
var state_27789__$1 = (function (){var statearr_27816 = state_27789;
(statearr_27816[(22)] = inst_27744);

(statearr_27816[(20)] = inst_27731__$1);

(statearr_27816[(21)] = inst_27729__$1);

(statearr_27816[(11)] = inst_27730__$1);

(statearr_27816[(12)] = inst_27732__$1);

return statearr_27816;
})();
var statearr_27817_27891 = state_27789__$1;
(statearr_27817_27891[(2)] = null);

(statearr_27817_27891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (40))){
var inst_27757 = (state_27789[(23)]);
var inst_27761 = done.call(null,null);
var inst_27762 = cljs.core.async.untap_STAR_.call(null,m,inst_27757);
var state_27789__$1 = (function (){var statearr_27818 = state_27789;
(statearr_27818[(24)] = inst_27761);

return statearr_27818;
})();
var statearr_27819_27892 = state_27789__$1;
(statearr_27819_27892[(2)] = inst_27762);

(statearr_27819_27892[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (33))){
var inst_27748 = (state_27789[(25)]);
var inst_27750 = cljs.core.chunked_seq_QMARK_.call(null,inst_27748);
var state_27789__$1 = state_27789;
if(inst_27750){
var statearr_27820_27893 = state_27789__$1;
(statearr_27820_27893[(1)] = (36));

} else {
var statearr_27821_27894 = state_27789__$1;
(statearr_27821_27894[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (13))){
var inst_27680 = (state_27789[(26)]);
var inst_27683 = cljs.core.async.close_BANG_.call(null,inst_27680);
var state_27789__$1 = state_27789;
var statearr_27822_27895 = state_27789__$1;
(statearr_27822_27895[(2)] = inst_27683);

(statearr_27822_27895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (22))){
var inst_27701 = (state_27789[(8)]);
var inst_27704 = cljs.core.async.close_BANG_.call(null,inst_27701);
var state_27789__$1 = state_27789;
var statearr_27823_27896 = state_27789__$1;
(statearr_27823_27896[(2)] = inst_27704);

(statearr_27823_27896[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (36))){
var inst_27748 = (state_27789[(25)]);
var inst_27752 = cljs.core.chunk_first.call(null,inst_27748);
var inst_27753 = cljs.core.chunk_rest.call(null,inst_27748);
var inst_27754 = cljs.core.count.call(null,inst_27752);
var inst_27729 = inst_27753;
var inst_27730 = inst_27752;
var inst_27731 = inst_27754;
var inst_27732 = (0);
var state_27789__$1 = (function (){var statearr_27824 = state_27789;
(statearr_27824[(20)] = inst_27731);

(statearr_27824[(21)] = inst_27729);

(statearr_27824[(11)] = inst_27730);

(statearr_27824[(12)] = inst_27732);

return statearr_27824;
})();
var statearr_27825_27897 = state_27789__$1;
(statearr_27825_27897[(2)] = null);

(statearr_27825_27897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (41))){
var inst_27748 = (state_27789[(25)]);
var inst_27764 = (state_27789[(2)]);
var inst_27765 = cljs.core.next.call(null,inst_27748);
var inst_27729 = inst_27765;
var inst_27730 = null;
var inst_27731 = (0);
var inst_27732 = (0);
var state_27789__$1 = (function (){var statearr_27826 = state_27789;
(statearr_27826[(27)] = inst_27764);

(statearr_27826[(20)] = inst_27731);

(statearr_27826[(21)] = inst_27729);

(statearr_27826[(11)] = inst_27730);

(statearr_27826[(12)] = inst_27732);

return statearr_27826;
})();
var statearr_27827_27898 = state_27789__$1;
(statearr_27827_27898[(2)] = null);

(statearr_27827_27898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (43))){
var state_27789__$1 = state_27789;
var statearr_27828_27899 = state_27789__$1;
(statearr_27828_27899[(2)] = null);

(statearr_27828_27899[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (29))){
var inst_27773 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27829_27900 = state_27789__$1;
(statearr_27829_27900[(2)] = inst_27773);

(statearr_27829_27900[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (44))){
var inst_27782 = (state_27789[(2)]);
var state_27789__$1 = (function (){var statearr_27830 = state_27789;
(statearr_27830[(28)] = inst_27782);

return statearr_27830;
})();
var statearr_27831_27901 = state_27789__$1;
(statearr_27831_27901[(2)] = null);

(statearr_27831_27901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (6))){
var inst_27721 = (state_27789[(29)]);
var inst_27720 = cljs.core.deref.call(null,cs);
var inst_27721__$1 = cljs.core.keys.call(null,inst_27720);
var inst_27722 = cljs.core.count.call(null,inst_27721__$1);
var inst_27723 = cljs.core.reset_BANG_.call(null,dctr,inst_27722);
var inst_27728 = cljs.core.seq.call(null,inst_27721__$1);
var inst_27729 = inst_27728;
var inst_27730 = null;
var inst_27731 = (0);
var inst_27732 = (0);
var state_27789__$1 = (function (){var statearr_27832 = state_27789;
(statearr_27832[(30)] = inst_27723);

(statearr_27832[(20)] = inst_27731);

(statearr_27832[(29)] = inst_27721__$1);

(statearr_27832[(21)] = inst_27729);

(statearr_27832[(11)] = inst_27730);

(statearr_27832[(12)] = inst_27732);

return statearr_27832;
})();
var statearr_27833_27902 = state_27789__$1;
(statearr_27833_27902[(2)] = null);

(statearr_27833_27902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (28))){
var inst_27748 = (state_27789[(25)]);
var inst_27729 = (state_27789[(21)]);
var inst_27748__$1 = cljs.core.seq.call(null,inst_27729);
var state_27789__$1 = (function (){var statearr_27834 = state_27789;
(statearr_27834[(25)] = inst_27748__$1);

return statearr_27834;
})();
if(inst_27748__$1){
var statearr_27835_27903 = state_27789__$1;
(statearr_27835_27903[(1)] = (33));

} else {
var statearr_27836_27904 = state_27789__$1;
(statearr_27836_27904[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (25))){
var inst_27731 = (state_27789[(20)]);
var inst_27732 = (state_27789[(12)]);
var inst_27734 = (inst_27732 < inst_27731);
var inst_27735 = inst_27734;
var state_27789__$1 = state_27789;
if(cljs.core.truth_(inst_27735)){
var statearr_27837_27905 = state_27789__$1;
(statearr_27837_27905[(1)] = (27));

} else {
var statearr_27838_27906 = state_27789__$1;
(statearr_27838_27906[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (34))){
var state_27789__$1 = state_27789;
var statearr_27839_27907 = state_27789__$1;
(statearr_27839_27907[(2)] = null);

(statearr_27839_27907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (17))){
var state_27789__$1 = state_27789;
var statearr_27840_27908 = state_27789__$1;
(statearr_27840_27908[(2)] = null);

(statearr_27840_27908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (3))){
var inst_27787 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27789__$1,inst_27787);
} else {
if((state_val_27790 === (12))){
var inst_27716 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27841_27909 = state_27789__$1;
(statearr_27841_27909[(2)] = inst_27716);

(statearr_27841_27909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (2))){
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(4),ch);
} else {
if((state_val_27790 === (23))){
var state_27789__$1 = state_27789;
var statearr_27842_27910 = state_27789__$1;
(statearr_27842_27910[(2)] = null);

(statearr_27842_27910[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (35))){
var inst_27771 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27843_27911 = state_27789__$1;
(statearr_27843_27911[(2)] = inst_27771);

(statearr_27843_27911[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (19))){
var inst_27690 = (state_27789[(7)]);
var inst_27694 = cljs.core.chunk_first.call(null,inst_27690);
var inst_27695 = cljs.core.chunk_rest.call(null,inst_27690);
var inst_27696 = cljs.core.count.call(null,inst_27694);
var inst_27670 = inst_27695;
var inst_27671 = inst_27694;
var inst_27672 = inst_27696;
var inst_27673 = (0);
var state_27789__$1 = (function (){var statearr_27844 = state_27789;
(statearr_27844[(13)] = inst_27670);

(statearr_27844[(14)] = inst_27673);

(statearr_27844[(16)] = inst_27672);

(statearr_27844[(17)] = inst_27671);

return statearr_27844;
})();
var statearr_27845_27912 = state_27789__$1;
(statearr_27845_27912[(2)] = null);

(statearr_27845_27912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (11))){
var inst_27670 = (state_27789[(13)]);
var inst_27690 = (state_27789[(7)]);
var inst_27690__$1 = cljs.core.seq.call(null,inst_27670);
var state_27789__$1 = (function (){var statearr_27846 = state_27789;
(statearr_27846[(7)] = inst_27690__$1);

return statearr_27846;
})();
if(inst_27690__$1){
var statearr_27847_27913 = state_27789__$1;
(statearr_27847_27913[(1)] = (16));

} else {
var statearr_27848_27914 = state_27789__$1;
(statearr_27848_27914[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (9))){
var inst_27718 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27849_27915 = state_27789__$1;
(statearr_27849_27915[(2)] = inst_27718);

(statearr_27849_27915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (5))){
var inst_27668 = cljs.core.deref.call(null,cs);
var inst_27669 = cljs.core.seq.call(null,inst_27668);
var inst_27670 = inst_27669;
var inst_27671 = null;
var inst_27672 = (0);
var inst_27673 = (0);
var state_27789__$1 = (function (){var statearr_27850 = state_27789;
(statearr_27850[(13)] = inst_27670);

(statearr_27850[(14)] = inst_27673);

(statearr_27850[(16)] = inst_27672);

(statearr_27850[(17)] = inst_27671);

return statearr_27850;
})();
var statearr_27851_27916 = state_27789__$1;
(statearr_27851_27916[(2)] = null);

(statearr_27851_27916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (14))){
var state_27789__$1 = state_27789;
var statearr_27852_27917 = state_27789__$1;
(statearr_27852_27917[(2)] = null);

(statearr_27852_27917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (45))){
var inst_27779 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27853_27918 = state_27789__$1;
(statearr_27853_27918[(2)] = inst_27779);

(statearr_27853_27918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (26))){
var inst_27721 = (state_27789[(29)]);
var inst_27775 = (state_27789[(2)]);
var inst_27776 = cljs.core.seq.call(null,inst_27721);
var state_27789__$1 = (function (){var statearr_27854 = state_27789;
(statearr_27854[(31)] = inst_27775);

return statearr_27854;
})();
if(inst_27776){
var statearr_27855_27919 = state_27789__$1;
(statearr_27855_27919[(1)] = (42));

} else {
var statearr_27856_27920 = state_27789__$1;
(statearr_27856_27920[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (16))){
var inst_27690 = (state_27789[(7)]);
var inst_27692 = cljs.core.chunked_seq_QMARK_.call(null,inst_27690);
var state_27789__$1 = state_27789;
if(inst_27692){
var statearr_27857_27921 = state_27789__$1;
(statearr_27857_27921[(1)] = (19));

} else {
var statearr_27858_27922 = state_27789__$1;
(statearr_27858_27922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (38))){
var inst_27768 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27859_27923 = state_27789__$1;
(statearr_27859_27923[(2)] = inst_27768);

(statearr_27859_27923[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (30))){
var state_27789__$1 = state_27789;
var statearr_27860_27924 = state_27789__$1;
(statearr_27860_27924[(2)] = null);

(statearr_27860_27924[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (10))){
var inst_27673 = (state_27789[(14)]);
var inst_27671 = (state_27789[(17)]);
var inst_27679 = cljs.core._nth.call(null,inst_27671,inst_27673);
var inst_27680 = cljs.core.nth.call(null,inst_27679,(0),null);
var inst_27681 = cljs.core.nth.call(null,inst_27679,(1),null);
var state_27789__$1 = (function (){var statearr_27861 = state_27789;
(statearr_27861[(26)] = inst_27680);

return statearr_27861;
})();
if(cljs.core.truth_(inst_27681)){
var statearr_27862_27925 = state_27789__$1;
(statearr_27862_27925[(1)] = (13));

} else {
var statearr_27863_27926 = state_27789__$1;
(statearr_27863_27926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (18))){
var inst_27714 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27864_27927 = state_27789__$1;
(statearr_27864_27927[(2)] = inst_27714);

(statearr_27864_27927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (42))){
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(45),dchan);
} else {
if((state_val_27790 === (37))){
var inst_27757 = (state_27789[(23)]);
var inst_27748 = (state_27789[(25)]);
var inst_27661 = (state_27789[(10)]);
var inst_27757__$1 = cljs.core.first.call(null,inst_27748);
var inst_27758 = cljs.core.async.put_BANG_.call(null,inst_27757__$1,inst_27661,done);
var state_27789__$1 = (function (){var statearr_27865 = state_27789;
(statearr_27865[(23)] = inst_27757__$1);

return statearr_27865;
})();
if(cljs.core.truth_(inst_27758)){
var statearr_27866_27928 = state_27789__$1;
(statearr_27866_27928[(1)] = (39));

} else {
var statearr_27867_27929 = state_27789__$1;
(statearr_27867_27929[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (8))){
var inst_27673 = (state_27789[(14)]);
var inst_27672 = (state_27789[(16)]);
var inst_27675 = (inst_27673 < inst_27672);
var inst_27676 = inst_27675;
var state_27789__$1 = state_27789;
if(cljs.core.truth_(inst_27676)){
var statearr_27868_27930 = state_27789__$1;
(statearr_27868_27930[(1)] = (10));

} else {
var statearr_27869_27931 = state_27789__$1;
(statearr_27869_27931[(1)] = (11));

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
});})(c__21978__auto___27877,cs,m,dchan,dctr,done))
;
return ((function (switch__21913__auto__,c__21978__auto___27877,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21914__auto__ = null;
var cljs$core$async$mult_$_state_machine__21914__auto____0 = (function (){
var statearr_27873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27873[(0)] = cljs$core$async$mult_$_state_machine__21914__auto__);

(statearr_27873[(1)] = (1));

return statearr_27873;
});
var cljs$core$async$mult_$_state_machine__21914__auto____1 = (function (state_27789){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_27789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e27874){if((e27874 instanceof Object)){
var ex__21917__auto__ = e27874;
var statearr_27875_27932 = state_27789;
(statearr_27875_27932[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27933 = state_27789;
state_27789 = G__27933;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21914__auto__ = function(state_27789){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21914__auto____1.call(this,state_27789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21914__auto____0;
cljs$core$async$mult_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21914__auto____1;
return cljs$core$async$mult_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___27877,cs,m,dchan,dctr,done))
})();
var state__21980__auto__ = (function (){var statearr_27876 = f__21979__auto__.call(null);
(statearr_27876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___27877);

return statearr_27876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___27877,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args27934 = [];
var len__19567__auto___27937 = arguments.length;
var i__19568__auto___27938 = (0);
while(true){
if((i__19568__auto___27938 < len__19567__auto___27937)){
args27934.push((arguments[i__19568__auto___27938]));

var G__27939 = (i__19568__auto___27938 + (1));
i__19568__auto___27938 = G__27939;
continue;
} else {
}
break;
}

var G__27936 = args27934.length;
switch (G__27936) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27934.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m,ch);
} else {
var m__19165__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m,ch);
} else {
var m__19165__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m);
} else {
var m__19165__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m,state_map);
} else {
var m__19165__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19164__auto__ = (((m == null))?null:m);
var m__19165__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,m,mode);
} else {
var m__19165__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__19574__auto__ = [];
var len__19567__auto___27953 = arguments.length;
var i__19568__auto___27954 = (0);
while(true){
if((i__19568__auto___27954 < len__19567__auto___27953)){
args__19574__auto__.push((arguments[i__19568__auto___27954]));

var G__27955 = (i__19568__auto___27954 + (1));
i__19568__auto___27954 = G__27955;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((3) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19575__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27947){
var map__27948 = p__27947;
var map__27948__$1 = ((((!((map__27948 == null)))?((((map__27948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27948):map__27948);
var opts = map__27948__$1;
var statearr_27950_27956 = state;
(statearr_27950_27956[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27948,map__27948__$1,opts){
return (function (val){
var statearr_27951_27957 = state;
(statearr_27951_27957[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27948,map__27948__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27952_27958 = state;
(statearr_27952_27958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27943){
var G__27944 = cljs.core.first.call(null,seq27943);
var seq27943__$1 = cljs.core.next.call(null,seq27943);
var G__27945 = cljs.core.first.call(null,seq27943__$1);
var seq27943__$2 = cljs.core.next.call(null,seq27943__$1);
var G__27946 = cljs.core.first.call(null,seq27943__$2);
var seq27943__$3 = cljs.core.next.call(null,seq27943__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27944,G__27945,G__27946,seq27943__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28122 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28122 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28123){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28123 = meta28123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28124,meta28123__$1){
var self__ = this;
var _28124__$1 = this;
return (new cljs.core.async.t28122(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28123__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28124){
var self__ = this;
var _28124__$1 = this;
return self__.meta28123;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28122.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28123","meta28123",48649654,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28122.cljs$lang$type = true;

cljs.core.async.t28122.cljs$lang$ctorStr = "cljs.core.async/t28122";

cljs.core.async.t28122.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28122");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28122 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28122(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28123){
return (new cljs.core.async.t28122(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28123));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28122(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21978__auto___28285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___28285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___28285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28222){
var state_val_28223 = (state_28222[(1)]);
if((state_val_28223 === (7))){
var inst_28140 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28224_28286 = state_28222__$1;
(statearr_28224_28286[(2)] = inst_28140);

(statearr_28224_28286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (20))){
var inst_28152 = (state_28222[(7)]);
var state_28222__$1 = state_28222;
var statearr_28225_28287 = state_28222__$1;
(statearr_28225_28287[(2)] = inst_28152);

(statearr_28225_28287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (27))){
var state_28222__$1 = state_28222;
var statearr_28226_28288 = state_28222__$1;
(statearr_28226_28288[(2)] = null);

(statearr_28226_28288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (1))){
var inst_28128 = (state_28222[(8)]);
var inst_28128__$1 = calc_state.call(null);
var inst_28130 = (inst_28128__$1 == null);
var inst_28131 = cljs.core.not.call(null,inst_28130);
var state_28222__$1 = (function (){var statearr_28227 = state_28222;
(statearr_28227[(8)] = inst_28128__$1);

return statearr_28227;
})();
if(inst_28131){
var statearr_28228_28289 = state_28222__$1;
(statearr_28228_28289[(1)] = (2));

} else {
var statearr_28229_28290 = state_28222__$1;
(statearr_28229_28290[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (24))){
var inst_28196 = (state_28222[(9)]);
var inst_28175 = (state_28222[(10)]);
var inst_28182 = (state_28222[(11)]);
var inst_28196__$1 = inst_28175.call(null,inst_28182);
var state_28222__$1 = (function (){var statearr_28230 = state_28222;
(statearr_28230[(9)] = inst_28196__$1);

return statearr_28230;
})();
if(cljs.core.truth_(inst_28196__$1)){
var statearr_28231_28291 = state_28222__$1;
(statearr_28231_28291[(1)] = (29));

} else {
var statearr_28232_28292 = state_28222__$1;
(statearr_28232_28292[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (4))){
var inst_28143 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28143)){
var statearr_28233_28293 = state_28222__$1;
(statearr_28233_28293[(1)] = (8));

} else {
var statearr_28234_28294 = state_28222__$1;
(statearr_28234_28294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (15))){
var inst_28169 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28169)){
var statearr_28235_28295 = state_28222__$1;
(statearr_28235_28295[(1)] = (19));

} else {
var statearr_28236_28296 = state_28222__$1;
(statearr_28236_28296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (21))){
var inst_28174 = (state_28222[(12)]);
var inst_28174__$1 = (state_28222[(2)]);
var inst_28175 = cljs.core.get.call(null,inst_28174__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28176 = cljs.core.get.call(null,inst_28174__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28177 = cljs.core.get.call(null,inst_28174__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28222__$1 = (function (){var statearr_28237 = state_28222;
(statearr_28237[(13)] = inst_28176);

(statearr_28237[(10)] = inst_28175);

(statearr_28237[(12)] = inst_28174__$1);

return statearr_28237;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28222__$1,(22),inst_28177);
} else {
if((state_val_28223 === (31))){
var inst_28204 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28204)){
var statearr_28238_28297 = state_28222__$1;
(statearr_28238_28297[(1)] = (32));

} else {
var statearr_28239_28298 = state_28222__$1;
(statearr_28239_28298[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (32))){
var inst_28181 = (state_28222[(14)]);
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28222__$1,(35),out,inst_28181);
} else {
if((state_val_28223 === (33))){
var inst_28174 = (state_28222[(12)]);
var inst_28152 = inst_28174;
var state_28222__$1 = (function (){var statearr_28240 = state_28222;
(statearr_28240[(7)] = inst_28152);

return statearr_28240;
})();
var statearr_28241_28299 = state_28222__$1;
(statearr_28241_28299[(2)] = null);

(statearr_28241_28299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (13))){
var inst_28152 = (state_28222[(7)]);
var inst_28159 = inst_28152.cljs$lang$protocol_mask$partition0$;
var inst_28160 = (inst_28159 & (64));
var inst_28161 = inst_28152.cljs$core$ISeq$;
var inst_28162 = (inst_28160) || (inst_28161);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28162)){
var statearr_28242_28300 = state_28222__$1;
(statearr_28242_28300[(1)] = (16));

} else {
var statearr_28243_28301 = state_28222__$1;
(statearr_28243_28301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (22))){
var inst_28181 = (state_28222[(14)]);
var inst_28182 = (state_28222[(11)]);
var inst_28180 = (state_28222[(2)]);
var inst_28181__$1 = cljs.core.nth.call(null,inst_28180,(0),null);
var inst_28182__$1 = cljs.core.nth.call(null,inst_28180,(1),null);
var inst_28183 = (inst_28181__$1 == null);
var inst_28184 = cljs.core._EQ_.call(null,inst_28182__$1,change);
var inst_28185 = (inst_28183) || (inst_28184);
var state_28222__$1 = (function (){var statearr_28244 = state_28222;
(statearr_28244[(14)] = inst_28181__$1);

(statearr_28244[(11)] = inst_28182__$1);

return statearr_28244;
})();
if(cljs.core.truth_(inst_28185)){
var statearr_28245_28302 = state_28222__$1;
(statearr_28245_28302[(1)] = (23));

} else {
var statearr_28246_28303 = state_28222__$1;
(statearr_28246_28303[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (36))){
var inst_28174 = (state_28222[(12)]);
var inst_28152 = inst_28174;
var state_28222__$1 = (function (){var statearr_28247 = state_28222;
(statearr_28247[(7)] = inst_28152);

return statearr_28247;
})();
var statearr_28248_28304 = state_28222__$1;
(statearr_28248_28304[(2)] = null);

(statearr_28248_28304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (29))){
var inst_28196 = (state_28222[(9)]);
var state_28222__$1 = state_28222;
var statearr_28249_28305 = state_28222__$1;
(statearr_28249_28305[(2)] = inst_28196);

(statearr_28249_28305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (6))){
var state_28222__$1 = state_28222;
var statearr_28250_28306 = state_28222__$1;
(statearr_28250_28306[(2)] = false);

(statearr_28250_28306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (28))){
var inst_28192 = (state_28222[(2)]);
var inst_28193 = calc_state.call(null);
var inst_28152 = inst_28193;
var state_28222__$1 = (function (){var statearr_28251 = state_28222;
(statearr_28251[(7)] = inst_28152);

(statearr_28251[(15)] = inst_28192);

return statearr_28251;
})();
var statearr_28252_28307 = state_28222__$1;
(statearr_28252_28307[(2)] = null);

(statearr_28252_28307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (25))){
var inst_28218 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28253_28308 = state_28222__$1;
(statearr_28253_28308[(2)] = inst_28218);

(statearr_28253_28308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (34))){
var inst_28216 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28254_28309 = state_28222__$1;
(statearr_28254_28309[(2)] = inst_28216);

(statearr_28254_28309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (17))){
var state_28222__$1 = state_28222;
var statearr_28255_28310 = state_28222__$1;
(statearr_28255_28310[(2)] = false);

(statearr_28255_28310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (3))){
var state_28222__$1 = state_28222;
var statearr_28256_28311 = state_28222__$1;
(statearr_28256_28311[(2)] = false);

(statearr_28256_28311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (12))){
var inst_28220 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28222__$1,inst_28220);
} else {
if((state_val_28223 === (2))){
var inst_28128 = (state_28222[(8)]);
var inst_28133 = inst_28128.cljs$lang$protocol_mask$partition0$;
var inst_28134 = (inst_28133 & (64));
var inst_28135 = inst_28128.cljs$core$ISeq$;
var inst_28136 = (inst_28134) || (inst_28135);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28136)){
var statearr_28257_28312 = state_28222__$1;
(statearr_28257_28312[(1)] = (5));

} else {
var statearr_28258_28313 = state_28222__$1;
(statearr_28258_28313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (23))){
var inst_28181 = (state_28222[(14)]);
var inst_28187 = (inst_28181 == null);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28187)){
var statearr_28259_28314 = state_28222__$1;
(statearr_28259_28314[(1)] = (26));

} else {
var statearr_28260_28315 = state_28222__$1;
(statearr_28260_28315[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (35))){
var inst_28207 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
if(cljs.core.truth_(inst_28207)){
var statearr_28261_28316 = state_28222__$1;
(statearr_28261_28316[(1)] = (36));

} else {
var statearr_28262_28317 = state_28222__$1;
(statearr_28262_28317[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (19))){
var inst_28152 = (state_28222[(7)]);
var inst_28171 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28152);
var state_28222__$1 = state_28222;
var statearr_28263_28318 = state_28222__$1;
(statearr_28263_28318[(2)] = inst_28171);

(statearr_28263_28318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (11))){
var inst_28152 = (state_28222[(7)]);
var inst_28156 = (inst_28152 == null);
var inst_28157 = cljs.core.not.call(null,inst_28156);
var state_28222__$1 = state_28222;
if(inst_28157){
var statearr_28264_28319 = state_28222__$1;
(statearr_28264_28319[(1)] = (13));

} else {
var statearr_28265_28320 = state_28222__$1;
(statearr_28265_28320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (9))){
var inst_28128 = (state_28222[(8)]);
var state_28222__$1 = state_28222;
var statearr_28266_28321 = state_28222__$1;
(statearr_28266_28321[(2)] = inst_28128);

(statearr_28266_28321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (5))){
var state_28222__$1 = state_28222;
var statearr_28267_28322 = state_28222__$1;
(statearr_28267_28322[(2)] = true);

(statearr_28267_28322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (14))){
var state_28222__$1 = state_28222;
var statearr_28268_28323 = state_28222__$1;
(statearr_28268_28323[(2)] = false);

(statearr_28268_28323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (26))){
var inst_28182 = (state_28222[(11)]);
var inst_28189 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28182);
var state_28222__$1 = state_28222;
var statearr_28269_28324 = state_28222__$1;
(statearr_28269_28324[(2)] = inst_28189);

(statearr_28269_28324[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (16))){
var state_28222__$1 = state_28222;
var statearr_28270_28325 = state_28222__$1;
(statearr_28270_28325[(2)] = true);

(statearr_28270_28325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (38))){
var inst_28212 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28271_28326 = state_28222__$1;
(statearr_28271_28326[(2)] = inst_28212);

(statearr_28271_28326[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (30))){
var inst_28176 = (state_28222[(13)]);
var inst_28175 = (state_28222[(10)]);
var inst_28182 = (state_28222[(11)]);
var inst_28199 = cljs.core.empty_QMARK_.call(null,inst_28175);
var inst_28200 = inst_28176.call(null,inst_28182);
var inst_28201 = cljs.core.not.call(null,inst_28200);
var inst_28202 = (inst_28199) && (inst_28201);
var state_28222__$1 = state_28222;
var statearr_28272_28327 = state_28222__$1;
(statearr_28272_28327[(2)] = inst_28202);

(statearr_28272_28327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (10))){
var inst_28128 = (state_28222[(8)]);
var inst_28148 = (state_28222[(2)]);
var inst_28149 = cljs.core.get.call(null,inst_28148,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28150 = cljs.core.get.call(null,inst_28148,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28151 = cljs.core.get.call(null,inst_28148,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28152 = inst_28128;
var state_28222__$1 = (function (){var statearr_28273 = state_28222;
(statearr_28273[(16)] = inst_28151);

(statearr_28273[(17)] = inst_28150);

(statearr_28273[(7)] = inst_28152);

(statearr_28273[(18)] = inst_28149);

return statearr_28273;
})();
var statearr_28274_28328 = state_28222__$1;
(statearr_28274_28328[(2)] = null);

(statearr_28274_28328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (18))){
var inst_28166 = (state_28222[(2)]);
var state_28222__$1 = state_28222;
var statearr_28275_28329 = state_28222__$1;
(statearr_28275_28329[(2)] = inst_28166);

(statearr_28275_28329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (37))){
var state_28222__$1 = state_28222;
var statearr_28276_28330 = state_28222__$1;
(statearr_28276_28330[(2)] = null);

(statearr_28276_28330[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28223 === (8))){
var inst_28128 = (state_28222[(8)]);
var inst_28145 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28128);
var state_28222__$1 = state_28222;
var statearr_28277_28331 = state_28222__$1;
(statearr_28277_28331[(2)] = inst_28145);

(statearr_28277_28331[(1)] = (10));


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
});})(c__21978__auto___28285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21913__auto__,c__21978__auto___28285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21914__auto__ = null;
var cljs$core$async$mix_$_state_machine__21914__auto____0 = (function (){
var statearr_28281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28281[(0)] = cljs$core$async$mix_$_state_machine__21914__auto__);

(statearr_28281[(1)] = (1));

return statearr_28281;
});
var cljs$core$async$mix_$_state_machine__21914__auto____1 = (function (state_28222){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_28222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e28282){if((e28282 instanceof Object)){
var ex__21917__auto__ = e28282;
var statearr_28283_28332 = state_28222;
(statearr_28283_28332[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28333 = state_28222;
state_28222 = G__28333;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21914__auto__ = function(state_28222){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21914__auto____1.call(this,state_28222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21914__auto____0;
cljs$core$async$mix_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21914__auto____1;
return cljs$core$async$mix_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___28285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21980__auto__ = (function (){var statearr_28284 = f__21979__auto__.call(null);
(statearr_28284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___28285);

return statearr_28284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___28285,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19164__auto__ = (((p == null))?null:p);
var m__19165__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19165__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19164__auto__ = (((p == null))?null:p);
var m__19165__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,p,v,ch);
} else {
var m__19165__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args28336 = [];
var len__19567__auto___28339 = arguments.length;
var i__19568__auto___28340 = (0);
while(true){
if((i__19568__auto___28340 < len__19567__auto___28339)){
args28336.push((arguments[i__19568__auto___28340]));

var G__28341 = (i__19568__auto___28340 + (1));
i__19568__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28338 = args28336.length;
switch (G__28338) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28336.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19164__auto__ = (((p == null))?null:p);
var m__19165__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,p);
} else {
var m__19165__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19164__auto__ = (((p == null))?null:p);
var m__19165__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,p,v);
} else {
var m__19165__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args28344 = [];
var len__19567__auto___28469 = arguments.length;
var i__19568__auto___28470 = (0);
while(true){
if((i__19568__auto___28470 < len__19567__auto___28469)){
args28344.push((arguments[i__19568__auto___28470]));

var G__28471 = (i__19568__auto___28470 + (1));
i__19568__auto___28470 = G__28471;
continue;
} else {
}
break;
}

var G__28346 = args28344.length;
switch (G__28346) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28344.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18528__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18528__auto__,mults){
return (function (p1__28343_SHARP_){
if(cljs.core.truth_(p1__28343_SHARP_.call(null,topic))){
return p1__28343_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28343_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18528__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28347 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28347 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28348){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28348 = meta28348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28349,meta28348__$1){
var self__ = this;
var _28349__$1 = this;
return (new cljs.core.async.t28347(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28348__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28349){
var self__ = this;
var _28349__$1 = this;
return self__.meta28348;
});})(mults,ensure_mult))
;

cljs.core.async.t28347.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28347.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28347.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28347.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28347.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28348","meta28348",967558849,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28347.cljs$lang$type = true;

cljs.core.async.t28347.cljs$lang$ctorStr = "cljs.core.async/t28347";

cljs.core.async.t28347.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28347");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28347 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28347(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28348){
return (new cljs.core.async.t28347(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28348));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28347(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21978__auto___28473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___28473,mults,ensure_mult,p){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___28473,mults,ensure_mult,p){
return (function (state_28421){
var state_val_28422 = (state_28421[(1)]);
if((state_val_28422 === (7))){
var inst_28417 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
var statearr_28423_28474 = state_28421__$1;
(statearr_28423_28474[(2)] = inst_28417);

(statearr_28423_28474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (20))){
var state_28421__$1 = state_28421;
var statearr_28424_28475 = state_28421__$1;
(statearr_28424_28475[(2)] = null);

(statearr_28424_28475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (1))){
var state_28421__$1 = state_28421;
var statearr_28425_28476 = state_28421__$1;
(statearr_28425_28476[(2)] = null);

(statearr_28425_28476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (24))){
var inst_28400 = (state_28421[(7)]);
var inst_28409 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28400);
var state_28421__$1 = state_28421;
var statearr_28426_28477 = state_28421__$1;
(statearr_28426_28477[(2)] = inst_28409);

(statearr_28426_28477[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (4))){
var inst_28352 = (state_28421[(8)]);
var inst_28352__$1 = (state_28421[(2)]);
var inst_28353 = (inst_28352__$1 == null);
var state_28421__$1 = (function (){var statearr_28427 = state_28421;
(statearr_28427[(8)] = inst_28352__$1);

return statearr_28427;
})();
if(cljs.core.truth_(inst_28353)){
var statearr_28428_28478 = state_28421__$1;
(statearr_28428_28478[(1)] = (5));

} else {
var statearr_28429_28479 = state_28421__$1;
(statearr_28429_28479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (15))){
var inst_28394 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
var statearr_28430_28480 = state_28421__$1;
(statearr_28430_28480[(2)] = inst_28394);

(statearr_28430_28480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (21))){
var inst_28414 = (state_28421[(2)]);
var state_28421__$1 = (function (){var statearr_28431 = state_28421;
(statearr_28431[(9)] = inst_28414);

return statearr_28431;
})();
var statearr_28432_28481 = state_28421__$1;
(statearr_28432_28481[(2)] = null);

(statearr_28432_28481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (13))){
var inst_28376 = (state_28421[(10)]);
var inst_28378 = cljs.core.chunked_seq_QMARK_.call(null,inst_28376);
var state_28421__$1 = state_28421;
if(inst_28378){
var statearr_28433_28482 = state_28421__$1;
(statearr_28433_28482[(1)] = (16));

} else {
var statearr_28434_28483 = state_28421__$1;
(statearr_28434_28483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (22))){
var inst_28406 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
if(cljs.core.truth_(inst_28406)){
var statearr_28435_28484 = state_28421__$1;
(statearr_28435_28484[(1)] = (23));

} else {
var statearr_28436_28485 = state_28421__$1;
(statearr_28436_28485[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (6))){
var inst_28402 = (state_28421[(11)]);
var inst_28352 = (state_28421[(8)]);
var inst_28400 = (state_28421[(7)]);
var inst_28400__$1 = topic_fn.call(null,inst_28352);
var inst_28401 = cljs.core.deref.call(null,mults);
var inst_28402__$1 = cljs.core.get.call(null,inst_28401,inst_28400__$1);
var state_28421__$1 = (function (){var statearr_28437 = state_28421;
(statearr_28437[(11)] = inst_28402__$1);

(statearr_28437[(7)] = inst_28400__$1);

return statearr_28437;
})();
if(cljs.core.truth_(inst_28402__$1)){
var statearr_28438_28486 = state_28421__$1;
(statearr_28438_28486[(1)] = (19));

} else {
var statearr_28439_28487 = state_28421__$1;
(statearr_28439_28487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (25))){
var inst_28411 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
var statearr_28440_28488 = state_28421__$1;
(statearr_28440_28488[(2)] = inst_28411);

(statearr_28440_28488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (17))){
var inst_28376 = (state_28421[(10)]);
var inst_28385 = cljs.core.first.call(null,inst_28376);
var inst_28386 = cljs.core.async.muxch_STAR_.call(null,inst_28385);
var inst_28387 = cljs.core.async.close_BANG_.call(null,inst_28386);
var inst_28388 = cljs.core.next.call(null,inst_28376);
var inst_28362 = inst_28388;
var inst_28363 = null;
var inst_28364 = (0);
var inst_28365 = (0);
var state_28421__$1 = (function (){var statearr_28441 = state_28421;
(statearr_28441[(12)] = inst_28363);

(statearr_28441[(13)] = inst_28387);

(statearr_28441[(14)] = inst_28365);

(statearr_28441[(15)] = inst_28362);

(statearr_28441[(16)] = inst_28364);

return statearr_28441;
})();
var statearr_28442_28489 = state_28421__$1;
(statearr_28442_28489[(2)] = null);

(statearr_28442_28489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (3))){
var inst_28419 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28421__$1,inst_28419);
} else {
if((state_val_28422 === (12))){
var inst_28396 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
var statearr_28443_28490 = state_28421__$1;
(statearr_28443_28490[(2)] = inst_28396);

(statearr_28443_28490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (2))){
var state_28421__$1 = state_28421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28421__$1,(4),ch);
} else {
if((state_val_28422 === (23))){
var state_28421__$1 = state_28421;
var statearr_28444_28491 = state_28421__$1;
(statearr_28444_28491[(2)] = null);

(statearr_28444_28491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (19))){
var inst_28402 = (state_28421[(11)]);
var inst_28352 = (state_28421[(8)]);
var inst_28404 = cljs.core.async.muxch_STAR_.call(null,inst_28402);
var state_28421__$1 = state_28421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28421__$1,(22),inst_28404,inst_28352);
} else {
if((state_val_28422 === (11))){
var inst_28362 = (state_28421[(15)]);
var inst_28376 = (state_28421[(10)]);
var inst_28376__$1 = cljs.core.seq.call(null,inst_28362);
var state_28421__$1 = (function (){var statearr_28445 = state_28421;
(statearr_28445[(10)] = inst_28376__$1);

return statearr_28445;
})();
if(inst_28376__$1){
var statearr_28446_28492 = state_28421__$1;
(statearr_28446_28492[(1)] = (13));

} else {
var statearr_28447_28493 = state_28421__$1;
(statearr_28447_28493[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (9))){
var inst_28398 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
var statearr_28448_28494 = state_28421__$1;
(statearr_28448_28494[(2)] = inst_28398);

(statearr_28448_28494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (5))){
var inst_28359 = cljs.core.deref.call(null,mults);
var inst_28360 = cljs.core.vals.call(null,inst_28359);
var inst_28361 = cljs.core.seq.call(null,inst_28360);
var inst_28362 = inst_28361;
var inst_28363 = null;
var inst_28364 = (0);
var inst_28365 = (0);
var state_28421__$1 = (function (){var statearr_28449 = state_28421;
(statearr_28449[(12)] = inst_28363);

(statearr_28449[(14)] = inst_28365);

(statearr_28449[(15)] = inst_28362);

(statearr_28449[(16)] = inst_28364);

return statearr_28449;
})();
var statearr_28450_28495 = state_28421__$1;
(statearr_28450_28495[(2)] = null);

(statearr_28450_28495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (14))){
var state_28421__$1 = state_28421;
var statearr_28454_28496 = state_28421__$1;
(statearr_28454_28496[(2)] = null);

(statearr_28454_28496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (16))){
var inst_28376 = (state_28421[(10)]);
var inst_28380 = cljs.core.chunk_first.call(null,inst_28376);
var inst_28381 = cljs.core.chunk_rest.call(null,inst_28376);
var inst_28382 = cljs.core.count.call(null,inst_28380);
var inst_28362 = inst_28381;
var inst_28363 = inst_28380;
var inst_28364 = inst_28382;
var inst_28365 = (0);
var state_28421__$1 = (function (){var statearr_28455 = state_28421;
(statearr_28455[(12)] = inst_28363);

(statearr_28455[(14)] = inst_28365);

(statearr_28455[(15)] = inst_28362);

(statearr_28455[(16)] = inst_28364);

return statearr_28455;
})();
var statearr_28456_28497 = state_28421__$1;
(statearr_28456_28497[(2)] = null);

(statearr_28456_28497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (10))){
var inst_28363 = (state_28421[(12)]);
var inst_28365 = (state_28421[(14)]);
var inst_28362 = (state_28421[(15)]);
var inst_28364 = (state_28421[(16)]);
var inst_28370 = cljs.core._nth.call(null,inst_28363,inst_28365);
var inst_28371 = cljs.core.async.muxch_STAR_.call(null,inst_28370);
var inst_28372 = cljs.core.async.close_BANG_.call(null,inst_28371);
var inst_28373 = (inst_28365 + (1));
var tmp28451 = inst_28363;
var tmp28452 = inst_28362;
var tmp28453 = inst_28364;
var inst_28362__$1 = tmp28452;
var inst_28363__$1 = tmp28451;
var inst_28364__$1 = tmp28453;
var inst_28365__$1 = inst_28373;
var state_28421__$1 = (function (){var statearr_28457 = state_28421;
(statearr_28457[(17)] = inst_28372);

(statearr_28457[(12)] = inst_28363__$1);

(statearr_28457[(14)] = inst_28365__$1);

(statearr_28457[(15)] = inst_28362__$1);

(statearr_28457[(16)] = inst_28364__$1);

return statearr_28457;
})();
var statearr_28458_28498 = state_28421__$1;
(statearr_28458_28498[(2)] = null);

(statearr_28458_28498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (18))){
var inst_28391 = (state_28421[(2)]);
var state_28421__$1 = state_28421;
var statearr_28459_28499 = state_28421__$1;
(statearr_28459_28499[(2)] = inst_28391);

(statearr_28459_28499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28422 === (8))){
var inst_28365 = (state_28421[(14)]);
var inst_28364 = (state_28421[(16)]);
var inst_28367 = (inst_28365 < inst_28364);
var inst_28368 = inst_28367;
var state_28421__$1 = state_28421;
if(cljs.core.truth_(inst_28368)){
var statearr_28460_28500 = state_28421__$1;
(statearr_28460_28500[(1)] = (10));

} else {
var statearr_28461_28501 = state_28421__$1;
(statearr_28461_28501[(1)] = (11));

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
});})(c__21978__auto___28473,mults,ensure_mult,p))
;
return ((function (switch__21913__auto__,c__21978__auto___28473,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_28465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28465[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_28465[(1)] = (1));

return statearr_28465;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_28421){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_28421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e28466){if((e28466 instanceof Object)){
var ex__21917__auto__ = e28466;
var statearr_28467_28502 = state_28421;
(statearr_28467_28502[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28503 = state_28421;
state_28421 = G__28503;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_28421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_28421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___28473,mults,ensure_mult,p))
})();
var state__21980__auto__ = (function (){var statearr_28468 = f__21979__auto__.call(null);
(statearr_28468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___28473);

return statearr_28468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___28473,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args28504 = [];
var len__19567__auto___28507 = arguments.length;
var i__19568__auto___28508 = (0);
while(true){
if((i__19568__auto___28508 < len__19567__auto___28507)){
args28504.push((arguments[i__19568__auto___28508]));

var G__28509 = (i__19568__auto___28508 + (1));
i__19568__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var G__28506 = args28504.length;
switch (G__28506) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28504.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args28511 = [];
var len__19567__auto___28514 = arguments.length;
var i__19568__auto___28515 = (0);
while(true){
if((i__19568__auto___28515 < len__19567__auto___28514)){
args28511.push((arguments[i__19568__auto___28515]));

var G__28516 = (i__19568__auto___28515 + (1));
i__19568__auto___28515 = G__28516;
continue;
} else {
}
break;
}

var G__28513 = args28511.length;
switch (G__28513) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28511.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args28518 = [];
var len__19567__auto___28589 = arguments.length;
var i__19568__auto___28590 = (0);
while(true){
if((i__19568__auto___28590 < len__19567__auto___28589)){
args28518.push((arguments[i__19568__auto___28590]));

var G__28591 = (i__19568__auto___28590 + (1));
i__19568__auto___28590 = G__28591;
continue;
} else {
}
break;
}

var G__28520 = args28518.length;
switch (G__28520) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28518.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21978__auto___28593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___28593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___28593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28559){
var state_val_28560 = (state_28559[(1)]);
if((state_val_28560 === (7))){
var state_28559__$1 = state_28559;
var statearr_28561_28594 = state_28559__$1;
(statearr_28561_28594[(2)] = null);

(statearr_28561_28594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (1))){
var state_28559__$1 = state_28559;
var statearr_28562_28595 = state_28559__$1;
(statearr_28562_28595[(2)] = null);

(statearr_28562_28595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (4))){
var inst_28523 = (state_28559[(7)]);
var inst_28525 = (inst_28523 < cnt);
var state_28559__$1 = state_28559;
if(cljs.core.truth_(inst_28525)){
var statearr_28563_28596 = state_28559__$1;
(statearr_28563_28596[(1)] = (6));

} else {
var statearr_28564_28597 = state_28559__$1;
(statearr_28564_28597[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (15))){
var inst_28555 = (state_28559[(2)]);
var state_28559__$1 = state_28559;
var statearr_28565_28598 = state_28559__$1;
(statearr_28565_28598[(2)] = inst_28555);

(statearr_28565_28598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (13))){
var inst_28548 = cljs.core.async.close_BANG_.call(null,out);
var state_28559__$1 = state_28559;
var statearr_28566_28599 = state_28559__$1;
(statearr_28566_28599[(2)] = inst_28548);

(statearr_28566_28599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (6))){
var state_28559__$1 = state_28559;
var statearr_28567_28600 = state_28559__$1;
(statearr_28567_28600[(2)] = null);

(statearr_28567_28600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (3))){
var inst_28557 = (state_28559[(2)]);
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28559__$1,inst_28557);
} else {
if((state_val_28560 === (12))){
var inst_28545 = (state_28559[(8)]);
var inst_28545__$1 = (state_28559[(2)]);
var inst_28546 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28545__$1);
var state_28559__$1 = (function (){var statearr_28568 = state_28559;
(statearr_28568[(8)] = inst_28545__$1);

return statearr_28568;
})();
if(cljs.core.truth_(inst_28546)){
var statearr_28569_28601 = state_28559__$1;
(statearr_28569_28601[(1)] = (13));

} else {
var statearr_28570_28602 = state_28559__$1;
(statearr_28570_28602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (2))){
var inst_28522 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28523 = (0);
var state_28559__$1 = (function (){var statearr_28571 = state_28559;
(statearr_28571[(9)] = inst_28522);

(statearr_28571[(7)] = inst_28523);

return statearr_28571;
})();
var statearr_28572_28603 = state_28559__$1;
(statearr_28572_28603[(2)] = null);

(statearr_28572_28603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (11))){
var inst_28523 = (state_28559[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28559,(10),Object,null,(9));
var inst_28532 = chs__$1.call(null,inst_28523);
var inst_28533 = done.call(null,inst_28523);
var inst_28534 = cljs.core.async.take_BANG_.call(null,inst_28532,inst_28533);
var state_28559__$1 = state_28559;
var statearr_28573_28604 = state_28559__$1;
(statearr_28573_28604[(2)] = inst_28534);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (9))){
var inst_28523 = (state_28559[(7)]);
var inst_28536 = (state_28559[(2)]);
var inst_28537 = (inst_28523 + (1));
var inst_28523__$1 = inst_28537;
var state_28559__$1 = (function (){var statearr_28574 = state_28559;
(statearr_28574[(7)] = inst_28523__$1);

(statearr_28574[(10)] = inst_28536);

return statearr_28574;
})();
var statearr_28575_28605 = state_28559__$1;
(statearr_28575_28605[(2)] = null);

(statearr_28575_28605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (5))){
var inst_28543 = (state_28559[(2)]);
var state_28559__$1 = (function (){var statearr_28576 = state_28559;
(statearr_28576[(11)] = inst_28543);

return statearr_28576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28559__$1,(12),dchan);
} else {
if((state_val_28560 === (14))){
var inst_28545 = (state_28559[(8)]);
var inst_28550 = cljs.core.apply.call(null,f,inst_28545);
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28559__$1,(16),out,inst_28550);
} else {
if((state_val_28560 === (16))){
var inst_28552 = (state_28559[(2)]);
var state_28559__$1 = (function (){var statearr_28577 = state_28559;
(statearr_28577[(12)] = inst_28552);

return statearr_28577;
})();
var statearr_28578_28606 = state_28559__$1;
(statearr_28578_28606[(2)] = null);

(statearr_28578_28606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (10))){
var inst_28527 = (state_28559[(2)]);
var inst_28528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28559__$1 = (function (){var statearr_28579 = state_28559;
(statearr_28579[(13)] = inst_28527);

return statearr_28579;
})();
var statearr_28580_28607 = state_28559__$1;
(statearr_28580_28607[(2)] = inst_28528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28559__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28560 === (8))){
var inst_28541 = (state_28559[(2)]);
var state_28559__$1 = state_28559;
var statearr_28581_28608 = state_28559__$1;
(statearr_28581_28608[(2)] = inst_28541);

(statearr_28581_28608[(1)] = (5));


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
});})(c__21978__auto___28593,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21913__auto__,c__21978__auto___28593,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_28559){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_28559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__21917__auto__ = e28586;
var statearr_28587_28609 = state_28559;
(statearr_28587_28609[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28610 = state_28559;
state_28559 = G__28610;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_28559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_28559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___28593,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21980__auto__ = (function (){var statearr_28588 = f__21979__auto__.call(null);
(statearr_28588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___28593);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___28593,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args28612 = [];
var len__19567__auto___28668 = arguments.length;
var i__19568__auto___28669 = (0);
while(true){
if((i__19568__auto___28669 < len__19567__auto___28668)){
args28612.push((arguments[i__19568__auto___28669]));

var G__28670 = (i__19568__auto___28669 + (1));
i__19568__auto___28669 = G__28670;
continue;
} else {
}
break;
}

var G__28614 = args28612.length;
switch (G__28614) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28612.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21978__auto___28672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___28672,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___28672,out){
return (function (state_28644){
var state_val_28645 = (state_28644[(1)]);
if((state_val_28645 === (7))){
var inst_28624 = (state_28644[(7)]);
var inst_28623 = (state_28644[(8)]);
var inst_28623__$1 = (state_28644[(2)]);
var inst_28624__$1 = cljs.core.nth.call(null,inst_28623__$1,(0),null);
var inst_28625 = cljs.core.nth.call(null,inst_28623__$1,(1),null);
var inst_28626 = (inst_28624__$1 == null);
var state_28644__$1 = (function (){var statearr_28646 = state_28644;
(statearr_28646[(9)] = inst_28625);

(statearr_28646[(7)] = inst_28624__$1);

(statearr_28646[(8)] = inst_28623__$1);

return statearr_28646;
})();
if(cljs.core.truth_(inst_28626)){
var statearr_28647_28673 = state_28644__$1;
(statearr_28647_28673[(1)] = (8));

} else {
var statearr_28648_28674 = state_28644__$1;
(statearr_28648_28674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (1))){
var inst_28615 = cljs.core.vec.call(null,chs);
var inst_28616 = inst_28615;
var state_28644__$1 = (function (){var statearr_28649 = state_28644;
(statearr_28649[(10)] = inst_28616);

return statearr_28649;
})();
var statearr_28650_28675 = state_28644__$1;
(statearr_28650_28675[(2)] = null);

(statearr_28650_28675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (4))){
var inst_28616 = (state_28644[(10)]);
var state_28644__$1 = state_28644;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28644__$1,(7),inst_28616);
} else {
if((state_val_28645 === (6))){
var inst_28640 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28651_28676 = state_28644__$1;
(statearr_28651_28676[(2)] = inst_28640);

(statearr_28651_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (3))){
var inst_28642 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28644__$1,inst_28642);
} else {
if((state_val_28645 === (2))){
var inst_28616 = (state_28644[(10)]);
var inst_28618 = cljs.core.count.call(null,inst_28616);
var inst_28619 = (inst_28618 > (0));
var state_28644__$1 = state_28644;
if(cljs.core.truth_(inst_28619)){
var statearr_28653_28677 = state_28644__$1;
(statearr_28653_28677[(1)] = (4));

} else {
var statearr_28654_28678 = state_28644__$1;
(statearr_28654_28678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (11))){
var inst_28616 = (state_28644[(10)]);
var inst_28633 = (state_28644[(2)]);
var tmp28652 = inst_28616;
var inst_28616__$1 = tmp28652;
var state_28644__$1 = (function (){var statearr_28655 = state_28644;
(statearr_28655[(10)] = inst_28616__$1);

(statearr_28655[(11)] = inst_28633);

return statearr_28655;
})();
var statearr_28656_28679 = state_28644__$1;
(statearr_28656_28679[(2)] = null);

(statearr_28656_28679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (9))){
var inst_28624 = (state_28644[(7)]);
var state_28644__$1 = state_28644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28644__$1,(11),out,inst_28624);
} else {
if((state_val_28645 === (5))){
var inst_28638 = cljs.core.async.close_BANG_.call(null,out);
var state_28644__$1 = state_28644;
var statearr_28657_28680 = state_28644__$1;
(statearr_28657_28680[(2)] = inst_28638);

(statearr_28657_28680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (10))){
var inst_28636 = (state_28644[(2)]);
var state_28644__$1 = state_28644;
var statearr_28658_28681 = state_28644__$1;
(statearr_28658_28681[(2)] = inst_28636);

(statearr_28658_28681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28645 === (8))){
var inst_28625 = (state_28644[(9)]);
var inst_28624 = (state_28644[(7)]);
var inst_28616 = (state_28644[(10)]);
var inst_28623 = (state_28644[(8)]);
var inst_28628 = (function (){var cs = inst_28616;
var vec__28621 = inst_28623;
var v = inst_28624;
var c = inst_28625;
return ((function (cs,vec__28621,v,c,inst_28625,inst_28624,inst_28616,inst_28623,state_val_28645,c__21978__auto___28672,out){
return (function (p1__28611_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28611_SHARP_);
});
;})(cs,vec__28621,v,c,inst_28625,inst_28624,inst_28616,inst_28623,state_val_28645,c__21978__auto___28672,out))
})();
var inst_28629 = cljs.core.filterv.call(null,inst_28628,inst_28616);
var inst_28616__$1 = inst_28629;
var state_28644__$1 = (function (){var statearr_28659 = state_28644;
(statearr_28659[(10)] = inst_28616__$1);

return statearr_28659;
})();
var statearr_28660_28682 = state_28644__$1;
(statearr_28660_28682[(2)] = null);

(statearr_28660_28682[(1)] = (2));


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
});})(c__21978__auto___28672,out))
;
return ((function (switch__21913__auto__,c__21978__auto___28672,out){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_28664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28664[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_28664[(1)] = (1));

return statearr_28664;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_28644){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_28644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e28665){if((e28665 instanceof Object)){
var ex__21917__auto__ = e28665;
var statearr_28666_28683 = state_28644;
(statearr_28666_28683[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28684 = state_28644;
state_28644 = G__28684;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_28644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_28644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___28672,out))
})();
var state__21980__auto__ = (function (){var statearr_28667 = f__21979__auto__.call(null);
(statearr_28667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___28672);

return statearr_28667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___28672,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args28685 = [];
var len__19567__auto___28734 = arguments.length;
var i__19568__auto___28735 = (0);
while(true){
if((i__19568__auto___28735 < len__19567__auto___28734)){
args28685.push((arguments[i__19568__auto___28735]));

var G__28736 = (i__19568__auto___28735 + (1));
i__19568__auto___28735 = G__28736;
continue;
} else {
}
break;
}

var G__28687 = args28685.length;
switch (G__28687) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28685.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21978__auto___28738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___28738,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___28738,out){
return (function (state_28711){
var state_val_28712 = (state_28711[(1)]);
if((state_val_28712 === (7))){
var inst_28693 = (state_28711[(7)]);
var inst_28693__$1 = (state_28711[(2)]);
var inst_28694 = (inst_28693__$1 == null);
var inst_28695 = cljs.core.not.call(null,inst_28694);
var state_28711__$1 = (function (){var statearr_28713 = state_28711;
(statearr_28713[(7)] = inst_28693__$1);

return statearr_28713;
})();
if(inst_28695){
var statearr_28714_28739 = state_28711__$1;
(statearr_28714_28739[(1)] = (8));

} else {
var statearr_28715_28740 = state_28711__$1;
(statearr_28715_28740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (1))){
var inst_28688 = (0);
var state_28711__$1 = (function (){var statearr_28716 = state_28711;
(statearr_28716[(8)] = inst_28688);

return statearr_28716;
})();
var statearr_28717_28741 = state_28711__$1;
(statearr_28717_28741[(2)] = null);

(statearr_28717_28741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (4))){
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28711__$1,(7),ch);
} else {
if((state_val_28712 === (6))){
var inst_28706 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28718_28742 = state_28711__$1;
(statearr_28718_28742[(2)] = inst_28706);

(statearr_28718_28742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (3))){
var inst_28708 = (state_28711[(2)]);
var inst_28709 = cljs.core.async.close_BANG_.call(null,out);
var state_28711__$1 = (function (){var statearr_28719 = state_28711;
(statearr_28719[(9)] = inst_28708);

return statearr_28719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28711__$1,inst_28709);
} else {
if((state_val_28712 === (2))){
var inst_28688 = (state_28711[(8)]);
var inst_28690 = (inst_28688 < n);
var state_28711__$1 = state_28711;
if(cljs.core.truth_(inst_28690)){
var statearr_28720_28743 = state_28711__$1;
(statearr_28720_28743[(1)] = (4));

} else {
var statearr_28721_28744 = state_28711__$1;
(statearr_28721_28744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (11))){
var inst_28688 = (state_28711[(8)]);
var inst_28698 = (state_28711[(2)]);
var inst_28699 = (inst_28688 + (1));
var inst_28688__$1 = inst_28699;
var state_28711__$1 = (function (){var statearr_28722 = state_28711;
(statearr_28722[(10)] = inst_28698);

(statearr_28722[(8)] = inst_28688__$1);

return statearr_28722;
})();
var statearr_28723_28745 = state_28711__$1;
(statearr_28723_28745[(2)] = null);

(statearr_28723_28745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (9))){
var state_28711__$1 = state_28711;
var statearr_28724_28746 = state_28711__$1;
(statearr_28724_28746[(2)] = null);

(statearr_28724_28746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (5))){
var state_28711__$1 = state_28711;
var statearr_28725_28747 = state_28711__$1;
(statearr_28725_28747[(2)] = null);

(statearr_28725_28747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (10))){
var inst_28703 = (state_28711[(2)]);
var state_28711__$1 = state_28711;
var statearr_28726_28748 = state_28711__$1;
(statearr_28726_28748[(2)] = inst_28703);

(statearr_28726_28748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28712 === (8))){
var inst_28693 = (state_28711[(7)]);
var state_28711__$1 = state_28711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28711__$1,(11),out,inst_28693);
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
});})(c__21978__auto___28738,out))
;
return ((function (switch__21913__auto__,c__21978__auto___28738,out){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_28730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28730[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_28730[(1)] = (1));

return statearr_28730;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_28711){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_28711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e28731){if((e28731 instanceof Object)){
var ex__21917__auto__ = e28731;
var statearr_28732_28749 = state_28711;
(statearr_28732_28749[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28750 = state_28711;
state_28711 = G__28750;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_28711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_28711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___28738,out))
})();
var state__21980__auto__ = (function (){var statearr_28733 = f__21979__auto__.call(null);
(statearr_28733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___28738);

return statearr_28733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___28738,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28758 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28758 = (function (map_LT_,f,ch,meta28759){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28759 = meta28759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28760,meta28759__$1){
var self__ = this;
var _28760__$1 = this;
return (new cljs.core.async.t28758(self__.map_LT_,self__.f,self__.ch,meta28759__$1));
});

cljs.core.async.t28758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28760){
var self__ = this;
var _28760__$1 = this;
return self__.meta28759;
});

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28761 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28761 = (function (map_LT_,f,ch,meta28759,_,fn1,meta28762){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28759 = meta28759;
this._ = _;
this.fn1 = fn1;
this.meta28762 = meta28762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28763,meta28762__$1){
var self__ = this;
var _28763__$1 = this;
return (new cljs.core.async.t28761(self__.map_LT_,self__.f,self__.ch,self__.meta28759,self__._,self__.fn1,meta28762__$1));
});})(___$1))
;

cljs.core.async.t28761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28763){
var self__ = this;
var _28763__$1 = this;
return self__.meta28762;
});})(___$1))
;

cljs.core.async.t28761.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28751_SHARP_){
return f1.call(null,(((p1__28751_SHARP_ == null))?null:self__.f.call(null,p1__28751_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28761.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28759","meta28759",-685215842,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t28758","cljs.core.async/t28758",2062578029,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28762","meta28762",-85409653,null)], null);
});})(___$1))
;

cljs.core.async.t28761.cljs$lang$type = true;

cljs.core.async.t28761.cljs$lang$ctorStr = "cljs.core.async/t28761";

cljs.core.async.t28761.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28761");
});})(___$1))
;

cljs.core.async.__GT_t28761 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28761(map_LT___$1,f__$1,ch__$1,meta28759__$1,___$2,fn1__$1,meta28762){
return (new cljs.core.async.t28761(map_LT___$1,f__$1,ch__$1,meta28759__$1,___$2,fn1__$1,meta28762));
});})(___$1))
;

}

return (new cljs.core.async.t28761(self__.map_LT_,self__.f,self__.ch,self__.meta28759,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18516__auto__ = ret;
if(cljs.core.truth_(and__18516__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18516__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28759","meta28759",-685215842,null)], null);
});

cljs.core.async.t28758.cljs$lang$type = true;

cljs.core.async.t28758.cljs$lang$ctorStr = "cljs.core.async/t28758";

cljs.core.async.t28758.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28758");
});

cljs.core.async.__GT_t28758 = (function cljs$core$async$map_LT__$___GT_t28758(map_LT___$1,f__$1,ch__$1,meta28759){
return (new cljs.core.async.t28758(map_LT___$1,f__$1,ch__$1,meta28759));
});

}

return (new cljs.core.async.t28758(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28767 = (function (map_GT_,f,ch,meta28768){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28768 = meta28768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28769,meta28768__$1){
var self__ = this;
var _28769__$1 = this;
return (new cljs.core.async.t28767(self__.map_GT_,self__.f,self__.ch,meta28768__$1));
});

cljs.core.async.t28767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28769){
var self__ = this;
var _28769__$1 = this;
return self__.meta28768;
});

cljs.core.async.t28767.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28768","meta28768",-797844832,null)], null);
});

cljs.core.async.t28767.cljs$lang$type = true;

cljs.core.async.t28767.cljs$lang$ctorStr = "cljs.core.async/t28767";

cljs.core.async.t28767.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28767");
});

cljs.core.async.__GT_t28767 = (function cljs$core$async$map_GT__$___GT_t28767(map_GT___$1,f__$1,ch__$1,meta28768){
return (new cljs.core.async.t28767(map_GT___$1,f__$1,ch__$1,meta28768));
});

}

return (new cljs.core.async.t28767(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28773 = (function (filter_GT_,p,ch,meta28774){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28774 = meta28774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28775,meta28774__$1){
var self__ = this;
var _28775__$1 = this;
return (new cljs.core.async.t28773(self__.filter_GT_,self__.p,self__.ch,meta28774__$1));
});

cljs.core.async.t28773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28775){
var self__ = this;
var _28775__$1 = this;
return self__.meta28774;
});

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28774","meta28774",186699151,null)], null);
});

cljs.core.async.t28773.cljs$lang$type = true;

cljs.core.async.t28773.cljs$lang$ctorStr = "cljs.core.async/t28773";

cljs.core.async.t28773.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28773");
});

cljs.core.async.__GT_t28773 = (function cljs$core$async$filter_GT__$___GT_t28773(filter_GT___$1,p__$1,ch__$1,meta28774){
return (new cljs.core.async.t28773(filter_GT___$1,p__$1,ch__$1,meta28774));
});

}

return (new cljs.core.async.t28773(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args28776 = [];
var len__19567__auto___28820 = arguments.length;
var i__19568__auto___28821 = (0);
while(true){
if((i__19568__auto___28821 < len__19567__auto___28820)){
args28776.push((arguments[i__19568__auto___28821]));

var G__28822 = (i__19568__auto___28821 + (1));
i__19568__auto___28821 = G__28822;
continue;
} else {
}
break;
}

var G__28778 = args28776.length;
switch (G__28778) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28776.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21978__auto___28824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___28824,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___28824,out){
return (function (state_28799){
var state_val_28800 = (state_28799[(1)]);
if((state_val_28800 === (7))){
var inst_28795 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28801_28825 = state_28799__$1;
(statearr_28801_28825[(2)] = inst_28795);

(statearr_28801_28825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (1))){
var state_28799__$1 = state_28799;
var statearr_28802_28826 = state_28799__$1;
(statearr_28802_28826[(2)] = null);

(statearr_28802_28826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (4))){
var inst_28781 = (state_28799[(7)]);
var inst_28781__$1 = (state_28799[(2)]);
var inst_28782 = (inst_28781__$1 == null);
var state_28799__$1 = (function (){var statearr_28803 = state_28799;
(statearr_28803[(7)] = inst_28781__$1);

return statearr_28803;
})();
if(cljs.core.truth_(inst_28782)){
var statearr_28804_28827 = state_28799__$1;
(statearr_28804_28827[(1)] = (5));

} else {
var statearr_28805_28828 = state_28799__$1;
(statearr_28805_28828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (6))){
var inst_28781 = (state_28799[(7)]);
var inst_28786 = p.call(null,inst_28781);
var state_28799__$1 = state_28799;
if(cljs.core.truth_(inst_28786)){
var statearr_28806_28829 = state_28799__$1;
(statearr_28806_28829[(1)] = (8));

} else {
var statearr_28807_28830 = state_28799__$1;
(statearr_28807_28830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (3))){
var inst_28797 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28799__$1,inst_28797);
} else {
if((state_val_28800 === (2))){
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28799__$1,(4),ch);
} else {
if((state_val_28800 === (11))){
var inst_28789 = (state_28799[(2)]);
var state_28799__$1 = state_28799;
var statearr_28808_28831 = state_28799__$1;
(statearr_28808_28831[(2)] = inst_28789);

(statearr_28808_28831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (9))){
var state_28799__$1 = state_28799;
var statearr_28809_28832 = state_28799__$1;
(statearr_28809_28832[(2)] = null);

(statearr_28809_28832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (5))){
var inst_28784 = cljs.core.async.close_BANG_.call(null,out);
var state_28799__$1 = state_28799;
var statearr_28810_28833 = state_28799__$1;
(statearr_28810_28833[(2)] = inst_28784);

(statearr_28810_28833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (10))){
var inst_28792 = (state_28799[(2)]);
var state_28799__$1 = (function (){var statearr_28811 = state_28799;
(statearr_28811[(8)] = inst_28792);

return statearr_28811;
})();
var statearr_28812_28834 = state_28799__$1;
(statearr_28812_28834[(2)] = null);

(statearr_28812_28834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28800 === (8))){
var inst_28781 = (state_28799[(7)]);
var state_28799__$1 = state_28799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28799__$1,(11),out,inst_28781);
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
});})(c__21978__auto___28824,out))
;
return ((function (switch__21913__auto__,c__21978__auto___28824,out){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_28816 = [null,null,null,null,null,null,null,null,null];
(statearr_28816[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_28816[(1)] = (1));

return statearr_28816;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_28799){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_28799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e28817){if((e28817 instanceof Object)){
var ex__21917__auto__ = e28817;
var statearr_28818_28835 = state_28799;
(statearr_28818_28835[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28836 = state_28799;
state_28799 = G__28836;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_28799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_28799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___28824,out))
})();
var state__21980__auto__ = (function (){var statearr_28819 = f__21979__auto__.call(null);
(statearr_28819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___28824);

return statearr_28819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___28824,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args28837 = [];
var len__19567__auto___28840 = arguments.length;
var i__19568__auto___28841 = (0);
while(true){
if((i__19568__auto___28841 < len__19567__auto___28840)){
args28837.push((arguments[i__19568__auto___28841]));

var G__28842 = (i__19568__auto___28841 + (1));
i__19568__auto___28841 = G__28842;
continue;
} else {
}
break;
}

var G__28839 = args28837.length;
switch (G__28839) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28837.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__){
return (function (state_29009){
var state_val_29010 = (state_29009[(1)]);
if((state_val_29010 === (7))){
var inst_29005 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29011_29052 = state_29009__$1;
(statearr_29011_29052[(2)] = inst_29005);

(statearr_29011_29052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (20))){
var inst_28975 = (state_29009[(7)]);
var inst_28986 = (state_29009[(2)]);
var inst_28987 = cljs.core.next.call(null,inst_28975);
var inst_28961 = inst_28987;
var inst_28962 = null;
var inst_28963 = (0);
var inst_28964 = (0);
var state_29009__$1 = (function (){var statearr_29012 = state_29009;
(statearr_29012[(8)] = inst_28963);

(statearr_29012[(9)] = inst_28964);

(statearr_29012[(10)] = inst_28986);

(statearr_29012[(11)] = inst_28961);

(statearr_29012[(12)] = inst_28962);

return statearr_29012;
})();
var statearr_29013_29053 = state_29009__$1;
(statearr_29013_29053[(2)] = null);

(statearr_29013_29053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (1))){
var state_29009__$1 = state_29009;
var statearr_29014_29054 = state_29009__$1;
(statearr_29014_29054[(2)] = null);

(statearr_29014_29054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (4))){
var inst_28950 = (state_29009[(13)]);
var inst_28950__$1 = (state_29009[(2)]);
var inst_28951 = (inst_28950__$1 == null);
var state_29009__$1 = (function (){var statearr_29015 = state_29009;
(statearr_29015[(13)] = inst_28950__$1);

return statearr_29015;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_29016_29055 = state_29009__$1;
(statearr_29016_29055[(1)] = (5));

} else {
var statearr_29017_29056 = state_29009__$1;
(statearr_29017_29056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (15))){
var state_29009__$1 = state_29009;
var statearr_29021_29057 = state_29009__$1;
(statearr_29021_29057[(2)] = null);

(statearr_29021_29057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (21))){
var state_29009__$1 = state_29009;
var statearr_29022_29058 = state_29009__$1;
(statearr_29022_29058[(2)] = null);

(statearr_29022_29058[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (13))){
var inst_28963 = (state_29009[(8)]);
var inst_28964 = (state_29009[(9)]);
var inst_28961 = (state_29009[(11)]);
var inst_28962 = (state_29009[(12)]);
var inst_28971 = (state_29009[(2)]);
var inst_28972 = (inst_28964 + (1));
var tmp29018 = inst_28963;
var tmp29019 = inst_28961;
var tmp29020 = inst_28962;
var inst_28961__$1 = tmp29019;
var inst_28962__$1 = tmp29020;
var inst_28963__$1 = tmp29018;
var inst_28964__$1 = inst_28972;
var state_29009__$1 = (function (){var statearr_29023 = state_29009;
(statearr_29023[(8)] = inst_28963__$1);

(statearr_29023[(9)] = inst_28964__$1);

(statearr_29023[(11)] = inst_28961__$1);

(statearr_29023[(12)] = inst_28962__$1);

(statearr_29023[(14)] = inst_28971);

return statearr_29023;
})();
var statearr_29024_29059 = state_29009__$1;
(statearr_29024_29059[(2)] = null);

(statearr_29024_29059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (22))){
var state_29009__$1 = state_29009;
var statearr_29025_29060 = state_29009__$1;
(statearr_29025_29060[(2)] = null);

(statearr_29025_29060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (6))){
var inst_28950 = (state_29009[(13)]);
var inst_28959 = f.call(null,inst_28950);
var inst_28960 = cljs.core.seq.call(null,inst_28959);
var inst_28961 = inst_28960;
var inst_28962 = null;
var inst_28963 = (0);
var inst_28964 = (0);
var state_29009__$1 = (function (){var statearr_29026 = state_29009;
(statearr_29026[(8)] = inst_28963);

(statearr_29026[(9)] = inst_28964);

(statearr_29026[(11)] = inst_28961);

(statearr_29026[(12)] = inst_28962);

return statearr_29026;
})();
var statearr_29027_29061 = state_29009__$1;
(statearr_29027_29061[(2)] = null);

(statearr_29027_29061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (17))){
var inst_28975 = (state_29009[(7)]);
var inst_28979 = cljs.core.chunk_first.call(null,inst_28975);
var inst_28980 = cljs.core.chunk_rest.call(null,inst_28975);
var inst_28981 = cljs.core.count.call(null,inst_28979);
var inst_28961 = inst_28980;
var inst_28962 = inst_28979;
var inst_28963 = inst_28981;
var inst_28964 = (0);
var state_29009__$1 = (function (){var statearr_29028 = state_29009;
(statearr_29028[(8)] = inst_28963);

(statearr_29028[(9)] = inst_28964);

(statearr_29028[(11)] = inst_28961);

(statearr_29028[(12)] = inst_28962);

return statearr_29028;
})();
var statearr_29029_29062 = state_29009__$1;
(statearr_29029_29062[(2)] = null);

(statearr_29029_29062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (3))){
var inst_29007 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29009__$1,inst_29007);
} else {
if((state_val_29010 === (12))){
var inst_28995 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29030_29063 = state_29009__$1;
(statearr_29030_29063[(2)] = inst_28995);

(statearr_29030_29063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (2))){
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29009__$1,(4),in$);
} else {
if((state_val_29010 === (23))){
var inst_29003 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29031_29064 = state_29009__$1;
(statearr_29031_29064[(2)] = inst_29003);

(statearr_29031_29064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (19))){
var inst_28990 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29032_29065 = state_29009__$1;
(statearr_29032_29065[(2)] = inst_28990);

(statearr_29032_29065[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (11))){
var inst_28975 = (state_29009[(7)]);
var inst_28961 = (state_29009[(11)]);
var inst_28975__$1 = cljs.core.seq.call(null,inst_28961);
var state_29009__$1 = (function (){var statearr_29033 = state_29009;
(statearr_29033[(7)] = inst_28975__$1);

return statearr_29033;
})();
if(inst_28975__$1){
var statearr_29034_29066 = state_29009__$1;
(statearr_29034_29066[(1)] = (14));

} else {
var statearr_29035_29067 = state_29009__$1;
(statearr_29035_29067[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (9))){
var inst_28997 = (state_29009[(2)]);
var inst_28998 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29009__$1 = (function (){var statearr_29036 = state_29009;
(statearr_29036[(15)] = inst_28997);

return statearr_29036;
})();
if(cljs.core.truth_(inst_28998)){
var statearr_29037_29068 = state_29009__$1;
(statearr_29037_29068[(1)] = (21));

} else {
var statearr_29038_29069 = state_29009__$1;
(statearr_29038_29069[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (5))){
var inst_28953 = cljs.core.async.close_BANG_.call(null,out);
var state_29009__$1 = state_29009;
var statearr_29039_29070 = state_29009__$1;
(statearr_29039_29070[(2)] = inst_28953);

(statearr_29039_29070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (14))){
var inst_28975 = (state_29009[(7)]);
var inst_28977 = cljs.core.chunked_seq_QMARK_.call(null,inst_28975);
var state_29009__$1 = state_29009;
if(inst_28977){
var statearr_29040_29071 = state_29009__$1;
(statearr_29040_29071[(1)] = (17));

} else {
var statearr_29041_29072 = state_29009__$1;
(statearr_29041_29072[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (16))){
var inst_28993 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29042_29073 = state_29009__$1;
(statearr_29042_29073[(2)] = inst_28993);

(statearr_29042_29073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (10))){
var inst_28964 = (state_29009[(9)]);
var inst_28962 = (state_29009[(12)]);
var inst_28969 = cljs.core._nth.call(null,inst_28962,inst_28964);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29009__$1,(13),out,inst_28969);
} else {
if((state_val_29010 === (18))){
var inst_28975 = (state_29009[(7)]);
var inst_28984 = cljs.core.first.call(null,inst_28975);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29009__$1,(20),out,inst_28984);
} else {
if((state_val_29010 === (8))){
var inst_28963 = (state_29009[(8)]);
var inst_28964 = (state_29009[(9)]);
var inst_28966 = (inst_28964 < inst_28963);
var inst_28967 = inst_28966;
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28967)){
var statearr_29043_29074 = state_29009__$1;
(statearr_29043_29074[(1)] = (10));

} else {
var statearr_29044_29075 = state_29009__$1;
(statearr_29044_29075[(1)] = (11));

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
});})(c__21978__auto__))
;
return ((function (switch__21913__auto__,c__21978__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21914__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21914__auto____0 = (function (){
var statearr_29048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29048[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21914__auto__);

(statearr_29048[(1)] = (1));

return statearr_29048;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21914__auto____1 = (function (state_29009){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_29009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e29049){if((e29049 instanceof Object)){
var ex__21917__auto__ = e29049;
var statearr_29050_29076 = state_29009;
(statearr_29050_29076[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29077 = state_29009;
state_29009 = G__29077;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21914__auto__ = function(state_29009){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21914__auto____1.call(this,state_29009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21914__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21914__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__))
})();
var state__21980__auto__ = (function (){var statearr_29051 = f__21979__auto__.call(null);
(statearr_29051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_29051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__))
);

return c__21978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args29078 = [];
var len__19567__auto___29081 = arguments.length;
var i__19568__auto___29082 = (0);
while(true){
if((i__19568__auto___29082 < len__19567__auto___29081)){
args29078.push((arguments[i__19568__auto___29082]));

var G__29083 = (i__19568__auto___29082 + (1));
i__19568__auto___29082 = G__29083;
continue;
} else {
}
break;
}

var G__29080 = args29078.length;
switch (G__29080) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29078.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args29085 = [];
var len__19567__auto___29088 = arguments.length;
var i__19568__auto___29089 = (0);
while(true){
if((i__19568__auto___29089 < len__19567__auto___29088)){
args29085.push((arguments[i__19568__auto___29089]));

var G__29090 = (i__19568__auto___29089 + (1));
i__19568__auto___29089 = G__29090;
continue;
} else {
}
break;
}

var G__29087 = args29085.length;
switch (G__29087) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29085.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args29092 = [];
var len__19567__auto___29143 = arguments.length;
var i__19568__auto___29144 = (0);
while(true){
if((i__19568__auto___29144 < len__19567__auto___29143)){
args29092.push((arguments[i__19568__auto___29144]));

var G__29145 = (i__19568__auto___29144 + (1));
i__19568__auto___29144 = G__29145;
continue;
} else {
}
break;
}

var G__29094 = args29092.length;
switch (G__29094) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29092.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21978__auto___29147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___29147,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___29147,out){
return (function (state_29118){
var state_val_29119 = (state_29118[(1)]);
if((state_val_29119 === (7))){
var inst_29113 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29120_29148 = state_29118__$1;
(statearr_29120_29148[(2)] = inst_29113);

(statearr_29120_29148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (1))){
var inst_29095 = null;
var state_29118__$1 = (function (){var statearr_29121 = state_29118;
(statearr_29121[(7)] = inst_29095);

return statearr_29121;
})();
var statearr_29122_29149 = state_29118__$1;
(statearr_29122_29149[(2)] = null);

(statearr_29122_29149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (4))){
var inst_29098 = (state_29118[(8)]);
var inst_29098__$1 = (state_29118[(2)]);
var inst_29099 = (inst_29098__$1 == null);
var inst_29100 = cljs.core.not.call(null,inst_29099);
var state_29118__$1 = (function (){var statearr_29123 = state_29118;
(statearr_29123[(8)] = inst_29098__$1);

return statearr_29123;
})();
if(inst_29100){
var statearr_29124_29150 = state_29118__$1;
(statearr_29124_29150[(1)] = (5));

} else {
var statearr_29125_29151 = state_29118__$1;
(statearr_29125_29151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (6))){
var state_29118__$1 = state_29118;
var statearr_29126_29152 = state_29118__$1;
(statearr_29126_29152[(2)] = null);

(statearr_29126_29152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (3))){
var inst_29115 = (state_29118[(2)]);
var inst_29116 = cljs.core.async.close_BANG_.call(null,out);
var state_29118__$1 = (function (){var statearr_29127 = state_29118;
(statearr_29127[(9)] = inst_29115);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29118__$1,inst_29116);
} else {
if((state_val_29119 === (2))){
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29118__$1,(4),ch);
} else {
if((state_val_29119 === (11))){
var inst_29098 = (state_29118[(8)]);
var inst_29107 = (state_29118[(2)]);
var inst_29095 = inst_29098;
var state_29118__$1 = (function (){var statearr_29128 = state_29118;
(statearr_29128[(10)] = inst_29107);

(statearr_29128[(7)] = inst_29095);

return statearr_29128;
})();
var statearr_29129_29153 = state_29118__$1;
(statearr_29129_29153[(2)] = null);

(statearr_29129_29153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (9))){
var inst_29098 = (state_29118[(8)]);
var state_29118__$1 = state_29118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29118__$1,(11),out,inst_29098);
} else {
if((state_val_29119 === (5))){
var inst_29098 = (state_29118[(8)]);
var inst_29095 = (state_29118[(7)]);
var inst_29102 = cljs.core._EQ_.call(null,inst_29098,inst_29095);
var state_29118__$1 = state_29118;
if(inst_29102){
var statearr_29131_29154 = state_29118__$1;
(statearr_29131_29154[(1)] = (8));

} else {
var statearr_29132_29155 = state_29118__$1;
(statearr_29132_29155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (10))){
var inst_29110 = (state_29118[(2)]);
var state_29118__$1 = state_29118;
var statearr_29133_29156 = state_29118__$1;
(statearr_29133_29156[(2)] = inst_29110);

(statearr_29133_29156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29119 === (8))){
var inst_29095 = (state_29118[(7)]);
var tmp29130 = inst_29095;
var inst_29095__$1 = tmp29130;
var state_29118__$1 = (function (){var statearr_29134 = state_29118;
(statearr_29134[(7)] = inst_29095__$1);

return statearr_29134;
})();
var statearr_29135_29157 = state_29118__$1;
(statearr_29135_29157[(2)] = null);

(statearr_29135_29157[(1)] = (2));


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
});})(c__21978__auto___29147,out))
;
return ((function (switch__21913__auto__,c__21978__auto___29147,out){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_29139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29139[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_29139[(1)] = (1));

return statearr_29139;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_29118){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_29118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e29140){if((e29140 instanceof Object)){
var ex__21917__auto__ = e29140;
var statearr_29141_29158 = state_29118;
(statearr_29141_29158[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29159 = state_29118;
state_29118 = G__29159;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_29118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_29118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___29147,out))
})();
var state__21980__auto__ = (function (){var statearr_29142 = f__21979__auto__.call(null);
(statearr_29142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___29147);

return statearr_29142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___29147,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args29160 = [];
var len__19567__auto___29230 = arguments.length;
var i__19568__auto___29231 = (0);
while(true){
if((i__19568__auto___29231 < len__19567__auto___29230)){
args29160.push((arguments[i__19568__auto___29231]));

var G__29232 = (i__19568__auto___29231 + (1));
i__19568__auto___29231 = G__29232;
continue;
} else {
}
break;
}

var G__29162 = args29160.length;
switch (G__29162) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29160.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21978__auto___29234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___29234,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___29234,out){
return (function (state_29200){
var state_val_29201 = (state_29200[(1)]);
if((state_val_29201 === (7))){
var inst_29196 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29202_29235 = state_29200__$1;
(statearr_29202_29235[(2)] = inst_29196);

(statearr_29202_29235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (1))){
var inst_29163 = (new Array(n));
var inst_29164 = inst_29163;
var inst_29165 = (0);
var state_29200__$1 = (function (){var statearr_29203 = state_29200;
(statearr_29203[(7)] = inst_29165);

(statearr_29203[(8)] = inst_29164);

return statearr_29203;
})();
var statearr_29204_29236 = state_29200__$1;
(statearr_29204_29236[(2)] = null);

(statearr_29204_29236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (4))){
var inst_29168 = (state_29200[(9)]);
var inst_29168__$1 = (state_29200[(2)]);
var inst_29169 = (inst_29168__$1 == null);
var inst_29170 = cljs.core.not.call(null,inst_29169);
var state_29200__$1 = (function (){var statearr_29205 = state_29200;
(statearr_29205[(9)] = inst_29168__$1);

return statearr_29205;
})();
if(inst_29170){
var statearr_29206_29237 = state_29200__$1;
(statearr_29206_29237[(1)] = (5));

} else {
var statearr_29207_29238 = state_29200__$1;
(statearr_29207_29238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (15))){
var inst_29190 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29208_29239 = state_29200__$1;
(statearr_29208_29239[(2)] = inst_29190);

(statearr_29208_29239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (13))){
var state_29200__$1 = state_29200;
var statearr_29209_29240 = state_29200__$1;
(statearr_29209_29240[(2)] = null);

(statearr_29209_29240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (6))){
var inst_29165 = (state_29200[(7)]);
var inst_29186 = (inst_29165 > (0));
var state_29200__$1 = state_29200;
if(cljs.core.truth_(inst_29186)){
var statearr_29210_29241 = state_29200__$1;
(statearr_29210_29241[(1)] = (12));

} else {
var statearr_29211_29242 = state_29200__$1;
(statearr_29211_29242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (3))){
var inst_29198 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29200__$1,inst_29198);
} else {
if((state_val_29201 === (12))){
var inst_29164 = (state_29200[(8)]);
var inst_29188 = cljs.core.vec.call(null,inst_29164);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29200__$1,(15),out,inst_29188);
} else {
if((state_val_29201 === (2))){
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29200__$1,(4),ch);
} else {
if((state_val_29201 === (11))){
var inst_29180 = (state_29200[(2)]);
var inst_29181 = (new Array(n));
var inst_29164 = inst_29181;
var inst_29165 = (0);
var state_29200__$1 = (function (){var statearr_29212 = state_29200;
(statearr_29212[(10)] = inst_29180);

(statearr_29212[(7)] = inst_29165);

(statearr_29212[(8)] = inst_29164);

return statearr_29212;
})();
var statearr_29213_29243 = state_29200__$1;
(statearr_29213_29243[(2)] = null);

(statearr_29213_29243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (9))){
var inst_29164 = (state_29200[(8)]);
var inst_29178 = cljs.core.vec.call(null,inst_29164);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29200__$1,(11),out,inst_29178);
} else {
if((state_val_29201 === (5))){
var inst_29173 = (state_29200[(11)]);
var inst_29165 = (state_29200[(7)]);
var inst_29168 = (state_29200[(9)]);
var inst_29164 = (state_29200[(8)]);
var inst_29172 = (inst_29164[inst_29165] = inst_29168);
var inst_29173__$1 = (inst_29165 + (1));
var inst_29174 = (inst_29173__$1 < n);
var state_29200__$1 = (function (){var statearr_29214 = state_29200;
(statearr_29214[(12)] = inst_29172);

(statearr_29214[(11)] = inst_29173__$1);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29174)){
var statearr_29215_29244 = state_29200__$1;
(statearr_29215_29244[(1)] = (8));

} else {
var statearr_29216_29245 = state_29200__$1;
(statearr_29216_29245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (14))){
var inst_29193 = (state_29200[(2)]);
var inst_29194 = cljs.core.async.close_BANG_.call(null,out);
var state_29200__$1 = (function (){var statearr_29218 = state_29200;
(statearr_29218[(13)] = inst_29193);

return statearr_29218;
})();
var statearr_29219_29246 = state_29200__$1;
(statearr_29219_29246[(2)] = inst_29194);

(statearr_29219_29246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (10))){
var inst_29184 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29220_29247 = state_29200__$1;
(statearr_29220_29247[(2)] = inst_29184);

(statearr_29220_29247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (8))){
var inst_29173 = (state_29200[(11)]);
var inst_29164 = (state_29200[(8)]);
var tmp29217 = inst_29164;
var inst_29164__$1 = tmp29217;
var inst_29165 = inst_29173;
var state_29200__$1 = (function (){var statearr_29221 = state_29200;
(statearr_29221[(7)] = inst_29165);

(statearr_29221[(8)] = inst_29164__$1);

return statearr_29221;
})();
var statearr_29222_29248 = state_29200__$1;
(statearr_29222_29248[(2)] = null);

(statearr_29222_29248[(1)] = (2));


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
});})(c__21978__auto___29234,out))
;
return ((function (switch__21913__auto__,c__21978__auto___29234,out){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_29226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29226[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_29226[(1)] = (1));

return statearr_29226;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_29200){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_29200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e29227){if((e29227 instanceof Object)){
var ex__21917__auto__ = e29227;
var statearr_29228_29249 = state_29200;
(statearr_29228_29249[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29250 = state_29200;
state_29200 = G__29250;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_29200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_29200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___29234,out))
})();
var state__21980__auto__ = (function (){var statearr_29229 = f__21979__auto__.call(null);
(statearr_29229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___29234);

return statearr_29229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___29234,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args29251 = [];
var len__19567__auto___29325 = arguments.length;
var i__19568__auto___29326 = (0);
while(true){
if((i__19568__auto___29326 < len__19567__auto___29325)){
args29251.push((arguments[i__19568__auto___29326]));

var G__29327 = (i__19568__auto___29326 + (1));
i__19568__auto___29326 = G__29327;
continue;
} else {
}
break;
}

var G__29253 = args29251.length;
switch (G__29253) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29251.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21978__auto___29329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___29329,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___29329,out){
return (function (state_29295){
var state_val_29296 = (state_29295[(1)]);
if((state_val_29296 === (7))){
var inst_29291 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29297_29330 = state_29295__$1;
(statearr_29297_29330[(2)] = inst_29291);

(statearr_29297_29330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (1))){
var inst_29254 = [];
var inst_29255 = inst_29254;
var inst_29256 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29295__$1 = (function (){var statearr_29298 = state_29295;
(statearr_29298[(7)] = inst_29256);

(statearr_29298[(8)] = inst_29255);

return statearr_29298;
})();
var statearr_29299_29331 = state_29295__$1;
(statearr_29299_29331[(2)] = null);

(statearr_29299_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (4))){
var inst_29259 = (state_29295[(9)]);
var inst_29259__$1 = (state_29295[(2)]);
var inst_29260 = (inst_29259__$1 == null);
var inst_29261 = cljs.core.not.call(null,inst_29260);
var state_29295__$1 = (function (){var statearr_29300 = state_29295;
(statearr_29300[(9)] = inst_29259__$1);

return statearr_29300;
})();
if(inst_29261){
var statearr_29301_29332 = state_29295__$1;
(statearr_29301_29332[(1)] = (5));

} else {
var statearr_29302_29333 = state_29295__$1;
(statearr_29302_29333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (15))){
var inst_29285 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29303_29334 = state_29295__$1;
(statearr_29303_29334[(2)] = inst_29285);

(statearr_29303_29334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (13))){
var state_29295__$1 = state_29295;
var statearr_29304_29335 = state_29295__$1;
(statearr_29304_29335[(2)] = null);

(statearr_29304_29335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (6))){
var inst_29255 = (state_29295[(8)]);
var inst_29280 = inst_29255.length;
var inst_29281 = (inst_29280 > (0));
var state_29295__$1 = state_29295;
if(cljs.core.truth_(inst_29281)){
var statearr_29305_29336 = state_29295__$1;
(statearr_29305_29336[(1)] = (12));

} else {
var statearr_29306_29337 = state_29295__$1;
(statearr_29306_29337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (3))){
var inst_29293 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29295__$1,inst_29293);
} else {
if((state_val_29296 === (12))){
var inst_29255 = (state_29295[(8)]);
var inst_29283 = cljs.core.vec.call(null,inst_29255);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(15),out,inst_29283);
} else {
if((state_val_29296 === (2))){
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29295__$1,(4),ch);
} else {
if((state_val_29296 === (11))){
var inst_29263 = (state_29295[(10)]);
var inst_29259 = (state_29295[(9)]);
var inst_29273 = (state_29295[(2)]);
var inst_29274 = [];
var inst_29275 = inst_29274.push(inst_29259);
var inst_29255 = inst_29274;
var inst_29256 = inst_29263;
var state_29295__$1 = (function (){var statearr_29307 = state_29295;
(statearr_29307[(11)] = inst_29275);

(statearr_29307[(7)] = inst_29256);

(statearr_29307[(8)] = inst_29255);

(statearr_29307[(12)] = inst_29273);

return statearr_29307;
})();
var statearr_29308_29338 = state_29295__$1;
(statearr_29308_29338[(2)] = null);

(statearr_29308_29338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (9))){
var inst_29255 = (state_29295[(8)]);
var inst_29271 = cljs.core.vec.call(null,inst_29255);
var state_29295__$1 = state_29295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29295__$1,(11),out,inst_29271);
} else {
if((state_val_29296 === (5))){
var inst_29263 = (state_29295[(10)]);
var inst_29256 = (state_29295[(7)]);
var inst_29259 = (state_29295[(9)]);
var inst_29263__$1 = f.call(null,inst_29259);
var inst_29264 = cljs.core._EQ_.call(null,inst_29263__$1,inst_29256);
var inst_29265 = cljs.core.keyword_identical_QMARK_.call(null,inst_29256,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29266 = (inst_29264) || (inst_29265);
var state_29295__$1 = (function (){var statearr_29309 = state_29295;
(statearr_29309[(10)] = inst_29263__$1);

return statearr_29309;
})();
if(cljs.core.truth_(inst_29266)){
var statearr_29310_29339 = state_29295__$1;
(statearr_29310_29339[(1)] = (8));

} else {
var statearr_29311_29340 = state_29295__$1;
(statearr_29311_29340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (14))){
var inst_29288 = (state_29295[(2)]);
var inst_29289 = cljs.core.async.close_BANG_.call(null,out);
var state_29295__$1 = (function (){var statearr_29313 = state_29295;
(statearr_29313[(13)] = inst_29288);

return statearr_29313;
})();
var statearr_29314_29341 = state_29295__$1;
(statearr_29314_29341[(2)] = inst_29289);

(statearr_29314_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (10))){
var inst_29278 = (state_29295[(2)]);
var state_29295__$1 = state_29295;
var statearr_29315_29342 = state_29295__$1;
(statearr_29315_29342[(2)] = inst_29278);

(statearr_29315_29342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29296 === (8))){
var inst_29263 = (state_29295[(10)]);
var inst_29255 = (state_29295[(8)]);
var inst_29259 = (state_29295[(9)]);
var inst_29268 = inst_29255.push(inst_29259);
var tmp29312 = inst_29255;
var inst_29255__$1 = tmp29312;
var inst_29256 = inst_29263;
var state_29295__$1 = (function (){var statearr_29316 = state_29295;
(statearr_29316[(7)] = inst_29256);

(statearr_29316[(8)] = inst_29255__$1);

(statearr_29316[(14)] = inst_29268);

return statearr_29316;
})();
var statearr_29317_29343 = state_29295__$1;
(statearr_29317_29343[(2)] = null);

(statearr_29317_29343[(1)] = (2));


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
});})(c__21978__auto___29329,out))
;
return ((function (switch__21913__auto__,c__21978__auto___29329,out){
return (function() {
var cljs$core$async$state_machine__21914__auto__ = null;
var cljs$core$async$state_machine__21914__auto____0 = (function (){
var statearr_29321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29321[(0)] = cljs$core$async$state_machine__21914__auto__);

(statearr_29321[(1)] = (1));

return statearr_29321;
});
var cljs$core$async$state_machine__21914__auto____1 = (function (state_29295){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_29295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e29322){if((e29322 instanceof Object)){
var ex__21917__auto__ = e29322;
var statearr_29323_29344 = state_29295;
(statearr_29323_29344[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29345 = state_29295;
state_29295 = G__29345;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
cljs$core$async$state_machine__21914__auto__ = function(state_29295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21914__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21914__auto____1.call(this,state_29295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21914__auto____0;
cljs$core$async$state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21914__auto____1;
return cljs$core$async$state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___29329,out))
})();
var state__21980__auto__ = (function (){var statearr_29324 = f__21979__auto__.call(null);
(statearr_29324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___29329);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___29329,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442923852147