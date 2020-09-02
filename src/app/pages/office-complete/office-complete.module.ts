import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficeCompletePageRoutingModule } from './office-complete-routing.module';

import { OfficeCompletePage } from './office-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficeCompletePageRoutingModule
  ],
  declarations: [OfficeCompletePage]
})
export class OfficeCompletePageModule {}
