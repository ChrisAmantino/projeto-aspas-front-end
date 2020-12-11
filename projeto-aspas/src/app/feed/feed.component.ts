import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { UsuarioModel } from '../model/UsuarioModel';
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

  tema: TemaModel = new TemaModel();
  listaTemas!: TemaModel[];
  idTema!: number;

  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllPostagens()
    this.findAllTemas()
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

  publicar() {
    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.descricao == null || this.postagem.tema.idTema == null) {
      alert ('Preencha todos os campos antes de publicar')
    } else {
        this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel) =>{
        this.postagem = resp
        this.postagem = new PostagemModel()
        alert ('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

  contemImg(postagem: PostagemModel){
   return (postagem.imagem != null) 
  }

  contemVideo(postagem: PostagemModel){
    return (postagem.video != null) 
   }

}