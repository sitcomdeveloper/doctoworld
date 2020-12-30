import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  parsedloginDetails: any;
  logoutres: any;
  admindtlsRes: any;
  finaladminData: any;

  constructor(private router: Router, private apiService: ApiService) {
    $(document).ready(function() {
      this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    });
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
    this.recalljs();
    this.parsedloginDetails = JSON.parse(window.sessionStorage.getItem('loginDetails'));
    console.log('Login User', this.parsedloginDetails);



    // this.loadScript("assets/theme/js/addappointments.js");
    // this.loadScript("assets/theme/js/moment.min.js");
    // this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    // this.loadScript("assets/theme/js/dataTables.bootstrap4.min.js");
    // this.loadScript("assets/theme/js/jquery.dataTables.min.js");
    // this.loadScript("assets/theme/js/fullcalendar.min.js");
    // this.loadScript("assets/theme/js/jquery.fullcalendar.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/tagsinput.js");
    this.fetchAdminDetails();
  }
  recalljs() {
    $(document).ready(function() {
      this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
    alert("hi");
    });
  }
  fetchAdminDetails() {
    this.apiService.getAdminProfile().subscribe(fetchAdminDtlsRes => {
      this.admindtlsRes = fetchAdminDtlsRes;
      this.finaladminData = this.admindtlsRes.adminData;
      console.log('admindtlsRes', this.finaladminData);
    })
  }
  logout() {
    const admnlgot = {}
    this.apiService.adminLogout(admnlgot).subscribe(adminlogoutRes => {
      this.logoutres = adminlogoutRes;
      console.log('logoutres', adminlogoutRes);
      setTimeout(() => {
        this.router.navigateByUrl('adminlogin');
      },
        100);
        // window.sessionStorage.clear();
    })
window.sessionStorage.clear();
  }
  homePage() {
    this.router.navigateByUrl("adminlogin/dashboard");
  }
  // profile
  profileSection() {
    this.router.navigateByUrl("adminlogin/profile");
    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/app.js");
  }
  // update profile
  editProfile() {
    this.router.navigateByUrl("adminlogin/updateprofile");
    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/moment.min.js");
    // this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    // this.loadScript("assets/theme/js/app.js");
  }
  // click on logo
  movetoDashboard() {
    this.router.navigateByUrl("adminlogin/dashboard")
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/moment.min.js");
    this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
  // settings
  settings() {
    this.router.navigateByUrl("adminlogin/settings");
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
}
