import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';

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

  constructor(private user: User, private facebook:FacebookAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login():Promise<void>{
    try{
      const token = await this.facebook.getToken();
      if(token){
          this.navCtrl.setRoot(TabsPage);
      }else{
        this.loginDeatils = await this.facebook.login();
        if(this.loginDeatils.token){
          await this.facebook.storeToken(this.loginDeatils.token);
          this.navCtrl.setRoot(TabsPage);
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

}
