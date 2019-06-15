import { assign } from 'lodash';

export default class SessionService {
    /*@ngInject*/
  constructor() {
    assign(this, {});
  }

    /**
     * Returns all of our Users
     * @return {Promise}
     */
  setSession(key,data) {
    window.sessionStorage.setItem(key,data); 
  }
  getSession(key) {
    return window.sessionStorage.getItem(key);
  }
}
