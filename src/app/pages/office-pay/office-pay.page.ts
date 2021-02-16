import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {global} from '../../services/global'
import { ModalController } from '@ionic/angular';
import {OficinaService} from '../../services/oficina.service'
import {ReservasService} from '../../services/reservas.service'
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import {BuscarCuponPage} from '../buscar-cupon/buscar-cupon.page'

@Component({
  selector: 'app-office-pay',
  templateUrl: './office-pay.page.html',
  styleUrls: ['./office-pay.page.scss'],
})
export class OfficePayPage implements OnInit {

  public status;
  public oficina;
  public fecha_inicio;
  public fecha_final;
  public url;
  public duracion;
  public precio_renta;
  public comision;
  public total;
  public descuento: number = 0;
  
  
  //Saber si rentaron por fecha o hora
  public horas = false;
  public dias = false;

  //Variables para rentar por horas:
  public dia = null
  public horaInicio;
  public horaFinal


  public horaInicioFormat;
  public horaFinalFormat

  constructor(
    private modalCtrl: ModalController,
    private _oficinas: OficinaService,
    private _route: ActivatedRoute,
    private storage : Storage,
    private _reservas: ReservasService
  ) {
   // this.fecha_inicio =  localStorage.getItem('fecha_inicio');
    //this.fecha_final =  localStorage.getItem('fecha_final');
    
    this.comision = 300;
    this.url = global.url;

    this.storage.get('reservarHoras').then((horas) =>{
      if(horas != undefined)
      {
        this.horas = true
        this.dias = false
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
        this.horas = false
        console.log(this.dias, "dias");
        return this.dias
      }
      else{
        this.dias = false
      }
    });
   
   }

  ngOnInit() {
    this.obtenerOficina();

  }

  obtenerOficina(){
   
    let id = this._route.snapshot.paramMap.get('id');

    this._oficinas.obtenerOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success"
          console.log(this.oficina);
          if(this.dias = true){
            this.obtenerFechas();
          }

          if(this.horas = true)
          {
            this.obtenerHoras();
          }
         
        }
        else{
          this.status == "error"
        }
      },error =>
      {
        console.log(error);
      }
    )
  }


  obtenerFechas()
  {
    const fecha_inicio = this.storage.get('reservarDias').then((reserva)=>{
      if(reserva != undefined)
      {
        this.dias = true
        this.horas = false;
      this.fecha_inicio = reserva.fecha_inicio
      var fechaInicial = moment(this.fecha_inicio);

      this.fecha_final = reserva.fecha_final
      var fechaFinal = moment(this.fecha_final);

      this.duracion = moment(fechaFinal.diff(fechaInicial, 'days', true))
      console.log(this.duracion); 
      this.precio_renta = this.oficina.precio_dia * this.duracion;
      console.log(this.precio_renta);
      this.total = this.precio_renta + this.comision - this.descuento;
      this._reservas.total = this.total;
    }
    });
  }

  obtenerHoras()
  {
    const horas = this.storage.get('reservarHoras').then((reservaHoras)=>
    {
      if(reservaHoras != undefined){
        this.horas = true;
        this.dias = false;
      //Obtener el dia de reserva
      this.dia = moment(new Date(reservaHoras.dia))

      //obtener y formatear la hora de inicio
      this.horaInicio = moment(new Date(reservaHoras.horaInicio))
      this.horaInicioFormat = moment(this.horaInicio).format('HH');
      this.horaInicio.hours();

      //obtener y formatear la hora final
      this.horaFinal = moment(new Date(reservaHoras.horaFinal))
      this.horaFinalFormat = moment(this.horaFinal).format('HH');
      this.horaFinal.hours();

      //obtener el rango de horas
      this.duracion = moment(this.horaFinal.diff(this.horaInicio, 'hours', true))
      console.log(this.duracion); 

      //obtener el precio de renta 
      this.precio_renta = this.oficina.precio_hora * this.duracion;

      //sacar el costo total sumandole la comision del servicio
      this.total = this.precio_renta + this.comision

      //Mandar por un servicio el total para resivirlo en la pagina del cobro con tarjeta
      this._reservas.total = this.total;
    }
    })
  }

 async buscarCupon()
  {
    const modal = await this.modalCtrl.create({
      component: BuscarCuponPage,
      cssClass: 'ingresar-cupon',
     
    });
      await modal.present();

    const {data} = await modal.onWillDismiss();

    if(data != undefined)
    {
      this.descuento = data.cantidad
      this.obtenerFechas();
    }
  }

}
