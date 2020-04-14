import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DicytComponent } from './components/dicyt/dicyt.component';
import { IdentidadComponent } from './components/dicyt/identity/identidad.component';
import { DirectorComponent } from './components/dicyt/director/director.component';
import { PersonalComponent } from './components/dicyt/personal/personal.component';
import { VicerrectoradoComponent } from './components/vicerrectorado/vicerrectorado.component';
import { LoginComponent } from './components/profile/login/login.component';
// MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IdhProjectsComponent } from './components/projects/idh-projects/idh-projects.component';
import { InvestigationProjectsComponent } from './components/projects/investigation-projects/investigation-projects.component';
import { DetailsProjectsComponent } from './components/projects/details-projects/details-projects.component';
import { DetailsInvestigationComponent } from './components/projects/details-investigation/details-investigation.component';
import { RegisterComponent } from './components/user/register/register.component';

//SERVICES
import { ProjectService } from './services/project.service';
import { from } from 'rxjs';
import { UserListComponent } from './components/user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DicytComponent,
    IdentidadComponent,
    DirectorComponent,
    PersonalComponent,
    VicerrectoradoComponent,
    LoginComponent,
    IdhProjectsComponent,
    InvestigationProjectsComponent,
    DetailsProjectsComponent,
    DetailsInvestigationComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
