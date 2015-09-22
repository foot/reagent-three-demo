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
return cljs.core.reduce.call(null,(function (p1__30610_SHARP_,p2__30611_SHARP_){
var and__18516__auto__ = p1__30610_SHARP_;
if(cljs.core.truth_(and__18516__auto__)){
return p2__30611_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30612){
var map__30613 = p__30612;
var map__30613__$1 = ((((!((map__30613 == null)))?((((map__30613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30613):map__30613);
var file = cljs.core.get.call(null,map__30613__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30615){
var map__30616 = p__30615;
var map__30616__$1 = ((((!((map__30616 == null)))?((((map__30616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30616):map__30616);
var namespace = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e30618){if((e30618 instanceof Error)){
var e = e30618;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30618;

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
var args30619 = [];
var len__19567__auto___30622 = arguments.length;
var i__19568__auto___30623 = (0);
while(true){
if((i__19568__auto___30623 < len__19567__auto___30622)){
args30619.push((arguments[i__19568__auto___30623]));

var G__30624 = (i__19568__auto___30623 + (1));
i__19568__auto___30623 = G__30624;
continue;
} else {
}
break;
}

var G__30621 = args30619.length;
switch (G__30621) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30619.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30626,callback){
var map__30629 = p__30626;
var map__30629__$1 = ((((!((map__30629 == null)))?((((map__30629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30629):map__30629);
var file_msg = map__30629__$1;
var request_url = cljs.core.get.call(null,map__30629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30629,map__30629__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30629,map__30629__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30631){
var map__30634 = p__30631;
var map__30634__$1 = ((((!((map__30634 == null)))?((((map__30634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30634):map__30634);
var file_msg = map__30634__$1;
var namespace = cljs.core.get.call(null,map__30634__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__30634__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30636,callback){
var map__30639 = p__30636;
var map__30639__$1 = ((((!((map__30639 == null)))?((((map__30639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30639):map__30639);
var file_msg = map__30639__$1;
var request_url = cljs.core.get.call(null,map__30639__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21976__auto___30727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___30727,out){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___30727,out){
return (function (state_30709){
var state_val_30710 = (state_30709[(1)]);
if((state_val_30710 === (1))){
var inst_30687 = cljs.core.nth.call(null,files,(0),null);
var inst_30688 = cljs.core.nthnext.call(null,files,(1));
var inst_30689 = files;
var state_30709__$1 = (function (){var statearr_30711 = state_30709;
(statearr_30711[(7)] = inst_30688);

(statearr_30711[(8)] = inst_30687);

(statearr_30711[(9)] = inst_30689);

return statearr_30711;
})();
var statearr_30712_30728 = state_30709__$1;
(statearr_30712_30728[(2)] = null);

(statearr_30712_30728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30710 === (2))){
var inst_30692 = (state_30709[(10)]);
var inst_30689 = (state_30709[(9)]);
var inst_30692__$1 = cljs.core.nth.call(null,inst_30689,(0),null);
var inst_30693 = cljs.core.nthnext.call(null,inst_30689,(1));
var inst_30694 = (inst_30692__$1 == null);
var inst_30695 = cljs.core.not.call(null,inst_30694);
var state_30709__$1 = (function (){var statearr_30713 = state_30709;
(statearr_30713[(10)] = inst_30692__$1);

(statearr_30713[(11)] = inst_30693);

return statearr_30713;
})();
if(inst_30695){
var statearr_30714_30729 = state_30709__$1;
(statearr_30714_30729[(1)] = (4));

} else {
var statearr_30715_30730 = state_30709__$1;
(statearr_30715_30730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30710 === (3))){
var inst_30707 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30709__$1,inst_30707);
} else {
if((state_val_30710 === (4))){
var inst_30692 = (state_30709[(10)]);
var inst_30697 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30692);
var state_30709__$1 = state_30709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30709__$1,(7),inst_30697);
} else {
if((state_val_30710 === (5))){
var inst_30703 = cljs.core.async.close_BANG_.call(null,out);
var state_30709__$1 = state_30709;
var statearr_30716_30731 = state_30709__$1;
(statearr_30716_30731[(2)] = inst_30703);

(statearr_30716_30731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30710 === (6))){
var inst_30705 = (state_30709[(2)]);
var state_30709__$1 = state_30709;
var statearr_30717_30732 = state_30709__$1;
(statearr_30717_30732[(2)] = inst_30705);

(statearr_30717_30732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30710 === (7))){
var inst_30693 = (state_30709[(11)]);
var inst_30699 = (state_30709[(2)]);
var inst_30700 = cljs.core.async.put_BANG_.call(null,out,inst_30699);
var inst_30689 = inst_30693;
var state_30709__$1 = (function (){var statearr_30718 = state_30709;
(statearr_30718[(12)] = inst_30700);

(statearr_30718[(9)] = inst_30689);

return statearr_30718;
})();
var statearr_30719_30733 = state_30709__$1;
(statearr_30719_30733[(2)] = null);

(statearr_30719_30733[(1)] = (2));


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
});})(c__21976__auto___30727,out))
;
return ((function (switch__21911__auto__,c__21976__auto___30727,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto____0 = (function (){
var statearr_30723 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30723[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto__);

(statearr_30723[(1)] = (1));

return statearr_30723;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto____1 = (function (state_30709){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_30709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e30724){if((e30724 instanceof Object)){
var ex__21915__auto__ = e30724;
var statearr_30725_30734 = state_30709;
(statearr_30725_30734[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30735 = state_30709;
state_30709 = G__30735;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto__ = function(state_30709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto____1.call(this,state_30709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___30727,out))
})();
var state__21978__auto__ = (function (){var statearr_30726 = f__21977__auto__.call(null);
(statearr_30726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___30727);

return statearr_30726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___30727,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__30736,p__30737){
var map__30742 = p__30736;
var map__30742__$1 = ((((!((map__30742 == null)))?((((map__30742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30742):map__30742);
var opts = map__30742__$1;
var url_rewriter = cljs.core.get.call(null,map__30742__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30743 = p__30737;
var map__30743__$1 = ((((!((map__30743 == null)))?((((map__30743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30743):map__30743);
var file_msg = map__30743__$1;
var file = cljs.core.get.call(null,map__30743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30746){
var map__30750 = p__30746;
var map__30750__$1 = ((((!((map__30750 == null)))?((((map__30750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30750):map__30750);
var eval_body__$1 = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30750__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30752){var e = e30752;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30757,p__30758){
var map__30986 = p__30757;
var map__30986__$1 = ((((!((map__30986 == null)))?((((map__30986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30986):map__30986);
var opts = map__30986__$1;
var before_jsload = cljs.core.get.call(null,map__30986__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30986__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__30986__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__30987 = p__30758;
var map__30987__$1 = ((((!((map__30987 == null)))?((((map__30987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30987):map__30987);
var msg = map__30987__$1;
var files = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (state_31128){
var state_val_31129 = (state_31128[(1)]);
if((state_val_31129 === (7))){
var inst_31004 = (state_31128[(7)]);
var inst_31002 = (state_31128[(8)]);
var inst_31001 = (state_31128[(9)]);
var inst_31003 = (state_31128[(10)]);
var inst_31009 = cljs.core._nth.call(null,inst_31002,inst_31004);
var inst_31010 = figwheel.client.file_reloading.eval_body.call(null,inst_31009);
var inst_31011 = (inst_31004 + (1));
var tmp31130 = inst_31002;
var tmp31131 = inst_31001;
var tmp31132 = inst_31003;
var inst_31001__$1 = tmp31131;
var inst_31002__$1 = tmp31130;
var inst_31003__$1 = tmp31132;
var inst_31004__$1 = inst_31011;
var state_31128__$1 = (function (){var statearr_31133 = state_31128;
(statearr_31133[(7)] = inst_31004__$1);

(statearr_31133[(11)] = inst_31010);

(statearr_31133[(8)] = inst_31002__$1);

(statearr_31133[(9)] = inst_31001__$1);

(statearr_31133[(10)] = inst_31003__$1);

return statearr_31133;
})();
var statearr_31134_31213 = state_31128__$1;
(statearr_31134_31213[(2)] = null);

(statearr_31134_31213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (20))){
var inst_31046 = (state_31128[(12)]);
var inst_31051 = (state_31128[(13)]);
var inst_31053 = (state_31128[(14)]);
var inst_31050 = (state_31128[(15)]);
var inst_31047 = (state_31128[(16)]);
var inst_31056 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31058 = (function (){var all_files = inst_31046;
var files_SINGLEQUOTE_ = inst_31047;
var res_SINGLEQUOTE_ = inst_31050;
var res = inst_31051;
var files_not_loaded = inst_31053;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31046,inst_31051,inst_31053,inst_31050,inst_31047,inst_31056,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (p__31057){
var map__31135 = p__31057;
var map__31135__$1 = ((((!((map__31135 == null)))?((((map__31135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31135):map__31135);
var namespace = cljs.core.get.call(null,map__31135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31046,inst_31051,inst_31053,inst_31050,inst_31047,inst_31056,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_31059 = cljs.core.map.call(null,inst_31058,inst_31051);
var inst_31060 = cljs.core.pr_str.call(null,inst_31059);
var inst_31061 = figwheel.client.utils.log.call(null,inst_31060);
var inst_31062 = (function (){var all_files = inst_31046;
var files_SINGLEQUOTE_ = inst_31047;
var res_SINGLEQUOTE_ = inst_31050;
var res = inst_31051;
var files_not_loaded = inst_31053;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31046,inst_31051,inst_31053,inst_31050,inst_31047,inst_31056,inst_31058,inst_31059,inst_31060,inst_31061,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31046,inst_31051,inst_31053,inst_31050,inst_31047,inst_31056,inst_31058,inst_31059,inst_31060,inst_31061,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_31063 = setTimeout(inst_31062,(10));
var state_31128__$1 = (function (){var statearr_31137 = state_31128;
(statearr_31137[(17)] = inst_31061);

(statearr_31137[(18)] = inst_31056);

return statearr_31137;
})();
var statearr_31138_31214 = state_31128__$1;
(statearr_31138_31214[(2)] = inst_31063);

(statearr_31138_31214[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (27))){
var state_31128__$1 = state_31128;
var statearr_31139_31215 = state_31128__$1;
(statearr_31139_31215[(2)] = false);

(statearr_31139_31215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (1))){
var inst_30993 = (state_31128[(19)]);
var inst_30990 = before_jsload.call(null,files);
var inst_30991 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30992 = (function (){return ((function (inst_30993,inst_30990,inst_30991,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (p1__30753_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30753_SHARP_);
});
;})(inst_30993,inst_30990,inst_30991,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_30993__$1 = cljs.core.filter.call(null,inst_30992,files);
var inst_30994 = cljs.core.not_empty.call(null,inst_30993__$1);
var state_31128__$1 = (function (){var statearr_31140 = state_31128;
(statearr_31140[(20)] = inst_30990);

(statearr_31140[(21)] = inst_30991);

(statearr_31140[(19)] = inst_30993__$1);

return statearr_31140;
})();
if(cljs.core.truth_(inst_30994)){
var statearr_31141_31216 = state_31128__$1;
(statearr_31141_31216[(1)] = (2));

} else {
var statearr_31142_31217 = state_31128__$1;
(statearr_31142_31217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (24))){
var state_31128__$1 = state_31128;
var statearr_31143_31218 = state_31128__$1;
(statearr_31143_31218[(2)] = null);

(statearr_31143_31218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (39))){
var state_31128__$1 = state_31128;
var statearr_31144_31219 = state_31128__$1;
(statearr_31144_31219[(2)] = null);

(statearr_31144_31219[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (4))){
var inst_31038 = (state_31128[(2)]);
var inst_31039 = (function (){return ((function (inst_31038,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (p1__30754_SHARP_){
var and__18516__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30754_SHARP_);
if(cljs.core.truth_(and__18516__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30754_SHARP_));
} else {
return and__18516__auto__;
}
});
;})(inst_31038,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_31040 = cljs.core.filter.call(null,inst_31039,files);
var state_31128__$1 = (function (){var statearr_31145 = state_31128;
(statearr_31145[(22)] = inst_31038);

(statearr_31145[(23)] = inst_31040);

return statearr_31145;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31146_31220 = state_31128__$1;
(statearr_31146_31220[(1)] = (16));

} else {
var statearr_31147_31221 = state_31128__$1;
(statearr_31147_31221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (15))){
var inst_31028 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31148_31222 = state_31128__$1;
(statearr_31148_31222[(2)] = inst_31028);

(statearr_31148_31222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (21))){
var state_31128__$1 = state_31128;
var statearr_31149_31223 = state_31128__$1;
(statearr_31149_31223[(2)] = null);

(statearr_31149_31223[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (31))){
var inst_31085 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31150_31224 = state_31128__$1;
(statearr_31150_31224[(2)] = inst_31085);

(statearr_31150_31224[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (32))){
var inst_31073 = (state_31128[(24)]);
var inst_31090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31073);
var state_31128__$1 = state_31128;
var statearr_31151_31225 = state_31128__$1;
(statearr_31151_31225[(2)] = inst_31090);

(statearr_31151_31225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (40))){
var inst_31096 = (state_31128[(25)]);
var inst_31114 = (state_31128[(2)]);
var inst_31115 = cljs.core.not_empty.call(null,inst_31096);
var state_31128__$1 = (function (){var statearr_31152 = state_31128;
(statearr_31152[(26)] = inst_31114);

return statearr_31152;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31153_31226 = state_31128__$1;
(statearr_31153_31226[(1)] = (41));

} else {
var statearr_31154_31227 = state_31128__$1;
(statearr_31154_31227[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (33))){
var inst_31073 = (state_31128[(24)]);
var state_31128__$1 = state_31128;
var statearr_31155_31228 = state_31128__$1;
(statearr_31155_31228[(2)] = inst_31073);

(statearr_31155_31228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (13))){
var inst_31014 = (state_31128[(27)]);
var inst_31018 = cljs.core.chunk_first.call(null,inst_31014);
var inst_31019 = cljs.core.chunk_rest.call(null,inst_31014);
var inst_31020 = cljs.core.count.call(null,inst_31018);
var inst_31001 = inst_31019;
var inst_31002 = inst_31018;
var inst_31003 = inst_31020;
var inst_31004 = (0);
var state_31128__$1 = (function (){var statearr_31156 = state_31128;
(statearr_31156[(7)] = inst_31004);

(statearr_31156[(8)] = inst_31002);

(statearr_31156[(9)] = inst_31001);

(statearr_31156[(10)] = inst_31003);

return statearr_31156;
})();
var statearr_31157_31229 = state_31128__$1;
(statearr_31157_31229[(2)] = null);

(statearr_31157_31229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (22))){
var inst_31053 = (state_31128[(14)]);
var inst_31066 = (state_31128[(2)]);
var inst_31067 = cljs.core.not_empty.call(null,inst_31053);
var state_31128__$1 = (function (){var statearr_31158 = state_31128;
(statearr_31158[(28)] = inst_31066);

return statearr_31158;
})();
if(cljs.core.truth_(inst_31067)){
var statearr_31159_31230 = state_31128__$1;
(statearr_31159_31230[(1)] = (23));

} else {
var statearr_31160_31231 = state_31128__$1;
(statearr_31160_31231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (36))){
var state_31128__$1 = state_31128;
var statearr_31161_31232 = state_31128__$1;
(statearr_31161_31232[(2)] = null);

(statearr_31161_31232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (41))){
var inst_31096 = (state_31128[(25)]);
var inst_31117 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31096);
var inst_31118 = cljs.core.pr_str.call(null,inst_31117);
var inst_31119 = [cljs.core.str("not required: "),cljs.core.str(inst_31118)].join('');
var inst_31120 = figwheel.client.utils.log.call(null,inst_31119);
var state_31128__$1 = state_31128;
var statearr_31162_31233 = state_31128__$1;
(statearr_31162_31233[(2)] = inst_31120);

(statearr_31162_31233[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (43))){
var inst_31123 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31163_31234 = state_31128__$1;
(statearr_31163_31234[(2)] = inst_31123);

(statearr_31163_31234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (29))){
var state_31128__$1 = state_31128;
var statearr_31164_31235 = state_31128__$1;
(statearr_31164_31235[(2)] = true);

(statearr_31164_31235[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (6))){
var inst_31035 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31165_31236 = state_31128__$1;
(statearr_31165_31236[(2)] = inst_31035);

(statearr_31165_31236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (28))){
var inst_31088 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
if(cljs.core.truth_(inst_31088)){
var statearr_31166_31237 = state_31128__$1;
(statearr_31166_31237[(1)] = (32));

} else {
var statearr_31167_31238 = state_31128__$1;
(statearr_31167_31238[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (25))){
var inst_31126 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31128__$1,inst_31126);
} else {
if((state_val_31129 === (34))){
var inst_31094 = (state_31128[(29)]);
var inst_31093 = (state_31128[(2)]);
var inst_31094__$1 = cljs.core.get.call(null,inst_31093,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31095 = cljs.core.get.call(null,inst_31093,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31096 = cljs.core.get.call(null,inst_31093,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31097 = cljs.core.not_empty.call(null,inst_31094__$1);
var state_31128__$1 = (function (){var statearr_31168 = state_31128;
(statearr_31168[(25)] = inst_31096);

(statearr_31168[(29)] = inst_31094__$1);

(statearr_31168[(30)] = inst_31095);

return statearr_31168;
})();
if(cljs.core.truth_(inst_31097)){
var statearr_31169_31239 = state_31128__$1;
(statearr_31169_31239[(1)] = (35));

} else {
var statearr_31170_31240 = state_31128__$1;
(statearr_31170_31240[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (17))){
var inst_31040 = (state_31128[(23)]);
var state_31128__$1 = state_31128;
var statearr_31171_31241 = state_31128__$1;
(statearr_31171_31241[(2)] = inst_31040);

(statearr_31171_31241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (3))){
var state_31128__$1 = state_31128;
var statearr_31172_31242 = state_31128__$1;
(statearr_31172_31242[(2)] = null);

(statearr_31172_31242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (12))){
var inst_31031 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31173_31243 = state_31128__$1;
(statearr_31173_31243[(2)] = inst_31031);

(statearr_31173_31243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (2))){
var inst_30993 = (state_31128[(19)]);
var inst_31000 = cljs.core.seq.call(null,inst_30993);
var inst_31001 = inst_31000;
var inst_31002 = null;
var inst_31003 = (0);
var inst_31004 = (0);
var state_31128__$1 = (function (){var statearr_31174 = state_31128;
(statearr_31174[(7)] = inst_31004);

(statearr_31174[(8)] = inst_31002);

(statearr_31174[(9)] = inst_31001);

(statearr_31174[(10)] = inst_31003);

return statearr_31174;
})();
var statearr_31175_31244 = state_31128__$1;
(statearr_31175_31244[(2)] = null);

(statearr_31175_31244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (23))){
var inst_31046 = (state_31128[(12)]);
var inst_31051 = (state_31128[(13)]);
var inst_31053 = (state_31128[(14)]);
var inst_31050 = (state_31128[(15)]);
var inst_31047 = (state_31128[(16)]);
var inst_31073 = (state_31128[(24)]);
var inst_31069 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31072 = (function (){var all_files = inst_31046;
var files_SINGLEQUOTE_ = inst_31047;
var res_SINGLEQUOTE_ = inst_31050;
var res = inst_31051;
var files_not_loaded = inst_31053;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31046,inst_31051,inst_31053,inst_31050,inst_31047,inst_31073,inst_31069,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (p__31071){
var map__31176 = p__31071;
var map__31176__$1 = ((((!((map__31176 == null)))?((((map__31176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31176):map__31176);
var meta_data = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_31046,inst_31051,inst_31053,inst_31050,inst_31047,inst_31073,inst_31069,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_31073__$1 = cljs.core.group_by.call(null,inst_31072,inst_31053);
var inst_31075 = (inst_31073__$1 == null);
var inst_31076 = cljs.core.not.call(null,inst_31075);
var state_31128__$1 = (function (){var statearr_31178 = state_31128;
(statearr_31178[(31)] = inst_31069);

(statearr_31178[(24)] = inst_31073__$1);

return statearr_31178;
})();
if(inst_31076){
var statearr_31179_31245 = state_31128__$1;
(statearr_31179_31245[(1)] = (26));

} else {
var statearr_31180_31246 = state_31128__$1;
(statearr_31180_31246[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (35))){
var inst_31094 = (state_31128[(29)]);
var inst_31099 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31094);
var inst_31100 = cljs.core.pr_str.call(null,inst_31099);
var inst_31101 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31100)].join('');
var inst_31102 = figwheel.client.utils.log.call(null,inst_31101);
var state_31128__$1 = state_31128;
var statearr_31181_31247 = state_31128__$1;
(statearr_31181_31247[(2)] = inst_31102);

(statearr_31181_31247[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (19))){
var inst_31046 = (state_31128[(12)]);
var inst_31051 = (state_31128[(13)]);
var inst_31050 = (state_31128[(15)]);
var inst_31047 = (state_31128[(16)]);
var inst_31050__$1 = (state_31128[(2)]);
var inst_31051__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31050__$1);
var inst_31052 = (function (){var all_files = inst_31046;
var files_SINGLEQUOTE_ = inst_31047;
var res_SINGLEQUOTE_ = inst_31050__$1;
var res = inst_31051__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_31046,inst_31051,inst_31050,inst_31047,inst_31050__$1,inst_31051__$1,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (p1__30756_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30756_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_31046,inst_31051,inst_31050,inst_31047,inst_31050__$1,inst_31051__$1,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_31053 = cljs.core.filter.call(null,inst_31052,inst_31050__$1);
var inst_31054 = cljs.core.not_empty.call(null,inst_31051__$1);
var state_31128__$1 = (function (){var statearr_31182 = state_31128;
(statearr_31182[(13)] = inst_31051__$1);

(statearr_31182[(14)] = inst_31053);

(statearr_31182[(15)] = inst_31050__$1);

return statearr_31182;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31183_31248 = state_31128__$1;
(statearr_31183_31248[(1)] = (20));

} else {
var statearr_31184_31249 = state_31128__$1;
(statearr_31184_31249[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (11))){
var state_31128__$1 = state_31128;
var statearr_31185_31250 = state_31128__$1;
(statearr_31185_31250[(2)] = null);

(statearr_31185_31250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (9))){
var inst_31033 = (state_31128[(2)]);
var state_31128__$1 = state_31128;
var statearr_31186_31251 = state_31128__$1;
(statearr_31186_31251[(2)] = inst_31033);

(statearr_31186_31251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (5))){
var inst_31004 = (state_31128[(7)]);
var inst_31003 = (state_31128[(10)]);
var inst_31006 = (inst_31004 < inst_31003);
var inst_31007 = inst_31006;
var state_31128__$1 = state_31128;
if(cljs.core.truth_(inst_31007)){
var statearr_31187_31252 = state_31128__$1;
(statearr_31187_31252[(1)] = (7));

} else {
var statearr_31188_31253 = state_31128__$1;
(statearr_31188_31253[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (14))){
var inst_31014 = (state_31128[(27)]);
var inst_31023 = cljs.core.first.call(null,inst_31014);
var inst_31024 = figwheel.client.file_reloading.eval_body.call(null,inst_31023);
var inst_31025 = cljs.core.next.call(null,inst_31014);
var inst_31001 = inst_31025;
var inst_31002 = null;
var inst_31003 = (0);
var inst_31004 = (0);
var state_31128__$1 = (function (){var statearr_31189 = state_31128;
(statearr_31189[(7)] = inst_31004);

(statearr_31189[(32)] = inst_31024);

(statearr_31189[(8)] = inst_31002);

(statearr_31189[(9)] = inst_31001);

(statearr_31189[(10)] = inst_31003);

return statearr_31189;
})();
var statearr_31190_31254 = state_31128__$1;
(statearr_31190_31254[(2)] = null);

(statearr_31190_31254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (26))){
var inst_31073 = (state_31128[(24)]);
var inst_31078 = inst_31073.cljs$lang$protocol_mask$partition0$;
var inst_31079 = (inst_31078 & (64));
var inst_31080 = inst_31073.cljs$core$ISeq$;
var inst_31081 = (inst_31079) || (inst_31080);
var state_31128__$1 = state_31128;
if(cljs.core.truth_(inst_31081)){
var statearr_31191_31255 = state_31128__$1;
(statearr_31191_31255[(1)] = (29));

} else {
var statearr_31192_31256 = state_31128__$1;
(statearr_31192_31256[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (16))){
var inst_31040 = (state_31128[(23)]);
var inst_31042 = (function (){var all_files = inst_31040;
return ((function (all_files,inst_31040,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function (p1__30755_SHARP_){
return cljs.core.update_in.call(null,p1__30755_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31040,state_val_31129,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var inst_31043 = cljs.core.map.call(null,inst_31042,inst_31040);
var state_31128__$1 = state_31128;
var statearr_31193_31257 = state_31128__$1;
(statearr_31193_31257[(2)] = inst_31043);

(statearr_31193_31257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (38))){
var inst_31095 = (state_31128[(30)]);
var inst_31108 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31095);
var inst_31109 = cljs.core.pr_str.call(null,inst_31108);
var inst_31110 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31109)].join('');
var inst_31111 = figwheel.client.utils.log.call(null,inst_31110);
var state_31128__$1 = state_31128;
var statearr_31194_31258 = state_31128__$1;
(statearr_31194_31258[(2)] = inst_31111);

(statearr_31194_31258[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (30))){
var state_31128__$1 = state_31128;
var statearr_31195_31259 = state_31128__$1;
(statearr_31195_31259[(2)] = false);

(statearr_31195_31259[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (10))){
var inst_31014 = (state_31128[(27)]);
var inst_31016 = cljs.core.chunked_seq_QMARK_.call(null,inst_31014);
var state_31128__$1 = state_31128;
if(inst_31016){
var statearr_31196_31260 = state_31128__$1;
(statearr_31196_31260[(1)] = (13));

} else {
var statearr_31197_31261 = state_31128__$1;
(statearr_31197_31261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (18))){
var inst_31046 = (state_31128[(12)]);
var inst_31047 = (state_31128[(16)]);
var inst_31046__$1 = (state_31128[(2)]);
var inst_31047__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31046__$1);
var inst_31048 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31047__$1);
var state_31128__$1 = (function (){var statearr_31198 = state_31128;
(statearr_31198[(12)] = inst_31046__$1);

(statearr_31198[(16)] = inst_31047__$1);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31128__$1,(19),inst_31048);
} else {
if((state_val_31129 === (42))){
var state_31128__$1 = state_31128;
var statearr_31199_31262 = state_31128__$1;
(statearr_31199_31262[(2)] = null);

(statearr_31199_31262[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (37))){
var inst_31095 = (state_31128[(30)]);
var inst_31105 = (state_31128[(2)]);
var inst_31106 = cljs.core.not_empty.call(null,inst_31095);
var state_31128__$1 = (function (){var statearr_31200 = state_31128;
(statearr_31200[(33)] = inst_31105);

return statearr_31200;
})();
if(cljs.core.truth_(inst_31106)){
var statearr_31201_31263 = state_31128__$1;
(statearr_31201_31263[(1)] = (38));

} else {
var statearr_31202_31264 = state_31128__$1;
(statearr_31202_31264[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31129 === (8))){
var inst_31014 = (state_31128[(27)]);
var inst_31001 = (state_31128[(9)]);
var inst_31014__$1 = cljs.core.seq.call(null,inst_31001);
var state_31128__$1 = (function (){var statearr_31203 = state_31128;
(statearr_31203[(27)] = inst_31014__$1);

return statearr_31203;
})();
if(inst_31014__$1){
var statearr_31204_31265 = state_31128__$1;
(statearr_31204_31265[(1)] = (10));

} else {
var statearr_31205_31266 = state_31128__$1;
(statearr_31205_31266[(1)] = (11));

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
});})(c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
;
return ((function (switch__21911__auto__,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto____0 = (function (){
var statearr_31209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31209[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto__);

(statearr_31209[(1)] = (1));

return statearr_31209;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto____1 = (function (state_31128){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_31128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e31210){if((e31210 instanceof Object)){
var ex__21915__auto__ = e31210;
var statearr_31211_31267 = state_31128;
(statearr_31211_31267[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31268 = state_31128;
state_31128 = G__31268;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto__ = function(state_31128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto____1.call(this,state_31128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
})();
var state__21978__auto__ = (function (){var statearr_31212 = f__21977__auto__.call(null);
(statearr_31212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_31212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__,map__30986,map__30986__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__30987,map__30987__$1,msg,files))
);

return c__21976__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31271,link){
var map__31274 = p__31271;
var map__31274__$1 = ((((!((map__31274 == null)))?((((map__31274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31274):map__31274);
var file = cljs.core.get.call(null,map__31274__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31274,map__31274__$1,file){
return (function (p1__31269_SHARP_,p2__31270_SHARP_){
if(cljs.core._EQ_.call(null,p1__31269_SHARP_,p2__31270_SHARP_)){
return p1__31269_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31274,map__31274__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31280){
var map__31281 = p__31280;
var map__31281__$1 = ((((!((map__31281 == null)))?((((map__31281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31281):map__31281);
var match_length = cljs.core.get.call(null,map__31281__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31281__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31276_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31276_SHARP_);
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
var args31283 = [];
var len__19567__auto___31286 = arguments.length;
var i__19568__auto___31287 = (0);
while(true){
if((i__19568__auto___31287 < len__19567__auto___31286)){
args31283.push((arguments[i__19568__auto___31287]));

var G__31288 = (i__19568__auto___31287 + (1));
i__19568__auto___31287 = G__31288;
continue;
} else {
}
break;
}

var G__31285 = args31283.length;
switch (G__31285) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31283.length)].join('')));

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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31290){
var map__31293 = p__31290;
var map__31293__$1 = ((((!((map__31293 == null)))?((((map__31293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31293):map__31293);
var f_data = map__31293__$1;
var file = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31295,files_msg){
var map__31318 = p__31295;
var map__31318__$1 = ((((!((map__31318 == null)))?((((map__31318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31318):map__31318);
var opts = map__31318__$1;
var on_cssload = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31320_31340 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31321_31341 = null;
var count__31322_31342 = (0);
var i__31323_31343 = (0);
while(true){
if((i__31323_31343 < count__31322_31342)){
var f_31344 = cljs.core._nth.call(null,chunk__31321_31341,i__31323_31343);
figwheel.client.file_reloading.reload_css_file.call(null,f_31344);

var G__31345 = seq__31320_31340;
var G__31346 = chunk__31321_31341;
var G__31347 = count__31322_31342;
var G__31348 = (i__31323_31343 + (1));
seq__31320_31340 = G__31345;
chunk__31321_31341 = G__31346;
count__31322_31342 = G__31347;
i__31323_31343 = G__31348;
continue;
} else {
var temp__4425__auto___31349 = cljs.core.seq.call(null,seq__31320_31340);
if(temp__4425__auto___31349){
var seq__31320_31350__$1 = temp__4425__auto___31349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31320_31350__$1)){
var c__19312__auto___31351 = cljs.core.chunk_first.call(null,seq__31320_31350__$1);
var G__31352 = cljs.core.chunk_rest.call(null,seq__31320_31350__$1);
var G__31353 = c__19312__auto___31351;
var G__31354 = cljs.core.count.call(null,c__19312__auto___31351);
var G__31355 = (0);
seq__31320_31340 = G__31352;
chunk__31321_31341 = G__31353;
count__31322_31342 = G__31354;
i__31323_31343 = G__31355;
continue;
} else {
var f_31356 = cljs.core.first.call(null,seq__31320_31350__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31356);

var G__31357 = cljs.core.next.call(null,seq__31320_31350__$1);
var G__31358 = null;
var G__31359 = (0);
var G__31360 = (0);
seq__31320_31340 = G__31357;
chunk__31321_31341 = G__31358;
count__31322_31342 = G__31359;
i__31323_31343 = G__31360;
continue;
}
} else {
}
}
break;
}

var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__,map__31318,map__31318__$1,opts,on_cssload){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__,map__31318,map__31318__$1,opts,on_cssload){
return (function (state_31330){
var state_val_31331 = (state_31330[(1)]);
if((state_val_31331 === (1))){
var inst_31324 = cljs.core.async.timeout.call(null,(100));
var state_31330__$1 = state_31330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31330__$1,(2),inst_31324);
} else {
if((state_val_31331 === (2))){
var inst_31326 = (state_31330[(2)]);
var inst_31327 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31328 = on_cssload.call(null,inst_31327);
var state_31330__$1 = (function (){var statearr_31332 = state_31330;
(statearr_31332[(7)] = inst_31326);

return statearr_31332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31330__$1,inst_31328);
} else {
return null;
}
}
});})(c__21976__auto__,map__31318,map__31318__$1,opts,on_cssload))
;
return ((function (switch__21911__auto__,c__21976__auto__,map__31318,map__31318__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto____0 = (function (){
var statearr_31336 = [null,null,null,null,null,null,null,null];
(statearr_31336[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto__);

(statearr_31336[(1)] = (1));

return statearr_31336;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto____1 = (function (state_31330){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_31330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e31337){if((e31337 instanceof Object)){
var ex__21915__auto__ = e31337;
var statearr_31338_31361 = state_31330;
(statearr_31338_31361[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31362 = state_31330;
state_31330 = G__31362;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto__ = function(state_31330){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto____1.call(this,state_31330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__,map__31318,map__31318__$1,opts,on_cssload))
})();
var state__21978__auto__ = (function (){var statearr_31339 = f__21977__auto__.call(null);
(statearr_31339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_31339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__,map__31318,map__31318__$1,opts,on_cssload))
);

return c__21976__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441976686371