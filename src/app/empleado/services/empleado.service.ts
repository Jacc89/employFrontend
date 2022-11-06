import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado, IDataEmpleado } from '../interfaces/IDataEmpleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  apiUrl: string = environment.apiUrl;
  empleadoUrl: string = `${this.apiUrl}/empleado`;
  resultados: Empleado[] = [];
  totalRegistros: number= 0;
  registroPagina: number= 0;
;
  constructor(private http: HttpClient) { }

  listarEmpleados(pagina:number=0,size:number=4){

    const params = new HttpParams().set('PageNumber', pagina.toString()).set('PageZise', size.toString())
     this.http.get<IDataEmpleado>(this.empleadoUrl, {params:params})
              .subscribe(resp => {
                this.resultados = resp.resultado;
                this.totalRegistros= resp.totalRegistros;
                this.registroPagina = resp.totalPaginas;
              })
  }

  
}
