import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInterface } from '../../../Models/User';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  @ViewChild('formLogin')
  formLogin: NgForm;

  public user: UserInterface = {};

  public hide: boolean = true;

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.user);
    if(this.formLogin.valid){
  this.user.username = this.user.username.toLowerCase();
  this.user.password = this.user.password.toLowerCase();
  this.authService.loginUser(this.user.username,this.user.password).subscribe(data => {
    this.authService.setToken(data.id);
    let user = data.user;
    this.authService.setUser(user);
    location.reload();
  });
    }
    // this.onResetForm();
    // location.reload();
  }

  onResetForm() {
    console.log("Reset");
    this.user = Object.assign({});
    this.formLogin.reset();
  }

}
