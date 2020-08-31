import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeServicesPage } from './office-services.page';

const routes: Routes = [
  {
    path: '',
    component: OfficeServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeServicesPageRoutingModule {}
