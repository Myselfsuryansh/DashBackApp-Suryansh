import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpswPage } from './newpsw.page';

const routes: Routes = [
  {
    path: '',
    component: NewpswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpswPageRoutingModule {}
