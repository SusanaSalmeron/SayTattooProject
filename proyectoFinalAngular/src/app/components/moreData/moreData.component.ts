import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'more-data',
  templateUrl: './moreData.component.html',
  styleUrls: ['./moreData.component.css']
})
export class MoreDataComponent implements OnInit {
  formulario = new FormGroup({
    imgPerfil: new FormControl(''),
    estilos: new FormArray([
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
    ]),
    sobreMi: new FormControl(''),
  });
  id: number;
  myStyles = [
    { id: 1, name: 'Tradicional' },
    { id: 2, name: 'NeoTradicional' },
    { id: 3, name: 'Realismo' },
    { id: 4, name: 'Lettering' },
    { id: 5, name: 'Tribal' },
    { id: 6, name: 'Puntillismo' },
    { id: 7, name: 'Geometrico' },
    { id: 8, name: 'Animación' },
    { id: 10, name: 'Japonés' },
    { id: 11, name: 'Black and White' },
    { id: 12, name: 'Biomecánico' },


  ]

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    // this.formulario = this.formBuilder.group({
    //   estilos: new FormArray([], minSelectedCheckboxes(1))
    // });

    // function minSelectedCheckboxes(min = 1) {
    //   const validator: ValidatorFn = (formArray: FormArray) => {
    //     const totalSelected = formArray.controls
    //       // get a list of checkbox values (boolean)
    //       .map(control => control.value)
    //       // total up the number of checked checkboxes
    //       .reduce((prev, next) => next ? prev + next : prev, 0);

    //     // if the total is not greater than the minimum, return the error message
    //     return totalSelected >= min ? null : { required: true };
    //   };

    //   return validator;
    // };






  }


  get estilosArray() {
    return this.formulario.get("estilos") as FormArray;
  }

  async ngOnInit() {
    await this.activatedRoute.params.subscribe(params => {
      this.id = params.id
    })
  }

  async onSubmit() {
    let body = {}
    body["imgPerfil"] = this.formulario.value.imgPerfil;
    body["sobreMi"] = this.formulario.value.sobreMi;

    let estilos = [];
    for (let i = 0; i < this.formulario.value.estilos.length; i++) {
      if (this.formulario.value.estilos[i]) {
        estilos.push(this.myStyles[i].id);
      }
    }
    body["estilos"] = estilos;
    console.log(body);

    const response = await this.dataService.setMoreData(body, this.id);
    if (response.status === 200) {
      this.formulario.reset()
    }
  }
}
