import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailMobileOtpPage } from './email-mobile-otp.page';

const routes: Routes = [
  {
    path: '',
    component: EmailMobileOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailMobileOtpPageRoutingModule {}
