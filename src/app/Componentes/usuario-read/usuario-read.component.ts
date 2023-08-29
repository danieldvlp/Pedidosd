import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/modelUsuario';

@Injectable()

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})

export class UsuarioReadComponent  {

  DisplayColuns = ['Id', 'Nome', 'Telefone', 'Endereco', 'Acoes']
  usuario: Usuario[] = new Array()
  constructor(
    private route : Router
    
  ){
   
  }

  ngOnInit(): void{

  }

  novoUsuario(){
    alert("Usuário criado")

    this.route.navigate(['/usuariocriar'])

  }


}
