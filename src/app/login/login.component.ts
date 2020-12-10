import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

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
  login() {
    if (this.auth.isLoggedIn()) {
      return this.router.navigateByUrl('/')
    }
    else {
      this.auth.loginUser(this.userlogin.username, this.userlogin.password).subscribe(res => {
        this.router.navigateByUrl('/profile')
      });
    }
  }

  forgotPass() {
    this.auth.forgotPassword(this.userlogin.username).subscribe();
  }

}
