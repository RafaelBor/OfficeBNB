import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Horas} from '../../models/buscarHoras'
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-select-hours',
  templateUrl: './select-hours.page.html',
  styleUrls: ['./select-hours.page.scss'],
})
export class SelectHoursPage implements OnInit {

  public horas: Horas
  public status: string;
 
  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.horas = new Horas("", "", "");
   }

  ngOnInit() {
  }

  onSubmit(Form)
  { 
    
     
    var inicio = moment(new Date(this.horas.horaInicio));
    inicio.hours()

    var final = moment(new Date(this.horas.horaSalida));
    final.hours();

    var validarHoras = moment(final).isAfter(inicio);
    // console.log(inicio);
    //console.log(final);
    if(validarHoras && inicio != final)
    {
      var dia = moment(new Date(this.horas.dia))
      console.log(moment(dia).format('LL'));
      console.log(this.horas);
  
      var reservarHoras = {
        dia: this.horas.dia,
        horaInicio: this.horas.horaInicio,
        horaFinal: this.horas.horaSalida
      }
  
      this.storage.set('reservarHoras', reservarHoras);
  
      this.storage.remove('reservarDias');
  
      
      
     
      this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
    }else{
     
    this.status = "Las horas son incorrectas";
    console.log(this.status);
    }
  

  }

}
