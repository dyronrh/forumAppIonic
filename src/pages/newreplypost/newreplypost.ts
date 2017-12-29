import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PostService } from '../../providers/post-service/post-service';
import { OwnerService } from '../../providers/owner-services/owner-service';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the NewreplypostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newreplypost',
  templateUrl: 'newreplypost.html',
})
export class NewreplypostPage {
  responseData: any;
  public userDatail: any;
  items: any;
  item: any;
  topicTitle: any;
  itemFromTopic:any;
  public token: String;
  public userData: String;
  public userDataPK: String;
  trim = localStorage.getItem('token').lastIndexOf;
  userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
  postTopicReply = { "user_post": "", "post_date": "", "owner": "", "topic": "", "post_username": "" };

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App, public PostService: PostService, public OwnerService: OwnerService) {
    this.item = navParams.get('item');
  }
  ngOnInit() {
    
    this.postTopicReply.topic = this.item.topic_title;
    console.log('topic id' + this.postTopicReply.topic);
    console.log('topic id' + this.userToken);
    var token: String = 'Token ' + this.userToken;
    //geting user Data for login user
    this.OwnerService.getOwnerData(token).subscribe(response => {
    this.userData = response.username;
      // localStorage.setItem('login_username', userData);
      console.log(this.userData);

    });

    //geting user Data for login user
    this.OwnerService.getOwnerData(token).subscribe(response => {
      this.postTopicReply.owner = response.pk;
      this.postTopicReply.post_username = response.username;
      // localStorage.setItem('login_username', userData);
      console.log("this is pk" + this.postTopicReply.owner);

    });
  }

  postNewTopicReply() {
    console.log("replying...");
    var token: String = 'Token ' + this.userToken;
    this.PostService.newPostService(this.postTopicReply, "posts/create/", token).then((result) => {
      this.responseData = result;
      console.log(result);
      this.viewItemDetail(this.item);
      
    }, (err) => {
      //error message
    });

  }

  viewItemDetail(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewreplypostPage');
  }
  logout() {
    const root = this.app.getRootNav();
    localStorage.removeItem('token');
    root.popToRoot();
  }
}
