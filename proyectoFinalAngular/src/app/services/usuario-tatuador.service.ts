import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioTatuador } from '../interfaces/usuarioTatuador.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTatuadorService {


  constructor(private httpClient: HttpClient) { }


  //Query params es un mapa que construyes donde llamaras a esta funcion
  //si esta vacia, no tendra ningun query param. Una misma funcion te vale para todos los casos
  async getTatuadores(queryParams): Promise<UsuarioTatuador[]> {
    return this.httpClient.get<UsuarioTatuador[]>(
      'http://localhost:3000/api/usuariosTatuadores',
      {
        params: queryParams
      }
    ).toPromise()
  }



}





