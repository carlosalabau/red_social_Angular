import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user = {};

  ngOnInit(): void {
    this.listarUser();
  }

  listarUser() {
    const token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res: any) => {
      this.user = res;
    });
  }
  cerrarSesion() {
    const token = localStorage.getItem('token');
    this.userService.logout(token).subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    });
  }
}
