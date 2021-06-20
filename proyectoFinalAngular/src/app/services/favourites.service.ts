import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favourite } from '../intefaces/favourite.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private httpService: HttpClient) { }

  getFavourites(page: number): Observable<Favourite[]> {
    return this.httpService.get('http://localhost/3000/api/usuarios/id/favs') as Observable<Favourite[]>;
  }
}
