import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { HomePage} from '../home/home';
import { WelcomePage} from '../welcome/welcome';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  responseData: any;
  userData = {"username": "","password": ""};


  constructor(public navCtrl: NavController, public authservice: AuthServiceProvider, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  showLoader() {

    this.loading = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loading.present();

  }
  login(){
    this.showLoader();
    this.authservice.postData(this.userData, "login/").then((result) => {
      this.responseData = result;
      console.log(this.responseData.key);
  
      localStorage.setItem('token', JSON.stringify(this.responseData.key));
      this.loading.dismiss();
      this.navCtrl.push(HomePage);

    }, (err) => {
      this.loading.dismiss();
      // error message
      

    });
  }
  goBack(){
    this.navCtrl.push(WelcomePage);
  }

}
