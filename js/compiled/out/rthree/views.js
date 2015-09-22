// Compiled by ClojureScript 1.7.48 {}
goog.provide('rthree.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
rthree.views.Scene = reagent.core.adapt_react_class.call(null,ReactTHREE.Scene);
rthree.views.PerspectiveCamera = reagent.core.adapt_react_class.call(null,ReactTHREE.PerspectiveCamera);
rthree.views.Mesh = reagent.core.adapt_react_class.call(null,ReactTHREE.Mesh);
rthree.views.Object3D = reagent.core.adapt_react_class.call(null,ReactTHREE.Object3D);
rthree.views.assetpath = (function rthree$views$assetpath(filename){
return [cljs.core.str("assets/"),cljs.core.str(filename)].join('');
});
rthree.views.cupcake = (function rthree$views$cupcake(){
var box_geometry = (new THREE.BoxGeometry((200),(200),(200)));
var cupcake_texture = THREE.ImageUtils.loadTexture(rthree.views.assetpath.call(null,"cupCake.png"));
var cupcake_material = (new THREE.MeshBasicMaterial({"map": cupcake_texture}));
var cream_texture = THREE.ImageUtils.loadTexture(rthree.views.assetpath.call(null,"creamPink.png"));
var cream_material = (new THREE.MeshBasicMaterial({"map": cream_texture}));
return ((function (box_geometry,cupcake_texture,cupcake_material,cream_texture,cream_material){
return (function (rotation){
var q = (function (){var G__33211 = (new THREE.Quaternion());
G__33211.setFromEuler((new THREE.Euler(rotation,(rotation * (3)),(0))));

return G__33211;
})();
var p = (new THREE.Vector3(((((300) * Math.sin(rotation)) * (0)) * (0))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.Object3D,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"quaternion","quaternion",1845825618),q,new cljs.core.Keyword(null,"position","position",-2011731912),p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.Mesh,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),(new THREE.Vector3((0),(-100),(0))),new cljs.core.Keyword(null,"geometry","geometry",-405034994),box_geometry,new cljs.core.Keyword(null,"material","material",460118677),cupcake_material], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.Mesh,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),(new THREE.Vector3((0),(100),(0))),new cljs.core.Keyword(null,"geometry","geometry",-405034994),box_geometry,new cljs.core.Keyword(null,"material","material",460118677),cream_material], null)], null)], null);
});
;})(box_geometry,cupcake_texture,cupcake_material,cream_texture,cream_material))
});
/**
 * Attach a camera control script. js/THREE.OrbitControls leaves
 * event-listeners all over the place unfortunately.
 */
rthree.views.attach_camera_control_script = (function rthree$views$attach_camera_control_script(node,params,cb){
var dummy_camera = (function (){var G__33213 = (new THREE.PerspectiveCamera(new cljs.core.Keyword(null,"fov","fov",-12463282).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"near","near",-1077668328).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"far","far",85807546).cljs$core$IFn$_invoke$arity$1(params)));
(G__33213["position"]["z"] = (new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(params)["z"]));

return G__33213;
})();
var controls = (new THREE.OrbitControls(dummy_camera,node));
controls.addEventListener("change",((function (dummy_camera,controls){
return (function (ev){
var camera = ev.target.object;
var position = camera.position;
var quaternion = camera.quaternion;
return cb.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [position,quaternion], null));
});})(dummy_camera,controls))
);

return controls;
});
rthree.views.example_scene = (function rthree$views$example_scene(camera_props,rotation){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.core.dom_node.call(null,this$);
var controls = rthree.views.attach_camera_control_script.call(null,node,camera_props,((function (node){
return (function (p__33216){
var vec__33217 = p__33216;
var position = cljs.core.nth.call(null,vec__33217,(0),null);
var quaternion = cljs.core.nth.call(null,vec__33217,(1),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera-update","camera-update",-957684332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"quaternion","quaternion",1845825618),quaternion], null)], null));
});})(node))
);
return null;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (camera_props__$1,rotation__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.Scene,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"camera","camera",-1190348585),"maincamera"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.PerspectiveCamera,camera_props__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.cupcake,rotation__$1], null)], null);
})], null));
});
rthree.views.main_panel = (function rthree$views$main_panel(){
var rotation = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null));
var camera_props = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera-props","camera-props",-1759129283)], null));
var rotation_speed = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-speed","rotation-speed",-637058511)], null));
return ((function (rotation,camera_props,rotation_speed){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.example_scene,cljs.core.deref.call(null,camera_props),(cljs.core.deref.call(null,rotation_speed) * cljs.core.deref.call(null,rotation))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),0.05,new cljs.core.Keyword(null,"step","step",1288888124),0.001,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rotation_speed),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (rotation,camera_props,rotation_speed){
return (function (ev){
var v = ev.target.value;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation-speed","rotation-speed",-637058511),v], null));
});})(rotation,camera_props,rotation_speed))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rthree.views.example_scene,cljs.core.deref.call(null,camera_props),(0.01 * cljs.core.deref.call(null,rotation))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("t = "),cljs.core.str(cljs.core.deref.call(null,rotation))].join('')], null)], null);
});
;})(rotation,camera_props,rotation_speed))
});

//# sourceMappingURL=views.js.map?rel=1442923870821