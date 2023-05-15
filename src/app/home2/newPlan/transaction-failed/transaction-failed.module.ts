import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionFailedPageRoutingModule } from './transaction-failed-routing.module';

import { TransactionFailedPage } from './transaction-failed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionFailedPageRoutingModule
  ],
  declarations: [TransactionFailedPage]
})
export class TransactionFailedPageModule {}
