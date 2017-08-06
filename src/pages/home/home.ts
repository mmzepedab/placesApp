import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { PlaceServiceProvider } from '../../providers/place-service/place-service';
import {FacebookAuth, User} from '@ionic/cloud-angular';
import {LoginPage} from '../login/login';
import {PlaceFilterPage} from '../place-filter/place-filter';
import {PlaceDetailPage} from '../place-detail/place-detail';
import { ModalController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
places = [];
myInput: string = '';
search: any;
nextPage: any;
loadMoreData :boolean = true;

  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    private placeServiceProvider: PlaceServiceProvider,
    private facebook: FacebookAuth,
    public modalCtrl: ModalController
  ) {
    this.search = '';
    this.getPlaces();

  }


getPlaces(){
  console.log("Getting Places");
  this.placeServiceProvider.getPlaces(this.search).subscribe(
    data => {
      this.places = data.results;

      if(data.next){
        var url = new URL(data.next);
        this.nextPage = url.searchParams.get("page");
      }else{
        this.loadMoreData = false;
      }
      //this.nextUrl = data.next
    });
}

doRefresh(refresher) {
    console.log("Getting Places");
    this.search = '';
    this.loadMoreData = true;
    this.nextPage = 2;
    this.placeServiceProvider.getPlaces(this.search).subscribe(data => this.places = data.results, refresher.complete());
  }

doInfinite(infiniteScroll, nextPage) {
    console.log('Begin async operation');
    console.log(this.loadMoreData);
    //this.loadMoreData = false;
    this.placeServiceProvider.getPlacesNext(nextPage).subscribe(
      data => {
      console.log('This Places Length before: ' + this.places.length);
      console.log('Next Places page: ' + data.next);
      if(!data.next){
        this.loadMoreData = false;
      }else{
        var url = new URL(data.next);
        this.nextPage = url.searchParams.get("page");
      }

      for(var i = 0; i < data.results.length; i++){
        this.places.push(data.results[i]);
      }
      console.log('This Places Length after: ' + this.places.length);
      infiniteScroll.complete();
    },

    );


  }

  async logout(){
    await this.facebook.logout();
    //this.navCtrl.setRoot(LoginPage);
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  navigate(placeId){
    console.log("Navigating to place id: " + placeId);
    this.navCtrl.push(PlaceDetailPage,{
      placeId: placeId
    });
  }

  onInput(event){
    this.search = this.myInput;
    if(this.search != ''){
      this.loadMoreData = true;
    }else{
      this.loadMoreData = false;
    }
    this.getPlaces();
  }

  presentModalFilter(){
    let profileModal = this.modalCtrl.create(PlaceFilterPage, { userId: 8675309 });
    profileModal.present();
  }

}
