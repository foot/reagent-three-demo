(ns rthree.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :rotation
 (fn [db]
   (reaction (:rotation @db))))

(re-frame/register-sub
 :rotation-speed
 (fn [db]
   (reaction (:rotation-speed @db))))

(re-frame/register-sub
 :camera-props
 (fn [db]
   (reaction (:camera @db))))
