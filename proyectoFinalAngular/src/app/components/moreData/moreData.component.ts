import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoreData } from 'src/app/interfaces/moredata.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'more-data',
  templateUrl: './moreData.component.html',
  styleUrls: ['./moreData.component.css']
})
export class MoreDataComponent implements OnInit {
  formulario: FormGroup;
  id: number;
  /* myStyles = {
    realismo: 3,
    otro: 5
  } */

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    this.formulario = new FormGroup({
      imgPerfil: new FormControl(''),
      tradicional: new FormControl(''),
      neoTradicional: new FormControl(''),
      realismo: new FormControl(''),
      lettering: new FormControl(''),
      tribal: new FormControl(''),
      puntillismo: new FormControl(''),
      geometrico: new FormControl(''),
      animacion: new FormControl(''),
      japones: new FormControl(''),
      bAw: new FormControl(''),
      biomecanico: new FormControl(''),
      sobreMi: new FormControl(''),


    })
  }

  async ngOnInit() {
    await this.activatedRoute.params.subscribe(params => {
      this.id = params.id
    })



  }

  async onSubmit() {
    /* let estilos = []
    console.log(this.formulario.value.realismo)
    if (this.formulario.value.realismo) {
      estilos.push(this.myStyles.realismo)
    } */
    const response = await this.dataService.setMoreData(this.formulario.value, this.id);
    if (response.status === 200) {
      this.formulario.reset()
    }
  }

}
