import { Component, OnInit, ViewChild } from '@angular/core';
import {MensajesService} from '../../services/mensajes.service'
import {LoginService} from '../../services/login.service'
import { NavController, IonSlide, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  @ViewChild( 'slidePrincipal', {static: true} ) slides: IonSlides;

  public token;
  public usuarios = [];
  public arrendadores = [];
 
  constructor(
    private _auth: LoginService,
    private _mensajes: MensajesService,
    private navCtrl: NavController
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
        this.usuarios = res.usuario;
        this.arrendadores = res.arrendador

        console.log(this.arrendadores)
        console.log(this.usuarios)
      }, error =>{
        console.log(error)
      }
    )
  }

  mostrarMensaje(id)
  {
    this.navCtrl.navigateRoot('/mostrar-mensaje/'+ id, {animated: true});
  }

  mostrarMensajeArrendador(id)
  {
    this.navCtrl.navigateRoot('/mostrar-mensaje-arrendador/'+ id, {animated: true});
  }

  mensajesUsuario(){
    this.slides.lockSwipes( false );
    this.slides.slideTo(0);
    this.slides.lockSwipes( true );
  }

  mensajesArrendador(){
    this.slides.lockSwipes( false );
    this.slides.slideTo(1);
    this.slides.lockSwipes( true );
  }

}
