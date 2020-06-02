import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostsService } from 'src/app/services/posts.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ids = {
    id_post: Number,
    id_user: Number
  };
  miembros = [];
  posts = [];
  user = {};
  likes = [];
  valor = '';
  color = 'blue';

  constructor(
    private userService: UserService,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.listarMiembros();
    this.listarUser();
  }

  listarMiembros() {
    const token = localStorage.getItem('token');
    this.userService.obtenerUsers(token).subscribe((res: any) => {
      this.miembros = res;
    });
  }
  listarPosts() {
    const token = localStorage.getItem('token');
    this.postService.obtenerPosts(token).subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts)
      this.comprobarLike();
    });
  }
  listarUser() {
    const token = localStorage.getItem('token');
    this.userService.getUser(token).subscribe((res: any) => {
      this.user = res;
      this.listarPosts();
    });
  }
  comprobarLike() {
    this.posts.forEach(post => {
      post.color = 'blue';
      post.likes.forEach(like => {
        if (post.id === like.pivot.id_post && like.pivot.id_user === this.user['id']) {
          post.color = 'red';
        } else {
          post.color = 'blue';
        }
      });
    });
  }
  darLike(idPost) {
    const token = localStorage.getItem('token');
    this.ids.id_post = idPost;
    this.ids.id_user = this.user['id'];
    this.postService.like(this.ids, token).subscribe(() => {
      this.listarPosts();
    });
  }
  dislikes(idPost) {
    const token = localStorage.getItem('token');
    this.ids.id_post = idPost;
    this.ids.id_user = this.user['id'];
    this.postService.dislikes(this.ids, token).subscribe(() => {
      this.listarPosts();
    });
  }



} // Cierre final
