import { Component, OnInit } from '@angular/core';
import { MiembrosService } from '../../services/miembros.service';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  miembros = [];
  posts = [];
  constructor( 
    private miembroService: MiembrosService,
    private postService: PostsService
    ) { }

  ngOnInit(): void {
    this.listarMiembros();
    this.listarPosts();
  }

  listarMiembros(){
    this.miembroService.obtenerMiembros().subscribe((res: any) => {
      this.miembros = res;
    });
  }

  listarPosts(){
    this.postService.obtenerPosts().subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

}
