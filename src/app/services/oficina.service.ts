import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = environment.apiUrl;
   }

   obtenerOficina(id):Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/'+ id, {headers: headers});
   }

   tiposOficina(): Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'tipos', {headers: headers});
   }
}
