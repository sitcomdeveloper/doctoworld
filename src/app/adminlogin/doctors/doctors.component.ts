import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  fetchalldocts: any;
  alldrsRes: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getalldoctors()
  }
getalldoctors() {
  this.apiService.getDoctor().subscribe(getdrRes => {
    this.fetchalldocts = getdrRes;
    this.alldrsRes = this.fetchalldocts.doctorData.reverse();
    console.log('getdrRes', this.alldrsRes);
  })
}
  adddoctor() {
    this.router.navigateByUrl("adminlogin/adddoctor");
  }
  editdoctor(doctorselectedid: any) {
    this.router.navigate(['/adminlogin/editdoctor', doctorselectedid]);
  }
}
