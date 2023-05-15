import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailotpPage } from './emailotp.page';

const routes: Routes = [
  {
    path: '',
    component: EmailotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailotpPageRoutingModule {}
