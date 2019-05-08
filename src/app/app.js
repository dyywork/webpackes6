// import 'angular/angular';
// import 'angular-animate/angular-animate';
// import 'angular-sanitize/angular-sanitize';
// import 'ionic-sdk/release/js/angular-ui/angular-ui-router';
// import "../assets/lib/ionic/js/angular.min";
// import "../assets/lib/ionic/js/ionic.min";
// import "../assets/lib/ionic/js/ionic-angular";
import "../assets/lib/ionic/js/ionic.bundle";
 import '../ng-cordova';

 
//import "ionic-sdk/release/js/ionic-angular";
// import 'ionic-sdk/release/js/ionic-angular';

 // import 'ngCordova';
 //import 'ng-cordova';
import AppRun from "./app.run";
import AppConfig from "./app.routing";
import AppController from "./app.controller";

// import all app-related parts
import appDirectives from "./components";
import appServices from "./services";
import appPages from "./pages";

const AppModule = angular
  .module("ionicSeed", [
    // include ionic, and angular
    "ionic",
    "ngCordova",
    // high level app directives or components
    appDirectives.name,

    // high level app services
    appServices.name,

    // all other application pages
    appPages.name
  ])
  .run(AppRun)
  .config(AppConfig)
  .controller("AppController", AppController);

export default AppModule;
