import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalnumberofDoctors: any;
  resofgetPatients: any;
  patientsData: any;
  Resofdashboarddtls: any;
  fetchalldocts: any;
  alldrsRes: any;
  resofapoointment: any;
  allAppointments: any;

  constructor(private router: Router, private apiService: ApiService) { }

  // loadScript(url: string) {
  //   const body = <HTMLDivElement>document.body;
  //   const script = document.createElement("script");
  //   script.innerHTML = "";
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }
  ngOnInit(): void {
    if(window.sessionStorage.getItem('tokenn') == null) {
      alert('Session Expired');
      this.router.navigateByUrl('adminlogin');
    }
    this.fetchPatients();
    this.getdashboarddetails();
    this.getalldoctors();
    this.fetchAppointment();
    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/Chart.bundle.js");
    // this.loadScript("assets/theme/js/chart.js");
    // this.loadScript("assets/theme/js/app.js");

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
  allappointments() {
    this.router.navigateByUrl('adminlogin/appointments');
  }
  // get all patients
  fetchPatients() {
this.apiService.getPatients().subscribe(getpatientsRes => {
  this.resofgetPatients = getpatientsRes;
  this.patientsData = this.resofgetPatients.patientData
  // console.log('resofgetPatients', this.patientsData);
})
  }
  // move to all patients
  movetoallPatients() {
    this.router.navigateByUrl("adminlogin/patients");
  }
  // dashboard details
  getdashboarddetails() {
    this.apiService.getDetails().subscribe(dashbrddtlsRes => {
      this.Resofdashboarddtls = dashbrddtlsRes;
      // console.log('Resofdashboarddtls', dashbrddtlsRes);
    })
  }
  movetoallDoctors() {
    this.router.navigateByUrl("adminlogin/doctors");
  }
  // get all doctors
  getalldoctors() {
    this.apiService.getDoctor().subscribe(getdrRes => {
      this.fetchalldocts = getdrRes;
      this.alldrsRes = this.fetchalldocts.doctorData.reverse();
      // console.log('getdrRes', this.alldrsRes);
    })
  }
   // get all apointment
   fetchAppointment() {
    this.apiService.getAppointments().subscribe(appointmentsRes => {
      this.resofapoointment = appointmentsRes;
     this.allAppointments = this.resofapoointment.appointmentData
      // console.log('resofapoointment', this.allAppointments);
    })
  }
}
