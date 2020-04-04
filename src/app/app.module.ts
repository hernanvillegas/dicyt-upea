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
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
