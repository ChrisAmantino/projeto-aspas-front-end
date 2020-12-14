import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../model/UsuarioModel';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css'],
})

export class NavbarLeftComponent implements OnInit {


  constructor(
   
  ) { }

  ngOnInit() {
  }

}

// sidenav-autosize-example',
//   templateUrl: 'sidenav-autosize-example.html',
//   styleUrls: ['sidenav-autosize-example.css'
