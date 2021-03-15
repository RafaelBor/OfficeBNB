import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = environment.apiUrl;
   }

   crearMensaje(data): Observable<any>
   {
    let json = JSON.stringify(data);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'mensaje', param, {headers: headers});
   }

   obtenerMensajes(token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.get(this.url + 'mensajes/index', {headers: headers});
   }

   ReciboCliente(data): Observable<any>
   {
    let json = JSON.stringify(data);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'correo/recibo', param, {headers: headers});
   }

   SeguimientoArrendador(data): Observable<any>
   {
    let json = JSON.stringify(data);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'correo/seguimiento', param, {headers: headers});
   }
}
