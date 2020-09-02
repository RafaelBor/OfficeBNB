import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeCompletePage } from './office-complete.page';

const routes: Routes = [
  {
    path: '',
    component: OfficeCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeCompletePageRoutingModule {}
