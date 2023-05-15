import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferRecieptPage } from './transfer-reciept.page';

const routes: Routes = [
  {
    path: '',
    component: TransferRecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRecieptPageRoutingModule {}
