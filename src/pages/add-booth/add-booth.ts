import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BoothListPage } from '../booth-list/booth-list';

/**
 * Generated class for the AddBoothPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-booth',
  templateUrl: 'add-booth.html',
})
export class AddBoothPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBoothPage');
  }

  view(){
    this.navCtrl.push(BoothListPage);
    // alert("called")
  }

}
