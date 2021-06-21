import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-tatuadores',
  templateUrl: './all-tatuadores.component.html',
  styleUrls: ['./all-tatuadores.component.css']
})
export class AllTatuadoresComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }


  /*
  *Evento para recoger el <select>
  */
  onChange($event) {
    console.log($event.target.value);
  }
  /*
  *Para recoger el lo qué escribe del input
  */
  onFocus() {
    console.log("El cliente escribe");
  }

  onBlur() {
    console.log("Dejó de escribir");
  }

  /*
  *Para recoger el click del botón de "Buscar🔍"
  */
  onClick($event) {
    console.log('Se ha pulsado el botón de "Buscar Buscar 🔍');

  }
}
