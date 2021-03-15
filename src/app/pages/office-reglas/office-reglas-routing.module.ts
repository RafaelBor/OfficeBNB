import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeReglasPage } from './office-reglas.page';

const routes: Routes = [
  {
    path: '',
    component: OfficeReglasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeReglasPageRoutingModule {}
