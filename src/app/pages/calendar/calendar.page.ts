import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  
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

  ) { }

  ngOnInit() {
    
  }

  horas()
  {
    this.navCtrl.navigateRoot('/select-hours', {animated: true});
  }

  dias()
  {
    this.openCalendar();
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Seleccionar',
      color:'primary',
      weekdays: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
      doneLabel: "buscar",
      closeLabel: ""
      
      
    };

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options },
    presentingElement: await this.modalCtrl.getTop()
  });

  myCalendar.present();

  console.log(event);

  myCalendar.onDidDismiss()
  {
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
      
  }

  
}
 

  onClick(){

  //  if(this.dateRange){
    //  console.log(this.dateRange.from);
    //}
    
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }
  
  

}