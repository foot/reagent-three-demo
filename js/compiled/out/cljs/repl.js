// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30560_30574 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30561_30575 = null;
var count__30562_30576 = (0);
var i__30563_30577 = (0);
while(true){
if((i__30563_30577 < count__30562_30576)){
var f_30578 = cljs.core._nth.call(null,chunk__30561_30575,i__30563_30577);
cljs.core.println.call(null,"  ",f_30578);

var G__30579 = seq__30560_30574;
var G__30580 = chunk__30561_30575;
var G__30581 = count__30562_30576;
var G__30582 = (i__30563_30577 + (1));
seq__30560_30574 = G__30579;
chunk__30561_30575 = G__30580;
count__30562_30576 = G__30581;
i__30563_30577 = G__30582;
continue;
} else {
var temp__4425__auto___30583 = cljs.core.seq.call(null,seq__30560_30574);
if(temp__4425__auto___30583){
var seq__30560_30584__$1 = temp__4425__auto___30583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30560_30584__$1)){
var c__19312__auto___30585 = cljs.core.chunk_first.call(null,seq__30560_30584__$1);
var G__30586 = cljs.core.chunk_rest.call(null,seq__30560_30584__$1);
var G__30587 = c__19312__auto___30585;
var G__30588 = cljs.core.count.call(null,c__19312__auto___30585);
var G__30589 = (0);
seq__30560_30574 = G__30586;
chunk__30561_30575 = G__30587;
count__30562_30576 = G__30588;
i__30563_30577 = G__30589;
continue;
} else {
var f_30590 = cljs.core.first.call(null,seq__30560_30584__$1);
cljs.core.println.call(null,"  ",f_30590);

var G__30591 = cljs.core.next.call(null,seq__30560_30584__$1);
var G__30592 = null;
var G__30593 = (0);
var G__30594 = (0);
seq__30560_30574 = G__30591;
chunk__30561_30575 = G__30592;
count__30562_30576 = G__30593;
i__30563_30577 = G__30594;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30595 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18528__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30595);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30595)))?cljs.core.second.call(null,arglists_30595):arglists_30595));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30564 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30565 = null;
var count__30566 = (0);
var i__30567 = (0);
while(true){
if((i__30567 < count__30566)){
var vec__30568 = cljs.core._nth.call(null,chunk__30565,i__30567);
var name = cljs.core.nth.call(null,vec__30568,(0),null);
var map__30569 = cljs.core.nth.call(null,vec__30568,(1),null);
var map__30569__$1 = ((((!((map__30569 == null)))?((((map__30569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);
var doc = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30596 = seq__30564;
var G__30597 = chunk__30565;
var G__30598 = count__30566;
var G__30599 = (i__30567 + (1));
seq__30564 = G__30596;
chunk__30565 = G__30597;
count__30566 = G__30598;
i__30567 = G__30599;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30564);
if(temp__4425__auto__){
var seq__30564__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30564__$1)){
var c__19312__auto__ = cljs.core.chunk_first.call(null,seq__30564__$1);
var G__30600 = cljs.core.chunk_rest.call(null,seq__30564__$1);
var G__30601 = c__19312__auto__;
var G__30602 = cljs.core.count.call(null,c__19312__auto__);
var G__30603 = (0);
seq__30564 = G__30600;
chunk__30565 = G__30601;
count__30566 = G__30602;
i__30567 = G__30603;
continue;
} else {
var vec__30571 = cljs.core.first.call(null,seq__30564__$1);
var name = cljs.core.nth.call(null,vec__30571,(0),null);
var map__30572 = cljs.core.nth.call(null,vec__30571,(1),null);
var map__30572__$1 = ((((!((map__30572 == null)))?((((map__30572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);
var doc = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30604 = cljs.core.next.call(null,seq__30564__$1);
var G__30605 = null;
var G__30606 = (0);
var G__30607 = (0);
seq__30564 = G__30604;
chunk__30565 = G__30605;
count__30566 = G__30606;
i__30567 = G__30607;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1441976685744