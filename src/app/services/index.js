import userService from './userService/userService';
import httpService from './userService/httpService';
import sessionService from './StorageService/sessionService';

export default angular
    .module('ionicSeed.services', [])
    .constant('apiUrl', 'http://demo8156226.mockable.io')
    .service('userService', userService)
    .service('httpService', httpService)
    .service('sessionService', sessionService);
