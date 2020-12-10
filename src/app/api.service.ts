import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:5000/api'
  constructor(private http: HttpClient, private auth: AuthenticationService) { }
  token = this.auth.getToken();

  public getAllStudent() {
    return this.http.get<any>(`${this.url}/get_all`, {
      headers: {
        Authorization: `${this.auth.getToken()}`
      }
    });
  }

  public deleteStudent(id) {
    return this.http.delete<any>(`${this.url}/delete_stu/${id}`)
  }
  public addStudent(fullname, birthday, email, level) {
    var params = {
      fullname: fullname,
      birthday: birthday,
      email: email,
      level: level
    }
    return this.http.post<any>(`${this.url}/add_stu`, params);
  }

  public updateStudent(id, fullname, birthday, email, level) {
    var params = {
      fullname: fullname,
      birthday: birthday,
      email: email,
      level: level
    }
    return this.http.post<any>(`${this.url}/update/${id}`, params);
  }

  getCurrentAccount(id) {
    return this.http.get<any>(`${this.url}/get_current/${id}`);
  }

  changePassword(username, currentP, newP) {
    var params = {
      username: username,
      currentP: currentP,
      newP: newP
    };
    return this.http.post<any>(`${this.url}/change_pass`, params);
  }


}
