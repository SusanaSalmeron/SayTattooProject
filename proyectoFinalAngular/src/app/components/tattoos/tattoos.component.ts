import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tattoo } from 'src/app/interfaces/tattoo.interface';
import { TattooService } from 'src/app/services/tattoo.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {
  formulario: FormGroup;
  files;
  id: number;
  tattoos: Tattoo[];

  constructor(private tattooService: TattooService, private router: Router, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.formulario = new FormGroup({
      imagen: new FormControl('')
    })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    })


    this.tattooService.getPics(this.id).then(result => {
      console.log(result)
      this.tattoos = result;
    })
  }

  get picsUrls() {
    return this.tattoos.map(elem => this.sanitizer.bypassSecurityTrustResourceUrl(elem.imagen));
  }

  onSubmit() {
    let fd = new FormData();
    console.log("id: " + this.id);
    console.log("f: " + this.files[0]);
    fd.append('imagen', this.files[0]);
    this.tattooService.upload(fd, this.id).then(result => {
      this.router.navigate(['']);
    })


  }

  onChange($event) {

    this.files = $event.target.files;
  }










}
