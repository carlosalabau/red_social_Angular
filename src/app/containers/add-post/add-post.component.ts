import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService, private userService: UserService) { }

  titulo = '';
  publicPost = {
    titulo : '',
    id_user: Number
  };
  user = {};
  ngOnInit(): void {
    this.listarUser();
  }

  publicarPost() {
    const token = localStorage.getItem('token');
    this.publicPost.titulo = this.titulo;
    this.publicPost.id_user = this.user['id'];
    this.postService.addPost(this.publicPost, token).subscribe(() => {
      console.log('Post publicado');
      this.recargarPagina();
    });
  }
  listarUser() {
    const token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res: any) => {
      this.user = res;
    });
  }

  recargarPagina() {
    window.location.reload();
  }


}
