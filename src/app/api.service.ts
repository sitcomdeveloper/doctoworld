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
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem('tokenn'))
  })
  return this.http.post<any>(API_URL + 'admin/adminprofileimage', upldimg, {headers: reqHeader});
}
}
