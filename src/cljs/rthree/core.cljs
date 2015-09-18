(ns rthree.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [rthree.handlers]
              [rthree.subs]
              [rthree.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defonce timeout-id (atom nil))

(when @timeout-id
  (js/clearInterval @timeout-id))

(reset! timeout-id
        (js/setInterval
          (fn []
            (re-frame/dispatch [:tick]))
          16))

(defn ^:export init [] 
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
