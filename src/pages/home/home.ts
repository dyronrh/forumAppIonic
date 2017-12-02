import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userDatail: any;

  constructor(public navCtrl: NavController, public app: App) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDatail = data.userData;

  }

logout(){
  const root = this.app.getRootNav();
  root.popToRoot();
}

}
