import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

let api_url = "http://127.0.0.1:8000/rest/auth/";
let base_url = "http://127.0.0.1:8000/forum/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(api_url + type, JSON.stringify(credentials), {headers: headers} ).subscribe( res => {
        resolve( res.json());
      }, (err) => {
        reject(err);

      });
    });
  }

}

@Injectable()
export class PostForumService {
  http: any;
  base_url: String;

  constructor(http: Http){
    this.http = http;
    this.base_url = 'http://127.0.0.1:8000/forum/';
    console.log('loading topic forum items');
  }
requestTopic( credentials, type){
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content - Type', 'application/json');
    this.http.post()
  });
}
  
}