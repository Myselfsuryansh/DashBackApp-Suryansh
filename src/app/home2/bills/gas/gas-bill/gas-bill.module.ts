import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasBillPageRoutingModule } from './gas-bill-routing.module';

import { GasBillPage } from './gas-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasBillPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GasBillPage]
})
export class GasBillPageModule {}
