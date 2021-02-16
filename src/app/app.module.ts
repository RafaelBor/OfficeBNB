import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import {  FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Stripe } from '@ionic-native/stripe/ngx';

import { IonicStorageModule } from '@ionic/storage';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
    [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule, 
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      IonicStorageModule.forRoot()],
  providers: [ 
    Stripe,
    { provide: RouteReuseStrategy,  useClass: IonicRouteStrategy,
       }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
