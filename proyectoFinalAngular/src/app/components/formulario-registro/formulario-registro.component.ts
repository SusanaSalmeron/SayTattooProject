import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;


  //TODO validaciones del formulario -fecha nacimiento = mayor edad
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      sexo: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
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
        /* Validators.pattern(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/) //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number: */
      ]),
      repetirPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/)
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


  /*    adultValidator(form) {
     const dateOfBirth = parseInt(form.get('fechaNacimiento').value);
     const actualDate = (new Date());
     const age = (actualDate - dateOfBirth) / 365 / 24 / 60 / 60 / 1000;
     if (age < 18) {
       return false
     } else null;
 
   } */



  repeatPasswordValidator(form) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('repetirPassword').value;
    if (passwordValue === passwordRepeatValue) {
      return null
    } else {
      return { repeatPasswordValidator: true }
    }
  }





}
