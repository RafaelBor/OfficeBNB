import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, DayConfig, CalendarResult } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import {OficinaService} from '../../services/oficina.service'



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  
  dateRange: { from: string; to: string; };
  type: 'string'
  public tipos;

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    weekdays: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
    monthPickerFormat: ['Enero','Febrero','mars','avril ,mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    color: 'primary'
  };
  public active:boolean = false;

  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage,
    private _oficina: OficinaService

  ) { }

  ngOnInit() {
    this.obtenerTiposOficina();
  }

  tipoOficina(event)
  {
    console.log(event.detail.value);

    this.storage.get('ciudad').then((ciudad) =>{
      ciudad.tipo = event.detail.value;
      this.storage.set('ciudad', ciudad);
    });
    
    this.active = true;
  }

  obtenerTiposOficina()
  {
    this._oficina.tiposOficina().subscribe(
      res => {
        this.tipos = res.data
        console.log(this.tipos)
       }
    )
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
