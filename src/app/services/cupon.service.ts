import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CuponService {

  public url;


  constructor(
    public _http: HttpClient
  ) {
    this.url = environment.apiUrl;
  }

  buscarCupon(cup):Observable<any>
  {
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

   return this._http.get(this.url + 'cupones/'+ cup, {headers: headers});
  }
}
