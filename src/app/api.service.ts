import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:5000/api'
  constructor(private http: HttpClient) { }

  public getAllStudent(){
    return this.http.get<any>(`${this.url}/get_all`);
  }

  public deleteStudent(id){
    return this.http.post<any>(`${this.url}/delete_stu`, id)
  }
  public addStudent(fullname, birthday, email, level){
    var params = {
      fullname: fullname,
      birthday: birthday,
      email: email,
      level: level
    }
    return this.http.post<any>(`${this.url}/add_stu`, params);
  }
}
