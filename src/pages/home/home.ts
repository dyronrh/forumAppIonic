import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { ForumService } from '../../providers/forum-service/forum-service';
import { ItemDetailPage } from '../item-detail/item-detail';
import { OwnerService } from '../../providers/owner-services/owner-service';
import { NewtopicPage} from '../newtopic/newtopic';
import { PostService } from '../../providers/post-service/post-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private topicsresponse: any; // <- I've added the private keyword 
  public userDatail: any;
  responseData: any;
  items: any;
  items1: any;
  public userData: String;
  trim = localStorage.getItem('token').lastIndexOf;
  userToken = localStorage.getItem('token').substring(1, localStorage.getItem('token').length-1) ;
  constructor(public navCtrl: NavController, private http: Http, public app: App, public PostService: PostService, public ForumService: ForumService, public OwnerService: OwnerService, private loadingCtrl: LoadingController) {   
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading posts...'
    });

    var token: String = 'Token ' + this.userToken;
    this.ForumService.getForumTopics(token).subscribe(response => {
      this.topicsresponse = response;
    
      this.initializeItems();
      loadingPopup.dismiss();
      console.log(this.items);
    }); 
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  initializeItems() {
    this.items = this.topicsresponse;    
  }    

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.topic_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ngOnInit(){
    var token: String = 'Token ' + this.userToken;
    this.ForumService.getForumTopics(token).subscribe(response => {
      this.items = response;
      if (this.items.length>0){console.log(this.items[0].topic_title);}
      
    }); 
/*
    this.ForumService.getSearchForumTopics(token).subscribe(response => {
      this.items1 = response;
      console.log('search list'+this.items1[1].topic_title);
    }); */

    //geting user Data for login user
    this.OwnerService.getOwnerData(token).subscribe(response => {
      this.userData = response.username;
     // localStorage.setItem('login_username', userData);
      console.log(response.username);
    });



  }

  

  viewItemDetail(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
  goToNewTopicPage(){
    this.navCtrl.push(NewtopicPage);

  }
logout(){
  const root = this.app.getRootNav();
  localStorage.removeItem('token');
  root.popToRoot();
}

}
