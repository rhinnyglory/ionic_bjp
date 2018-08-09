// import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
// export class AuthServiceProvider {
//   private isLoggedIn = false;
//   constructor() {
//     console.log('Hello AuthServiceProvider Provider');
//   }

//   login() : void {
//     this.isLoggedIn = true;
//   }
 
//   // Logout a user, destroy token and remove
//   // every information related to a user
//   logout() : void {
//     this.isLoggedIn = false;
//   }
 
//   // Returns whether the user is currently authenticated
//   // Could check if current token is still valid
//   authenticated() : boolean {
//     return this.isLoggedIn;
//   }

// }













import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Constant } from '../../app/constants/constant';
import { ConstantApi } from '../../app/constants/constantApi';
import { Login } from '../../app/models/user';

// declare var $: any;

@Injectable()
export class AuthServiceProvider {

  constructor(private http: HttpClient) { }

  private tokenUrl = Constant.API_URL + ConstantApi.login;
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  login(login: Login): Observable<any> {
    const data = { ...login };
    return this.http.post(this.tokenUrl, data, { headers: this.headers, observe: 'response' });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
    // this.router.navigate(['/admin/login']);
  }
}
