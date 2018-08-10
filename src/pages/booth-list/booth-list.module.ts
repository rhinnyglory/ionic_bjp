import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoothListPage } from './booth-list';

@NgModule({
  declarations: [
    BoothListPage,
  ],
  imports: [
    IonicPageModule.forChild(BoothListPage),
  ],
})
export class BoothListPageModule {}
