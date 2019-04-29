import appTemplate from './app.html';

/*@ngInject*/
const AppConfig = ($stateProvider, $urlRouterProvider,$ionicConfigProvider) => {

  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.ios.views.swipeBackEnabled(false);
  $ionicConfigProvider.platform.android.views.transition('android');
  $stateProvider
  .state('app', {
    cache: false,
    url: '/app',
    abstract: true,
    template: appTemplate,
    controller: 'AppController',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/index');
};

export default AppConfig;
