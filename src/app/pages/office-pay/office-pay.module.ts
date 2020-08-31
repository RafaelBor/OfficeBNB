import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficePayPageRoutingModule } from './office-pay-routing.module';

import { OfficePayPage } from './office-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficePayPageRoutingModule
  ],
  declarations: [OfficePayPage]
})
export class OfficePayPageModule {}
