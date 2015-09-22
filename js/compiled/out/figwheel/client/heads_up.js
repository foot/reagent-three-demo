// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__19574__auto__ = [];
var len__19567__auto___30312 = arguments.length;
var i__19568__auto___30313 = (0);
while(true){
if((i__19568__auto___30313 < len__19567__auto___30312)){
args__19574__auto__.push((arguments[i__19568__auto___30313]));

var G__30314 = (i__19568__auto___30313 + (1));
i__19568__auto___30313 = G__30314;
continue;
} else {
}
break;
}

var argseq__19575__auto__ = ((((2) < args__19574__auto__.length))?(new cljs.core.IndexedSeq(args__19574__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19575__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30304_30315 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30305_30316 = null;
var count__30306_30317 = (0);
var i__30307_30318 = (0);
while(true){
if((i__30307_30318 < count__30306_30317)){
var k_30319 = cljs.core._nth.call(null,chunk__30305_30316,i__30307_30318);
e.setAttribute(cljs.core.name.call(null,k_30319),cljs.core.get.call(null,attrs,k_30319));

var G__30320 = seq__30304_30315;
var G__30321 = chunk__30305_30316;
var G__30322 = count__30306_30317;
var G__30323 = (i__30307_30318 + (1));
seq__30304_30315 = G__30320;
chunk__30305_30316 = G__30321;
count__30306_30317 = G__30322;
i__30307_30318 = G__30323;
continue;
} else {
var temp__4425__auto___30324 = cljs.core.seq.call(null,seq__30304_30315);
if(temp__4425__auto___30324){
var seq__30304_30325__$1 = temp__4425__auto___30324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30304_30325__$1)){
var c__19312__auto___30326 = cljs.core.chunk_first.call(null,seq__30304_30325__$1);
var G__30327 = cljs.core.chunk_rest.call(null,seq__30304_30325__$1);
var G__30328 = c__19312__auto___30326;
var G__30329 = cljs.core.count.call(null,c__19312__auto___30326);
var G__30330 = (0);
seq__30304_30315 = G__30327;
chunk__30305_30316 = G__30328;
count__30306_30317 = G__30329;
i__30307_30318 = G__30330;
continue;
} else {
var k_30331 = cljs.core.first.call(null,seq__30304_30325__$1);
e.setAttribute(cljs.core.name.call(null,k_30331),cljs.core.get.call(null,attrs,k_30331));

var G__30332 = cljs.core.next.call(null,seq__30304_30325__$1);
var G__30333 = null;
var G__30334 = (0);
var G__30335 = (0);
seq__30304_30315 = G__30332;
chunk__30305_30316 = G__30333;
count__30306_30317 = G__30334;
i__30307_30318 = G__30335;
continue;
}
} else {
}
}
break;
}

var seq__30308_30336 = cljs.core.seq.call(null,children);
var chunk__30309_30337 = null;
var count__30310_30338 = (0);
var i__30311_30339 = (0);
while(true){
if((i__30311_30339 < count__30310_30338)){
var ch_30340 = cljs.core._nth.call(null,chunk__30309_30337,i__30311_30339);
e.appendChild(ch_30340);

var G__30341 = seq__30308_30336;
var G__30342 = chunk__30309_30337;
var G__30343 = count__30310_30338;
var G__30344 = (i__30311_30339 + (1));
seq__30308_30336 = G__30341;
chunk__30309_30337 = G__30342;
count__30310_30338 = G__30343;
i__30311_30339 = G__30344;
continue;
} else {
var temp__4425__auto___30345 = cljs.core.seq.call(null,seq__30308_30336);
if(temp__4425__auto___30345){
var seq__30308_30346__$1 = temp__4425__auto___30345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30308_30346__$1)){
var c__19312__auto___30347 = cljs.core.chunk_first.call(null,seq__30308_30346__$1);
var G__30348 = cljs.core.chunk_rest.call(null,seq__30308_30346__$1);
var G__30349 = c__19312__auto___30347;
var G__30350 = cljs.core.count.call(null,c__19312__auto___30347);
var G__30351 = (0);
seq__30308_30336 = G__30348;
chunk__30309_30337 = G__30349;
count__30310_30338 = G__30350;
i__30311_30339 = G__30351;
continue;
} else {
var ch_30352 = cljs.core.first.call(null,seq__30308_30346__$1);
e.appendChild(ch_30352);

var G__30353 = cljs.core.next.call(null,seq__30308_30346__$1);
var G__30354 = null;
var G__30355 = (0);
var G__30356 = (0);
seq__30308_30336 = G__30353;
chunk__30309_30337 = G__30354;
count__30310_30338 = G__30355;
i__30311_30339 = G__30356;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30301){
var G__30302 = cljs.core.first.call(null,seq30301);
var seq30301__$1 = cljs.core.next.call(null,seq30301);
var G__30303 = cljs.core.first.call(null,seq30301__$1);
var seq30301__$2 = cljs.core.next.call(null,seq30301__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30302,G__30303,seq30301__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19422__auto__,prefer_table__19423__auto__,method_cache__19424__auto__,cached_hierarchy__19425__auto__,hierarchy__19426__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19422__auto__,prefer_table__19423__auto__,method_cache__19424__auto__,cached_hierarchy__19425__auto__,hierarchy__19426__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19426__auto__,method_table__19422__auto__,prefer_table__19423__auto__,method_cache__19424__auto__,cached_hierarchy__19425__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30357 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30357.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30357.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30357.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30357);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30358,st_map){
var map__30363 = p__30358;
var map__30363__$1 = ((((!((map__30363 == null)))?((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var container_el = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30363,map__30363__$1,container_el){
return (function (p__30365){
var vec__30366 = p__30365;
var k = cljs.core.nth.call(null,vec__30366,(0),null);
var v = cljs.core.nth.call(null,vec__30366,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30363,map__30363__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30367,dom_str){
var map__30370 = p__30367;
var map__30370__$1 = ((((!((map__30370 == null)))?((((map__30370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30370):map__30370);
var c = map__30370__$1;
var content_area_el = cljs.core.get.call(null,map__30370__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30372){
var map__30375 = p__30372;
var map__30375__$1 = ((((!((map__30375 == null)))?((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var content_area_el = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_30418){
var state_val_30419 = (state_30418[(1)]);
if((state_val_30419 === (1))){
var inst_30403 = (state_30418[(7)]);
var inst_30403__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30404 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30405 = ["10px","10px","100%","68px","1.0"];
var inst_30406 = cljs.core.PersistentHashMap.fromArrays(inst_30404,inst_30405);
var inst_30407 = cljs.core.merge.call(null,inst_30406,style);
var inst_30408 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30403__$1,inst_30407);
var inst_30409 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30403__$1,msg);
var inst_30410 = cljs.core.async.timeout.call(null,(300));
var state_30418__$1 = (function (){var statearr_30420 = state_30418;
(statearr_30420[(8)] = inst_30409);

(statearr_30420[(7)] = inst_30403__$1);

(statearr_30420[(9)] = inst_30408);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30418__$1,(2),inst_30410);
} else {
if((state_val_30419 === (2))){
var inst_30403 = (state_30418[(7)]);
var inst_30412 = (state_30418[(2)]);
var inst_30413 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30414 = ["auto"];
var inst_30415 = cljs.core.PersistentHashMap.fromArrays(inst_30413,inst_30414);
var inst_30416 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30403,inst_30415);
var state_30418__$1 = (function (){var statearr_30421 = state_30418;
(statearr_30421[(10)] = inst_30412);

return statearr_30421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30418__$1,inst_30416);
} else {
return null;
}
}
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto____0 = (function (){
var statearr_30425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30425[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto__);

(statearr_30425[(1)] = (1));

return statearr_30425;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto____1 = (function (state_30418){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_30418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e30426){if((e30426 instanceof Object)){
var ex__21915__auto__ = e30426;
var statearr_30427_30429 = state_30418;
(statearr_30427_30429[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30430 = state_30418;
state_30418 = G__30430;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto__ = function(state_30418){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto____1.call(this,state_30418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_30428 = f__21977__auto__.call(null);
(statearr_30428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_30428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30432 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__30432,(0),null);
var ln = cljs.core.nth.call(null,vec__30432,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30435 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30435,(0),null);
var file_line = cljs.core.nth.call(null,vec__30435,(1),null);
var file_column = cljs.core.nth.call(null,vec__30435,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30435,file_name,file_line,file_column){
return (function (p1__30433_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30433_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30435,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18528__auto__ = file_line;
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
var and__18516__auto__ = cause;
if(cljs.core.truth_(and__18516__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18516__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30438 = figwheel.client.heads_up.ensure_container.call(null);
var map__30438__$1 = ((((!((map__30438 == null)))?((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);
var content_area_el = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_30486){
var state_val_30487 = (state_30486[(1)]);
if((state_val_30487 === (1))){
var inst_30469 = (state_30486[(7)]);
var inst_30469__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30470 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30471 = ["0.0"];
var inst_30472 = cljs.core.PersistentHashMap.fromArrays(inst_30470,inst_30471);
var inst_30473 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30469__$1,inst_30472);
var inst_30474 = cljs.core.async.timeout.call(null,(300));
var state_30486__$1 = (function (){var statearr_30488 = state_30486;
(statearr_30488[(8)] = inst_30473);

(statearr_30488[(7)] = inst_30469__$1);

return statearr_30488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30486__$1,(2),inst_30474);
} else {
if((state_val_30487 === (2))){
var inst_30469 = (state_30486[(7)]);
var inst_30476 = (state_30486[(2)]);
var inst_30477 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30478 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30479 = cljs.core.PersistentHashMap.fromArrays(inst_30477,inst_30478);
var inst_30480 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30469,inst_30479);
var inst_30481 = cljs.core.async.timeout.call(null,(200));
var state_30486__$1 = (function (){var statearr_30489 = state_30486;
(statearr_30489[(9)] = inst_30480);

(statearr_30489[(10)] = inst_30476);

return statearr_30489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30486__$1,(3),inst_30481);
} else {
if((state_val_30487 === (3))){
var inst_30469 = (state_30486[(7)]);
var inst_30483 = (state_30486[(2)]);
var inst_30484 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30469,"");
var state_30486__$1 = (function (){var statearr_30490 = state_30486;
(statearr_30490[(11)] = inst_30483);

return statearr_30490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30486__$1,inst_30484);
} else {
return null;
}
}
}
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21912__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21912__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = figwheel$client$heads_up$clear_$_state_machine__21912__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var figwheel$client$heads_up$clear_$_state_machine__21912__auto____1 = (function (state_30486){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_30486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e30495){if((e30495 instanceof Object)){
var ex__21915__auto__ = e30495;
var statearr_30496_30498 = state_30486;
(statearr_30496_30498[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30499 = state_30486;
state_30486 = G__30499;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21912__auto__ = function(state_30486){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21912__auto____1.call(this,state_30486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21912__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21912__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_30497 = f__21977__auto__.call(null);
(statearr_30497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_30497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21976__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21976__auto__){
return (function (){
var f__21977__auto__ = (function (){var switch__21911__auto__ = ((function (c__21976__auto__){
return (function (state_30531){
var state_val_30532 = (state_30531[(1)]);
if((state_val_30532 === (1))){
var inst_30521 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(2),inst_30521);
} else {
if((state_val_30532 === (2))){
var inst_30523 = (state_30531[(2)]);
var inst_30524 = cljs.core.async.timeout.call(null,(400));
var state_30531__$1 = (function (){var statearr_30533 = state_30531;
(statearr_30533[(7)] = inst_30523);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(3),inst_30524);
} else {
if((state_val_30532 === (3))){
var inst_30526 = (state_30531[(2)]);
var inst_30527 = figwheel.client.heads_up.clear.call(null);
var state_30531__$1 = (function (){var statearr_30534 = state_30531;
(statearr_30534[(8)] = inst_30526);

return statearr_30534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30531__$1,(4),inst_30527);
} else {
if((state_val_30532 === (4))){
var inst_30529 = (state_30531[(2)]);
var state_30531__$1 = state_30531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30531__$1,inst_30529);
} else {
return null;
}
}
}
}
});})(c__21976__auto__))
;
return ((function (switch__21911__auto__,c__21976__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto____0 = (function (){
var statearr_30538 = [null,null,null,null,null,null,null,null,null];
(statearr_30538[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto__);

(statearr_30538[(1)] = (1));

return statearr_30538;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto____1 = (function (state_30531){
while(true){
var ret_value__21913__auto__ = (function (){try{while(true){
var result__21914__auto__ = switch__21911__auto__.call(null,state_30531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21914__auto__;
}
break;
}
}catch (e30539){if((e30539 instanceof Object)){
var ex__21915__auto__ = e30539;
var statearr_30540_30542 = state_30531;
(statearr_30540_30542[(5)] = ex__21915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30543 = state_30531;
state_30531 = G__30543;
continue;
} else {
return ret_value__21913__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto__ = function(state_30531){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto____1.call(this,state_30531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21912__auto__;
})()
;})(switch__21911__auto__,c__21976__auto__))
})();
var state__21978__auto__ = (function (){var statearr_30541 = f__21977__auto__.call(null);
(statearr_30541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21976__auto__);

return statearr_30541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21978__auto__);
});})(c__21976__auto__))
);

return c__21976__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441976685630