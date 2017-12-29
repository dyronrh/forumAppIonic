import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { NewreplypostPage } from '../newreplypost/newreplypost';
import { OwnerService } from '../../providers/owner-services/owner-service';
import { PostService } from '../../providers/post-service/post-service';
/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: any;
  items: any;
  private replysresponse: any;
  itemsreply: any;
  public userDatail: any;
  responseData: any;
  public userData: String;
  trim = localStorage.getItem('token').lastIndexOf;
  userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App, public PostService: PostService, public OwnerService: OwnerService) {
    this.item = navParams.get('item');
    var token: String = 'Token ' + this.userToken;

    //list of topics reply

    this.PostService.getPostedReply(token, this.item.topic_title).subscribe(response => {
      this.replysresponse = response;
      console.log(JSON.stringify(this.item.topic_title) + 'topics replays' + this.itemsreply);
      this.initializeItems();

    });
  }
  goToNewReply(item){
    this.navCtrl.push(NewreplypostPage, {
      item: item
    });
  }
  initializeItems() {
    this.items = this.replysresponse;
  }  
  ngOnInit() {
    var token: String = 'Token ' + this.userToken;
  /*  this.PostService.getForumReply(token).subscribe(response => {
      this.items = response;
      console.log(this.items[0].topic_title);   
    });
*/
    //list of topics reply

    this.PostService.getPostedReply(token, this.item.topic_title).subscribe(response => {
      this.items = response;
      console.log(JSON.stringify(this.item.topic_title)+'topics replays'+ this.itemsreply);
    });

    //geting user Data for login user
    this.OwnerService.getOwnerData(token).subscribe(response => {
      this.userData = response.username;
      // localStorage.setItem('login_username', userData);
      console.log(response.username);

    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.user_post.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }
  logout() {
    const root = this.app.getRootNav();
    localStorage.removeItem('token');
    root.popToRoot();
  }
}
