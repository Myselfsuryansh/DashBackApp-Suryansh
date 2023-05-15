import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailMobileOtpPageRoutingModule } from './email-mobile-otp-routing.module';

import { EmailMobileOtpPage } from './email-mobile-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailMobileOtpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EmailMobileOtpPage]
})
export class EmailMobileOtpPageModule {}
