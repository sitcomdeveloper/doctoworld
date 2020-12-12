import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  adminLogin(adminlgn: any): Observable<any> {
    return this.http.post<any>(API_URL + 'admin/adminlogin', adminlgn);
  }
}
