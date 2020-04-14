import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdentidadComponent } from './components/dicyt/identity/identidad.component';
import { VicerrectoradoComponent } from './components/vicerrectorado/vicerrectorado.component';
import { DirectorComponent } from './components/dicyt/director/director.component';
import { PersonalComponent } from './components/dicyt/personal/personal.component';
import { DetailsInvestigationComponent } from './components/projects/details-investigation/details-investigation.component';
import { DetailsProjectsComponent } from './components/projects/details-projects/details-projects.component';
import { IdhProjectsComponent } from './components/projects/idh-projects/idh-projects.component';
import { UserListComponent } from './components/user/user-list/user-list.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'identity', component: IdentidadComponent},
  {path: 'vicerrectorado', component: VicerrectoradoComponent},
  {path: 'director', component: DirectorComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'details/investigation', component: DetailsInvestigationComponent},
  {path: 'project/idh', component: IdhProjectsComponent},
  {path: 'user/user-list', component: UserListComponent},
  {path: 'details/project/:id', component: DetailsProjectsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
