import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
    dateRange: { from: string; to: string; };
    type: 'string'

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    weekdays: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
    monthPickerFormat: ['Enero','Febrero','mars','avril ,mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    color: 'primary'
   
  };

  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
   this.openCalendar();
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Range',
      color:'primary',
      weekdays: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
      
    };

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options },
    presentingElement: await this.modalCtrl.getTop()
  });

  myCalendar.present();
}

}
