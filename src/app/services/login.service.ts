import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment'

import { Storage} from '@ionic/storage';
import { NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url:string;
  public identity;
  public token;

  

  constructor(
    public _http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.url = environment.apiUrl;
   }

   register(user): Observable<any>{
    let json = JSON.stringify(user);
    let param = 'json=' +json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'register', param, {headers: headers});
  }

   signup(user, gettoken = null): Observable<any>
   {
    if(gettoken != null){
      user.gettoken = 'true';
    }

    let json = JSON.stringify(user);
    let param = 'json='+json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'login', param, {headers: headers});
   }

   update(user, token): Observable<any>
   {
    let json = JSON.stringify(user);
    let param = 'json=' +json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', token);

    return this._http.put(this.url+'user/update', param, {headers: headers});
   }

 
   usuarioUpload(imagen): Observable<any>
   {
    
     let param = 'file0=' + imagen
     console.log(param);

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'user/upload', param, {headers: headers});
   }
   

  async getIdentity(){
   const identity = await this.storage.get('identity');
    this.identity = JSON.parse(identity);
    return this.identity
    
  }
  
 async getToken(){
    let token = await this.storage.get('token');
  
    if(token != 'undefined' && token){
        this.token = token;
    }else{
        this.token = null;
    }
  
    return this.token;
  }

  logout(){
    this.identity = null;
    this.token = null;
  
    localStorage.removeItem('identity');
          
    localStorage.removeItem('token');
    
    this.storage.remove('identity');
    this.storage.remove('token');
    
    this.navCtrl.navigateRoot('/login', {animated: true});
    console.log("funciono");
  }
}
