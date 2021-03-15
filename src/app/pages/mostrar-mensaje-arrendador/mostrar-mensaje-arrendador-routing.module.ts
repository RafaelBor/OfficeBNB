import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarMensajeArrendadorPage } from './mostrar-mensaje-arrendador.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarMensajeArrendadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarMensajeArrendadorPageRoutingModule {}
