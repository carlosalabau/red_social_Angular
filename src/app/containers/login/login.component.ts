import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mensaje = [];
  userActual = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  newLogin(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.userActual = res;
      document.querySelector('body').classList.remove('modal-open');
      document.querySelector('.modal-backdrop').remove();
      this.router.navigate(['/home']);
    }, err => {
      this.mensaje = Object.values(err['error']);
      $('.notification').fadeIn();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 5000);
    });
  }


}
