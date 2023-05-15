import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasBill3Page } from './gas-bill3.page';

const routes: Routes = [
  {
    path: '',
    component: GasBill3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasBill3PageRoutingModule {}
