import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    getPersonajes(pPage: number = 1): Promise<any> {
        // GET https://rickandmortyapi.com/api/character

        return this.httpClient.get(`https://rickandmortyapi.com/api/character/?page=${pPage}`).toPromise();

    }

}