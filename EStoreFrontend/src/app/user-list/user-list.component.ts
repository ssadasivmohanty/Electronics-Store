import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userListService : UserListService) { }

  ngOnInit(): void {
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

}
