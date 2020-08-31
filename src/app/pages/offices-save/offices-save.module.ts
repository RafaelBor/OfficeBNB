import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficesSavePageRoutingModule } from './offices-save-routing.module';

import { OfficesSavePage } from './offices-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficesSavePageRoutingModule
  ],
  declarations: [OfficesSavePage]
})
export class OfficesSavePageModule {}
