import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class ForumService {
    base_url: String;
    public token: any;
    http: any;

    constructor(http: Http){
        this.base_url = 'http://127.0.0.1:8000/forum/';
        this.http = http;
    }  

    getForumTopics(token){
        let headers = new Headers();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'topics/topics/', { headers: headers }).map(res => res.json());
    }

    getSearchForumTopics(token) {
        let headers = new Headers();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url + 'topics/searchlist/', { headers: headers }).map(res => res.json());
    }
   
    postNewForumTopic(topicdata, type,token) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            this.http.post(this.base_url + type, JSON.stringify(topicdata), { headers: headers }).subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);

            });
        });
    }

}