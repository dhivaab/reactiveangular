import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: Product[];
  color: string;
  hname: string;
  query: string;
  filterproducts: Product[];
  _searchstring: string;
  constructor() {
    this.filterproducts = this.products;
  }
  // data binding will get get when get set the values.
  get searchstring(): string {
      return this._searchstring;
  }
  set searchstring(value: string) {
      this._searchstring = value;
      this.filterproducts = this._searchstring ? this.performfilteroperation(value) : this.products;
  }
  performfilteroperation(value: string): Product[] {
      return this.products.filter((product: Product) => product.ProductName.indexOf(value) > -1);
  }

  ngOnInit() {
    this.products = [
      {ProductId: 1, ProductName: 'chico fruit', Rating: 2, Amount: 1.2, Quantity: 22 },
      {ProductId: 10, ProductName: 'pomo grante', Rating: 3, Amount: 34.22, Quantity: 10 },
      {ProductId: 100, ProductName: 'apple', Rating: 4, Amount: 444.44, Quantity: 45 }
    ];

    if (this.products.length > 1) {
        this.color = 'Blue';
    } else {
        this.color = 'Green';
    }
    this.hname = 'submit';
  }
  spanonclick(): void {
    this.hname = 'click';
    alert('am on click');

  }
  spanmouseover(): void  {
    this.hname = 'mouse over';
    alert('span mouse over');
  }
  onclickevent(product: Product[]): void {
      alert(product.length);
  }
}

export interface Product {
ProductId: number;
ProductName: string;
Rating: number;
Amount: number;
Quantity: number;
}
