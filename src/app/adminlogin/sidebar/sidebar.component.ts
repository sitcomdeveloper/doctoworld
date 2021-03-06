import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logoutres: any;

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
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
    // this.loadScript("assets/theme/js/addappointments.js");
    // this.loadScript("assets/theme/js/app.js");
    // this.loadScript("assets/theme/js/bootstrap.min");
    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/moment.min.js");
    // this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    // this.loadScript("assets/theme/js/Chart.bundle.js");
    // this.loadScript("assets/theme/js/chart.js");
    // this.loadScript("assets/theme/js/dataTables.bootstrap4.min.js");
    // this.loadScript("assets/theme/js/jquery.dataTables.min.js");
    // this.loadScript("assets/theme/js/fullcalendar.min.js");
    // this.loadScript("assets/theme/js/jquery.fullcalendar.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/tagsinput.js");
  }
  dashboard() {
    this.router.navigateByUrl("adminlogin/dashboard");
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
  }
  departments() {
    this.router.navigateByUrl("adminlogin/departments")
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
  }
  appointments() {
    this.router.navigateByUrl("adminlogin/appointments")
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
    this.loadScript("assets/theme/js/select2.min.js");
  }
  patients() {
    this.router.navigateByUrl("adminlogin/patients");
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/jquery.dataTables.min.js");
    this.loadScript("assets/theme/js/dataTables.bootstrap4.min.js");
    this.loadScript("assets/theme/js/moment.min.js");
    this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
  schedule() {
    this.router.navigateByUrl("adminlogin/schedule");
  }
  chngepwd() {
    this.router.navigateByUrl("adminlogin/updatepassword");
  }
  doctors() {
    this.router.navigateByUrl("adminlogin/doctors");
  }
  logout() {
    const admnlgot = {}
    this.apiService.adminLogout(admnlgot).subscribe(adminlogoutRes => {
      this.logoutres = adminlogoutRes;
      console.log('logoutres', adminlogoutRes);
      setTimeout(() => {
        this.router.navigateByUrl('adminlogin');
      },
        2000);
        // window.sessionStorage.clear();
    })
window.sessionStorage.clear();
  }
  profileSection() {
    this.router.navigateByUrl("adminlogin/profile");
  }
  // update profile
  editProfile() {
    this.router.navigateByUrl("adminlogin/updateprofile");
  }
  // for showing category
  category() {
    this.router.navigateByUrl("adminlogin/category");
  }
}
