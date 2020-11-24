import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddappointmentsComponent } from './addappointments/addappointments.component';
import { AdminloginComponent } from './adminlogin.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {path: '', component: AdminloginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'departments', component: DepartmentsComponent},
  {path: 'appointments', component: AppointmentsComponent},
  {path: 'addappointments', component: AddappointmentsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }
