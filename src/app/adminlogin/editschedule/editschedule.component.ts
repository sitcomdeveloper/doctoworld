import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-editschedule',
  templateUrl: './editschedule.component.html',
  styleUrls: ['./editschedule.component.css']
})
export class EditscheduleComponent implements OnInit {
  ResofgetSchedules: any;
  assignfetchIDofschedule: string;
  doctorschedule: any;
  editscheduleForm: FormGroup
  Resupdatedschedule: any;
  fetchalldocts: any;
  alldrsRes: any;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editscheduleForm = this.fb.group({
      drname: [''],
      avlbledays: [''],
      starttime: [''],
      endtime: [''],
      status: [''],
    })

    this.getalldoctors()

    const fetchIDofschedule = this.route.snapshot.paramMap.get('selectedidofschedule');
    this.assignfetchIDofschedule = fetchIDofschedule;
    this.apiService.getschedulebyId(fetchIDofschedule).subscribe(getschedulesbyIdRes => {
      this.ResofgetSchedules = getschedulesbyIdRes;
      this.doctorschedule = this.ResofgetSchedules.doctorScheduleDetail;
      this.editscheduleForm.patchValue({
        drname: this.doctorschedule.doctorName,
        avlbledays: this.doctorschedule.availableDays,
        starttime: this.doctorschedule.startTime,
        endtime: this.doctorschedule.endTime,
        status: this.doctorschedule.status,
      })
      // console.log('ResofgetSchedules', this.doctorschedule);
    })
  }
  backtoallschedules() {
    this.router.navigateByUrl('adminlogin/schedule');
  }
  // update schedule
  editSchedules() {
    const updtschedule = {
      doctorName: this.editscheduleForm.value.drname,
      availableDays: this.editscheduleForm.value.avlbledays,
      startTime: this.editscheduleForm.value.starttime,
      endTime: this.editscheduleForm.value.endtime,
      status: this.editscheduleForm.value.status,
    }
    this.apiService.updateSchedule(updtschedule, this.assignfetchIDofschedule).subscribe(updtescheduleres => {
      this.Resupdatedschedule = updtescheduleres;
      if(this.Resupdatedschedule.message === 'Schedule updated successfully...') {
        setTimeout(() => {
          this.router.navigateByUrl('adminlogin/schedule');
        }, 2000);
      }
      // console.log('Resupdatedschedule', updtescheduleres);
    })
  }
   // get all doctor
   getalldoctors() {
    this.apiService.getDoctor().subscribe(getdrRes => {
      this.fetchalldocts = getdrRes;
      this.alldrsRes = this.fetchalldocts.doctorData.reverse();
      // console.log('getdrRes', this.alldrsRes);
    })
  }
}
