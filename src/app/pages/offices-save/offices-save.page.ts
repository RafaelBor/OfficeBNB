import { Component, OnInit } from '@angular/core';
import {GuardarOficinaService} from '../../services/guardar-oficina.service'
import {environment} from '../../../environments/environment'
import {LoginService} from '../../services/login.service'


@Component({
  selector: 'app-offices-save',
  templateUrl: './offices-save.page.html',
  styleUrls: ['./offices-save.page.scss'],
})
export class OfficesSavePage implements OnInit {

  public oficinas;
  public url;
  public identity;
  public token;

  constructor(
    private _guardar: GuardarOficinaService,
    private _login: LoginService,
  
  ) { 
    
    this.url = environment.apiUrl
    
  }

  async ngOnInit() {
    this.identity = await this._login.getIdentity();
    console.log(this.identity);
    
    this.token = await this._login.getToken();

    this.obtenerOficinasGuardadas();
  }

  obtenerOficinasGuardadas()
  {
    this._guardar.oficinasGuardadasUsuario(this.token).subscribe(
      response =>
      {
        if(response.status == "success")
        {
          this.oficinas = response.guardadas;
          console.log(this.oficinas);
        }
      }, error =>{
        console.log(error);
      }
    )
  }

}
