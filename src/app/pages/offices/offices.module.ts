import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficesPageRoutingModule } from './offices-routing.module';

import { OfficesPage } from './offices.page';

import { CalendarModule } from 'ion2-calendar';
import { FilterPage } from '../filter/filter.page';
import { FilterPageModule } from '../filter/filter.module';



@NgModule({
entryComponents: [
  FilterPage
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficesPageRoutingModule,
    FilterPageModule,
    CalendarModule
    
  ],
  declarations: [OfficesPage]
})
export class OfficesPageModule {}
