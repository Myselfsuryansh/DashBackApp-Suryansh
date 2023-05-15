import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AirteldigitalPageRoutingModule } from './airteldigital-routing.module';

import { AirteldigitalPage } from './airteldigital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirteldigitalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AirteldigitalPage]
})
export class AirteldigitalPageModule {}
