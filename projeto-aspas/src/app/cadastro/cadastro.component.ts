import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: UsuarioModel = new UsuarioModel () 
  senha!: string;

  constructor(

    private authService: AuthService,
    private router: Router,
    private alert: AlertasService

  ) { }

  ngOnInit() {
  }

  conferirSenha (event:any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if (this.user.tipoUsuario == 'ALUNO' || this.user.tipoUsuario == 'ALUNA' || this.user.tipoUsuario == 'ALUNE' || this.user.tipoUsuario == 'TUTOR' || this.user.tipoUsuario == 'TUTORA' || this.user.tipoUsuario == 'TUTORE') {
    if (this.senha === this.user.senhaUsuario) {
      this.authService.cadastrar(this.user).subscribe((resp:UsuarioModel) => {
        this.user = resp
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')
        this.router.navigate(['/login'])
        
      })

    } else {

      this.alert.showAlertDanger('Suas senhas não conferem.')

    }
  } else {
    this.alert.showAlertWarn("Tipo de usuário inválido! Digite em letras maiúsculas ALUNO/ ALUNA/ ALUNE ou TUTOR /TUTORA /TUTORE")
  }
}
}