import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ServiciosService} from '../../services/servicios.service'

@Component({
  selector: 'app-office-services',
  templateUrl: './office-services.page.html',
  styleUrls: ['./office-services.page.scss'],
})
export class OfficeServicesPage implements OnInit {

  @Input() id: number;
  public status;
  public servicios;

  constructor(
    public modalCtrl: ModalController,
    private _servicios: ServiciosService
    ) { 

    }

  ngOnInit() {
    
    this.obtenerServicios();
  }

  obtenerServicios()
  {
    
    this._servicios.getServiciosOficina(this.id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.servicios = response.servicios;
          this.status == "success"
          console.log(this.servicios);
        }
        else{
          this.status == "error"
        }
      },error =>
      {
        console.log(error);
      }
    )
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

}
