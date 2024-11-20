import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iResults } from '../models/iresults';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private options = {
    headers: {
      accept: 'application/json',
      Authorization: 'autorizacao',
    },
  };

  getResults(term: string, page: number = 1) {
    const url = ' https://api.themoviedb.org/3/search/movie?query=';
    const params = '&include_adult=false&language=en-US&page=';
    console.log(url + term + params + page);

    return this.http.get<iResults>(url + term + params + page, this.options);
  }
  getPopular() {
    return this.http.get<iResults>(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      this.options
    );
  }
}
