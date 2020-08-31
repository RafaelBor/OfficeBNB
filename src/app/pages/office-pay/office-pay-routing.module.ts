import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficePayPage } from './office-pay.page';

const routes: Routes = [
  {
    path: '',
    component: OfficePayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficePayPageRoutingModule {}
