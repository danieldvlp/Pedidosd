import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/modelUsuario';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';

@Component({
  selector: 'app-usuario-criar',
  templateUrl: './usuario-criar.component.html',
  styleUrls: ['./usuario-criar.component.css']
})
export class UsuarioCriarComponent {
  usuario: Usuario = new Usuario()

  constructor(
    private serviceUsuario : UsuarioServiceService,
    private router : Router
  ){

  }

  ngOnInit(){

  }

  salvarUsuario(){
    // this.serviceUsuario.criar(this.usuario).subscribe(r => {
    //   alert('Usuario cadastrado com sucesso')
    //   this.router.navigate(['usuario'])
    // })
  }

}
