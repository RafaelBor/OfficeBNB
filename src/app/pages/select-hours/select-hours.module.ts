import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectHoursPageRoutingModule } from './select-hours-routing.module';

import { SelectHoursPage } from './select-hours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectHoursPageRoutingModule
  ],
  declarations: [SelectHoursPage]
})
export class SelectHoursPageModule {}
