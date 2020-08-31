import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficeServicesPageRoutingModule } from './office-services-routing.module';

import { OfficeServicesPage } from './office-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficeServicesPageRoutingModule
  ],
  declarations: [OfficeServicesPage]
})
export class OfficeServicesPageModule {}
