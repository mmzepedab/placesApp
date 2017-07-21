import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FacebookAuth, User, AuthLoginResult} from '@ionic/cloud-angular';
import { App } from 'ionic-angular';
import {LoginPage} from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  username: string;
  profile_picture: string;
  facebook_id: string;

  constructor(
    private user: User,
    private facebook: FacebookAuth,
    public appCtrl: App,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.user.social.facebook.data.raw_data['id']);
    this.getUsername();
  }

  getUsername() {
    this.username = this.user.social.facebook.data.full_name;
    this.facebook_id = this.user.social.facebook.data.raw_data['id'];
  }

  async logout(){
    await this.facebook.logout();
    //this.navCtrl.setRoot(LoginPage);
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

}
