import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarMensajePage } from './mostrar-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarMensajePageRoutingModule {}
