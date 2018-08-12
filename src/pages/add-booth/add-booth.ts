import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BoothListPage } from '../booth-list/booth-list';
import { AddBoothProvider } from './../../providers/add-booth/add-booth';
import { Booths, State, District, Assembly, Mandala } from './../../app/models/booth';

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
  boothData = {
    state: {} as State,
    district: {} as District,
    assembly: {} as Assembly,
    mandala: {} as Mandala
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

  view(){
    this.navCtrl.push(BoothListPage);
    // alert("called")
  }

  getDistricts(state){
    console.log(state,'hiii');
    this.boothServe.getDistricts(this.boothData.state.id).then(result =>{
      if(result.status){
        this.districts = result.data;
      }
    }).catch(error =>{

    })
  }

  getAssemblies(assembly){
    console.log(assembly,'hiii');
    this.boothServe.getDistricts(this.boothData.assembly.id).then(result =>{
      if(result.status){
        this.districts = result.data;
      }
    }).catch(error =>{

    })
  }

}
