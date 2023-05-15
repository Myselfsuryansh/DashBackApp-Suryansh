import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNomineePage } from './add-nominee.page';

const routes: Routes = [
  {
    path: '',
    component: AddNomineePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNomineePageRoutingModule {}
