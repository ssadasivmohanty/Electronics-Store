import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  user_type: string = '';
  phone: string = '';
  gender: string = '';
  dob: string = '';
  errorMessage: string = '';

  hideUserTypeField: boolean = true;
  constructor(private userService: UserListService, private router: Router) { 
    if (this.hideUserTypeField) {
      this.user_type = 'user';
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      user_type: this.user_type,
      phone: this.phone,
      gender: this.gender,
      dob: this.dob
    };

    this.userService.addUser(user).subscribe(
      response => {
        // Handle successful registration
        console.log(user);
        
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']);
      },
      error => {
        // Handle registration error
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    );
  }
}
