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
var G__29511__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29512__i = 0, G__29512__a = new Array(arguments.length -  0);
while (G__29512__i < G__29512__a.length) {G__29512__a[G__29512__i] = arguments[G__29512__i + 0]; ++G__29512__i;}
  args = new cljs.core.IndexedSeq(G__29512__a,0);
} 
return G__29511__delegate.call(this,args);};
G__29511.cljs$lang$maxFixedArity = 0;
G__29511.cljs$lang$applyTo = (function (arglist__29513){
var args = cljs.core.seq(arglist__29513);
return G__29511__delegate(args);
});
G__29511.cljs$core$IFn$_invoke$arity$variadic = G__29511__delegate;
return G__29511;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29514){
var map__29517 = p__29514;
var map__29517__$1 = ((((!((map__29517 == null)))?((((map__29517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29517):map__29517);
var message = cljs.core.get.call(null,map__29517__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29517__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21976__auto___29647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___29647,ch){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___29647,ch){
return (function (state_29621){
var state_val_29622 = (state_29621[(1)]);
if((state_val_29622 === (7))){
var inst_29617 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29623_29648 = state_29621__$1;
(statearr_29623_29648[(2)] = inst_29617);

(statearr_29623_29648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (1))){
var state_29621__$1 = state_29621;
var statearr_29624_29649 = state_29621__$1;
(statearr_29624_29649[(2)] = null);

(statearr_29624_29649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (4))){
var inst_29585 = (state_29621[(7)]);
var inst_29585__$1 = (state_29621[(2)]);
var state_29621__$1 = (function (){var statearr_29625 = state_29621;
(statearr_29625[(7)] = inst_29585__$1);

return statearr_29625;
})();
if(cljs.core.truth_(inst_29585__$1)){
var statearr_29626_29650 = state_29621__$1;
(statearr_29626_29650[(1)] = (5));

} else {
var statearr_29627_29651 = state_29621__$1;
(statearr_29627_29651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (13))){
var state_29621__$1 = state_29621;
var statearr_29628_29652 = state_29621__$1;
(statearr_29628_29652[(2)] = null);

(statearr_29628_29652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (6))){
var state_29621__$1 = state_29621;
var statearr_29629_29653 = state_29621__$1;
(statearr_29629_29653[(2)] = null);

(statearr_29629_29653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (3))){
var inst_29619 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29621__$1,inst_29619);
} else {
if((state_val_29622 === (12))){
var inst_29592 = (state_29621[(8)]);
var inst_29605 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29592);
var inst_29606 = cljs.core.first.call(null,inst_29605);
var inst_29607 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29606);
var inst_29608 = console.warn("Figwheel: Not loading code with warnings - ",inst_29607);
var state_29621__$1 = state_29621;
var statearr_29630_29654 = state_29621__$1;
(statearr_29630_29654[(2)] = inst_29608);

(statearr_29630_29654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (2))){
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29621__$1,(4),ch);
} else {
if((state_val_29622 === (11))){
var inst_29601 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29631_29655 = state_29621__$1;
(statearr_29631_29655[(2)] = inst_29601);

(statearr_29631_29655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (9))){
var inst_29591 = (state_29621[(9)]);
var inst_29603 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29591,opts);
var state_29621__$1 = state_29621;
if(cljs.core.truth_(inst_29603)){
var statearr_29632_29656 = state_29621__$1;
(statearr_29632_29656[(1)] = (12));

} else {
var statearr_29633_29657 = state_29621__$1;
(statearr_29633_29657[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (5))){
var inst_29585 = (state_29621[(7)]);
var inst_29591 = (state_29621[(9)]);
var inst_29587 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29588 = (new cljs.core.PersistentArrayMap(null,2,inst_29587,null));
var inst_29589 = (new cljs.core.PersistentHashSet(null,inst_29588,null));
var inst_29590 = figwheel.client.focus_msgs.call(null,inst_29589,inst_29585);
var inst_29591__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29590);
var inst_29592 = cljs.core.first.call(null,inst_29590);
var inst_29593 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29591__$1,opts);
var state_29621__$1 = (function (){var statearr_29634 = state_29621;
(statearr_29634[(8)] = inst_29592);

(statearr_29634[(9)] = inst_29591__$1);

return statearr_29634;
})();
if(cljs.core.truth_(inst_29593)){
var statearr_29635_29658 = state_29621__$1;
(statearr_29635_29658[(1)] = (8));

} else {
var statearr_29636_29659 = state_29621__$1;
(statearr_29636_29659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (14))){
var inst_29611 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29637_29660 = state_29621__$1;
(statearr_29637_29660[(2)] = inst_29611);

(statearr_29637_29660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (10))){
var inst_29613 = (state_29621[(2)]);
var state_29621__$1 = (function (){var statearr_29638 = state_29621;
(statearr_29638[(10)] = inst_29613);

return statearr_29638;
})();
var statearr_29639_29661 = state_29621__$1;
(statearr_29639_29661[(2)] = null);

(statearr_29639_29661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (8))){
var inst_29592 = (state_29621[(8)]);
var inst_29595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29596 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29592);
var inst_29597 = cljs.core.async.timeout.call(null,(1000));
var inst_29598 = [inst_29596,inst_29597];
var inst_29599 = (new cljs.core.PersistentVector(null,2,(5),inst_29595,inst_29598,null));
var state_29621__$1 = state_29621;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29621__$1,(11),inst_29599);
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
});})(c__21976__auto___29647,ch))
;
return ((function (switch__21911__auto__,c__21976__auto___29647,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21912__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21912__auto____0 = (function (){
var statearr_29643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29643[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21912__auto__);

(statearr_29643[(1)] = (1));

return statearr_29643;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21912__auto____1 = (function (state_29621){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_29621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e29644){if((e29644 instanceof Object)){
var ex__21915__auto__ = e29644;
var statearr_29645_29662 = state_29621;
(statearr_29645_29662[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29663 = state_29621;
state_29621 = G__29663;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21912__auto__ = function(state_29621){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21912__auto____1.call(this,state_29621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21912__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21912__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___29647,ch))
})();
var state__21978__auto__ = (function (){var statearr_29646 = f__21977__auto__.call(null);
(statearr_29646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___29647);

return statearr_29646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___29647,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29664_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29664_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29671 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29671){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29669 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29670 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29669,_STAR_print_newline_STAR_29670,base_path_29671){
return (function() { 
var G__29672__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29673__i = 0, G__29673__a = new Array(arguments.length -  0);
while (G__29673__i < G__29673__a.length) {G__29673__a[G__29673__i] = arguments[G__29673__i + 0]; ++G__29673__i;}
  args = new cljs.core.IndexedSeq(G__29673__a,0);
} 
return G__29672__delegate.call(this,args);};
G__29672.cljs$lang$maxFixedArity = 0;
G__29672.cljs$lang$applyTo = (function (arglist__29674){
var args = cljs.core.seq(arglist__29674);
return G__29672__delegate(args);
});
G__29672.cljs$core$IFn$_invoke$arity$variadic = G__29672__delegate;
return G__29672;
})()
;})(_STAR_print_fn_STAR_29669,_STAR_print_newline_STAR_29670,base_path_29671))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29670;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29669;
}}catch (e29668){if((e29668 instanceof Error)){
var e = e29668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29671], null));
} else {
var e = e29668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29671))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29675){
var map__29682 = p__29675;
var map__29682__$1 = ((((!((map__29682 == null)))?((((map__29682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29682):map__29682);
var opts = map__29682__$1;
var build_id = cljs.core.get.call(null,map__29682__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29682,map__29682__$1,opts,build_id){
return (function (p__29684){
var vec__29685 = p__29684;
var map__29686 = cljs.core.nth.call(null,vec__29685,(0),null);
var map__29686__$1 = ((((!((map__29686 == null)))?((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var msg = map__29686__$1;
var msg_name = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29685,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29685,map__29686,map__29686__$1,msg,msg_name,_,map__29682,map__29682__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29685,map__29686,map__29686__$1,msg,msg_name,_,map__29682,map__29682__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29682,map__29682__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29692){
var vec__29693 = p__29692;
var map__29694 = cljs.core.nth.call(null,vec__29693,(0),null);
var map__29694__$1 = ((((!((map__29694 == null)))?((((map__29694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);
var msg = map__29694__$1;
var msg_name = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29693,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29696){
var map__29706 = p__29696;
var map__29706__$1 = ((((!((map__29706 == null)))?((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var on_compile_warning = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29706,map__29706__$1,on_compile_warning,on_compile_fail){
return (function (p__29708){
var vec__29709 = p__29708;
var map__29710 = cljs.core.nth.call(null,vec__29709,(0),null);
var map__29710__$1 = ((((!((map__29710 == null)))?((((map__29710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29710):map__29710);
var msg = map__29710__$1;
var msg_name = cljs.core.get.call(null,map__29710__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29709,(1));
var pred__29712 = cljs.core._EQ_;
var expr__29713 = msg_name;
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29713))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29712.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29713))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29706,map__29706__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__,msg_hist,msg_names,msg){
return (function (state_29914){
var state_val_29915 = (state_29914[(1)]);
if((state_val_29915 === (7))){
var inst_29848 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29916_29957 = state_29914__$1;
(statearr_29916_29957[(2)] = inst_29848);

(statearr_29916_29957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (20))){
var inst_29876 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29876)){
var statearr_29917_29958 = state_29914__$1;
(statearr_29917_29958[(1)] = (22));

} else {
var statearr_29918_29959 = state_29914__$1;
(statearr_29918_29959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (27))){
var inst_29888 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29889 = figwheel.client.heads_up.display_warning.call(null,inst_29888);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(30),inst_29889);
} else {
if((state_val_29915 === (1))){
var inst_29836 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29836)){
var statearr_29919_29960 = state_29914__$1;
(statearr_29919_29960[(1)] = (2));

} else {
var statearr_29920_29961 = state_29914__$1;
(statearr_29920_29961[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (24))){
var inst_29904 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29921_29962 = state_29914__$1;
(statearr_29921_29962[(2)] = inst_29904);

(statearr_29921_29962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (4))){
var inst_29912 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29914__$1,inst_29912);
} else {
if((state_val_29915 === (15))){
var inst_29864 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29865 = figwheel.client.format_messages.call(null,inst_29864);
var inst_29866 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29867 = figwheel.client.heads_up.display_error.call(null,inst_29865,inst_29866);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(18),inst_29867);
} else {
if((state_val_29915 === (21))){
var inst_29906 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29922_29963 = state_29914__$1;
(statearr_29922_29963[(2)] = inst_29906);

(statearr_29922_29963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (31))){
var inst_29895 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(34),inst_29895);
} else {
if((state_val_29915 === (32))){
var state_29914__$1 = state_29914;
var statearr_29923_29964 = state_29914__$1;
(statearr_29923_29964[(2)] = null);

(statearr_29923_29964[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (33))){
var inst_29900 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29924_29965 = state_29914__$1;
(statearr_29924_29965[(2)] = inst_29900);

(statearr_29924_29965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (13))){
var inst_29854 = (state_29914[(2)]);
var inst_29855 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29856 = figwheel.client.format_messages.call(null,inst_29855);
var inst_29857 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29858 = figwheel.client.heads_up.display_error.call(null,inst_29856,inst_29857);
var state_29914__$1 = (function (){var statearr_29925 = state_29914;
(statearr_29925[(7)] = inst_29854);

return statearr_29925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(14),inst_29858);
} else {
if((state_val_29915 === (22))){
var inst_29878 = figwheel.client.heads_up.clear.call(null);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(25),inst_29878);
} else {
if((state_val_29915 === (29))){
var inst_29902 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29926_29966 = state_29914__$1;
(statearr_29926_29966[(2)] = inst_29902);

(statearr_29926_29966[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (6))){
var inst_29844 = figwheel.client.heads_up.clear.call(null);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(9),inst_29844);
} else {
if((state_val_29915 === (28))){
var inst_29893 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29893)){
var statearr_29927_29967 = state_29914__$1;
(statearr_29927_29967[(1)] = (31));

} else {
var statearr_29928_29968 = state_29914__$1;
(statearr_29928_29968[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (25))){
var inst_29880 = (state_29914[(2)]);
var inst_29881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29882 = figwheel.client.heads_up.display_warning.call(null,inst_29881);
var state_29914__$1 = (function (){var statearr_29929 = state_29914;
(statearr_29929[(8)] = inst_29880);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(26),inst_29882);
} else {
if((state_val_29915 === (34))){
var inst_29897 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29930_29969 = state_29914__$1;
(statearr_29930_29969[(2)] = inst_29897);

(statearr_29930_29969[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (17))){
var inst_29908 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29931_29970 = state_29914__$1;
(statearr_29931_29970[(2)] = inst_29908);

(statearr_29931_29970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (3))){
var inst_29850 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29850)){
var statearr_29932_29971 = state_29914__$1;
(statearr_29932_29971[(1)] = (10));

} else {
var statearr_29933_29972 = state_29914__$1;
(statearr_29933_29972[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (12))){
var inst_29910 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29934_29973 = state_29914__$1;
(statearr_29934_29973[(2)] = inst_29910);

(statearr_29934_29973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (2))){
var inst_29838 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29838)){
var statearr_29935_29974 = state_29914__$1;
(statearr_29935_29974[(1)] = (5));

} else {
var statearr_29936_29975 = state_29914__$1;
(statearr_29936_29975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (23))){
var inst_29886 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29886)){
var statearr_29937_29976 = state_29914__$1;
(statearr_29937_29976[(1)] = (27));

} else {
var statearr_29938_29977 = state_29914__$1;
(statearr_29938_29977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (19))){
var inst_29873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29874 = figwheel.client.heads_up.append_message.call(null,inst_29873);
var state_29914__$1 = state_29914;
var statearr_29939_29978 = state_29914__$1;
(statearr_29939_29978[(2)] = inst_29874);

(statearr_29939_29978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (11))){
var inst_29862 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29862)){
var statearr_29940_29979 = state_29914__$1;
(statearr_29940_29979[(1)] = (15));

} else {
var statearr_29941_29980 = state_29914__$1;
(statearr_29941_29980[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (9))){
var inst_29846 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29942_29981 = state_29914__$1;
(statearr_29942_29981[(2)] = inst_29846);

(statearr_29942_29981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (5))){
var inst_29840 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(8),inst_29840);
} else {
if((state_val_29915 === (14))){
var inst_29860 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29943_29982 = state_29914__$1;
(statearr_29943_29982[(2)] = inst_29860);

(statearr_29943_29982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (26))){
var inst_29884 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29944_29983 = state_29914__$1;
(statearr_29944_29983[(2)] = inst_29884);

(statearr_29944_29983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (16))){
var inst_29871 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29871)){
var statearr_29945_29984 = state_29914__$1;
(statearr_29945_29984[(1)] = (19));

} else {
var statearr_29946_29985 = state_29914__$1;
(statearr_29946_29985[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (30))){
var inst_29891 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29947_29986 = state_29914__$1;
(statearr_29947_29986[(2)] = inst_29891);

(statearr_29947_29986[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (10))){
var inst_29852 = figwheel.client.heads_up.clear.call(null);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(13),inst_29852);
} else {
if((state_val_29915 === (18))){
var inst_29869 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29948_29987 = state_29914__$1;
(statearr_29948_29987[(2)] = inst_29869);

(statearr_29948_29987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (8))){
var inst_29842 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29949_29988 = state_29914__$1;
(statearr_29949_29988[(2)] = inst_29842);

(statearr_29949_29988[(1)] = (7));


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
});})(c__21976__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21911__auto__,c__21976__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto____0 = (function (){
var statearr_29953 = [null,null,null,null,null,null,null,null,null];
(statearr_29953[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto__);

(statearr_29953[(1)] = (1));

return statearr_29953;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto____1 = (function (state_29914){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_29914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e29954){if((e29954 instanceof Object)){
var ex__21915__auto__ = e29954;
var statearr_29955_29989 = state_29914;
(statearr_29955_29989[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29990 = state_29914;
state_29914 = G__29990;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto__ = function(state_29914){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto____1.call(this,state_29914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__,msg_hist,msg_names,msg))
})();
var state__21978__auto__ = (function (){var statearr_29956 = f__21977__auto__.call(null);
(statearr_29956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_29956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__,msg_hist,msg_names,msg))
);

return c__21976__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21976__auto___30053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto___30053,ch){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto___30053,ch){
return (function (state_30036){
var state_val_30037 = (state_30036[(1)]);
if((state_val_30037 === (1))){
var state_30036__$1 = state_30036;
var statearr_30038_30054 = state_30036__$1;
(statearr_30038_30054[(2)] = null);

(statearr_30038_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (2))){
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30036__$1,(4),ch);
} else {
if((state_val_30037 === (3))){
var inst_30034 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30036__$1,inst_30034);
} else {
if((state_val_30037 === (4))){
var inst_30024 = (state_30036[(7)]);
var inst_30024__$1 = (state_30036[(2)]);
var state_30036__$1 = (function (){var statearr_30039 = state_30036;
(statearr_30039[(7)] = inst_30024__$1);

return statearr_30039;
})();
if(cljs.core.truth_(inst_30024__$1)){
var statearr_30040_30055 = state_30036__$1;
(statearr_30040_30055[(1)] = (5));

} else {
var statearr_30041_30056 = state_30036__$1;
(statearr_30041_30056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (5))){
var inst_30024 = (state_30036[(7)]);
var inst_30026 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30024);
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30036__$1,(8),inst_30026);
} else {
if((state_val_30037 === (6))){
var state_30036__$1 = state_30036;
var statearr_30042_30057 = state_30036__$1;
(statearr_30042_30057[(2)] = null);

(statearr_30042_30057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (7))){
var inst_30032 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
var statearr_30043_30058 = state_30036__$1;
(statearr_30043_30058[(2)] = inst_30032);

(statearr_30043_30058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (8))){
var inst_30028 = (state_30036[(2)]);
var state_30036__$1 = (function (){var statearr_30044 = state_30036;
(statearr_30044[(8)] = inst_30028);

return statearr_30044;
})();
var statearr_30045_30059 = state_30036__$1;
(statearr_30045_30059[(2)] = null);

(statearr_30045_30059[(1)] = (2));


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
});})(c__21976__auto___30053,ch))
;
return ((function (switch__21911__auto__,c__21976__auto___30053,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21912__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21912__auto____0 = (function (){
var statearr_30049 = [null,null,null,null,null,null,null,null,null];
(statearr_30049[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21912__auto__);

(statearr_30049[(1)] = (1));

return statearr_30049;
});
var figwheel$client$heads_up_plugin_$_state_machine__21912__auto____1 = (function (state_30036){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_30036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e30050){if((e30050 instanceof Object)){
var ex__21915__auto__ = e30050;
var statearr_30051_30060 = state_30036;
(statearr_30051_30060[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30061 = state_30036;
state_30036 = G__30061;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21912__auto__ = function(state_30036){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21912__auto____1.call(this,state_30036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21912__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21912__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto___30053,ch))
})();
var state__21978__auto__ = (function (){var statearr_30052 = f__21977__auto__.call(null);
(statearr_30052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto___30053);

return statearr_30052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto___30053,ch))
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
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_30082){
var state_val_30083 = (state_30082[(1)]);
if((state_val_30083 === (1))){
var inst_30077 = cljs.core.async.timeout.call(null,(3000));
var state_30082__$1 = state_30082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30082__$1,(2),inst_30077);
} else {
if((state_val_30083 === (2))){
var inst_30079 = (state_30082[(2)]);
var inst_30080 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30082__$1 = (function (){var statearr_30084 = state_30082;
(statearr_30084[(7)] = inst_30079);

return statearr_30084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30082__$1,inst_30080);
} else {
return null;
}
}
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21912__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21912__auto____0 = (function (){
var statearr_30088 = [null,null,null,null,null,null,null,null];
(statearr_30088[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21912__auto__);

(statearr_30088[(1)] = (1));

return statearr_30088;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21912__auto____1 = (function (state_30082){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_30082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e30089){if((e30089 instanceof Object)){
var ex__21915__auto__ = e30089;
var statearr_30090_30092 = state_30082;
(statearr_30090_30092[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30093 = state_30082;
state_30082 = G__30093;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21912__auto__ = function(state_30082){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21912__auto____1.call(this,state_30082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21912__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21912__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_30091 = f__21977__auto__.call(null);
(statearr_30091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_30091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30094){
var map__30101 = p__30094;
var map__30101__$1 = ((((!((map__30101 == null)))?((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);
var ed = map__30101__$1;
var formatted_exception = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30103_30107 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30104_30108 = null;
var count__30105_30109 = (0);
var i__30106_30110 = (0);
while(true){
if((i__30106_30110 < count__30105_30109)){
var msg_30111 = cljs.core._nth.call(null,chunk__30104_30108,i__30106_30110);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30111);

var G__30112 = seq__30103_30107;
var G__30113 = chunk__30104_30108;
var G__30114 = count__30105_30109;
var G__30115 = (i__30106_30110 + (1));
seq__30103_30107 = G__30112;
chunk__30104_30108 = G__30113;
count__30105_30109 = G__30114;
i__30106_30110 = G__30115;
continue;
} else {
var temp__4425__auto___30116 = cljs.core.seq.call(null,seq__30103_30107);
if(temp__4425__auto___30116){
var seq__30103_30117__$1 = temp__4425__auto___30116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30103_30117__$1)){
var c__19312__auto___30118 = cljs.core.chunk_first.call(null,seq__30103_30117__$1);
var G__30119 = cljs.core.chunk_rest.call(null,seq__30103_30117__$1);
var G__30120 = c__19312__auto___30118;
var G__30121 = cljs.core.count.call(null,c__19312__auto___30118);
var G__30122 = (0);
seq__30103_30107 = G__30119;
chunk__30104_30108 = G__30120;
count__30105_30109 = G__30121;
i__30106_30110 = G__30122;
continue;
} else {
var msg_30123 = cljs.core.first.call(null,seq__30103_30117__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30123);

var G__30124 = cljs.core.next.call(null,seq__30103_30117__$1);
var G__30125 = null;
var G__30126 = (0);
var G__30127 = (0);
seq__30103_30107 = G__30124;
chunk__30104_30108 = G__30125;
count__30105_30109 = G__30126;
i__30106_30110 = G__30127;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30128){
var map__30131 = p__30128;
var map__30131__$1 = ((((!((map__30131 == null)))?((((map__30131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30131):map__30131);
var w = map__30131__$1;
var message = cljs.core.get.call(null,map__30131__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30139 = cljs.core.seq.call(null,plugins);
var chunk__30140 = null;
var count__30141 = (0);
var i__30142 = (0);
while(true){
if((i__30142 < count__30141)){
var vec__30143 = cljs.core._nth.call(null,chunk__30140,i__30142);
var k = cljs.core.nth.call(null,vec__30143,(0),null);
var plugin = cljs.core.nth.call(null,vec__30143,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30145 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30139,chunk__30140,count__30141,i__30142,pl_30145,vec__30143,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30145.call(null,msg_hist);
});})(seq__30139,chunk__30140,count__30141,i__30142,pl_30145,vec__30143,k,plugin))
);
} else {
}

var G__30146 = seq__30139;
var G__30147 = chunk__30140;
var G__30148 = count__30141;
var G__30149 = (i__30142 + (1));
seq__30139 = G__30146;
chunk__30140 = G__30147;
count__30141 = G__30148;
i__30142 = G__30149;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30139);
if(temp__4425__auto__){
var seq__30139__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30139__$1)){
var c__19312__auto__ = cljs.core.chunk_first.call(null,seq__30139__$1);
var G__30150 = cljs.core.chunk_rest.call(null,seq__30139__$1);
var G__30151 = c__19312__auto__;
var G__30152 = cljs.core.count.call(null,c__19312__auto__);
var G__30153 = (0);
seq__30139 = G__30150;
chunk__30140 = G__30151;
count__30141 = G__30152;
i__30142 = G__30153;
continue;
} else {
var vec__30144 = cljs.core.first.call(null,seq__30139__$1);
var k = cljs.core.nth.call(null,vec__30144,(0),null);
var plugin = cljs.core.nth.call(null,vec__30144,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30154 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30139,chunk__30140,count__30141,i__30142,pl_30154,vec__30144,k,plugin,seq__30139__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30154.call(null,msg_hist);
});})(seq__30139,chunk__30140,count__30141,i__30142,pl_30154,vec__30144,k,plugin,seq__30139__$1,temp__4425__auto__))
);
} else {
}

var G__30155 = cljs.core.next.call(null,seq__30139__$1);
var G__30156 = null;
var G__30157 = (0);
var G__30158 = (0);
seq__30139 = G__30155;
chunk__30140 = G__30156;
count__30141 = G__30157;
i__30142 = G__30158;
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
var args30159 = [];
var len__19567__auto___30162 = arguments.length;
var i__19568__auto___30163 = (0);
while(true){
if((i__19568__auto___30163 < len__19567__auto___30162)){
args30159.push((arguments[i__19568__auto___30163]));

var G__30164 = (i__19568__auto___30163 + (1));
i__19568__auto___30163 = G__30164;
continue;
} else {
}
break;
}

var G__30161 = args30159.length;
switch (G__30161) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30159.length)].join('')));

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
var len__19567__auto___30170 = arguments.length;
var i__19568__auto___30171 = (0);
while(true){
if((i__19568__auto___30171 < len__19567__auto___30170)){
args__19574__auto__.push((arguments[i__19568__auto___30171]));

var G__30172 = (i__19568__auto___30171 + (1));
i__19568__auto___30171 = G__30172;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((0) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19575__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30167){
var map__30168 = p__30167;
var map__30168__$1 = ((((!((map__30168 == null)))?((((map__30168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30168):map__30168);
var opts = map__30168__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30166){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30166));
});

//# sourceMappingURL=client.js.map?rel=1441976684841