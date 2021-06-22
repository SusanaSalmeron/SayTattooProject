import { Component, OnInit } from '@angular/core';
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


  constructor(private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.favouriteService.getFavs(3)
      .then(response => {
        console.log(response)
        this.favourites = response
      })
      .catch(error => {
        console.log(error)
      });

    /* this.favouriteService.
      getFavourites()
      .subscribe((favourites: Favourite[]) => {
        this.favourites = favourites;

      }); */
  }

  onScroll(): void {
    this.favouriteService.getFavourites().subscribe((favourites: Favourite[]) =>
      this.favourites.push(...favourites))
  }






}

