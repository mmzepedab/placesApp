import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { OffersPage } from '../offers/offers';
import { CheckinPage } from '../checkin/checkin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OffersPage;
  tab2Root = HomePage;
  tab3Root = CheckinPage;
  tab4Root = ContactPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
