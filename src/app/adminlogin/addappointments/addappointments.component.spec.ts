import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappointmentsComponent } from './addappointments.component';

describe('AddappointmentsComponent', () => {
  let component: AddappointmentsComponent;
  let fixture: ComponentFixture<AddappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
