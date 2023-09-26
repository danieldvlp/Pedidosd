import { Injectable } from '@angular/core';
import { map,catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../src/enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/modelUsuario';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService<T>{

  enviromentName='';
  enviromentUrl='';

  constructor(
    private http : HttpClient
  ) {
    this.enviromentName = environment.environmentName;
    this.enviromentUrl = environment.BASE_URL;
  }

  criar (usuario : Usuario) : Observable<any> {
    return this.http.post<T>(this.enviromentUrl + "/Usuarios", usuario)
    .pipe(
      map(obj => obj ),
      catchError (e => e)
    )
  }

   read(): Observable<any[]>{
     return this.http.get<T[]>(this.enviromentUrl + "/Usuarios").pipe(
       map(obj => obj)

     )

   }

   buscarPorId(id:number): Observable<any>{
    return this.http.get<T> (this.enviromentUrl + "/Usuarios/" + id).pipe(
      map(obj => obj)

    )
   }





//   atualizar(T: Usuario): Observable<any> {
//     return this.http.put<any>(this.enviromentUrl + "/usuario", T )
//     .pipe(
//       map(obj => obj),
//       catchError(e => e)
//       );
//     }


    excluir (id: number)  : Observable<any> {
      const url = `${this.enviromentUrl + "/Usuarios" }/${id}`
      return this.http.delete<any>(url).pipe(
      map(obj => obj),
      catchError(e => e)
      )
}

}
