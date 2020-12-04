import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userdetail: UserDetails;
  constructor(public auth: AuthenticationService) { }

}
