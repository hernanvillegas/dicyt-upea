import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdentidadComponent } from './components/dicyt/identity/identidad.component';
import { VicerrectoradoComponent } from './components/vicerrectorado/vicerrectorado.component';
import { DirectorComponent } from './components/dicyt/director/director.component';
import { PersonalComponent } from './components/dicyt/personal/personal.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'identity', component: IdentidadComponent},
  {path: 'vicerrectorado', component: VicerrectoradoComponent},
  {path: 'director', component: DirectorComponent},
  {path: 'personal', component: PersonalComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
