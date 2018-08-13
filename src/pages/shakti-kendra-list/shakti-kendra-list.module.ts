import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShaktiKendraListPage } from './shakti-kendra-list';

@NgModule({
  declarations: [
    ShaktiKendraListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShaktiKendraListPage),
  ],
})
export class ShaktiKendraListPageModule {}
