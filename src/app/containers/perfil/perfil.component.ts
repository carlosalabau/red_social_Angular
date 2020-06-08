import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { CommentService } from 'src/app/services/comment.service';
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private postService: PostService, private userService: UserService, private commentService: CommentService) { }
  titulo = '';
  id: Number;
  ids = {
    id_post: Number,
    id_user: Number
  };
  posts = [];
  user = {};
  idPost: Number;
  mensaje = '';
  ngOnInit(): void {
    this.listarUser();
    this.getUrl();
  }
  getUrl() {
    const actual = window.location + '';
    const split = actual.split("/");
    const id = Number(split[split.length - 1]);
    this.id = id;
    return id;
  }
  listarPosts() {
    const id = this.getUrl();
    const token = localStorage.getItem('token');
    this.postService.obtenerPostsPerfil(id, token).subscribe((res: any) => {
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
  openComment(id) {
    $('#commentarios' + id).toggle();
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
  newComment(formComment: NgForm, id_post) {
    const token = localStorage.getItem('token');
    formComment.value.id_post = id_post;
    formComment.value.id_user = this.user['id'];
    this.mensaje = 'Comentario insertado con exito';
    this.commentService.addComment(formComment.value, token).subscribe(() => {
      $('.notification').fadeIn();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 3000);
      this.listarPosts();
    });
  }
  deletePost(id) {
    const token = localStorage.getItem('token');
    this.mensaje = 'Post eliminado con exito';
    this.postService.delete(id, token).subscribe(() => {
      $('.notification').fadeIn();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 3000);
      this.listarPosts();
    });
  }
  openEditPost(idPost, titulo) {
    $('.editPost').toggle();
    this.titulo = titulo;
    this.idPost = idPost;
  }

  updatePost(formUpPost: NgForm, updateImg) {
    const token = localStorage.getItem('token');
    this.mensaje = 'Post actualizado con exito';
    const imgUpdate = new FormData();
    imgUpdate.set('imagen', updateImg.files[0]);
    imgUpdate.set('titulo', formUpPost.value.titulo);
    this.postService.update(imgUpdate, this.idPost, token).subscribe(() => {
      $('.notification').fadeIn();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 3000);
      this.listarPosts();
    });
  }
  updateImages(imagePersonal, imagePerfil) {
    const token = localStorage.getItem('token');
    const uploadImages = new FormData();
    uploadImages.set('imagen', imagePersonal.files[0]);
    uploadImages.set('imagen_perfil', imagePerfil.files[0]);
    this.mensaje = 'Imagenes actualizadas con exito';
    this.userService.updateImagesUser(uploadImages, token).subscribe(() => {
      $('.notification').fadeIn();
      setTimeout(() => {
        $('.notification').fadeOut();
      }, 3000);
      this.listarPosts();
    })
  }

}

