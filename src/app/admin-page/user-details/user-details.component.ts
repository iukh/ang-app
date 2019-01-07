import { Component, OnInit } from '@angular/core';
import { User } from '../../user'
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {
  users: any = [];
  constructor(
    private userService: UserService
  ) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
   return this.userService.getUsers().subscribe(users => {
     this.users = users;
   });
   }
   deleteUser(user: User) {
      this.users = this.users.filter(a => a !== user);
      this.userService.deleteUser(user).subscribe();
    }
}
