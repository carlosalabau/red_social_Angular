import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FollowerService } from 'src/app/services/follower.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private followerService: FollowerService) { }

  user = {};
  followers = '';
  users = [];

  ngOnInit(): void {
    this.listUsers();
    this.listarUser();

  }
  listarUser() {
    const token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res: any) => {
      this.user = res;
      this.listFollowers();
    });
  }
  listFollowers() {
    const token = localStorage.getItem('token');
    this.followerService.getFollows(this.user['id'], token).subscribe((res: any) => {
      this.followers = res;
    });
  }
  listUsers() {
    const token = localStorage.getItem('token');
    this.userService.allUsers(token).subscribe((res: any) => {
      this.users = res;
    });
  }

}
