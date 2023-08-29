import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioReadComponent } from './Componentes/usuario-read/usuario-read.component';
import { UsuarioCriarComponent } from './Componentes/usuario-criar/usuario-criar.component';
import { UsuarioAtualizarComponent } from './Componentes/usuario-atualizar/usuario-atualizar.component';
import { UsuarioExcluirComponent } from './Componentes/usuario-excluir/usuario-excluir.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';


const routes: Routes = [
  { path :'home', component : AppComponent},
  { path :'usuario', component : UsuarioReadComponent},
  { path :'usuariocriar', component : UsuarioCriarComponent},
  { path :'usuarioatualizar', component : UsuarioAtualizarComponent},
  { path :'usuarioexcluir', component : UsuarioExcluirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
