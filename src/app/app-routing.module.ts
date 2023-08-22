import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioReadComponent } from './Componentes/usuario-read/usuario-read.component';
import { UsuarioCriarComponent } from './Componentes/usuario-criar/usuario-criar.component';
import { UsuarioAtualizarComponent } from './Componentes/usuario-atualizar/usuario-atualizar.component';
import { UsuarioExcluirComponent } from './Componentes/usuario-excluir/usuario-excluir.component';


const routes: Routes = [
  {path:'', component:Component},
  {path:'usuario', component:UsuarioReadComponent},
  {path:'usuario-Criar', component:UsuarioCriarComponent},
  {path:'usuario-Atualizar', component:UsuarioAtualizarComponent},
  {path:'usuario-Excluir', component:UsuarioExcluirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
