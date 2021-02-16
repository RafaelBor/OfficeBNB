import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';


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
    private storage: Storage

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
      closeLabel: "Cancelar"
      
      
    };

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options },
    presentingElement: await this.modalCtrl.getTop()
  });

  myCalendar.present();

 


  const event : any = await myCalendar.onDidDismiss();
  const {data: date, role} = event;

  if (role === 'done') {
    this.dateRange = Object.assign({}, {
      from: date.from.dateObj,
      to: date.to.dateObj
    });
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }

  var reservarDias = {
    fecha_inicio: date.from.string,
    fecha_final: date.to.string
  }

  this.storage.set('reservarDias', reservarDias);

  this.storage.remove('reservarHoras');
  
  console.log(moment(date).format('LL') ); 
 // this.storage.set('fecha_inicio', date.from.string);
 // this.storage.set('fecha_final', date.to.string);
  //localStorage.setItem('fecha_inicio', date.from.string);
  //localStorage.setItem('fecha_final', date.to.string);
  
}
 

  onClick(){

  //  if(this.dateRange){
    //  console.log(this.dateRange.from);
    //}
    
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }
  
  

}
