import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonFormData } from '../jsoncomponent/json-form.component';

@Component({
  selector: 'app-rootpage',
  templateUrl: './rootpage.component.html',
  styleUrls: ['./rootpage.component.css']
})
export class RootpageComponent implements OnInit {

  public formData: JsonFormData;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/assets/inputcontrols.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }

}
