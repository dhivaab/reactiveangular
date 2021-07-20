import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DetailspageComponent } from './detailspage/detailspage.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
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
import { JsoncomponentComponent } from './jsoncomponent/jsoncomponent.component';
import { RootpageComponent } from './rootpage/rootpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule } from '@angular/material';

// routing configuration
const appRoutes: Routes = [
{path: 'details', component: DetailspageComponent},
{path: 'posts', component: PostspageComponent},
{path: 'usercomp', component: UsercompComponent},
{path: 'rootcomp', component: RootpageComponent},
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
    JsoncomponentComponent,
    RootpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,    
    
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    SharedModule,
    
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, UserService, HttpClientModule, NativeGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
