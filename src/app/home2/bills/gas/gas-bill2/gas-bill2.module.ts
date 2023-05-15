import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasBill2PageRoutingModule } from './gas-bill2-routing.module';

import { GasBill2Page } from './gas-bill2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasBill2PageRoutingModule
  ],
  declarations: [GasBill2Page]
})
export class GasBill2PageModule {}
