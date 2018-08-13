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

  getDistricts(StateId){
    return this.httpcaller.httpcall(ConstantApi.districts + '/' + StateId, 'get', {});
  }

  getAssemblies(DistrictId){
    return this.httpcaller.httpcall(ConstantApi.assemblies + '/' + DistrictId, 'get', {});
  }

  getMandals(AssemblyId){
    return this.httpcaller.httpcall(ConstantApi.mandalas + '/' + AssemblyId, 'get', {});
  }

  getBoothNumbers(MandalId){
    return this.httpcaller.httpcall(ConstantApi.booths + '/' + MandalId, 'get', {});
  }

  saveBoothCommittee(data: object){
    return this.httpcaller.httpcall(ConstantApi.addBoothCom , 'post', data);
  }

}
