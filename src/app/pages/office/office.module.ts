import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficePageRoutingModule } from './office-routing.module';

import { OfficePage } from './office.page';

import {OfficeServicesPage } from '../office-services/office-services.page'
import {OfficeServicesPageModule} from '../office-services/office-services.module'



@NgModule({
  entryComponents: [
    OfficeServicesPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficePageRoutingModule,
    OfficeServicesPageModule
    
  ],
  declarations: [OfficePage]
})
export class OfficePageModule {}
