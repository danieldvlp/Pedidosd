import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/modelUsuario';
import { UsuarioServiceService } from 'src/app/Services/usuario-service.service';

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
    private serviceUsuario : UsuarioServiceService<Usuario>
    
  ){
   
  }

  ngOnInit(){
    this.serviceUsuario.read().subscribe(x => {
      this.usuario = x;
    })
  }

}
