import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OfferServiceProvider } from '../../providers/offer-service/offer-service';
import {PlaceDetailPage} from '../place-detail/place-detail';

/**
 * Generated class for the OffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {

public offers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public offerServiceProvider: OfferServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
    this.getOffersData();
  }

  doRefresh(refresher) {
      console.log("Refreshing Offers Data");
      this.offerServiceProvider.getOffers().subscribe(data => this.offers = data.results, refresher.complete());
    }

  getOffersData(){
    this.offerServiceProvider.getOffers().subscribe(
      data => {
        this.offers = data.results;
        console.log(this.offers);
        //this.nextUrl = data.next
      });
  }

  navigate(placeId){
    console.log("Navigating to place id: " + placeId);
    this.navCtrl.push(PlaceDetailPage,{
      placeId: placeId
    });
  }

}
