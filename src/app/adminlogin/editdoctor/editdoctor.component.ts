import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {
  editdoctorForm: FormGroup
  resofdrdtls: any;
  assignfetchIDofdoctor: any;
  slecteddrDetails: any;
  updateddoctorres: any;
  objectfetchallDepartments: any;
  fetchallDepartments: any;
  selecteddepartmntID: any;

  constructor(private router: Router, private apiService: ApiService, private fb:FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editdoctorForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      gender: [''],
      add: [''],
      coutry: [''],
      cty: [''],
      state: [''],
      postalcode: [''],
      phone: [''],
      status: [''],
      department: [''],
      departmentid: ['']
    })

    this.fetchdepartments();

    // patch detail of doctor by id
    const doctorfetchID = this.route.snapshot.paramMap.get('doctorselectedid');
    this.assignfetchIDofdoctor = doctorfetchID;
    this.apiService.getdoctorDetails(doctorfetchID).subscribe(drdetilsRes => {
      this.resofdrdtls = drdetilsRes;
      this.slecteddrDetails = this.resofdrdtls.doctorDetail;
      this.editdoctorForm.patchValue({
        firstname: this.slecteddrDetails.firstName,
      lastname: this.slecteddrDetails.lastName,
      email: this.slecteddrDetails.email,
      gender: this.slecteddrDetails.gender,
      add: this.slecteddrDetails.address,
      coutry: this.slecteddrDetails.country,
      cty: this.slecteddrDetails.city,
      state: this.slecteddrDetails.state,
      postalcode: this.slecteddrDetails.postalcode,
      phone: this.slecteddrDetails.mobile,
      status: this.slecteddrDetails.status,
      department: this.slecteddrDetails.department,
      })
      console.log('resofdrdtls', this.slecteddrDetails);
    })
  }
  backtodoctor() {
    this.router.navigateByUrl("adminlogin/doctors");
  }
  // update doctor
  updatedoctors() {
    this.objectfetchallDepartments.forEach(element => {
      if ( element._id === this.editdoctorForm.value.department) {
        this.editdoctorForm.value.doctorid = element.departmentid;
        this.selecteddepartmntID = element._id;
        console.log('doctorid', element._id);
      }
    });
    const updtdr = {
      firstName: this.editdoctorForm.value.firstname,
      lastName: this.editdoctorForm.value.lastname,
      email: this.editdoctorForm.value.email,
      gender: this.editdoctorForm.value.gender,
      address: this.editdoctorForm.value.add,
      country: this.editdoctorForm.value.coutry,
      city: this.editdoctorForm.value.cty,
      state: this.editdoctorForm.value.state,
      postalcode: this.editdoctorForm.value.postalcode,
      mobile: this.editdoctorForm.value.phone,
      status: this.editdoctorForm.value.status,
      // department: this.editdoctorForm.value.department,
    }
    this.apiService.updateDoctor(updtdr, this.selecteddepartmntID, this.assignfetchIDofdoctor).subscribe(updtdrRes => {
      this.updateddoctorres = updtdrRes;
      if(this.updateddoctorres.message === 'Doctor details updated successfully...') {
        setTimeout(() => {
          this.router.navigateByUrl("adminlogin/doctors");
        }, 2000);
      }
      console.log('updateddoctorres', updtdrRes);
    })
  }
  // get all departments
  fetchdepartments() {
    this.apiService.getDepartments().subscribe(ftchdepartmntsRes => {
      this.fetchallDepartments = ftchdepartmntsRes;
      this.objectfetchallDepartments = this.fetchallDepartments.departmentDeatil.reverse();
    })
  }
}
