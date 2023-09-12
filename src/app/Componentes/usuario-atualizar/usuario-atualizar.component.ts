import { Component } from '@angular/core';
import { Usuario } from 'src/app/Model/modelUsuario';

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent {
  usuario: Usuario = new Usuario()
  constructor(){

  }

  ngOnInit(){

  }

  atualizarUsuario(){
    alert("Nome do Usuario: " + this.usuario.nome)
  }
}
