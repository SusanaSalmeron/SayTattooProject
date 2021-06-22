import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getUserById(id): Promise<Usuario> {
    return this.httpClient.get<Usuario>(`http://localhost:3000/api/usuarios/${id}`).toPromise();
  }
}
