import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  updatedPwd: any;
  updatePasswordForm: FormGroup
  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.updatePasswordForm = this.fb.group({
      oldpwd: [''],
      newpwd: [''],
      cnfrmpwd: [''],
    })
  }
  chngepassword() {
    const updtpwd = {
      oldPassword: this.updatePasswordForm.value.oldpwd,
      newPassword: this.updatePasswordForm.value.newpwd,
      confirmPassword: this.updatePasswordForm.value.cnfrmpwd,
    }
    this.apiService.updatePassword(updtpwd).subscribe(updtpwdres => {
      this.updatedPwd = updtpwdres;
      if(this.updatedPwd?.message == 'Password updated successfully...') {
        setTimeout(() => {
          this.router.navigateByUrl("adminlogin/dashboard");
        }, 2000);
      }
      console.log('updatedPwd', updtpwdres);
    })
  }
}
