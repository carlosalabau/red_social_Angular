import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) { }

  obtenerPosts(token) {
    return this.http.get(this.URL, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  addPost(body) {
    return this.http.post(this.URL, body);
  }
  like(body, token) {
    return this.http.post(this.URL + '/like', body, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  dislikes(body, token) {
    console.log(body)
    return this.http.post(this.URL + '/dislike', body, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
}
