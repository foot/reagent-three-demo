// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('rthree.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31384__delegate = function (x){
if(cljs.core.truth_(rthree.core.mount_root)){
return cljs.core.apply.call(null,rthree.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'rthree.core/mount-root' is missing");
}
};
var G__31384 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31385__i = 0, G__31385__a = new Array(arguments.length -  0);
while (G__31385__i < G__31385__a.length) {G__31385__a[G__31385__i] = arguments[G__31385__i + 0]; ++G__31385__i;}
  x = new cljs.core.IndexedSeq(G__31385__a,0);
} 
return G__31384__delegate.call(this,x);};
G__31384.cljs$lang$maxFixedArity = 0;
G__31384.cljs$lang$applyTo = (function (arglist__31386){
var x = cljs.core.seq(arglist__31386);
return G__31384__delegate(x);
});
G__31384.cljs$core$IFn$_invoke$arity$variadic = G__31384__delegate;
return G__31384;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1442923855533