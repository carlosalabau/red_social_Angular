import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userActual = [];
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  newLogin(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe((res: any)=>{
      localStorage.setItem('token', res.token);
      this.userActual = res;
      document.querySelector('body').classList.remove('modal-open');
      document.querySelector('.modal-backdrop').remove();
      this.router.navigate(['/home']);
    });
  }


}
