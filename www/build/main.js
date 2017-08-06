webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(user, facebook, navCtrl, navParams, http, platform, push) {
        this.user = user;
        this.facebook = facebook;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.platform = platform;
        this.push = push;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        var token = this.facebook.getToken();
        try {
            if (token) {
                //this.navCtrl.setRoot(TabsPage);
                this.push.register().then(function (t) {
                    return _this.push.saveToken(t);
                }).then(function (t) {
                    console.log('Token saved:', t.token);
                    _this.push_token = t.token;
                });
                this.sendAppUserData();
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.facebook.getToken()];
                    case 1:
                        token = _b.sent();
                        if (!!token) return [3 /*break*/, 4];
                        _a = this;
                        return [4 /*yield*/, this.facebook.login()];
                    case 2:
                        _a.loginDeatils = _b.sent();
                        this.push.register().then(function (t) {
                            return _this.push.saveToken(t);
                        }).then(function (t) {
                            console.log('Token saved:', t.token);
                            _this.push_token = t.token;
                        });
                        if (!this.loginDeatils.token) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.facebook.storeToken(this.loginDeatils.token)];
                    case 3:
                        _b.sent();
                        console.log(this.loginDeatils);
                        console.log(this.user.id);
                        this.sendAppUserData();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.sendAppUserData = function () {
        var _this = this;
        console.log("Sending");
        var headers = new __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.full_name = this.user.social.facebook.data.full_name;
        this.first_name = this.user.social.facebook.data.raw_data['first_name'];
        this.last_name = this.user.social.facebook.data.raw_data['last_name'];
        this.email = this.user.social.facebook.data.email;
        this.facebook_id = this.user.social.facebook.data.raw_data['id'];
        this.profile_picture = this.user.social.facebook.data.profile_picture;
        this.ionic_id = this.user.id;
        var body = {
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
            this.url = "http://45.79.74.150:8080/places/api/";
        }
        else {
            this.url = '/api/';
        }
        try {
            this.http.put(this.url + "appUsers/0/?facebook_id=" + this.facebook_id, JSON.stringify(body), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */]);
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center class="vertical-align-content">\n  <ion-grid>\n        <ion-row>\n              <ion-col>\n                    <h1 no-padding no-margin>Wellcome to Places</h1>\n                      <button ion-button icon-left clear (click)="login()">\n                        <ion-icon name="logo-facebook"></ion-icon>\n                        <div>Login</div>\n                      </button>\n                    <p no-padding no-margin>This will log you in with your facebook account</p>\n              </ion-col>\n        </ion-row>\n  </ion-grid>\n </ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["b" /* FacebookAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["c" /* Push */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_cloud_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the PlaceServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PlaceServiceProvider = (function () {
    function PlaceServiceProvider(http, platform, user) {
        this.http = http;
        this.platform = platform;
        this.user = user;
        console.log('Hello PlaceServiceProvider Provider');
        this.facebook_id = this.user.social.facebook.data.raw_data['id'];
    }
    PlaceServiceProvider.prototype.getPlaces = function (search) {
        if (this.platform.is('cordova')) {
            this.url = "http://45.79.74.150:8080/places/api/" + "places/?search=" + search;
        }
        else {
            this.url = '/api/' + "places/";
        }
        return this.http.get(this.url)
            .do(function (res) { return console.log("Response inside Service: " + res); })
            .map(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    PlaceServiceProvider.prototype.getPlacesNext = function (nextPage) {
        console.log("Getting next Places");
        if (this.platform.is('cordova')) {
            this.url = "http://45.79.74.150:8080/places/api/" + "places/?page=" + nextPage;
        }
        else {
            this.url = '/api/' + "places/?page=" + nextPage;
        }
        console.log("nextUrl " + this.url);
        return this.http.get(this.url)
            .do(function (res) { return console.log("Response inside Service: " + res); })
            .map(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    PlaceServiceProvider.prototype.getPlace = function (placeId) {
        console.log("Getting Place data with id: " + placeId);
        if (this.platform.is('cordova')) {
            this.url = "http://45.79.74.150:8080/places/api/places/" + placeId + "/?facebook_id=" + this.facebook_id + "&place_id=" + placeId;
        }
        else {
            this.url = "http://45.79.74.150:8080/places/api/places/" + placeId + "/?facebook_id=" + this.facebook_id + "&place_id=" + placeId;
        }
        return this.http.get(this.url)
            .do(function (res) { return console.log("Response inside getPlace Service: " + res); })
            .map(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    PlaceServiceProvider.prototype.getPlaceOffers = function (placeId) {
        console.log("Getting Place offers with id: " + placeId);
        if (this.platform.is('cordova')) {
            this.url = "http://45.79.74.150:8080/places/api/placeOffers/?place_id=" + placeId;
        }
        else {
            this.url = "http://45.79.74.150:8080/places/api/placeOffers/?place_id=" + placeId;
        }
        return this.http.get(this.url)
            .do(function (res) { return console.log("Response inside getPlace offers Service: " + res); })
            .map(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    PlaceServiceProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error.");
    };
    return PlaceServiceProvider;
}());
PlaceServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_cloud_angular__["d" /* User */]])
], PlaceServiceProvider);

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_offers_place_offers__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PlaceDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlaceDetailPage = (function () {
    function PlaceDetailPage(user, navCtrl, navParams, placeServiceProvider, callNumber, http, alertCtrl) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeServiceProvider = placeServiceProvider;
        this.callNumber = callNumber;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.placeId = navParams.get("placeId");
    }
    PlaceDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceDetailPage');
        this.getPlaceData();
    };
    PlaceDetailPage.prototype.getPlaceData = function () {
        var _this = this;
        this.placeServiceProvider.getPlace(this.placeId).subscribe(function (data) {
            _this.place = data;
            _this.is_subscribed = data.is_user_subscribed;
            _this.subscriber_count = data.subscriber_count;
            if (!_this.is_subscribed) {
                _this.subscribe_button_text = "Follow";
            }
            else {
                _this.subscribe_button_text = "Following";
            }
            console.log(_this.place);
            //this.nextUrl = data.next
        });
    };
    PlaceDetailPage.prototype.subscribeUserToPlace = function (placeId) {
        var _this = this;
        //alert(this.user.social.facebook.data.raw_data['id']);
        this.facebook_id = this.user.social.facebook.data.raw_data['id'];
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var todayDate = new Date().toISOString().slice(0, 10);
        var body = {};
        if (!this.is_subscribed) {
            this.http.put("http://45.79.74.150:8080/places/api/placeSubscriber/0/?facebook_id=" + this.facebook_id + "&place_id=" + placeId, JSON.stringify(body), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.followAlert();
                _this.is_subscribed = true;
                _this.subscriber_count++;
                _this.subscribe_button_text = "Following";
                //this.navCtrl.setRoot(TabsPage);
            });
        }
        else {
            this.http.delete("http://45.79.74.150:8080/places/api/placeSubscriber/0/?facebook_id=" + this.facebook_id + "&place_id=" + placeId, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.unfollowAlert();
                _this.is_subscribed = false;
                _this.subscriber_count--;
                _this.subscribe_button_text = "Follow";
                //this.navCtrl.setRoot(TabsPage);
            });
        }
    };
    PlaceDetailPage.prototype.navigatePlaceOffers = function (placeId) {
        console.log("Navigating to place id: " + placeId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__place_offers_place_offers__["a" /* PlaceOffersPage */], {
            placeId: placeId
        });
    };
    PlaceDetailPage.prototype.makeCall = function (phone_number) {
        this.callNumber.callNumber(phone_number, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    PlaceDetailPage.prototype.followAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'You are now following this Place and will receive offer notifications from it.',
            buttons: ['Ok']
        });
        alert.present();
    };
    PlaceDetailPage.prototype.unfollowAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'You are not following this Place anymore you will not receive offer notifications from it.',
            buttons: ['Ok']
        });
        alert.present();
    };
    return PlaceDetailPage;
}());
PlaceDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-place-detail',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/place-detail/place-detail.html"*/'<!--\n  Generated template for the PlaceDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Place Detail</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="showPlaceOptions()">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="cards-bg">\n  <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="{{ place?.image_thumbnail }}">\n    </ion-avatar>\n    <h2>{{ place?.name }}</h2>\n    <p>Followers: {{ subscriber_count }}</p>\n\n  </ion-item>\n\n  <img src="{{ place?.image_cover }}">\n\n  <ion-card-content style="white-space: pre-line;">\n    <p>{{ place?.address }}</p>\n  </ion-card-content>\n\n  <ion-row no-padding>\n    <ion-col col-4>\n      <button ion-button icon-left clear small (click)="subscribeUserToPlace(place?.id)" [color]="!is_subscribed ? \'primary\' : \'disabled\'">\n        <ion-icon name="md-heart"></ion-icon>{{ subscribe_button_text }}\n      </button>\n    </ion-col>\n    <ion-col col-4 text-right>\n      <button ion-button icon-left clear small (click)="navigatePlaceOffers(place?.id)">\n        <ion-icon md="md-pricetag"></ion-icon>\n        <div>{{ place?.offers.length }} Offers</div>\n      </button>\n    </ion-col>\n    <ion-col col-4 center text-center>\n      <button ion-button clear small icon-start (click)="navigatePlaceOffers(place?.id)">\n        <ion-icon name="share-alt"></ion-icon>\n        <div>Share</div>\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n<ion-card>\n  <ion-card-header>\n    Actions\n  </ion-card-header>\n\n  <ion-list>\n    <button ion-item (click)="navigatePlaceOffers(place?.id)">\n      <ion-icon md="md-pricetag" item-start></ion-icon>\n      Offers\n      <ion-badge item-end>{{ place?.offers.length }}</ion-badge>\n    </button>\n\n    <button ion-item (click)="makeCall(place?.phone_number)">\n      <ion-icon name="call" item-start></ion-icon>\n      Call\n    </button>\n\n    <button ion-item>\n      <ion-icon name="map" item-start></ion-icon>\n      Location\n    </button>\n\n    <button ion-item>\n      <ion-icon name="logo-facebook" item-start></ion-icon>\n      Facebook\n    </button>\n\n    <button ion-item>\n      <ion-icon name="mail" item-start></ion-icon>\n      Send Email\n    </button>\n\n  </ion-list>\n</ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/place-detail/place-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__["a" /* PlaceServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PlaceDetailPage);

//# sourceMappingURL=place-detail.js.map

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 265;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkin_checkin__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__offers_offers__["a" /* OffersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__checkin_checkin__["a" /* CheckinPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Offers" tabIcon="md-pricetag"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Places" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Check-in" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="My Places" tabIcon="md-heart"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__place_filter_place_filter__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__place_detail_place_detail__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var HomePage = (function () {
    function HomePage(appCtrl, navCtrl, placeServiceProvider, facebook, modalCtrl) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.placeServiceProvider = placeServiceProvider;
        this.facebook = facebook;
        this.modalCtrl = modalCtrl;
        this.places = [];
        this.myInput = '';
        this.loadMoreData = true;
        this.search = '';
        this.getPlaces();
    }
    HomePage.prototype.getPlaces = function () {
        var _this = this;
        console.log("Getting Places");
        this.placeServiceProvider.getPlaces(this.search).subscribe(function (data) {
            _this.places = data.results;
            if (data.next) {
                var url = new URL(data.next);
                _this.nextPage = url.searchParams.get("page");
            }
            else {
                _this.loadMoreData = false;
            }
            //this.nextUrl = data.next
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log("Getting Places");
        this.search = '';
        this.loadMoreData = true;
        this.nextPage = 2;
        this.placeServiceProvider.getPlaces(this.search).subscribe(function (data) { return _this.places = data.results; }, refresher.complete());
    };
    HomePage.prototype.doInfinite = function (infiniteScroll, nextPage) {
        var _this = this;
        console.log('Begin async operation');
        console.log(this.loadMoreData);
        //this.loadMoreData = false;
        this.placeServiceProvider.getPlacesNext(nextPage).subscribe(function (data) {
            console.log('This Places Length before: ' + _this.places.length);
            console.log('Next Places page: ' + data.next);
            if (!data.next) {
                _this.loadMoreData = false;
            }
            else {
                var url = new URL(data.next);
                _this.nextPage = url.searchParams.get("page");
            }
            for (var i = 0; i < data.results.length; i++) {
                _this.places.push(data.results[i]);
            }
            console.log('This Places Length after: ' + _this.places.length);
            infiniteScroll.complete();
        });
    };
    HomePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.facebook.logout()];
                    case 1:
                        _a.sent();
                        //this.navCtrl.setRoot(LoginPage);
                        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.navigate = function (placeId) {
        console.log("Navigating to place id: " + placeId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__place_detail_place_detail__["a" /* PlaceDetailPage */], {
            placeId: placeId
        });
    };
    HomePage.prototype.onInput = function (event) {
        this.search = this.myInput;
        if (this.search != '') {
            this.loadMoreData = true;
        }
        else {
            this.loadMoreData = false;
        }
        this.getPlaces();
    };
    HomePage.prototype.presentModalFilter = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__place_filter_place_filter__["a" /* PlaceFilterPage */], { userId: 8675309 });
        profileModal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="new-background">\n    <ion-title>Places</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentModalFilter()">\n        <ion-icon name="md-funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar class="toolbar toolbar-md" no-border-top="">\n      <ion-searchbar\n        [(ngModel)]="myInput"\n        [showCancelButton]="shouldShowCancel"\n        (ionInput)="onInput($event)"\n        (ionCancel)="onCancel($event)"\n        placeholder="Search Place">\n      </ion-searchbar>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n\n\n  <ion-list>\n    <ion-item *ngFor="let place of places" (click)="navigate(place.id)">\n      <ion-avatar item-start>\n          <img src="{{place.image_thumbnail}}">\n        </ion-avatar>\n        <h2><b>{{place.name}}</b></h2>\n        <p>Subscriptores: {{place.subscriber_count}}</p>\n        <ion-note item-end>Offers: {{place.offers.length}}</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll *ngIf="loadMoreData==true" (ionInfinite)="doInfinite($event, nextPage)">\n     <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__["a" /* PlaceServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["b" /* FacebookAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PlaceFilterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlaceFilterPage = (function () {
    function PlaceFilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlaceFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceFilterPage');
    };
    return PlaceFilterPage;
}());
PlaceFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-place-filter',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/place-filter/place-filter.html"*/'<!--\n  Generated template for the PlaceFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filter Places</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/place-filter/place-filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PlaceFilterPage);

//# sourceMappingURL=place-filter.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceOffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PlaceOffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlaceOffersPage = (function () {
    function PlaceOffersPage(navCtrl, navParams, placeServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeServiceProvider = placeServiceProvider;
        this.placeId = navParams.get("placeId");
    }
    PlaceOffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlaceOffersPage');
        this.getPlaceOffersData();
    };
    PlaceOffersPage.prototype.getPlaceOffersData = function () {
        var _this = this;
        this.placeServiceProvider.getPlaceOffers(this.placeId).subscribe(function (data) {
            _this.offers = data.results;
            console.log(_this.offers);
            //this.nextUrl = data.next
        });
    };
    return PlaceOffersPage;
}());
PlaceOffersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-place-offers',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/place-offers/place-offers.html"*/'<!--\n  Generated template for the PlaceOffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Place Offers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n\n        <ion-card *ngFor="let offer of offers" (click)="navigate(place.id)">\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{ offer?.place_image_thumbnail }}">\n          </ion-avatar>\n          <h2>{{ offer?.place_name }}</h2>\n          <p>Subscribers: {{ offer?.place_subscribers_count }}</p>\n\n        </ion-item>\n\n        <img src="{{ offer?.image }}">\n\n        <ion-card-content style="white-space: pre-line;">\n          <b>{{ offer?.name }}</b>\n          {{ offer?.description }}\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>10,200 Me llega</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-left clear small (click)="navigatePlaceOffers(offer?.id)">\n              <ion-icon name="share-alt"></ion-icon>\n              <div>Share</div>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/place-offers/place-offers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__["a" /* PlaceServiceProvider */]])
], PlaceOffersPage);

