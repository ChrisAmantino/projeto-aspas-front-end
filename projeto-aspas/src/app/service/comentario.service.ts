import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComentarioModel } from '../model/ComentarioModel';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }

  token = { headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!) }

  getAllComentario(): Observable<ComentarioModel[]> {
    return this.http.get<ComentarioModel[]>('http://localhost:8081/comentario', this.token)
  }

  postComentario(comentario: ComentarioModel): Observable<ComentarioModel> {
    return this.http.post<ComentarioModel>('http://localhost:8081/comentario', comentario, this.token)
  }
  
}
