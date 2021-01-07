import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DeletedoctorComponent } from '../deletedoctor/deletedoctor.component';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  fetchalldocts: any;
  alldrsRes: any;

  constructor(private apiService: ApiService, private router: Router, private modalService: BsModalService) { }
  bsModalRef: BsModalRef;

  ngOnInit(): void {
    this.getalldoctors()
  }
getalldoctors() {
  this.apiService.getDoctor().subscribe(getdrRes => {
    this.fetchalldocts = getdrRes;
    this.alldrsRes = this.fetchalldocts.doctorData.reverse();
    // console.log('getdrRes', this.alldrsRes);
  })
}
  adddoctor() {
    this.router.navigateByUrl("adminlogin/adddoctor");
  }
  editdoctor(doctorselectedid: any) {
    this.router.navigate(['/adminlogin/editdoctor', doctorselectedid]);
  }
  // delete doctor popup
  opendletepopup(doctorselectedid: any) {
    const initialState = {
      title: 'Delete Doctor',
      doctorid: doctorselectedid,
    };
    // tslint:disable-next-line: max-line-length
    this.bsModalRef = this.modalService.show(DeletedoctorComponent, Object.assign({ backdrop: 'static', show: true }, { class: 'modal930', initialState }));
    this.bsModalRef.content.closeBtnName = 'Cancel';
    this.bsModalRef.content.clddata.subscribe(() => {
      this.getalldoctors();
    });
  }
  }
