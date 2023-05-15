import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Airteldigital2PageRoutingModule } from './airteldigital2-routing.module';

import { Airteldigital2Page } from './airteldigital2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Airteldigital2PageRoutingModule
  ],
  declarations: [Airteldigital2Page]
})
export class Airteldigital2PageModule {}
