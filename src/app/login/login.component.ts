import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin = {
    username: '',
    password: ''
  };
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.auth.isLoggedIn()){
      return this.router.navigateByUrl('/')
    }
    else {
      this.auth.loginUser(this.userlogin.username, this.userlogin.password).subscribe(()=>{
        this.router.navigateByUrl('/profile')
      });
    }
  }

}
