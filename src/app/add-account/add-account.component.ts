import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  student = {
    id: '',
    fullname: '',
    birthday: '',
    email: '',
    level: ''
  }

  ngOnInit(): void {
  }
  addStudent() {
    this.api.addStudent(this.student.fullname, this.student.birthday, this.student.email, this.student.level).subscribe(res => {
      var result = JSON.stringify(res['result']);
      alert(result);
      this.router.navigateByUrl('/list');
    });
  }

}
