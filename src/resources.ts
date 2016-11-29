

export class Resources {
    jsonContent: any;
    fName: string;
    country_code: String;

    constructor(fName) {
        var self = this;
        this.country_code = "no"

        self.loadJSON(fName, function(res) {
            self.jsonContent = JSON.parse(res);
            //TODO broadcast event, resources loaded
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

    /* Exposed */
    public getBio() {
        console.log("getBio");
        console.log(this.jsonContent);
        return this.jsonContent.biography_no;
    }

}
