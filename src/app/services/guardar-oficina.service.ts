import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class GuardarOficinaService {


  public url:string;

  constructor(
    private storage: Storage,
    public toastController: ToastController,
    public _http: HttpClient
    
  ) { 
    
    this.url = environment.apiUrl;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

 guardarOficina(oficina): Observable<any>
 {
  let json = JSON.stringify(oficina);
  let param = 'json='+json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  return this._http.post(this.url+'oficina/guardada/store', param, {headers: headers});
 }

 oficinasGuardadasUsuario(token): Observable<any>
 {
  
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
    
  return this._http.get(this.url + 'oficinas/guardadas', {headers: headers});
 }

 eliminarOficinaGuardados(id, token): Observable<any>
 {
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

  return this._http.delete(this.url + 'oficinas/guardadas/delete/'+ id, {headers: headers});
 }

 verificarOficina(verificar): Observable<any>
 {
  let json = JSON.stringify(verificar);
  let param = 'json='+json;
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  return this._http.post(this.url + 'oficinas/guardadas/verificar', param, {headers: headers});
 }
}
