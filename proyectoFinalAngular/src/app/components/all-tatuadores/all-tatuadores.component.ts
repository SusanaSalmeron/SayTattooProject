import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-tatuadores',
  templateUrl: './all-tatuadores.component.html',
  styleUrls: ['./all-tatuadores.component.css']
})
export class AllTatuadoresComponent implements OnInit {
  mostrarTatuadores: string;

  constructor() { }

  ngOnInit(): void {
  }



}
