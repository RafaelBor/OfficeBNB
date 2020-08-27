import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  public minPrecio;
  public maxPrecio

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  rangoPrecio(event)
  {
    console.log(event);
    this.minPrecio = event.detail.value.lower;
    this.maxPrecio = event.detail.value.upper
    console.log(this.minPrecio);
    console.log(this.maxPrecio);
  }



}
