import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent} from './calendar/calendar.component';
import { CalendarModule } from 'ion2-calendar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule

  ], exports: [
    CalendarComponent
  ]
})
export class ComponentsModule { }
