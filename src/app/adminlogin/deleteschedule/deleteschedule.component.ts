import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-deleteschedule',
  templateUrl: './deleteschedule.component.html',
  styleUrls: ['./deleteschedule.component.css']
})
export class DeletescheduleComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  resofdltSchedule: any;
  scheduleid: any;
  title: any
  constructor(private bsmodal: BsModalRef, private apiService: ApiService) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsmodal.hide();
  }
  removeSchedule() {
    this.apiService.dltSchedule(this.scheduleid).subscribe(dltScheduleRes => {
      this.resofdltSchedule = dltScheduleRes;
      this.clddata.emit(dltScheduleRes);
      if(this.resofdltSchedule) {
        setTimeout(() => {
          this.hideModal();
        }, 2000);
      }
      console.log('resofdltSchedule', dltScheduleRes);
    })
  }
}
