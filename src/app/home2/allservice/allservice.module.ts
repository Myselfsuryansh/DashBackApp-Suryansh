import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllservicePageRoutingModule } from './allservice-routing.module';

import { AllservicePage } from './allservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllservicePageRoutingModule
  ],
  declarations: [AllservicePage]
})
export class AllservicePageModule {}
