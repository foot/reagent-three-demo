(ns rthree.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :rotation
 (fn [db]
   (reaction (:rotation @db))))
