import PersonTemplate from './person.html';

const PersonRouting = ($stateProvider) => {
  $stateProvider
  .state('app.person', {
    url: '/person',
    views: {
      'appContent': {
        template: PersonTemplate,
        controller: 'PersonController',
        controllerAs: 'vm'
      }
    }
  });
};

export default PersonRouting;