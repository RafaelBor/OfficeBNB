import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NavController, IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild( 'slidePrincipal', {static: true} ) slides: IonSlides;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }


  onSubmit(form){
    this.navCtrl.navigateRoot('/tabs/home', {animated: true});
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
