"use strict";
var resources_1 = require("./resources");
var App = (function () {
    function App() {
        this.r = new resources_1.Resources("texts.json");
        this.heading = "Stuff";
    }
    return App;
}());
exports.App = App;
