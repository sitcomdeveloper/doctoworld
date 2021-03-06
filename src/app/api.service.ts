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
addSchedule(adschdule: any, doctorid: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/adddoctorschedule/' + doctorid, adschdule, {headers: reqHeader})
}
// get all schedule
getSchedule(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getalldoctorschedule', {headers: reqHeader})
}
// get schedule by id
getschedulebyId(schedleid: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getdoctorschedulebyid/' + schedleid, {headers: reqHeader});
}
// update schedule
updateSchedule(updtschedule: any, doctorId: any,IDofschedule: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/editdoctorschedule/' + doctorId + '/' + IDofschedule,updtschedule, {headers: reqHeader})
}
// delete schedule
dltSchedule(rmvschedule: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/deletedoctorschedule/' + rmvschedule, {}, {headers: reqHeader})
}
// add doctor
addDoctor(crtdoctr: any, departmntid: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/adddoctor/' + departmntid ,crtdoctr, {headers: reqHeader})
}
// get all doctor
getDoctor(): Observable<any> {
var reqHeader = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
})
return this.http.get<any>(API_URL + 'admin/getalldoctor', {headers: reqHeader})
}
// get doctr detila by id
getdoctorDetails(doctrID: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getdoctorbyid/' + doctrID, {headers: reqHeader});
}
// update doctor
updateDoctor(updtdr: any, departmentId: any, Idofdoctor: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/editdoctorprofile/' + departmentId + '/' + Idofdoctor, updtdr, {headers: reqHeader});
}
// delete doctor
deleteDoctor(dltdr: any): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/deletedoctor/' + dltdr, {}, {headers: reqHeader});
}
// get all patients
getPatients(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getallpatient', {headers: reqHeader});
}
// get all details(patients,doctors)
getDetails(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/dashboard', {headers: reqHeader});
}
// get all appointments
getAppointments(): Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.get<any>(API_URL + 'admin/getallappointment', {headers: reqHeader});
}
// add category
addCategory(adctegry: any) : Observable<any> {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/addmedicinecategory',adctegry, {headers: reqHeader});
}
}
