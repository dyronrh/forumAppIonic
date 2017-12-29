import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class PostService {
    http: any;
    public token: any;
    base_url: String;

    constructor(http: Http) {
        this.base_url = 'http://127.0.0.1:8000/forum/';
        this.http = http;
    }

    getForumReply(token) {
        let headers = new Headers();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'posts/posts/', { headers: headers }).map(res => res.json());
    }

    getPostedReply(token,keyword) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', token);   
        return this.http.get(this.base_url + 'posts/searchlist/?q=' + keyword, { headers: headers }).map(res => res.json());

        
    }


    newPostService(postdata, type, token) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            this.http.post(this.base_url + type, JSON.stringify(postdata), { headers: headers }).subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);

            });
        });
    }

}
