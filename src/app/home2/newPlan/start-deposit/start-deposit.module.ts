import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartDepositPageRoutingModule } from './start-deposit-routing.module';

import { StartDepositPage } from './start-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartDepositPageRoutingModule
  ],
  declarations: [StartDepositPage]
})
export class StartDepositPageModule {}
