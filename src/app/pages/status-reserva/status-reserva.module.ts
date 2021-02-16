import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusReservaPageRoutingModule } from './status-reserva-routing.module';

import { StatusReservaPage } from './status-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusReservaPageRoutingModule
  ],
  declarations: [StatusReservaPage]
})
export class StatusReservaPageModule {}
