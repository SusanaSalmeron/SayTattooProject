import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favourite } from 'src/app/interfaces/favourite.interface';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  throttle = 0;
  distance = 2;
  favourites: Favourite[];
  id: number;


  constructor(private favouriteService: FavouritesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    })

    this.favouriteService.getFavs(this.id)
      .then(response => {
        this.favourites = response
      })
      .catch(error => {
        console.log(error)
      });

  }






}

