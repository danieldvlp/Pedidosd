import { Component, Injectable } from '@angular/core';
import { Usuario } from 'src/app/Model/modelUsuario';

@Injectable()

@Component({
  selector: 'app-usuario-excluir',
  templateUrl: './usuario-excluir.component.html',
  styleUrls: ['./usuario-excluir.component.css']
})
export class UsuarioExcluirComponent {
  usuario: Usuario = new Usuario()
  constructor(){

  }

  ngOnInit(){

  }

  excluirUsuario(){
    alert("Nome do Usuario: " + this.usuario.Nome)
  }
}
