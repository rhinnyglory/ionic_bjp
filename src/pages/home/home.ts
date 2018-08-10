import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DashboardListPage } from './../dashboard-list/dashboard-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
view(){
  this.navCtrl.push(DashboardListPage);
  // alert("called")
}
}
