import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private username: string = '';
  private password: string = '';
  private email: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  register = () => {
    const ruser = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.loginService.registerUser(ruser);
    this.loginService.login();
  }

}
