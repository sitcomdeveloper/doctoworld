import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  department: string;
  deleteDepartment: boolean;
  title: any;
  getdltdprtRes: any;
  id: number;
  constructor(private bsmodal: BsModalRef, private apiService: ApiService) { }

  ngOnInit(): void {
    // if (this.department === 'department') {
    //   this.deleteDepartment = true;
    // } else {
    //   this.deleteDepartment = false;
    // }
  }
  hideModal() {
    this.bsmodal.hide();
      }
// dlt department
dltDepartment() {
this.apiService.deleteDepartments(this.id).subscribe(dltdepartmentRes => {
  this.getdltdprtRes = dltdepartmentRes;
  this.clddata.emit(dltdepartmentRes);
  if(this.getdltdprtRes) {
    setTimeout(() => {
      this.hideModal();
    }, 2000);
  }
  console.log('getdltdprtRes', dltdepartmentRes);
})
}
}
