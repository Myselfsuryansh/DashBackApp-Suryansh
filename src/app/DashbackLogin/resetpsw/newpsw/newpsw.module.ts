import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpswPageRoutingModule } from './newpsw-routing.module';

import { NewpswPage } from './newpsw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpswPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewpswPage]
})
export class NewpswPageModule {}
