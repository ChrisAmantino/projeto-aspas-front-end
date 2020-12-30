import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemModel } from '../model/PostagemModel';
import { TemaModel } from '../model/TemaModel';
import { AlertasService } from '../service/alertas.service';
import { MidiaService } from '../service/midia.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  postagem: PostagemModel = new PostagemModel()
  idPost!: number
  imagem!: File

  tema: TemaModel = new TemaModel()
  listaTemas!: TemaModel[]
  

  idTema!: number

  constructor(
    private temaService: TemaService,
    private postagemService: PostagemService,
    private midiaService: MidiaService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idPost = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPost)
    this.findAllTemas()
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: PostagemModel) => {
      this.postagem = resp
    })

  }

  salvar(){
    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    if(this.imagem == null){
      
      this.postagemService.putPostagem(this.postagem).subscribe((resp: PostagemModel) => {
        this.postagem = resp 
        this.router.navigate(['/feed'])
        this.alert.showAlertSuccess('Postagem alterada com sucesso!')
      }, err => {
        if (err.status == '500'){
          this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar.')
        }
      } )
    } else {
      this.midiaService.editPhoto(this.imagem).subscribe((resp: any) => {
        this.postagem.imagem = resp.secure_url 
        this.postagemService.putPostagem(this.postagem).subscribe((resp: PostagemModel) => {
          this.postagem = resp 
          this.router.navigate(['/feed'])
          this.alert.showAlertSuccess('Postagem alterada com sucesso!')
        }, err => {
          if (err.status == '500'){
            this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar.')
          }
        } )
    })
  }

  }

  findAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: TemaModel[]) =>{
      this.listaTemas = resp;
    })
  }

 findByIdTema() {
   this.temaService.getByIdTema(this.idTema).subscribe((resp: TemaModel) => {
     this.tema = resp;
   })
 }

 carregarImagemPreview(event: any) {
  this.imagem = event.target.files[0]
  let url = URL.createObjectURL(this.imagem);
  (<HTMLImageElement>document.querySelector('img#imagem-preview'))!.src = url
}

}
