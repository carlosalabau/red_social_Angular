import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent {

  constructor(private userService: UserService, private router: Router) { }

  letra = '';
  user = {};
  nombres = [];
  display = 'none';
  @ViewChild('buscador') buscador: ElementRef;
  ngAfterViewInit(): void {
    this.listarUser();
    this.focusOut();
  }

  listarUser() {
    const token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res: any) => {
      this.user = res;
    });
  }
  cerrarSesion() {
    const token = localStorage.getItem('token');
    this.router.navigate(['/']);
    this.userService.logout(token).subscribe(() => {
      localStorage.removeItem('token');
    });
  }
  busqueda(letra) {
    const token = localStorage.getItem('token');
    if (this.letra.length < 1) {
      this.display = 'none';
      this.letra = '';
      return;
    }
    this.userService.search(letra, token).subscribe((res: any) => {
      this.nombres = res['busqueda'];
      this.display = 'block';
    });
  }

  focusOut() {

    this.buscador.nativeElement.addEventListener('focusout', (event) => {
      setTimeout(() => {
        this.display = 'none';
        this.letra = '';
        $('#buscador').val('');
      }, 1500);

    });
  }

}
