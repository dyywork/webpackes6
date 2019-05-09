import userMenu from './userMenu/userMenu';
import iosDate from './userMenu/ionDateDirectives';
import ionMenu from './menu/ionMenuDirectives';

export default angular
    .module('ionicSeed.directives', [])
    .directive('iosDate', iosDate)
    .directive('ionMenu', ionMenu)
    .component('userMenu', userMenu);
