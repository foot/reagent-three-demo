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
var c__21978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21978__auto__){
return (function (){
var f__21979__auto__ = (function (){var switch__21913__auto__ = ((function (c__21978__auto__){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26597 = (state_26612[(2)]);
var state_26612__$1 = (function (){var statearr_26614 = state_26612;
(statearr_26614[(7)] = inst_26597);

return statearr_26614;
})();
var statearr_26615_26635 = state_26612__$1;
(statearr_26615_26635[(2)] = null);

(statearr_26615_26635[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (1))){
var state_26612__$1 = state_26612;
var statearr_26616_26636 = state_26612__$1;
(statearr_26616_26636[(2)] = null);

(statearr_26616_26636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (4))){
var inst_26584 = (state_26612[(8)]);
var inst_26584__$1 = (state_26612[(2)]);
var inst_26585 = cljs.core.meta.call(null,inst_26584__$1);
var inst_26586 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26585);
var state_26612__$1 = (function (){var statearr_26617 = state_26612;
(statearr_26617[(8)] = inst_26584__$1);

return statearr_26617;
})();
if(cljs.core.truth_(inst_26586)){
var statearr_26618_26637 = state_26612__$1;
(statearr_26618_26637[(1)] = (5));

} else {
var statearr_26619_26638 = state_26612__$1;
(statearr_26619_26638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (6))){
var inst_26593 = cljs.core.async.timeout.call(null,(0));
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(9),inst_26593);
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (12))){
var inst_26584 = (state_26612[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26612,(11),Object,null,(10));
var inst_26605 = re_frame.handlers.handle.call(null,inst_26584);
var state_26612__$1 = state_26612;
var statearr_26620_26639 = state_26612__$1;
(statearr_26620_26639[(2)] = inst_26605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (2))){
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26613 === (11))){
var inst_26598 = (state_26612[(2)]);
var inst_26599 = re_frame.router.purge_chan.call(null);
var inst_26600 = re_frame$router$router_loop.call(null);
var inst_26601 = (function(){throw inst_26598})();
var state_26612__$1 = (function (){var statearr_26621 = state_26612;
(statearr_26621[(9)] = inst_26600);

(statearr_26621[(10)] = inst_26599);

return statearr_26621;
})();
var statearr_26622_26640 = state_26612__$1;
(statearr_26622_26640[(2)] = inst_26601);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (9))){
var inst_26595 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26623_26641 = state_26612__$1;
(statearr_26623_26641[(2)] = inst_26595);

(statearr_26623_26641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (5))){
var inst_26588 = reagent.core.flush.call(null);
var inst_26589 = cljs.core.async.timeout.call(null,(20));
var state_26612__$1 = (function (){var statearr_26624 = state_26612;
(statearr_26624[(11)] = inst_26588);

return statearr_26624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26612__$1,(8),inst_26589);
} else {
if((state_val_26613 === (10))){
var inst_26607 = (state_26612[(2)]);
var state_26612__$1 = (function (){var statearr_26625 = state_26612;
(statearr_26625[(12)] = inst_26607);

return statearr_26625;
})();
var statearr_26626_26642 = state_26612__$1;
(statearr_26626_26642[(2)] = null);

(statearr_26626_26642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26613 === (8))){
var inst_26591 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26627_26643 = state_26612__$1;
(statearr_26627_26643[(2)] = inst_26591);

(statearr_26627_26643[(1)] = (7));


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
});})(c__21978__auto__))
;
return ((function (switch__21913__auto__,c__21978__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21914__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21914__auto____0 = (function (){
var statearr_26631 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26631[(0)] = re_frame$router$router_loop_$_state_machine__21914__auto__);

(statearr_26631[(1)] = (1));

return statearr_26631;
});
var re_frame$router$router_loop_$_state_machine__21914__auto____1 = (function (state_26612){
while(true){
var ret_value__21915__auto__ = (function (){try{while(true){
var result__21916__auto__ = switch__21913__auto__.call(null,state_26612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21916__auto__;
}
break;
}
}catch (e26632){if((e26632 instanceof Object)){
var ex__21917__auto__ = e26632;
var statearr_26633_26644 = state_26612;
(statearr_26633_26644[(5)] = ex__21917__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26645 = state_26612;
state_26612 = G__26645;
continue;
} else {
return ret_value__21915__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21914__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21914__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21914__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21914__auto____0;
re_frame$router$router_loop_$_state_machine__21914__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21914__auto____1;
return re_frame$router$router_loop_$_state_machine__21914__auto__;
})()
;})(switch__21913__auto__,c__21978__auto__))
})();
var state__21980__auto__ = (function (){var statearr_26634 = f__21979__auto__.call(null);
(statearr_26634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21978__auto__);

return statearr_26634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21980__auto__);
});})(c__21978__auto__))
);

return c__21978__auto__;
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

//# sourceMappingURL=router.js.map?rel=1442923849509