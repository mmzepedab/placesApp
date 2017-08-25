import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

/*
  Generated class for the OfferServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OfferServiceProvider {

private url: string;

  constructor(public http: Http) {
    console.log('Hello OfferServiceProvider Provider');
  }


  getOffers(){
    //console.log("Getting Place offers with id: " + placeId);
    this.url= "http://placestime.com/places/api/offers/";

    return this.http.get(this.url)
    .do((res: Response) => console.log("Response inside  getOffers Service: " + res))
    .map((res: Response) => res.json())
    .catch(this.catchError);
  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }

}
