import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletescheduleComponent } from './deleteschedule.component';

describe('DeletescheduleComponent', () => {
  let component: DeletescheduleComponent;
  let fixture: ComponentFixture<DeletescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletescheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
