import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailotpPageRoutingModule } from './emailotp-routing.module';

import { EmailotpPage } from './emailotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailotpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmailotpPage]
})
export class EmailotpPageModule {}
