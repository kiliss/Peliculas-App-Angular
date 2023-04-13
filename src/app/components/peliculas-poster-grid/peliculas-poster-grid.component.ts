import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/peliculas-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent {
  @Input() movies: Result[] = [];
    constructor(
      private route:Router
    ) { }
    ngOnInit(): void {
      console.log(this.movies);
    }
    onMovieClick(movie: Result) {
      this.route.navigate(['/pelicula', movie.id]);
    }
}
