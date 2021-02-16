import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  public url;


  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  buscarCupon(cup):Observable<any>
  {
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

   return this._http.get(this.url + 'cupones/'+ cup, {headers: headers});
  }
}
