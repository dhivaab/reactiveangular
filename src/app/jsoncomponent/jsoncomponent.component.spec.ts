import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoncomponentComponent } from './jsoncomponent.component';

describe('JsoncomponentComponent', () => {
  let component: JsoncomponentComponent;
  let fixture: ComponentFixture<JsoncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsoncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsoncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
