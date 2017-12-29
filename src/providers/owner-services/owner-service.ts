import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class OwnerService {
    http: any;
    base_url: String;
    constructor( http: Http){
        this.http = http;
        this.base_url = 'http://127.0.0.1:8000/'
    }

    getOwnerData(token){
        let headers = new Headers();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base_url +'rest/auth/user/', {headers: headers}).map(res => res.json());
    }
}
