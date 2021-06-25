import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioTatuador } from 'src/app/interfaces/usuarioTatuador.interface';
import { UsuarioTatuadorService } from 'src/app/services/usuario-tatuador.service';

@Component({
  selector: 'all-tatuadores',
  templateUrl: './all-tatuadores.component.html',
  styleUrls: ['./all-tatuadores.component.css']
})
export class AllTatuadoresComponent implements OnInit {

  usuarioTatuador: UsuarioTatuador[];


  /* paginaActual: number;
  numPaginas: number */;

  constructor(private usuarioTatuadorService: UsuarioTatuadorService, private activatedRoute: ActivatedRoute) {
    /* this.paginaActual = 1; */
  }

  //Vamos a probar que funcion el nuevo metodo vale?
  ngOnInit(): void {

    this.usuarioTatuadorService.getTatuadores({})
      .then(response => {
        this.usuarioTatuador = response;
        /* this.numPaginas = response.info.pages; */
      })
      .catch(error =>
        console.log(error)
      );

  }

  async onChange($event) {
    const estilo = $event.target.value
    let params = {};
    if (estilo != "mostrarTodos") {
      params["estilo"] = estilo;
    }

    try {
      this.usuarioTatuador = await this.usuarioTatuadorService.getTatuadores(params)
      console.log(this.usuarioTatuador)

    } catch (error) {
      //Should we set something as error in the frontend??
      console.log(error)
    }






    /* async onClick2(siguiente: boolean) {
      if (siguiente) {
        this.paginaActual++;
      } else {
        this.paginaActual--;
      } */



  }


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



}