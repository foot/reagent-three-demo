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
if(typeof cljs.core.async.t26636 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26636 = (function (fn_handler,f,meta26637){
this.fn_handler = fn_handler;
this.f = f;
this.meta26637 = meta26637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26638,meta26637__$1){
var self__ = this;
var _26638__$1 = this;
return (new cljs.core.async.t26636(self__.fn_handler,self__.f,meta26637__$1));
});

cljs.core.async.t26636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26638){
var self__ = this;
var _26638__$1 = this;
return self__.meta26637;
});

cljs.core.async.t26636.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26637","meta26637",-259196843,null)], null);
});

cljs.core.async.t26636.cljs$lang$type = true;

cljs.core.async.t26636.cljs$lang$ctorStr = "cljs.core.async/t26636";

cljs.core.async.t26636.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t26636");
});

cljs.core.async.__GT_t26636 = (function cljs$core$async$fn_handler_$___GT_t26636(fn_handler__$1,f__$1,meta26637){
return (new cljs.core.async.t26636(fn_handler__$1,f__$1,meta26637));
});

}

return (new cljs.core.async.t26636(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args26641 = [];
var len__19567__auto___26644 = arguments.length;
var i__19568__auto___26645 = (0);
while(true){
if((i__19568__auto___26645 < len__19567__auto___26644)){
args26641.push((arguments[i__19568__auto___26645]));

var G__26646 = (i__19568__auto___26645 + (1));
i__19568__auto___26645 = G__26646;
continue;
} else {
}
break;
}

var G__26643 = args26641.length;
switch (G__26643) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26641.length)].join('')));

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
var args26648 = [];
var len__19567__auto___26651 = arguments.length;
var i__19568__auto___26652 = (0);
while(true){
if((i__19568__auto___26652 < len__19567__auto___26651)){
args26648.push((arguments[i__19568__auto___26652]));

var G__26653 = (i__19568__auto___26652 + (1));
i__19568__auto___26652 = G__26653;
continue;
} else {
}
break;
}

var G__26650 = args26648.length;
switch (G__26650) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26648.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26655 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26655);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26655,ret){
return (function (){
return fn1.call(null,val_26655);
});})(val_26655,ret))
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26656.length)].join('')));

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
var n__19412__auto___26663 = n;
var x_26664 = (0);
while(true){
if((x_26664 < n__19412__auto___26663)){
(a[x_26664] = (0));

var G__26665 = (x_26664 + (1));
x_26664 = G__26665;
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

var G__26666 = (i + (1));
i = G__26666;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26670 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26670 = (function (alt_flag,flag,meta26671){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26671 = meta26671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26672,meta26671__$1){
var self__ = this;
var _26672__$1 = this;
return (new cljs.core.async.t26670(self__.alt_flag,self__.flag,meta26671__$1));
});})(flag))
;

cljs.core.async.t26670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26672){
var self__ = this;
var _26672__$1 = this;
return self__.meta26671;
});})(flag))
;

cljs.core.async.t26670.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26670.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26671","meta26671",161181442,null)], null);
});})(flag))
;

cljs.core.async.t26670.cljs$lang$type = true;

cljs.core.async.t26670.cljs$lang$ctorStr = "cljs.core.async/t26670";

cljs.core.async.t26670.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t26670");
});})(flag))
;

cljs.core.async.__GT_t26670 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26670(alt_flag__$1,flag__$1,meta26671){
return (new cljs.core.async.t26670(alt_flag__$1,flag__$1,meta26671));
});})(flag))
;

}

return (new cljs.core.async.t26670(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26676 = (function (alt_handler,flag,cb,meta26677){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26677 = meta26677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26678,meta26677__$1){
var self__ = this;
var _26678__$1 = this;
return (new cljs.core.async.t26676(self__.alt_handler,self__.flag,self__.cb,meta26677__$1));
});

cljs.core.async.t26676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26678){
var self__ = this;
var _26678__$1 = this;
return self__.meta26677;
});

cljs.core.async.t26676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26677","meta26677",810140464,null)], null);
});

cljs.core.async.t26676.cljs$lang$type = true;

cljs.core.async.t26676.cljs$lang$ctorStr = "cljs.core.async/t26676";

cljs.core.async.t26676.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t26676");
});

cljs.core.async.__GT_t26676 = (function cljs$core$async$alt_handler_$___GT_t26676(alt_handler__$1,flag__$1,cb__$1,meta26677){
return (new cljs.core.async.t26676(alt_handler__$1,flag__$1,cb__$1,meta26677));
});

}

