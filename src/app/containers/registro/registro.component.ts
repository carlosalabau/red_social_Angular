import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UserService) { }
  mensaje = [];
  ngOnInit(): void {
  }

  nuevoUser(formRegistro: NgForm) {
    this.userService.addUser(formRegistro.value).subscribe((res: any) => {
      this.mensaje.push('Registrado con exito');
      $('.notification').fadeIn();
      formRegistro.reset();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 5000);
    },
    err => {
      this.mensaje = [];
      this.mensaje = err['error'];
      $('.notification').fadeIn();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 5000);
    });
  }
}
