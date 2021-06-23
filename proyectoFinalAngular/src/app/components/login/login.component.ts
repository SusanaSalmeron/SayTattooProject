import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // title = 'Login';
  // user = Usuario;
  // identity;
  // token;

  constructor() {
    //   this.user = new usuario('', '', '', '', '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(usuario);
  }
}
