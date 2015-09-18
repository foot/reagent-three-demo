(ns rthree.handlers
    (:require [re-frame.core :as re-frame]
              [rthree.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/register-handler
 :tick
 (fn [db _]
   (update db :rotation inc)))

(re-frame/register-handler
 :camera-update
 (fn [db [_ new-params]]
   (update-in db [:camera] into new-params)))
