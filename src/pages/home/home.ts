import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { PlaceServiceProvider } from '../../providers/place-service/place-service';
import {FacebookAuth, User} from '@ionic/cloud-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
places = [];

  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    private placeServiceProvider: PlaceServiceProvider,
    private facebook: FacebookAuth
  ) {
    this.getPlaces();

  }

getPlaces(){
  console.log("Getting Places");
  this.placeServiceProvider.getPlaces().subscribe(data => this.places = data.results);
}

doRefresh(refresher) {
    console.log("Getting Places");
    this.placeServiceProvider.getPlaces().subscribe(data => this.places = data.results, refresher.complete());
  }

  async logout(){
    await this.facebook.logout();
    //this.navCtrl.setRoot(LoginPage);
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

}
