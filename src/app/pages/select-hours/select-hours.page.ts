import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-hours',
  templateUrl: './select-hours.page.html',
  styleUrls: ['./select-hours.page.scss'],
})
export class SelectHoursPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  buscar()
  {
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }

}
