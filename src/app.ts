
import {Resources} from './resources';


export class App {
    heading :string;
    biography :string = "";
    r : Resources;

    constructor() {
        this.r = new Resources("texts.json");
        this.heading  = "Stuff";
    }

    toggleBio() {
        this.biography = this.biography.length > 0 ?  "" : this.r.getBio();
    }

    doSomething() {
        console.log("does stuff");
    }
}
