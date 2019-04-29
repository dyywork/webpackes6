import PersonTemplate from './person.html';

const PersonRouting = ($stateProvider) => {
  $stateProvider
  .state('app.person', {
    url: '/person',
    views: {
      'appContentPerson': {
        template: PersonTemplate,
        controller: 'PersonController',
        controllerAs: 'vm'
      }
    }
  });
};

export default PersonRouting;