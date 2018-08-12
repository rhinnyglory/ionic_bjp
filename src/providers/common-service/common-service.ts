// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// /*
//   Generated class for the CommonServiceProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class CommonServiceProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello CommonServiceProvider Provider');
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Constant } from './../../app/constants/constant';

@Injectable()
export class CommonServiceProvider {
  constructor(private http: Http, public https: HttpClient) { }
  httpcall(url: string, method: string, data?: any) {
    const header = new Headers({
      'Content-Type': 'application/json',
      'x-bjp-access-token': localStorage.getItem('auth')
    });
    const options = new RequestOptions({ headers: header });
    if (method !== 'put' && method !== 'post') {
      return this.http[method](Constant.API_URL + url, options, data)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    } else {
      return this.http[method](Constant.API_URL + url, data, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }
  }
  httpformdatacall(url: string, method: string, data?: any) {
    const header = new Headers({
      'x-bjp-access-token': localStorage.getItem('auth')
    });
    const options4 = new RequestOptions({ headers: header });
    if (method !== 'put' && method !== 'post') {
      return this.http[method](Constant.API_URL + url, options4, data)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    } else {
      return this.http[method](Constant.API_URL + url, data, options4)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

