(ns rthree.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))

(enable-console-print!)

;; ReactTHREE Components ----
;;
(def Scene (reagent/adapt-react-class js/ReactTHREE.Scene))
(def PerspectiveCamera (reagent/adapt-react-class js/ReactTHREE.PerspectiveCamera))
(def Mesh (reagent/adapt-react-class js/ReactTHREE.Mesh))
(def Object3D (reagent/adapt-react-class js/ReactTHREE.Object3D))
(def PointLight (reagent/adapt-react-class js/ReactTHREE.PointLight))

(defn assetpath [filename] (str "assets/" filename))

(defn cupcake []
  (let [box-geometry (new js/THREE.BoxGeometry 200 200 200)
        cupcake-texture (js/THREE.ImageUtils.loadTexture (assetpath "cupCake.png"))   
        cupcake-material (new THREE.MeshBasicMaterial #js {:map cupcake-texture})  
        cream-texture (js/THREE.ImageUtils.loadTexture (assetpath "creamPink.png"))  
        cream-material (new THREE.MeshBasicMaterial #js {:map cream-texture})]

    (fn [rotation]
      (let [q (doto
                (new js/THREE.Quaternion)
                (.setFromEuler (new js/THREE.Euler rotation (* rotation 3) 0)))
            p (new js/THREE.Vector3 (* 300 (js/Math.sin rotation) 0 0))]
        [Object3D {:quaternion q :position p}
         [Mesh {:position (new js/THREE.Vector3 0 -100 0)
                :geometry box-geometry
                :material cupcake-material}]
         [Mesh {:position (new js/THREE.Vector3 0 100 0)
                :geometry box-geometry
                :material cream-material}]]))))

(defn height-map [r]
  (let [mat (new THREE.MeshPhongMaterial #js {:color 0xffff00
                                              :side THREE.DoubleSide})
        geom (new js/THREE.PlaneGeometry 300 300 20 20)]
    (doseq [[v i] (map vector (.-vertices geom) (range))]
      (aset v "z" (* 10 (js/Math.sin (* r 0.001 i)))))
    [Object3D
     [PointLight {:intensity 2
                  :distance 300
                  :position (new js/THREE.Vector3 100 100 100)}]
     [Mesh {:geometry geom :material mat}]]))

(defn attach-camera-control-script
  "Attach a camera control script. js/THREE.OrbitControls leaves
  event-listeners all over the place unfortunately."
  [node params cb]
  (let [dummy-camera (doto
                       (new js/THREE.PerspectiveCamera
                            (:fov params)
                            (:aspect params)
                            (:near params)
                            (:far params))
                       (aset "position" "z" (aget (:position params) "z")))
        controls (new js/THREE.OrbitControls dummy-camera node)]

    (.addEventListener controls "change" (fn [ev]
                                           (let [camera (-> ev .-target .-object)
                                                 position (.-position camera)
                                                 quaternion (.-quaternion camera)]
                                             (cb [position quaternion]))))
    controls))

(defn example-scene [camera-props rotation]
  (reagent/create-class
    {:component-did-mount
     (fn [this] 
       (let [node (reagent/dom-node this)
             controls (attach-camera-control-script
                        node
                        camera-props
                        (fn [[position quaternion]]
                          (re-frame/dispatch
                            [:camera-update
                             {:position position
                              :quaternion quaternion}])))]))
     :reagent-render
     (fn [camera-props rotation]
       [Scene {:width 300
               :height 300
               :camera "maincamera"
               :enableRapidRender false}
        [PerspectiveCamera camera-props]
        [cupcake rotation]])}))

(defn main-panel []
  (let [rotation (re-frame/subscribe [:rotation])
        camera-props (re-frame/subscribe [:camera-props])
        rotation-speed (re-frame/subscribe [:rotation-speed])]

    (fn []
      [:div
       [:div [example-scene @camera-props (* @rotation-speed @rotation)]
       [:input {:type "range"
                :min 0
                :max 0.05 
                :step 0.001
                :value @rotation-speed
                :on-change (fn [ev] (let [v (-> ev .-target .-value )]
                                      (re-frame/dispatch [:rotation-speed v])))}]]
       [example-scene @camera-props (* 0.01 @rotation)]
       [Scene {:width 300
               :height 300
               :camera "maincamera"
               :enableRapidRender false}
        [PerspectiveCamera @camera-props]
        [height-map @rotation]]

       [:p (str "t = " @rotation)]])))
