import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirteldigitalPage } from './airteldigital.page';

const routes: Routes = [
  {
    path: '',
    component: AirteldigitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirteldigitalPageRoutingModule {}
