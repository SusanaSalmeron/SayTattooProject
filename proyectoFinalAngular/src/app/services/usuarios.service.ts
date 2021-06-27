import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/"
  }

  securityHeaders() {
    return {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };

  }

  // Recuperar perfil usuario/perfil
  getPerfil(): Promise<Usuario> {
    const httpOptions = this.securityHeaders();
    return this.httpClient.get<Usuario>(this.baseUrl + "usuarios/perfil", httpOptions).toPromise();
  }


  create(formData) {
    return this.httpClient.post("http://localhost:3000/api/usuarios/register", formData, { observe: "response" }).toPromise();
  }

  update(formData, id): Promise<Usuario> {
    const httpOptions = this.securityHeaders();
    const updateUser = {
      "nombre": formData.nombre,
      "direccion": formData.direccion,
      "ciudad": formData.ciudad,
      "cp": formData.cp,
      "telefono": formData.telefono,
      "email": formData.email,
      "password": formData.password,

    }
    return this.httpClient.put<Usuario>(`http://localhost:3000/api/usuarios/${id}`, updateUser, httpOptions).toPromise();
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
