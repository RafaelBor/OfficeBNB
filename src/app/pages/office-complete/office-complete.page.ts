import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-office-complete',
  templateUrl: './office-complete.page.html',
  styleUrls: ['./office-complete.page.scss'],
})
export class OfficeCompletePage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    
  }

  cerrarPage(){
    this.navCtrl.navigateRoot('/tabs/home', {animated: true});
  }

}
