import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { HomePage } from './../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { username: 'piyush.sutariya@credencys.com', password: '123456' };
  errMsg: string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private authServe: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.navCtrl.push(HomePage);
    console.log(this.registerCredentials, 'rekhjsagdf');
    this.authServe.login(this.registerCredentials).subscribe((token: HttpResponse<any>) => {
      console.log(token, '123');
      if (token.body.status) {
        const userData = token.body.data;
          const xToken = userData['x-bjp-access-token'];
          localStorage.setItem('auth', xToken);
          console.log(localStorage.getItem('auth'), xToken);
          this.navCtrl.push(HomePage);
          // this.userServices.userinfo().subscribe(user => {
          //     localStorage.setItem('userinfo', JSON.stringify(user));
          //     localStorage.setItem('adminName', user.data.name);
          //     localStorage.setItem('adminEmail', user.data.email);
          //     this.appComponent.setUser(user.data);
          //     if (user.success) {
          //         this.router.navigate(['/admin/clients']);
          //     }
          // });
      }

      if (!token.body.success) {
          this.errMsg = token.body.msg;
      }
  }, err => {
      this.errMsg = 'Incorrect Email or Password';
  });
  }

}
