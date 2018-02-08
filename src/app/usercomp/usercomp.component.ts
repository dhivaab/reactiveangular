import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-usercomp',
  templateUrl: './usercomp.component.html',
  styleUrls: ['./usercomp.component.css']
})
export class UsercompComponent implements OnInit {

  names: string;
  users: User[]= [];
  constructor(private usr: UserService) { }

  ngOnInit() {
    this.getname();
    this.getuserdetails();
  }
  getname() {
    this.names = this.usr.getusername('balamurugan');
  }
  getuserdetails() {
      this.usr.getuserdetails().subscribe(user => this.users = user);
  }
}
