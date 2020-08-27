import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectHoursPage } from './select-hours.page';

const routes: Routes = [
  {
    path: '',
    component: SelectHoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectHoursPageRoutingModule {}
