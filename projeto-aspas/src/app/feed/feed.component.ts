import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ComentarioModel } from '../model/ComentarioModel';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { ComentarioService } from '../service/comentario.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  key = 'data';
  reverse = true;

  postagem: PostagemModel = new PostagemModel();
  listaPostagens!: PostagemModel[];
  titulo!: string;

  tema: TemaModel = new TemaModel();
  listaTemas!: TemaModel[];
  idTema!: number;
  nomeTema!: string;

  comentario: ComentarioModel = new ComentarioModel();
  listaComentarios!: ComentarioModel[];

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private comentarioService: ComentarioService,
    private sanitizer: DomSanitizer,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllPostagens()
    this.findAllTemas()
    this.findAllComentarios()
  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: PostagemModel[]) =>{
      this.listaPostagens = resp;
      this.listaPostagens.forEach(postagem => {
            if(postagem.video != null){
            postagem.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(postagem.video)
          }
        }
      )
    })
  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: TemaModel[]) =>{
      this.listaTemas = resp;
    })
  }



  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) =>{
      this.tema = resp;
    })
  }

  findByTituloPostagem() {
    if (this.titulo == '') {
      this.findAllPostagens()
    } this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: PostagemModel[]) => {
      this.listaPostagens = resp
    })
    
  }

  publicar() {
    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.descricao == null || this.postagem.tema.idTema == null) {
      this.alert.showAlertWarn('Preencha todos os campos antes de publicar')
    } else {
        this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel) =>{
        this.postagem = resp
        this.postagem = new PostagemModel()
        this.alert.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }
  lampdialogo() {
    this.alert.showAlertWarn('Posso ajudar?')

  }
  

  contemImg(postagem: PostagemModel){
   return (postagem.imagem != null) 
  }

  contemVideo(postagem: PostagemModel){
    return (postagem.video != null) 
   }

   findByNomeTema() {
    if (this.nomeTema === ''){
      this.findAllTemas()
    } else {
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: TemaModel[]) => {
        this.listaTemas = resp
      })
    }
  }

  findAllComentarios() {
    this.comentarioService.getAllComentario().subscribe((resp: ComentarioModel[]) => {
      this.listaComentarios = resp
    })
  }

  comentar(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: PostagemModel) => {
      this.postagem = resp
    })
    this.comentario.postagem = this.postagem
    if(this.comentario.texto == null || this.comentario.postagem == null )
    {
      this.alert.showAlertWarn("Preencha o campo corretamente!")
    } else {
      this.comentarioService.postComentario(this.comentario).subscribe((resp:ComentarioModel)=>{
        this.comentario = resp
        this.comentario = new ComentarioModel();
        this.alert.showAlertSuccess("Comentario feito com sucesso!");
        this.findAllComentarios();
      });
    }

  }

}