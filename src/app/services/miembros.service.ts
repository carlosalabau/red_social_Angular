import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {

  url = 'http://localhost:8000/api/miembros';

  constructor( private http: HttpClient) { }


  obtenerMiembros(){
    return this.http.get(this.url);
  }



}
