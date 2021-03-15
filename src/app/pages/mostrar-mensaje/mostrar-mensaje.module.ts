import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarMensajePageRoutingModule } from './mostrar-mensaje-routing.module';

import { MostrarMensajePage } from './mostrar-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarMensajePageRoutingModule
  ],
  declarations: [MostrarMensajePage]
})
export class MostrarMensajePageModule {}
