import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;


  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      sexo: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl(''),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      cp: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/)
      ]),
      telefono: new FormControl('', [
        Validators.required
      ]),
      fechaNacimiento: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/),


      ]),
      nombreUsuario: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/) //at least one upper case, one lower case, one special character, min 8 in length: */
      ]),
      repetirPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)
      ]),
      tatuador: new FormControl('', [
        Validators.required
      ]),
      proteccionDatos: new FormControl('', [
        Validators.required
      ])
    }, [this.repeatPasswordValidator]);

  }

  ngOnInit(): void {
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

  checkControl(control, validator) {
    return this.formulario.get(control).hasError(validator) && this.formulario.get(control).touched
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.formulario.reset()
  }







}
