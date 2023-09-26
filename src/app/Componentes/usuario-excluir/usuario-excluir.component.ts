import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/Model/modelUsuario';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';

@Injectable()

@Component({
  selector: 'app-usuario-excluir',
  templateUrl: './usuario-excluir.component.html',
  styleUrls: ['./usuario-excluir.component.css']
})
export class UsuarioExcluirComponent {
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

  excluirUsuario(){
    this.serviceUsuario.excluir(this.usuario.id).subscribe(() => {
    })
    this.router.navigate(['/usuario'])
  }

  buscarUsuario(){
    const id = Number(this.routeractive.snapshot.params['id'])
    this.serviceUsuario.buscarPorId(id).subscribe(x => {
      this.usuario = x
    })
  }
}
