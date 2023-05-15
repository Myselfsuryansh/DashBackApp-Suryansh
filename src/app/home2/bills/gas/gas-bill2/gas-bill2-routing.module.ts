import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasBill2Page } from './gas-bill2.page';

const routes: Routes = [
  {
    path: '',
    component: GasBill2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasBill2PageRoutingModule {}
