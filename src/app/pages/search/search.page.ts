import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  buscar(event)
  {
    if (event.which == 13 || event.keyCode == 13) {
      //code to execute here
      this.navCtrl.navigateRoot('/calendar', {animated: true});
    }
  }
   
  buscar2()
  {
    this.navCtrl.navigateRoot('/calendar', {animated: true});

  }

}