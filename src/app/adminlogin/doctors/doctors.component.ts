import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  fetchallDepartments: any;
  objectfetchallDepartments: any;

  constructor(private apiService: ApiService ) { }

  ngOnInit(): void {
    this.fetchdepartments()
  }
  fetchdepartments() {
    this.apiService.getDepartments().subscribe(ftchdepartmntsRes => {
      this.fetchallDepartments = ftchdepartmntsRes;
      this.objectfetchallDepartments = this.fetchallDepartments.departmentDeatil.reverse();
      console.log('fetchallDepartments', this.objectfetchallDepartments);
    })
  }
}
