import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceServiceProvider } from '../../providers/place-service/place-service';
import { CallNumber } from '@ionic-native/call-number';
import { PlaceOffersPage } from '../place-offers/place-offers';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';
import { Http, Response, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PlaceDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html',
})
export class PlaceDetailPage {

  public placeId;
  public facebook_id;
  public place;
  public is_subscribed;
  public subscribe_button_text;
  public subscriber_count;

  constructor(
    private user: User,
    public navCtrl: NavController,
    public navParams: NavParams,
    private placeServiceProvider: PlaceServiceProvider,
    private callNumber: CallNumber,
    private http: Http,
    private alertCtrl: AlertController) {
    this.placeId = navParams.get("placeId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaceDetailPage');
    this.getPlaceData();
  }

  getPlaceData(){
    this.placeServiceProvider.getPlace(this.placeId).subscribe(
      data => {
        this.place = data;
        this.is_subscribed = data.is_user_subscribed;
        this.subscriber_count = data.subscriber_count;
        if(!this.is_subscribed){
          this.subscribe_button_text = "Follow";
        }else{
          this.subscribe_button_text = "Following";
        }

        console.log(this.place);
        //this.nextUrl = data.next
      });
  }

subscribeUserToPlace(placeId){
  //alert(this.user.social.facebook.data.raw_data['id']);
  this.facebook_id = this.user.social.facebook.data.raw_data['id'];

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  var todayDate = new Date().toISOString().slice(0,10);

  let body = {};

if(!this.is_subscribed){
  this.http.put("http://placestime.com/places/api/placeSubscriber/0/?facebook_id="+this.facebook_id+"&place_id="+placeId, JSON.stringify(body), { headers: headers })
    .map((res: Response) => res.json())
    .subscribe(data => {
      console.log(data);
      this.followAlert();
      this.is_subscribed = true;
      this.subscriber_count++;
      this.subscribe_button_text = "Following";
      //this.navCtrl.setRoot(TabsPage);
    });
  }else{
    this.http.delete("http://placestime.com/places/api/placeSubscriber/0/?facebook_id="+this.facebook_id+"&place_id="+placeId, { headers: headers })
      .map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
        this.unfollowAlert();
        this.is_subscribed = false;
        this.subscriber_count--;
        this.subscribe_button_text = "Follow";
        //this.navCtrl.setRoot(TabsPage);
      });
  }
}


  navigatePlaceOffers(placeId){
    console.log("Navigating to place id: " + placeId);

    this.navCtrl.push(PlaceOffersPage,{
      placeId: placeId
    });

  }


  makeCall(phone_number){
    this.callNumber.callNumber(phone_number, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));

 }

 followAlert() {
  let alert = this.alertCtrl.create({
    title: 'Success',
    subTitle: 'You are now following this Place and will receive offer notifications from it.',
    buttons: ['Ok']
  });
  alert.present();
}

unfollowAlert() {
 let alert = this.alertCtrl.create({
   title: 'Success',
   subTitle: 'You are not following this Place anymore you will not receive offer notifications from it.',
   buttons: ['Ok']
 });
 alert.present();
}

}
