import userMenu from './userMenu/userMenu';
import iosDate from './userMenu/ionDateDirectives';
import ionMenu from './menu/ionMenuDirectives';
import ionMenuHide from './menu/ionMenuHideDirectives';

export default angular
    .module('ionicSeed.directives', [])
    .directive('iosDate', iosDate)
    .directive('ionMenu', ionMenu)
    .directive('ionMenuHide', ionMenuHide)
    .component('userMenu', userMenu);
