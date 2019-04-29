import { assign } from 'lodash';

export default class PersonController {
  constructor($state) {
    assign(this, {$state});
  }
}