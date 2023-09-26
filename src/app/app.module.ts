import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Home/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsuarioReadComponent } from './Componentes/usuario-read/usuario-read.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioCriarComponent } from './Componentes/usuario-criar/usuario-criar.component';
import { UsuarioAtualizarComponent } from './Componentes/usuario-atualizar/usuario-atualizar.component';
import { UsuarioExcluirComponent } from './Componentes/usuario-excluir/usuario-excluir.component';
import {MatTableModule} from '@angular/material/table';
import { UsuarioServiceService } from './Services/usuario-service.service';
import { Injectable, EventEmitter  } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioReadComponent,
    UsuarioCriarComponent,
    UsuarioAtualizarComponent,
    UsuarioExcluirComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    {
      provide : LOCALE_ID,
      useValue : 'pt-BR',
    },
    [
      UsuarioServiceService
    ],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