//# sourceMappingURL=place-offers.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(user, facebook, appCtrl, navCtrl, navParams, push) {
        this.user = user;
        this.facebook = facebook;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.push = push;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(this.user.social.facebook.data.raw_data['id']);
        this.getUsername();
    };
    ProfilePage.prototype.getUsername = function () {
        this.username = this.user.social.facebook.data.full_name;
        this.profile_picture = this.user.social.facebook.data.profile_picture;
        this.facebook_id = this.user.social.facebook.data.raw_data['id'];
    };
    ProfilePage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.push.unregister()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.facebook.logout()];
                    case 2:
                        _a.sent();
                        //this.navCtrl.setRoot(LoginPage);
                        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="blurred-title-card">\n  <div class="card-image" [style.background-image]="\'url(\' + profile_picture + \')\'" >\n\n    <div padding-top text-center *ngIf="username" id="center-profile">\n      <img src="https://graph.facebook.com/{{facebook_id}}/picture?type=normal" alt="avatar">\n    </div>\n\n  </div>\n\n\n\n  <div class="card-title-background">\n    <span [style.background-image]="\'url(\' + profile_picture + \')\'"></span>\n  </div>\n\n  <div class="card-title">\n    <p>\n      {{username}}\n    </p>\n  </div>\n</ion-card>\n\n  <div padding-top text-center *ngIf="username">\n    <img src="https://graph.facebook.com/{{facebook_id}}/picture?type=normal" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="support()">Support</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["b" /* FacebookAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["c" /* Push */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_offer_service_offer_service__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OffersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OffersPage = (function () {
    function OffersPage(navCtrl, navParams, offerServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerServiceProvider = offerServiceProvider;
    }
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
        this.getOffersData();
    };
    OffersPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log("Refreshing Offers Data");
        this.offerServiceProvider.getOffers().subscribe(function (data) { return _this.offers = data.results; }, refresher.complete());
    };
    OffersPage.prototype.getOffersData = function () {
        var _this = this;
        this.offerServiceProvider.getOffers().subscribe(function (data) {
            _this.offers = data.results;
            console.log(_this.offers);
            //this.nextUrl = data.next
        });
    };
    OffersPage.prototype.navigate = function (placeId) {
        console.log("Navigating to place id: " + placeId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail__["a" /* PlaceDetailPage */], {
            placeId: placeId
        });
    };
    return OffersPage;
}());
OffersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-offers',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/offers/offers.html"*/'<!--\n  Generated template for the OffersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Offers</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n\n\n        <ion-card *ngFor="let offer of offers" (click)="navigate(place.id)">\n\n        <ion-item (click)="navigate(offer?.place)">\n          <ion-avatar item-start>\n            <img src="{{ offer?.place_image_thumbnail }}">\n          </ion-avatar>\n          <h2>{{ offer?.place_name }}</h2>\n          <p>Subscribers: {{ offer?.place_subscribers_count }}</p>\n\n        </ion-item>\n\n        <img src="{{ offer?.image }}">\n\n        <ion-card-content style="white-space: pre-line;">\n          <b>{{ offer?.name }}</b>\n          {{ offer?.description }}\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>10,200 Me llega</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-left clear small (click)="navigatePlaceOffers(offer?.id)">\n              <ion-icon name="share-alt"></ion-icon>\n              <div>Share</div>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/offers/offers.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_offer_service_offer_service__["a" /* OfferServiceProvider */]])
], OffersPage);

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the OfferServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var OfferServiceProvider = (function () {
    function OfferServiceProvider(http) {
        this.http = http;
        console.log('Hello OfferServiceProvider Provider');
    }
    OfferServiceProvider.prototype.getOffers = function () {
        //console.log("Getting Place offers with id: " + placeId);
        this.url = "http://45.79.74.150:8080/places/api/offers/";
        return this.http.get(this.url)
            .do(function (res) { return console.log("Response inside  getOffers Service: " + res); })
            .map(function (res) { return res.json(); })
            .catch(this.catchError);
    };
    OfferServiceProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error.");
    };
    return OfferServiceProvider;
}());
OfferServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], OfferServiceProvider);

