import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Platform } from 'ionic-angular';

/*
  Generated class for the PlaceServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlaceServiceProvider {




private url: string;

  constructor(private http: Http, private platform: Platform) {
    console.log('Hello PlaceServiceProvider Provider');
  }

getPlaces(){
  if (this.platform.is('cordova')) {
          this.url= "http://45.79.74.150:8080/places/api/places/";
     }else{
          this.url= '/api';
     }

  return this.http.get(this.url)
  .do((res: Response) => console.log("Response inside Service: " + res))
  .map((res: Response) => res.json())
  .catch(this.catchError);
}

private catchError(error: Response | any){
  console.log(error);
  return Observable.throw(error.json().error || "Server Error.");
}

}
