import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddappointmentsComponent } from './addappointments/addappointments.component';
import { AdddepartmentsComponent } from './adddepartments/adddepartments.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { AdminloginComponent } from './adminlogin.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PatientsComponent } from './patients/patients.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: AdminloginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'adddepartments', component: AdddepartmentsComponent},
  // {path: 'editdepartments', component: EditdepartmentComponent},
  {path: 'editdepartments/:selectedid', component: EditdepartmentComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'addappointments', component: AddappointmentsComponent},
  {path: 'profile', component: MyprofileComponent},
  {path: 'updateprofile', component: EditprofileComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'add-schedule', component: AddscheduleComponent},
  {path: 'updatepassword', component: ChangepasswordComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }