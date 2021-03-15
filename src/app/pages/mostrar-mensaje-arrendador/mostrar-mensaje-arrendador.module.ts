import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarMensajeArrendadorPageRoutingModule } from './mostrar-mensaje-arrendador-routing.module';

import { MostrarMensajeArrendadorPage } from './mostrar-mensaje-arrendador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarMensajeArrendadorPageRoutingModule
  ],
  declarations: [MostrarMensajeArrendadorPage]
})
export class MostrarMensajeArrendadorPageModule {}
