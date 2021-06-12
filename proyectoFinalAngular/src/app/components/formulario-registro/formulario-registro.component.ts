import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;

  //TODO validaciones del formulario
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      ciudad: new FormControl('', [
        Validators.required
      ]),
      cp: new FormControl('', [
        Validators.required
      ]),
      telefono: new FormControl('', [
        Validators.required
      ]),
      fechaNacimiento: new FormControl('', [
        Validators.required
      ]),
      NombreUsuario: new FormControl('', [
        Validators.required
      ]),
      Email: new FormControl('', [
        Validators.required
      ]),
      Password: new FormControl('', [
        Validators.required
      ]),
      repetirPassword: new FormControl('', [
        Validators.required
      ]),
      tatuador: new FormControl('', [
        Validators.required
      ])
    })

  }


  ngOnInit(): void {
  }






}
