import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  listStudent = [];

  constructor(private api: ApiService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.api.getAllStudent().subscribe(res => {
      var result = JSON.parse(res);
      this.listStudent = result;
    });
  }
  delete(id) {
    this.api.deleteStudent(id).subscribe(res => {
      var result = JSON.stringify(res['result']);
      alert(result);
      this.load();
      this.router.navigateByUrl('/list');
    });
  }
}
