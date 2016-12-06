import {Router, RouterConfiguration} from "aurelia-router";
//import {Resources} from './resources';

export class App {
    router :Router;
    test: String;

    constructor() {
        console.log('Why');
        this.test = 'not?';
    }

    configureRouter(config: RouterConfiguration, router: Router){
        console.log("therefore");
        this.test = 'why';

        config.title = 'Aurelia';
        config.map([
            { route: ['','home'], moduleId: './home', nav: true, title: 'home'},
            { route: 'cv', moduleId: './cv', nav: true, title: 'CV'}
        ]);

        this.router = router;
        console.log(router);
    }
}
