import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* import { Observable } from 'rxjs'; */
import { Favourite } from '../interfaces/favourite.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor(private httpClient: HttpClient) { }

  getFavs(id): Promise<Favourite[]> {
    return this.httpClient.get<Favourite[]>(`http://localhost:3000/api/usuarios/${id}/favs`).toPromise();
  }
}
