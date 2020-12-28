import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  parsedloginDetails: any;
  admindtlsRes: any;
  finaladminData: any;
  url: string;

  constructor(private router: Router, private apiService: ApiService) { }

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
    this.parsedloginDetails = JSON.parse(window.sessionStorage.getItem('loginDetails'));

    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/app.js");

    this.fetchAdminDetails();

    this.url = API_URL
  }
  // fetch the details of admin
  fetchAdminDetails() {
    this.apiService.getAdminProfile().subscribe(fetchAdminDtlsRes => {
      this.admindtlsRes = fetchAdminDtlsRes;
      this.finaladminData = this.admindtlsRes.adminData;
      console.log('admindtlsRes', this.finaladminData);
    })
  }
  movetoUpdateProfile() {
this.router.navigateByUrl("adminlogin/updateprofile");
// this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
//     this.loadScript("assets/theme/js/popper.min.js");
//     this.loadScript("assets/theme/js/bootstrap.min.js");
//     this.loadScript("assets/theme/js/jquery.slimscroll.js");
//     this.loadScript("assets/theme/js/select2.min.js");
//     this.loadScript("assets/theme/js/moment.min.js");
//     this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
//     this.loadScript("assets/theme/js/app.js");
  }
}
