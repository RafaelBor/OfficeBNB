import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login.service'
import {OficinaService} from '../../services/oficina.service'
import {ReservasService} from '../../services/reservas.service';
import { NavController } from '@ionic/angular';
import {Mensaje} from '../../models/mensaje'
import {MensajesService} from '../../services/mensajes.service'

import {Reservas} from '../../models/reservas'
import * as moment from 'moment';

//import { Stripe } from '@ionic-native/stripe/ngx';
declare var Stripe;
@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.page.html',
  styleUrls: ['./credit-card-details.page.scss'],
})
export class CreditCardDetailsPage implements OnInit {
  
  
  public reserva: Reservas;
  public mensaje: Mensaje;
  public identity;
  public token;
  public oficina;
  public status;
  public total;
  public fecha_inicio;
  public fecha_final;

  public reservaUsuario;
  public existe = 0;
  //public objeto;

  public diaReserva;
  public horaInicio;
  public horaFinal

  public dias = false;
  public horas = false;

   stripe = Stripe('pk_test_51HjGqLJd9XjHzGaXKgbtrBvFZdulx6pr24plqB9zu03lKhgU5lNvshJ89JvuiqekOjq3xV2QzZibimxPABU5X4Xz00mRAWGY3i');//We also use our publishable key from stripe
   card: any;//Declare this variable for later
   
  constructor(
    private _login: LoginService,
    private _route: ActivatedRoute,
    private _oficinas: OficinaService,
    private _reservas: ReservasService,
    private storage: Storage,
    private navCtrl: NavController,
    private _mensajes: MensajesService

  ) {
    this.obtenerIdentity();
    this.total = this._reservas.total;
    this.reserva = new Reservas(1, 1, 1, 1, "", "", "", "", "", "");
    this.mensaje = new Mensaje( 1 ,1);
    this.obtenerFechas();
    this.obtenerToken();
   }
  
   
  ngOnInit() {
    this.obtenerOficina();
    this.setupStripe();
    this.verificarExistencia();
    
    
  }

 async obtenerIdentity()
  {
    this.identity = await this._login.getIdentity();
  }

  async obtenerToken()
  {
    this.token = await this._login.getToken();
    console.log(this.token);
  }

  nuevoMensaje(arrendador, usuario )
  {
    this.mensaje.id_arrendador = arrendador;
    this.mensaje.id_usuario = usuario;

    console.log(this.mensaje);
    this._mensajes.crearMensaje(this.mensaje).subscribe(
      res => {
        if(res.status == "success")
        {
          console.log(res)
        }
      }, error => {
        console.log(error)
      }
    )

  }

  CrearReserva()
  {
    this.obtenerIdentity();
    this.obtenerFechas();
    this.obtenerToken();

    this.reserva.id_usuario = this.identity.sub;
    this.reserva.id_office = this.oficina.id;
    this.reserva.id_arrendador = this.oficina.id_usuario;
    this.reserva.total = this.total;

    //RELLENAR LOS DATOS DE RESERVA VALIDANDO SI SE VA RENTAR POR HORA
    if(this.horas == true)
    {
      this.reserva.diaReserva = this.diaReserva;
      this.reserva.horaInicio = this.horaInicio;
      this.reserva.horaFinal = this.horaFinal;
    }else{
      this.reserva.diaReserva = null;
      this.reserva.horaInicio = null;
      this.reserva.horaFinal = null;
    }

    //RELLENAR LOS DATOS DE RESERVA VALIDANDO SI SE VA RENTAR POR DIA
    if(this.dias == true)
    {
      this.reserva.fechaInicio = this.fecha_inicio;
      this.reserva.fechaFinal = this.fecha_final;
    }else{
      this.reserva.fechaInicio = null;
      this.reserva.fechaFinal = null;
    }
    
/*
    for(let i=0; i<this.reservaUsuario.length; i++)
    {

      console.log(this.oficina.id, this.reservaUsuario[i].id_office);
      if(this.oficina.id == this.reservaUsuario[i].id_office)
      {
        this.existe += 1;
        console.log(this.existe);
        break
        
      }else{
        this.existe = 0
      }
    }
    */
   console.log(this.existe);
    if(this.existe == 0){
      console.log(this.reserva)
      this._reservas.createReserva(this.reserva).subscribe(
        response =>
        {
          if(response.status == "success")
          {
            this.reserva = response.reserva;
            console.log(this.reserva);
      
            this.nuevoMensaje(this.oficina.id_usuario, this.identity.sub)
      
          }
        }, error =>
        {
          console.log(error);
        }
        )
    }

    if(this.existe == 1)
    {
      console.log("actualizada")
      this._reservas.updateReserva(this.reserva).subscribe(
        response =>
        {
          
          if(response.status == "success")
          {
            this.reserva = response.changes;
            console.log(this.reserva);
            this.nuevoMensaje(this.oficina.id_usuario, this.identity.sub)
              }
              
        }, error =>
        {
          console.log(error);
        }
      )
    }
   

  }

  verificarExistencia()
  {
    this.token = this._login.getToken();
  
    let id = this._route.snapshot.paramMap.get('id');

    this._reservas.verificarExisteReserva(id, this.token).subscribe(
      res =>
      {
        if(res.status == "success")
        {
          this.existe = res.existe;
          console.log(this.existe);
        }
      }, error => {
        console.log(error)
      }
    )
    /*
    this._reservas.obtenerReservasUsuario(this.token).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.reservaUsuario = response.reservas;
          console.log(this.reservaUsuario);
        }
      }
    )
    */

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
    //OBTENER DATOS DEL STORAGE PARA RESERVAR POR DIA
    const fecha_inicio = this.storage.get('reservarDias').then((reserva)=>{
      if(reserva != undefined){
        this.fecha_inicio = reserva.fecha_inicio
        this.fecha_final = reserva.fecha_final
        this.dias = true;
      }else
      {
        this.dias = false
      }
      
    });

    //OBTENER DATOS DEL STORAGE PARA RESERVAR POR HORA
    const reservarHoras = this.storage.get('reservarHoras').then((reservarHoras)=>{
      if(reservarHoras != undefined)
      {
        var horaInicioForm = moment(new Date(reservarHoras.horaInicio));
        var horaIn = moment(horaInicioForm).format('YYYY-MM-DDTHH:mm:ss');
        this.horaInicio = horaIn;

        var horaFinalForm = moment(new Date(reservarHoras.horaFinal));
        var horaFin = moment(horaFinalForm).format('YYYY-MM-DDTHH:mm:ss');
        this.horaFinal = horaFin

        var diaReservaForm = moment(new Date(reservarHoras.dia));
        var diaRes = moment(diaReservaForm).format('YYYY-MM-DD');
        this.diaReserva = diaRes;

        this.horas = true;
      }
      else{
        this.horas = false
      }
      
    })
  }
  
  setupStripe(){
    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        },
       
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };
 
    this.card = elements.create('card', { style: style });
 
    this.card.mount('#card-element');
 
    this.card.addEventListener('change', event => {
      var displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
 
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
 
      // this.stripe.createToken(this.card)
      this.stripe.createSource(this.card).then(result => {
        if (result.error) {
          var errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          console.log(result);
          result.source.mount = this.total;
          this._reservas.pruebaPago(result, this.token).subscribe(
            res =>{
              console.log(result);
              
              if(res.status == "success")
              {
                this.CrearReserva();
                this.navCtrl.navigateRoot('/office-complete', {animated: true});
               
              }
            }, error =>{
              console.log(error);
            }
          )
        }
      });
    });
  }
}
