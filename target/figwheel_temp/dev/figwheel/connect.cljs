(ns figwheel.connect (:require [rthree.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/rthree.core.mount-root (apply js/rthree.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'rthree.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

