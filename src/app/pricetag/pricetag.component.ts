import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-pricetag',
  templateUrl: './pricetag.component.html',
  styleUrls: ['./pricetag.component.css']
})
export class PricetagComponent implements OnInit {

  pricetag: PriceTag[] = [];
  id: string;
  constructor(private _route: ActivatedRoute , private _router: Router) {
      this.pricetag.push(
        {name: 'Balamurugan', age: 31, sex: 'Male', salary: 100000, place: 'villupuram'},
        {name: 'shanthi', age: 27, sex: 'Femlae', salary: 20000, place: 'virudhunagar'},
        {name: 'dhiva', age: 3, sex: 'Male', salary: 200, place: 'tuticorin'}
      );
      this.id = this._route.snapshot.paramMap.get('name');
      alert(this.id);
  }

  ngOnInit() {
  }

}
export class PriceTag {
  name: string;
  age: number;
  sex: string;
  salary: number;
  place: string;
}
