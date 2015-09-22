// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = {};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__19164__auto__ = (((port == null))?null:port);
var m__19165__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,port,fn1_handler);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
});


cljs.core.async.impl.protocols.WritePort = {};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__19164__auto__ = (((port == null))?null:port);
var m__19165__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,port,val,fn1_handler);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
});


cljs.core.async.impl.protocols.Channel = {};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__19164__auto__ = (((chan == null))?null:chan);
var m__19165__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,chan);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__19164__auto__ = (((chan == null))?null:chan);
var m__19165__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,chan);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
}
});


cljs.core.async.impl.protocols.Handler = {};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__19164__auto__ = (((h == null))?null:h);
var m__19165__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,h);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__19164__auto__ = (((h == null))?null:h);
var m__19165__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,h);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
});


cljs.core.async.impl.protocols.Buffer = {};

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__19164__auto__ = (((b == null))?null:b);
var m__19165__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,b);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__19164__auto__ = (((b == null))?null:b);
var m__19165__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,b);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__19164__auto__ = (((b == null))?null:b);
var m__19165__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__19164__auto__)]);
if(!((m__19165__auto__ == null))){
return m__19165__auto__.call(null,b,itm);
} else {
var m__19165__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__19165__auto____$1 == null))){
return m__19165__auto____$1.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(){
var args29434 = [];
var len__19567__auto___29437 = arguments.length;
var i__19568__auto___29438 = (0);
while(true){
if((i__19568__auto___29438 < len__19567__auto___29437)){
args29434.push((arguments[i__19568__auto___29438]));

var G__29439 = (i__19568__auto___29438 + (1));
i__19568__auto___29438 = G__29439;
continue;
} else {
}
break;
}

var G__29436 = args29434.length;
switch (G__29436) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29434.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core.async.impl.protocols.UnblockingBuffer = {};


//# sourceMappingURL=protocols.js.map?rel=1441976683420