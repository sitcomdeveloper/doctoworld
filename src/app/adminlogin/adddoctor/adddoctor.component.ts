import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  addDoctorForm: FormGroup;
  resofnewDR: any;
  fetchalldocts: any;
  fetchallDepartments: any;
  objectfetchallDepartments: any;
  selecteddepartmntID: any;
  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addDoctorForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      // pwd: [''],
      // cnfpwd: [''],
      gender: [''],
      add: [''],
      country: [''],
      city: [''],
      state: [''],
      postalcode: [''],
      phone: [''],
      status: [''],
      department: [''],
      departmentid: ['']
    })
    this.fetchdepartments();
  }
// add new doctor
addnewDR() {
  this.objectfetchallDepartments.forEach(element => {
    if ( element._id === this.addDoctorForm.value.department) {
      this.addDoctorForm.value.doctorid = element.departmentid;
      this.selecteddepartmntID = element._id;
      console.log('doctorid', element._id);
    }
  });
  const crtdoctr = {
    firstName: this.addDoctorForm.value.firstname,
    lastName: this.addDoctorForm.value.lastname,
    email: this.addDoctorForm.value.email,
    // password: this.addDoctorForm.value.pwd,
    // confirmPassword: this.addDoctorForm.value.cnfpwd,
    mobile: this.addDoctorForm.value.phone,
    gender: this.addDoctorForm.value.gender,
    address: this.addDoctorForm.value.add,
    city: this.addDoctorForm.value.city,
    state: this.addDoctorForm.value.state,
    country: this.addDoctorForm.value.country,
    postalcode: this.addDoctorForm.value.postalcode,
    status: this.addDoctorForm.value.status,
    // department: this.addDoctorForm.value.department,
  }
  this.apiService.addDoctor(crtdoctr, this.selecteddepartmntID).subscribe(adddrres => {
    this.resofnewDR = adddrres;
    if(this.resofnewDR.message) {
      setTimeout(() => {
        this.router.navigateByUrl("adminlogin/doctors");
      }, 2000);
      this.getalldoctors();
    }
    // console.log('resofnewDR', adddrres);
  })
}
// cancel button
backtodoctor() {
  this.router.navigateByUrl("adminlogin/doctors");
}
// get all doctor
getalldoctors() {
  this.apiService.getDoctor().subscribe(getdrRes => {
    this.fetchalldocts = getdrRes;
  })
}
// get department
fetchdepartments() {
  this.apiService.getDepartments().subscribe(ftchdepartmntsRes => {
    this.fetchallDepartments = ftchdepartmntsRes;
    this.objectfetchallDepartments = this.fetchallDepartments.departmentDeatil.reverse();
    console.log('department', this.objectfetchallDepartments);
  })
}
}
