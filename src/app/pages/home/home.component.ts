import { Result } from './../../interfaces/peliculas-response';
import { Component, HostListener } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  movies : Result[] = [];
  moviesSlideShow : Result[] = [];
  loading: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)

    if (pos > max) {
      if (this.peliculasService.cargando) { return; }
      this.peliculasService.getCartelera()
        .subscribe( resp => {
          this.movies.push(...resp);
        });
    }
  }
  
    constructor(
      private peliculasService: PeliculasService
    ) {}
    ngOnInit(): void {
      this.peliculasService.getCartelera()
        .subscribe( resp => {
          this.movies = resp;
          this.moviesSlideShow = resp;
          this.loading = false;
        });
    }
      ngOnDestroy() {
        this.peliculasService.onDestory();
      }
}
