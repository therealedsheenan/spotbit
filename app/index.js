'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var document = _interopDefault(require('document'));
var messaging = require('messaging');

function stripQuotes(str) {
    return str ? str.replace(/"/g, "") : "";
}

console.log("App Started");
var background = document.getElementById("background");
messaging.peerSocket.onmessage = function (evt) {
    console.log("App received: " + JSON.stringify(evt));
    if (evt.data.key === "color" && evt.data.newValue) {
        var color = stripQuotes(evt.data.newValue);
        console.log("Setting background color: " + color);
        background.style.fill = color;
    }
};
messaging.peerSocket.onopen = function () {
    console.log("App Socket Open");
};
messaging.peerSocket.close = function () {
    console.log("App Socket Closed");
};
