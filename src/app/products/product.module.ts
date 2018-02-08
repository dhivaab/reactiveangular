import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import {RouterModule, Routes} from '@angular/router';
import { SearchpipePipe } from '../searchpipe.pipe';
import { FormsModule } from '@angular/forms';
import { NamespacesPipe } from '../namespaces.pipe';
// routing configuration
const appRoutes: Routes = [
  {path: 'productlist', component: ProductlistComponent},
  ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [
    ProductlistComponent,
    SearchpipePipe,
    NamespacesPipe
  ]
})
export class ProductModule { }
