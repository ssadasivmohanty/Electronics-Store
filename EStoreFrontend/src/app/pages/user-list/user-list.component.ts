import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserListService } from '../../services/user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userListService : UserListService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
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

}
