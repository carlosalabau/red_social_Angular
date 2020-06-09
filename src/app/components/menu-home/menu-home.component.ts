import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FollowerService } from 'src/app/services/follower.service';
declare var $: any;
@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent {

  constructor(private userService: UserService, private router: Router, private followService: FollowerService) { }

  letra = '';
  user = {};
  nombres = [];
  display = 'none';
  follows = [];
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
      this.nombres = res;
      this.checkFollows();
      this.display = 'block';
    });
  }
  checkFollows() {
    this.nombres.forEach(element => {
      element.follow = 'no';
      element.following.forEach(following => {
        if (element.id == following.pivot.id_followed && following.pivot.id_follower == this.user['id']) {
          element.follow = 'yes';
        }
      })
    })
    console.log(this.nombres)
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
  follow(id) {
    const token = localStorage.getItem('token');
    this.followService.addFollow(id, token).subscribe(() => {
      this.checkFollows();
    });
  }
  unfollow(id_followed) {
    const token = localStorage.getItem('token');
    this.followService.deleteFollow(id_followed, token).subscribe(() => {
      this.checkFollows();
    });
  }
}
