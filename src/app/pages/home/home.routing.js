import HomeTemplate from './home.html';
import HomeDetailTemplate from './homeDetail.html';
 
/*@ngInject*/
const HomeRouting = ($stateProvider) => {
    $stateProvider
    .state('app.home', {
        url: '/home',
        views: {
          'appContent': {
            template: HomeTemplate,
            controller: 'HomeController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.homeDetail',{
        url:'/home/homeDetail',
        views: {
          'appContent': {
            template: HomeDetailTemplate,
            controller: 'HomeDetailController',
            controllerAs: 'vm'
          }
        }
      });
};

export default HomeRouting;
