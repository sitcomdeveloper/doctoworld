import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // login
  adminLogin(adminlgn: any): Observable<any> {
    return this.http.post<any>(API_URL + 'admin/adminlogin', adminlgn);
  }
  // logout
  adminLogout(admnlgot: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
     });
    return this.http.post<any>(API_URL + 'admin/adminlogout',admnlgot, {headers: reqHeader});
  }
  // edit admin profile
  editAdminProfile(admnprofle: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
    })
  return this.http.post<any>(API_URL + 'admin/editadminprofile', admnprofle, {headers: reqHeader});
}
// get admin profile
getAdminProfile(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getadminprofile', {headers: reqHeader});
}
// upload image
uploadImage(upldimg: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/adminprofileimage', upldimg, {headers: reqHeader});
}
// get all departments
getDepartments(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getalldepartment', {headers: reqHeader});
}
// add departments
addDepartments(adddprtmnts: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/adddepartment', adddprtmnts, {headers: reqHeader});
}
// getdepartment by id
getDepartmentbyId(departmntID: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getdepartmentbyid/' + departmntID, {headers: reqHeader})
}
// edit(update) departments
editDepartments(edtdprtmnts: any, IDofdepartment: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/editdepartment/' + IDofdepartment, edtdprtmnts, {headers: reqHeader})

}
// delete departments
deleteDepartments(dltdprt: any): Observable<any>  {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/deletedepartment/' + dltdprt, {},{headers: reqHeader})
}
// update password
updatePassword(updtpwd: any): Observable<any> {
  var reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
      })
  return this.http.post<any>(API_URL + 'admin/changeadminpassword', updtpwd, {headers: reqHeader});
}
// add schedule
addSchedule(adschdule: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/adddoctorschedule', adschdule, {headers: reqHeader})
}
// get all schedule
getSchedule(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getalldoctorschedule', {headers: reqHeader})
}
}
