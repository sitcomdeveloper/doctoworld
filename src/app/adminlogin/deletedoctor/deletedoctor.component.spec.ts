import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedoctorComponent } from './deletedoctor.component';

describe('DeletedoctorComponent', () => {
  let component: DeletedoctorComponent;
  let fixture: ComponentFixture<DeletedoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
