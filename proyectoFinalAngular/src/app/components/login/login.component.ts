import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() {
    //   this.user = new usuario('', '', '', '', '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
