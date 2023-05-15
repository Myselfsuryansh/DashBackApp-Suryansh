import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPlanPageRoutingModule } from './start-plan-routing.module';

import { StartPlanPage } from './start-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPlanPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StartPlanPage]
})
export class StartPlanPageModule {}
