import { User } from './../../models/user';
import { LoginModel } from './../../models/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) { }

  login(login: LoginModel) {
    return this.http.post<any>('http://localhost:8080/users/login', { username: login.username, password: login.password, usertype: login.usertype });
  }

}
