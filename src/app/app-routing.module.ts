import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'buscar', component: BuscarComponent

  },
  {
    path: 'listar', component: ListarComponent

  },
  {
    path: '**', component: HomeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
