import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-deletedoctor',
  templateUrl: './deletedoctor.component.html',
  styleUrls: ['./deletedoctor.component.css']
})
export class DeletedoctorComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  title: any;
  resofDltDr: any;
  doctorid: any;
  constructor(private apiService: ApiService, private bsmodal: BsModalRef) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsmodal.hide();
  }
  // delete doctor
  dltDoctor() {
    this.apiService.deleteDoctor(this.doctorid).subscribe(dltdrRes => {
      this.resofDltDr = dltdrRes;
      this.clddata.emit(dltdrRes);
      if(this.resofDltDr) {
        setTimeout(() => {
          this.hideModal();
        }, 2000);
      }
      // console.log('resofDltDr', dltdrRes);
    })
  }
}
