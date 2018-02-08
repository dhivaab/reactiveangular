import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products/productlist/productlist.component';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: Product[], searchitem: string): any {
    return value.filter((searchval: Product) => {
      return searchval.ProductName.indexOf(searchitem) > -1;
    });
  }
}
