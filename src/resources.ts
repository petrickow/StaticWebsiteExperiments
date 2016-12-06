

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

    loadJSON(fileName, whenDone) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', "resources/" + fileName, true);

        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == 200) {
                whenDone(xobj.responseText);
            }
        };

        xobj.send(null); // make the local request
    }

    /* Exposed */
    public getBio() {
        console.log("getBio");
        console.log(this.jsonContent);
        return this.jsonContent.biography_no;
    }
}
