import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BoothListPage } from './../booth-list/booth-list';
import { ShaktiKendraListPage } from './../shakti-kendra-list/shakti-kendra-list';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { LoginPage } from './../../pages/login/login';

/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

  view(){
    this.navCtrl.push(BoothListPage);
    // alert("called")
  }

  viewSK(){
    this.navCtrl.push(ShaktiKendraListPage);
    // alert("called")
  }

  logout(){
    this.auth.logout();
    this.navCtrl.push(LoginPage);
    console.log(localStorage, 'hiii');
  }

}
