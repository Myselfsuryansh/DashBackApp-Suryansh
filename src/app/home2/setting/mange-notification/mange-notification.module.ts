import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangeNotificationPageRoutingModule } from './mange-notification-routing.module';

import { MangeNotificationPage } from './mange-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangeNotificationPageRoutingModule
  ],
  declarations: [MangeNotificationPage]
})
export class MangeNotificationPageModule {}
