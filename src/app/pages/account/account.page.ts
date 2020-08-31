import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  userEdit()
  {
    this.navCtrl.navigateRoot('/user-edit', {animated: true});
  }

  logout(){
    this.navCtrl.navigateRoot('/login', {animated: true});
  }




}
