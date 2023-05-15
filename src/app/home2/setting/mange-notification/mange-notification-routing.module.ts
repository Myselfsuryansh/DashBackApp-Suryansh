import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangeNotificationPage } from './mange-notification.page';

const routes: Routes = [
  {
    path: '',
    component: MangeNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangeNotificationPageRoutingModule {}
