import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../interfaces/peliculas-response';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  getCartelera(): Observable<Movies> {
    return this.http.get<Movies>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=31f7466802b0acbc924e7b9a1a72d12e&language=es-ES&page=1'
    );
  }
}
