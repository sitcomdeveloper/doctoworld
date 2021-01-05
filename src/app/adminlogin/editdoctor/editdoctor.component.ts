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
    })

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
      })
      console.log('resofdrdtls', this.slecteddrDetails);
    })
  }
  backtodoctor() {
    this.router.navigateByUrl("adminlogin/doctors");
  }
}
