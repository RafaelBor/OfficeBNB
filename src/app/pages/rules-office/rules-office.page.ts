import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ReglasService} from '../../services/reglas.service'
import {OficinaService} from '../../services/oficina.service'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-rules-office',
  templateUrl: './rules-office.page.html',
  styleUrls: ['./rules-office.page.scss'],
})
export class RulesOfficePage implements OnInit {

  public reglas;
  public status;
  public oficina;

  public horas = false;
  public dias = false;

  constructor(
    private _route: ActivatedRoute,
    private _reglas: ReglasService,
    private _oficinas: OficinaService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.obtenerReglas();
    this.obtenerOficina();

    this.storage.get('reservarHoras').then((horas) =>{
     if(horas != undefined)
     {
       this.horas = true
       console.log(this.horas, "horas");
       return this.horas
     }else{
       this.horas = false
     }
   });
 
   this.storage.get('reservarDias').then((dias) =>{
     if(dias != undefined)
     {
       this.dias = true
       console.log(this.dias, "dias");
       return this.dias
     }
     else{
       this.dias = false
     }
   });

  }

  obtenerReglas()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._reglas.getReglasOficina(id).subscribe(
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

  obtenerOficina()
  {
    let id = this._route.snapshot.paramMap.get('id');

    this._oficinas.obtenerOficina(id).subscribe(
      response =>{
        if(response.status == "success")
        {
          this.oficina = response.oficina;
          this.status == "success"
          console.log(this.oficina);

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
