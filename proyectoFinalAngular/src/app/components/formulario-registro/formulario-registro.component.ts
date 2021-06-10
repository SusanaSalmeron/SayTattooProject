import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      direccion: new FormControl(''),
      ciudad: new FormControl(''),
      cp: new FormControl(''),
      telefono: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      NombreUsuario: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl(''),
      repetirPassword: new FormControl(''),
      tatuador: new FormControl('')
    })

  }


  ngOnInit(): void {
  }






}
