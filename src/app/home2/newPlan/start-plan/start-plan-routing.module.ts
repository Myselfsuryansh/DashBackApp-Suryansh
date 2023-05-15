import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPlanPage } from './start-plan.page';

const routes: Routes = [
  {
    path: '',
    component: StartPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPlanPageRoutingModule {}
