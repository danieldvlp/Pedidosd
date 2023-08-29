import { Component, Injectable, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/modelUsuario';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';

@Injectable()

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.css']
})
export class UsuarioCriarComponent{
  
  usuario: Usuario = new Usuario()

  constructor(
    private serviceUsuario : UsuarioServiceService
  ){ }

  

  salvarUsuario(){
   
    this.serviceUsuario.criar(this.usuario).subscribe(x => {
      alert(`Usuário ${x.Nome}  cadastrado com sucesso!.`)
    })

  }



} 






