import { assign } from 'lodash';

const urls = 'http://dingyongya.club:3001/';

export default class httpService {
  
  constructor ($http, $q) {
    assign(this, { $http, $q });
  }
httpUrl() {
  return 'http://dingyongya.club:3001/';
}
 httpGet(url, params) {
    return this.$http({
      url: urls + url,
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      params: params
    }).success(data => {
      this.$q.defer().resolve(data);
    }).error(data => {
       this.$q.defer().reject(data);
    }).finally(data => {
      this.$q.defer().reject(data);
    });
  }

  
 httpPost(url, method, params) {
    return this.$http({
      url: urls + url,
      method: method,
      headers: {'Content-Type': 'application/json'},
      data: params
    }).success(data => {
      this.$q.defer().resolve(data);
    }).error(data => {
       this.$q.defer().reject(data);
    }).finally(data => {
      this.$q.defer().reject(data);
    });
  }


}