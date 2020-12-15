import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {OrderModule} from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { NavbarRightComponent } from './navbar-right/navbar-right.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { AlertasComponent } from './alertas/alertas.component';
import { LampadaComponent } from './lampada/lampada.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarLeftComponent,
    NavbarRightComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    NavbarHomeComponent,
    HomeComponent,
    FeedComponent,
    PostTemaComponent,
    PutTemaComponent,
    PutPostagemComponent,
    DeletePostagemComponent,
    DeleteTemaComponent,
    AlertasComponent,
    LampadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
