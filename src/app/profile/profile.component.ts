import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'Profile';
  passwordChange = {
    currentP: '',
    newP: ''
  }

  userdetail: UserDetails;

  constructor(private auth: AuthenticationService, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.userdetail = this.auth.getUserDetails();
  }

  changePassword() {
    this.api.changePassword(this.userdetail.identity.username, this.passwordChange.currentP, this.passwordChange.newP).subscribe(res => {
      console.log(res);
      var result = JSON.stringify(res['result']);
      alert(result);
      this.auth.logout();
    });
  }

}
