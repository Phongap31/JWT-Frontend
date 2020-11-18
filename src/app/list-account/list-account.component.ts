import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  listStudent = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.getAllStudent().subscribe(res => {
      var result = JSON.parse(res);
      this.listStudent = result;
    });
  }
  delete(id){
    this.api.deleteStudent(id).subscribe(()=>{
      this.load();
    });
  }
}