//# sourceMappingURL=offer-service.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CheckinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CheckinPage = (function () {
    function CheckinPage(user, navCtrl, navParams, barcodeScanner, af) {
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.af = af;
        this.checkins = af.list('/checkins');
    }
    CheckinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckinPage');
    };
    CheckinPage.prototype.openCamera = function () {
        var _this = this;
        this.barcodeScanner.scan({ prompt: "Scan a Place Barcode to Check-in" }).then(function (barcodeData) {
            // Success! Barcode data is here
            var obj = JSON.parse(barcodeData.text);
            _this.checkins.push({
                place_id: obj.place_id,
                facebook_id: _this.user.social.facebook.data.raw_data['id'],
                full_name: _this.user.social.facebook.data.full_name
            });
            alert("Successfull Check-in");
        }, function (err) {
            // An error occurred
            alert("There was an error trying to Check-in");
        });
    };
    CheckinPage.prototype.addPlace = function () {
        this.checkins.push({
            place_id: "1"
        });
    };
    return CheckinPage;
}());
CheckinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkin',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/checkin/checkin.html"*/'<!--\n  Generated template for the CheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Check-in</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addPlace()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center class="vertical-align-content">\n  <ion-grid>\n        <ion-row>\n              <ion-col>\n                    <h1 no-padding no-margin>Check-in to Place</h1>\n                      <button ion-button (click)="openCamera()">\n                        Check-in\n                      </button>\n                      <ion-note>\n                        Point your camera to any Place with a Barcode\n                      </ion-note>\n              </ion-col>\n        </ion-row>\n  </ion-grid>\n </ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/checkin/checkin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_cloud_angular__["d" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], CheckinPage);

