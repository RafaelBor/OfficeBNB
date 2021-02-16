import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ReservasService} from '../../services/reservas.service'
import {global} from '../../services/global'

import * as moment from 'moment';
@Component({
  selector: 'app-status-reserva',
  templateUrl: './status-reserva.page.html',
  styleUrls: ['./status-reserva.page.scss'],
})
export class StatusReservaPage implements OnInit {

  @Input() id: number;
  public reserva;
  public disponible;
  public espera;
  public finalizada;
  public url

  constructor(
    public modalCtrl: ModalController,
    public _reserva: ReservasService
  ) {
    this.url = global.url
   }

  ngOnInit() {
    this.obtenerReserva();
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  obtenerReserva()
  {
    console.log(this.id);
    this._reserva.obtenerReserva(this.id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.reserva = response.reserva;
          

          var fechaActual = moment();
          console.log(fechaActual);
          
          if(this.reserva.fechaInicio != null)
          {
            this.disponible = moment(fechaActual).isBetween(this.reserva.fechaInicio, this.reserva.fechaFinal);
            

            this.espera = moment(fechaActual).isBefore(this.reserva.fechaInicio);
           

            this.finalizada = moment(fechaActual).isAfter(this.reserva.fechaFinal);
          }

          if(this.reserva.diaReserva != null)
          {
            this.disponible = moment(fechaActual).isSame(this.reserva.diaReserva);

            this.espera = moment(fechaActual).isBefore(this.reserva.diaReserva);

            
            this.finalizada = moment(fechaActual).isAfter(this.reserva.diaReserva);
          }
            
        }
      }
    )
  }

}
