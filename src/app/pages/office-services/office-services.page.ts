import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-office-services',
  templateUrl: './office-services.page.html',
  styleUrls: ['./office-services.page.scss'],
})
export class OfficeServicesPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
