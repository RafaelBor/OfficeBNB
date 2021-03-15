import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {filtros} from '../../models/filtros'
import {ServiciosService} from '../../services/servicios.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})

export class FilterPage implements OnInit {
  public minPrecio;
  public maxPrecio;
  public filtros: filtros;
  public servicios;

  public tipo;
  public serviciosFiltro = [];
  
  data = [
    {
      tipo: 'Compartida',
      isChecked: false
    },
    {
      tipo: 'Ejecutiva',
      isChecked: false
    }
  ]

  constructor(
    public modalCtrl: ModalController,
    private _servicios: ServiciosService
  ) { 
    this.filtros = new filtros("", "", "", "", "", "", "", [], "", "");
    
  }

  ngOnInit() {
    this.obtenerServicios();
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  rangoPrecio(event)
  {
    
    this.minPrecio = event.detail.value.lower;
    this.maxPrecio = event.detail.value.upper
    
  }


  filter()
  {
    if(this.maxPrecio != undefined && this.minPrecio != undefined)
    {
      this.filtros.rango_inicio = this.minPrecio;
      this.filtros.rango_final = this.maxPrecio;
    }
    this.modalCtrl.dismiss({
      filtros: this.filtros

    })
  }

  prueba(servicio){
    
    var existe = 0;
    
   for(let i=0; i<=this.filtros.servicios.length; i++)
   {
     if(this.filtros.servicios.includes(servicio.nombreServicio))
     {
      existe = 0
     
     }else{
       existe = 1
     }
   }

   if(existe == 1)
   {
    this.filtros.servicios.push(servicio.nombreServicio)
   }

   if(existe == 0)
   {
    var index = this.filtros.servicios.indexOf(servicio.nombreServicio);
    if (index > -1) {
      this.filtros.servicios.splice(index, 1);
   }
   }
   
   // console.log(this.serviciosFiltro);

  //  this.filtros.servicios = this.serviciosFiltro;
    console.log(this.filtros.servicios);
    
  }

  tipoOficina(tipo)
  {
    this.filtros.tipo_oficina = tipo;
    console.log(this.filtros.tipo_oficina);
  }

  obtenerServicios()
  {
    this._servicios.getServicios().subscribe(
      response =>{
        if(response.status == "success")
        {
          this.servicios = response.servicio;
          console.log(this.servicios);

          
        }
      }
    )
  }

 



}
