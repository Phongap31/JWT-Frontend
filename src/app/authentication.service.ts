import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserDetails {
  id: string;
  username: string;
  password: string;
  exp: number;
  iat: number;
}
// export interface TokenPayload {
//   id: string;
//   username: string;
//   password: string;
// }
interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = 'http://localhost:5000/'
  token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token);
    this.token = token;
  }
  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken');
    }
    return this.token;
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    }
    else return null;
  }
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    }
    else return false;
  }
  public registerUser(username, password, email): Observable<any> {
    var params = {
      username: username,
      password: password,
      email: email,
    }
    return this.http.post<any>(`${this.url}/register`, params);
  }
  public loginUser(username, password): Observable<any> {
    var params = {
      username: username,
      password: password
    };
    const base = this.http.post(`${this.url}/login`, params);

    const request = base.pipe(map((data: TokenResponse) => {
      if (data.token) {
        this.saveToken(data.token);
      }
      return data;
    }));
    return request;
  }

  public logout(): void {
    this.token = '';
    localStorage.removeItem('usertoken');
    this.router.navigateByUrl('/login');
  }

  public forgotPassword(username): Observable<any> {
    return this.http.post(`${this.url}/forgot_pass`, username);
  }
}
