import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CommonServiceProvider } from './../common-service/common-service';
import { ConstantApi } from './../../app/constants/constantApi';

/*
  Generated class for the AddBoothProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddBoothProvider {

  constructor(public http: HttpClient, private httpcaller: CommonServiceProvider) {
    console.log('Hello AddBoothProvider Provider');
  }

  getStates() {
    return this.httpcaller.httpcall(ConstantApi.states, 'get', {});
  }

  getDistricts(StateId: number){
    return this.httpcaller.httpcall(ConstantApi.districts + '/' + StateId, 'get', {});
  }

}
