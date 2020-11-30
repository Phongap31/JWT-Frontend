import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private route: Router) { }

  canActivate(){
    if(!this.auth.isLoggedIn()){
      this.route.navigateByUrl('/');
      return false;
    }
    return true;
  }

  canDeactivate(){
    if(this.auth.isLoggedIn()){
      this.route.navigateByUrl('/profile')
      return false;
    }
    return true;
  }

}
