import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../profile/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isLogin: Boolean = false;

  @ViewChild(LoginComponent)
  loginComponent: LoginComponent;

  ngOnInit(): void {
  }

  loginModal(){
    this.loginComponent.openModal();

  }
}
