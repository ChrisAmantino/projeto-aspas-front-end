import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/UsuarioModel';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css'],
})

export class NavbarLeftComponent implements OnInit {

  token = localStorage.getItem('token')


  constructor(
   
  ) { }

  ngOnInit() {
  }

  nome() {
    let login = localStorage.getItem('nome')
    if(this.token == null) {
      login = 'usuario'
    }
    return new String(login)
  }

  tipo() {
    let tipo = localStorage.getItem('tipo')
    if(this.token == null) {
      tipo = 'Tipo Usuario'
    }
    return new String(tipo)
  }


}

// sidenav-autosize-example',
//   templateUrl: 'sidenav-autosize-example.html',
//   styleUrls: ['sidenav-autosize-example.css'
