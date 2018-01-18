import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DetailspageComponent } from './detailspage/detailspage.component';
import { DataService } from './services/data.service';
import {HttpModule } from '@angular/http';
import { PostspageComponent } from './postspage/postspage.component';

import {RouterModule, Routes} from '@angular/router';

// routing configuration
const appRoutes: Routes = [
{path: 'details', component: DetailspageComponent},
{path: 'posts', component: PostspageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DetailspageComponent,
    PostspageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
