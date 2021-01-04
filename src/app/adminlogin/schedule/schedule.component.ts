import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  fetScheduleRes: any;

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fechScedules()
  }
  // get all schedule
  fechScedules() {
    this.apiService.getSchedule().subscribe(getschedulesRes => {
      this.fetScheduleRes = getschedulesRes;
      console.log('fetScheduleRes', getschedulesRes);
    })
  }
  addSchedule() {
    this.router.navigateByUrl('adminlogin/add-schedule');
  }
  editschedule() {

  }
  deleteschedule() {

  }
}
