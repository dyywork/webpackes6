import splashTemplate from './splash.html';

/*@ngInject*/
const SplashRouting = ($stateProvider) => {
    $stateProvider.state('index', {
        url: '/index',
        cache: false,
        template: splashTemplate,
        controller: 'SplashController',
        controllerAs: 'splash'
    });
};

export default SplashRouting;
