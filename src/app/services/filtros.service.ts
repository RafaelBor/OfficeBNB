import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  public url;
  public ciudad;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  obtenerOficinas(ciudad):Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/filtros/index/'+ ciudad, {headers: headers});
   }

   Filtros(filtros): Observable<any>
   {
    let json = JSON.stringify(filtros);
    let params = 'json='+json;
  
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    
    return this._http.post(this.url + 'oficina/filter', params, {headers: headers});
   }
}
