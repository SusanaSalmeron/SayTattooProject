import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-tatuadores',
  templateUrl: './card-tatuadores.component.html',
  styleUrls: ['./card-tatuadores.component.css']
})
export class CardTatuadoresComponent implements OnInit {

  @ViewChild('masonry', { static: true }) masonry: ElementRef;

  constructor(private renderer: Renderer2) { }
  ngOnInit() { }
  ngAfterViewInit() {
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);
    Array.from(this.masonry.nativeElement.children).forEach((child: any, i) => {
      const order = i % numCols;
      this.renderer.setStyle(child, 'order', order);
      colHeights[order] += parseFloat(child.clientHeight);
    })
    this.renderer.setStyle(this.masonry.nativeElement, 'height', `${Math.max(...colHeights)}px`)
  }

}

