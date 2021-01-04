import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  newscheduleRes: any;
  addscheduleForm: FormGroup

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) {
  }

  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/moment.min.js");
    this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    this.loadScript("assets/theme/js/app.js");
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");

    this.addscheduleForm = this.fb.group({
      doctorname: [''],
      availabledays: [''],
      starttime: [''],
      endtime: [''],
      msg: [''],
      status: [''],
    })
  }
  backtoallScehedules() {
    this.router.navigateByUrl('adminlogin/schedule');
  }
  // add doctor schedule
  addnewSchedule() {
    const adschdule = {
      doctorName: this.addscheduleForm.value.doctorname,
      availableDays: this.addscheduleForm.value.availabledays,
      startTime: this.addscheduleForm.value.starttime,
      endTime: this.addscheduleForm.value.endtime,
      message: this.addscheduleForm.value.msg,
      status: this.addscheduleForm.value.status,
    }
    this.apiService.addSchedule(adschdule).subscribe(addscheduleRes => {
      this.newscheduleRes = addscheduleRes;
      if(this.newscheduleRes.message === 'Schedule added successfully...') {
        setTimeout(() => {
          this.router.navigateByUrl('adminlogin/schedule')
        }, 2000);
      }
      console.log('newscheduleRes', addscheduleRes);
    })
  }
}
