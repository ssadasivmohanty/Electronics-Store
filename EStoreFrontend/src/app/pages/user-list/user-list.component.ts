import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  user:User | undefined;
  constructor(private userListService : UserListService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  updateUserType(userId:number,userType:string ): void {
    const updatedUser = { user_type: userType === 'admin' ? 'user' : 'admin' };
    console.log(this.getUserById(userId),"-----------------------");
    this.getUserById(userId);
    console.log(this.user);
    this.userListService.updateUser(userId, updatedUser)
      .subscribe(
        (response) => {
          console.log("User updated successfully:", response);
        },
        (error) => {
          console.error("Error updating user:", error);
        }
      );
  }

  getUsers(){
    this.userListService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  getUserById(id:number){
    this.userListService.getUserById(id).subscribe(
      (user: User) => {
        this.user = user;
        console.log("Got user:", user);
      },
      (error) => {
        console.error("Error fetching user:", error);
      }
    );
    // console.log("Got user",id);
  }

  deleteUser(id:number){
    this.userListService.deleteUser(id).subscribe(
      ()=>{
        this.users = this.users.filter(user => user.id !== id);
      }
      );
  }

}
