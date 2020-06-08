import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = 'http://localhost:8000/api/post';

  constructor(private http: HttpClient) { }

  obtenerPosts(token) {
    return this.http.get(this.URL, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  obtenerPostsPerfil(id, token) {
    return this.http.get(this.URL + '/perfil/' + id, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  addPost(body, token) {
    return this.http.post(this.URL + '/new', body, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  like(body, token) {
    return this.http.post(this.URL + '/like', body, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  dislikes(body, token) {
    return this.http.post(this.URL + '/dislike', body, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  delete(id, token) {
    return this.http.delete(this.URL + '/delete/' + id, { headers: { Authorization: 'Bearer ' + token } });
  }
  update(body, id, token) {
    return this.http.post(this.URL + '/update/' + id, body, { headers: { Authorization: 'Bearer ' + token } })
  }

}