return (new cljs.core.async.t26676(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26679_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26679_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26680_SHARP_,port], null));
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
var G__26681 = (i + (1));
i = G__26681;
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
var len__19567__auto___26687 = arguments.length;
var i__19568__auto___26688 = (0);
while(true){
if((i__19568__auto___26688 < len__19567__auto___26687)){
args__19574__auto__.push((arguments[i__19568__auto___26688]));

var G__26689 = (i__19568__auto___26688 + (1));
i__19568__auto___26688 = G__26689;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((1) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19575__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26684){
var map__26685 = p__26684;
var map__26685__$1 = ((((!((map__26685 == null)))?((((map__26685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26685):map__26685);
var opts = map__26685__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26682){
var G__26683 = cljs.core.first.call(null,seq26682);
var seq26682__$1 = cljs.core.next.call(null,seq26682);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26683,seq26682__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args26690 = [];
var len__19567__auto___26740 = arguments.length;
var i__19568__auto___26741 = (0);
while(true){
if((i__19568__auto___26741 < len__19567__auto___26740)){
args26690.push((arguments[i__19568__auto___26741]));

var G__26742 = (i__19568__auto___26741 + (1));
i__19568__auto___26741 = G__26742;
continue;
} else {
}
break;
}

var G__26692 = args26690.length;
switch (G__26692) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26690.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21976__auto___26744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___26744){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___26744){
return (function (state_26716){
var state_val_26717 = (state_26716[(1)]);
if((state_val_26717 === (7))){
var inst_26712 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26718_26745 = state_26716__$1;
(statearr_26718_26745[(2)] = inst_26712);

(statearr_26718_26745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (1))){
var state_26716__$1 = state_26716;
var statearr_26719_26746 = state_26716__$1;
(statearr_26719_26746[(2)] = null);

(statearr_26719_26746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (4))){
var inst_26695 = (state_26716[(7)]);
var inst_26695__$1 = (state_26716[(2)]);
var inst_26696 = (inst_26695__$1 == null);
var state_26716__$1 = (function (){var statearr_26720 = state_26716;
(statearr_26720[(7)] = inst_26695__$1);

return statearr_26720;
})();
if(cljs.core.truth_(inst_26696)){
var statearr_26721_26747 = state_26716__$1;
(statearr_26721_26747[(1)] = (5));

} else {
var statearr_26722_26748 = state_26716__$1;
(statearr_26722_26748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (13))){
var state_26716__$1 = state_26716;
var statearr_26723_26749 = state_26716__$1;
(statearr_26723_26749[(2)] = null);

(statearr_26723_26749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (6))){
var inst_26695 = (state_26716[(7)]);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26716__$1,(11),to,inst_26695);
} else {
if((state_val_26717 === (3))){
var inst_26714 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26716__$1,inst_26714);
} else {
if((state_val_26717 === (12))){
var state_26716__$1 = state_26716;
var statearr_26724_26750 = state_26716__$1;
(statearr_26724_26750[(2)] = null);

(statearr_26724_26750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (2))){
var state_26716__$1 = state_26716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26716__$1,(4),from);
} else {
if((state_val_26717 === (11))){
var inst_26705 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
if(cljs.core.truth_(inst_26705)){
var statearr_26725_26751 = state_26716__$1;
(statearr_26725_26751[(1)] = (12));

} else {
var statearr_26726_26752 = state_26716__$1;
(statearr_26726_26752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (9))){
var state_26716__$1 = state_26716;
var statearr_26727_26753 = state_26716__$1;
(statearr_26727_26753[(2)] = null);

(statearr_26727_26753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (5))){
var state_26716__$1 = state_26716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26728_26754 = state_26716__$1;
(statearr_26728_26754[(1)] = (8));

} else {
var statearr_26729_26755 = state_26716__$1;
(statearr_26729_26755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (14))){
var inst_26710 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26730_26756 = state_26716__$1;
(statearr_26730_26756[(2)] = inst_26710);

(statearr_26730_26756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (10))){
var inst_26702 = (state_26716[(2)]);
var state_26716__$1 = state_26716;
var statearr_26731_26757 = state_26716__$1;
(statearr_26731_26757[(2)] = inst_26702);

(statearr_26731_26757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26717 === (8))){
var inst_26699 = cljs.core.async.close_BANG_.call(null,to);
var state_26716__$1 = state_26716;
var statearr_26732_26758 = state_26716__$1;
(statearr_26732_26758[(2)] = inst_26699);

(statearr_26732_26758[(1)] = (10));


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
});})(c__21976__auto___26744))
;
return ((function (switch__21911__auto__,c__21976__auto___26744){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_26736 = [null,null,null,null,null,null,null,null];
(statearr_26736[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_26736[(1)] = (1));

return statearr_26736;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_26716){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_26716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object)){
var ex__21915__auto__ = e26737;
var statearr_26738_26759 = state_26716;
(statearr_26738_26759[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26760 = state_26716;
state_26716 = G__26760;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_26716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_26716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___26744))
})();
var state__21978__auto__ = (function (){var statearr_26739 = f__21977__auto__.call(null);
(statearr_26739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___26744);

return statearr_26739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___26744))
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
return (function (p__26944){
var vec__26945 = p__26944;
var v = cljs.core.nth.call(null,vec__26945,(0),null);
var p = cljs.core.nth.call(null,vec__26945,(1),null);
var job = vec__26945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21976__auto___27127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___27127,res,vec__26945,v,p,job,jobs,results){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___27127,res,vec__26945,v,p,job,jobs,results){
return (function (state_26950){
var state_val_26951 = (state_26950[(1)]);
if((state_val_26951 === (1))){
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(2),res,v);
} else {
if((state_val_26951 === (2))){
var inst_26947 = (state_26950[(2)]);
var inst_26948 = cljs.core.async.close_BANG_.call(null,res);
var state_26950__$1 = (function (){var statearr_26952 = state_26950;
(statearr_26952[(7)] = inst_26947);

return statearr_26952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else {
return null;
}
}
});})(c__21976__auto___27127,res,vec__26945,v,p,job,jobs,results))
;
return ((function (switch__21911__auto__,c__21976__auto___27127,res,vec__26945,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0 = (function (){
var statearr_26956 = [null,null,null,null,null,null,null,null];
(statearr_26956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__);

(statearr_26956[(1)] = (1));

return statearr_26956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1 = (function (state_26950){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_26950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e26957){if((e26957 instanceof Object)){
var ex__21915__auto__ = e26957;
var statearr_26958_27128 = state_26950;
(statearr_26958_27128[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27129 = state_26950;
state_26950 = G__27129;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___27127,res,vec__26945,v,p,job,jobs,results))
})();
var state__21978__auto__ = (function (){var statearr_26959 = f__21977__auto__.call(null);
(statearr_26959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___27127);

return statearr_26959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___27127,res,vec__26945,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26960){
var vec__26961 = p__26960;
var v = cljs.core.nth.call(null,vec__26961,(0),null);
var p = cljs.core.nth.call(null,vec__26961,(1),null);
var job = vec__26961;
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
var n__19412__auto___27130 = n;
var __27131 = (0);
while(true){
if((__27131 < n__19412__auto___27130)){
var G__26962_27132 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26962_27132) {
case "compute":
var c__21976__auto___27134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27131,c__21976__auto___27134,G__26962_27132,n__19412__auto___27130,jobs,results,process,async){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (__27131,c__21976__auto___27134,G__26962_27132,n__19412__auto___27130,jobs,results,process,async){
return (function (state_26975){
var state_val_26976 = (state_26975[(1)]);
if((state_val_26976 === (1))){
var state_26975__$1 = state_26975;
var statearr_26977_27135 = state_26975__$1;
(statearr_26977_27135[(2)] = null);

(statearr_26977_27135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26976 === (2))){
var state_26975__$1 = state_26975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26975__$1,(4),jobs);
} else {
if((state_val_26976 === (3))){
var inst_26973 = (state_26975[(2)]);
var state_26975__$1 = state_26975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26975__$1,inst_26973);
} else {
if((state_val_26976 === (4))){
var inst_26965 = (state_26975[(2)]);
var inst_26966 = process.call(null,inst_26965);
var state_26975__$1 = state_26975;
if(cljs.core.truth_(inst_26966)){
var statearr_26978_27136 = state_26975__$1;
(statearr_26978_27136[(1)] = (5));

} else {
var statearr_26979_27137 = state_26975__$1;
(statearr_26979_27137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26976 === (5))){
var state_26975__$1 = state_26975;
var statearr_26980_27138 = state_26975__$1;
(statearr_26980_27138[(2)] = null);

(statearr_26980_27138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26976 === (6))){
var state_26975__$1 = state_26975;
var statearr_26981_27139 = state_26975__$1;
(statearr_26981_27139[(2)] = null);

(statearr_26981_27139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26976 === (7))){
var inst_26971 = (state_26975[(2)]);
var state_26975__$1 = state_26975;
var statearr_26982_27140 = state_26975__$1;
(statearr_26982_27140[(2)] = inst_26971);

(statearr_26982_27140[(1)] = (3));


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
});})(__27131,c__21976__auto___27134,G__26962_27132,n__19412__auto___27130,jobs,results,process,async))
;
return ((function (__27131,switch__21911__auto__,c__21976__auto___27134,G__26962_27132,n__19412__auto___27130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0 = (function (){
var statearr_26986 = [null,null,null,null,null,null,null];
(statearr_26986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__);

(statearr_26986[(1)] = (1));

return statearr_26986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1 = (function (state_26975){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_26975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e26987){if((e26987 instanceof Object)){
var ex__21915__auto__ = e26987;
var statearr_26988_27141 = state_26975;
(statearr_26988_27141[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27142 = state_26975;
state_26975 = G__27142;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = function(state_26975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1.call(this,state_26975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__;
})()
;})(__27131,switch__21911__auto__,c__21976__auto___27134,G__26962_27132,n__19412__auto___27130,jobs,results,process,async))
})();
var state__21978__auto__ = (function (){var statearr_26989 = f__21977__auto__.call(null);
(statearr_26989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___27134);

return statearr_26989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(__27131,c__21976__auto___27134,G__26962_27132,n__19412__auto___27130,jobs,results,process,async))
);


break;
case "async":
var c__21976__auto___27143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27131,c__21976__auto___27143,G__26962_27132,n__19412__auto___27130,jobs,results,process,async){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (__27131,c__21976__auto___27143,G__26962_27132,n__19412__auto___27130,jobs,results,process,async){
return (function (state_27002){
var state_val_27003 = (state_27002[(1)]);
if((state_val_27003 === (1))){
var state_27002__$1 = state_27002;
var statearr_27004_27144 = state_27002__$1;
(statearr_27004_27144[(2)] = null);

(statearr_27004_27144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (2))){
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27002__$1,(4),jobs);
} else {
if((state_val_27003 === (3))){
var inst_27000 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27002__$1,inst_27000);
} else {
if((state_val_27003 === (4))){
var inst_26992 = (state_27002[(2)]);
var inst_26993 = async.call(null,inst_26992);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26993)){
var statearr_27005_27145 = state_27002__$1;
(statearr_27005_27145[(1)] = (5));

} else {
var statearr_27006_27146 = state_27002__$1;
(statearr_27006_27146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (5))){
var state_27002__$1 = state_27002;
var statearr_27007_27147 = state_27002__$1;
(statearr_27007_27147[(2)] = null);

(statearr_27007_27147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (6))){
var state_27002__$1 = state_27002;
var statearr_27008_27148 = state_27002__$1;
(statearr_27008_27148[(2)] = null);

(statearr_27008_27148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (7))){
var inst_26998 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27009_27149 = state_27002__$1;
(statearr_27009_27149[(2)] = inst_26998);

(statearr_27009_27149[(1)] = (3));


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
});})(__27131,c__21976__auto___27143,G__26962_27132,n__19412__auto___27130,jobs,results,process,async))
;
return ((function (__27131,switch__21911__auto__,c__21976__auto___27143,G__26962_27132,n__19412__auto___27130,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0 = (function (){
var statearr_27013 = [null,null,null,null,null,null,null];
(statearr_27013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__);

(statearr_27013[(1)] = (1));

return statearr_27013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1 = (function (state_27002){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object)){
var ex__21915__auto__ = e27014;
var statearr_27015_27150 = state_27002;
(statearr_27015_27150[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27151 = state_27002;
state_27002 = G__27151;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = function(state_27002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1.call(this,state_27002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__;
})()
;})(__27131,switch__21911__auto__,c__21976__auto___27143,G__26962_27132,n__19412__auto___27130,jobs,results,process,async))
})();
var state__21978__auto__ = (function (){var statearr_27016 = f__21977__auto__.call(null);
(statearr_27016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___27143);

return statearr_27016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(__27131,c__21976__auto___27143,G__26962_27132,n__19412__auto___27130,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27152 = (__27131 + (1));
__27131 = G__27152;
continue;
} else {
}
break;
}

var c__21976__auto___27153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___27153,jobs,results,process,async){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___27153,jobs,results,process,async){
return (function (state_27038){
var state_val_27039 = (state_27038[(1)]);
if((state_val_27039 === (1))){
var state_27038__$1 = state_27038;
var statearr_27040_27154 = state_27038__$1;
(statearr_27040_27154[(2)] = null);

(statearr_27040_27154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (2))){
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27038__$1,(4),from);
} else {
if((state_val_27039 === (3))){
var inst_27036 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27038__$1,inst_27036);
} else {
if((state_val_27039 === (4))){
var inst_27019 = (state_27038[(7)]);
var inst_27019__$1 = (state_27038[(2)]);
var inst_27020 = (inst_27019__$1 == null);
var state_27038__$1 = (function (){var statearr_27041 = state_27038;
(statearr_27041[(7)] = inst_27019__$1);

return statearr_27041;
})();
if(cljs.core.truth_(inst_27020)){
var statearr_27042_27155 = state_27038__$1;
(statearr_27042_27155[(1)] = (5));

} else {
var statearr_27043_27156 = state_27038__$1;
(statearr_27043_27156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (5))){
var inst_27022 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27038__$1 = state_27038;
var statearr_27044_27157 = state_27038__$1;
(statearr_27044_27157[(2)] = inst_27022);

(statearr_27044_27157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (6))){
var inst_27019 = (state_27038[(7)]);
var inst_27024 = (state_27038[(8)]);
var inst_27024__$1 = cljs.core.async.chan.call(null,(1));
var inst_27025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27026 = [inst_27019,inst_27024__$1];
var inst_27027 = (new cljs.core.PersistentVector(null,2,(5),inst_27025,inst_27026,null));
var state_27038__$1 = (function (){var statearr_27045 = state_27038;
(statearr_27045[(8)] = inst_27024__$1);

return statearr_27045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27038__$1,(8),jobs,inst_27027);
} else {
if((state_val_27039 === (7))){
var inst_27034 = (state_27038[(2)]);
var state_27038__$1 = state_27038;
var statearr_27046_27158 = state_27038__$1;
(statearr_27046_27158[(2)] = inst_27034);

(statearr_27046_27158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27039 === (8))){
var inst_27024 = (state_27038[(8)]);
var inst_27029 = (state_27038[(2)]);
var state_27038__$1 = (function (){var statearr_27047 = state_27038;
(statearr_27047[(9)] = inst_27029);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27038__$1,(9),results,inst_27024);
} else {
if((state_val_27039 === (9))){
var inst_27031 = (state_27038[(2)]);
var state_27038__$1 = (function (){var statearr_27048 = state_27038;
(statearr_27048[(10)] = inst_27031);

return statearr_27048;
})();
var statearr_27049_27159 = state_27038__$1;
(statearr_27049_27159[(2)] = null);

(statearr_27049_27159[(1)] = (2));


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
});})(c__21976__auto___27153,jobs,results,process,async))
;
return ((function (switch__21911__auto__,c__21976__auto___27153,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0 = (function (){
var statearr_27053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__);

(statearr_27053[(1)] = (1));

return statearr_27053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1 = (function (state_27038){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27054){if((e27054 instanceof Object)){
var ex__21915__auto__ = e27054;
var statearr_27055_27160 = state_27038;
(statearr_27055_27160[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27161 = state_27038;
state_27038 = G__27161;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = function(state_27038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1.call(this,state_27038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___27153,jobs,results,process,async))
})();
var state__21978__auto__ = (function (){var statearr_27056 = f__21977__auto__.call(null);
(statearr_27056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___27153);

return statearr_27056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___27153,jobs,results,process,async))
);


var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__,jobs,results,process,async){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__,jobs,results,process,async){
return (function (state_27094){
var state_val_27095 = (state_27094[(1)]);
if((state_val_27095 === (7))){
var inst_27090 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27096_27162 = state_27094__$1;
(statearr_27096_27162[(2)] = inst_27090);

(statearr_27096_27162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (20))){
var state_27094__$1 = state_27094;
var statearr_27097_27163 = state_27094__$1;
(statearr_27097_27163[(2)] = null);

(statearr_27097_27163[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (1))){
var state_27094__$1 = state_27094;
var statearr_27098_27164 = state_27094__$1;
(statearr_27098_27164[(2)] = null);

(statearr_27098_27164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (4))){
var inst_27059 = (state_27094[(7)]);
var inst_27059__$1 = (state_27094[(2)]);
var inst_27060 = (inst_27059__$1 == null);
var state_27094__$1 = (function (){var statearr_27099 = state_27094;
(statearr_27099[(7)] = inst_27059__$1);

return statearr_27099;
})();
if(cljs.core.truth_(inst_27060)){
var statearr_27100_27165 = state_27094__$1;
(statearr_27100_27165[(1)] = (5));

} else {
var statearr_27101_27166 = state_27094__$1;
(statearr_27101_27166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (15))){
var inst_27072 = (state_27094[(8)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27094__$1,(18),to,inst_27072);
} else {
if((state_val_27095 === (21))){
var inst_27085 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27102_27167 = state_27094__$1;
(statearr_27102_27167[(2)] = inst_27085);

(statearr_27102_27167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (13))){
var inst_27087 = (state_27094[(2)]);
var state_27094__$1 = (function (){var statearr_27103 = state_27094;
(statearr_27103[(9)] = inst_27087);

return statearr_27103;
})();
var statearr_27104_27168 = state_27094__$1;
(statearr_27104_27168[(2)] = null);

(statearr_27104_27168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (6))){
var inst_27059 = (state_27094[(7)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27094__$1,(11),inst_27059);
} else {
if((state_val_27095 === (17))){
var inst_27080 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
if(cljs.core.truth_(inst_27080)){
var statearr_27105_27169 = state_27094__$1;
(statearr_27105_27169[(1)] = (19));

} else {
var statearr_27106_27170 = state_27094__$1;
(statearr_27106_27170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (3))){
var inst_27092 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27094__$1,inst_27092);
} else {
if((state_val_27095 === (12))){
var inst_27069 = (state_27094[(10)]);
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27094__$1,(14),inst_27069);
} else {
if((state_val_27095 === (2))){
var state_27094__$1 = state_27094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27094__$1,(4),results);
} else {
if((state_val_27095 === (19))){
var state_27094__$1 = state_27094;
var statearr_27107_27171 = state_27094__$1;
(statearr_27107_27171[(2)] = null);

(statearr_27107_27171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (11))){
var inst_27069 = (state_27094[(2)]);
var state_27094__$1 = (function (){var statearr_27108 = state_27094;
(statearr_27108[(10)] = inst_27069);

return statearr_27108;
})();
var statearr_27109_27172 = state_27094__$1;
(statearr_27109_27172[(2)] = null);

(statearr_27109_27172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (9))){
var state_27094__$1 = state_27094;
var statearr_27110_27173 = state_27094__$1;
(statearr_27110_27173[(2)] = null);

(statearr_27110_27173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (5))){
var state_27094__$1 = state_27094;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27111_27174 = state_27094__$1;
(statearr_27111_27174[(1)] = (8));

} else {
var statearr_27112_27175 = state_27094__$1;
(statearr_27112_27175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (14))){
var inst_27074 = (state_27094[(11)]);
var inst_27072 = (state_27094[(8)]);
var inst_27072__$1 = (state_27094[(2)]);
var inst_27073 = (inst_27072__$1 == null);
var inst_27074__$1 = cljs.core.not.call(null,inst_27073);
var state_27094__$1 = (function (){var statearr_27113 = state_27094;
(statearr_27113[(11)] = inst_27074__$1);

(statearr_27113[(8)] = inst_27072__$1);

return statearr_27113;
})();
if(inst_27074__$1){
var statearr_27114_27176 = state_27094__$1;
(statearr_27114_27176[(1)] = (15));

} else {
var statearr_27115_27177 = state_27094__$1;
(statearr_27115_27177[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (16))){
var inst_27074 = (state_27094[(11)]);
var state_27094__$1 = state_27094;
var statearr_27116_27178 = state_27094__$1;
(statearr_27116_27178[(2)] = inst_27074);

(statearr_27116_27178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (10))){
var inst_27066 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27117_27179 = state_27094__$1;
(statearr_27117_27179[(2)] = inst_27066);

(statearr_27117_27179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (18))){
var inst_27077 = (state_27094[(2)]);
var state_27094__$1 = state_27094;
var statearr_27118_27180 = state_27094__$1;
(statearr_27118_27180[(2)] = inst_27077);

(statearr_27118_27180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27095 === (8))){
var inst_27063 = cljs.core.async.close_BANG_.call(null,to);
var state_27094__$1 = state_27094;
var statearr_27119_27181 = state_27094__$1;
(statearr_27119_27181[(2)] = inst_27063);

(statearr_27119_27181[(1)] = (10));


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
});})(c__21976__auto__,jobs,results,process,async))
;
return ((function (switch__21911__auto__,c__21976__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0 = (function (){
var statearr_27123 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__);

(statearr_27123[(1)] = (1));

return statearr_27123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1 = (function (state_27094){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27124){if((e27124 instanceof Object)){
var ex__21915__auto__ = e27124;
var statearr_27125_27182 = state_27094;
(statearr_27125_27182[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27183 = state_27094;
state_27094 = G__27183;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__ = function(state_27094){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1.call(this,state_27094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__,jobs,results,process,async))
})();
var state__21978__auto__ = (function (){var statearr_27126 = f__21977__auto__.call(null);
(statearr_27126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_27126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__,jobs,results,process,async))
);

return c__21976__auto__;
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
var args27184 = [];
var len__19567__auto___27187 = arguments.length;
var i__19568__auto___27188 = (0);
while(true){
if((i__19568__auto___27188 < len__19567__auto___27187)){
args27184.push((arguments[i__19568__auto___27188]));

var G__27189 = (i__19568__auto___27188 + (1));
i__19568__auto___27188 = G__27189;
continue;
} else {
}
break;
}

var G__27186 = args27184.length;
switch (G__27186) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27184.length)].join('')));

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
var args27191 = [];
var len__19567__auto___27194 = arguments.length;
var i__19568__auto___27195 = (0);
while(true){
if((i__19568__auto___27195 < len__19567__auto___27194)){
args27191.push((arguments[i__19568__auto___27195]));

var G__27196 = (i__19568__auto___27195 + (1));
i__19568__auto___27195 = G__27196;
continue;
} else {
}
break;
}

var G__27193 = args27191.length;
switch (G__27193) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27191.length)].join('')));

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
var args27198 = [];
var len__19567__auto___27251 = arguments.length;
var i__19568__auto___27252 = (0);
while(true){
if((i__19568__auto___27252 < len__19567__auto___27251)){
args27198.push((arguments[i__19568__auto___27252]));

var G__27253 = (i__19568__auto___27252 + (1));
i__19568__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21976__auto___27255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___27255,tc,fc){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___27255,tc,fc){
return (function (state_27226){
var state_val_27227 = (state_27226[(1)]);
if((state_val_27227 === (7))){
var inst_27222 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27228_27256 = state_27226__$1;
(statearr_27228_27256[(2)] = inst_27222);

(statearr_27228_27256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (1))){
var state_27226__$1 = state_27226;
var statearr_27229_27257 = state_27226__$1;
(statearr_27229_27257[(2)] = null);

(statearr_27229_27257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (4))){
var inst_27203 = (state_27226[(7)]);
var inst_27203__$1 = (state_27226[(2)]);
var inst_27204 = (inst_27203__$1 == null);
var state_27226__$1 = (function (){var statearr_27230 = state_27226;
(statearr_27230[(7)] = inst_27203__$1);

return statearr_27230;
})();
if(cljs.core.truth_(inst_27204)){
var statearr_27231_27258 = state_27226__$1;
(statearr_27231_27258[(1)] = (5));

} else {
var statearr_27232_27259 = state_27226__$1;
(statearr_27232_27259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (13))){
var state_27226__$1 = state_27226;
var statearr_27233_27260 = state_27226__$1;
(statearr_27233_27260[(2)] = null);

(statearr_27233_27260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (6))){
var inst_27203 = (state_27226[(7)]);
var inst_27209 = p.call(null,inst_27203);
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27209)){
var statearr_27234_27261 = state_27226__$1;
(statearr_27234_27261[(1)] = (9));

} else {
var statearr_27235_27262 = state_27226__$1;
(statearr_27235_27262[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (3))){
var inst_27224 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else {
if((state_val_27227 === (12))){
var state_27226__$1 = state_27226;
var statearr_27236_27263 = state_27226__$1;
(statearr_27236_27263[(2)] = null);

(statearr_27236_27263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (2))){
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27226__$1,(4),ch);
} else {
if((state_val_27227 === (11))){
var inst_27203 = (state_27226[(7)]);
var inst_27213 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27226__$1,(8),inst_27213,inst_27203);
} else {
if((state_val_27227 === (9))){
var state_27226__$1 = state_27226;
var statearr_27237_27264 = state_27226__$1;
(statearr_27237_27264[(2)] = tc);

(statearr_27237_27264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (5))){
var inst_27206 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27207 = cljs.core.async.close_BANG_.call(null,fc);
var state_27226__$1 = (function (){var statearr_27238 = state_27226;
(statearr_27238[(8)] = inst_27206);

return statearr_27238;
})();
var statearr_27239_27265 = state_27226__$1;
(statearr_27239_27265[(2)] = inst_27207);

(statearr_27239_27265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (14))){
var inst_27220 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27240_27266 = state_27226__$1;
(statearr_27240_27266[(2)] = inst_27220);

(statearr_27240_27266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (10))){
var state_27226__$1 = state_27226;
var statearr_27241_27267 = state_27226__$1;
(statearr_27241_27267[(2)] = fc);

(statearr_27241_27267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (8))){
var inst_27215 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27215)){
var statearr_27242_27268 = state_27226__$1;
(statearr_27242_27268[(1)] = (12));

} else {
var statearr_27243_27269 = state_27226__$1;
(statearr_27243_27269[(1)] = (13));

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
});})(c__21976__auto___27255,tc,fc))
;
return ((function (switch__21911__auto__,c__21976__auto___27255,tc,fc){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_27247 = [null,null,null,null,null,null,null,null,null];
(statearr_27247[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_27247[(1)] = (1));

return statearr_27247;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_27226){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27248){if((e27248 instanceof Object)){
var ex__21915__auto__ = e27248;
var statearr_27249_27270 = state_27226;
(statearr_27249_27270[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27271 = state_27226;
state_27226 = G__27271;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___27255,tc,fc))
})();
var state__21978__auto__ = (function (){var statearr_27250 = f__21977__auto__.call(null);
(statearr_27250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___27255);

return statearr_27250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___27255,tc,fc))
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
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_27318){
var state_val_27319 = (state_27318[(1)]);
if((state_val_27319 === (1))){
var inst_27304 = init;
var state_27318__$1 = (function (){var statearr_27320 = state_27318;
(statearr_27320[(7)] = inst_27304);

return statearr_27320;
})();
var statearr_27321_27336 = state_27318__$1;
(statearr_27321_27336[(2)] = null);

(statearr_27321_27336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (2))){
var state_27318__$1 = state_27318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27318__$1,(4),ch);
} else {
if((state_val_27319 === (3))){
var inst_27316 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27318__$1,inst_27316);
} else {
if((state_val_27319 === (4))){
var inst_27307 = (state_27318[(8)]);
var inst_27307__$1 = (state_27318[(2)]);
var inst_27308 = (inst_27307__$1 == null);
var state_27318__$1 = (function (){var statearr_27322 = state_27318;
(statearr_27322[(8)] = inst_27307__$1);

return statearr_27322;
})();
if(cljs.core.truth_(inst_27308)){
var statearr_27323_27337 = state_27318__$1;
(statearr_27323_27337[(1)] = (5));

} else {
var statearr_27324_27338 = state_27318__$1;
(statearr_27324_27338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (5))){
var inst_27304 = (state_27318[(7)]);
var state_27318__$1 = state_27318;
var statearr_27325_27339 = state_27318__$1;
(statearr_27325_27339[(2)] = inst_27304);

(statearr_27325_27339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (6))){
var inst_27307 = (state_27318[(8)]);
var inst_27304 = (state_27318[(7)]);
var inst_27311 = f.call(null,inst_27304,inst_27307);
var inst_27304__$1 = inst_27311;
var state_27318__$1 = (function (){var statearr_27326 = state_27318;
(statearr_27326[(7)] = inst_27304__$1);

return statearr_27326;
})();
var statearr_27327_27340 = state_27318__$1;
(statearr_27327_27340[(2)] = null);

(statearr_27327_27340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (7))){
var inst_27314 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
var statearr_27328_27341 = state_27318__$1;
(statearr_27328_27341[(2)] = inst_27314);

(statearr_27328_27341[(1)] = (3));


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
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21912__auto____0 = (function (){
var statearr_27332 = [null,null,null,null,null,null,null,null,null];
(statearr_27332[(0)] = cljs$core$async$reduce_$_state_machine__21912__auto__);

(statearr_27332[(1)] = (1));

return statearr_27332;
});
var cljs$core$async$reduce_$_state_machine__21912__auto____1 = (function (state_27318){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27333){if((e27333 instanceof Object)){
var ex__21915__auto__ = e27333;
var statearr_27334_27342 = state_27318;
(statearr_27334_27342[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27343 = state_27318;
state_27318 = G__27343;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21912__auto__ = function(state_27318){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21912__auto____1.call(this,state_27318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21912__auto____0;
cljs$core$async$reduce_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21912__auto____1;
return cljs$core$async$reduce_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_27335 = f__21977__auto__.call(null);
(statearr_27335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
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
var args27344 = [];
var len__19567__auto___27396 = arguments.length;
var i__19568__auto___27397 = (0);
while(true){
if((i__19568__auto___27397 < len__19567__auto___27396)){
args27344.push((arguments[i__19568__auto___27397]));

var G__27398 = (i__19568__auto___27397 + (1));
i__19568__auto___27397 = G__27398;
continue;
} else {
}
break;
}

var G__27346 = args27344.length;
switch (G__27346) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27344.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_27371){
var state_val_27372 = (state_27371[(1)]);
if((state_val_27372 === (7))){
var inst_27353 = (state_27371[(2)]);
var state_27371__$1 = state_27371;
var statearr_27373_27400 = state_27371__$1;
(statearr_27373_27400[(2)] = inst_27353);

(statearr_27373_27400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (1))){
var inst_27347 = cljs.core.seq.call(null,coll);
var inst_27348 = inst_27347;
var state_27371__$1 = (function (){var statearr_27374 = state_27371;
(statearr_27374[(7)] = inst_27348);

return statearr_27374;
})();
var statearr_27375_27401 = state_27371__$1;
(statearr_27375_27401[(2)] = null);

(statearr_27375_27401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (4))){
var inst_27348 = (state_27371[(7)]);
var inst_27351 = cljs.core.first.call(null,inst_27348);
var state_27371__$1 = state_27371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27371__$1,(7),ch,inst_27351);
} else {
if((state_val_27372 === (13))){
var inst_27365 = (state_27371[(2)]);
var state_27371__$1 = state_27371;
var statearr_27376_27402 = state_27371__$1;
(statearr_27376_27402[(2)] = inst_27365);

(statearr_27376_27402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (6))){
var inst_27356 = (state_27371[(2)]);
var state_27371__$1 = state_27371;
if(cljs.core.truth_(inst_27356)){
var statearr_27377_27403 = state_27371__$1;
(statearr_27377_27403[(1)] = (8));

} else {
var statearr_27378_27404 = state_27371__$1;
(statearr_27378_27404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (3))){
var inst_27369 = (state_27371[(2)]);
var state_27371__$1 = state_27371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27371__$1,inst_27369);
} else {
if((state_val_27372 === (12))){
var state_27371__$1 = state_27371;
var statearr_27379_27405 = state_27371__$1;
(statearr_27379_27405[(2)] = null);

(statearr_27379_27405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (2))){
var inst_27348 = (state_27371[(7)]);
var state_27371__$1 = state_27371;
if(cljs.core.truth_(inst_27348)){
var statearr_27380_27406 = state_27371__$1;
(statearr_27380_27406[(1)] = (4));

} else {
var statearr_27381_27407 = state_27371__$1;
(statearr_27381_27407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (11))){
var inst_27362 = cljs.core.async.close_BANG_.call(null,ch);
var state_27371__$1 = state_27371;
var statearr_27382_27408 = state_27371__$1;
(statearr_27382_27408[(2)] = inst_27362);

(statearr_27382_27408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (9))){
var state_27371__$1 = state_27371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27383_27409 = state_27371__$1;
(statearr_27383_27409[(1)] = (11));

} else {
var statearr_27384_27410 = state_27371__$1;
(statearr_27384_27410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (5))){
var inst_27348 = (state_27371[(7)]);
var state_27371__$1 = state_27371;
var statearr_27385_27411 = state_27371__$1;
(statearr_27385_27411[(2)] = inst_27348);

(statearr_27385_27411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (10))){
var inst_27367 = (state_27371[(2)]);
var state_27371__$1 = state_27371;
var statearr_27386_27412 = state_27371__$1;
(statearr_27386_27412[(2)] = inst_27367);

(statearr_27386_27412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27372 === (8))){
var inst_27348 = (state_27371[(7)]);
var inst_27358 = cljs.core.next.call(null,inst_27348);
var inst_27348__$1 = inst_27358;
var state_27371__$1 = (function (){var statearr_27387 = state_27371;
(statearr_27387[(7)] = inst_27348__$1);

return statearr_27387;
})();
var statearr_27388_27413 = state_27371__$1;
(statearr_27388_27413[(2)] = null);

(statearr_27388_27413[(1)] = (2));


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
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_27392 = [null,null,null,null,null,null,null,null];
(statearr_27392[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_27392[(1)] = (1));

return statearr_27392;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_27371){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27393){if((e27393 instanceof Object)){
var ex__21915__auto__ = e27393;
var statearr_27394_27414 = state_27371;
(statearr_27394_27414[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27415 = state_27371;
state_27371 = G__27415;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_27371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_27371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_27395 = f__21977__auto__.call(null);
(statearr_27395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_27395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
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
if(typeof cljs.core.async.t27641 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27641 = (function (mult,ch,cs,meta27642){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27642 = meta27642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27643,meta27642__$1){
var self__ = this;
var _27643__$1 = this;
return (new cljs.core.async.t27641(self__.mult,self__.ch,self__.cs,meta27642__$1));
});})(cs))
;

cljs.core.async.t27641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27643){
var self__ = this;
var _27643__$1 = this;
return self__.meta27642;
});})(cs))
;

cljs.core.async.t27641.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27641.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27641.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27642","meta27642",818023349,null)], null);
});})(cs))
;

cljs.core.async.t27641.cljs$lang$type = true;

cljs.core.async.t27641.cljs$lang$ctorStr = "cljs.core.async/t27641";

cljs.core.async.t27641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t27641");
});})(cs))
;

cljs.core.async.__GT_t27641 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27641(mult__$1,ch__$1,cs__$1,meta27642){
return (new cljs.core.async.t27641(mult__$1,ch__$1,cs__$1,meta27642));
});})(cs))
;

}

return (new cljs.core.async.t27641(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21976__auto___27862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___27862,cs,m,dchan,dctr,done){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___27862,cs,m,dchan,dctr,done){
return (function (state_27774){
var state_val_27775 = (state_27774[(1)]);
if((state_val_27775 === (7))){
var inst_27770 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27776_27863 = state_27774__$1;
(statearr_27776_27863[(2)] = inst_27770);

(statearr_27776_27863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (20))){
var inst_27675 = (state_27774[(7)]);
var inst_27685 = cljs.core.first.call(null,inst_27675);
var inst_27686 = cljs.core.nth.call(null,inst_27685,(0),null);
var inst_27687 = cljs.core.nth.call(null,inst_27685,(1),null);
var state_27774__$1 = (function (){var statearr_27777 = state_27774;
(statearr_27777[(8)] = inst_27686);

return statearr_27777;
})();
if(cljs.core.truth_(inst_27687)){
var statearr_27778_27864 = state_27774__$1;
(statearr_27778_27864[(1)] = (22));

} else {
var statearr_27779_27865 = state_27774__$1;
(statearr_27779_27865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (27))){
var inst_27646 = (state_27774[(9)]);
var inst_27715 = (state_27774[(10)]);
var inst_27717 = (state_27774[(11)]);
var inst_27722 = (state_27774[(12)]);
var inst_27722__$1 = cljs.core._nth.call(null,inst_27715,inst_27717);
var inst_27723 = cljs.core.async.put_BANG_.call(null,inst_27722__$1,inst_27646,done);
var state_27774__$1 = (function (){var statearr_27780 = state_27774;
(statearr_27780[(12)] = inst_27722__$1);

return statearr_27780;
})();
if(cljs.core.truth_(inst_27723)){
var statearr_27781_27866 = state_27774__$1;
(statearr_27781_27866[(1)] = (30));

} else {
var statearr_27782_27867 = state_27774__$1;
(statearr_27782_27867[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (1))){
var state_27774__$1 = state_27774;
var statearr_27783_27868 = state_27774__$1;
(statearr_27783_27868[(2)] = null);

(statearr_27783_27868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (24))){
var inst_27675 = (state_27774[(7)]);
var inst_27692 = (state_27774[(2)]);
var inst_27693 = cljs.core.next.call(null,inst_27675);
var inst_27655 = inst_27693;
var inst_27656 = null;
var inst_27657 = (0);
var inst_27658 = (0);
var state_27774__$1 = (function (){var statearr_27784 = state_27774;
(statearr_27784[(13)] = inst_27658);

(statearr_27784[(14)] = inst_27657);

(statearr_27784[(15)] = inst_27656);

(statearr_27784[(16)] = inst_27692);

(statearr_27784[(17)] = inst_27655);

return statearr_27784;
})();
var statearr_27785_27869 = state_27774__$1;
(statearr_27785_27869[(2)] = null);

(statearr_27785_27869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (39))){
var state_27774__$1 = state_27774;
var statearr_27789_27870 = state_27774__$1;
(statearr_27789_27870[(2)] = null);

(statearr_27789_27870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (4))){
var inst_27646 = (state_27774[(9)]);
var inst_27646__$1 = (state_27774[(2)]);
var inst_27647 = (inst_27646__$1 == null);
var state_27774__$1 = (function (){var statearr_27790 = state_27774;
(statearr_27790[(9)] = inst_27646__$1);

return statearr_27790;
})();
if(cljs.core.truth_(inst_27647)){
var statearr_27791_27871 = state_27774__$1;
(statearr_27791_27871[(1)] = (5));

} else {
var statearr_27792_27872 = state_27774__$1;
(statearr_27792_27872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (15))){
var inst_27658 = (state_27774[(13)]);
var inst_27657 = (state_27774[(14)]);
var inst_27656 = (state_27774[(15)]);
var inst_27655 = (state_27774[(17)]);
var inst_27671 = (state_27774[(2)]);
var inst_27672 = (inst_27658 + (1));
var tmp27786 = inst_27657;
var tmp27787 = inst_27656;
var tmp27788 = inst_27655;
var inst_27655__$1 = tmp27788;
var inst_27656__$1 = tmp27787;
var inst_27657__$1 = tmp27786;
var inst_27658__$1 = inst_27672;
var state_27774__$1 = (function (){var statearr_27793 = state_27774;
(statearr_27793[(13)] = inst_27658__$1);

(statearr_27793[(14)] = inst_27657__$1);

(statearr_27793[(15)] = inst_27656__$1);

(statearr_27793[(17)] = inst_27655__$1);

(statearr_27793[(18)] = inst_27671);

return statearr_27793;
})();
var statearr_27794_27873 = state_27774__$1;
(statearr_27794_27873[(2)] = null);

(statearr_27794_27873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (21))){
var inst_27696 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27798_27874 = state_27774__$1;
(statearr_27798_27874[(2)] = inst_27696);

(statearr_27798_27874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (31))){
var inst_27722 = (state_27774[(12)]);
var inst_27726 = done.call(null,null);
var inst_27727 = cljs.core.async.untap_STAR_.call(null,m,inst_27722);
var state_27774__$1 = (function (){var statearr_27799 = state_27774;
(statearr_27799[(19)] = inst_27726);

return statearr_27799;
})();
var statearr_27800_27875 = state_27774__$1;
(statearr_27800_27875[(2)] = inst_27727);

(statearr_27800_27875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (32))){
var inst_27714 = (state_27774[(20)]);
var inst_27716 = (state_27774[(21)]);
var inst_27715 = (state_27774[(10)]);
var inst_27717 = (state_27774[(11)]);
var inst_27729 = (state_27774[(2)]);
var inst_27730 = (inst_27717 + (1));
var tmp27795 = inst_27714;
var tmp27796 = inst_27716;
var tmp27797 = inst_27715;
var inst_27714__$1 = tmp27795;
var inst_27715__$1 = tmp27797;
var inst_27716__$1 = tmp27796;
var inst_27717__$1 = inst_27730;
var state_27774__$1 = (function (){var statearr_27801 = state_27774;
(statearr_27801[(20)] = inst_27714__$1);

(statearr_27801[(21)] = inst_27716__$1);

(statearr_27801[(22)] = inst_27729);

(statearr_27801[(10)] = inst_27715__$1);

(statearr_27801[(11)] = inst_27717__$1);

return statearr_27801;
})();
var statearr_27802_27876 = state_27774__$1;
(statearr_27802_27876[(2)] = null);

(statearr_27802_27876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (40))){
var inst_27742 = (state_27774[(23)]);
var inst_27746 = done.call(null,null);
var inst_27747 = cljs.core.async.untap_STAR_.call(null,m,inst_27742);
var state_27774__$1 = (function (){var statearr_27803 = state_27774;
(statearr_27803[(24)] = inst_27746);

return statearr_27803;
})();
var statearr_27804_27877 = state_27774__$1;
(statearr_27804_27877[(2)] = inst_27747);

(statearr_27804_27877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (33))){
var inst_27733 = (state_27774[(25)]);
var inst_27735 = cljs.core.chunked_seq_QMARK_.call(null,inst_27733);
var state_27774__$1 = state_27774;
if(inst_27735){
var statearr_27805_27878 = state_27774__$1;
(statearr_27805_27878[(1)] = (36));

} else {
var statearr_27806_27879 = state_27774__$1;
(statearr_27806_27879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (13))){
var inst_27665 = (state_27774[(26)]);
var inst_27668 = cljs.core.async.close_BANG_.call(null,inst_27665);
var state_27774__$1 = state_27774;
var statearr_27807_27880 = state_27774__$1;
(statearr_27807_27880[(2)] = inst_27668);

(statearr_27807_27880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (22))){
var inst_27686 = (state_27774[(8)]);
var inst_27689 = cljs.core.async.close_BANG_.call(null,inst_27686);
var state_27774__$1 = state_27774;
var statearr_27808_27881 = state_27774__$1;
(statearr_27808_27881[(2)] = inst_27689);

(statearr_27808_27881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (36))){
var inst_27733 = (state_27774[(25)]);
var inst_27737 = cljs.core.chunk_first.call(null,inst_27733);
var inst_27738 = cljs.core.chunk_rest.call(null,inst_27733);
var inst_27739 = cljs.core.count.call(null,inst_27737);
var inst_27714 = inst_27738;
var inst_27715 = inst_27737;
var inst_27716 = inst_27739;
var inst_27717 = (0);
var state_27774__$1 = (function (){var statearr_27809 = state_27774;
(statearr_27809[(20)] = inst_27714);

(statearr_27809[(21)] = inst_27716);

(statearr_27809[(10)] = inst_27715);

(statearr_27809[(11)] = inst_27717);

return statearr_27809;
})();
var statearr_27810_27882 = state_27774__$1;
(statearr_27810_27882[(2)] = null);

(statearr_27810_27882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (41))){
var inst_27733 = (state_27774[(25)]);
var inst_27749 = (state_27774[(2)]);
var inst_27750 = cljs.core.next.call(null,inst_27733);
var inst_27714 = inst_27750;
var inst_27715 = null;
var inst_27716 = (0);
var inst_27717 = (0);
var state_27774__$1 = (function (){var statearr_27811 = state_27774;
(statearr_27811[(20)] = inst_27714);

(statearr_27811[(21)] = inst_27716);

(statearr_27811[(27)] = inst_27749);

(statearr_27811[(10)] = inst_27715);

(statearr_27811[(11)] = inst_27717);

return statearr_27811;
})();
var statearr_27812_27883 = state_27774__$1;
(statearr_27812_27883[(2)] = null);

(statearr_27812_27883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (43))){
var state_27774__$1 = state_27774;
var statearr_27813_27884 = state_27774__$1;
(statearr_27813_27884[(2)] = null);

(statearr_27813_27884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (29))){
var inst_27758 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27814_27885 = state_27774__$1;
(statearr_27814_27885[(2)] = inst_27758);

(statearr_27814_27885[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (44))){
var inst_27767 = (state_27774[(2)]);
var state_27774__$1 = (function (){var statearr_27815 = state_27774;
(statearr_27815[(28)] = inst_27767);

return statearr_27815;
})();
var statearr_27816_27886 = state_27774__$1;
(statearr_27816_27886[(2)] = null);

(statearr_27816_27886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (6))){
var inst_27706 = (state_27774[(29)]);
var inst_27705 = cljs.core.deref.call(null,cs);
var inst_27706__$1 = cljs.core.keys.call(null,inst_27705);
var inst_27707 = cljs.core.count.call(null,inst_27706__$1);
var inst_27708 = cljs.core.reset_BANG_.call(null,dctr,inst_27707);
var inst_27713 = cljs.core.seq.call(null,inst_27706__$1);
var inst_27714 = inst_27713;
var inst_27715 = null;
var inst_27716 = (0);
var inst_27717 = (0);
var state_27774__$1 = (function (){var statearr_27817 = state_27774;
(statearr_27817[(30)] = inst_27708);

(statearr_27817[(20)] = inst_27714);

(statearr_27817[(29)] = inst_27706__$1);

(statearr_27817[(21)] = inst_27716);

(statearr_27817[(10)] = inst_27715);

(statearr_27817[(11)] = inst_27717);

return statearr_27817;
})();
var statearr_27818_27887 = state_27774__$1;
(statearr_27818_27887[(2)] = null);

(statearr_27818_27887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (28))){
var inst_27714 = (state_27774[(20)]);
var inst_27733 = (state_27774[(25)]);
var inst_27733__$1 = cljs.core.seq.call(null,inst_27714);
var state_27774__$1 = (function (){var statearr_27819 = state_27774;
(statearr_27819[(25)] = inst_27733__$1);

return statearr_27819;
})();
if(inst_27733__$1){
var statearr_27820_27888 = state_27774__$1;
(statearr_27820_27888[(1)] = (33));

} else {
var statearr_27821_27889 = state_27774__$1;
(statearr_27821_27889[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (25))){
var inst_27716 = (state_27774[(21)]);
var inst_27717 = (state_27774[(11)]);
var inst_27719 = (inst_27717 < inst_27716);
var inst_27720 = inst_27719;
var state_27774__$1 = state_27774;
if(cljs.core.truth_(inst_27720)){
var statearr_27822_27890 = state_27774__$1;
(statearr_27822_27890[(1)] = (27));

} else {
var statearr_27823_27891 = state_27774__$1;
(statearr_27823_27891[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (34))){
var state_27774__$1 = state_27774;
var statearr_27824_27892 = state_27774__$1;
(statearr_27824_27892[(2)] = null);

(statearr_27824_27892[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (17))){
var state_27774__$1 = state_27774;
var statearr_27825_27893 = state_27774__$1;
(statearr_27825_27893[(2)] = null);

(statearr_27825_27893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (3))){
var inst_27772 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27774__$1,inst_27772);
} else {
if((state_val_27775 === (12))){
var inst_27701 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27826_27894 = state_27774__$1;
(statearr_27826_27894[(2)] = inst_27701);

(statearr_27826_27894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (2))){
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27774__$1,(4),ch);
} else {
if((state_val_27775 === (23))){
var state_27774__$1 = state_27774;
var statearr_27827_27895 = state_27774__$1;
(statearr_27827_27895[(2)] = null);

(statearr_27827_27895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (35))){
var inst_27756 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27828_27896 = state_27774__$1;
(statearr_27828_27896[(2)] = inst_27756);

(statearr_27828_27896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (19))){
var inst_27675 = (state_27774[(7)]);
var inst_27679 = cljs.core.chunk_first.call(null,inst_27675);
var inst_27680 = cljs.core.chunk_rest.call(null,inst_27675);
var inst_27681 = cljs.core.count.call(null,inst_27679);
var inst_27655 = inst_27680;
var inst_27656 = inst_27679;
var inst_27657 = inst_27681;
var inst_27658 = (0);
var state_27774__$1 = (function (){var statearr_27829 = state_27774;
(statearr_27829[(13)] = inst_27658);

(statearr_27829[(14)] = inst_27657);

(statearr_27829[(15)] = inst_27656);

(statearr_27829[(17)] = inst_27655);

return statearr_27829;
})();
var statearr_27830_27897 = state_27774__$1;
(statearr_27830_27897[(2)] = null);

(statearr_27830_27897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (11))){
var inst_27675 = (state_27774[(7)]);
var inst_27655 = (state_27774[(17)]);
var inst_27675__$1 = cljs.core.seq.call(null,inst_27655);
var state_27774__$1 = (function (){var statearr_27831 = state_27774;
(statearr_27831[(7)] = inst_27675__$1);

return statearr_27831;
})();
if(inst_27675__$1){
var statearr_27832_27898 = state_27774__$1;
(statearr_27832_27898[(1)] = (16));

} else {
var statearr_27833_27899 = state_27774__$1;
(statearr_27833_27899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (9))){
var inst_27703 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27834_27900 = state_27774__$1;
(statearr_27834_27900[(2)] = inst_27703);

(statearr_27834_27900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (5))){
var inst_27653 = cljs.core.deref.call(null,cs);
var inst_27654 = cljs.core.seq.call(null,inst_27653);
var inst_27655 = inst_27654;
var inst_27656 = null;
var inst_27657 = (0);
var inst_27658 = (0);
var state_27774__$1 = (function (){var statearr_27835 = state_27774;
(statearr_27835[(13)] = inst_27658);

(statearr_27835[(14)] = inst_27657);

(statearr_27835[(15)] = inst_27656);

(statearr_27835[(17)] = inst_27655);

return statearr_27835;
})();
var statearr_27836_27901 = state_27774__$1;
(statearr_27836_27901[(2)] = null);

(statearr_27836_27901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (14))){
var state_27774__$1 = state_27774;
var statearr_27837_27902 = state_27774__$1;
(statearr_27837_27902[(2)] = null);

(statearr_27837_27902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (45))){
var inst_27764 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27838_27903 = state_27774__$1;
(statearr_27838_27903[(2)] = inst_27764);

(statearr_27838_27903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (26))){
var inst_27706 = (state_27774[(29)]);
var inst_27760 = (state_27774[(2)]);
var inst_27761 = cljs.core.seq.call(null,inst_27706);
var state_27774__$1 = (function (){var statearr_27839 = state_27774;
(statearr_27839[(31)] = inst_27760);

return statearr_27839;
})();
if(inst_27761){
var statearr_27840_27904 = state_27774__$1;
(statearr_27840_27904[(1)] = (42));

} else {
var statearr_27841_27905 = state_27774__$1;
(statearr_27841_27905[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (16))){
var inst_27675 = (state_27774[(7)]);
var inst_27677 = cljs.core.chunked_seq_QMARK_.call(null,inst_27675);
var state_27774__$1 = state_27774;
if(inst_27677){
var statearr_27842_27906 = state_27774__$1;
(statearr_27842_27906[(1)] = (19));

} else {
var statearr_27843_27907 = state_27774__$1;
(statearr_27843_27907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (38))){
var inst_27753 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27844_27908 = state_27774__$1;
(statearr_27844_27908[(2)] = inst_27753);

(statearr_27844_27908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (30))){
var state_27774__$1 = state_27774;
var statearr_27845_27909 = state_27774__$1;
(statearr_27845_27909[(2)] = null);

(statearr_27845_27909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (10))){
var inst_27658 = (state_27774[(13)]);
var inst_27656 = (state_27774[(15)]);
var inst_27664 = cljs.core._nth.call(null,inst_27656,inst_27658);
var inst_27665 = cljs.core.nth.call(null,inst_27664,(0),null);
var inst_27666 = cljs.core.nth.call(null,inst_27664,(1),null);
var state_27774__$1 = (function (){var statearr_27846 = state_27774;
(statearr_27846[(26)] = inst_27665);

return statearr_27846;
})();
if(cljs.core.truth_(inst_27666)){
var statearr_27847_27910 = state_27774__$1;
(statearr_27847_27910[(1)] = (13));

} else {
var statearr_27848_27911 = state_27774__$1;
(statearr_27848_27911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (18))){
var inst_27699 = (state_27774[(2)]);
var state_27774__$1 = state_27774;
var statearr_27849_27912 = state_27774__$1;
(statearr_27849_27912[(2)] = inst_27699);

(statearr_27849_27912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (42))){
var state_27774__$1 = state_27774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27774__$1,(45),dchan);
} else {
if((state_val_27775 === (37))){
var inst_27646 = (state_27774[(9)]);
var inst_27733 = (state_27774[(25)]);
var inst_27742 = (state_27774[(23)]);
var inst_27742__$1 = cljs.core.first.call(null,inst_27733);
var inst_27743 = cljs.core.async.put_BANG_.call(null,inst_27742__$1,inst_27646,done);
var state_27774__$1 = (function (){var statearr_27850 = state_27774;
(statearr_27850[(23)] = inst_27742__$1);

return statearr_27850;
})();
if(cljs.core.truth_(inst_27743)){
var statearr_27851_27913 = state_27774__$1;
(statearr_27851_27913[(1)] = (39));

} else {
var statearr_27852_27914 = state_27774__$1;
(statearr_27852_27914[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27775 === (8))){
var inst_27658 = (state_27774[(13)]);
var inst_27657 = (state_27774[(14)]);
var inst_27660 = (inst_27658 < inst_27657);
var inst_27661 = inst_27660;
var state_27774__$1 = state_27774;
if(cljs.core.truth_(inst_27661)){
var statearr_27853_27915 = state_27774__$1;
(statearr_27853_27915[(1)] = (10));

} else {
var statearr_27854_27916 = state_27774__$1;
(statearr_27854_27916[(1)] = (11));

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
});})(c__21976__auto___27862,cs,m,dchan,dctr,done))
;
return ((function (switch__21911__auto__,c__21976__auto___27862,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21912__auto__ = null;
var cljs$core$async$mult_$_state_machine__21912__auto____0 = (function (){
var statearr_27858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27858[(0)] = cljs$core$async$mult_$_state_machine__21912__auto__);

(statearr_27858[(1)] = (1));

return statearr_27858;
});
var cljs$core$async$mult_$_state_machine__21912__auto____1 = (function (state_27774){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_27774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e27859){if((e27859 instanceof Object)){
var ex__21915__auto__ = e27859;
var statearr_27860_27917 = state_27774;
(statearr_27860_27917[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27918 = state_27774;
state_27774 = G__27918;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21912__auto__ = function(state_27774){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21912__auto____1.call(this,state_27774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21912__auto____0;
cljs$core$async$mult_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21912__auto____1;
return cljs$core$async$mult_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___27862,cs,m,dchan,dctr,done))
})();
var state__21978__auto__ = (function (){var statearr_27861 = f__21977__auto__.call(null);
(statearr_27861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___27862);

return statearr_27861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___27862,cs,m,dchan,dctr,done))
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
var args27919 = [];
var len__19567__auto___27922 = arguments.length;
var i__19568__auto___27923 = (0);
while(true){
if((i__19568__auto___27923 < len__19567__auto___27922)){
args27919.push((arguments[i__19568__auto___27923]));

var G__27924 = (i__19568__auto___27923 + (1));
i__19568__auto___27923 = G__27924;
continue;
} else {
}
break;
}

var G__27921 = args27919.length;
switch (G__27921) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27919.length)].join('')));

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
var len__19567__auto___27938 = arguments.length;
var i__19568__auto___27939 = (0);
while(true){
if((i__19568__auto___27939 < len__19567__auto___27938)){
args__19574__auto__.push((arguments[i__19568__auto___27939]));

var G__27940 = (i__19568__auto___27939 + (1));
i__19568__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((3) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19575__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27932){
var map__27933 = p__27932;
var map__27933__$1 = ((((!((map__27933 == null)))?((((map__27933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);
var opts = map__27933__$1;
var statearr_27935_27941 = state;
(statearr_27935_27941[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27933,map__27933__$1,opts){
return (function (val){
var statearr_27936_27942 = state;
(statearr_27936_27942[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27933,map__27933__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27937_27943 = state;
(statearr_27937_27943[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27928){
var G__27929 = cljs.core.first.call(null,seq27928);
var seq27928__$1 = cljs.core.next.call(null,seq27928);
var G__27930 = cljs.core.first.call(null,seq27928__$1);
var seq27928__$2 = cljs.core.next.call(null,seq27928__$1);
var G__27931 = cljs.core.first.call(null,seq27928__$2);
var seq27928__$3 = cljs.core.next.call(null,seq27928__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27929,G__27930,G__27931,seq27928__$3);
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
if(typeof cljs.core.async.t28107 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28107 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28108){
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
this.meta28108 = meta28108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28109,meta28108__$1){
var self__ = this;
var _28109__$1 = this;
return (new cljs.core.async.t28107(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28108__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28109){
var self__ = this;
var _28109__$1 = this;
return self__.meta28108;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28107.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28107.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28108","meta28108",-1211297665,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28107.cljs$lang$type = true;

cljs.core.async.t28107.cljs$lang$ctorStr = "cljs.core.async/t28107";

cljs.core.async.t28107.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28107");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28107 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28107(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28108){
return (new cljs.core.async.t28107(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28108));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28107(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21976__auto___28270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___28270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___28270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28207){
var state_val_28208 = (state_28207[(1)]);
if((state_val_28208 === (7))){
var inst_28125 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28209_28271 = state_28207__$1;
(statearr_28209_28271[(2)] = inst_28125);

(statearr_28209_28271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (20))){
var inst_28137 = (state_28207[(7)]);
var state_28207__$1 = state_28207;
var statearr_28210_28272 = state_28207__$1;
(statearr_28210_28272[(2)] = inst_28137);

(statearr_28210_28272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (27))){
var state_28207__$1 = state_28207;
var statearr_28211_28273 = state_28207__$1;
(statearr_28211_28273[(2)] = null);

(statearr_28211_28273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (1))){
var inst_28113 = (state_28207[(8)]);
var inst_28113__$1 = calc_state.call(null);
var inst_28115 = (inst_28113__$1 == null);
var inst_28116 = cljs.core.not.call(null,inst_28115);
var state_28207__$1 = (function (){var statearr_28212 = state_28207;
(statearr_28212[(8)] = inst_28113__$1);

return statearr_28212;
})();
if(inst_28116){
var statearr_28213_28274 = state_28207__$1;
(statearr_28213_28274[(1)] = (2));

} else {
var statearr_28214_28275 = state_28207__$1;
(statearr_28214_28275[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (24))){
var inst_28181 = (state_28207[(9)]);
var inst_28167 = (state_28207[(10)]);
var inst_28160 = (state_28207[(11)]);
var inst_28181__$1 = inst_28160.call(null,inst_28167);
var state_28207__$1 = (function (){var statearr_28215 = state_28207;
(statearr_28215[(9)] = inst_28181__$1);

return statearr_28215;
})();
if(cljs.core.truth_(inst_28181__$1)){
var statearr_28216_28276 = state_28207__$1;
(statearr_28216_28276[(1)] = (29));

} else {
var statearr_28217_28277 = state_28207__$1;
(statearr_28217_28277[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (4))){
var inst_28128 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28128)){
var statearr_28218_28278 = state_28207__$1;
(statearr_28218_28278[(1)] = (8));

} else {
var statearr_28219_28279 = state_28207__$1;
(statearr_28219_28279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (15))){
var inst_28154 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28154)){
var statearr_28220_28280 = state_28207__$1;
(statearr_28220_28280[(1)] = (19));

} else {
var statearr_28221_28281 = state_28207__$1;
(statearr_28221_28281[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (21))){
var inst_28159 = (state_28207[(12)]);
var inst_28159__$1 = (state_28207[(2)]);
var inst_28160 = cljs.core.get.call(null,inst_28159__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28161 = cljs.core.get.call(null,inst_28159__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28162 = cljs.core.get.call(null,inst_28159__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28207__$1 = (function (){var statearr_28222 = state_28207;
(statearr_28222[(12)] = inst_28159__$1);

(statearr_28222[(13)] = inst_28161);

(statearr_28222[(11)] = inst_28160);

return statearr_28222;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28207__$1,(22),inst_28162);
} else {
if((state_val_28208 === (31))){
var inst_28189 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28189)){
var statearr_28223_28282 = state_28207__$1;
(statearr_28223_28282[(1)] = (32));

} else {
var statearr_28224_28283 = state_28207__$1;
(statearr_28224_28283[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (32))){
var inst_28166 = (state_28207[(14)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28207__$1,(35),out,inst_28166);
} else {
if((state_val_28208 === (33))){
var inst_28159 = (state_28207[(12)]);
var inst_28137 = inst_28159;
var state_28207__$1 = (function (){var statearr_28225 = state_28207;
(statearr_28225[(7)] = inst_28137);

return statearr_28225;
})();
var statearr_28226_28284 = state_28207__$1;
(statearr_28226_28284[(2)] = null);

(statearr_28226_28284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (13))){
var inst_28137 = (state_28207[(7)]);
var inst_28144 = inst_28137.cljs$lang$protocol_mask$partition0$;
var inst_28145 = (inst_28144 & (64));
var inst_28146 = inst_28137.cljs$core$ISeq$;
var inst_28147 = (inst_28145) || (inst_28146);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28147)){
var statearr_28227_28285 = state_28207__$1;
(statearr_28227_28285[(1)] = (16));

} else {
var statearr_28228_28286 = state_28207__$1;
(statearr_28228_28286[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (22))){
var inst_28166 = (state_28207[(14)]);
var inst_28167 = (state_28207[(10)]);
var inst_28165 = (state_28207[(2)]);
var inst_28166__$1 = cljs.core.nth.call(null,inst_28165,(0),null);
var inst_28167__$1 = cljs.core.nth.call(null,inst_28165,(1),null);
var inst_28168 = (inst_28166__$1 == null);
var inst_28169 = cljs.core._EQ_.call(null,inst_28167__$1,change);
var inst_28170 = (inst_28168) || (inst_28169);
var state_28207__$1 = (function (){var statearr_28229 = state_28207;
(statearr_28229[(14)] = inst_28166__$1);

(statearr_28229[(10)] = inst_28167__$1);

return statearr_28229;
})();
if(cljs.core.truth_(inst_28170)){
var statearr_28230_28287 = state_28207__$1;
(statearr_28230_28287[(1)] = (23));

} else {
var statearr_28231_28288 = state_28207__$1;
(statearr_28231_28288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (36))){
var inst_28159 = (state_28207[(12)]);
var inst_28137 = inst_28159;
var state_28207__$1 = (function (){var statearr_28232 = state_28207;
(statearr_28232[(7)] = inst_28137);

return statearr_28232;
})();
var statearr_28233_28289 = state_28207__$1;
(statearr_28233_28289[(2)] = null);

(statearr_28233_28289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (29))){
var inst_28181 = (state_28207[(9)]);
var state_28207__$1 = state_28207;
var statearr_28234_28290 = state_28207__$1;
(statearr_28234_28290[(2)] = inst_28181);

(statearr_28234_28290[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (6))){
var state_28207__$1 = state_28207;
var statearr_28235_28291 = state_28207__$1;
(statearr_28235_28291[(2)] = false);

(statearr_28235_28291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (28))){
var inst_28177 = (state_28207[(2)]);
var inst_28178 = calc_state.call(null);
var inst_28137 = inst_28178;
var state_28207__$1 = (function (){var statearr_28236 = state_28207;
(statearr_28236[(15)] = inst_28177);

(statearr_28236[(7)] = inst_28137);

return statearr_28236;
})();
var statearr_28237_28292 = state_28207__$1;
(statearr_28237_28292[(2)] = null);

(statearr_28237_28292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (25))){
var inst_28203 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28238_28293 = state_28207__$1;
(statearr_28238_28293[(2)] = inst_28203);

(statearr_28238_28293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (34))){
var inst_28201 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28239_28294 = state_28207__$1;
(statearr_28239_28294[(2)] = inst_28201);

(statearr_28239_28294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (17))){
var state_28207__$1 = state_28207;
var statearr_28240_28295 = state_28207__$1;
(statearr_28240_28295[(2)] = false);

(statearr_28240_28295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (3))){
var state_28207__$1 = state_28207;
var statearr_28241_28296 = state_28207__$1;
(statearr_28241_28296[(2)] = false);

(statearr_28241_28296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (12))){
var inst_28205 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28207__$1,inst_28205);
} else {
if((state_val_28208 === (2))){
var inst_28113 = (state_28207[(8)]);
var inst_28118 = inst_28113.cljs$lang$protocol_mask$partition0$;
var inst_28119 = (inst_28118 & (64));
var inst_28120 = inst_28113.cljs$core$ISeq$;
var inst_28121 = (inst_28119) || (inst_28120);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28121)){
var statearr_28242_28297 = state_28207__$1;
(statearr_28242_28297[(1)] = (5));

} else {
var statearr_28243_28298 = state_28207__$1;
(statearr_28243_28298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (23))){
var inst_28166 = (state_28207[(14)]);
var inst_28172 = (inst_28166 == null);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28172)){
var statearr_28244_28299 = state_28207__$1;
(statearr_28244_28299[(1)] = (26));

} else {
var statearr_28245_28300 = state_28207__$1;
(statearr_28245_28300[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (35))){
var inst_28192 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
if(cljs.core.truth_(inst_28192)){
var statearr_28246_28301 = state_28207__$1;
(statearr_28246_28301[(1)] = (36));

} else {
var statearr_28247_28302 = state_28207__$1;
(statearr_28247_28302[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (19))){
var inst_28137 = (state_28207[(7)]);
var inst_28156 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28137);
var state_28207__$1 = state_28207;
var statearr_28248_28303 = state_28207__$1;
(statearr_28248_28303[(2)] = inst_28156);

(statearr_28248_28303[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (11))){
var inst_28137 = (state_28207[(7)]);
var inst_28141 = (inst_28137 == null);
var inst_28142 = cljs.core.not.call(null,inst_28141);
var state_28207__$1 = state_28207;
if(inst_28142){
var statearr_28249_28304 = state_28207__$1;
(statearr_28249_28304[(1)] = (13));

} else {
var statearr_28250_28305 = state_28207__$1;
(statearr_28250_28305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (9))){
var inst_28113 = (state_28207[(8)]);
var state_28207__$1 = state_28207;
var statearr_28251_28306 = state_28207__$1;
(statearr_28251_28306[(2)] = inst_28113);

(statearr_28251_28306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (5))){
var state_28207__$1 = state_28207;
var statearr_28252_28307 = state_28207__$1;
(statearr_28252_28307[(2)] = true);

(statearr_28252_28307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (14))){
var state_28207__$1 = state_28207;
var statearr_28253_28308 = state_28207__$1;
(statearr_28253_28308[(2)] = false);

(statearr_28253_28308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (26))){
var inst_28167 = (state_28207[(10)]);
var inst_28174 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28167);
var state_28207__$1 = state_28207;
var statearr_28254_28309 = state_28207__$1;
(statearr_28254_28309[(2)] = inst_28174);

(statearr_28254_28309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (16))){
var state_28207__$1 = state_28207;
var statearr_28255_28310 = state_28207__$1;
(statearr_28255_28310[(2)] = true);

(statearr_28255_28310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (38))){
var inst_28197 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28256_28311 = state_28207__$1;
(statearr_28256_28311[(2)] = inst_28197);

(statearr_28256_28311[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (30))){
var inst_28167 = (state_28207[(10)]);
var inst_28161 = (state_28207[(13)]);
var inst_28160 = (state_28207[(11)]);
var inst_28184 = cljs.core.empty_QMARK_.call(null,inst_28160);
var inst_28185 = inst_28161.call(null,inst_28167);
var inst_28186 = cljs.core.not.call(null,inst_28185);
var inst_28187 = (inst_28184) && (inst_28186);
var state_28207__$1 = state_28207;
var statearr_28257_28312 = state_28207__$1;
(statearr_28257_28312[(2)] = inst_28187);

(statearr_28257_28312[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (10))){
var inst_28113 = (state_28207[(8)]);
var inst_28133 = (state_28207[(2)]);
var inst_28134 = cljs.core.get.call(null,inst_28133,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28135 = cljs.core.get.call(null,inst_28133,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28136 = cljs.core.get.call(null,inst_28133,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28137 = inst_28113;
var state_28207__$1 = (function (){var statearr_28258 = state_28207;
(statearr_28258[(16)] = inst_28136);

(statearr_28258[(17)] = inst_28135);

(statearr_28258[(18)] = inst_28134);

(statearr_28258[(7)] = inst_28137);

return statearr_28258;
})();
var statearr_28259_28313 = state_28207__$1;
(statearr_28259_28313[(2)] = null);

(statearr_28259_28313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (18))){
var inst_28151 = (state_28207[(2)]);
var state_28207__$1 = state_28207;
var statearr_28260_28314 = state_28207__$1;
(statearr_28260_28314[(2)] = inst_28151);

(statearr_28260_28314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (37))){
var state_28207__$1 = state_28207;
var statearr_28261_28315 = state_28207__$1;
(statearr_28261_28315[(2)] = null);

(statearr_28261_28315[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28208 === (8))){
var inst_28113 = (state_28207[(8)]);
var inst_28130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28113);
var state_28207__$1 = state_28207;
var statearr_28262_28316 = state_28207__$1;
(statearr_28262_28316[(2)] = inst_28130);

(statearr_28262_28316[(1)] = (10));


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
});})(c__21976__auto___28270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21911__auto__,c__21976__auto___28270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21912__auto__ = null;
var cljs$core$async$mix_$_state_machine__21912__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28266[(0)] = cljs$core$async$mix_$_state_machine__21912__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var cljs$core$async$mix_$_state_machine__21912__auto____1 = (function (state_28207){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__21915__auto__ = e28267;
var statearr_28268_28317 = state_28207;
(statearr_28268_28317[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28318 = state_28207;
state_28207 = G__28318;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21912__auto__ = function(state_28207){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21912__auto____1.call(this,state_28207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21912__auto____0;
cljs$core$async$mix_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21912__auto____1;
return cljs$core$async$mix_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___28270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21978__auto__ = (function (){var statearr_28269 = f__21977__auto__.call(null);
(statearr_28269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___28270);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___28270,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28321 = [];
var len__19567__auto___28324 = arguments.length;
var i__19568__auto___28325 = (0);
while(true){
if((i__19568__auto___28325 < len__19567__auto___28324)){
args28321.push((arguments[i__19568__auto___28325]));

var G__28326 = (i__19568__auto___28325 + (1));
i__19568__auto___28325 = G__28326;
continue;
} else {
}
break;
}

var G__28323 = args28321.length;
switch (G__28323) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28321.length)].join('')));

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
var args28329 = [];
var len__19567__auto___28454 = arguments.length;
var i__19568__auto___28455 = (0);
while(true){
if((i__19568__auto___28455 < len__19567__auto___28454)){
args28329.push((arguments[i__19568__auto___28455]));

var G__28456 = (i__19568__auto___28455 + (1));
i__19568__auto___28455 = G__28456;
continue;
} else {
}
break;
}

var G__28331 = args28329.length;
switch (G__28331) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28329.length)].join('')));

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
return (function (p1__28328_SHARP_){
if(cljs.core.truth_(p1__28328_SHARP_.call(null,topic))){
return p1__28328_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28328_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18528__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28332 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28332 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28333){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28333 = meta28333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28334,meta28333__$1){
var self__ = this;
var _28334__$1 = this;
return (new cljs.core.async.t28332(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28333__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28334){
var self__ = this;
var _28334__$1 = this;
return self__.meta28333;
});})(mults,ensure_mult))
;

cljs.core.async.t28332.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28332.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28332.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28332.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28332.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28332.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28333","meta28333",-1040232672,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28332.cljs$lang$type = true;

cljs.core.async.t28332.cljs$lang$ctorStr = "cljs.core.async/t28332";

cljs.core.async.t28332.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28332");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28332 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28332(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28333){
return (new cljs.core.async.t28332(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28333));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28332(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21976__auto___28458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___28458,mults,ensure_mult,p){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___28458,mults,ensure_mult,p){
return (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28402 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28408_28459 = state_28406__$1;
(statearr_28408_28459[(2)] = inst_28402);

(statearr_28408_28459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (20))){
var state_28406__$1 = state_28406;
var statearr_28409_28460 = state_28406__$1;
(statearr_28409_28460[(2)] = null);

(statearr_28409_28460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (1))){
var state_28406__$1 = state_28406;
var statearr_28410_28461 = state_28406__$1;
(statearr_28410_28461[(2)] = null);

(statearr_28410_28461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (24))){
var inst_28385 = (state_28406[(7)]);
var inst_28394 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28385);
var state_28406__$1 = state_28406;
var statearr_28411_28462 = state_28406__$1;
(statearr_28411_28462[(2)] = inst_28394);

(statearr_28411_28462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var inst_28337 = (state_28406[(8)]);
var inst_28337__$1 = (state_28406[(2)]);
var inst_28338 = (inst_28337__$1 == null);
var state_28406__$1 = (function (){var statearr_28412 = state_28406;
(statearr_28412[(8)] = inst_28337__$1);

return statearr_28412;
})();
if(cljs.core.truth_(inst_28338)){
var statearr_28413_28463 = state_28406__$1;
(statearr_28413_28463[(1)] = (5));

} else {
var statearr_28414_28464 = state_28406__$1;
(statearr_28414_28464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (15))){
var inst_28379 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28415_28465 = state_28406__$1;
(statearr_28415_28465[(2)] = inst_28379);

(statearr_28415_28465[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (21))){
var inst_28399 = (state_28406[(2)]);
var state_28406__$1 = (function (){var statearr_28416 = state_28406;
(statearr_28416[(9)] = inst_28399);

return statearr_28416;
})();
var statearr_28417_28466 = state_28406__$1;
(statearr_28417_28466[(2)] = null);

(statearr_28417_28466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (13))){
var inst_28361 = (state_28406[(10)]);
var inst_28363 = cljs.core.chunked_seq_QMARK_.call(null,inst_28361);
var state_28406__$1 = state_28406;
if(inst_28363){
var statearr_28418_28467 = state_28406__$1;
(statearr_28418_28467[(1)] = (16));

} else {
var statearr_28419_28468 = state_28406__$1;
(statearr_28419_28468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (22))){
var inst_28391 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28391)){
var statearr_28420_28469 = state_28406__$1;
(statearr_28420_28469[(1)] = (23));

} else {
var statearr_28421_28470 = state_28406__$1;
(statearr_28421_28470[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (6))){
var inst_28385 = (state_28406[(7)]);
var inst_28337 = (state_28406[(8)]);
var inst_28387 = (state_28406[(11)]);
var inst_28385__$1 = topic_fn.call(null,inst_28337);
var inst_28386 = cljs.core.deref.call(null,mults);
var inst_28387__$1 = cljs.core.get.call(null,inst_28386,inst_28385__$1);
var state_28406__$1 = (function (){var statearr_28422 = state_28406;
(statearr_28422[(7)] = inst_28385__$1);

(statearr_28422[(11)] = inst_28387__$1);

return statearr_28422;
})();
if(cljs.core.truth_(inst_28387__$1)){
var statearr_28423_28471 = state_28406__$1;
(statearr_28423_28471[(1)] = (19));

} else {
var statearr_28424_28472 = state_28406__$1;
(statearr_28424_28472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (25))){
var inst_28396 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28425_28473 = state_28406__$1;
(statearr_28425_28473[(2)] = inst_28396);

(statearr_28425_28473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (17))){
var inst_28361 = (state_28406[(10)]);
var inst_28370 = cljs.core.first.call(null,inst_28361);
var inst_28371 = cljs.core.async.muxch_STAR_.call(null,inst_28370);
var inst_28372 = cljs.core.async.close_BANG_.call(null,inst_28371);
var inst_28373 = cljs.core.next.call(null,inst_28361);
var inst_28347 = inst_28373;
var inst_28348 = null;
var inst_28349 = (0);
var inst_28350 = (0);
var state_28406__$1 = (function (){var statearr_28426 = state_28406;
(statearr_28426[(12)] = inst_28350);

(statearr_28426[(13)] = inst_28372);

(statearr_28426[(14)] = inst_28347);

(statearr_28426[(15)] = inst_28348);

(statearr_28426[(16)] = inst_28349);

return statearr_28426;
})();
var statearr_28427_28474 = state_28406__$1;
(statearr_28427_28474[(2)] = null);

(statearr_28427_28474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var inst_28404 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (12))){
var inst_28381 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28428_28475 = state_28406__$1;
(statearr_28428_28475[(2)] = inst_28381);

(statearr_28428_28475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (2))){
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(4),ch);
} else {
if((state_val_28407 === (23))){
var state_28406__$1 = state_28406;
var statearr_28429_28476 = state_28406__$1;
(statearr_28429_28476[(2)] = null);

(statearr_28429_28476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (19))){
var inst_28337 = (state_28406[(8)]);
var inst_28387 = (state_28406[(11)]);
var inst_28389 = cljs.core.async.muxch_STAR_.call(null,inst_28387);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28406__$1,(22),inst_28389,inst_28337);
} else {
if((state_val_28407 === (11))){
var inst_28361 = (state_28406[(10)]);
var inst_28347 = (state_28406[(14)]);
var inst_28361__$1 = cljs.core.seq.call(null,inst_28347);
var state_28406__$1 = (function (){var statearr_28430 = state_28406;
(statearr_28430[(10)] = inst_28361__$1);

return statearr_28430;
})();
if(inst_28361__$1){
var statearr_28431_28477 = state_28406__$1;
(statearr_28431_28477[(1)] = (13));

} else {
var statearr_28432_28478 = state_28406__$1;
(statearr_28432_28478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var inst_28383 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28433_28479 = state_28406__$1;
(statearr_28433_28479[(2)] = inst_28383);

(statearr_28433_28479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (5))){
var inst_28344 = cljs.core.deref.call(null,mults);
var inst_28345 = cljs.core.vals.call(null,inst_28344);
var inst_28346 = cljs.core.seq.call(null,inst_28345);
var inst_28347 = inst_28346;
var inst_28348 = null;
var inst_28349 = (0);
var inst_28350 = (0);
var state_28406__$1 = (function (){var statearr_28434 = state_28406;
(statearr_28434[(12)] = inst_28350);

(statearr_28434[(14)] = inst_28347);

(statearr_28434[(15)] = inst_28348);

(statearr_28434[(16)] = inst_28349);

return statearr_28434;
})();
var statearr_28435_28480 = state_28406__$1;
(statearr_28435_28480[(2)] = null);

(statearr_28435_28480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (14))){
var state_28406__$1 = state_28406;
var statearr_28439_28481 = state_28406__$1;
(statearr_28439_28481[(2)] = null);

(statearr_28439_28481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (16))){
var inst_28361 = (state_28406[(10)]);
var inst_28365 = cljs.core.chunk_first.call(null,inst_28361);
var inst_28366 = cljs.core.chunk_rest.call(null,inst_28361);
var inst_28367 = cljs.core.count.call(null,inst_28365);
var inst_28347 = inst_28366;
var inst_28348 = inst_28365;
var inst_28349 = inst_28367;
var inst_28350 = (0);
var state_28406__$1 = (function (){var statearr_28440 = state_28406;
(statearr_28440[(12)] = inst_28350);

(statearr_28440[(14)] = inst_28347);

(statearr_28440[(15)] = inst_28348);

(statearr_28440[(16)] = inst_28349);

return statearr_28440;
})();
var statearr_28441_28482 = state_28406__$1;
(statearr_28441_28482[(2)] = null);

(statearr_28441_28482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (10))){
var inst_28350 = (state_28406[(12)]);
var inst_28347 = (state_28406[(14)]);
var inst_28348 = (state_28406[(15)]);
var inst_28349 = (state_28406[(16)]);
var inst_28355 = cljs.core._nth.call(null,inst_28348,inst_28350);
var inst_28356 = cljs.core.async.muxch_STAR_.call(null,inst_28355);
var inst_28357 = cljs.core.async.close_BANG_.call(null,inst_28356);
var inst_28358 = (inst_28350 + (1));
var tmp28436 = inst_28347;
var tmp28437 = inst_28348;
var tmp28438 = inst_28349;
var inst_28347__$1 = tmp28436;
var inst_28348__$1 = tmp28437;
var inst_28349__$1 = tmp28438;
var inst_28350__$1 = inst_28358;
var state_28406__$1 = (function (){var statearr_28442 = state_28406;
(statearr_28442[(12)] = inst_28350__$1);

(statearr_28442[(14)] = inst_28347__$1);

(statearr_28442[(15)] = inst_28348__$1);

(statearr_28442[(17)] = inst_28357);

(statearr_28442[(16)] = inst_28349__$1);

return statearr_28442;
})();
var statearr_28443_28483 = state_28406__$1;
(statearr_28443_28483[(2)] = null);

(statearr_28443_28483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (18))){
var inst_28376 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28444_28484 = state_28406__$1;
(statearr_28444_28484[(2)] = inst_28376);

(statearr_28444_28484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28350 = (state_28406[(12)]);
var inst_28349 = (state_28406[(16)]);
var inst_28352 = (inst_28350 < inst_28349);
var inst_28353 = inst_28352;
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28353)){
var statearr_28445_28485 = state_28406__$1;
(statearr_28445_28485[(1)] = (10));

} else {
var statearr_28446_28486 = state_28406__$1;
(statearr_28446_28486[(1)] = (11));

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
});})(c__21976__auto___28458,mults,ensure_mult,p))
;
return ((function (switch__21911__auto__,c__21976__auto___28458,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_28450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28450[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_28450[(1)] = (1));

return statearr_28450;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_28406){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e28451){if((e28451 instanceof Object)){
var ex__21915__auto__ = e28451;
var statearr_28452_28487 = state_28406;
(statearr_28452_28487[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28488 = state_28406;
state_28406 = G__28488;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___28458,mults,ensure_mult,p))
})();
var state__21978__auto__ = (function (){var statearr_28453 = f__21977__auto__.call(null);
(statearr_28453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___28458);

return statearr_28453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___28458,mults,ensure_mult,p))
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
var args28489 = [];
var len__19567__auto___28492 = arguments.length;
var i__19568__auto___28493 = (0);
while(true){
if((i__19568__auto___28493 < len__19567__auto___28492)){
args28489.push((arguments[i__19568__auto___28493]));

var G__28494 = (i__19568__auto___28493 + (1));
i__19568__auto___28493 = G__28494;
continue;
} else {
}
break;
}

var G__28491 = args28489.length;
switch (G__28491) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28489.length)].join('')));

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
var args28496 = [];
var len__19567__auto___28499 = arguments.length;
var i__19568__auto___28500 = (0);
while(true){
if((i__19568__auto___28500 < len__19567__auto___28499)){
args28496.push((arguments[i__19568__auto___28500]));

var G__28501 = (i__19568__auto___28500 + (1));
i__19568__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28498 = args28496.length;
switch (G__28498) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28496.length)].join('')));

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
var args28503 = [];
var len__19567__auto___28574 = arguments.length;
var i__19568__auto___28575 = (0);
while(true){
if((i__19568__auto___28575 < len__19567__auto___28574)){
args28503.push((arguments[i__19568__auto___28575]));

var G__28576 = (i__19568__auto___28575 + (1));
i__19568__auto___28575 = G__28576;
continue;
} else {
}
break;
}

var G__28505 = args28503.length;
switch (G__28505) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28503.length)].join('')));

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
var c__21976__auto___28578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___28578,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___28578,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28544){
var state_val_28545 = (state_28544[(1)]);
if((state_val_28545 === (7))){
var state_28544__$1 = state_28544;
var statearr_28546_28579 = state_28544__$1;
(statearr_28546_28579[(2)] = null);

(statearr_28546_28579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (1))){
var state_28544__$1 = state_28544;
var statearr_28547_28580 = state_28544__$1;
(statearr_28547_28580[(2)] = null);

(statearr_28547_28580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (4))){
var inst_28508 = (state_28544[(7)]);
var inst_28510 = (inst_28508 < cnt);
var state_28544__$1 = state_28544;
if(cljs.core.truth_(inst_28510)){
var statearr_28548_28581 = state_28544__$1;
(statearr_28548_28581[(1)] = (6));

} else {
var statearr_28549_28582 = state_28544__$1;
(statearr_28549_28582[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (15))){
var inst_28540 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28550_28583 = state_28544__$1;
(statearr_28550_28583[(2)] = inst_28540);

(statearr_28550_28583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (13))){
var inst_28533 = cljs.core.async.close_BANG_.call(null,out);
var state_28544__$1 = state_28544;
var statearr_28551_28584 = state_28544__$1;
(statearr_28551_28584[(2)] = inst_28533);

(statearr_28551_28584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (6))){
var state_28544__$1 = state_28544;
var statearr_28552_28585 = state_28544__$1;
(statearr_28552_28585[(2)] = null);

(statearr_28552_28585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (3))){
var inst_28542 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28544__$1,inst_28542);
} else {
if((state_val_28545 === (12))){
var inst_28530 = (state_28544[(8)]);
var inst_28530__$1 = (state_28544[(2)]);
var inst_28531 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28530__$1);
var state_28544__$1 = (function (){var statearr_28553 = state_28544;
(statearr_28553[(8)] = inst_28530__$1);

return statearr_28553;
})();
if(cljs.core.truth_(inst_28531)){
var statearr_28554_28586 = state_28544__$1;
(statearr_28554_28586[(1)] = (13));

} else {
var statearr_28555_28587 = state_28544__$1;
(statearr_28555_28587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (2))){
var inst_28507 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28508 = (0);
var state_28544__$1 = (function (){var statearr_28556 = state_28544;
(statearr_28556[(9)] = inst_28507);

(statearr_28556[(7)] = inst_28508);

return statearr_28556;
})();
var statearr_28557_28588 = state_28544__$1;
(statearr_28557_28588[(2)] = null);

(statearr_28557_28588[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (11))){
var inst_28508 = (state_28544[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28544,(10),Object,null,(9));
var inst_28517 = chs__$1.call(null,inst_28508);
var inst_28518 = done.call(null,inst_28508);
var inst_28519 = cljs.core.async.take_BANG_.call(null,inst_28517,inst_28518);
var state_28544__$1 = state_28544;
var statearr_28558_28589 = state_28544__$1;
(statearr_28558_28589[(2)] = inst_28519);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (9))){
var inst_28508 = (state_28544[(7)]);
var inst_28521 = (state_28544[(2)]);
var inst_28522 = (inst_28508 + (1));
var inst_28508__$1 = inst_28522;
var state_28544__$1 = (function (){var statearr_28559 = state_28544;
(statearr_28559[(10)] = inst_28521);

(statearr_28559[(7)] = inst_28508__$1);

return statearr_28559;
})();
var statearr_28560_28590 = state_28544__$1;
(statearr_28560_28590[(2)] = null);

(statearr_28560_28590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (5))){
var inst_28528 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28561 = state_28544;
(statearr_28561[(11)] = inst_28528);

return statearr_28561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(12),dchan);
} else {
if((state_val_28545 === (14))){
var inst_28530 = (state_28544[(8)]);
var inst_28535 = cljs.core.apply.call(null,f,inst_28530);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28544__$1,(16),out,inst_28535);
} else {
if((state_val_28545 === (16))){
var inst_28537 = (state_28544[(2)]);
var state_28544__$1 = (function (){var statearr_28562 = state_28544;
(statearr_28562[(12)] = inst_28537);

return statearr_28562;
})();
var statearr_28563_28591 = state_28544__$1;
(statearr_28563_28591[(2)] = null);

(statearr_28563_28591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (10))){
var inst_28512 = (state_28544[(2)]);
var inst_28513 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28544__$1 = (function (){var statearr_28564 = state_28544;
(statearr_28564[(13)] = inst_28512);

return statearr_28564;
})();
var statearr_28565_28592 = state_28544__$1;
(statearr_28565_28592[(2)] = inst_28513);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (8))){
var inst_28526 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28566_28593 = state_28544__$1;
(statearr_28566_28593[(2)] = inst_28526);

(statearr_28566_28593[(1)] = (5));


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
});})(c__21976__auto___28578,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21911__auto__,c__21976__auto___28578,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_28570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28570[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_28570[(1)] = (1));

return statearr_28570;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_28544){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e28571){if((e28571 instanceof Object)){
var ex__21915__auto__ = e28571;
var statearr_28572_28594 = state_28544;
(statearr_28572_28594[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28595 = state_28544;
state_28544 = G__28595;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_28544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_28544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___28578,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21978__auto__ = (function (){var statearr_28573 = f__21977__auto__.call(null);
(statearr_28573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___28578);

return statearr_28573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___28578,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28597 = [];
var len__19567__auto___28653 = arguments.length;
var i__19568__auto___28654 = (0);
while(true){
if((i__19568__auto___28654 < len__19567__auto___28653)){
args28597.push((arguments[i__19568__auto___28654]));

var G__28655 = (i__19568__auto___28654 + (1));
i__19568__auto___28654 = G__28655;
continue;
} else {
}
break;
}

var G__28599 = args28597.length;
switch (G__28599) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28597.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21976__auto___28657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___28657,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___28657,out){
return (function (state_28629){
var state_val_28630 = (state_28629[(1)]);
if((state_val_28630 === (7))){
var inst_28608 = (state_28629[(7)]);
var inst_28609 = (state_28629[(8)]);
var inst_28608__$1 = (state_28629[(2)]);
var inst_28609__$1 = cljs.core.nth.call(null,inst_28608__$1,(0),null);
var inst_28610 = cljs.core.nth.call(null,inst_28608__$1,(1),null);
var inst_28611 = (inst_28609__$1 == null);
var state_28629__$1 = (function (){var statearr_28631 = state_28629;
(statearr_28631[(7)] = inst_28608__$1);

(statearr_28631[(8)] = inst_28609__$1);

(statearr_28631[(9)] = inst_28610);

return statearr_28631;
})();
if(cljs.core.truth_(inst_28611)){
var statearr_28632_28658 = state_28629__$1;
(statearr_28632_28658[(1)] = (8));

} else {
var statearr_28633_28659 = state_28629__$1;
(statearr_28633_28659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (1))){
var inst_28600 = cljs.core.vec.call(null,chs);
var inst_28601 = inst_28600;
var state_28629__$1 = (function (){var statearr_28634 = state_28629;
(statearr_28634[(10)] = inst_28601);

return statearr_28634;
})();
var statearr_28635_28660 = state_28629__$1;
(statearr_28635_28660[(2)] = null);

(statearr_28635_28660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (4))){
var inst_28601 = (state_28629[(10)]);
var state_28629__$1 = state_28629;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28629__$1,(7),inst_28601);
} else {
if((state_val_28630 === (6))){
var inst_28625 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28636_28661 = state_28629__$1;
(statearr_28636_28661[(2)] = inst_28625);

(statearr_28636_28661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (3))){
var inst_28627 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28629__$1,inst_28627);
} else {
if((state_val_28630 === (2))){
var inst_28601 = (state_28629[(10)]);
var inst_28603 = cljs.core.count.call(null,inst_28601);
var inst_28604 = (inst_28603 > (0));
var state_28629__$1 = state_28629;
if(cljs.core.truth_(inst_28604)){
var statearr_28638_28662 = state_28629__$1;
(statearr_28638_28662[(1)] = (4));

} else {
var statearr_28639_28663 = state_28629__$1;
(statearr_28639_28663[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (11))){
var inst_28601 = (state_28629[(10)]);
var inst_28618 = (state_28629[(2)]);
var tmp28637 = inst_28601;
var inst_28601__$1 = tmp28637;
var state_28629__$1 = (function (){var statearr_28640 = state_28629;
(statearr_28640[(10)] = inst_28601__$1);

(statearr_28640[(11)] = inst_28618);

return statearr_28640;
})();
var statearr_28641_28664 = state_28629__$1;
(statearr_28641_28664[(2)] = null);

(statearr_28641_28664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (9))){
var inst_28609 = (state_28629[(8)]);
var state_28629__$1 = state_28629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28629__$1,(11),out,inst_28609);
} else {
if((state_val_28630 === (5))){
var inst_28623 = cljs.core.async.close_BANG_.call(null,out);
var state_28629__$1 = state_28629;
var statearr_28642_28665 = state_28629__$1;
(statearr_28642_28665[(2)] = inst_28623);

(statearr_28642_28665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (10))){
var inst_28621 = (state_28629[(2)]);
var state_28629__$1 = state_28629;
var statearr_28643_28666 = state_28629__$1;
(statearr_28643_28666[(2)] = inst_28621);

(statearr_28643_28666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28630 === (8))){
var inst_28608 = (state_28629[(7)]);
var inst_28609 = (state_28629[(8)]);
var inst_28610 = (state_28629[(9)]);
var inst_28601 = (state_28629[(10)]);
var inst_28613 = (function (){var cs = inst_28601;
var vec__28606 = inst_28608;
var v = inst_28609;
var c = inst_28610;
return ((function (cs,vec__28606,v,c,inst_28608,inst_28609,inst_28610,inst_28601,state_val_28630,c__21976__auto___28657,out){
return (function (p1__28596_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28596_SHARP_);
});
;})(cs,vec__28606,v,c,inst_28608,inst_28609,inst_28610,inst_28601,state_val_28630,c__21976__auto___28657,out))
})();
var inst_28614 = cljs.core.filterv.call(null,inst_28613,inst_28601);
var inst_28601__$1 = inst_28614;
var state_28629__$1 = (function (){var statearr_28644 = state_28629;
(statearr_28644[(10)] = inst_28601__$1);

return statearr_28644;
})();
var statearr_28645_28667 = state_28629__$1;
(statearr_28645_28667[(2)] = null);

(statearr_28645_28667[(1)] = (2));


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
});})(c__21976__auto___28657,out))
;
return ((function (switch__21911__auto__,c__21976__auto___28657,out){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_28649 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28649[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_28649[(1)] = (1));

return statearr_28649;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_28629){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e28650){if((e28650 instanceof Object)){
var ex__21915__auto__ = e28650;
var statearr_28651_28668 = state_28629;
(statearr_28651_28668[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28669 = state_28629;
state_28629 = G__28669;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_28629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_28629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___28657,out))
})();
var state__21978__auto__ = (function (){var statearr_28652 = f__21977__auto__.call(null);
(statearr_28652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___28657);

return statearr_28652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___28657,out))
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
var args28670 = [];
var len__19567__auto___28719 = arguments.length;
var i__19568__auto___28720 = (0);
while(true){
if((i__19568__auto___28720 < len__19567__auto___28719)){
args28670.push((arguments[i__19568__auto___28720]));

var G__28721 = (i__19568__auto___28720 + (1));
i__19568__auto___28720 = G__28721;
continue;
} else {
}
break;
}

var G__28672 = args28670.length;
switch (G__28672) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28670.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21976__auto___28723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___28723,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___28723,out){
return (function (state_28696){
var state_val_28697 = (state_28696[(1)]);
if((state_val_28697 === (7))){
var inst_28678 = (state_28696[(7)]);
var inst_28678__$1 = (state_28696[(2)]);
var inst_28679 = (inst_28678__$1 == null);
var inst_28680 = cljs.core.not.call(null,inst_28679);
var state_28696__$1 = (function (){var statearr_28698 = state_28696;
(statearr_28698[(7)] = inst_28678__$1);

return statearr_28698;
})();
if(inst_28680){
var statearr_28699_28724 = state_28696__$1;
(statearr_28699_28724[(1)] = (8));

} else {
var statearr_28700_28725 = state_28696__$1;
(statearr_28700_28725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (1))){
var inst_28673 = (0);
var state_28696__$1 = (function (){var statearr_28701 = state_28696;
(statearr_28701[(8)] = inst_28673);

return statearr_28701;
})();
var statearr_28702_28726 = state_28696__$1;
(statearr_28702_28726[(2)] = null);

(statearr_28702_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (4))){
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28696__$1,(7),ch);
} else {
if((state_val_28697 === (6))){
var inst_28691 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28703_28727 = state_28696__$1;
(statearr_28703_28727[(2)] = inst_28691);

(statearr_28703_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (3))){
var inst_28693 = (state_28696[(2)]);
var inst_28694 = cljs.core.async.close_BANG_.call(null,out);
var state_28696__$1 = (function (){var statearr_28704 = state_28696;
(statearr_28704[(9)] = inst_28693);

return statearr_28704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28696__$1,inst_28694);
} else {
if((state_val_28697 === (2))){
var inst_28673 = (state_28696[(8)]);
var inst_28675 = (inst_28673 < n);
var state_28696__$1 = state_28696;
if(cljs.core.truth_(inst_28675)){
var statearr_28705_28728 = state_28696__$1;
(statearr_28705_28728[(1)] = (4));

} else {
var statearr_28706_28729 = state_28696__$1;
(statearr_28706_28729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (11))){
var inst_28673 = (state_28696[(8)]);
var inst_28683 = (state_28696[(2)]);
var inst_28684 = (inst_28673 + (1));
var inst_28673__$1 = inst_28684;
var state_28696__$1 = (function (){var statearr_28707 = state_28696;
(statearr_28707[(8)] = inst_28673__$1);

(statearr_28707[(10)] = inst_28683);

return statearr_28707;
})();
var statearr_28708_28730 = state_28696__$1;
(statearr_28708_28730[(2)] = null);

(statearr_28708_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (9))){
var state_28696__$1 = state_28696;
var statearr_28709_28731 = state_28696__$1;
(statearr_28709_28731[(2)] = null);

(statearr_28709_28731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (5))){
var state_28696__$1 = state_28696;
var statearr_28710_28732 = state_28696__$1;
(statearr_28710_28732[(2)] = null);

(statearr_28710_28732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (10))){
var inst_28688 = (state_28696[(2)]);
var state_28696__$1 = state_28696;
var statearr_28711_28733 = state_28696__$1;
(statearr_28711_28733[(2)] = inst_28688);

(statearr_28711_28733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28697 === (8))){
var inst_28678 = (state_28696[(7)]);
var state_28696__$1 = state_28696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28696__$1,(11),out,inst_28678);
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
});})(c__21976__auto___28723,out))
;
return ((function (switch__21911__auto__,c__21976__auto___28723,out){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_28715 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28715[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_28715[(1)] = (1));

return statearr_28715;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_28696){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e28716){if((e28716 instanceof Object)){
var ex__21915__auto__ = e28716;
var statearr_28717_28734 = state_28696;
(statearr_28717_28734[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28735 = state_28696;
state_28696 = G__28735;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_28696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_28696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___28723,out))
})();
var state__21978__auto__ = (function (){var statearr_28718 = f__21977__auto__.call(null);
(statearr_28718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___28723);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___28723,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28743 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28743 = (function (map_LT_,f,ch,meta28744){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28744 = meta28744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28745,meta28744__$1){
var self__ = this;
var _28745__$1 = this;
return (new cljs.core.async.t28743(self__.map_LT_,self__.f,self__.ch,meta28744__$1));
});

cljs.core.async.t28743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28745){
var self__ = this;
var _28745__$1 = this;
return self__.meta28744;
});

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28746 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28746 = (function (map_LT_,f,ch,meta28744,_,fn1,meta28747){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28744 = meta28744;
this._ = _;
this.fn1 = fn1;
this.meta28747 = meta28747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28748,meta28747__$1){
var self__ = this;
var _28748__$1 = this;
return (new cljs.core.async.t28746(self__.map_LT_,self__.f,self__.ch,self__.meta28744,self__._,self__.fn1,meta28747__$1));
});})(___$1))
;

cljs.core.async.t28746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28748){
var self__ = this;
var _28748__$1 = this;
return self__.meta28747;
});})(___$1))
;

cljs.core.async.t28746.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28736_SHARP_){
return f1.call(null,(((p1__28736_SHARP_ == null))?null:self__.f.call(null,p1__28736_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28746.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28744","meta28744",-1219143562,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t28743","cljs.core.async/t28743",-1039530533,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28747","meta28747",812716547,null)], null);
});})(___$1))
;

cljs.core.async.t28746.cljs$lang$type = true;

cljs.core.async.t28746.cljs$lang$ctorStr = "cljs.core.async/t28746";

cljs.core.async.t28746.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28746");
});})(___$1))
;

cljs.core.async.__GT_t28746 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28746(map_LT___$1,f__$1,ch__$1,meta28744__$1,___$2,fn1__$1,meta28747){
return (new cljs.core.async.t28746(map_LT___$1,f__$1,ch__$1,meta28744__$1,___$2,fn1__$1,meta28747));
});})(___$1))
;

}

return (new cljs.core.async.t28746(self__.map_LT_,self__.f,self__.ch,self__.meta28744,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28744","meta28744",-1219143562,null)], null);
});

cljs.core.async.t28743.cljs$lang$type = true;

cljs.core.async.t28743.cljs$lang$ctorStr = "cljs.core.async/t28743";

cljs.core.async.t28743.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28743");
});

cljs.core.async.__GT_t28743 = (function cljs$core$async$map_LT__$___GT_t28743(map_LT___$1,f__$1,ch__$1,meta28744){
return (new cljs.core.async.t28743(map_LT___$1,f__$1,ch__$1,meta28744));
});

}

return (new cljs.core.async.t28743(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28752 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28752 = (function (map_GT_,f,ch,meta28753){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28753 = meta28753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28754,meta28753__$1){
var self__ = this;
var _28754__$1 = this;
return (new cljs.core.async.t28752(self__.map_GT_,self__.f,self__.ch,meta28753__$1));
});

cljs.core.async.t28752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28754){
var self__ = this;
var _28754__$1 = this;
return self__.meta28753;
});

cljs.core.async.t28752.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28752.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28752.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28753","meta28753",389061009,null)], null);
});

cljs.core.async.t28752.cljs$lang$type = true;

cljs.core.async.t28752.cljs$lang$ctorStr = "cljs.core.async/t28752";

cljs.core.async.t28752.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28752");
});

cljs.core.async.__GT_t28752 = (function cljs$core$async$map_GT__$___GT_t28752(map_GT___$1,f__$1,ch__$1,meta28753){
return (new cljs.core.async.t28752(map_GT___$1,f__$1,ch__$1,meta28753));
});

}

return (new cljs.core.async.t28752(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28758 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28758 = (function (filter_GT_,p,ch,meta28759){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28759 = meta28759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28760,meta28759__$1){
var self__ = this;
var _28760__$1 = this;
return (new cljs.core.async.t28758(self__.filter_GT_,self__.p,self__.ch,meta28759__$1));
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
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28759","meta28759",-685215842,null)], null);
});

cljs.core.async.t28758.cljs$lang$type = true;

cljs.core.async.t28758.cljs$lang$ctorStr = "cljs.core.async/t28758";

cljs.core.async.t28758.cljs$lang$ctorPrWriter = (function (this__19107__auto__,writer__19108__auto__,opt__19109__auto__){
return cljs.core._write.call(null,writer__19108__auto__,"cljs.core.async/t28758");
});

cljs.core.async.__GT_t28758 = (function cljs$core$async$filter_GT__$___GT_t28758(filter_GT___$1,p__$1,ch__$1,meta28759){
return (new cljs.core.async.t28758(filter_GT___$1,p__$1,ch__$1,meta28759));
});

}

return (new cljs.core.async.t28758(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28761 = [];
var len__19567__auto___28805 = arguments.length;
var i__19568__auto___28806 = (0);
while(true){
if((i__19568__auto___28806 < len__19567__auto___28805)){
args28761.push((arguments[i__19568__auto___28806]));

var G__28807 = (i__19568__auto___28806 + (1));
i__19568__auto___28806 = G__28807;
continue;
} else {
}
break;
}

var G__28763 = args28761.length;
switch (G__28763) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28761.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21976__auto___28809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___28809,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___28809,out){
return (function (state_28784){
var state_val_28785 = (state_28784[(1)]);
if((state_val_28785 === (7))){
var inst_28780 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28786_28810 = state_28784__$1;
(statearr_28786_28810[(2)] = inst_28780);

(statearr_28786_28810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (1))){
var state_28784__$1 = state_28784;
var statearr_28787_28811 = state_28784__$1;
(statearr_28787_28811[(2)] = null);

(statearr_28787_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (4))){
var inst_28766 = (state_28784[(7)]);
var inst_28766__$1 = (state_28784[(2)]);
var inst_28767 = (inst_28766__$1 == null);
var state_28784__$1 = (function (){var statearr_28788 = state_28784;
(statearr_28788[(7)] = inst_28766__$1);

return statearr_28788;
})();
if(cljs.core.truth_(inst_28767)){
var statearr_28789_28812 = state_28784__$1;
(statearr_28789_28812[(1)] = (5));

} else {
var statearr_28790_28813 = state_28784__$1;
(statearr_28790_28813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (6))){
var inst_28766 = (state_28784[(7)]);
var inst_28771 = p.call(null,inst_28766);
var state_28784__$1 = state_28784;
if(cljs.core.truth_(inst_28771)){
var statearr_28791_28814 = state_28784__$1;
(statearr_28791_28814[(1)] = (8));

} else {
var statearr_28792_28815 = state_28784__$1;
(statearr_28792_28815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (3))){
var inst_28782 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28784__$1,inst_28782);
} else {
if((state_val_28785 === (2))){
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28784__$1,(4),ch);
} else {
if((state_val_28785 === (11))){
var inst_28774 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
var statearr_28793_28816 = state_28784__$1;
(statearr_28793_28816[(2)] = inst_28774);

(statearr_28793_28816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (9))){
var state_28784__$1 = state_28784;
var statearr_28794_28817 = state_28784__$1;
(statearr_28794_28817[(2)] = null);

(statearr_28794_28817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (5))){
var inst_28769 = cljs.core.async.close_BANG_.call(null,out);
var state_28784__$1 = state_28784;
var statearr_28795_28818 = state_28784__$1;
(statearr_28795_28818[(2)] = inst_28769);

(statearr_28795_28818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (10))){
var inst_28777 = (state_28784[(2)]);
var state_28784__$1 = (function (){var statearr_28796 = state_28784;
(statearr_28796[(8)] = inst_28777);

return statearr_28796;
})();
var statearr_28797_28819 = state_28784__$1;
(statearr_28797_28819[(2)] = null);

(statearr_28797_28819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (8))){
var inst_28766 = (state_28784[(7)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28784__$1,(11),out,inst_28766);
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
});})(c__21976__auto___28809,out))
;
return ((function (switch__21911__auto__,c__21976__auto___28809,out){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_28801 = [null,null,null,null,null,null,null,null,null];
(statearr_28801[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_28801[(1)] = (1));

return statearr_28801;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_28784){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e28802){if((e28802 instanceof Object)){
var ex__21915__auto__ = e28802;
var statearr_28803_28820 = state_28784;
(statearr_28803_28820[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28821 = state_28784;
state_28784 = G__28821;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_28784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_28784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___28809,out))
})();
var state__21978__auto__ = (function (){var statearr_28804 = f__21977__auto__.call(null);
(statearr_28804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___28809);

return statearr_28804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___28809,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args28822 = [];
var len__19567__auto___28825 = arguments.length;
var i__19568__auto___28826 = (0);
while(true){
if((i__19568__auto___28826 < len__19567__auto___28825)){
args28822.push((arguments[i__19568__auto___28826]));

var G__28827 = (i__19568__auto___28826 + (1));
i__19568__auto___28826 = G__28827;
continue;
} else {
}
break;
}

var G__28824 = args28822.length;
switch (G__28824) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28822.length)].join('')));

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
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_28994){
var state_val_28995 = (state_28994[(1)]);
if((state_val_28995 === (7))){
var inst_28990 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_28996_29037 = state_28994__$1;
(statearr_28996_29037[(2)] = inst_28990);

(statearr_28996_29037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (20))){
var inst_28960 = (state_28994[(7)]);
var inst_28971 = (state_28994[(2)]);
var inst_28972 = cljs.core.next.call(null,inst_28960);
var inst_28946 = inst_28972;
var inst_28947 = null;
var inst_28948 = (0);
var inst_28949 = (0);
var state_28994__$1 = (function (){var statearr_28997 = state_28994;
(statearr_28997[(8)] = inst_28949);

(statearr_28997[(9)] = inst_28947);

(statearr_28997[(10)] = inst_28948);

(statearr_28997[(11)] = inst_28946);

(statearr_28997[(12)] = inst_28971);

return statearr_28997;
})();
var statearr_28998_29038 = state_28994__$1;
(statearr_28998_29038[(2)] = null);

(statearr_28998_29038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (1))){
var state_28994__$1 = state_28994;
var statearr_28999_29039 = state_28994__$1;
(statearr_28999_29039[(2)] = null);

(statearr_28999_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (4))){
var inst_28935 = (state_28994[(13)]);
var inst_28935__$1 = (state_28994[(2)]);
var inst_28936 = (inst_28935__$1 == null);
var state_28994__$1 = (function (){var statearr_29000 = state_28994;
(statearr_29000[(13)] = inst_28935__$1);

return statearr_29000;
})();
if(cljs.core.truth_(inst_28936)){
var statearr_29001_29040 = state_28994__$1;
(statearr_29001_29040[(1)] = (5));

} else {
var statearr_29002_29041 = state_28994__$1;
(statearr_29002_29041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (15))){
var state_28994__$1 = state_28994;
var statearr_29006_29042 = state_28994__$1;
(statearr_29006_29042[(2)] = null);

(statearr_29006_29042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (21))){
var state_28994__$1 = state_28994;
var statearr_29007_29043 = state_28994__$1;
(statearr_29007_29043[(2)] = null);

(statearr_29007_29043[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (13))){
var inst_28949 = (state_28994[(8)]);
var inst_28947 = (state_28994[(9)]);
var inst_28948 = (state_28994[(10)]);
var inst_28946 = (state_28994[(11)]);
var inst_28956 = (state_28994[(2)]);
var inst_28957 = (inst_28949 + (1));
var tmp29003 = inst_28947;
var tmp29004 = inst_28948;
var tmp29005 = inst_28946;
var inst_28946__$1 = tmp29005;
var inst_28947__$1 = tmp29003;
var inst_28948__$1 = tmp29004;
var inst_28949__$1 = inst_28957;
var state_28994__$1 = (function (){var statearr_29008 = state_28994;
(statearr_29008[(8)] = inst_28949__$1);

(statearr_29008[(9)] = inst_28947__$1);

(statearr_29008[(10)] = inst_28948__$1);

(statearr_29008[(11)] = inst_28946__$1);

(statearr_29008[(14)] = inst_28956);

return statearr_29008;
})();
var statearr_29009_29044 = state_28994__$1;
(statearr_29009_29044[(2)] = null);

(statearr_29009_29044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (22))){
var state_28994__$1 = state_28994;
var statearr_29010_29045 = state_28994__$1;
(statearr_29010_29045[(2)] = null);

(statearr_29010_29045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (6))){
var inst_28935 = (state_28994[(13)]);
var inst_28944 = f.call(null,inst_28935);
var inst_28945 = cljs.core.seq.call(null,inst_28944);
var inst_28946 = inst_28945;
var inst_28947 = null;
var inst_28948 = (0);
var inst_28949 = (0);
var state_28994__$1 = (function (){var statearr_29011 = state_28994;
(statearr_29011[(8)] = inst_28949);

(statearr_29011[(9)] = inst_28947);

(statearr_29011[(10)] = inst_28948);

(statearr_29011[(11)] = inst_28946);

return statearr_29011;
})();
var statearr_29012_29046 = state_28994__$1;
(statearr_29012_29046[(2)] = null);

(statearr_29012_29046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (17))){
var inst_28960 = (state_28994[(7)]);
var inst_28964 = cljs.core.chunk_first.call(null,inst_28960);
var inst_28965 = cljs.core.chunk_rest.call(null,inst_28960);
var inst_28966 = cljs.core.count.call(null,inst_28964);
var inst_28946 = inst_28965;
var inst_28947 = inst_28964;
var inst_28948 = inst_28966;
var inst_28949 = (0);
var state_28994__$1 = (function (){var statearr_29013 = state_28994;
(statearr_29013[(8)] = inst_28949);

(statearr_29013[(9)] = inst_28947);

(statearr_29013[(10)] = inst_28948);

(statearr_29013[(11)] = inst_28946);

return statearr_29013;
})();
var statearr_29014_29047 = state_28994__$1;
(statearr_29014_29047[(2)] = null);

(statearr_29014_29047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (3))){
var inst_28992 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28994__$1,inst_28992);
} else {
if((state_val_28995 === (12))){
var inst_28980 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29015_29048 = state_28994__$1;
(statearr_29015_29048[(2)] = inst_28980);

(statearr_29015_29048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (2))){
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28994__$1,(4),in$);
} else {
if((state_val_28995 === (23))){
var inst_28988 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29016_29049 = state_28994__$1;
(statearr_29016_29049[(2)] = inst_28988);

(statearr_29016_29049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (19))){
var inst_28975 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29017_29050 = state_28994__$1;
(statearr_29017_29050[(2)] = inst_28975);

(statearr_29017_29050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (11))){
var inst_28960 = (state_28994[(7)]);
var inst_28946 = (state_28994[(11)]);
var inst_28960__$1 = cljs.core.seq.call(null,inst_28946);
var state_28994__$1 = (function (){var statearr_29018 = state_28994;
(statearr_29018[(7)] = inst_28960__$1);

return statearr_29018;
})();
if(inst_28960__$1){
var statearr_29019_29051 = state_28994__$1;
(statearr_29019_29051[(1)] = (14));

} else {
var statearr_29020_29052 = state_28994__$1;
(statearr_29020_29052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (9))){
var inst_28982 = (state_28994[(2)]);
var inst_28983 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28994__$1 = (function (){var statearr_29021 = state_28994;
(statearr_29021[(15)] = inst_28982);

return statearr_29021;
})();
if(cljs.core.truth_(inst_28983)){
var statearr_29022_29053 = state_28994__$1;
(statearr_29022_29053[(1)] = (21));

} else {
var statearr_29023_29054 = state_28994__$1;
(statearr_29023_29054[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (5))){
var inst_28938 = cljs.core.async.close_BANG_.call(null,out);
var state_28994__$1 = state_28994;
var statearr_29024_29055 = state_28994__$1;
(statearr_29024_29055[(2)] = inst_28938);

(statearr_29024_29055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (14))){
var inst_28960 = (state_28994[(7)]);
var inst_28962 = cljs.core.chunked_seq_QMARK_.call(null,inst_28960);
var state_28994__$1 = state_28994;
if(inst_28962){
var statearr_29025_29056 = state_28994__$1;
(statearr_29025_29056[(1)] = (17));

} else {
var statearr_29026_29057 = state_28994__$1;
(statearr_29026_29057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (16))){
var inst_28978 = (state_28994[(2)]);
var state_28994__$1 = state_28994;
var statearr_29027_29058 = state_28994__$1;
(statearr_29027_29058[(2)] = inst_28978);

(statearr_29027_29058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28995 === (10))){
var inst_28949 = (state_28994[(8)]);
var inst_28947 = (state_28994[(9)]);
var inst_28954 = cljs.core._nth.call(null,inst_28947,inst_28949);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(13),out,inst_28954);
} else {
if((state_val_28995 === (18))){
var inst_28960 = (state_28994[(7)]);
var inst_28969 = cljs.core.first.call(null,inst_28960);
var state_28994__$1 = state_28994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28994__$1,(20),out,inst_28969);
} else {
if((state_val_28995 === (8))){
var inst_28949 = (state_28994[(8)]);
var inst_28948 = (state_28994[(10)]);
var inst_28951 = (inst_28949 < inst_28948);
var inst_28952 = inst_28951;
var state_28994__$1 = state_28994;
if(cljs.core.truth_(inst_28952)){
var statearr_29028_29059 = state_28994__$1;
(statearr_29028_29059[(1)] = (10));

} else {
var statearr_29029_29060 = state_28994__$1;
(statearr_29029_29060[(1)] = (11));

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
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21912__auto____0 = (function (){
var statearr_29033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29033[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21912__auto__);

(statearr_29033[(1)] = (1));

return statearr_29033;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21912__auto____1 = (function (state_28994){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_28994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e29034){if((e29034 instanceof Object)){
var ex__21915__auto__ = e29034;
var statearr_29035_29061 = state_28994;
(statearr_29035_29061[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29062 = state_28994;
state_28994 = G__29062;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21912__auto__ = function(state_28994){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21912__auto____1.call(this,state_28994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_29036 = f__21977__auto__.call(null);
(statearr_29036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_29036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args29063 = [];
var len__19567__auto___29066 = arguments.length;
var i__19568__auto___29067 = (0);
while(true){
if((i__19568__auto___29067 < len__19567__auto___29066)){
args29063.push((arguments[i__19568__auto___29067]));

var G__29068 = (i__19568__auto___29067 + (1));
i__19568__auto___29067 = G__29068;
continue;
} else {
}
break;
}

var G__29065 = args29063.length;
switch (G__29065) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29063.length)].join('')));

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
var args29070 = [];
var len__19567__auto___29073 = arguments.length;
var i__19568__auto___29074 = (0);
while(true){
if((i__19568__auto___29074 < len__19567__auto___29073)){
args29070.push((arguments[i__19568__auto___29074]));

var G__29075 = (i__19568__auto___29074 + (1));
i__19568__auto___29074 = G__29075;
continue;
} else {
}
break;
}

var G__29072 = args29070.length;
switch (G__29072) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29070.length)].join('')));

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
var args29077 = [];
var len__19567__auto___29128 = arguments.length;
var i__19568__auto___29129 = (0);
while(true){
if((i__19568__auto___29129 < len__19567__auto___29128)){
args29077.push((arguments[i__19568__auto___29129]));

var G__29130 = (i__19568__auto___29129 + (1));
i__19568__auto___29129 = G__29130;
continue;
} else {
}
break;
}

var G__29079 = args29077.length;
switch (G__29079) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29077.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21976__auto___29132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___29132,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___29132,out){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (7))){
var inst_29098 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29105_29133 = state_29103__$1;
(statearr_29105_29133[(2)] = inst_29098);

(statearr_29105_29133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (1))){
var inst_29080 = null;
var state_29103__$1 = (function (){var statearr_29106 = state_29103;
(statearr_29106[(7)] = inst_29080);

return statearr_29106;
})();
var statearr_29107_29134 = state_29103__$1;
(statearr_29107_29134[(2)] = null);

(statearr_29107_29134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (4))){
var inst_29083 = (state_29103[(8)]);
var inst_29083__$1 = (state_29103[(2)]);
var inst_29084 = (inst_29083__$1 == null);
var inst_29085 = cljs.core.not.call(null,inst_29084);
var state_29103__$1 = (function (){var statearr_29108 = state_29103;
(statearr_29108[(8)] = inst_29083__$1);

return statearr_29108;
})();
if(inst_29085){
var statearr_29109_29135 = state_29103__$1;
(statearr_29109_29135[(1)] = (5));

} else {
var statearr_29110_29136 = state_29103__$1;
(statearr_29110_29136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var state_29103__$1 = state_29103;
var statearr_29111_29137 = state_29103__$1;
(statearr_29111_29137[(2)] = null);

(statearr_29111_29137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (3))){
var inst_29100 = (state_29103[(2)]);
var inst_29101 = cljs.core.async.close_BANG_.call(null,out);
var state_29103__$1 = (function (){var statearr_29112 = state_29103;
(statearr_29112[(9)] = inst_29100);

return statearr_29112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (2))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),ch);
} else {
if((state_val_29104 === (11))){
var inst_29083 = (state_29103[(8)]);
var inst_29092 = (state_29103[(2)]);
var inst_29080 = inst_29083;
var state_29103__$1 = (function (){var statearr_29113 = state_29103;
(statearr_29113[(7)] = inst_29080);

(statearr_29113[(10)] = inst_29092);

return statearr_29113;
})();
var statearr_29114_29138 = state_29103__$1;
(statearr_29114_29138[(2)] = null);

(statearr_29114_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (9))){
var inst_29083 = (state_29103[(8)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(11),out,inst_29083);
} else {
if((state_val_29104 === (5))){
var inst_29083 = (state_29103[(8)]);
var inst_29080 = (state_29103[(7)]);
var inst_29087 = cljs.core._EQ_.call(null,inst_29083,inst_29080);
var state_29103__$1 = state_29103;
if(inst_29087){
var statearr_29116_29139 = state_29103__$1;
(statearr_29116_29139[(1)] = (8));

} else {
var statearr_29117_29140 = state_29103__$1;
(statearr_29117_29140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (10))){
var inst_29095 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29118_29141 = state_29103__$1;
(statearr_29118_29141[(2)] = inst_29095);

(statearr_29118_29141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (8))){
var inst_29080 = (state_29103[(7)]);
var tmp29115 = inst_29080;
var inst_29080__$1 = tmp29115;
var state_29103__$1 = (function (){var statearr_29119 = state_29103;
(statearr_29119[(7)] = inst_29080__$1);

return statearr_29119;
})();
var statearr_29120_29142 = state_29103__$1;
(statearr_29120_29142[(2)] = null);

(statearr_29120_29142[(1)] = (2));


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
});})(c__21976__auto___29132,out))
;
return ((function (switch__21911__auto__,c__21976__auto___29132,out){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_29124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29124[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_29124[(1)] = (1));

return statearr_29124;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_29103){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e29125){if((e29125 instanceof Object)){
var ex__21915__auto__ = e29125;
var statearr_29126_29143 = state_29103;
(statearr_29126_29143[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29144 = state_29103;
state_29103 = G__29144;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___29132,out))
})();
var state__21978__auto__ = (function (){var statearr_29127 = f__21977__auto__.call(null);
(statearr_29127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___29132);

return statearr_29127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___29132,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args29145 = [];
var len__19567__auto___29215 = arguments.length;
var i__19568__auto___29216 = (0);
while(true){
if((i__19568__auto___29216 < len__19567__auto___29215)){
args29145.push((arguments[i__19568__auto___29216]));

var G__29217 = (i__19568__auto___29216 + (1));
i__19568__auto___29216 = G__29217;
continue;
} else {
}
break;
}

var G__29147 = args29145.length;
switch (G__29147) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29145.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21976__auto___29219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___29219,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___29219,out){
return (function (state_29185){
var state_val_29186 = (state_29185[(1)]);
if((state_val_29186 === (7))){
var inst_29181 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29187_29220 = state_29185__$1;
(statearr_29187_29220[(2)] = inst_29181);

(statearr_29187_29220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (1))){
var inst_29148 = (new Array(n));
var inst_29149 = inst_29148;
var inst_29150 = (0);
var state_29185__$1 = (function (){var statearr_29188 = state_29185;
(statearr_29188[(7)] = inst_29149);

(statearr_29188[(8)] = inst_29150);

return statearr_29188;
})();
var statearr_29189_29221 = state_29185__$1;
(statearr_29189_29221[(2)] = null);

(statearr_29189_29221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (4))){
var inst_29153 = (state_29185[(9)]);
var inst_29153__$1 = (state_29185[(2)]);
var inst_29154 = (inst_29153__$1 == null);
var inst_29155 = cljs.core.not.call(null,inst_29154);
var state_29185__$1 = (function (){var statearr_29190 = state_29185;
(statearr_29190[(9)] = inst_29153__$1);

return statearr_29190;
})();
if(inst_29155){
var statearr_29191_29222 = state_29185__$1;
(statearr_29191_29222[(1)] = (5));

} else {
var statearr_29192_29223 = state_29185__$1;
(statearr_29192_29223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (15))){
var inst_29175 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29193_29224 = state_29185__$1;
(statearr_29193_29224[(2)] = inst_29175);

(statearr_29193_29224[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (13))){
var state_29185__$1 = state_29185;
var statearr_29194_29225 = state_29185__$1;
(statearr_29194_29225[(2)] = null);

(statearr_29194_29225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (6))){
var inst_29150 = (state_29185[(8)]);
var inst_29171 = (inst_29150 > (0));
var state_29185__$1 = state_29185;
if(cljs.core.truth_(inst_29171)){
var statearr_29195_29226 = state_29185__$1;
(statearr_29195_29226[(1)] = (12));

} else {
var statearr_29196_29227 = state_29185__$1;
(statearr_29196_29227[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (3))){
var inst_29183 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29185__$1,inst_29183);
} else {
if((state_val_29186 === (12))){
var inst_29149 = (state_29185[(7)]);
var inst_29173 = cljs.core.vec.call(null,inst_29149);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29185__$1,(15),out,inst_29173);
} else {
if((state_val_29186 === (2))){
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29185__$1,(4),ch);
} else {
if((state_val_29186 === (11))){
var inst_29165 = (state_29185[(2)]);
var inst_29166 = (new Array(n));
var inst_29149 = inst_29166;
var inst_29150 = (0);
var state_29185__$1 = (function (){var statearr_29197 = state_29185;
(statearr_29197[(7)] = inst_29149);

(statearr_29197[(10)] = inst_29165);

(statearr_29197[(8)] = inst_29150);

return statearr_29197;
})();
var statearr_29198_29228 = state_29185__$1;
(statearr_29198_29228[(2)] = null);

(statearr_29198_29228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (9))){
var inst_29149 = (state_29185[(7)]);
var inst_29163 = cljs.core.vec.call(null,inst_29149);
var state_29185__$1 = state_29185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29185__$1,(11),out,inst_29163);
} else {
if((state_val_29186 === (5))){
var inst_29158 = (state_29185[(11)]);
var inst_29153 = (state_29185[(9)]);
var inst_29149 = (state_29185[(7)]);
var inst_29150 = (state_29185[(8)]);
var inst_29157 = (inst_29149[inst_29150] = inst_29153);
var inst_29158__$1 = (inst_29150 + (1));
var inst_29159 = (inst_29158__$1 < n);
var state_29185__$1 = (function (){var statearr_29199 = state_29185;
(statearr_29199[(11)] = inst_29158__$1);

(statearr_29199[(12)] = inst_29157);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29159)){
var statearr_29200_29229 = state_29185__$1;
(statearr_29200_29229[(1)] = (8));

} else {
var statearr_29201_29230 = state_29185__$1;
(statearr_29201_29230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (14))){
var inst_29178 = (state_29185[(2)]);
var inst_29179 = cljs.core.async.close_BANG_.call(null,out);
var state_29185__$1 = (function (){var statearr_29203 = state_29185;
(statearr_29203[(13)] = inst_29178);

return statearr_29203;
})();
var statearr_29204_29231 = state_29185__$1;
(statearr_29204_29231[(2)] = inst_29179);

(statearr_29204_29231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (10))){
var inst_29169 = (state_29185[(2)]);
var state_29185__$1 = state_29185;
var statearr_29205_29232 = state_29185__$1;
(statearr_29205_29232[(2)] = inst_29169);

(statearr_29205_29232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29186 === (8))){
var inst_29158 = (state_29185[(11)]);
var inst_29149 = (state_29185[(7)]);
var tmp29202 = inst_29149;
var inst_29149__$1 = tmp29202;
var inst_29150 = inst_29158;
var state_29185__$1 = (function (){var statearr_29206 = state_29185;
(statearr_29206[(7)] = inst_29149__$1);

(statearr_29206[(8)] = inst_29150);

return statearr_29206;
})();
var statearr_29207_29233 = state_29185__$1;
(statearr_29207_29233[(2)] = null);

(statearr_29207_29233[(1)] = (2));


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
});})(c__21976__auto___29219,out))
;
return ((function (switch__21911__auto__,c__21976__auto___29219,out){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_29211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29211[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_29211[(1)] = (1));

return statearr_29211;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_29185){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_29185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e29212){if((e29212 instanceof Object)){
var ex__21915__auto__ = e29212;
var statearr_29213_29234 = state_29185;
(statearr_29213_29234[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29235 = state_29185;
state_29185 = G__29235;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_29185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_29185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___29219,out))
})();
var state__21978__auto__ = (function (){var statearr_29214 = f__21977__auto__.call(null);
(statearr_29214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___29219);

return statearr_29214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___29219,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args29236 = [];
var len__19567__auto___29310 = arguments.length;
var i__19568__auto___29311 = (0);
while(true){
if((i__19568__auto___29311 < len__19567__auto___29310)){
args29236.push((arguments[i__19568__auto___29311]));

var G__29312 = (i__19568__auto___29311 + (1));
i__19568__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var G__29238 = args29236.length;
switch (G__29238) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29236.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21976__auto___29314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___29314,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___29314,out){
return (function (state_29280){
var state_val_29281 = (state_29280[(1)]);
if((state_val_29281 === (7))){
var inst_29276 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29282_29315 = state_29280__$1;
(statearr_29282_29315[(2)] = inst_29276);

(statearr_29282_29315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (1))){
var inst_29239 = [];
var inst_29240 = inst_29239;
var inst_29241 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29280__$1 = (function (){var statearr_29283 = state_29280;
(statearr_29283[(7)] = inst_29240);

(statearr_29283[(8)] = inst_29241);

return statearr_29283;
})();
var statearr_29284_29316 = state_29280__$1;
(statearr_29284_29316[(2)] = null);

(statearr_29284_29316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (4))){
var inst_29244 = (state_29280[(9)]);
var inst_29244__$1 = (state_29280[(2)]);
var inst_29245 = (inst_29244__$1 == null);
var inst_29246 = cljs.core.not.call(null,inst_29245);
var state_29280__$1 = (function (){var statearr_29285 = state_29280;
(statearr_29285[(9)] = inst_29244__$1);

return statearr_29285;
})();
if(inst_29246){
var statearr_29286_29317 = state_29280__$1;
(statearr_29286_29317[(1)] = (5));

} else {
var statearr_29287_29318 = state_29280__$1;
(statearr_29287_29318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (15))){
var inst_29270 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29288_29319 = state_29280__$1;
(statearr_29288_29319[(2)] = inst_29270);

(statearr_29288_29319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (13))){
var state_29280__$1 = state_29280;
var statearr_29289_29320 = state_29280__$1;
(statearr_29289_29320[(2)] = null);

(statearr_29289_29320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (6))){
var inst_29240 = (state_29280[(7)]);
var inst_29265 = inst_29240.length;
var inst_29266 = (inst_29265 > (0));
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29266)){
var statearr_29290_29321 = state_29280__$1;
(statearr_29290_29321[(1)] = (12));

} else {
var statearr_29291_29322 = state_29280__$1;
(statearr_29291_29322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (3))){
var inst_29278 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else {
if((state_val_29281 === (12))){
var inst_29240 = (state_29280[(7)]);
var inst_29268 = cljs.core.vec.call(null,inst_29240);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(15),out,inst_29268);
} else {
if((state_val_29281 === (2))){
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(4),ch);
} else {
if((state_val_29281 === (11))){
var inst_29244 = (state_29280[(9)]);
var inst_29248 = (state_29280[(10)]);
var inst_29258 = (state_29280[(2)]);
var inst_29259 = [];
var inst_29260 = inst_29259.push(inst_29244);
var inst_29240 = inst_29259;
var inst_29241 = inst_29248;
var state_29280__$1 = (function (){var statearr_29292 = state_29280;
(statearr_29292[(11)] = inst_29260);

(statearr_29292[(12)] = inst_29258);

(statearr_29292[(7)] = inst_29240);

(statearr_29292[(8)] = inst_29241);

return statearr_29292;
})();
var statearr_29293_29323 = state_29280__$1;
(statearr_29293_29323[(2)] = null);

(statearr_29293_29323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (9))){
var inst_29240 = (state_29280[(7)]);
var inst_29256 = cljs.core.vec.call(null,inst_29240);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29280__$1,(11),out,inst_29256);
} else {
if((state_val_29281 === (5))){
var inst_29244 = (state_29280[(9)]);
var inst_29248 = (state_29280[(10)]);
var inst_29241 = (state_29280[(8)]);
var inst_29248__$1 = f.call(null,inst_29244);
var inst_29249 = cljs.core._EQ_.call(null,inst_29248__$1,inst_29241);
var inst_29250 = cljs.core.keyword_identical_QMARK_.call(null,inst_29241,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29251 = (inst_29249) || (inst_29250);
var state_29280__$1 = (function (){var statearr_29294 = state_29280;
(statearr_29294[(10)] = inst_29248__$1);

return statearr_29294;
})();
if(cljs.core.truth_(inst_29251)){
var statearr_29295_29324 = state_29280__$1;
(statearr_29295_29324[(1)] = (8));

} else {
var statearr_29296_29325 = state_29280__$1;
(statearr_29296_29325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (14))){
var inst_29273 = (state_29280[(2)]);
var inst_29274 = cljs.core.async.close_BANG_.call(null,out);
var state_29280__$1 = (function (){var statearr_29298 = state_29280;
(statearr_29298[(13)] = inst_29273);

return statearr_29298;
})();
var statearr_29299_29326 = state_29280__$1;
(statearr_29299_29326[(2)] = inst_29274);

(statearr_29299_29326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (10))){
var inst_29263 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29300_29327 = state_29280__$1;
(statearr_29300_29327[(2)] = inst_29263);

(statearr_29300_29327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (8))){
var inst_29244 = (state_29280[(9)]);
var inst_29248 = (state_29280[(10)]);
var inst_29240 = (state_29280[(7)]);
var inst_29253 = inst_29240.push(inst_29244);
var tmp29297 = inst_29240;
var inst_29240__$1 = tmp29297;
var inst_29241 = inst_29248;
var state_29280__$1 = (function (){var statearr_29301 = state_29280;
(statearr_29301[(7)] = inst_29240__$1);

(statearr_29301[(8)] = inst_29241);

(statearr_29301[(14)] = inst_29253);

return statearr_29301;
})();
var statearr_29302_29328 = state_29280__$1;
(statearr_29302_29328[(2)] = null);

(statearr_29302_29328[(1)] = (2));


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
});})(c__21976__auto___29314,out))
;
return ((function (switch__21911__auto__,c__21976__auto___29314,out){
return (function() {
var cljs$core$async$state_machine__21912__auto__ = null;
var cljs$core$async$state_machine__21912__auto____0 = (function (){
var statearr_29306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29306[(0)] = cljs$core$async$state_machine__21912__auto__);

(statearr_29306[(1)] = (1));

return statearr_29306;
});
var cljs$core$async$state_machine__21912__auto____1 = (function (state_29280){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_29280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e29307){if((e29307 instanceof Object)){
var ex__21915__auto__ = e29307;
var statearr_29308_29329 = state_29280;
(statearr_29308_29329[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29280;
state_29280 = G__29330;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
cljs$core$async$state_machine__21912__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21912__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21912__auto____0;
cljs$core$async$state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21912__auto____1;
return cljs$core$async$state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___29314,out))
})();
var state__21978__auto__ = (function (){var statearr_29309 = f__21977__auto__.call(null);
(statearr_29309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___29314);

return statearr_29309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___29314,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441976682417