import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Airteldigital2Page } from './airteldigital2.page';

const routes: Routes = [
  {
    path: '',
    component: Airteldigital2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Airteldigital2PageRoutingModule {}
