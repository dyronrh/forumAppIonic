import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { OwnerService } from '../../providers/owner-services/owner-service';
import { ForumService } from '../../providers/forum-service/forum-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the NewtopicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newtopic',
  templateUrl: 'newtopic.html',
})
export class NewtopicPage {
  responseData: any;
  public userDatail: any;
  items: any;
  public userData: String;
  public userDataPK: String;
  trim = localStorage.getItem('token').lastIndexOf;
  userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
  topicData = { "topic_title": "", "topic_description": "", "topic_date": "", "owner": "", "post_username": "" };
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public ForumService: ForumService, public OwnerService: OwnerService) {
  }

  ngOnInit() {
    var token: String = 'Token ' + this.userToken;
    //geting user Data for login user
    this.OwnerService.getOwnerData(token).subscribe(response => {
      this.userData = response.username;
      // localStorage.setItem('login_username', userData);
      console.log(this.userData);

    });

    //geting user Data for login user
    this.OwnerService.getOwnerData(token).subscribe(response => {
      this.topicData.owner = response.pk;
      this.topicData.post_username = response.username;
      // localStorage.setItem('login_username', userData);
      console.log("this is pk" + this.topicData.owner);

    });
  }
  postNewTopic() {
    var token: String = 'Token ' + this.userToken;
    this.ForumService.postNewForumTopic(this.topicData, "topics/create/", token).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
     
      this.navCtrl.push(HomePage);

    }, (err) => {
      //error message
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtopicPage');
  }

  logout() {
    const root = this.app.getRootNav();
    localStorage.removeItem('token');
    root.popToRoot();
  }

}
