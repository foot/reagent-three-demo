// Compiled by ClojureScript 1.7.48 {}
goog.provide('rthree.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('rthree.handlers');
goog.require('rthree.subs');
goog.require('rthree.views');
rthree.core.mount_root = (function rthree$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.main_panel], null),document.getElementById("app"));
});
if(typeof rthree.core.timeout_id !== 'undefined'){
} else {
rthree.core.timeout_id = cljs.core.atom.call(null,null);
}
if(cljs.core.truth_(cljs.core.deref.call(null,rthree.core.timeout_id))){
clearInterval(cljs.core.deref.call(null,rthree.core.timeout_id));
} else {
}
cljs.core.reset_BANG_.call(null,rthree.core.timeout_id,setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
}),(16)));
rthree.core.init = (function rthree$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return rthree.core.mount_root.call(null);
});
goog.exportSymbol('rthree.core.init', rthree.core.init);

//# sourceMappingURL=core.js.map?rel=1442923845684