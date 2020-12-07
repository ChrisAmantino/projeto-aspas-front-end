import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  constructor(

    public auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  sair() {
    this.router.navigate(['/login'])
    localStorage.clear()
  }

}
