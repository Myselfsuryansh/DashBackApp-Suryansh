import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionFailedPage } from './transaction-failed.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionFailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionFailedPageRoutingModule {}
