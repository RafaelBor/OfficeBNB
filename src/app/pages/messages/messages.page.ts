import { Component, OnInit } from '@angular/core';
import {MensajesService} from '../../services/mensajes.service'
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  public token;
  public usuario = [];
  public arrendador = [];
  constructor(
    private _auth: LoginService,
    private _mensajes: MensajesService
  ) { 
   
  }

  ngOnInit() {
    this.obtenerMensajes();
  }



 async obtenerMensajes()
  {
    this.token = await this._auth.getToken();
    this._mensajes.obtenerMensajes(this.token).subscribe(
      res =>{
        this.usuario = res.usuario;
        this.arrendador = res.arrendador
        console.log(this.arrendador)
        console.log(this.usuario)
      }, error =>{
        console.log(error)
      }
    )
  }

}
