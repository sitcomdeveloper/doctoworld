import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import * as $ from 'jquery'

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
  uploadedFile: File;

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
    file_name_show(event) {
      let fileList: FileList = event.target.files;
      if (fileList.length > 0) {
        this.uploadedFile = fileList[0];
        let fileSize: number = fileList[0].size;
      }
        var file = $('#file-upload')[0].files[0].name;
        var size = $('#file-upload')[0].files[0].size;
        var size = size / 1024
        $("#files_name").html('<hr><i class="fa fa-file" aria-hidden="true"></i>  ' + file + "    size : " + size.toFixed(2) + " KB" + '           <a href="javascript:void(0)"><i class="fa fa-times" aria-hidden="true" onclick="file_name_remove()"></i></a><hr>');
      }
    // upload image
    uploadtheImage() {
      const formData: FormData = new FormData();
    formData.append("profile", this.uploadedFile);
      // const upldimg = {
      //   profile: this.adminEditDetailsForm.value.img
      // }
      this.apiService.uploadImage(formData).subscribe(upldimgRes => {
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
