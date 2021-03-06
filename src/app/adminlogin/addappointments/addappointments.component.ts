import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappointments',
  templateUrl: './addappointments.component.html',
  styleUrls: ['./addappointments.component.css']
})
export class AddappointmentsComponent implements OnInit {

  constructor(private router: Router) { }
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

    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/moment.min.js");
    // this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    // this.loadScript("assets/theme/js/app.js");

      // this.loadScript("assets/theme/js/addappointments.js");
    // this.loadScript("assets/theme/js/Chart.bundle.js");
    // this.loadScript("assets/theme/js/chart.js");
    // this.loadScript("assets/theme/js/dataTables.bootstrap4.min.js");
    // this.loadScript("assets/theme/js/jquery.dataTables.min.js");
    // this.loadScript("assets/theme/js/fullcalendar.min.js");
    // this.loadScript("assets/theme/js/jquery.fullcalendar.js");
    // this.loadScript("assets/theme/js/tagsinput.js");
  }
  movetoAppointmentpg() {
    this.router.navigateByUrl("adminlogin/appointments");
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/moment.min.js");
    this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
}
