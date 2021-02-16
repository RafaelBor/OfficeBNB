import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarCuponPageRoutingModule } from './buscar-cupon-routing.module';

import { BuscarCuponPage } from './buscar-cupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarCuponPageRoutingModule
  ],
  declarations: [BuscarCuponPage]
})
export class BuscarCuponPageModule {}
