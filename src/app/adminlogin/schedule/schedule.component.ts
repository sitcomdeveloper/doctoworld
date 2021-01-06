import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DeleteComponent } from '../delete/delete.component';
import { DeletescheduleComponent } from '../deleteschedule/deleteschedule.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  fetScheduleRes: any;
  scheduleDetails: any;

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder, private modalService: BsModalService,) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
    this.fechScedules()
  }
  // get all schedule
  fechScedules() {
    this.apiService.getSchedule().subscribe(getschedulesRes => {
      this.fetScheduleRes = getschedulesRes;
       this.scheduleDetails = this.fetScheduleRes.scheduleDetail
      console.log('fetScheduleRes', this.scheduleDetails);
    })
  }
  addSchedule() {
    this.router.navigateByUrl('adminlogin/add-schedule');
  }
  editschedule(selectedidofschedule: any) {
    this.router.navigate(['/adminlogin/editschedule', selectedidofschedule]);
// this.router.navigateByUrl('adminlogin/editschedule');
  }
  deleteschedule(selectedidofschedule: any) {
    const initialState = {
      title: 'Delete Schedule',
      scheduleid: selectedidofschedule,
      schedule: 'sche'
    };
    // tslint:disable-next-line: max-line-length
    this.bsModalRef = this.modalService.show(DeletescheduleComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal930', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    this.bsModalRef.content.clddata.subscribe(() => {
      this.fechScedules();
    });
  }
  }
