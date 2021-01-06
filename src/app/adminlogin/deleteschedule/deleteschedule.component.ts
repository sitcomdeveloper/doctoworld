import { Component, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-deleteschedule',
  templateUrl: './deleteschedule.component.html',
  styleUrls: ['./deleteschedule.component.css']
})
export class DeletescheduleComponent implements OnInit {
  @Input() prtdata: any;
  @Output() clddata: EventEmitter<any> = new EventEmitter();
  constructor(private bsmodal: BsModalRef) { }

  ngOnInit(): void {
  }
  hideModal() {
    this.bsmodal.hide();
      }
}
