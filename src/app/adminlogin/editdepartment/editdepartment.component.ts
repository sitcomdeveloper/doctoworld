import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css']
})
export class EditdepartmentComponent implements OnInit {
  fetchdepartment: any;
  editdepartmentForm: FormGroup
  departdetailonthebasisofID: any;
  assignfetchID: string;
  geteditdepartmentRes: any;
  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute, private fb:FormBuilder) { }

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
    this.editdepartmentForm = this.fb.group({
      deprtname: [''],
      desc: [''],
      status: [''],
    })
    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/app.js");

    // get department by id
    const fetchID = this.route.snapshot.paramMap.get('selectedid');
    this.assignfetchID = fetchID;
    this.apiService.getDepartmentbyId(fetchID).subscribe(getdepartmentRes => {
      this.fetchdepartment = getdepartmentRes;
      this.departdetailonthebasisofID = this.fetchdepartment.departmentDeatil
      this.editdepartmentForm.patchValue({
        deprtname:  this.departdetailonthebasisofID.name,
        desc:  this.departdetailonthebasisofID.description,
        status:  this.departdetailonthebasisofID.status,
      })
      // console.log('fetchdepartment', getdepartmentRes);
    })
  }
  // update departments
  updatedepartments() {
    const edtdprtmnts = {
      name: this.editdepartmentForm.value.deprtname,
      description: this.editdepartmentForm.value.desc,
      status: this.editdepartmentForm.value.status,
    }
    this.apiService.editDepartments(edtdprtmnts,this.assignfetchID).subscribe(edtdepatmntRes => {
      this.geteditdepartmentRes = edtdepatmntRes;
      if(this.geteditdepartmentRes) {
        setTimeout(() => {
          this.router.navigateByUrl("adminlogin/departments");
        }, 2000);
      }
      // console.log('geteditdepartmentRes', edtdepatmntRes);
    })
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/Chart.bundle.js");
    this.loadScript("assets/theme/js/chart.js");
    this.loadScript("assets/theme/js/app.js");
  }
  // cancel
  backtoalldepartments() {
    this.router.navigateByUrl('adminlogin/departments');
  }
}
