import userMenu from './userMenu/userMenu';
import iosDate from './userMenu/ionDateDirectives';

export default angular
    .module('ionicSeed.directives', [])
    .directive('iosDate', iosDate)
    .component('userMenu', userMenu);
