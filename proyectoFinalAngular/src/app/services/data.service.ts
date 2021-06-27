import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }



  setMoreData(body, id) {
    return this.httpClient.post(`http://localhost:3000/api/usuariosTatuadores/${id}/moreData`, body,
      {
        headers: new HttpHeaders({
          authorization: localStorage.getItem('token')
        }),
        observe: "response"
      }
    ).toPromise();
  }
}





