// Compiled by ClojureScript 1.7.48 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_26597){
var state_val_26598 = (state_26597[(1)]);
if((state_val_26598 === (7))){
var inst_26582 = (state_26597[(2)]);
var state_26597__$1 = (function (){var statearr_26599 = state_26597;
(statearr_26599[(7)] = inst_26582);

return statearr_26599;
})();
var statearr_26600_26620 = state_26597__$1;
(statearr_26600_26620[(2)] = null);

(statearr_26600_26620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (1))){
var state_26597__$1 = state_26597;
var statearr_26601_26621 = state_26597__$1;
(statearr_26601_26621[(2)] = null);

(statearr_26601_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (4))){
var inst_26569 = (state_26597[(8)]);
var inst_26569__$1 = (state_26597[(2)]);
var inst_26570 = cljs.core.meta.call(null,inst_26569__$1);
var inst_26571 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26570);
var state_26597__$1 = (function (){var statearr_26602 = state_26597;
(statearr_26602[(8)] = inst_26569__$1);

return statearr_26602;
})();
if(cljs.core.truth_(inst_26571)){
var statearr_26603_26622 = state_26597__$1;
(statearr_26603_26622[(1)] = (5));

} else {
var statearr_26604_26623 = state_26597__$1;
(statearr_26604_26623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (6))){
var inst_26578 = cljs.core.async.timeout.call(null,(0));
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26597__$1,(9),inst_26578);
} else {
if((state_val_26598 === (3))){
var inst_26595 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26597__$1,inst_26595);
} else {
if((state_val_26598 === (12))){
var inst_26569 = (state_26597[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26597,(11),Object,null,(10));
var inst_26590 = re_frame.handlers.handle.call(null,inst_26569);
var state_26597__$1 = state_26597;
var statearr_26605_26624 = state_26597__$1;
(statearr_26605_26624[(2)] = inst_26590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26597__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (2))){
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26597__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26598 === (11))){
var inst_26583 = (state_26597[(2)]);
var inst_26584 = re_frame.router.purge_chan.call(null);
var inst_26585 = re_frame$router$router_loop.call(null);
var inst_26586 = (function(){throw inst_26583})();
var state_26597__$1 = (function (){var statearr_26606 = state_26597;
(statearr_26606[(9)] = inst_26585);

(statearr_26606[(10)] = inst_26584);

return statearr_26606;
})();
var statearr_26607_26625 = state_26597__$1;
(statearr_26607_26625[(2)] = inst_26586);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26597__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (9))){
var inst_26580 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26608_26626 = state_26597__$1;
(statearr_26608_26626[(2)] = inst_26580);

(statearr_26608_26626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (5))){
var inst_26573 = reagent.core.flush.call(null);
var inst_26574 = cljs.core.async.timeout.call(null,(20));
var state_26597__$1 = (function (){var statearr_26609 = state_26597;
(statearr_26609[(11)] = inst_26573);

return statearr_26609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26597__$1,(8),inst_26574);
} else {
if((state_val_26598 === (10))){
var inst_26592 = (state_26597[(2)]);
var state_26597__$1 = (function (){var statearr_26610 = state_26597;
(statearr_26610[(12)] = inst_26592);

return statearr_26610;
})();
var statearr_26611_26627 = state_26597__$1;
(statearr_26611_26627[(2)] = null);

(statearr_26611_26627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (8))){
var inst_26576 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26612_26628 = state_26597__$1;
(statearr_26612_26628[(2)] = inst_26576);

(statearr_26612_26628[(1)] = (7));


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
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21912__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21912__auto____0 = (function (){
var statearr_26616 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26616[(0)] = re_frame$router$router_loop_$_state_machine__21912__auto__);

(statearr_26616[(1)] = (1));

return statearr_26616;
});
var re_frame$router$router_loop_$_state_machine__21912__auto____1 = (function (state_26597){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_26597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e26617){if((e26617 instanceof Object)){
var ex__21915__auto__ = e26617;
var statearr_26618_26629 = state_26597;
(statearr_26618_26629[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26630 = state_26597;
state_26597 = G__26630;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21912__auto__ = function(state_26597){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21912__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21912__auto____1.call(this,state_26597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21912__auto____0;
re_frame$router$router_loop_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21912__auto____1;
return re_frame$router$router_loop_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_26619 = f__21977__auto__.call(null);
(statearr_26619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_26619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1441976679894