import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  parsedloginDetails: any;
  getAdminProfileRes: any;
  adminEditDetailsForm: FormGroup;
  admindtlsRes: any;
  finaladminData: any;
  resuploadImage: any;

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
    this.parsedloginDetails = JSON.parse(window.sessionStorage.getItem('loginDetails'));
    this.adminEditDetailsForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      dob: [''],
      gende: [''],
      address: [''],
      state: [''],
      country: [''],
      pincode: [''],
      phonenumber: [''],
      email: [''],
      img: ['']
    })
    this.fetchAdminDetails();
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/moment.min.js");
    this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
  // fetch the details of admin
  fetchAdminDetails() {
    this.apiService.getAdminProfile().subscribe(fetchAdminDtlsRes => {
      this.admindtlsRes = fetchAdminDtlsRes;
      this.finaladminData = this.admindtlsRes.adminData;
      this.adminEditDetailsForm.patchValue({
        firstname: this.finaladminData.firstName,
      lastname: this.finaladminData.lastName,
      dob: this.finaladminData.birthday,
      gende: this.finaladminData.gender,
      address: this.finaladminData.address,
      state: this.finaladminData.state,
      country: this.finaladminData.country,
      pincode: this.finaladminData.pincode,
      phonenumber: this.finaladminData.mobile,
      email: this.finaladminData.email
      })
      console.log('admindtlsRes', this.finaladminData);
    })
  }
  savetheDetails() {
    const admnprofle = {
      firstName: this.adminEditDetailsForm.value.firstname,
      lastName: this.adminEditDetailsForm.value.lastname,
      mobile: this.adminEditDetailsForm.value.phonenumber,
      birthday: this.adminEditDetailsForm.value.dob,
      email: this.adminEditDetailsForm.value.email,
      address: this.adminEditDetailsForm.value.address,
      state: this.adminEditDetailsForm.value.state,
      country: this.adminEditDetailsForm.value.country,
      pincode: this.adminEditDetailsForm.value.pincode,
      gender: this.adminEditDetailsForm.value.gende,
    }
    this.apiService.editAdminProfile(admnprofle).subscribe(edtAdminProfileRes => {
      this.getAdminProfileRes = edtAdminProfileRes;
      console.log('getAdminProfileRes', edtAdminProfileRes);
      this.fetchAdminDetails();
      if(this.getAdminProfileRes) {
        setTimeout(() => {
          this.router.navigateByUrl('adminlogin/profile');
          this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
      this.loadScript("assets/theme/js/popper.min.js");
      this.loadScript("assets/theme/js/bootstrap.min.js");
      this.loadScript("assets/theme/js/jquery.slimscroll.js");
      this.loadScript("assets/theme/js/Chart.bundle.js");
      this.loadScript("assets/theme/js/chart.js");
      this.loadScript("assets/theme/js/app.js");
        },
          2000);
      }
      })
    }
    // upload image
    uploadtheImage() {
      const upldimg = {
        profile: this.adminEditDetailsForm.value.img
      }
      this.apiService.uploadImage(upldimg).subscribe(upldimgRes => {
        this.resuploadImage = upldimgRes;
        console.log('resuploadImage',upldimgRes);
      })
    }
    backtoprofile() {
      this.router.navigateByUrl('adminlogin/profile');
    }
  }
// this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/Chart.bundle.js");
    // this.loadScript("assets/theme/js/chart.js");
    // this.loadScript("assets/theme/js/app.js");
