import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['Apellidos','Nombres', 'Cargo', 'Compania'];

  

  constructor(private service:EmpleadoService) { }

  ngOnInit(): void {
    this.service.listarEmpleados();
  }

  get resultados(){
    return this.service.resultados;
  }

  get totalRegistros(){
    return this.service.totalRegistros;
  }

  get registroPagina(){
    return this.service.registroPagina;
  }
  onPaginadoChange(event: PageEvent){
    let pagina = event.pageIndex;
    let size= event.pageSize;
    pagina++;
    this.service.listarEmpleados(pagina, size);

  }

}
