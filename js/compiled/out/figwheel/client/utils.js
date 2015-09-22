// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29505_SHARP_,p2__29504_SHARP_){
return [cljs.core.str(p2__29504_SHARP_)].join('');
}));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__18516__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18516__auto__)){
return (window["CustomEvent"]);
} else {
return and__18516__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj29509 = {"detail":data};
return obj29509;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(){
var args29514 = [];
var len__19567__auto___29520 = arguments.length;
var i__19568__auto___29521 = (0);
while(true){
if((i__19568__auto___29521 < len__19567__auto___29520)){
args29514.push((arguments[i__19568__auto___29521]));

var G__29522 = (i__19568__auto___29521 + (1));
i__19568__auto___29521 = G__29522;
continue;
} else {
}
break;
}

var G__29516 = args29514.length;
switch (G__29516) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29514.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__29517 = cljs.core._EQ_;
var expr__29518 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__29517.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__29518))){
return ((function (pred__29517,expr__29518){
return (function (p1__29510_SHARP_){
return console.warn(p1__29510_SHARP_);
});
;})(pred__29517,expr__29518))
} else {
if(cljs.core.truth_(pred__29517.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__29518))){
return ((function (pred__29517,expr__29518){
return (function (p1__29511_SHARP_){
return console.debug(p1__29511_SHARP_);
});
;})(pred__29517,expr__29518))
} else {
if(cljs.core.truth_(pred__29517.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__29518))){
return ((function (pred__29517,expr__29518){
return (function (p1__29512_SHARP_){
return console.error(p1__29512_SHARP_);
});
;})(pred__29517,expr__29518))
} else {
return ((function (pred__29517,expr__29518){
return (function (p1__29513_SHARP_){
return console.log(p1__29513_SHARP_);
});
;})(pred__29517,expr__29518))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=utils.js.map?rel=1442923853342