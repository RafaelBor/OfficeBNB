import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import { CalendarComponentOptions, CalendarModalOptions, CalendarModal, DayConfig, CalendarResult } from 'ion2-calendar';

import { FilterPage } from '../filter/filter.page';


declare var mapboxgl:any;

@Component({
  selector: 'app-offices',
  templateUrl: './offices.page.html',
  styleUrls: ['./offices.page.scss'],
})
export class OfficesPage implements OnInit, AfterViewInit {
  public scroll: any
  public scrollAct: number = 1

  

  dateRange: { from: string; to: string; };
  type: 'string'

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    weekdays: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
    monthPickerFormat: ['Enero','Febrero','mars','avril ,mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
    color: 'primary'
  
  };

  
  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  mostrarOficina(){
    this.navCtrl.navigateRoot('/office', {animated: true});
  }

  async calendar()
  {
    this.openCalendar();
  }

  async filter()
  {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  
  }



  //Abrir modal de calendario
  async openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Fechas',
      color:'primary',
      weekdays: ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'],
      doneLabel: "buscar",
      
      
    };

  let myCalendar =  await this.modalCtrl.create({
    component: CalendarModal,
    componentProps: { options },
    presentingElement: await this.modalCtrl.getTop()
  });

  myCalendar.present();

 // myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
   // console.log(date);
  //});

}

  //Mapa
  ngAfterViewInit()
  {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzY2dhbDE4eWwzMHN6Y2pxeHRwMGkifQ.8WPNmFO5tD1BDMpbCnMPgQ';
      const map = new mapboxgl.Map({
      container: 'map',
      center: [-110.97732, 29.1026],
      zoom: 11,
      style: 'mapbox://styles/mapbox/streets-v11'
      });

      var marker = new mapboxgl.Marker()
        .setLngLat([-110.97732, 29.1026])
        .addTo(map);

        var marker = new mapboxgl.Marker()
        .setLngLat([-110.997434, 29.0937761])
        .addTo(map);
  } 

  //Scrolling
  async logScrolling(event) {
    const scrollElement = await event.target.getScrollElement();
    const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
    const scrollPositionToTop = event.detail.scrollTop;

    this.scroll = scrollPositionToTop;
    //console.log("Altura de scroll: ", scrollHeight);
    //console.log("Posición del scroll: ", scrollPositionToTop);
    //console.log(this.scroll);

    if(this.scroll > 150)
    {
      this.scrollAct = 0;
    }else{
      this.scrollAct = 1;
    }
  }

  

}
