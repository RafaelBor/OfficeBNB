import { Component, OnInit } from '@angular/core';
import { NavController, IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  search()
  {
    this.navCtrl.navigateRoot('/search', {animated: true});
  }
}
