import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private apiService: ApiService, private http: HttpClient) {
  }

  // Get all users
  public getUsers(): Observable<any[]> {
    const url = `${this.apiService.getApiUrl()}/api/users`;
    return this.http.get<any[]>(url);
  }

  // Get user by ID
  public getUserById(userId: number): Observable<any> {
    const url = `${this.apiService.getApiUrl()}/api/users/${userId}`;
    return this.http.get<any>(url);
  }

  // Add a new user
  public addUser(user: any): Observable<any> {
    const url = `${this.apiService.getApiUrl()}/api/users`;
    return this.http.post<any>(url, user);
  }

  // Update user
  public updateUser(userId: number, updatedUser: any): Observable<any> {
    const url = `${this.apiService.getApiUrl()}/api/users/${userId}`;
    return this.http.put<any>(url, updatedUser);
  }

  // Delete user by ID
  public deleteUser(userId: number): Observable<any> {
    const url = `${this.apiService.getApiUrl()}/api/users/${userId}`;
    return this.http.delete<any>(url);
  }
}
