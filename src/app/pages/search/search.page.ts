import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OfficesPage } from '../offices/offices.page';
import { Storage } from '@ionic/storage';
import {UbicacionService} from '../../services/ubicacion.service'

import {FiltrosService} from '../../services/filtros.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('inputCiudad', {static: true} ) inputCiudad: ElementRef
  @ViewChild(OfficesPage, {static: true}) ciudad: OfficesPage

  public ciudades;
  public filtros = {
    ciudad: "",
    tipo: ""
  }
  constructor(
    private navCtrl: NavController,
    private _filtros: FiltrosService,
    private storage: Storage,
    private _ubicacion: UbicacionService
  ) { }

  ngOnInit() {
    this.obtenerCiudades();
  }

  buscar(event)
  {
    if (event.which == 13 || event.keyCode == 13) {
      //code to execute here
      this.navCtrl.navigateRoot('/calendar', {animated: true});
    }
  }
   
  buscar2()
  {
    this.navCtrl.navigateRoot('/calendar', {animated: true});
   console.log(this.inputCiudad.nativeElement.value);
   //this.ciudad.buscarCiudad = this.inputCiudad.nativeElement.value;
   this._filtros.ciudad = this.inputCiudad.nativeElement.value;

  // localStorage.setItem('ciudad', this.inputCiudad.nativeElement.value);
  this.filtros.ciudad = this.inputCiudad.nativeElement.value;
  

   this.storage.set('ciudad', this.filtros);
  }

  obtenerCiudades()
  {
    this._ubicacion.obtenerDatos().subscribe(
      response =>{
        if(response.status == "success")
        {
          this.ciudades = response.ciudades;

        }
      }
    )
  }

}