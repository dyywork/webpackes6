import PersonRouting from './person.routing';
import PersonController  from './person.controller';
import './person.scss';

const PersonPageModule = angular
      .module('person-page', [])
      .config(PersonRouting)
      .controller('PersonController', PersonController);

export default PersonPageModule;