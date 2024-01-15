// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   // Replace with your backend API URL
  private apiUrl: string =this.apiService.getApiUrl() ;
  private baseUrl =`${this.apiUrl}/api/auth`;
  constructor(private apiService: ApiService, private http: HttpClient, private router: Router) { }
  
  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    
    // Sending the HTTP request
    const loginObservable = this.http.post<any>(url, { username, password });
  
    // Subscribing to the Observable to perform actions after the login request
    loginObservable.subscribe(
      (response) => {
        // On successful login, store the username in local storage
        localStorage.setItem("userName", username);
      },
      (error) => {
        // Handle error if necessary
        console.error("Login failed:", error);
      }
    );
  
    // Return the original Observable
    return loginObservable;
  }
}
