import HomeRouting from './home.routing';
import HomeController from './home.controller';
import HomeDetailController from './homeDetaile.controller';
import './home.scss';


const HomePageModule = angular
    .module('home-page', [])
    .config(HomeRouting)
    .controller('HomeController', HomeController)
    .controller('HomeDetailController', HomeDetailController);

export default HomePageModule;
