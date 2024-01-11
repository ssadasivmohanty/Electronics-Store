import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'http://localhost:8005'; 

  constructor(private http: HttpClient) { 
    
  }
  
  // public getApiUrl(): string {
  //   return this.apiUrl;
  // }

  public getApiUrl(){
    return this.apiUrl;
  }

  // public getUsers(): Observable<any[]> {
  //   const url = `${this.apiUrl}/api/users`; // Replace 'users' with your actual endpoint
  //   return this.http.get<any[]>(url);
  // }

}
