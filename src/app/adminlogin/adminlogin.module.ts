import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin.component';
import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminloginComponent],
  imports: [
    CommonModule, AdminloginRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AdminloginModule { }
