import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpswPageRoutingModule } from './forgetpsw-routing.module';

import { ForgetpswPage } from './forgetpsw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetpswPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ForgetpswPage]
})
export class ForgetpswPageModule {}
