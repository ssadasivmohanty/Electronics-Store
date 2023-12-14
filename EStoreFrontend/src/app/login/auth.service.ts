// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   // Replace with your backend API URL

  constructor(private apiService: ApiService, private http: HttpClient) { }
  private apiUrl: string =this.apiService.getApiUrl() ;
  
  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    console.log(url);
    // Replace the following line with your actual login API endpoint
    return this.http.post<any>(url, { username, password });
  }
}
