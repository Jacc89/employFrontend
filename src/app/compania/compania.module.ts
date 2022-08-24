import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniaRoutingModule } from './compania-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ListarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CompaniaRoutingModule,
    MaterialModule
  ]
})
export class CompaniaModule { }
