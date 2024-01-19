import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userListService : UserListService) { }

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
      
    );
    console.log("Got user",id);
    
  }

}
