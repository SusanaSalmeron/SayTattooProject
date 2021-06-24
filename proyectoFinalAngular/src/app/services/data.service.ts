import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }





  setMoreData(formData, id) {
    return this.httpClient.post(`http://localhost:3000/api/usuariosTatuadores/${id}/moreData`, formData, { observe: "response" }).toPromise();

  }



}





