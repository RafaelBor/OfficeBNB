import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficeReglasPageRoutingModule } from './office-reglas-routing.module';

import { OfficeReglasPage } from './office-reglas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficeReglasPageRoutingModule
  ],
  declarations: [OfficeReglasPage]
})
export class OfficeReglasPageModule {}
