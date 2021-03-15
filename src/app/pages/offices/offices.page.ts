import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import { FilterPage } from '../filter/filter.page';
import {FiltrosService} from '../../services/filtros.service'
import {environment} from '../../../environments/environment'
import { Storage } from '@ionic/storage';
import {filtros} from '../../models/filtros'


declare var mapboxgl:any;

@Component({
  selector: 'app-offices',
  templateUrl: './offices.page.html',
  styleUrls: ['./offices.page.scss'],
})
export class OfficesPage implements OnInit, AfterViewInit {
  public scroll: any
  public scrollAct: number = 1

  public ciudad;
  public oficinas;
  public url;
  public filtros: filtros
  public oficinasObtenidas;

  
  public minPrecio:string;
  public maxPrecio:string;
  public horas = false;
  public dias = false;
  



  
  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController,
    private _filtros: FiltrosService,
    private storage: Storage
  ) {
    
    this.url = environment.apiUrl
    this.storage.get('ciudad').then((ciudad) =>{
      this.ciudad = ciudad.ciudad;
    });

    

    this.filtros = new filtros("", "", "", "", "", "", "", [], "", "");
   }

  async ngOnInit() {
    
   await this.obtenerOficinas();
   this.storage.get('reservarHoras').then((horas) =>{
    if(horas != undefined)
    {
      this.horas = true
      console.log(this.horas, "horas");
      return this.horas
    }else{
      this.horas = false
    }
  });

  this.storage.get('reservarDias').then((dias) =>{
    if(dias != undefined)
    {
      this.dias = true
      this.filtros.fecha_inicio = dias.fecha_inicio;
      this.filtros.fecha_final = dias.fecha_final;
      console.log(this.dias, "dias");
      return this.dias
    }
    else{
      this.dias = false
    }
  });
  }

  obtenerOficinas()
  {
    let ciudad = this.storage.get('ciudad').then((ciud) =>{
      ciudad = ciud.ciudad;
      console.log(this.filtros)
      this.filtros.ciudad = ciud.ciudad;
      this.filtros.tipo_oficina = ciud.tipo;
      console.log(this.filtros);
      this._filtros.Filtros(this.filtros).subscribe(
        response =>{
          console.log(response)
          if(response.status == "success")
          {
            this.oficinas = response.oficinas;
            this.oficinasObtenidas = this.oficinas.length;
           
            if(this.oficinas.length > 0){
              mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
              const map = new mapboxgl.Map({
              container: 'map',
              center: [this.oficinas[0].long_ubicacion, this.oficinas[0].lat_ubicacion],
              zoom: 10,
              style: 'mapbox://styles/mapbox/streets-v11'
              });
        
              console.log(this.oficinas);
            for(let i=0; i<this.oficinas.length; i++)
            {
              var marker = new mapboxgl.Marker()
              .setLngLat([this.oficinas[i].long_ubicacion, this.oficinas[i].lat_ubicacion])
              .addTo(map);
            }
            }
         
  
            else
            {
             
              mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
                const map = new mapboxgl.Map({
                container: 'map',
                center: [-99.70465124688212, 21.0560994973209],
                zoom: 10,
                style: 'mapbox://styles/mapbox/streets-v11'
                });
            }
          }
        }
      )
    })
    
  
  }

 

  mostrarOficina(id: number){
    this.navCtrl.navigateRoot('/office/' + id, {animated: true});
  }



  async filter()
  {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      cssClass: 'my-custom-class'
    });
     await modal.present();
    
    const {data} = await modal.onWillDismiss();
    console.log(data);

    if(data != undefined){
    this.filtros.nombre = data.filtros.nombre;
    this.filtros.rango_inicio = data.filtros.rango_inicio;
    this.filtros.rango_final = data.filtros.rango_final;
    this.filtros.servicios = data.filtros.servicios;
    this.filtros.tipo_oficina = data.filtros.tipo_oficina;
    this.obtenerOficinas();
    }
    
  }

  //Abrir modal de calendario
  
 

rangoPrecio(event)
{
    this.minPrecio = event.detail.value.lower;
    this.maxPrecio = event.detail.value.upper;
 
    if(this.dias)
    {
      if(this.maxPrecio != undefined && this.minPrecio != undefined)
        {
          this.filtros.rango_inicio = this.minPrecio;
          this.filtros.rango_final = this.maxPrecio;  
        }
    }

    if(this.horas)
    {
      if(this.maxPrecio != undefined && this.minPrecio != undefined)
        {
          this.filtros.rango_hora_inicio = this.minPrecio;
          this.filtros.rango_hora_final = this.maxPrecio;  
        }
    }
    
}

actualizarOficinas()
{
  this.obtenerOficinas();
}

  //Mapa
  ngAfterViewInit()
  {
   
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
