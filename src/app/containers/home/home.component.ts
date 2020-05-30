import { Component, OnInit } from '@angular/core';
import { MiembrosService } from '../../services/miembros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  miembros = [];

  constructor( private miembroService: MiembrosService) { }

  ngOnInit(): void {
    this.listarMiembros();
  }

  listarMiembros(){
    this.miembroService.obtenerMiembros().subscribe((res: any) => {
      this.miembros = res;
      console.log(this.miembros)
    });
  }

}
