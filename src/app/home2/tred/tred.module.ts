import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TredPageRoutingModule } from './tred-routing.module';

import { TredPage } from './tred.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TredPageRoutingModule
  ],
  declarations: [TredPage]
})
export class TredPageModule {}
