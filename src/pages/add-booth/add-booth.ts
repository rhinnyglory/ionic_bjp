import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BoothListPage } from '../booth-list/booth-list';
import { AddBoothProvider } from './../../providers/add-booth/add-booth';
import { Booths, State, District, Assembly, Mandala, Booth } from './../../app/models/booth';

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
  states = [];
  districts = [];
  assemblies = [];
  mandals = [];
  boothNumbers = [];
  boothData = {
    state: {} as State,
    district: {} as District,
    assembly: {} as Assembly,
    mandala: {} as Mandala,
    booth: {} as Booth,
    parentBooth: {} as Booth
  } as Booths;

  constructor(public navCtrl: NavController, public navParams: NavParams, private boothServe: AddBoothProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBoothPage');
    this.boothServe.getStates().then(data => {
      if (data.status) {
        this.states = data.data;
        console.log('data', this.states);
        // this.toastr.success('Profile is updated successfully!');
      }
    }).catch(err => {
      // this.loader = false;
      // this.toastr.error('Profile is not updated!');
    });
  }

  view() {
    this.navCtrl.push(BoothListPage);
    // alert("called")
  }

  getDistricts() {
    // console.log(state,'hiii');
    this.boothServe.getDistricts(this.boothData.state).then(result => {
      if (result.status) {
        this.districts = result.data;
      }
    }).catch(error => {

    })
  }

  getAssemblies() {
    // console.log(assembly,'hiii');
    this.boothServe.getAssemblies(this.boothData.district).then(result => {
      if (result.status) {
        this.assemblies = result.data;
      }
    }).catch(error => {

    })
  }

  getMandalas() {
    // console.log(assembly,'hiii');
    this.boothServe.getMandals(this.boothData.assembly).then(result => {
      if (result.status) {
        this.mandals = result.data;
      }
    }).catch(error => {

    })
  }

  getBooths() {
    // console.log(assembly,'hiii');
    this.boothServe.getBoothNumbers(this.boothData.mandala).then(result => {
      if (result.status) {
        this.boothNumbers = result.data;
      }
    }).catch(error => {

    })
  }

  saveBooth() {
    console.log(this.boothData, 'BoothListPage');
    this.boothServe.saveBoothCommittee(this.boothData).then(res => {
      if (res.status) {
        console.log(res, 'res');
      }
    }).catch(err => {
      console.log(err, 'err');
    });
  }

}
