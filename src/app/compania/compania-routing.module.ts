import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent,
     children: [
        {path: 'listado', component: ListarComponent},
        // {path: 'agregar', component: AgregarComponent},
        // {path: 'editar/:id', component: EditarComponent},
        // {path: 'eliminar/:id', component: EliminarComponent},
        {path: '**', redirectTo: 'listado'}
     ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
],
exports: [
  RouterModule
]

})
export class CompaniaRoutingModule { }
