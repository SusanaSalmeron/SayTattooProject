import { Component, OnInit } from '@angular/core';
import { UsuarioTatuador } from 'src/app/interfaces/usuarioTatuador.interface';
import { UsuarioTatuadorService } from 'src/app/services/usuario-tatuador.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'all-tatuadores',
  templateUrl: './all-tatuadores.component.html',
  styleUrls: ['./all-tatuadores.component.css']
})
export class AllTatuadoresComponent implements OnInit {

  usuarioTatuador: UsuarioTatuador[];
  /* paginaActual: number;
  numPaginas: number */;

  constructor(private usuarioTatuadorService: UsuarioTatuadorService) {
    /* this.paginaActual = 1; */
  }

  ngOnInit(): void {
    this.usuarioTatuadorService.getTatuadores()
      .then(response => {
        this.usuarioTatuador = response;
        /* this.numPaginas = response.info.pages; */
      })
      .catch(error =>
        console.log(error)
      );




  }





  /* async onClick2(siguiente: boolean) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    } */



}


/*
*Evento para recoger el <select>
*/
/* onChange($event) {
  console.log($event.target.value); */
/* } */
/*
*Para recoger el lo qué escribe del input
*/
/* onFocus() {
  console.log("El cliente escribe"); */
/* } */

/* onBlur() {
  console.log("Dejó de escribir");
} */

/*
*Para recoger el click del botón de "Buscar🔍"
*/
/* onClick($event) {
  console.log('Se ha pulsado el botón de "Buscar Buscar 🔍');
} */
/* } */



