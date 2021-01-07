import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css']
})
export class CategoryaddComponent implements OnInit {
  categoryAddForm: FormGroup
  resofnewCategory: any;
  constructor(private fb: FormBuilder, private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.categoryAddForm = this.fb.group({
      cname: [''],
      medicinecategory: [''],
      status: [''],
      image: ['']
    })
  }
// move to all category
movetoCategory() {
  this.router.navigateByUrl("adminlogin/categoryadd");
}
// new categry
newCategory() {
  const adctegry = {
    name: this.categoryAddForm.value.cname,
    medicineCategory: this.categoryAddForm.value.medicinecategory,
    status: this.categoryAddForm.value.status
  }
  this.apiservice.addCategory(adctegry).subscribe(newctegryRes => {
    this.resofnewCategory = newctegryRes;
    console.log('resofnewCategory', newctegryRes);
  })
}
}
