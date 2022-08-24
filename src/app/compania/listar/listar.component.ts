import { Component, OnInit } from '@angular/core';
import { CompaniaService } from '../services/compania.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id','nombreCompania', 'dirreccion', 'telefono', 'telefono2'];

  constructor(private companiaService: CompaniaService) { }

  ngOnInit(): void {
    this.companiaService.listarCompanias();
  }

  get resultados(){
    return this.companiaService.resultados;
  }


}
