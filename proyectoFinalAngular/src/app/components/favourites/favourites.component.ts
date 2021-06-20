import { Component, OnInit } from '@angular/core';
import { Favourite } from 'src/app/intefaces/favourite.interface';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  throttle = 0;
  distance = 2;
  page = 1;
  favourites: Favourite[];


  constructor(private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.favouriteService.
      getFavourites(this.page)
      .subscribe((favourites: Favourite[]) => {
        this.favourites = favourites;

      });
  }

  onScroll(): void {
    this.favouriteService.getFavourites(++this.page).subscribe((favourites: Favourite[]) =>
      this.favourites.push(...favourites))
  }






}

