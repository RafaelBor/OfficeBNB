import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficeHistorialPageRoutingModule } from './office-historial-routing.module';

import { OfficeHistorialPage } from './office-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficeHistorialPageRoutingModule
  ],
  declarations: [OfficeHistorialPage]
})
export class OfficeHistorialPageModule {}
