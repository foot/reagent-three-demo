// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('rthree.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21815__delegate = function (x){
if(cljs.core.truth_(rthree.core.mount_root)){
return cljs.core.apply.call(null,rthree.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'rthree.core/mount-root' is missing");
}
};
var G__21815 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21816__i = 0, G__21816__a = new Array(arguments.length -  0);
while (G__21816__i < G__21816__a.length) {G__21816__a[G__21816__i] = arguments[G__21816__i + 0]; ++G__21816__i;}
  x = new cljs.core.IndexedSeq(G__21816__a,0);
} 
return G__21815__delegate.call(this,x);};
G__21815.cljs$lang$maxFixedArity = 0;
G__21815.cljs$lang$applyTo = (function (arglist__21817){
var x = cljs.core.seq(arglist__21817);
return G__21815__delegate(x);
});
G__21815.cljs$core$IFn$_invoke$arity$variadic = G__21815__delegate;
return G__21815;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1442565608365