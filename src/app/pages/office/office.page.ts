import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit, AfterViewInit {
  

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  regresar()
  {
    this.navCtrl.navigateRoot('/tabs/offices', {animated: true});
  }

  ngAfterViewInit()
  {
   
  } 
}
