import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SequirityprivacyPageRoutingModule } from './sequirityprivacy-routing.module';

import { SequirityprivacyPage } from './sequirityprivacy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SequirityprivacyPageRoutingModule
  ],
  declarations: [SequirityprivacyPage]
})
export class SequirityprivacyPageModule {}
