import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private miembroService: MiembrosService) { }

  ngOnInit(): void {
  }

  nuevoMiembro(formRegistro: NgForm) {
    this.miembroService.addMiembro(formRegistro.value).subscribe(() => {
      setTimeout(() => {
        formRegistro.reset();
      }, 500);
    });
  }
}
