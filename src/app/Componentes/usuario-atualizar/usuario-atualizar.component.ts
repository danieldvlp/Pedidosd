import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Model/modelUsuario';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent {
  usuario: Usuario = new Usuario()
  constructor(
    private routeractive: ActivatedRoute,
    private serviceUsuario: UsuarioServiceService<Usuario>,
    private router : Router

  ){


  }

  ngOnInit(){
    this.buscarUsuario()
  }

  atualizarUsuario(){
    this.serviceUsuario.atualizar(this.usuario).subscribe(x => {
      alert("Usuario atualizado")
    })
  }

  buscarUsuario(){
    const id = Number(this.routeractive.snapshot.params['id'])
    this.serviceUsuario.buscarPorId(id).subscribe(x => {
      this.usuario = x
    })
  }

}
