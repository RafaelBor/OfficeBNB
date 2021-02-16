import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  public url:string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
   }

   obtenerOficina(id):Observable<any>
   {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'oficina/'+ id, {headers: headers});
   }
}
