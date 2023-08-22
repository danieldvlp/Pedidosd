import { Component } from '@angular/core';
import { Usuario } from 'src/app/Model/modelUsuario';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})

export class UsuarioReadComponent {

  DisplayColuns = ['Id', 'Nome', 'Telefone', 'Endereco', 'Acoes']
  usuario: Usuario[] = new Array()
  constructor(){

  }

  ngOnInit(){

  }

  novoUsuario(){
    alert("Usuário criado")
  }


}
