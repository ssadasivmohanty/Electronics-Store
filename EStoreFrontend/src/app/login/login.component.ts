import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  // showPassword: boolean = false;

  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  // togglePasswordVisibility() {
  //   this.showPassword = !this.showPassword;
  // }
  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Check the response from the server, e.g., if authentication is successful
        if (response.success) {
          // Redirect to the dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Something went wrong. Please try again later.';
      }
    );
  }

}