//# sourceMappingURL=checkin.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(569);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_place_filter_place_filter__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_place_detail_place_detail__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_place_offers_place_offers__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_checkin_checkin__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_offers_offers__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_call_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_place_service_place_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_cloud_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_offer_service_offer_service__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_barcode_scanner__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// Import the AF2 Module


// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyCOo5pdonGa7fx2rCwALD4h7Tnf3k8rnXc",
    authDomain: "placesweb-158223.firebaseapp.com",
    databaseURL: "https://placesweb-158223.firebaseio.com",
    projectId: "placesweb-158223",
    storageBucket: "placesweb-158223.appspot.com",
    messagingSenderId: "928811050103"
};
var cloudSettings = {
    'core': {
        'app_id': 'ef9bf63d'
    },
    'auth': {
        'facebook': {
            'scope': []
        }
    },
    'push': {
        'sender_id': '928811050103',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_place_filter_place_filter__["a" /* PlaceFilterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_place_offers_place_offers__["a" /* PlaceOffersPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_checkin_checkin__["a" /* CheckinPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_offers_offers__["a" /* OffersPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_place_filter_place_filter__["a" /* PlaceFilterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_place_offers_place_offers__["a" /* PlaceOffersPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_checkin_checkin__["a" /* CheckinPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_offers_offers__["a" /* OffersPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_place_service_place_service__["a" /* PlaceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_offer_service_offer_service__["a" /* OfferServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    //rootPage:any = TabsPage;
    //rootPage:any = AboutPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 964:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AboutPage = (function () {
    function AboutPage(http, navCtrl, platform) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    AboutPage.prototype.sendAppUserData = function () {
        console.log("Sending");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = {
            "full_name": "Mario from POST",
            "first_name": "Mario from POST",
            "last_name": "Mario from POST",
            "email": "mario@mario.com",
            "facebook_id": "123123",
            "profile_picture": "123123"
        };
        if (this.platform.is('cordova')) {
            this.url = "http://45.79.74.150:8080/places/api/";
        }
        else {
            this.url = '/api/';
        }
        this.http.post(this.url + "appUsers/", JSON.stringify(body), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    AboutPage.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || "Server Error.");
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button ion-button (click)="sendAppUserData()">\n    Post App User Data\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mmzepedab/Desktop/mario/placesApp/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

},[564]);
//# sourceMappingURL=main.js.map