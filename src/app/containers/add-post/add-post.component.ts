import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostsService, private router: Router) { }

  titulo = '';

  ngOnInit(): void {

  }

  publicarPost() {
    this.postService.addPost({ titulo: this.titulo }).subscribe(() => {
      console.log('Post publicado');
      this.recargarPagina();
    });
  }

  recargarPagina() {
    window.location.reload();
  }


}
