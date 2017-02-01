import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';

  private user: any = {};
  private ruser: any = {};

  constructor(
    private http: Http,
    private router: Router
  ) { }

  setUser = (user) => {
    this.user = user;
    console.log(this.user);
  }
  registerUser = (ruser) => {
    this.ruser = ruser;
    console.log(this.ruser);
  }

  login = () => {
    /*this.http.post(this.url, this.user,);*/

    return this.http.post(this.url + '/login', this.user)
      .subscribe(
      resp => {
        const dataFromServer = resp.json();
        this.user = dataFromServer.user;
        this.user.token = dataFromServer.token;
        console.log(resp.json());
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['front']);
      },
      error => {
        console.log(error);
      }
      );
  }
  register = () => {
    return this.http.post(this + '/users', this.ruser).subscribe(
      res => {
        console.log(res.json());
      },
      error => {
        console.log(error);
      }
    );
  }

}
