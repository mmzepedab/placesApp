import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceServiceProvider } from '../../providers/place-service/place-service';

/**
 * Generated class for the PlaceOffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-place-offers',
  templateUrl: 'place-offers.html',
})
export class PlaceOffersPage {

  public placeId;
  public offers:any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private placeServiceProvider: PlaceServiceProvider) {
    this.placeId = navParams.get("placeId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceOffersPage');
    this.getPlaceOffersData();
  }

  getPlaceOffersData(){
    this.placeServiceProvider.getPlaceOffers(this.placeId).subscribe(
      data => {
        this.offers = data.results;
        console.log(this.offers);
        //this.nextUrl = data.next
      });
  }

}
