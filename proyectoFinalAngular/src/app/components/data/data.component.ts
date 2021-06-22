import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  formulario: FormGroup;
  usuario: Usuario;
  id: number;

  constructor(private usuariosService: UsuariosService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.id = params.id
      const user = await this.usuariosService.getUser(this.id)
      console.log(user)

      this.formulario = new FormGroup({
        nombre: new FormControl(user.nombre, [
          Validators.minLength(5)
        ]),
        direccion: new FormControl(user.direccion),
        ciudad: new FormControl(user.ciudad),
        cp: new FormControl(user.cp, [
          Validators.pattern(/^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/)
        ]),
        telefono: new FormControl(user.telefono),
        email: new FormControl(user.email, [
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
        ]),
        password: new FormControl(user.password, [
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)
        ]),
        repetirPassword: new FormControl('', [
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/),
        ])
      })
    });


  }

  repeatPasswordValidator(form) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('repetirPassword').value;
    if (passwordValue === passwordRepeatValue) {
      return null
    } else {
      return { repeatPasswordValidator: true }
    }
  }


  async onSubmit() {
    const response = await this.usuariosService.update(this.formulario.value, this.id);
  }



}
