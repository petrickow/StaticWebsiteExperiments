"use strict";
var Resources = (function () {
    function Resources(fName) {
        this.jsonContent = JSON.parse("{}");
        console.log("loadJSON" + fName);
        console.log(this);
        this.loadJSON(fName, function (res) {
            console.log(this);
            this.jsonContent = JSON.parse(res);
        });
    }
    Resources.prototype.loadJSON = function (fileName, callback) {
        console.log(this);
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', "resources/" + fileName, true);
        xobj.onreadystatechange = function () {
            console.log(this);
            if (xobj.readyState == 4 && xobj.status == 200) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    };
    Resources.prototype.getBio = function () {
        return this.jsonContent.biography_no;
    };
    Resources.prototype.setContent = function (res) {
        this.jsonContent = res;
    };
    return Resources;
}());
exports.Resources = Resources;
