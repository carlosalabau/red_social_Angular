import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  nuevoUser(formRegistro: NgForm) {
    this.userService.addUser(formRegistro.value).subscribe(() => {
      setTimeout(() => {
        formRegistro.reset();
      }, 500);
    });
  }
}
