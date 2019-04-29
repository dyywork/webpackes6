import userService from './userService/userService';
import httpService from './userService/httpService';

export default angular
    .module('ionicSeed.services', [])
    .constant('apiUrl', 'http://demo8156226.mockable.io')
    .service('userService', userService)
    .service('httpService', httpService);
