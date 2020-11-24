import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin.component';
import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HeaderComponent } from './header/header.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AddappointmentsComponent } from './addappointments/addappointments.component';


@NgModule({
  declarations: [AdminloginComponent, DashboardComponent, SidebarComponent, DepartmentsComponent, HeaderComponent, AppointmentsComponent, AddappointmentsComponent],
  imports: [
    CommonModule, AdminloginRoutingModule, FormsModule, ReactiveFormsModule, ModalModule.forRoot(),
  ]
})
export class AdminloginModule { }
