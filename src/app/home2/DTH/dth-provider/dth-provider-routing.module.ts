import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DthProviderPage } from './dth-provider.page';

const routes: Routes = [
  {
    path: '',
    component: DthProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DthProviderPageRoutingModule {}
