import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-adddepartments',
  templateUrl: './adddepartments.component.html',
  styleUrls: ['./adddepartments.component.css']
})
export class AdddepartmentsComponent implements OnInit {
  getnewDepartments: any;
  departmentsForm: FormGroup;
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
    this.departmentsForm = this.fb.group({
      dname: [''],
      desc: [''],
      status: [''],
    })

    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/app.js");
  }
  // newDepartment() {
  //   this.router.navigateByUrl("adminlogin/departments")
  //   this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
  //   this.loadScript("assets/theme/js/popper.min.js");
  //   this.loadScript("assets/theme/js/bootstrap.min.js");
  //   this.loadScript("assets/theme/js/jquery.slimscroll.js");
  //   this.loadScript("assets/theme/js/Chart.bundle.js");
  //   this.loadScript("assets/theme/js/chart.js");
  //   this.loadScript("assets/theme/js/app.js");
  // }
  newDepartment() {
    const adddprtmnts = {
      name: this.departmentsForm.value.dname,
      description: this.departmentsForm.value.desc,
      status: this.departmentsForm.value.status,
    }
    this.apiService.addDepartments(adddprtmnts).subscribe(adddeprtmntsRes => {
      this.getnewDepartments = adddeprtmntsRes;
      if (this.getnewDepartments) {
        setTimeout(() => {
          this.router.navigateByUrl("adminlogin/departments")
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
      // console.log('getnewDepartments', adddeprtmntsRes);
    })
  }
  movetoDepartments() {
    this.router.navigateByUrl("adminlogin/departments");
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
  }
}
