import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) { }

  obtenerPosts(){
    return this.http.get(this.URL);
  }

}
