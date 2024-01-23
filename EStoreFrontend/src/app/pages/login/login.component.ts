import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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

  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response:any) => {
        // console.log(response.user.username);
        if (response.status === 200) {
          // Redirect to the dashboard
          if(response.user.user_type === "admin"){
            this.router.navigate(['/admin-dashboard']);
          }
          else{
            this.router.navigate(['/dashboard']);
          }
          localStorage.setItem("username",response.user.username)
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
