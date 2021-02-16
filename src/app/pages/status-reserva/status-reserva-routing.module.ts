import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusReservaPage } from './status-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: StatusReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusReservaPageRoutingModule {}
