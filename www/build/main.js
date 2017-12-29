webpackJsonp([7],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* unused harmony export PostForumService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var api_url = "http://127.0.0.1:8000/rest/auth/";
var base_url = "http://127.0.0.1:8000/forum/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(api_url + type, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

var PostForumService = (function () {
    function PostForumService(http) {
        this.http = http;
        this.base_url = 'http://127.0.0.1:8000/forum/';
        console.log('loading topic forum items');
    }
    PostForumService.prototype.requestTopic = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content - Type', 'application/json');
            _this.http.post();
        });
    };
    PostForumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PostForumService);
    return PostForumService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewreplypostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_owner_services_owner_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__ = __webpack_require__(89);
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
 * Generated class for the NewreplypostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewreplypostPage = (function () {
    function NewreplypostPage(navCtrl, navParams, app, PostService, OwnerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.PostService = PostService;
        this.OwnerService = OwnerService;
        this.trim = localStorage.getItem('token').lastIndexOf;
        this.userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        this.postTopicReply = { "user_post": "", "post_date": "", "owner": "", "topic": "", "post_username": "" };
        this.item = navParams.get('item');
    }
    NewreplypostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.postTopicReply.topic = this.item.topic_title;
        console.log('topic id' + this.postTopicReply.topic);
        console.log('topic id' + this.userToken);
        var token = 'Token ' + this.userToken;
        //geting user Data for login user
        this.OwnerService.getOwnerData(token).subscribe(function (response) {
            _this.userData = response.username;
            // localStorage.setItem('login_username', userData);
            console.log(_this.userData);
        });
        //geting user Data for login user
        this.OwnerService.getOwnerData(token).subscribe(function (response) {
            _this.postTopicReply.owner = response.pk;
            _this.postTopicReply.post_username = response.username;
            // localStorage.setItem('login_username', userData);
            console.log("this is pk" + _this.postTopicReply.owner);
        });
    };
    NewreplypostPage.prototype.postNewTopicReply = function () {
        var _this = this;
        console.log("replying...");
        var token = 'Token ' + this.userToken;
        this.PostService.newPostService(this.postTopicReply, "posts/create/", token).then(function (result) {
            _this.responseData = result;
            console.log(result);
            _this.viewItemDetail(_this.item);
        }, function (err) {
            //error message
        });
    };
    NewreplypostPage.prototype.viewItemDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    NewreplypostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewreplypostPage');
    };
    NewreplypostPage.prototype.logout = function () {
        var root = this.app.getRootNav();
        localStorage.removeItem('token');
        root.popToRoot();
    };
    NewreplypostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newreplypost',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\newreplypost\newreplypost.html"*/'<!--\n  Generated template for the NewreplypostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" no-border-top>\n    <ion-toolbar color="primary" no-border-top>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="contact"></ion-icon>\n          {{this.postTopicReply.post_username}}\n        </button>\n        <button ion-button icon-only>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button block outline (click)="logout()">Logout</button>\n      </ion-buttons>\n\n      <ion-title>Add a new Topic Reply </ion-title>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <div id="new-reply">\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Enter you Reply" [(ngModel)]="postTopicReply.user_post" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-datetime type="date" placeholder="Replay day" displayFormat="YYYY-MM-DD" [(ngModel)]="postTopicReply.post_date"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-input type="number" [(ngModel)]="postTopicReply.owner">{{postTopicReply.owner}}</ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="postTopicReply.topic">{{postTopicReply.topic}}</ion-input>\n    </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="Replay by" [(ngModel)]="postTopicReply.post_username">{{postTopicReply.post_username}}</ion-input>\n      </ion-item>\n  </ion-list>\n  <button ion-button block (click)="postNewTopicReply()">Reply</button>\n\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\newreplypost\newreplypost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_post_service_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__providers_owner_services_owner_service__["a" /* OwnerService */]])
    ], NewreplypostPage);
    return NewreplypostPage;
}());

//# sourceMappingURL=newreplypost.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewtopicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_owner_services_owner_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_forum_service_forum_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(62);
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
 * Generated class for the NewtopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewtopicPage = (function () {
    function NewtopicPage(navCtrl, navParams, app, ForumService, OwnerService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.ForumService = ForumService;
        this.OwnerService = OwnerService;
        this.trim = localStorage.getItem('token').lastIndexOf;
        this.userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        this.topicData = { "topic_title": "", "topic_description": "", "topic_date": "", "owner": "", "post_username": "" };
    }
    NewtopicPage.prototype.ngOnInit = function () {
        var _this = this;
        var token = 'Token ' + this.userToken;
        //geting user Data for login user
        this.OwnerService.getOwnerData(token).subscribe(function (response) {
            _this.userData = response.username;
            // localStorage.setItem('login_username', userData);
            console.log(_this.userData);
        });
        //geting user Data for login user
        this.OwnerService.getOwnerData(token).subscribe(function (response) {
            _this.topicData.owner = response.pk;
            _this.topicData.post_username = response.username;
            // localStorage.setItem('login_username', userData);
            console.log("this is pk" + _this.topicData.owner);
        });
    };
    NewtopicPage.prototype.postNewTopic = function () {
        var _this = this;
        var token = 'Token ' + this.userToken;
        this.ForumService.postNewForumTopic(this.topicData, "topics/create/", token).then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            //error message
        });
    };
    NewtopicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewtopicPage');
    };
    NewtopicPage.prototype.logout = function () {
        var root = this.app.getRootNav();
        localStorage.removeItem('token');
        root.popToRoot();
    };
    NewtopicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newtopic',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\newtopic\newtopic.html"*/'<!--\n  Generated template for the NewtopicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" no-border-top>\n    <ion-toolbar color="primary" no-border-top>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="contact"></ion-icon>\n          {{this.userData}}\n        </button>\n<button ion-button block outline (click)="logout()">Logout</button>\n      </ion-buttons>\n      <ion-buttons end>\n\n      </ion-buttons>\n\n      <ion-title>Add Topic </ion-title>\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content text-center padding>\n  <h1>Enter a new Topic</h1>\n  <ion-list>\n    <div id="new-topìc">\n      <ion-item>\n        <ion-input type="text" placeholder="Topic Tittle" [(ngModel)]="topicData.topic_title">{{this.userDataPK}}</ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Topic Detail" [(ngModel)]="topicData.topic_description"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY MM DD" [(ngModel)]="topicData.topic_date"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="number" [(ngModel)]="topicData.owner"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="topicData.post_username"></ion-input>\n      </ion-item>\n      <button ion-button block (click)="postNewTopic()">ADD NEW</button>\n    </div>\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\newtopic\newtopic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_forum_service_forum_service__["a" /* ForumService */], __WEBPACK_IMPORTED_MODULE_2__providers_owner_services_owner_service__["a" /* OwnerService */]])
    ], NewtopicPage);
    return NewtopicPage;
}());

//# sourceMappingURL=newtopic.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(90);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.userData = { "username": "", "email": "", "password1": "", "password2": "" };
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.registration = function () {
        //this.navCtrl.push(HomePage);
        var _this = this;
        this.authservice.postData(this.userData, "registration/").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            localStorage.setItem('userData', JSON.stringify(_this.responseData));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            // error message
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" no-border-top>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center>\n    <ion-img id="logo" class="img-responsive" src="assets/imgs/forumlogo.png"></ion-img>\n    <a>\n    </a>\n  </div>\n  <div id="credentials-register">\n  <ion-list>\n  \n    <ion-item>\n      <ion-input type="text" placeholder="User Name" [(ngModel)]="userData.username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Email" [(ngModel)]="userData.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password1" [(ngModel)]="userData.password1"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password1" [(ngModel)]="userData.password2"></ion-input>\n    </ion-item>\n   <button ion-button block (click)="registration()">SIGNUP</button>\n  <a href="" (click)="login()"> <h1>Login</h1></a>\n  </ion-list>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/item-detail/item-detail.module": [
		685,
		6
	],
	"../pages/login/login.module": [
		686,
		5
	],
	"../pages/newreplypost/newreplypost.module": [
		688,
		4
	],
	"../pages/newtopic/newtopic.module": [
		689,
		3
	],
	"../pages/register/register.module": [
		687,
		0
	],
	"../pages/signup/signup.module": [
		691,
		2
	],
	"../pages/welcome/welcome.module": [
		690,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_forum_service_forum_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_item_detail_item_detail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_newreplypost_newreplypost__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_owner_services_owner_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newtopic_newtopic__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_post_service_post_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newtopic_newtopic__["a" /* NewtopicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_newreplypost_newreplypost__["a" /* NewreplypostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newreplypost/newreplypost.module#NewreplypostPageModule', name: 'NewreplypostPage', segment: 'newreplypost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newtopic/newtopic.module#NewtopicPageModule', name: 'NewtopicPage', segment: 'newtopic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_newtopic_newtopic__["a" /* NewtopicPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_newreplypost_newreplypost__["a" /* NewreplypostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_forum_service_forum_service__["a" /* ForumService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_owner_services_owner_service__["a" /* OwnerService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_post_service_post_service__["a" /* PostService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OwnerService = (function () {
    function OwnerService(http) {
        this.http = http;
        this.base_url = 'http://127.0.0.1:8000/';
    }
    OwnerService.prototype.getOwnerData = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'rest/auth/user/', { headers: headers }).map(function (res) { return res.json(); });
    };
    OwnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], OwnerService);
    return OwnerService;
}());

//# sourceMappingURL=owner-service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_owner_services_owner_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newtopic_newtopic__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_service_post_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, http, app, PostService, ForumService, OwnerService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.app = app;
        this.PostService = PostService;
        this.ForumService = ForumService;
        this.OwnerService = OwnerService;
        this.loadingCtrl = loadingCtrl;
        this.trim = localStorage.getItem('token').lastIndexOf;
        this.userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        var loadingPopup = this.loadingCtrl.create({
            content: 'Loading posts...'
        });
        var token = 'Token ' + this.userToken;
        this.ForumService.getForumTopics(token).subscribe(function (response) {
            _this.topicsresponse = response;
            _this.initializeItems();
            loadingPopup.dismiss();
            console.log(_this.items);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.initializeItems = function () {
        this.items = this.topicsresponse;
    };
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.topic_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var token = 'Token ' + this.userToken;
        this.ForumService.getForumTopics(token).subscribe(function (response) {
            _this.items = response;
            if (_this.items.length > 0) {
                console.log(_this.items[0].topic_title);
            }
        });
        /*
            this.ForumService.getSearchForumTopics(token).subscribe(response => {
              this.items1 = response;
              console.log('search list'+this.items1[1].topic_title);
            }); */
        //geting user Data for login user
        this.OwnerService.getOwnerData(token).subscribe(function (response) {
            _this.userData = response.username;
            // localStorage.setItem('login_username', userData);
            console.log(response.username);
        });
    };
    HomePage.prototype.viewItemDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    HomePage.prototype.goToNewTopicPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newtopic_newtopic__["a" /* NewtopicPage */]);
    };
    HomePage.prototype.logout = function () {
        var root = this.app.getRootNav();
        localStorage.removeItem('token');
        root.popToRoot();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\home\home.html"*/'<ion-header> \n<ion-navbar color="primary" no-border-top>\n<ion-title text-center id="title">Forum </ion-title>\n  <ion-toolbar color="primary" no-border-top>\n    <ion-searchbar (ionInput)="getItems($event)">\n  <ion-icon name="search"></ion-icon>\n</ion-searchbar>\n    <ion-buttons start>\n\n      <button ion-button icon-only >\n        <ion-icon name="contact"></ion-icon>\n        {{this.userData}}\n      </button>\n      <ion-fab-list side="top">\n\n      </ion-fab-list>\n      <button ion-button block outline (click)="logout()">Logout</button>\n      <button ion-button >\n\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n     \n    </ion-buttons>\n\n   \n  </ion-toolbar>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content color=\'primary\'>\n        \n  <div text-center>\n    <h2>Topics List</h2>\n  </div>\n    <div text-right>\n      <button ion-button (click)="goToNewTopicPage()" icon-left>\n        <ion-icon name="md-add-circle">\n             </ion-icon>     New Topic\n      </button>\n    </div>\n  <ion-list>\n    <ion-card id="card" *ngFor="let item of items">\n      <h1>{{item.topic_title}}</h1>   \n     \n   \n      <p>\n        <a>{{item.topic_username}}</a>\n        <a>, </a>\n        <a>{{item.topic_date}}</a>\n      </p>\n      <div id="viewbtn">\n        <button ion-button aling="right" (click)="viewItemDetail(item)">View</button>\n      </div>\n    </ion-card>\n  </ion-list>\n\n \n</ion-content>'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_6__providers_post_service_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__["a" /* ForumService */], __WEBPACK_IMPORTED_MODULE_4__providers_owner_services_owner_service__["a" /* OwnerService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_forum_service_forum_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_forum_service_forum_service__["a" /* ForumService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(62);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\tabs\tabs.html"*/'<button ion-button block (click)="logout()">Logout</button>\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = (function () {
    function PostService(http) {
        this.base_url = 'http://127.0.0.1:8000/forum/';
        this.http = http;
    }
    PostService.prototype.getForumReply = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'posts/posts/', { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostedReply = function (token, keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.http.get(this.base_url + 'posts/searchlist/?q=' + keyword, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.newPostService = function (postdata, type, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            _this.http.post(_this.base_url + type, JSON.stringify(postdata), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PostService);
    return PostService;
}());

//# sourceMappingURL=post-service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForumService = (function () {
    function ForumService(http) {
        this.base_url = 'http://127.0.0.1:8000/forum/';
        this.http = http;
    }
    ForumService.prototype.getForumTopics = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'topics/topics/', { headers: headers }).map(function (res) { return res.json(); });
    };
    ForumService.prototype.getSearchForumTopics = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'topics/searchlist/', { headers: headers }).map(function (res) { return res.json(); });
    };
    ForumService.prototype.postNewForumTopic = function (topicdata, type, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            _this.http.post(_this.base_url + type, JSON.stringify(topicdata), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ForumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ForumService);
    return ForumService;
}());

//# sourceMappingURL=forum-service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newreplypost_newreplypost__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_owner_services_owner_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_post_service_post_service__ = __webpack_require__(74);
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
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, app, PostService, OwnerService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.PostService = PostService;
        this.OwnerService = OwnerService;
        this.trim = localStorage.getItem('token').lastIndexOf;
        this.userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        this.item = navParams.get('item');
        var token = 'Token ' + this.userToken;
        //list of topics reply
        this.PostService.getPostedReply(token, this.item.topic_title).subscribe(function (response) {
            _this.replysresponse = response;
            console.log(JSON.stringify(_this.item.topic_title) + 'topics replays' + _this.itemsreply);
            _this.initializeItems();
        });
    }
    ItemDetailPage.prototype.goToNewReply = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newreplypost_newreplypost__["a" /* NewreplypostPage */], {
            item: item
        });
    };
    ItemDetailPage.prototype.initializeItems = function () {
        this.items = this.replysresponse;
    };
    ItemDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var token = 'Token ' + this.userToken;
        /*  this.PostService.getForumReply(token).subscribe(response => {
            this.items = response;
            console.log(this.items[0].topic_title);
          });
      */
        //list of topics reply
        this.PostService.getPostedReply(token, this.item.topic_title).subscribe(function (response) {
            _this.items = response;
            console.log(JSON.stringify(_this.item.topic_title) + 'topics replays' + _this.itemsreply);
        });
        //geting user Data for login user
        this.OwnerService.getOwnerData(token).subscribe(function (response) {
            _this.userData = response.username;
            // localStorage.setItem('login_username', userData);
            console.log(response.username);
        });
    };
    ItemDetailPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.user_post.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailPage');
    };
    ItemDetailPage.prototype.logout = function () {
        var root = this.app.getRootNav();
        localStorage.removeItem('token');
        root.popToRoot();
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\item-detail\item-detail.html"*/'<!--\n  Generated template for the ItemDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar text-center color="primary" no-border-top>\n    <ion-title>Topic Detail </ion-title>\n    <ion-toolbar color="primary" no-border-top>\n      <ion-searchbar (ionInput)="getItems($event)">\n        <ion-icon name="search"></ion-icon>\n      </ion-searchbar>\n      <ion-buttons start>\n        <button ion-button icon-only>\n          <ion-icon name="contact"></ion-icon>\n          {{this.userData}}\n        </button>\n\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button block outline (click)="logout()">Logout</button>\n      </ion-buttons>      \n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card id="topicdetail">\n    <h1>\n      {{item.topic_title}}\n    </h1>\n    <div>\n      <div id="dateTopic">Created at: {{item.topic_date}}</div>\n      <h2>{{item.topic_username}}</h2>\n      <h2>{{item.topic_description}}</h2>\n    </div>\n\n  </ion-card>\n  <div id="buttonreply" text-right>\n    <button ion-button (click)="goToNewReply(item)" icon-left>\n      <ion-icon name="ios-undo">\n      </ion-icon>  Reply \n    </button>\n  </div>\n  <ion-list>\n\n    <ion-card id="card" *ngFor="let item1 of items">\n      <h1>{{item1.user_post}}</h1>\n      <p>\n        <a>{{item1.post_username}}</a>\n        <a>, </a>\n        <a>{{item1.post_date}}</a>\n      </p>\n      <div id="viewbtn">\n\n      </div>\n    </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\item-detail\item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_post_service_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__providers_owner_services_owner_service__["a" /* OwnerService */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(135);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, authservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "username": "", "password": "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loading.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        this.authservice.postData(this.userData, "login/").then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData.key);
            localStorage.setItem('token', JSON.stringify(_this.responseData.key));
            _this.loading.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
            // error message
        });
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar color="primary" no-border-top>   \n    <ion-title>Login</ion-title>\n</ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div text-center>\n     <ion-img id="logo"  class="img-responsive" src="assets/imgs/forumlogo.png"></ion-img> \n    <a> \n  </a>\n  </div>\n  <div  id="credentials-content">   \n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username" [(ngModel)] = "userData.username"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)] = "userData.password"></ion-input>\n    </ion-item>\n  \n  </ion-list>\n\n<button ion-button block (click)= "login()">Login</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(160);
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
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], {}, { animate: false });
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\DayroMan\registerapp\registerApp\src\pages\welcome\welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary" no-border-top>\n\n    <ion-toolbar color="primary" no-border-top>\n \n  <ion-title text-center id="title">Question Forum </ion-title>\n\n    </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content  text-center padding id="welcome_page">\n  \n  <h1>Welcome to Question Forum App</h1>\n  <div class="text-center"></div>\n  <div text-center>\n    <ion-img id="logo" class="img-responsive" src="assets/imgs/forumlogo.png"></ion-img>\n    <a>\n    </a>\n  </div>\n<button ion-button block (click)="login()">Login</button>\n<button ion-button block (click)="signup()">Signup</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\DayroMan\registerapp\registerApp\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map