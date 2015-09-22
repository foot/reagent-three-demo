// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29526__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29527__i = 0, G__29527__a = new Array(arguments.length -  0);
while (G__29527__i < G__29527__a.length) {G__29527__a[G__29527__i] = arguments[G__29527__i + 0]; ++G__29527__i;}
  args = new cljs.core.IndexedSeq(G__29527__a,0);
} 
return G__29526__delegate.call(this,args);};
G__29526.cljs$lang$maxFixedArity = 0;
G__29526.cljs$lang$applyTo = (function (arglist__29528){
var args = cljs.core.seq(arglist__29528);
return G__29526__delegate(args);
});
G__29526.cljs$core$IFn$_invoke$arity$variadic = G__29526__delegate;
return G__29526;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29529){
var map__29532 = p__29529;
var map__29532__$1 = ((((!((map__29532 == null)))?((((map__29532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29532):map__29532);
var message = cljs.core.get.call(null,map__29532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29532__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18528__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18516__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18516__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18516__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21978__auto___29662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___29662,ch){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___29662,ch){
return (function (state_29636){
var state_val_29637 = (state_29636[(1)]);
if((state_val_29637 === (7))){
var inst_29632 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29638_29663 = state_29636__$1;
(statearr_29638_29663[(2)] = inst_29632);

(statearr_29638_29663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (1))){
var state_29636__$1 = state_29636;
var statearr_29639_29664 = state_29636__$1;
(statearr_29639_29664[(2)] = null);

(statearr_29639_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (4))){
var inst_29600 = (state_29636[(7)]);
var inst_29600__$1 = (state_29636[(2)]);
var state_29636__$1 = (function (){var statearr_29640 = state_29636;
(statearr_29640[(7)] = inst_29600__$1);

return statearr_29640;
})();
if(cljs.core.truth_(inst_29600__$1)){
var statearr_29641_29665 = state_29636__$1;
(statearr_29641_29665[(1)] = (5));

} else {
var statearr_29642_29666 = state_29636__$1;
(statearr_29642_29666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (13))){
var state_29636__$1 = state_29636;
var statearr_29643_29667 = state_29636__$1;
(statearr_29643_29667[(2)] = null);

(statearr_29643_29667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (6))){
var state_29636__$1 = state_29636;
var statearr_29644_29668 = state_29636__$1;
(statearr_29644_29668[(2)] = null);

(statearr_29644_29668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (3))){
var inst_29634 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29636__$1,inst_29634);
} else {
if((state_val_29637 === (12))){
var inst_29607 = (state_29636[(8)]);
var inst_29620 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29607);
var inst_29621 = cljs.core.first.call(null,inst_29620);
var inst_29622 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29621);
var inst_29623 = console.warn("Figwheel: Not loading code with warnings - ",inst_29622);
var state_29636__$1 = state_29636;
var statearr_29645_29669 = state_29636__$1;
(statearr_29645_29669[(2)] = inst_29623);

(statearr_29645_29669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (2))){
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29636__$1,(4),ch);
} else {
if((state_val_29637 === (11))){
var inst_29616 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29646_29670 = state_29636__$1;
(statearr_29646_29670[(2)] = inst_29616);

(statearr_29646_29670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (9))){
var inst_29606 = (state_29636[(9)]);
var inst_29618 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29606,opts);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29618)){
var statearr_29647_29671 = state_29636__$1;
(statearr_29647_29671[(1)] = (12));

} else {
var statearr_29648_29672 = state_29636__$1;
(statearr_29648_29672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (5))){
var inst_29600 = (state_29636[(7)]);
var inst_29606 = (state_29636[(9)]);
var inst_29602 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29603 = (new cljs.core.PersistentArrayMap(null,2,inst_29602,null));
var inst_29604 = (new cljs.core.PersistentHashSet(null,inst_29603,null));
var inst_29605 = figwheel.client.focus_msgs.call(null,inst_29604,inst_29600);
var inst_29606__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29605);
var inst_29607 = cljs.core.first.call(null,inst_29605);
var inst_29608 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29606__$1,opts);
var state_29636__$1 = (function (){var statearr_29649 = state_29636;
(statearr_29649[(9)] = inst_29606__$1);

(statearr_29649[(8)] = inst_29607);

return statearr_29649;
})();
if(cljs.core.truth_(inst_29608)){
var statearr_29650_29673 = state_29636__$1;
(statearr_29650_29673[(1)] = (8));

} else {
var statearr_29651_29674 = state_29636__$1;
(statearr_29651_29674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (14))){
var inst_29626 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29652_29675 = state_29636__$1;
(statearr_29652_29675[(2)] = inst_29626);

(statearr_29652_29675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (10))){
var inst_29628 = (state_29636[(2)]);
var state_29636__$1 = (function (){var statearr_29653 = state_29636;
(statearr_29653[(10)] = inst_29628);

return statearr_29653;
})();
var statearr_29654_29676 = state_29636__$1;
(statearr_29654_29676[(2)] = null);

(statearr_29654_29676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (8))){
var inst_29607 = (state_29636[(8)]);
var inst_29610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29611 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29607);
var inst_29612 = cljs.core.async.timeout.call(null,(1000));
var inst_29613 = [inst_29611,inst_29612];
var inst_29614 = (new cljs.core.PersistentVector(null,2,(5),inst_29610,inst_29613,null));
var state_29636__$1 = state_29636;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29636__$1,(11),inst_29614);
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
});})(c__21978__auto___29662,ch))
;
return ((function (switch__21913__auto__,c__21978__auto___29662,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21914__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21914__auto____0 = (function (){
var statearr_29658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29658[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21914__auto__);

(statearr_29658[(1)] = (1));

return statearr_29658;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21914__auto____1 = (function (state_29636){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_29636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e29659){if((e29659 instanceof Object)){
var ex__21917__auto__ = e29659;
var statearr_29660_29677 = state_29636;
(statearr_29660_29677[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29678 = state_29636;
state_29636 = G__29678;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21914__auto__ = function(state_29636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21914__auto____1.call(this,state_29636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21914__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21914__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___29662,ch))
})();
var state__21980__auto__ = (function (){var statearr_29661 = f__21979__auto__.call(null);
(statearr_29661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___29662);

return statearr_29661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___29662,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29679_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29679_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29686 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29686){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29685 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29684,_STAR_print_newline_STAR_29685,base_path_29686){
return (function() { 
var G__29687__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29688__i = 0, G__29688__a = new Array(arguments.length -  0);
while (G__29688__i < G__29688__a.length) {G__29688__a[G__29688__i] = arguments[G__29688__i + 0]; ++G__29688__i;}
  args = new cljs.core.IndexedSeq(G__29688__a,0);
} 
return G__29687__delegate.call(this,args);};
G__29687.cljs$lang$maxFixedArity = 0;
G__29687.cljs$lang$applyTo = (function (arglist__29689){
var args = cljs.core.seq(arglist__29689);
return G__29687__delegate(args);
});
G__29687.cljs$core$IFn$_invoke$arity$variadic = G__29687__delegate;
return G__29687;
})()
;})(_STAR_print_fn_STAR_29684,_STAR_print_newline_STAR_29685,base_path_29686))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29685;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29684;
}}catch (e29683){if((e29683 instanceof Error)){
var e = e29683;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29686], null));
} else {
var e = e29683;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29686))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29690){
var map__29697 = p__29690;
var map__29697__$1 = ((((!((map__29697 == null)))?((((map__29697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29697):map__29697);
var opts = map__29697__$1;
var build_id = cljs.core.get.call(null,map__29697__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29697,map__29697__$1,opts,build_id){
return (function (p__29699){
var vec__29700 = p__29699;
var map__29701 = cljs.core.nth.call(null,vec__29700,(0),null);
var map__29701__$1 = ((((!((map__29701 == null)))?((((map__29701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701):map__29701);
var msg = map__29701__$1;
var msg_name = cljs.core.get.call(null,map__29701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29700,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29700,map__29701,map__29701__$1,msg,msg_name,_,map__29697,map__29697__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29700,map__29701,map__29701__$1,msg,msg_name,_,map__29697,map__29697__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29697,map__29697__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29707){
var vec__29708 = p__29707;
var map__29709 = cljs.core.nth.call(null,vec__29708,(0),null);
var map__29709__$1 = ((((!((map__29709 == null)))?((((map__29709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29709):map__29709);
var msg = map__29709__$1;
var msg_name = cljs.core.get.call(null,map__29709__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29708,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29711){
var map__29721 = p__29711;
var map__29721__$1 = ((((!((map__29721 == null)))?((((map__29721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29721):map__29721);
var on_compile_warning = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29721__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29721,map__29721__$1,on_compile_warning,on_compile_fail){
return (function (p__29723){
var vec__29724 = p__29723;
var map__29725 = cljs.core.nth.call(null,vec__29724,(0),null);
var map__29725__$1 = ((((!((map__29725 == null)))?((((map__29725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29725):map__29725);
var msg = map__29725__$1;
var msg_name = cljs.core.get.call(null,map__29725__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29724,(1));
var pred__29727 = cljs.core._EQ_;
var expr__29728 = msg_name;
if(cljs.core.truth_(pred__29727.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29728))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29727.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29728))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29721,map__29721__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__,msg_hist,msg_names,msg){
return (function (state_29929){
var state_val_29930 = (state_29929[(1)]);
if((state_val_29930 === (7))){
var inst_29863 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29931_29972 = state_29929__$1;
(statearr_29931_29972[(2)] = inst_29863);

(statearr_29931_29972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (20))){
var inst_29891 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29891)){
var statearr_29932_29973 = state_29929__$1;
(statearr_29932_29973[(1)] = (22));

} else {
var statearr_29933_29974 = state_29929__$1;
(statearr_29933_29974[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (27))){
var inst_29903 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29904 = figwheel.client.heads_up.display_warning.call(null,inst_29903);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(30),inst_29904);
} else {
if((state_val_29930 === (1))){
var inst_29851 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29851)){
var statearr_29934_29975 = state_29929__$1;
(statearr_29934_29975[(1)] = (2));

} else {
var statearr_29935_29976 = state_29929__$1;
(statearr_29935_29976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (24))){
var inst_29919 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29936_29977 = state_29929__$1;
(statearr_29936_29977[(2)] = inst_29919);

(statearr_29936_29977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (4))){
var inst_29927 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29929__$1,inst_29927);
} else {
if((state_val_29930 === (15))){
var inst_29879 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29880 = figwheel.client.format_messages.call(null,inst_29879);
var inst_29881 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29882 = figwheel.client.heads_up.display_error.call(null,inst_29880,inst_29881);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(18),inst_29882);
} else {
if((state_val_29930 === (21))){
var inst_29921 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29937_29978 = state_29929__$1;
(statearr_29937_29978[(2)] = inst_29921);

(statearr_29937_29978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (31))){
var inst_29910 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(34),inst_29910);
} else {
if((state_val_29930 === (32))){
var state_29929__$1 = state_29929;
var statearr_29938_29979 = state_29929__$1;
(statearr_29938_29979[(2)] = null);

(statearr_29938_29979[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (33))){
var inst_29915 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29939_29980 = state_29929__$1;
(statearr_29939_29980[(2)] = inst_29915);

(statearr_29939_29980[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (13))){
var inst_29869 = (state_29929[(2)]);
var inst_29870 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29871 = figwheel.client.format_messages.call(null,inst_29870);
var inst_29872 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29873 = figwheel.client.heads_up.display_error.call(null,inst_29871,inst_29872);
var state_29929__$1 = (function (){var statearr_29940 = state_29929;
(statearr_29940[(7)] = inst_29869);

return statearr_29940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(14),inst_29873);
} else {
if((state_val_29930 === (22))){
var inst_29893 = figwheel.client.heads_up.clear.call(null);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(25),inst_29893);
} else {
if((state_val_29930 === (29))){
var inst_29917 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29941_29981 = state_29929__$1;
(statearr_29941_29981[(2)] = inst_29917);

(statearr_29941_29981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (6))){
var inst_29859 = figwheel.client.heads_up.clear.call(null);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(9),inst_29859);
} else {
if((state_val_29930 === (28))){
var inst_29908 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29908)){
var statearr_29942_29982 = state_29929__$1;
(statearr_29942_29982[(1)] = (31));

} else {
var statearr_29943_29983 = state_29929__$1;
(statearr_29943_29983[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (25))){
var inst_29895 = (state_29929[(2)]);
var inst_29896 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29897 = figwheel.client.heads_up.display_warning.call(null,inst_29896);
var state_29929__$1 = (function (){var statearr_29944 = state_29929;
(statearr_29944[(8)] = inst_29895);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(26),inst_29897);
} else {
if((state_val_29930 === (34))){
var inst_29912 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29945_29984 = state_29929__$1;
(statearr_29945_29984[(2)] = inst_29912);

(statearr_29945_29984[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (17))){
var inst_29923 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29946_29985 = state_29929__$1;
(statearr_29946_29985[(2)] = inst_29923);

(statearr_29946_29985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (3))){
var inst_29865 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29865)){
var statearr_29947_29986 = state_29929__$1;
(statearr_29947_29986[(1)] = (10));

} else {
var statearr_29948_29987 = state_29929__$1;
(statearr_29948_29987[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (12))){
var inst_29925 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29949_29988 = state_29929__$1;
(statearr_29949_29988[(2)] = inst_29925);

(statearr_29949_29988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (2))){
var inst_29853 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29853)){
var statearr_29950_29989 = state_29929__$1;
(statearr_29950_29989[(1)] = (5));

} else {
var statearr_29951_29990 = state_29929__$1;
(statearr_29951_29990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (23))){
var inst_29901 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29901)){
var statearr_29952_29991 = state_29929__$1;
(statearr_29952_29991[(1)] = (27));

} else {
var statearr_29953_29992 = state_29929__$1;
(statearr_29953_29992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (19))){
var inst_29888 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29889 = figwheel.client.heads_up.append_message.call(null,inst_29888);
var state_29929__$1 = state_29929;
var statearr_29954_29993 = state_29929__$1;
(statearr_29954_29993[(2)] = inst_29889);

(statearr_29954_29993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (11))){
var inst_29877 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29877)){
var statearr_29955_29994 = state_29929__$1;
(statearr_29955_29994[(1)] = (15));

} else {
var statearr_29956_29995 = state_29929__$1;
(statearr_29956_29995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (9))){
var inst_29861 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29957_29996 = state_29929__$1;
(statearr_29957_29996[(2)] = inst_29861);

(statearr_29957_29996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (5))){
var inst_29855 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(8),inst_29855);
} else {
if((state_val_29930 === (14))){
var inst_29875 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29958_29997 = state_29929__$1;
(statearr_29958_29997[(2)] = inst_29875);

(statearr_29958_29997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (26))){
var inst_29899 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29959_29998 = state_29929__$1;
(statearr_29959_29998[(2)] = inst_29899);

(statearr_29959_29998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (16))){
var inst_29886 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29929__$1 = state_29929;
if(cljs.core.truth_(inst_29886)){
var statearr_29960_29999 = state_29929__$1;
(statearr_29960_29999[(1)] = (19));

} else {
var statearr_29961_30000 = state_29929__$1;
(statearr_29961_30000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (30))){
var inst_29906 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29962_30001 = state_29929__$1;
(statearr_29962_30001[(2)] = inst_29906);

(statearr_29962_30001[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (10))){
var inst_29867 = figwheel.client.heads_up.clear.call(null);
var state_29929__$1 = state_29929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29929__$1,(13),inst_29867);
} else {
if((state_val_29930 === (18))){
var inst_29884 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29963_30002 = state_29929__$1;
(statearr_29963_30002[(2)] = inst_29884);

(statearr_29963_30002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29930 === (8))){
var inst_29857 = (state_29929[(2)]);
var state_29929__$1 = state_29929;
var statearr_29964_30003 = state_29929__$1;
(statearr_29964_30003[(2)] = inst_29857);

(statearr_29964_30003[(1)] = (7));


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
});})(c__21978__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21913__auto__,c__21978__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto____0 = (function (){
var statearr_29968 = [null,null,null,null,null,null,null,null,null];
(statearr_29968[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto__);

(statearr_29968[(1)] = (1));

return statearr_29968;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto____1 = (function (state_29929){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_29929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e29969){if((e29969 instanceof Object)){
var ex__21917__auto__ = e29969;
var statearr_29970_30004 = state_29929;
(statearr_29970_30004[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30005 = state_29929;
state_29929 = G__30005;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto__ = function(state_29929){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto____1.call(this,state_29929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__,msg_hist,msg_names,msg))
})();
var state__21980__auto__ = (function (){var statearr_29971 = f__21979__auto__.call(null);
(statearr_29971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_29971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__,msg_hist,msg_names,msg))
);

return c__21978__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21978__auto___30068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto___30068,ch){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto___30068,ch){
return (function (state_30051){
var state_val_30052 = (state_30051[(1)]);
if((state_val_30052 === (1))){
var state_30051__$1 = state_30051;
var statearr_30053_30069 = state_30051__$1;
(statearr_30053_30069[(2)] = null);

(statearr_30053_30069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (2))){
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30051__$1,(4),ch);
} else {
if((state_val_30052 === (3))){
var inst_30049 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30051__$1,inst_30049);
} else {
if((state_val_30052 === (4))){
var inst_30039 = (state_30051[(7)]);
var inst_30039__$1 = (state_30051[(2)]);
var state_30051__$1 = (function (){var statearr_30054 = state_30051;
(statearr_30054[(7)] = inst_30039__$1);

return statearr_30054;
})();
if(cljs.core.truth_(inst_30039__$1)){
var statearr_30055_30070 = state_30051__$1;
(statearr_30055_30070[(1)] = (5));

} else {
var statearr_30056_30071 = state_30051__$1;
(statearr_30056_30071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (5))){
var inst_30039 = (state_30051[(7)]);
var inst_30041 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30039);
var state_30051__$1 = state_30051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30051__$1,(8),inst_30041);
} else {
if((state_val_30052 === (6))){
var state_30051__$1 = state_30051;
var statearr_30057_30072 = state_30051__$1;
(statearr_30057_30072[(2)] = null);

(statearr_30057_30072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (7))){
var inst_30047 = (state_30051[(2)]);
var state_30051__$1 = state_30051;
var statearr_30058_30073 = state_30051__$1;
(statearr_30058_30073[(2)] = inst_30047);

(statearr_30058_30073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30052 === (8))){
var inst_30043 = (state_30051[(2)]);
var state_30051__$1 = (function (){var statearr_30059 = state_30051;
(statearr_30059[(8)] = inst_30043);

return statearr_30059;
})();
var statearr_30060_30074 = state_30051__$1;
(statearr_30060_30074[(2)] = null);

(statearr_30060_30074[(1)] = (2));


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
});})(c__21978__auto___30068,ch))
;
return ((function (switch__21913__auto__,c__21978__auto___30068,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21914__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21914__auto____0 = (function (){
var statearr_30064 = [null,null,null,null,null,null,null,null,null];
(statearr_30064[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21914__auto__);

(statearr_30064[(1)] = (1));

return statearr_30064;
});
var figwheel$client$heads_up_plugin_$_state_machine__21914__auto____1 = (function (state_30051){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_30051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e30065){if((e30065 instanceof Object)){
var ex__21917__auto__ = e30065;
var statearr_30066_30075 = state_30051;
(statearr_30066_30075[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30076 = state_30051;
state_30051 = G__30076;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21914__auto__ = function(state_30051){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21914__auto____1.call(this,state_30051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21914__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21914__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto___30068,ch))
})();
var state__21980__auto__ = (function (){var statearr_30067 = f__21979__auto__.call(null);
(statearr_30067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto___30068);

return statearr_30067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto___30068,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__){
return (function (state_30097){
var state_val_30098 = (state_30097[(1)]);
if((state_val_30098 === (1))){
var inst_30092 = cljs.core.async.timeout.call(null,(3000));
var state_30097__$1 = state_30097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30097__$1,(2),inst_30092);
} else {
if((state_val_30098 === (2))){
var inst_30094 = (state_30097[(2)]);
var inst_30095 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30097__$1 = (function (){var statearr_30099 = state_30097;
(statearr_30099[(7)] = inst_30094);

return statearr_30099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30097__$1,inst_30095);
} else {
return null;
}
}
});})(c__21978__auto__))
;
return ((function (switch__21913__auto__,c__21978__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21914__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21914__auto____0 = (function (){
var statearr_30103 = [null,null,null,null,null,null,null,null];
(statearr_30103[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21914__auto__);

(statearr_30103[(1)] = (1));

return statearr_30103;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21914__auto____1 = (function (state_30097){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_30097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e30104){if((e30104 instanceof Object)){
var ex__21917__auto__ = e30104;
var statearr_30105_30107 = state_30097;
(statearr_30105_30107[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30108 = state_30097;
state_30097 = G__30108;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21914__auto__ = function(state_30097){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21914__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21914__auto____1.call(this,state_30097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21914__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21914__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__))
})();
var state__21980__auto__ = (function (){var statearr_30106 = f__21979__auto__.call(null);
(statearr_30106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_30106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__))
);

return c__21978__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30109){
var map__30116 = p__30109;
var map__30116__$1 = ((((!((map__30116 == null)))?((((map__30116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var ed = map__30116__$1;
var formatted_exception = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30118_30122 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30119_30123 = null;
var count__30120_30124 = (0);
var i__30121_30125 = (0);
while(true){
if((i__30121_30125 < count__30120_30124)){
var msg_30126 = cljs.core._nth.call(null,chunk__30119_30123,i__30121_30125);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30126);

var G__30127 = seq__30118_30122;
var G__30128 = chunk__30119_30123;
var G__30129 = count__30120_30124;
var G__30130 = (i__30121_30125 + (1));
seq__30118_30122 = G__30127;
chunk__30119_30123 = G__30128;
count__30120_30124 = G__30129;
i__30121_30125 = G__30130;
continue;
} else {
var temp__4425__auto___30131 = cljs.core.seq.call(null,seq__30118_30122);
if(temp__4425__auto___30131){
var seq__30118_30132__$1 = temp__4425__auto___30131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30118_30132__$1)){
var c__19312__auto___30133 = cljs.core.chunk_first.call(null,seq__30118_30132__$1);
var G__30134 = cljs.core.chunk_rest.call(null,seq__30118_30132__$1);
var G__30135 = c__19312__auto___30133;
var G__30136 = cljs.core.count.call(null,c__19312__auto___30133);
var G__30137 = (0);
seq__30118_30122 = G__30134;
chunk__30119_30123 = G__30135;
count__30120_30124 = G__30136;
i__30121_30125 = G__30137;
continue;
} else {
var msg_30138 = cljs.core.first.call(null,seq__30118_30132__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30138);

var G__30139 = cljs.core.next.call(null,seq__30118_30132__$1);
var G__30140 = null;
var G__30141 = (0);
var G__30142 = (0);
seq__30118_30122 = G__30139;
chunk__30119_30123 = G__30140;
count__30120_30124 = G__30141;
i__30121_30125 = G__30142;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30143){
var map__30146 = p__30143;
var map__30146__$1 = ((((!((map__30146 == null)))?((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30146):map__30146);
var w = map__30146__$1;
var message = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18516__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18516__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18516__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30154 = cljs.core.seq.call(null,plugins);
var chunk__30155 = null;
var count__30156 = (0);
var i__30157 = (0);
while(true){
if((i__30157 < count__30156)){
var vec__30158 = cljs.core._nth.call(null,chunk__30155,i__30157);
var k = cljs.core.nth.call(null,vec__30158,(0),null);
var plugin = cljs.core.nth.call(null,vec__30158,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30160 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30154,chunk__30155,count__30156,i__30157,pl_30160,vec__30158,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30160.call(null,msg_hist);
});})(seq__30154,chunk__30155,count__30156,i__30157,pl_30160,vec__30158,k,plugin))
);
} else {
}

var G__30161 = seq__30154;
var G__30162 = chunk__30155;
var G__30163 = count__30156;
var G__30164 = (i__30157 + (1));
seq__30154 = G__30161;
chunk__30155 = G__30162;
count__30156 = G__30163;
i__30157 = G__30164;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30154);
if(temp__4425__auto__){
var seq__30154__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30154__$1)){
var c__19312__auto__ = cljs.core.chunk_first.call(null,seq__30154__$1);
var G__30165 = cljs.core.chunk_rest.call(null,seq__30154__$1);
var G__30166 = c__19312__auto__;
var G__30167 = cljs.core.count.call(null,c__19312__auto__);
var G__30168 = (0);
seq__30154 = G__30165;
chunk__30155 = G__30166;
count__30156 = G__30167;
i__30157 = G__30168;
continue;
} else {
var vec__30159 = cljs.core.first.call(null,seq__30154__$1);
var k = cljs.core.nth.call(null,vec__30159,(0),null);
var plugin = cljs.core.nth.call(null,vec__30159,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30169 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30154,chunk__30155,count__30156,i__30157,pl_30169,vec__30159,k,plugin,seq__30154__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30169.call(null,msg_hist);
});})(seq__30154,chunk__30155,count__30156,i__30157,pl_30169,vec__30159,k,plugin,seq__30154__$1,temp__4425__auto__))
);
} else {
}

var G__30170 = cljs.core.next.call(null,seq__30154__$1);
var G__30171 = null;
var G__30172 = (0);
var G__30173 = (0);
seq__30154 = G__30170;
chunk__30155 = G__30171;
count__30156 = G__30172;
i__30157 = G__30173;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args30174 = [];
var len__19567__auto___30177 = arguments.length;
var i__19568__auto___30178 = (0);
while(true){
if((i__19568__auto___30178 < len__19567__auto___30177)){
args30174.push((arguments[i__19568__auto___30178]));

var G__30179 = (i__19568__auto___30178 + (1));
i__19568__auto___30178 = G__30179;
continue;
} else {
}
break;
}

var G__30176 = args30174.length;
switch (G__30176) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30174.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__19574__auto__ = [];
var len__19567__auto___30185 = arguments.length;
var i__19568__auto___30186 = (0);
while(true){
if((i__19568__auto___30186 < len__19567__auto___30185)){
args__19574__auto__.push((arguments[i__19568__auto___30186]));

var G__30187 = (i__19568__auto___30186 + (1));
i__19568__auto___30186 = G__30187;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30182){
var map__30183 = p__30182;
var map__30183__$1 = ((((!((map__30183 == null)))?((((map__30183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30183):map__30183);
var opts = map__30183__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30181){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30181));
});

//# sourceMappingURL=client.js.map?rel=1442923853810