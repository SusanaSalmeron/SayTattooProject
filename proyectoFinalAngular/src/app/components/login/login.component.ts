import { Component, OnInit } from '@angular/core';
import { UsuariosService } from "../../services/usuarios.service";
import { Router } from '@angular/router';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private usuariosService: UsuariosService, private router: Router) {
    const user = { email: this.email, password: this.password };
    this.usuariosService.login(user).subscribe(data => {
      console.log(data);
    });
  }



  ngOnInit(): void {
  }

  //Llamar desde el componente de login al servicio del usuario para almacenar el token que llega desde la BBDD.
  login() {
    // console.log(this.email);
    // console.log(this.password);
    const user = { email: this.email, password: this.password };
    this.usuariosService.login(user).subscribe(data => {
      this.usuariosService.setToken(data["token"]);
      this.router.navigateByUrl('/home');
    });
  }

}
