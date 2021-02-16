import { Component, OnInit } from '@angular/core';
import {Cupon} from '../../models/cupon'
import {CuponService} from '../../services/cupon.service'
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-buscar-cupon',
  templateUrl: './buscar-cupon.page.html',
  styleUrls: ['./buscar-cupon.page.scss'],
})
export class BuscarCuponPage implements OnInit {

  public cupon: Cupon;
  public status: string = "";
  constructor(
    private _cupon: CuponService,
    public modalCtrl: ModalController,
  ) {
    this.cupon = new Cupon("", 0);
   }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }

  onSubmit(Form)
  {
     var cup = this.cupon.nombreCupon;
    
    this._cupon.buscarCupon(cup).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.cupon = response.cupon;
          console.log(this.cupon);
          this.status = "aceptado"
          
          this.modalCtrl.dismiss({
            cupon: this.status,
            cantidad: this.cupon.cantidad
      
          })
        }
        else{
          this.status = "no aceptado"
          console.log(this.status);
        }
      }, error =>
      {
        console.log(error);
        this.status = "no aceptado"
      }
    )

  
  }

}
