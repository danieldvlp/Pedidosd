import { Component, Injectable, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/modelUsuario';

@Injectable()

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.css']
})
export class UsuarioCriarComponent{
  
  usuario: Usuario = new Usuario()

  constructor(

  ){ }

  

  salvarUsuario(){
   
  alert(this.usuario.Nome);

  }



} 






