import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllservicePage } from './allservice.page';

const routes: Routes = [
  {
    path: '',
    component: AllservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllservicePageRoutingModule {}
