import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  userUpdate = {
    fullname: '',
    birthday: '',
    email: '',
    level: ''
  };
  constructor( private api: ApiService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.api.getCurrentAccount(this.router.snapshot.params.id).subscribe(res=>{
      var result = JSON.parse(res);

      this.userUpdate.fullname = result.fullname;
      this.userUpdate.birthday = result.birthday;
      this.userUpdate.email = result.email;
      this.userUpdate.level = result.level;
      }
    )}

    update(){
      this.api.updateStudent(this.router.snapshot.params.id, this.userUpdate.fullname, this.userUpdate.birthday, this.userUpdate.email, this.userUpdate.level).subscribe(()=>{
        this.route.navigateByUrl('/list');
      });
    }

}
