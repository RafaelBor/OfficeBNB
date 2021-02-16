import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
import {Usuario} from '../../models/usuario'
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;


declare var window: any;
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  public identity;
  public usuario: Usuario
  public token;
  constructor(
    private _login: LoginService,
    private storage: Storage,
    public toastController: ToastController,
   
  ) {
    this.usuario = new Usuario(1, 1,"", "", "", "", "", "", "");
    this.obtenerIdentity();
    
   }

  ngOnInit() {
    
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }


 async onSubmit(Form)
  {
    this.token = await this._login.getToken();
    console.log(this.token);
    console.log(this.usuario);

    this._login.update(this.usuario, this.token).subscribe(
      response =>{
        if(response.status == "success")
        {
         if(response.changes.nombre)
         {
           this.identity.nombre = response.changes.nombre
         }

         if(response.changes.apellidos)
         {
           this.identity.apellidos = response.changes.apellidos
         }

         if(response.changes.celular)
         {
           this.identity.celular = response.changes.celular
         }

         if(response.changes.domicilio)
         {
           this.identity.domicilio = response.changes.domicilio
         }

         if(response.changes.imagen)
         {
           this.identity.imagen = response.changes.imagen
         }

         console.log(this.identity);
        this.storage.set('identity', JSON.stringify(this.identity));

        let mensaje = "Los datos se han actualizado con exito";
        this.presentToast(mensaje);
        

        }
      }, error =>{
        console.log(error);
      }
    )

  }

  avatarUpload()
  {
  
  }

  async obtenerIdentity()
  {
    this.identity = await this._login.getIdentity();
    console.log(this.identity);
    this.usuario.nombre = this.identity.nombre;
    this.usuario.apellidos = this.identity.apellidos;
    this.usuario.email = this.identity.email
    this.usuario.celular = this.identity.celular;
    this.usuario.domicilio = this.identity.domicilio;
    this.usuario.imagen = this.identity.imagen;
  }

}
