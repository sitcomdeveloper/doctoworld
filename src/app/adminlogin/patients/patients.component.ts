import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  resofgetPatients: any;
  patientsData: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPatients()
  }
 // get all patients
 fetchPatients() {
  this.apiService.getPatients().subscribe(getpatientsRes => {
    this.resofgetPatients = getpatientsRes;
    this.patientsData = this.resofgetPatients.patientData
    // console.log('resofgetPatients', this.patientsData);
  })
    }
}
