import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public identity;

  constructor(
    private navCtrl: NavController,
    private _login: LoginService
  ) { }

 async ngOnInit() {
    this.identity = await this._login.getIdentity();
    console.log(this.identity);
  }

  userEdit()
  {
    this.navCtrl.navigateRoot('/user-edit', {animated: true});
  }

  logout(){
    this._login.logout();
    
  }




}
