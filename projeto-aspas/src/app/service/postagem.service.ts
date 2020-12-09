import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostagemModel } from '../model/PostagemModel';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }
  token = { headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!) }

  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('http://localhost:8081/postagem', this.token)
  }
}
