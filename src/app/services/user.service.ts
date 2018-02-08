import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';

@Injectable()
export class UserService {

  constructor(public _http: HttpClient) { }

  getusername(input: string): string {
    return input + 'welcome';
  }

  getuserdetails(): Observable<User[]> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
