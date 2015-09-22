// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__30625_SHARP_,p2__30626_SHARP_){
var and__18516__auto__ = p1__30625_SHARP_;
if(cljs.core.truth_(and__18516__auto__)){
return p2__30626_SHARP_;
} else {
return and__18516__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18528__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18528__auto__){
return or__18528__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18528__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18528__auto__){
return or__18528__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18528__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19426__auto__,method_table__19422__auto__,prefer_table__19423__auto__,method_cache__19424__auto__,cached_hierarchy__19425__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30627){
var map__30628 = p__30627;
var map__30628__$1 = ((((!((map__30628 == null)))?((((map__30628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30628):map__30628);
var file = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30630){
var map__30631 = p__30630;
var map__30631__$1 = ((((!((map__30631 == null)))?((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);
var namespace = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19426__auto__,method_table__19422__auto__,prefer_table__19423__auto__,method_cache__19424__auto__,cached_hierarchy__19425__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30633){if((e30633 instanceof Error)){
var e = e30633;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30633;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args30634 = [];
var len__19567__auto___30637 = arguments.length;
var i__19568__auto___30638 = (0);
while(true){
if((i__19568__auto___30638 < len__19567__auto___30637)){
args30634.push((arguments[i__19568__auto___30638]));

var G__30639 = (i__19568__auto___30638 + (1));
i__19568__auto___30638 = G__30639;
continue;
} else {
}
break;
}

var G__30636 = args30634.length;
switch (G__30636) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30634.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30641,callback){
var map__30644 = p__30641;
var map__30644__$1 = ((((!((map__30644 == null)))?((((map__30644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30644):map__30644);
var file_msg = map__30644__$1;
var request_url = cljs.core.get.call(null,map__30644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30644,map__30644__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30644,map__30644__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30646){
var map__30649 = p__30646;
var map__30649__$1 = ((((!((map__30649 == null)))?((((map__30649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30649):map__30649);
var file_msg = map__30649__$1;
var namespace = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__30649__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18528__auto__ = meta_data;
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18516__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18516__auto__){
var or__18528__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
var or__18528__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18528__auto____$1)){
return or__18528__auto____$1;
} else {
var and__18516__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18516__auto____$1){
var or__18528__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18528__auto____$2){
return or__18528__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18516__auto____$1;
}
}
}
} else {
return and__18516__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30651,callback){
var map__30654 = p__30651;
var map__30654__$1 = ((((!((map__30654 == null)))?((((map__30654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30654):map__30654);
var file_msg = map__30654__$1;
var request_url = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21978__auto___30742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___30742,out){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___30742,out){
return (function (state_30724){
var state_val_30725 = (state_30724[(1)]);
if((state_val_30725 === (1))){
var inst_30702 = cljs.core.nth.call(null,files,(0),null);
var inst_30703 = cljs.core.nthnext.call(null,files,(1));
var inst_30704 = files;
var state_30724__$1 = (function (){var statearr_30726 = state_30724;
(statearr_30726[(7)] = inst_30704);

(statearr_30726[(8)] = inst_30702);

(statearr_30726[(9)] = inst_30703);

return statearr_30726;
})();
var statearr_30727_30743 = state_30724__$1;
(statearr_30727_30743[(2)] = null);

(statearr_30727_30743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (2))){
var inst_30707 = (state_30724[(10)]);
var inst_30704 = (state_30724[(7)]);
var inst_30707__$1 = cljs.core.nth.call(null,inst_30704,(0),null);
var inst_30708 = cljs.core.nthnext.call(null,inst_30704,(1));
var inst_30709 = (inst_30707__$1 == null);
var inst_30710 = cljs.core.not.call(null,inst_30709);
var state_30724__$1 = (function (){var statearr_30728 = state_30724;
(statearr_30728[(10)] = inst_30707__$1);

(statearr_30728[(11)] = inst_30708);

return statearr_30728;
})();
if(inst_30710){
var statearr_30729_30744 = state_30724__$1;
(statearr_30729_30744[(1)] = (4));

} else {
var statearr_30730_30745 = state_30724__$1;
(statearr_30730_30745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (3))){
var inst_30722 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30724__$1,inst_30722);
} else {
if((state_val_30725 === (4))){
var inst_30707 = (state_30724[(10)]);
var inst_30712 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30707);
var state_30724__$1 = state_30724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30724__$1,(7),inst_30712);
} else {
if((state_val_30725 === (5))){
var inst_30718 = cljs.core.async.close_BANG_.call(null,out);
var state_30724__$1 = state_30724;
var statearr_30731_30746 = state_30724__$1;
(statearr_30731_30746[(2)] = inst_30718);

(statearr_30731_30746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (6))){
var inst_30720 = (state_30724[(2)]);
var state_30724__$1 = state_30724;
var statearr_30732_30747 = state_30724__$1;
(statearr_30732_30747[(2)] = inst_30720);

(statearr_30732_30747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30725 === (7))){
var inst_30708 = (state_30724[(11)]);
var inst_30714 = (state_30724[(2)]);
var inst_30715 = cljs.core.async.put_BANG_.call(null,out,inst_30714);
var inst_30704 = inst_30708;
var state_30724__$1 = (function (){var statearr_30733 = state_30724;
(statearr_30733[(7)] = inst_30704);

(statearr_30733[(12)] = inst_30715);

return statearr_30733;
})();
var statearr_30734_30748 = state_30724__$1;
(statearr_30734_30748[(2)] = null);

(statearr_30734_30748[(1)] = (2));


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
});})(c__21978__auto___30742,out))
;
return ((function (switch__21913__auto__,c__21978__auto___30742,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto____0 = (function (){
var statearr_30738 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30738[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto__);

(statearr_30738[(1)] = (1));

return statearr_30738;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto____1 = (function (state_30724){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_30724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e30739){if((e30739 instanceof Object)){
var ex__21917__auto__ = e30739;
var statearr_30740_30749 = state_30724;
(statearr_30740_30749[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30750 = state_30724;
state_30724 = G__30750;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto__ = function(state_30724){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto____1.call(this,state_30724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___30742,out))
})();
var state__21980__auto__ = (function (){var statearr_30741 = f__21979__auto__.call(null);
(statearr_30741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___30742);

return statearr_30741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___30742,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__30751,p__30752){
var map__30757 = p__30751;
var map__30757__$1 = ((((!((map__30757 == null)))?((((map__30757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30757):map__30757);
var opts = map__30757__$1;
var url_rewriter = cljs.core.get.call(null,map__30757__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30758 = p__30752;
var map__30758__$1 = ((((!((map__30758 == null)))?((((map__30758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30758):map__30758);
var file_msg = map__30758__$1;
var file = cljs.core.get.call(null,map__30758__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30761){
var map__30765 = p__30761;
var map__30765__$1 = ((((!((map__30765 == null)))?((((map__30765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30765):map__30765);
var eval_body__$1 = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18516__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18516__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18516__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e30767){var e = e30767;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30772,p__30773){
var map__31001 = p__30772;
var map__31001__$1 = ((((!((map__31001 == null)))?((((map__31001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31001):map__31001);
var opts = map__31001__$1;
var before_jsload = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__31001__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__31002 = p__30773;
var map__31002__$1 = ((((!((map__31002 == null)))?((((map__31002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31002):map__31002);
var msg = map__31002__$1;
var files = cljs.core.get.call(null,map__31002__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31017 = (state_31143[(7)]);
var inst_31018 = (state_31143[(8)]);
var inst_31016 = (state_31143[(9)]);
var inst_31019 = (state_31143[(10)]);
var inst_31024 = cljs.core._nth.call(null,inst_31017,inst_31019);
var inst_31025 = figwheel.client.file_reloading.eval_body.call(null,inst_31024);
var inst_31026 = (inst_31019 + (1));
var tmp31145 = inst_31017;
var tmp31146 = inst_31018;
var tmp31147 = inst_31016;
var inst_31016__$1 = tmp31147;
var inst_31017__$1 = tmp31145;
var inst_31018__$1 = tmp31146;
var inst_31019__$1 = inst_31026;
var state_31143__$1 = (function (){var statearr_31148 = state_31143;
(statearr_31148[(7)] = inst_31017__$1);

(statearr_31148[(8)] = inst_31018__$1);

(statearr_31148[(11)] = inst_31025);

(statearr_31148[(9)] = inst_31016__$1);

(statearr_31148[(10)] = inst_31019__$1);

return statearr_31148;
})();
var statearr_31149_31228 = state_31143__$1;
(statearr_31149_31228[(2)] = null);

(statearr_31149_31228[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (20))){
var inst_31061 = (state_31143[(12)]);
var inst_31066 = (state_31143[(13)]);
var inst_31068 = (state_31143[(14)]);
var inst_31062 = (state_31143[(15)]);
var inst_31065 = (state_31143[(16)]);
var inst_31071 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31073 = (function (){var all_files = inst_31061;
var files_SINGLEQUOTE_ = inst_31062;
var res_SINGLEQUOTE_ = inst_31065;
var res = inst_31066;
var files_not_loaded = inst_31068;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31061,inst_31066,inst_31068,inst_31062,inst_31065,inst_31071,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (p__31072){
var map__31150 = p__31072;
var map__31150__$1 = ((((!((map__31150 == null)))?((((map__31150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31150):map__31150);
var namespace = cljs.core.get.call(null,map__31150__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31150__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31061,inst_31066,inst_31068,inst_31062,inst_31065,inst_31071,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31074 = cljs.core.map.call(null,inst_31073,inst_31066);
var inst_31075 = cljs.core.pr_str.call(null,inst_31074);
var inst_31076 = figwheel.client.utils.log.call(null,inst_31075);
var inst_31077 = (function (){var all_files = inst_31061;
var files_SINGLEQUOTE_ = inst_31062;
var res_SINGLEQUOTE_ = inst_31065;
var res = inst_31066;
var files_not_loaded = inst_31068;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31061,inst_31066,inst_31068,inst_31062,inst_31065,inst_31071,inst_31073,inst_31074,inst_31075,inst_31076,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31061,inst_31066,inst_31068,inst_31062,inst_31065,inst_31071,inst_31073,inst_31074,inst_31075,inst_31076,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31078 = setTimeout(inst_31077,(10));
var state_31143__$1 = (function (){var statearr_31152 = state_31143;
(statearr_31152[(17)] = inst_31071);

(statearr_31152[(18)] = inst_31076);

return statearr_31152;
})();
var statearr_31153_31229 = state_31143__$1;
(statearr_31153_31229[(2)] = inst_31078);

(statearr_31153_31229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (27))){
var state_31143__$1 = state_31143;
var statearr_31154_31230 = state_31143__$1;
(statearr_31154_31230[(2)] = false);

(statearr_31154_31230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (1))){
var inst_31008 = (state_31143[(19)]);
var inst_31005 = before_jsload.call(null,files);
var inst_31006 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31007 = (function (){return ((function (inst_31008,inst_31005,inst_31006,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (p1__30768_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30768_SHARP_);
});
;})(inst_31008,inst_31005,inst_31006,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31008__$1 = cljs.core.filter.call(null,inst_31007,files);
var inst_31009 = cljs.core.not_empty.call(null,inst_31008__$1);
var state_31143__$1 = (function (){var statearr_31155 = state_31143;
(statearr_31155[(20)] = inst_31005);

(statearr_31155[(21)] = inst_31006);

(statearr_31155[(19)] = inst_31008__$1);

return statearr_31155;
})();
if(cljs.core.truth_(inst_31009)){
var statearr_31156_31231 = state_31143__$1;
(statearr_31156_31231[(1)] = (2));

} else {
var statearr_31157_31232 = state_31143__$1;
(statearr_31157_31232[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (24))){
var state_31143__$1 = state_31143;
var statearr_31158_31233 = state_31143__$1;
(statearr_31158_31233[(2)] = null);

(statearr_31158_31233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (39))){
var state_31143__$1 = state_31143;
var statearr_31159_31234 = state_31143__$1;
(statearr_31159_31234[(2)] = null);

(statearr_31159_31234[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31053 = (state_31143[(2)]);
var inst_31054 = (function (){return ((function (inst_31053,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (p1__30769_SHARP_){
var and__18516__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30769_SHARP_);
if(cljs.core.truth_(and__18516__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30769_SHARP_));
} else {
return and__18516__auto__;
}
});
;})(inst_31053,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31055 = cljs.core.filter.call(null,inst_31054,files);
var state_31143__$1 = (function (){var statearr_31160 = state_31143;
(statearr_31160[(22)] = inst_31053);

(statearr_31160[(23)] = inst_31055);

return statearr_31160;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31161_31235 = state_31143__$1;
(statearr_31161_31235[(1)] = (16));

} else {
var statearr_31162_31236 = state_31143__$1;
(statearr_31162_31236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (15))){
var inst_31043 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31163_31237 = state_31143__$1;
(statearr_31163_31237[(2)] = inst_31043);

(statearr_31163_31237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (21))){
var state_31143__$1 = state_31143;
var statearr_31164_31238 = state_31143__$1;
(statearr_31164_31238[(2)] = null);

(statearr_31164_31238[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (31))){
var inst_31100 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31165_31239 = state_31143__$1;
(statearr_31165_31239[(2)] = inst_31100);

(statearr_31165_31239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (32))){
var inst_31088 = (state_31143[(24)]);
var inst_31105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31088);
var state_31143__$1 = state_31143;
var statearr_31166_31240 = state_31143__$1;
(statearr_31166_31240[(2)] = inst_31105);

(statearr_31166_31240[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (40))){
var inst_31111 = (state_31143[(25)]);
var inst_31129 = (state_31143[(2)]);
var inst_31130 = cljs.core.not_empty.call(null,inst_31111);
var state_31143__$1 = (function (){var statearr_31167 = state_31143;
(statearr_31167[(26)] = inst_31129);

return statearr_31167;
})();
if(cljs.core.truth_(inst_31130)){
var statearr_31168_31241 = state_31143__$1;
(statearr_31168_31241[(1)] = (41));

} else {
var statearr_31169_31242 = state_31143__$1;
(statearr_31169_31242[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (33))){
var inst_31088 = (state_31143[(24)]);
var state_31143__$1 = state_31143;
var statearr_31170_31243 = state_31143__$1;
(statearr_31170_31243[(2)] = inst_31088);

(statearr_31170_31243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (13))){
var inst_31029 = (state_31143[(27)]);
var inst_31033 = cljs.core.chunk_first.call(null,inst_31029);
var inst_31034 = cljs.core.chunk_rest.call(null,inst_31029);
var inst_31035 = cljs.core.count.call(null,inst_31033);
var inst_31016 = inst_31034;
var inst_31017 = inst_31033;
var inst_31018 = inst_31035;
var inst_31019 = (0);
var state_31143__$1 = (function (){var statearr_31171 = state_31143;
(statearr_31171[(7)] = inst_31017);

(statearr_31171[(8)] = inst_31018);

(statearr_31171[(9)] = inst_31016);

(statearr_31171[(10)] = inst_31019);

return statearr_31171;
})();
var statearr_31172_31244 = state_31143__$1;
(statearr_31172_31244[(2)] = null);

(statearr_31172_31244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (22))){
var inst_31068 = (state_31143[(14)]);
var inst_31081 = (state_31143[(2)]);
var inst_31082 = cljs.core.not_empty.call(null,inst_31068);
var state_31143__$1 = (function (){var statearr_31173 = state_31143;
(statearr_31173[(28)] = inst_31081);

return statearr_31173;
})();
if(cljs.core.truth_(inst_31082)){
var statearr_31174_31245 = state_31143__$1;
(statearr_31174_31245[(1)] = (23));

} else {
var statearr_31175_31246 = state_31143__$1;
(statearr_31175_31246[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (36))){
var state_31143__$1 = state_31143;
var statearr_31176_31247 = state_31143__$1;
(statearr_31176_31247[(2)] = null);

(statearr_31176_31247[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (41))){
var inst_31111 = (state_31143[(25)]);
var inst_31132 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31111);
var inst_31133 = cljs.core.pr_str.call(null,inst_31132);
var inst_31134 = [cljs.core.str("not required: "),cljs.core.str(inst_31133)].join('');
var inst_31135 = figwheel.client.utils.log.call(null,inst_31134);
var state_31143__$1 = state_31143;
var statearr_31177_31248 = state_31143__$1;
(statearr_31177_31248[(2)] = inst_31135);

(statearr_31177_31248[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (43))){
var inst_31138 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31178_31249 = state_31143__$1;
(statearr_31178_31249[(2)] = inst_31138);

(statearr_31178_31249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (29))){
var state_31143__$1 = state_31143;
var statearr_31179_31250 = state_31143__$1;
(statearr_31179_31250[(2)] = true);

(statearr_31179_31250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var inst_31050 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31180_31251 = state_31143__$1;
(statearr_31180_31251[(2)] = inst_31050);

(statearr_31180_31251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (28))){
var inst_31103 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31103)){
var statearr_31181_31252 = state_31143__$1;
(statearr_31181_31252[(1)] = (32));

} else {
var statearr_31182_31253 = state_31143__$1;
(statearr_31182_31253[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (25))){
var inst_31141 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (34))){
var inst_31109 = (state_31143[(29)]);
var inst_31108 = (state_31143[(2)]);
var inst_31109__$1 = cljs.core.get.call(null,inst_31108,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31110 = cljs.core.get.call(null,inst_31108,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31111 = cljs.core.get.call(null,inst_31108,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31112 = cljs.core.not_empty.call(null,inst_31109__$1);
var state_31143__$1 = (function (){var statearr_31183 = state_31143;
(statearr_31183[(25)] = inst_31111);

(statearr_31183[(29)] = inst_31109__$1);

(statearr_31183[(30)] = inst_31110);

return statearr_31183;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31184_31254 = state_31143__$1;
(statearr_31184_31254[(1)] = (35));

} else {
var statearr_31185_31255 = state_31143__$1;
(statearr_31185_31255[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (17))){
var inst_31055 = (state_31143[(23)]);
var state_31143__$1 = state_31143;
var statearr_31186_31256 = state_31143__$1;
(statearr_31186_31256[(2)] = inst_31055);

(statearr_31186_31256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (3))){
var state_31143__$1 = state_31143;
var statearr_31187_31257 = state_31143__$1;
(statearr_31187_31257[(2)] = null);

(statearr_31187_31257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (12))){
var inst_31046 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31188_31258 = state_31143__$1;
(statearr_31188_31258[(2)] = inst_31046);

(statearr_31188_31258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (2))){
var inst_31008 = (state_31143[(19)]);
var inst_31015 = cljs.core.seq.call(null,inst_31008);
var inst_31016 = inst_31015;
var inst_31017 = null;
var inst_31018 = (0);
var inst_31019 = (0);
var state_31143__$1 = (function (){var statearr_31189 = state_31143;
(statearr_31189[(7)] = inst_31017);

(statearr_31189[(8)] = inst_31018);

(statearr_31189[(9)] = inst_31016);

(statearr_31189[(10)] = inst_31019);

return statearr_31189;
})();
var statearr_31190_31259 = state_31143__$1;
(statearr_31190_31259[(2)] = null);

(statearr_31190_31259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (23))){
var inst_31061 = (state_31143[(12)]);
var inst_31066 = (state_31143[(13)]);
var inst_31068 = (state_31143[(14)]);
var inst_31088 = (state_31143[(24)]);
var inst_31062 = (state_31143[(15)]);
var inst_31065 = (state_31143[(16)]);
var inst_31084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31087 = (function (){var all_files = inst_31061;
var files_SINGLEQUOTE_ = inst_31062;
var res_SINGLEQUOTE_ = inst_31065;
var res = inst_31066;
var files_not_loaded = inst_31068;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31061,inst_31066,inst_31068,inst_31088,inst_31062,inst_31065,inst_31084,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (p__31086){
var map__31191 = p__31086;
var map__31191__$1 = ((((!((map__31191 == null)))?((((map__31191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31191):map__31191);
var meta_data = cljs.core.get.call(null,map__31191__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31061,inst_31066,inst_31068,inst_31088,inst_31062,inst_31065,inst_31084,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31088__$1 = cljs.core.group_by.call(null,inst_31087,inst_31068);
var inst_31090 = (inst_31088__$1 == null);
var inst_31091 = cljs.core.not.call(null,inst_31090);
var state_31143__$1 = (function (){var statearr_31193 = state_31143;
(statearr_31193[(31)] = inst_31084);

(statearr_31193[(24)] = inst_31088__$1);

return statearr_31193;
})();
if(inst_31091){
var statearr_31194_31260 = state_31143__$1;
(statearr_31194_31260[(1)] = (26));

} else {
var statearr_31195_31261 = state_31143__$1;
(statearr_31195_31261[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (35))){
var inst_31109 = (state_31143[(29)]);
var inst_31114 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31109);
var inst_31115 = cljs.core.pr_str.call(null,inst_31114);
var inst_31116 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31115)].join('');
var inst_31117 = figwheel.client.utils.log.call(null,inst_31116);
var state_31143__$1 = state_31143;
var statearr_31196_31262 = state_31143__$1;
(statearr_31196_31262[(2)] = inst_31117);

(statearr_31196_31262[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (19))){
var inst_31061 = (state_31143[(12)]);
var inst_31066 = (state_31143[(13)]);
var inst_31062 = (state_31143[(15)]);
var inst_31065 = (state_31143[(16)]);
var inst_31065__$1 = (state_31143[(2)]);
var inst_31066__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31065__$1);
var inst_31067 = (function (){var all_files = inst_31061;
var files_SINGLEQUOTE_ = inst_31062;
var res_SINGLEQUOTE_ = inst_31065__$1;
var res = inst_31066__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_31061,inst_31066,inst_31062,inst_31065,inst_31065__$1,inst_31066__$1,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (p1__30771_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30771_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_31061,inst_31066,inst_31062,inst_31065,inst_31065__$1,inst_31066__$1,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31068 = cljs.core.filter.call(null,inst_31067,inst_31065__$1);
var inst_31069 = cljs.core.not_empty.call(null,inst_31066__$1);
var state_31143__$1 = (function (){var statearr_31197 = state_31143;
(statearr_31197[(13)] = inst_31066__$1);

(statearr_31197[(14)] = inst_31068);

(statearr_31197[(16)] = inst_31065__$1);

return statearr_31197;
})();
if(cljs.core.truth_(inst_31069)){
var statearr_31198_31263 = state_31143__$1;
(statearr_31198_31263[(1)] = (20));

} else {
var statearr_31199_31264 = state_31143__$1;
(statearr_31199_31264[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (11))){
var state_31143__$1 = state_31143;
var statearr_31200_31265 = state_31143__$1;
(statearr_31200_31265[(2)] = null);

(statearr_31200_31265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var inst_31048 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31201_31266 = state_31143__$1;
(statearr_31201_31266[(2)] = inst_31048);

(statearr_31201_31266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (5))){
var inst_31018 = (state_31143[(8)]);
var inst_31019 = (state_31143[(10)]);
var inst_31021 = (inst_31019 < inst_31018);
var inst_31022 = inst_31021;
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31022)){
var statearr_31202_31267 = state_31143__$1;
(statearr_31202_31267[(1)] = (7));

} else {
var statearr_31203_31268 = state_31143__$1;
(statearr_31203_31268[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (14))){
var inst_31029 = (state_31143[(27)]);
var inst_31038 = cljs.core.first.call(null,inst_31029);
var inst_31039 = figwheel.client.file_reloading.eval_body.call(null,inst_31038);
var inst_31040 = cljs.core.next.call(null,inst_31029);
var inst_31016 = inst_31040;
var inst_31017 = null;
var inst_31018 = (0);
var inst_31019 = (0);
var state_31143__$1 = (function (){var statearr_31204 = state_31143;
(statearr_31204[(7)] = inst_31017);

(statearr_31204[(8)] = inst_31018);

(statearr_31204[(32)] = inst_31039);

(statearr_31204[(9)] = inst_31016);

(statearr_31204[(10)] = inst_31019);

return statearr_31204;
})();
var statearr_31205_31269 = state_31143__$1;
(statearr_31205_31269[(2)] = null);

(statearr_31205_31269[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (26))){
var inst_31088 = (state_31143[(24)]);
var inst_31093 = inst_31088.cljs$lang$protocol_mask$partition0$;
var inst_31094 = (inst_31093 & (64));
var inst_31095 = inst_31088.cljs$core$ISeq$;
var inst_31096 = (inst_31094) || (inst_31095);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31096)){
var statearr_31206_31270 = state_31143__$1;
(statearr_31206_31270[(1)] = (29));

} else {
var statearr_31207_31271 = state_31143__$1;
(statearr_31207_31271[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (16))){
var inst_31055 = (state_31143[(23)]);
var inst_31057 = (function (){var all_files = inst_31055;
return ((function (all_files,inst_31055,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function (p1__30770_SHARP_){
return cljs.core.update_in.call(null,p1__30770_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31055,state_val_31144,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var inst_31058 = cljs.core.map.call(null,inst_31057,inst_31055);
var state_31143__$1 = state_31143;
var statearr_31208_31272 = state_31143__$1;
(statearr_31208_31272[(2)] = inst_31058);

(statearr_31208_31272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (38))){
var inst_31110 = (state_31143[(30)]);
var inst_31123 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31110);
var inst_31124 = cljs.core.pr_str.call(null,inst_31123);
var inst_31125 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31124)].join('');
var inst_31126 = figwheel.client.utils.log.call(null,inst_31125);
var state_31143__$1 = state_31143;
var statearr_31209_31273 = state_31143__$1;
(statearr_31209_31273[(2)] = inst_31126);

(statearr_31209_31273[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (30))){
var state_31143__$1 = state_31143;
var statearr_31210_31274 = state_31143__$1;
(statearr_31210_31274[(2)] = false);

(statearr_31210_31274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31029 = (state_31143[(27)]);
var inst_31031 = cljs.core.chunked_seq_QMARK_.call(null,inst_31029);
var state_31143__$1 = state_31143;
if(inst_31031){
var statearr_31211_31275 = state_31143__$1;
(statearr_31211_31275[(1)] = (13));

} else {
var statearr_31212_31276 = state_31143__$1;
(statearr_31212_31276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (18))){
var inst_31061 = (state_31143[(12)]);
var inst_31062 = (state_31143[(15)]);
var inst_31061__$1 = (state_31143[(2)]);
var inst_31062__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31061__$1);
var inst_31063 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31062__$1);
var state_31143__$1 = (function (){var statearr_31213 = state_31143;
(statearr_31213[(12)] = inst_31061__$1);

(statearr_31213[(15)] = inst_31062__$1);

return statearr_31213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31143__$1,(19),inst_31063);
} else {
if((state_val_31144 === (42))){
var state_31143__$1 = state_31143;
var statearr_31214_31277 = state_31143__$1;
(statearr_31214_31277[(2)] = null);

(statearr_31214_31277[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (37))){
var inst_31110 = (state_31143[(30)]);
var inst_31120 = (state_31143[(2)]);
var inst_31121 = cljs.core.not_empty.call(null,inst_31110);
var state_31143__$1 = (function (){var statearr_31215 = state_31143;
(statearr_31215[(33)] = inst_31120);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31121)){
var statearr_31216_31278 = state_31143__$1;
(statearr_31216_31278[(1)] = (38));

} else {
var statearr_31217_31279 = state_31143__$1;
(statearr_31217_31279[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31029 = (state_31143[(27)]);
var inst_31016 = (state_31143[(9)]);
var inst_31029__$1 = cljs.core.seq.call(null,inst_31016);
var state_31143__$1 = (function (){var statearr_31218 = state_31143;
(statearr_31218[(27)] = inst_31029__$1);

return statearr_31218;
})();
if(inst_31029__$1){
var statearr_31219_31280 = state_31143__$1;
(statearr_31219_31280[(1)] = (10));

} else {
var statearr_31220_31281 = state_31143__$1;
(statearr_31220_31281[(1)] = (11));

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
});})(c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
;
return ((function (switch__21913__auto__,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto____0 = (function (){
var statearr_31224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31224[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto__);

(statearr_31224[(1)] = (1));

return statearr_31224;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto____1 = (function (state_31143){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_31143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e31225){if((e31225 instanceof Object)){
var ex__21917__auto__ = e31225;
var statearr_31226_31282 = state_31143;
(statearr_31226_31282[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31283 = state_31143;
state_31143 = G__31283;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
})();
var state__21980__auto__ = (function (){var statearr_31227 = f__21979__auto__.call(null);
(statearr_31227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_31227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__,map__31001,map__31001__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31002,map__31002__$1,msg,files))
);

return c__21978__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31286,link){
var map__31289 = p__31286;
var map__31289__$1 = ((((!((map__31289 == null)))?((((map__31289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31289):map__31289);
var file = cljs.core.get.call(null,map__31289__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31289,map__31289__$1,file){
return (function (p1__31284_SHARP_,p2__31285_SHARP_){
if(cljs.core._EQ_.call(null,p1__31284_SHARP_,p2__31285_SHARP_)){
return p1__31284_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31289,map__31289__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31295){
var map__31296 = p__31295;
var map__31296__$1 = ((((!((map__31296 == null)))?((((map__31296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31296):map__31296);
var match_length = cljs.core.get.call(null,map__31296__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31296__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31291_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31291_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args31298 = [];
var len__19567__auto___31301 = arguments.length;
var i__19568__auto___31302 = (0);
while(true){
if((i__19568__auto___31302 < len__19567__auto___31301)){
args31298.push((arguments[i__19568__auto___31302]));

var G__31303 = (i__19568__auto___31302 + (1));
i__19568__auto___31302 = G__31303;
continue;
} else {
}
break;
}

var G__31300 = args31298.length;
switch (G__31300) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31298.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31305){
var map__31308 = p__31305;
var map__31308__$1 = ((((!((map__31308 == null)))?((((map__31308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31308):map__31308);
var f_data = map__31308__$1;
var file = cljs.core.get.call(null,map__31308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__31308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18528__auto__ = request_url;
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31310,files_msg){
var map__31333 = p__31310;
var map__31333__$1 = ((((!((map__31333 == null)))?((((map__31333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31333):map__31333);
var opts = map__31333__$1;
var on_cssload = cljs.core.get.call(null,map__31333__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31335_31355 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31336_31356 = null;
var count__31337_31357 = (0);
var i__31338_31358 = (0);
while(true){
if((i__31338_31358 < count__31337_31357)){
var f_31359 = cljs.core._nth.call(null,chunk__31336_31356,i__31338_31358);
figwheel.client.file_reloading.reload_css_file.call(null,f_31359);

var G__31360 = seq__31335_31355;
var G__31361 = chunk__31336_31356;
var G__31362 = count__31337_31357;
var G__31363 = (i__31338_31358 + (1));
seq__31335_31355 = G__31360;
chunk__31336_31356 = G__31361;
count__31337_31357 = G__31362;
i__31338_31358 = G__31363;
continue;
} else {
var temp__4425__auto___31364 = cljs.core.seq.call(null,seq__31335_31355);
if(temp__4425__auto___31364){
var seq__31335_31365__$1 = temp__4425__auto___31364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31335_31365__$1)){
var c__19312__auto___31366 = cljs.core.chunk_first.call(null,seq__31335_31365__$1);
var G__31367 = cljs.core.chunk_rest.call(null,seq__31335_31365__$1);
var G__31368 = c__19312__auto___31366;
var G__31369 = cljs.core.count.call(null,c__19312__auto___31366);
var G__31370 = (0);
seq__31335_31355 = G__31367;
chunk__31336_31356 = G__31368;
count__31337_31357 = G__31369;
i__31338_31358 = G__31370;
continue;
} else {
var f_31371 = cljs.core.first.call(null,seq__31335_31365__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31371);

var G__31372 = cljs.core.next.call(null,seq__31335_31365__$1);
var G__31373 = null;
var G__31374 = (0);
var G__31375 = (0);
seq__31335_31355 = G__31372;
chunk__31336_31356 = G__31373;
count__31337_31357 = G__31374;
i__31338_31358 = G__31375;
continue;
}
} else {
}
}
break;
}

var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__,map__31333,map__31333__$1,opts,on_cssload){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__,map__31333,map__31333__$1,opts,on_cssload){
return (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (1))){
var inst_31339 = cljs.core.async.timeout.call(null,(100));
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31345__$1,(2),inst_31339);
} else {
if((state_val_31346 === (2))){
var inst_31341 = (state_31345[(2)]);
var inst_31342 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31343 = on_cssload.call(null,inst_31342);
var state_31345__$1 = (function (){var statearr_31347 = state_31345;
(statearr_31347[(7)] = inst_31341);

return statearr_31347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31345__$1,inst_31343);
} else {
return null;
}
}
});})(c__21978__auto__,map__31333,map__31333__$1,opts,on_cssload))
;
return ((function (switch__21913__auto__,c__21978__auto__,map__31333,map__31333__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto____0 = (function (){
var statearr_31351 = [null,null,null,null,null,null,null,null];
(statearr_31351[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto__);

(statearr_31351[(1)] = (1));

return statearr_31351;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto____1 = (function (state_31345){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_31345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e31352){if((e31352 instanceof Object)){
var ex__21917__auto__ = e31352;
var statearr_31353_31376 = state_31345;
(statearr_31353_31376[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31377 = state_31345;
state_31345 = G__31377;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__,map__31333,map__31333__$1,opts,on_cssload))
})();
var state__21980__auto__ = (function (){var statearr_31354 = f__21979__auto__.call(null);
(statearr_31354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_31354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__,map__31333,map__31333__$1,opts,on_cssload))
);

return c__21978__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1442923854785