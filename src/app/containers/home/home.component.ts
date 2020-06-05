import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { NgForm } from '@angular/forms';
import { FollowerService } from 'src/app/services/follower.service';
declare var $: any;
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
  followers = [];
  posts = [];
  user = {};
  color = 'blue';
  publicPost = {
    titulo: '',
    id_user: Number
  };
  titulo = '';
  nombre = [];

  constructor(
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService,
    private followerService: FollowerService

  ) { }

  ngOnInit(): void {
    this.listarUser();
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
      this.listFollowers();
    });
  }
  comprobarLike() {
    this.posts.forEach(post => {
      post.color = 'blue';
      post.nLike = post.likes.length;
      post.likes.forEach(like => {
        if (post.id === like.pivot.id_post && like.pivot.id_user === this.user['id']) {
          post.color = 'red';
        } else {
          post.color = 'blue';
        }
      });
    });
  }
  darLike(post) {
    const token = localStorage.getItem('token');
    this.ids.id_post = post.id;
    this.ids.id_user = this.user['id'];
    this.postService.like(this.ids, token).subscribe((res: any) => {
      post.color = 'red';
      post.nLike = res.nLike;
    });
  }
  dislikes(post) {
    const token = localStorage.getItem('token');
    this.ids.id_post = post.id;
    this.ids.id_user = this.user['id'];
    this.postService.dislikes(this.ids, token).subscribe((res: any) => {
      post.color = 'blue';
      post.nLike = res.nDislike;
    });
  }
  openComment(id) {
    $('#commentarios' + id).toggle();
  }
  newComment(formComment: NgForm, id_post) {
    const token = localStorage.getItem('token');
    formComment.value.id_post = id_post;
    formComment.value.id_user = this.user['id'];
    this.commentService.addComment(formComment.value, token).subscribe(() => {
      this.listarPosts();
    });
  }
  listFollowers() {
    const token = localStorage.getItem('token');
    this.followerService.getFollows(this.user['id'], token).subscribe((res: any) => {
      this.followers = res;
    });
  }
  publicarPost() {
    const token = localStorage.getItem('token');
    this.publicPost.titulo = this.titulo;
    this.publicPost.id_user = this.user['id'];
    this.postService.addPost(this.publicPost, token).subscribe(() => {
    });
  }
  listName(id) {
    const token = localStorage.getItem('token');
    this.userService.getName(id).subscribe((res: any) => {
      console.log(res)
    });
  }

} // Cierre final
