import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
import {ReservasService} from '../../services/reservas.service'
import { ModalController } from '@ionic/angular';
import {StatusReservaPage} from '../status-reserva/status-reserva.page'
import {environment} from '../../../environments/environment'



@Component({
  selector: 'app-office-historial',
  templateUrl: './office-historial.page.html',
  styleUrls: ['./office-historial.page.scss'],
})
export class OfficeHistorialPage implements OnInit {

  public token;
  public reservas;
  public url
  

  constructor(
    private _login: LoginService,
    private _reservas: ReservasService,
    private modalCtrl: ModalController,
  ) {
    this.obtenerReservas();
    this.url = environment.apiUrl
   }

  ngOnInit() {
    
  }

  async obtenerReservas()
  {
    this.token = await this._login.getToken();

    this._reservas.obtenerReservasUsuario(this.token).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.reservas = response.reservas;
          console.log(this.reservas);
          
          this.reservas.horaInicio
         /* var fechaActual = moment();

            this.vigencia = moment(fechaActual).isBetween(this.reservas.fechaInicial, this.reservas.fechaFinal);
            console.log(this.vigencia);
          
        */
        }
      }
    )
    
    
  }

  
  async MostrarStatus(id)
  {
    
    const modal = await this.modalCtrl.create({
      component: StatusReservaPage,
      cssClass: 'status-reserva',
      componentProps: {
        id: id
      }
    });
    return await modal.present();
  }



}
