import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = environment.apiUrl
   }

   
   getServiciosOficina(id): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/servicios/index/'+ id, {headers: headers});
   }

   getServicios(): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'servicios/index', {headers: headers});
   }
}
