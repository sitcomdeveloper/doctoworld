import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
adminLoginForm: FormGroup
  loginuserMessage: any;
  getLoginDetails: any;
  loginToken: any;
  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) { }

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
    this.adminLoginForm = this.fb.group({
      doctorid: [''],
      passwrd: ['']
    })

    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");

    // this.loadScript("assets/theme/js/moment.min.js");
    // this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");

    // this.loadScript("assets/theme/js/dataTables.bootstrap4.min.js");
    // this.loadScript("assets/theme/js/jquery.dataTables.min.js");
    // this.loadScript("assets/theme/js/fullcalendar.min.js");
    // this.loadScript("assets/theme/js/jquery.fullcalendar.js");


    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/tagsinput.js");
    // this.loadScript("assets/theme/js/addappointments.js");


  }
  movetodashboard() {
    // this.router.navigateByUrl('adminlogin/dashboard');
    const adminlgn = {
      doctorId: this.adminLoginForm.value.doctorid,
      password: this.adminLoginForm.value.passwrd,
    }
    this.apiService.adminLogin(adminlgn).subscribe(loginRes => {
      this.loginuserMessage = loginRes;
      this.getLoginDetails = this.loginuserMessage.adminData;
      this.loginToken = this.loginuserMessage.token;
      window.sessionStorage.setItem('loginDetails', JSON.stringify(this.getLoginDetails));
      window.sessionStorage.setItem('tokenn', JSON.stringify(this.loginToken));
      console.log('loginuserMessage', loginRes);
      console.log('RealToken', JSON.stringify(this.loginToken));
      if(this.getLoginDetails) {
        setTimeout(() => {
          this.router.navigateByUrl('adminlogin/dashboard');
        },
          2000);
      }
    },
    err => {
      if(err.status === 500 || err.status === 400 || err.status === 401 || err.status === 403)
      alert('Invalid Credentials');
      this.router.navigateByUrl('adminlogin');
      console.log('error', err);
     // check error status code is 500, if so, do some action
    }
    )
  }
}
// setTimeout(() => {
//   this.bsmodal.hide();
// },
//   1000);
