import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  fetchallDepartments: any;
  objectfetchallDepartments: any;

  constructor(private router: Router, private apiService: ApiService, private fb: FormBuilder, private modalService: BsModalService,) { }
  bsModalRef: BsModalRef;

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
    // this.loadScript("assets/theme/js/addappointments.js");
    // this.loadScript("assets/theme/js/app.js");
    // this.loadScript("assets/theme/js/bootstrap.min");
    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/moment.min.js");
    // this.loadScript("assets/theme/js/bootstrap-datetimepicker.min.js");
    // this.loadScript("assets/theme/js/Chart.bundle.js");
    // this.loadScript("assets/theme/js/chart.js");
    // this.loadScript("assets/theme/js/dataTables.bootstrap4.min.js");
    // this.loadScript("assets/theme/js/jquery.dataTables.min.js");
    // this.loadScript("assets/theme/js/fullcalendar.min.js");
    // this.loadScript("assets/theme/js/jquery.fullcalendar.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/select2.min.js");
    // this.loadScript("assets/theme/js/tagsinput.js");

    // this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    // this.loadScript("assets/theme/js/popper.min.js");
    // this.loadScript("assets/theme/js/bootstrap.min.js");
    // this.loadScript("assets/theme/js/jquery.slimscroll.js");
    // this.loadScript("assets/theme/js/Chart.bundle.js");
    // this.loadScript("assets/theme/js/chart.js");
    // this.loadScript("assets/theme/js/app.js");
    this.fetchdepartments();
  }
  addDepartments() {
    this.router.navigateByUrl("adminlogin/adddepartments")
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
  editdepartments(selectedid: any) {
    console.log(selectedid);
    this.router.navigate(['/adminlogin/editdepartments', selectedid]);
    this.loadScript("assets/theme/js/jquery-3.2.1.min.js");
    this.loadScript("assets/theme/js/popper.min.js");
    this.loadScript("assets/theme/js/bootstrap.min.js");
    this.loadScript("assets/theme/js/jquery.slimscroll.js");
    this.loadScript("assets/theme/js/select2.min.js");
    this.loadScript("assets/theme/js/app.js");
  }
  // get all departments
  fetchdepartments() {
    this.apiService.getDepartments().subscribe(ftchdepartmntsRes => {
      this.fetchallDepartments = ftchdepartmntsRes;
      this.objectfetchallDepartments = this.fetchallDepartments.departmentDeatil.reverse();
      console.log('fetchallDepartments', this.objectfetchallDepartments);
    })
  }
  // delete department popup
  deleteDepartment(userid) {
    const initialState = {
      title: 'Delete Department',
      id: userid,
      department: 'department'
    };
    // tslint:disable-next-line: max-line-length
    this.bsModalRef = this.modalService.show(DeleteComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal930', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    this.bsModalRef.content.clddata.subscribe(() => {
      this.fetchdepartments();
    });
  }
}
