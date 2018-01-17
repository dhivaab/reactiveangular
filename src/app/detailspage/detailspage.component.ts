import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})

export class DetailspageComponent implements OnInit {

  list: Employee[]= [];
  edited: boolean;
  editedid: number;
  editedname: string;

  constructor() { }

  ngOnInit() {}

  // add books
  add(id, name) {
    this.list.push({id: id, name: name});
  }
  // delete books
  delete(id) {
    for ( let i = 0; i < this.list.length; i++ ) {
        if (this.list[i].id === id) {
            this.list.splice(i);
        }
    }
    this.edited = false;
  }

  // edit books
  edit(id, name) {
    this.edited = true;
    this.editedid = id;
    this.editedname = name;
  }

  // update books
  update(id, name) {
    for ( let i = 0; i < this.list.length; i++ ) {
      if (this.list[i].id === id) {
          this.list[i].name = name;
      }
  }
    this.edited = false;
  }

}