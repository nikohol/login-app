import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: string = "http://media.mw.metropolia.fi/wbma";

  private user: any = {
    "username": "john",
    "password": "examplepass"
  };

  constructor(private http: Http) { }

  login = (user: string) => {
    /*this.http.post(this.url, this.user,);*/

    return this.http.post(this.url, this.user)
      .map(resp => resp.json()
      );
  }

}
