(ns rthree.db)

(def default-db
  {:rotation 1
   :camera {:fov 75
            :aspect 1
            :near 1
            :name "maincamera"
            :far 5000
            :position (new js/THREE.Vector3 0 0 600)}})
