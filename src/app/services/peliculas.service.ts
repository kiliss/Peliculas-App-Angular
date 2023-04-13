import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Movies, Result } from '../interfaces/peliculas-response';
import { DetailsMovie } from '../interfaces/detalle-pelicula-response';
import { CastResponse } from '../interfaces/cast-response';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key : '31f7466802b0acbc924e7b9a1a72d12e',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  getCartelera(): Observable<Result[]> {
    if (this.cargando) {
      return of([]);
    }
    this.cargando = true;
    return this.http.get<Movies>(
      `${this.baseUrl}/movie/now_playing`, {
        params: this.params
      }
    ).pipe(
      map( resp => resp.results ),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      }
    )
    );
  }

  buscarPeliculas(texto: string): Observable<Result[]> {
    const params = {...this.params, page: '1', query: texto};
    return this.http.get<Movies>(
      `${this.baseUrl}/search/movie`, {
        params
      }
    ).pipe(
      map( resp => resp.results )
    );
  }
  onDestory() {
    this.carteleraPage = 1;
  }

  getPeliculaDetalle(id: string) {
    return this.http.get<DetailsMovie>(
      `${this.baseUrl}/movie/${id}`, {
        params: this.params
      }
    ).pipe(
      catchError( err => of(null) )
    );
  }

  getCredits(id: string) {
    return this.http.get<CastResponse>(
      `${this.baseUrl}/movie/${id}/credits`, {
        params: this.params
      }
    ).pipe(
      map( resp => resp.cast ),
      catchError( err => of(null) )
    )
  }
}
