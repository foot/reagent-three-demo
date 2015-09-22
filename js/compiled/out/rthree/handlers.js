// Compiled by ClojureScript 1.7.48 {}
goog.provide('rthree.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rthree.db');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return rthree.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.inc);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"camera-update","camera-update",-957684332),(function (db,p__24452){
var vec__24453 = p__24452;
var _ = cljs.core.nth.call(null,vec__24453,(0),null);
var new_params = cljs.core.nth.call(null,vec__24453,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera","camera",-1190348585)], null),cljs.core.into,new_params);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"rotation-speed","rotation-speed",-637058511),(function (db,p__24454){
var vec__24455 = p__24454;
var _ = cljs.core.nth.call(null,vec__24455,(0),null);
var new_value = cljs.core.nth.call(null,vec__24455,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rotation-speed","rotation-speed",-637058511),new_value);
}));

//# sourceMappingURL=handlers.js.map?rel=1442923845637