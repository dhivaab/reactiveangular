import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DetailspageComponent } from './detailspage/detailspage.component';
import { DataService } from './services/data.service';
import {HttpModule } from '@angular/http';
import { PostspageComponent } from './postspage/postspage.component';

import {RouterModule, Routes} from '@angular/router';
import { UsercompComponent } from './usercomp/usercomp.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PricetagComponent } from './pricetag/pricetag.component';
import { NativeGuardService } from './native-guard.service';
import { CanActivate } from '@angular/router';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';

// routing configuration
const appRoutes: Routes = [
{path: 'details', component: DetailspageComponent},
{path: 'posts', component: PostspageComponent},
{path: 'usercomp', component: UsercompComponent},
{path: 'pricetag/:name', component: PricetagComponent, canActivate: [NativeGuardService]},
{path: '**', component: DetailspageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DetailspageComponent,
    PostspageComponent,
    UsercompComponent,
    PricetagComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    SharedModule
  ],
  providers: [DataService, UserService, HttpClientModule, NativeGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
