import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/interfaces/peliculas-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
    movies : Result[] = [];
    texto: string = '';
    loading: boolean = false;
    constructor(
      private activatedRoute: ActivatedRoute,
      private peliculasService: PeliculasService

    ) {
      this.loading = true;
    }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe( params => {
        this.peliculasService.buscarPeliculas(params['texto'])
          .subscribe(resp => {
            this.movies = resp;
            this.texto = params['texto'];
            this.loading = false;
          } );
      });
    }

}
