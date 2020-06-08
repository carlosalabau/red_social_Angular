import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.scss']
})
export class DetallePerfilComponent implements OnInit {

  constructor(private postService: PostService) { }
posts = [];

  ngOnInit(): void {
  }
  listarPosts(id) {
    const token = localStorage.getItem('token');
    this.postService.obtenerPostsPerfil(id, token).subscribe((res: any) => {
      this.posts = res;
      /* this.comprobarLike(); */
    });
  }

}
