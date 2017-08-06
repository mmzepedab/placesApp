import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PlaceFilterPage } from '../pages/place-filter/place-filter';
import { PlaceDetailPage } from '../pages/place-detail/place-detail';
import { PlaceOffersPage } from '../pages/place-offers/place-offers';
import { CheckinPage } from '../pages/checkin/checkin';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { OffersPage } from '../pages/offers/offers';

import { CallNumber } from '@ionic-native/call-number';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlaceServiceProvider } from '../providers/place-service/place-service';

import { HttpModule } from '@angular/http';

import { CloudModule, CloudSettings } from '@ionic/cloud-angular';
import { OfferServiceProvider } from '../providers/offer-service/offer-service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyCOo5pdonGa7fx2rCwALD4h7Tnf3k8rnXc",
    authDomain: "placesweb-158223.firebaseapp.com",
    databaseURL: "https://placesweb-158223.firebaseio.com",
    projectId: "placesweb-158223",
    storageBucket: "placesweb-158223.appspot.com",
    messagingSenderId: "928811050103"
};

const cloudSettings:CloudSettings = {
  'core':{
    'app_id': 'ef9bf63d'
  },
  'auth':{
      'facebook':{
        'scope':[]
      }
  },
  'push': {
    'sender_id': '928811050103',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PlaceFilterPage,
    PlaceDetailPage,
    PlaceOffersPage,
    CheckinPage,
    TabsPage,
    LoginPage,
    ProfilePage,
    OffersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PlaceFilterPage,
    PlaceDetailPage,
    PlaceOffersPage,
    CheckinPage,
    TabsPage,
    LoginPage,
    ProfilePage,
    OffersPage
  ],
  providers: [
    CallNumber,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlaceServiceProvider,
    OfferServiceProvider,
    BarcodeScanner,
  ]
})
export class AppModule {}
