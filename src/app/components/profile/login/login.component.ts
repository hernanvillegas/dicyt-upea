import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInterface } from '../../../Models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @ViewChild('formLogin')
  formLogin: NgForm;

  public user: UserInterface = {};

  public hide: boolean = true;

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.user);
    this.onResetForm();
  }

  onResetForm() {
    this.user = Object.assign({});
    this.formLogin.reset();
  }

}
