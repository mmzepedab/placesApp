import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the CheckinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  checkins: FirebaseListObservable<any>;

  constructor(
    private user: User,
    public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    private af: AngularFireDatabase)
    {

    this.checkins = af.list('/checkins');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');
  }

  openCamera(){
    this.barcodeScanner.scan({prompt : "Scan a Place Barcode to Check-in"}).then((barcodeData) => {
       // Success! Barcode data is here

       var obj = JSON.parse(barcodeData.text);

       this.checkins.push({
         place_id: obj.place_id,
         facebook_id: this.user.social.facebook.data.raw_data['id'],
         full_name: this.user.social.facebook.data.full_name
       });

       alert("Successfull Check-in");

      }, (err) => {
          // An error occurred
          alert("There was an error trying to Check-in");
      });
  }

  addPlace(){
    this.checkins.push({
      place_id: "1"
    });
  }

}
