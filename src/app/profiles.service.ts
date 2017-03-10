import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ProfilesService {

    constructor (private http: Http) {}


sendData(user: any) {
  const body = JSON.stringify(user);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:8082/user/profile', body,{ withCredentials: true } )
}

}
