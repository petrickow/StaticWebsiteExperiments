"use strict";
var Resources = (function () {
    function Resources(fName) {
        var self = this;
        self.loadJSON(fName, function (res) {
            self.jsonContent = JSON.parse(res);
        });
    }
    Resources.prototype.loadJSON = function (fileName, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', "resources/" + fileName, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == 200) {
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    };
    Resources.prototype.getBio = function () {
        console.log("getBio");
        return self.jsonContent.biography_no;
    };
    return Resources;
}());
exports.Resources = Resources;
