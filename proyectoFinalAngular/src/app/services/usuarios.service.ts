import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient, private cookies: CookieService) { }

  create(formData) {
    return this.httpClient.post("http://localhost:3000/api/usuarios/register", formData, { observe: "response" }).toPromise();
  }

  update(formData, id): Promise<Usuario> {
    console.log(formData)
    const updateUser = {
      "nombre": formData.nombre,
      "direccion": formData.direccion,
      "ciudad": formData.ciudad,
      "cp": formData.cp,
      "telefono": formData.telefono,
      "email": formData.email,
      "password": formData.password,

    }
    return this.httpClient.put<Usuario>(`http://localhost:3000/api/usuarios/${id}`, updateUser).toPromise();
  }

  getUser(id): Promise<Usuario> {
    return this.httpClient.get<Usuario>(`http://localhost:3000/api/usuarios/${id}`).toPromise();
  }

  login(user: any) {
    return this.httpClient.post("http://localhost:3000/api/usuarios/login", user);
  }

  // Crear los Métodos para Guardar el Token en las cookies y para recuperarlo.

  setToken(token: string) {
    localStorage.setItem("token", token);

  }
  getToken() {
    return localStorage.getItem("token");
  }
}
