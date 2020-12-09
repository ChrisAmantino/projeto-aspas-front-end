import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/UsuarioModel';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  idUsuario!: number

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  findByIdUsuario() {
    this.usuarioService.getNomeById(this.idUsuario).subscribe((resp: UsuarioModel) =>{
      this.usuario = resp;
    })
  }

}
