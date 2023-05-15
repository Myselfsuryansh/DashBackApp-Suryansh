import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasBill3PageRoutingModule } from './gas-bill3-routing.module';

import { GasBill3Page } from './gas-bill3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasBill3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GasBill3Page]
})
export class GasBill3PageModule {}
