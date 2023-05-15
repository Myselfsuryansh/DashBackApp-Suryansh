import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsdchangePage } from './psdchange.page';

const routes: Routes = [
  {
    path: '',
    component: PsdchangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsdchangePageRoutingModule {}
