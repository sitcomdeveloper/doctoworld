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
import { AdddepartmentsComponent } from './adddepartments/adddepartments.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SettingsComponent } from './settings/settings.component';
import { PatientsComponent } from './patients/patients.component';


@NgModule({
  declarations: [AdminloginComponent, DashboardComponent, SidebarComponent, DepartmentsComponent, HeaderComponent, AppointmentsComponent, AddappointmentsComponent, AdddepartmentsComponent, EditdepartmentComponent, MyprofileComponent, EditprofileComponent, SettingsComponent, PatientsComponent],
  imports: [
    CommonModule, AdminloginRoutingModule, FormsModule, ReactiveFormsModule, ModalModule.forRoot(),
  ]
})
export class AdminloginModule { }
