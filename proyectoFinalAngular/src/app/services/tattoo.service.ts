import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tattoo } from '../interfaces/tattoo.interface';

@Injectable({
  providedIn: 'root'
})
export class TattooService {

  constructor(private httpClient: HttpClient) {

  }


  upload(fd: FormData, id) {
    console.log(fd)
    return this.httpClient.post(`http://localhost:3000/api/usuariosTatuadores/${id}/tatuajes/upload`, fd).toPromise();
  }

  getPics(id): Promise<Tattoo[]> {
    return this.httpClient.get<Tattoo[]>(`http://localhost:3000/api/usuariosTatuadores/${id}/pics`).toPromise();
  }
}
