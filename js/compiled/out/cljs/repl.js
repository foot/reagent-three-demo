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
var seq__30575_30589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30576_30590 = null;
var count__30577_30591 = (0);
var i__30578_30592 = (0);
while(true){
if((i__30578_30592 < count__30577_30591)){
var f_30593 = cljs.core._nth.call(null,chunk__30576_30590,i__30578_30592);
cljs.core.println.call(null,"  ",f_30593);

var G__30594 = seq__30575_30589;
var G__30595 = chunk__30576_30590;
var G__30596 = count__30577_30591;
var G__30597 = (i__30578_30592 + (1));
seq__30575_30589 = G__30594;
chunk__30576_30590 = G__30595;
count__30577_30591 = G__30596;
i__30578_30592 = G__30597;
continue;
} else {
var temp__4425__auto___30598 = cljs.core.seq.call(null,seq__30575_30589);
if(temp__4425__auto___30598){
var seq__30575_30599__$1 = temp__4425__auto___30598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30575_30599__$1)){
var c__19312__auto___30600 = cljs.core.chunk_first.call(null,seq__30575_30599__$1);
var G__30601 = cljs.core.chunk_rest.call(null,seq__30575_30599__$1);
var G__30602 = c__19312__auto___30600;
var G__30603 = cljs.core.count.call(null,c__19312__auto___30600);
var G__30604 = (0);
seq__30575_30589 = G__30601;
chunk__30576_30590 = G__30602;
count__30577_30591 = G__30603;
i__30578_30592 = G__30604;
continue;
} else {
var f_30605 = cljs.core.first.call(null,seq__30575_30599__$1);
cljs.core.println.call(null,"  ",f_30605);

var G__30606 = cljs.core.next.call(null,seq__30575_30599__$1);
var G__30607 = null;
var G__30608 = (0);
var G__30609 = (0);
seq__30575_30589 = G__30606;
chunk__30576_30590 = G__30607;
count__30577_30591 = G__30608;
i__30578_30592 = G__30609;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30610 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18528__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18528__auto__)){
return or__18528__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30610);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30610)))?cljs.core.second.call(null,arglists_30610):arglists_30610));
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
var seq__30579 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30580 = null;
var count__30581 = (0);
var i__30582 = (0);
while(true){
if((i__30582 < count__30581)){
var vec__30583 = cljs.core._nth.call(null,chunk__30580,i__30582);
var name = cljs.core.nth.call(null,vec__30583,(0),null);
var map__30584 = cljs.core.nth.call(null,vec__30583,(1),null);
var map__30584__$1 = ((((!((map__30584 == null)))?((((map__30584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30584):map__30584);
var doc = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30611 = seq__30579;
var G__30612 = chunk__30580;
var G__30613 = count__30581;
var G__30614 = (i__30582 + (1));
seq__30579 = G__30611;
chunk__30580 = G__30612;
count__30581 = G__30613;
i__30582 = G__30614;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30579);
if(temp__4425__auto__){
var seq__30579__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30579__$1)){
var c__19312__auto__ = cljs.core.chunk_first.call(null,seq__30579__$1);
var G__30615 = cljs.core.chunk_rest.call(null,seq__30579__$1);
var G__30616 = c__19312__auto__;
var G__30617 = cljs.core.count.call(null,c__19312__auto__);
var G__30618 = (0);
seq__30579 = G__30615;
chunk__30580 = G__30616;
count__30581 = G__30617;
i__30582 = G__30618;
continue;
} else {
var vec__30586 = cljs.core.first.call(null,seq__30579__$1);
var name = cljs.core.nth.call(null,vec__30586,(0),null);
var map__30587 = cljs.core.nth.call(null,vec__30586,(1),null);
var map__30587__$1 = ((((!((map__30587 == null)))?((((map__30587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30587):map__30587);
var doc = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30619 = cljs.core.next.call(null,seq__30579__$1);
var G__30620 = null;
var G__30621 = (0);
var G__30622 = (0);
seq__30579 = G__30619;
chunk__30580 = G__30620;
count__30581 = G__30621;
i__30582 = G__30622;
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

//# sourceMappingURL=repl.js.map?rel=1442923854380