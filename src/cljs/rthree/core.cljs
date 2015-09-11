(ns rthree.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [rthree.handlers]
              [rthree.subs]
              [rthree.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
