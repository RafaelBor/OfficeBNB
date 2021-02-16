import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarCuponPage } from './buscar-cupon.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarCuponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarCuponPageRoutingModule {}
