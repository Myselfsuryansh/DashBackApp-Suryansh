import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferRecieptPageRoutingModule } from './transfer-reciept-routing.module';

import { TransferRecieptPage } from './transfer-reciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferRecieptPageRoutingModule
  ],
  declarations: [TransferRecieptPage]
})
export class TransferRecieptPageModule {}
