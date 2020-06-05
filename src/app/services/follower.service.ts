import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {
  url = 'http://localhost:8000/api/follow/';
  constructor(private http: HttpClient) { }

  getFollows(id, token) {
    return this.http.get(this.url + id, { headers: { Authorization: 'Bearer ' + token } });
  }

}
