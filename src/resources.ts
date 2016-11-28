
export class Resources {


    constructor(fName) {
        this.jsonContent = {};
        console.log("loadJSON" + fName);
        this.loadJSON(fName, function(res) {
            console.log("json loaded")
            this.jsonContent = JSON.parse(res);
        });
    }

    loadJSON(fileName, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', "resources/" + fileName, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {

            if (xobj.readyState == 4 && xobj.status == 200) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    public getBio() {
        return jsonContent.biography_no;
    }
}
