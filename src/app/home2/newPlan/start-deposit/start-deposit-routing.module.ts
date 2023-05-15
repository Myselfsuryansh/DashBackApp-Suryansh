import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartDepositPage } from './start-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: StartDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartDepositPageRoutingModule {}
