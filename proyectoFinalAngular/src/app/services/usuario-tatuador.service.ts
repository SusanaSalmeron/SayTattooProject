import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioTatuador } from '../interfaces/usuarioTatuador.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTatuadorService {

  constructor(private httpClient: HttpClient) { }



  getTatuadores(): Promise<UsuarioTatuador[]> {
    return this.httpClient.get<UsuarioTatuador[]>('http://localhost:3000/api/usuariosTatuadores').toPromise()
  }




}
