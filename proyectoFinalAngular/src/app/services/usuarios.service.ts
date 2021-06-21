import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  create(formData) {
    return this.httpClient.post("http://localhost:3000/api/usuarios/register", formData, { observe: "response" }).toPromise();
  }
}
