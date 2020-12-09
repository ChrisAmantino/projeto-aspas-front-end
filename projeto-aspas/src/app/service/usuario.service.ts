import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  token = { headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!) }

  getNomeById(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`http://localhost:8081/usuario/${id}`, this.token)
  }
}
