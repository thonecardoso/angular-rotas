import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CursosComponent} from './cursos/cursos.component';
import {LoginComponent} from './login/login.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
