import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetpswPage } from './forgetpsw.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetpswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetpswPageRoutingModule {}
