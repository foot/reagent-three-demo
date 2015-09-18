(ns rthree.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))

;; ReactTHREE Components ----
;;
(def Scene (reagent/adapt-react-class js/ReactTHREE.Scene))
(def PerspectiveCamera (reagent/adapt-react-class js/ReactTHREE.PerspectiveCamera))
(def Mesh (reagent/adapt-react-class js/ReactTHREE.Mesh))
(def Object3D (reagent/adapt-react-class js/ReactTHREE.Object3D))

(defn assetpath [filename] (str "/assets/" filename))

(defn Cupcake []
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

(defn main-panel []
  (let [rotation (re-frame/subscribe [:rotation])
        camera-props {:fov 75
                      :aspect 1
                      :near 1
                      :name "maincamera"
                      :far 5000
                      :position (new js/THREE.Vector3 0 0 600)
                      :lookat (new js/THREE.Vector3 0 0 0)}]
    (fn []
      [:div
       [:div
        [Scene {:width 300 :height 300 :camera "maincamera"}
         [PerspectiveCamera camera-props]
         [Cupcake (* 0.01 @rotation)]]] 
       [:div
        [Scene {:width 300 :height 300 :camera "maincamera"}
         [PerspectiveCamera camera-props]
         [Cupcake (* 0.001 @rotation)]]]
       [:p (str "t = " @rotation)]])))
