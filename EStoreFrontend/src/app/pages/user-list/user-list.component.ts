import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
<<<<<<< HEAD
  
  constructor(private userListService : UserListService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  updateUserType(userId:number,userType:string): void {
    console.log(userId,userType,"---------------------------");
    const updatedUser = { user_type: userType === 'admin' ? 'user' : 'admin' };

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
=======
  constructor(private userListService : UserListService) { }

  ngOnInit(): void {
>>>>>>> d9a04d725b58acda10f30c488b5e4f93d313608b
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

<<<<<<< HEAD
  getUserById(id:number){
    this.userListService.getUserById(id).subscribe(
      ()=>{
        // this.router.navigate(['/edit', id]);
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

=======
>>>>>>> d9a04d725b58acda10f30c488b5e4f93d313608b
}
