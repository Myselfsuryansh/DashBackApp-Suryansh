import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TredPage } from './tred.page';

const routes: Routes = [
  {
    path: '',
    component: TredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TredPageRoutingModule {}
