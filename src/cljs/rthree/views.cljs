(ns rthree.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]))

(defn main-panel []
  (let [name (re-frame/subscribe [:name])
        Scene (reagent/adapt-react-class js/ReactTHREE.Scene)
        Camera (reagent/adapt-react-class js/ReactTHREE.PerspectiveCamera)
        camera-props {:fov 75
                      :aspect 1
                      :near 1
                      :name "maincamera"
                      :far 5000
                      :position (new js/THREE.Vector3 0 0 600)
                      :lookat (new js/THREE.Vector3 0 0 0)}]
    (fn []
      [:div "Hello from " @name
       [Scene {:width 300 :height 300 :camera "maincamera"}
        [Camera camera-props]]])))
