import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficesSavePage } from './offices-save.page';

const routes: Routes = [
  {
    path: '',
    component: OfficesSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficesSavePageRoutingModule {}
