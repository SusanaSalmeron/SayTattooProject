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
  searchState: string;
  styleState: string;





  constructor(private usuarioTatuadorService: UsuarioTatuadorService, private activatedRoute: ActivatedRoute) {
    this.searchState = "";
    this.styleState = "";

  }


  ngOnInit(): void {

    this.usuarioTatuadorService.getTatuadores({})
      .then(response => {
        this.usuarioTatuador = response;
      })
      .catch(error =>
        console.log(error)
      );

  }

  async onChange($event) {
    const style = $event.target.value
    this.styleState = style === "mostrarTodos" ? "" : style;
    await this.commonSearchEvent();
  }

  async onKeyUp($event) {
    this.searchState = $event.target.value;
    await this.commonSearchEvent();
  }

  async commonSearchEvent() {
    let params = {};
    if (this.styleState) {
      params["estilo"] = this.styleState;
    }
    if (this.searchState) {
      params["wildcard"] = this.searchState;
    }
    try {
      this.usuarioTatuador = await this.usuarioTatuadorService.getTatuadores(params)
      console.log(this.usuarioTatuador)

    } catch (error) {
      //Should we set something as error in the frontend??
      console.log(error)
    }

  }




}