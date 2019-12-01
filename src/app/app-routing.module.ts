import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  { path: 'inicial', component: InicialComponent }, 
  { path: 'curso', component: CursoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/inicial', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
