import React from "react";
import { render } from 'react-dom';
import getRoutes from "./router/routes.js";
import Provider from 'react-redux/lib/components/Provider';
import store from './Redux/store';
import { getCookie } from "./Globals/CookieManager.js";

let local = JSON.parse(localStorage.getItem("webPStatus"));
let webPCookie = getCookie('webPStatus');
if (webPCookie) deleteCookie('webPStatus');
function checkWebPStatus() {
    var webp = new Image();
    webp.src = 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==';

    webp.onerror = function () {
        webPHandling(false);
    };
    webp.onload = function () {
        webPHandling(true);
    }
}
function webPHandling(val) {
    local['val'] = val;
    localStorage.setItem("webPStatus", JSON.stringify(local));
}

if (!(local == null || local == 'undefined')) {
    localStorage.removeItem("webPStatus");
}
local = {};
checkWebPStatus();

render(
    <Provider store={store}>
        {getRoutes()}
    </Provider>,
    document.getElementById("root")
);