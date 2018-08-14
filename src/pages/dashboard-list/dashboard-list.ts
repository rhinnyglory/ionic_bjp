import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';
/**
 * Generated class for the DashboardListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard-list',
  templateUrl: 'dashboard-list.html',
})
export class DashboardListPage {
  chatRoot = HomePage;  
  pet: string = "puppies";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardListPage');
  }

  filterForm: boolean = false;

}
