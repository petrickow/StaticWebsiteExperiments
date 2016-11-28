

export class Resources {
    jsonContent;
    fName: string;
    constructor(fName) {
        var self = this;

        self.jsonContent = JSON.parse("{}");

        console.log("loadJSON" + fName);
        console.log(this);

        this.loadJSON(fName, function(res) {
            console.log(self);
            self.jsonContent = JSON.parse(res);
        });
    }

    loadJSON(fileName, callback) {
        console.log(this)
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', "resources/" + fileName, true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            console.log(this);
            if (xobj.readyState == 4 && xobj.status == 200) {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }

    getBio() {
        return this.jsonContent.biography_no;
    }

    setContent(res) {
        this.jsonContent = res;
    }
}
