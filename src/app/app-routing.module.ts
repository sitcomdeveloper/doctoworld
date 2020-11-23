import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: '', redirectTo: 'adminlogin', pathMatch: 'full'},
{path: 'adminlogin', loadChildren:()=>import('./adminlogin/adminlogin.module').then(m=>m.AdminloginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
