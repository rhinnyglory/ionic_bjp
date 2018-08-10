import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBoothPage } from '../add-booth/add-booth';

/**
 * Generated class for the BoothListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booth-list',
  templateUrl: 'booth-list.html',
})
export class BoothListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoothListPage');
  }

  view(){
    this.navCtrl.push(AddBoothPage);
    // alert("called")
  }

}
