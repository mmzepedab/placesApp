import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Platform } from 'ionic-angular';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';


/*
  Generated class for the PlaceServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlaceServiceProvider {

private url: string;
public facebook_id;

  constructor(private http: Http, private platform: Platform, private user: User) {
    console.log('Hello PlaceServiceProvider Provider');
    this.facebook_id = this.user.social.facebook.data.raw_data['id'];
  }

getPlaces(search){
  if (this.platform.is('cordova')) {
          this.url= "http://placestime.com/places/api/"+"places/?search="+search;
     }else{
          this.url= '/api/'+"places/";
     }

  return this.http.get(this.url)
  .do((res: Response) => console.log("Response inside Service: " + res))
  .map((res: Response) => res.json())
  .catch(this.catchError);
}

getPlacesNext(nextPage){
  console.log("Getting next Places");

  if (this.platform.is('cordova')) {
          this.url= "http://placestime.com/places/api/" + "places/?page="+nextPage;
     }else{
          this.url= '/api/'+"places/?page="+nextPage;
     }

  console.log("nextUrl " + this.url);

  return this.http.get(this.url)
  .do((res: Response) => console.log("Response inside Service: " + res))
  .map((res: Response) => res.json())
  .catch(this.catchError);
}

getPlace(placeId){
  console.log("Getting Place data with id: " + placeId);
  if (this.platform.is('cordova')) {
          this.url= "http://placestime.com/places/api/places/" + placeId +"/?facebook_id="+ this.facebook_id +"&place_id="+placeId;
     }else{
          this.url= "http://placestime.com/places/api/places/" + placeId +"/?facebook_id="+ this.facebook_id +"&place_id="+placeId;
     }

  return this.http.get(this.url)
  .do((res: Response) => console.log("Response inside getPlace Service: " + res))
  .map((res: Response) => res.json())
  .catch(this.catchError);
}

getPlaceOffers(placeId){
  console.log("Getting Place offers with id: " + placeId);
  if (this.platform.is('cordova')) {
          this.url= "http://placestime.com/places/api/placeOffers/?place_id=" + placeId;
     }else{
          this.url= "http://placestime.com/places/api/placeOffers/?place_id=" + placeId;
     }

  return this.http.get(this.url)
  .do((res: Response) => console.log("Response inside getPlace offers Service: " + res))
  .map((res: Response) => res.json())
  .catch(this.catchError);
}

private catchError(error: Response | any){
  console.log(error);
  return Observable.throw(error.json().error || "Server Error.");
}

}
