import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NavController, IonSlide, IonSlides } from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Usuario} from '../../models/usuario'
import {LoginService} from '../../services/login.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { 

  @ViewChild( 'slidePrincipal', {static: true} ) slides: IonSlides;

  public usuario: Usuario
  public status: string;
  public token;
  public identity;
  public registrar:string;

  constructor(
    private navCtrl: NavController,
 
    private _login: LoginService,
    private storage: Storage
  ) {
    this.usuario = new Usuario(1, 1, "", "", "", "", "", "", "");
   }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }


  onSubmit(form){
    this._login.signup(this.usuario).subscribe(
      response => {
        //TOKEN
        if(response.status != 'error')
        {
          this.status = 'success';
          this.token = response;
  
          //USUARIO IDENTIFICADO
          this._login.signup(this.usuario, true).subscribe(
            response =>{
              this.identity = response;
  
              console.log(this.token);
              console.log(this.identity);
  
              //PERSISTIR DATOS DEL USUARIO
              this.storage.set('token', this.token);
              
              this.storage.set('identity', JSON.stringify(this.identity));

 
              this.navCtrl.navigateRoot('/tabs/home', {animated: true});
  
            },
            error =>{
              this.status = 'error'
              console.log(<any> error);
            }
          );
        }else{
          this.status = 'error';
          console.log('error');
        }
      }, error => {
        this.status = 'error'
        console.log(<any> error);
      }
    )
    
  }

  registro(fRegistro: NgForm){
    this._login.register(this.usuario).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.registrar = "success"
          console.log(this.registrar);
        }
        else{
          this.registrar = "error";
          console.log(this.registrar)
        }
      },error =>
      {
        this.registrar = "error"
        console.log(error);
      }
    )
  }

  mostrarRegistro(){
    this.slides.lockSwipes( false );
    this.slides.slideTo(0);
    this.slides.lockSwipes( true );
  }

  mostrarLogin(){
    this.slides.lockSwipes( false );
    this.slides.slideTo(1);
    this.slides.lockSwipes( true );
  }

}
