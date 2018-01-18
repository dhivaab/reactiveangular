import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // http module for get request
import 'rxjs/add/operator/map'; // rx for map

@Injectable()
export class DataService {

  constructor(public http: Http) {   }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }
}
