import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesOfficePageRoutingModule } from './rules-office-routing.module';

import { RulesOfficePage } from './rules-office.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesOfficePageRoutingModule
  ],
  declarations: [RulesOfficePage]
})
export class RulesOfficePageModule {}
