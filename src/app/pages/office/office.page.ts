import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

import {OfficeServicesPage} from '../office-services/office-services.page'




@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit, AfterViewInit {
  
  texto:string = "Aqui va la descripcion fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
  oculto = 150;
  guardar:string = "heart-outline";
  imagenes = ['oficina.jpg', 'oficina_2.jpg'];
  
  constructor(
    private navCtrl: NavController,
    public alertController: AlertController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  
  }

  regresar()
  {
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }

  guardarOffice(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
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
            console.log('Confirm Okay');
            this.guardar = "heart";
            console.log(this.guardar);
          }
        }
      ]
    });

    await alert.present();
  }

  async servicios()
  {
    const modal = await this.modalCtrl.create({
      component: OfficeServicesPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngAfterViewInit()
  {
   
  } 
}
