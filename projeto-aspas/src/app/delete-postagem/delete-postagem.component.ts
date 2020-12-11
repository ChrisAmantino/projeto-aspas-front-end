import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemModel } from '../model/PostagemModel';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-delete-postagem',
  templateUrl: './delete-postagem.component.html',
  styleUrls: ['./delete-postagem.component.css']
})
export class DeletePostagemComponent implements OnInit {

  postagem: PostagemModel = new PostagemModel();

  listaPostagens!: PostagemModel[];

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    let id: number = this.route.snapshot.params["id"]
    this.findByIdPostagem(id)
  }

  findByIdPostagem(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: PostagemModel) => {
      this.postagem=resp
      this.listaPostagens.forEach(postagem => {
        if(postagem.video != null){
        postagem.urlSegura = this.sanitizer.bypassSecurityTrustResourceUrl(postagem.video)
      }
    }
    )
  })
}

  btnSim(){
    this.postagemService.deletePostagem(this.postagem.idPostagem).subscribe(()=> {
      this.router.navigate(['/feed'])
      alert('Postagem apagada com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/feed'])
  }

  contemImg(postagem: PostagemModel){
    return (postagem.imagem != null) 
   }
 
   contemVideo(postagem: PostagemModel){
     return (postagem.video != null) 
    }

}
