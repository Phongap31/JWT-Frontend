
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }
  user = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }
  register(){
    this.auth.registerUser(this.user.username, this.user.password).subscribe(()=>{
      this.router.navigateByUrl('/login');
    })
  }

}
