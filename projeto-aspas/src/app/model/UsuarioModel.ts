import { PostagemModel } from './PostagemModel';

export class UsuarioModel {

    public idUsuario!: number;
    public nomeCompleto!: string;
    public senhaUsuario!: string;
    public emailUsuario!: string;
    public tipoUsuario!: string;
    public postagem!: PostagemModel[]

}