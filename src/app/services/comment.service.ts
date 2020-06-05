import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'http://localhost:8000/api/comment';

  constructor(private http: HttpClient) { }

  addComment(body, token) {
    return this.http.post(this.url + '/new', body, { headers: { Authorization: 'Bearer ' + token } });
  }
  getPosts(token) {
    return this.http.get(this.url, { headers: { Authorization: 'Bearer ' + token } })
  }
}
