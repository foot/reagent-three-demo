// Compiled by ClojureScript 1.7.48 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__26503_SHARP_){
return console.log(p1__26503_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__26504_SHARP_){
return console.warn(p1__26504_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__26505_SHARP_){
return console.error(p1__26505_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__26506_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__26506_SHARP_);
} else {
return console.log(p1__26506_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd())){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 * 'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(){
var args__19574__auto__ = [];
var len__19567__auto___26508 = arguments.length;
var i__19568__auto___26509 = (0);
while(true){
if((i__19568__auto___26509 < len__19567__auto___26508)){
args__19574__auto__.push((arguments[i__19568__auto___26509]));

var G__26510 = (i__19568__auto___26509 + (1));
i__19568__auto___26509 = G__26510;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq26507){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26507));
});
re_frame.utils.warn = (function re_frame$utils$warn(){
var args__19574__auto__ = [];
var len__19567__auto___26512 = arguments.length;
var i__19568__auto___26513 = (0);
while(true){
if((i__19568__auto___26513 < len__19567__auto___26512)){
args__19574__auto__.push((arguments[i__19568__auto___26513]));

var G__26514 = (i__19568__auto___26513 + (1));
i__19568__auto___26513 = G__26514;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq26511){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26511));
});
re_frame.utils.group = (function re_frame$utils$group(){
var args__19574__auto__ = [];
var len__19567__auto___26516 = arguments.length;
var i__19568__auto___26517 = (0);
while(true){
if((i__19568__auto___26517 < len__19567__auto___26516)){
args__19574__auto__.push((arguments[i__19568__auto___26517]));

var G__26518 = (i__19568__auto___26517 + (1));
i__19568__auto___26517 = G__26518;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq26515){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26515));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(){
var args__19574__auto__ = [];
var len__19567__auto___26520 = arguments.length;
var i__19568__auto___26521 = (0);
while(true){
if((i__19568__auto___26521 < len__19567__auto___26520)){
args__19574__auto__.push((arguments[i__19568__auto___26521]));

var G__26522 = (i__19568__auto___26521 + (1));
i__19568__auto___26521 = G__26522;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq26519){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26519));
});
re_frame.utils.error = (function re_frame$utils$error(){
var args__19574__auto__ = [];
var len__19567__auto___26524 = arguments.length;
var i__19568__auto___26525 = (0);
while(true){
if((i__19568__auto___26525 < len__19567__auto___26524)){
args__19574__auto__.push((arguments[i__19568__auto___26525]));

var G__26526 = (i__19568__auto___26525 + (1));
i__19568__auto___26525 = G__26526;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq26523){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26523));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1442923849397