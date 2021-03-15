import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ReglasService} from '../../services/reglas.service'

@Component({
  selector: 'app-office-reglas',
  templateUrl: './office-reglas.page.html',
  styleUrls: ['./office-reglas.page.scss'],
})
export class OfficeReglasPage implements OnInit {

  @Input() id: number;
  public reglas;
  public status:string
  constructor(
    public modalCtrl: ModalController,
    private _reglas: ReglasService
  ) { }

  ngOnInit() {
    this.obtenerReglas();
  }

  cerrarModal()
  {
    this.modalCtrl.dismiss();
  }

  obtenerReglas()
  {
    
    this._reglas.getReglasOficina(this.id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.reglas = response.reglas;
          this.status == "success"
          console.log(this.reglas);
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

}
