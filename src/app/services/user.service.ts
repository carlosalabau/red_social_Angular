import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) { }


  obtenerUsers(token) {
    return this.http.get(this.url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  addUser(user) {
    return this.http.post(this.url + '/new', user);
  }
  login(user) {
    return this.http.post(this.url + '/login', user);
  }
  getUser(token) {
    return this.http.get(this.url + '/user', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  logout(token) {
    return this.http.get(this.url + '/logout', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
  }
  search(letra, token) {
    return this.http.get(this.url + '/search/' + letra, { headers: { Authorization: 'Bearer ' + token } });
  }

}
