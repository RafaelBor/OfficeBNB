import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';

import {OfficeServicesPage} from '../office-services/office-services.page'
import {GuardarOficinaService} from '../../services/guardar-oficina.service'


import {OficinaService} from '../../services/oficina.service'
import {ServiciosService} from '../../services/servicios.service'
import {global} from '../../services/global'
import {LoginService} from '../../services/login.service'
import {ReservasService} from '../../services/reservas.service'

import {oficinaGuardada} from '../../models/oficinaGuardada'
import { Storage } from '@ionic/storage';

import * as moment from 'moment';

declare var mapboxgl:any;


@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit, AfterViewInit {
  
  oculto = 150;
  guardar = "heart-outline";
 
  public guardada: oficinaGuardada;
  public status;
  public oficina;
  public url;
  public servicios;
  public identity;
  public token;
  public oficinas_guardadas = [];

  public statusReserva;

  public verificar = {
    id_usuario: "",
    id_oficina: 0
  }
  public numeroServicios: number;

  public existe: boolean = true;

  public dias = false;
  public horas = false;
  
  constructor(
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    private _route: ActivatedRoute,
    private _oficinas: OficinaService,
    private _servicios: ServiciosService,
    private _login: LoginService,
    private _guardarOficina: GuardarOficinaService,
    public alertController: AlertController, 
    private _reservas: ReservasService,
    private storage: Storage
  
  ) { 
    this.url = global.url;
    this.guardada = new oficinaGuardada(1, 1, 1);
    
    this.verificarReservaDias();
  }

 async ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id');
   
    this.obtenerOficina();
    this.obtenerServicios();
    this.identity = await this._login.getIdentity();
    console.log(this.identity);

    this.token = await this._login.getToken();

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
        console.log(this.dias, "dias");
        return this.dias
      }
      else{
        this.dias = false
      }
    });

  }

  ngAfterViewInit()
  {
    this.verificarGuardado();
  }

  regresar()
  {
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }

  obtenerOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._oficinas.obtenerOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success"
          console.log(this.oficina);

          mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsYm9yIiwiYSI6ImNrZTYzand1NDE5Y20ycXB1am9mbjFuOTgifQ.RHArcX_yJnsWGVjYawixxg';
          const map2 = new mapboxgl.Map({
          container: 'map2',
          center: [ this.oficina.long_ubicacion, this.oficina.lat_ubicacion],
          zoom: 16,
          style: 'mapbox://styles/mapbox/streets-v11'
          });
        
          var marker = new mapboxgl.Marker({
            draggable: false
            })
            .setLngLat([ this.oficina.long_ubicacion, this.oficina.lat_ubicacion])
            .addTo(map2);

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

 async guardarOffice(){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Quieres guardar esta oficina?',
      message: 'Al guardarla podras verla desde la seccion de guardados',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Guardar',
          handler: () => {
            let id = this._route.snapshot.paramMap.get('id');

            this.guardada.user_id = this.identity.sub;
            this.guardada.office_id = Number(id);
            this._guardarOficina.guardarOficina(this.guardada).subscribe(
              response=>{
                if(response.status == "success")
                {
                  this.guardada = response.guardadas;
                  console.log(this.guardada);
                  this.verificarGuardado();
                }
              }, error =>
              {
                console.log(error);
              }
            )  
          }
        }
      ]
    });

    await alert.present();
   
  }

async verificarGuardado()
  {
    this.token = await this._login.getToken();
    let id = this._route.snapshot.paramMap.get('id');
    this.verificar.id_oficina = Number(id);
    this.verificar.id_usuario = this.identity.sub;
    console.log(this.verificar);

    await this._guardarOficina.verificarOficina(this.verificar).subscribe(
      res => {
        console.log(res.existe);
        if(res.existe == 1)
        {
          this.existe = false;
        }else{
          this.existe = true;
        }
      }, error => {
        console.log(error);
      }
    )
    /*
   await this._guardarOficina.oficinasGuardadasUsuario(this.token).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          console.log(response.guardadas);
         for(let i=0; i<response.guardadas.length; i++)
          {
            console.log(response.guardadas[i].office_id);
            if(response.guardadas[i].office_id == id)
            {
              this.existe = false;
              break
            }else
            {
              this.existe = true;
            }
          }
        }
      }, error =>
      {
        console.log(error);
      }
    )
    */
  }

 async EliminarOficinaGuardada()
  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Quieres eliminar de guardados esta oficina?',
      message: 'Al eliminarla ya no podras verla desde la seccion de guardados',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            let id = this._route.snapshot.paramMap.get('id');
            this._guardarOficina.eliminarOficinaGuardados(id, this.token).subscribe(
              response => {
                if(response.status == "success")
                {
                  this.existe = true;
                }
              }
            )
          }
        }
      ]
    });

    await alert.present();


  }

  async MostrarServicios()
  {
    let id = this._route.snapshot.paramMap.get('id');
    const modal = await this.modalCtrl.create({
      component: OfficeServicesPage,
      cssClass: 'my-custom-class',
      componentProps: {
        id: id
      }
    });
    return await modal.present();
  }

  obtenerServicios()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._servicios.getServiciosOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.servicios = response.servicios;
          this.status == "success"
          this.numeroServicios = this.servicios.length;
          console.log(this.servicios);
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

  verificarReservaDias()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this.storage.get('reservarDias').then((dias) =>{
      if(dias != undefined)
      {
        var fechas = {
          fecha_inicio: dias.fecha_inicio,
          fecha_final: dias.fecha_final
        }

        this._reservas.verficarReservaDias(id, fechas).subscribe(
          response =>
          {
            if(response.status == "success")
            {
              this.statusReserva = response.reserva;
              console.log(this.statusReserva);
            }
          }
        )
      }
    });

    this.storage.get('reservarHoras').then((horas) =>
    {
      if(horas != undefined)
      {
        var horaInicioFormt = moment(horas.horaInicio).format('YYYY-MM-DDTHH:mm:ss');
        var horaFinalFormt = moment(horas.horaFinal).format('YYYY-MM-DDTHH:mm:ss');
        var dia = moment(horas.dia).format('YYYY-MM-DD');
        var fechas = {
          diaReserva: dia,
          horaInicio: horaInicioFormt,
          horaFinal: horaFinalFormt
        }
        console.log(fechas);
        this._reservas.verficarReservaHoras(id, fechas).subscribe(
          response =>
          {
            if(response.status == "success")
            {
              this.statusReserva = response.reserva;
              console.log(this.statusReserva);
            }
          }
        )
      }
    })

  
    

  }




}
