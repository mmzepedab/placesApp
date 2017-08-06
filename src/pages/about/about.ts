import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

private url: string;

  constructor(private http: Http, public navCtrl: NavController, private platform: Platform) {

  }

  sendAppUserData(){
    console.log("Sending");

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      "full_name": "Mario from POST",
      "first_name": "Mario from POST",
      "last_name": "Mario from POST",
      "email": "mario@mario.com",
      "facebook_id": "123123",
      "profile_picture": "123123"
    };

    if (this.platform.is('cordova')) {
            this.url= "http://45.79.74.150:8080/places/api/";
       }else{
            this.url= '/api/';
       }

    this.http.post(this.url+"appUsers/", JSON.stringify(body), { headers: headers })
      .map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }

}
