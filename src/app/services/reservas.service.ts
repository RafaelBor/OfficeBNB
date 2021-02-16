import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public url:string;
  public total;
  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
   }

   createReserva(reserva): Observable<any>
   {
    let json = JSON.stringify(reserva);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'oficina/reserva/create', param, {headers: headers});
   }

   updateReserva(reserva): Observable<any>
   {
    let json = JSON.stringify(reserva);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.put(this.url + 'oficina/reserva/update', param, {headers: headers});
   }

   obtenerReservasUsuario(token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.get(this.url + 'oficina/reserva/usuario', {headers: headers});
   }

   obtenerReserva(id): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/reserva/show/'+ id, {headers: headers});
   }

   pruebaPago(card, token): Observable<any>
   {
    let json = JSON.stringify(card);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post(this.url + 'prueba/pago', param, {headers: headers});
   }

   //verifica si la oficina esta reservada o disponible
   verficarReservaDias(id, fechas): Observable<any>
   {
    let json = JSON.stringify(fechas);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'oficina/reserva/comprobar/' + id, param, {headers: headers});
   }

   //verifica si la oficina esta reservada o disponible
   verficarReservaHoras(id, fechas): Observable<any>
   {
    let json = JSON.stringify(fechas);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'oficina/reserva/comprobar/hora/' + id, param, {headers: headers});
   }


   verificarExisteReserva(id, token): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.get(this.url + 'oficina/reserva/verificar/'+ id, {headers: headers});
   }
}
