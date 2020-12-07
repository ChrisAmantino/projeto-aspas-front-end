import { PostagemModel } from './PostagemModel';
import { UsuarioModel } from './UsuarioModel';

export class ComentarioModel {

    public idComentario!: number;
    public texto!: string;
    public data!: Date;
    public usuario!: UsuarioModel;
    public postagem!: PostagemModel;

}