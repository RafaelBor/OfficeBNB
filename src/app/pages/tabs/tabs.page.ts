import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public token:string;
  constructor(
    private _login: LoginService,
    private navCtrl: NavController
  ) {

   }

 async ngOnInit() {
    this.token = await this._login.getToken();
  }

  login()
  {
    this.navCtrl.navigateRoot('/login', {animated: true});
  }

}
