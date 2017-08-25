import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Platform } from 'ionic-angular';
import { Http, Response, Headers } from '@angular/http';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginDeatils : AuthLoginResult;

  //Facebook information to send to AppUser
  full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  facebook_id: string;
  profile_picture: string;
  push_token: string;
  ionic_id: string;

  private url: string;

  constructor(
    private user: User,
    private facebook:FacebookAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private platform: Platform,
    public push: Push) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    const token = this.facebook.getToken();
    try{
      if(token){
          //this.navCtrl.setRoot(TabsPage);
          this.push.register().then((t: PushToken) => {
            return this.push.saveToken(t);
          }).then((t: PushToken) => {
            console.log('Token saved:', t.token);
            this.push_token = t.token;
          });
          this.sendAppUserData();
      }
    }catch(e){
      console.error(e);
    }
  }

  async login():Promise<void>{
    try{
      const token = await this.facebook.getToken();
      if(!token){
        this.loginDeatils = await this.facebook.login();
        this.push.register().then((t: PushToken) => {
          return this.push.saveToken(t);
        }).then((t: PushToken) => {
          console.log('Token saved:', t.token);
          this.push_token = t.token;
        });
        if(this.loginDeatils.token){
          await this.facebook.storeToken(this.loginDeatils.token);
          console.log(this.loginDeatils);
          console.log(this.user.id);
          this.sendAppUserData();

        }
      }

      // this.loginDeatils = await this.facebook.login();
      // console.log(this.loginDeatils);
      // console.log(this.user.social.facebook);
      //
      // await this.facebook.storeToken(this.loginDeatils.token);
      // const token = await this.facebook.getToken();
      // console.log(token);

    }catch(e){
      console.error(e);
    }
  }



  sendAppUserData(){
    console.log("Sending");

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.full_name = this.user.social.facebook.data.full_name;
    this.first_name = this.user.social.facebook.data.raw_data['first_name'];
    this.last_name = this.user.social.facebook.data.raw_data['last_name'];
    this.email = this.user.social.facebook.data.email;
    this.facebook_id = this.user.social.facebook.data.raw_data['id'];
    this.profile_picture = this.user.social.facebook.data.profile_picture;
    this.ionic_id = this.user.id;

    let body = {
      "full_name": this.full_name,
      "first_name": this.first_name,
      "last_name": this.last_name,
      "email": this.email,
      "facebook_id": this.facebook_id,
      "profile_picture": this.profile_picture,
      "push_token": this.push_token,
      "ionic_id": this.ionic_id
    };

    if (this.platform.is('cordova')) {
            this.url= "http://placestime.com/places/api/";
       }else{
            this.url= '/api/';
       }

    try{
      this.http.put(this.url+"appUsers/0/?facebook_id="+this.facebook_id, JSON.stringify(body), { headers: headers })
        .map((res: Response) => res.json())
        .subscribe(data => {
          console.log(data);
          this.navCtrl.setRoot(TabsPage);
        });

    }catch(e){
      console.error(e);
    }


  }

}
