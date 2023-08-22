import { Injectable } from '@angular/core';
import { map,catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { enviroment } from '../../../src/enviroments/enviroment';
import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/modelUsuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  enviromentName="";
  enviromentUrl="";

  constructor(
    private http:HttpClient
  ) {
    this.enviromentName=enviroment.enviromentName;
    this.enviromentUrl=enviroment.BASE_URL;
  }

  criar (usuario : Usuario) : Observable<any> {
    return this.http.post<Usuario>(this.enviromentUrl + "/usuario", Usuario)
    .pipe(
      map(obj => obj ),
      catchError (e => e)
    )
  }

  read(): Observable<any[]>{
    return this.http.get<Usuario[]>(this.enviromentUrl + "/usuario").pipe(
      map(obj => obj)

    )

  }

  atualizar(T: Usuario): Observable<any> {
    return this.http.put<any>(this.enviromentUrl + "/usuario", T )
    .pipe(
      map(obj => obj),
      catchError(e => e)
      );
    }


    excluir (id: number)  : Observable<any> {
      const url = `${this.enviromentUrl + "/usuario" }/${id}`
      return this.http.delete<any>(url).pipe(
      map(obj => obj),
      catchError(e => e)
      )
}

}