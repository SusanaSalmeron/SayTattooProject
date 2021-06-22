import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interface.models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  user = user;
  identity = true;
  token;

  constructor() {
    this.user = new user('', '', '', '', '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
  }

}
