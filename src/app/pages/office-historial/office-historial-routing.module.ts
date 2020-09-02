import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeHistorialPage } from './office-historial.page';

const routes: Routes = [
  {
    path: '',
    component: OfficeHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeHistorialPageRoutingModule {}
