import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsMovie } from 'src/app/interfaces/detalle-pelicula-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interfaces/cast-response';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent {
  pelicula!: DetailsMovie;
  cast: Cast[] = [];
  loading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loading = true;
    let { id } = this.activatedRoute.snapshot.params;


    combineLatest([
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCredits(id),
    ]).subscribe(([pelicula, cast]) => {
      if (!pelicula || !cast) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = pelicula;
      this.cast = cast.filter((actor) => actor.profile_path !== null);
      this.loading = false;

      
    });



    // this.peliculasService.getPeliculaDetalle(id).subscribe((resp) => {
    //   if (!resp) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.pelicula = resp;
    //   this.loading = false;
    // });

    // this.peliculasService.getCredits(id).subscribe((resp) => {
    //   if (!resp) {
    //     this.router.navigateByUrl('/home');
    //     return;
    //   }
    //   this.cast = resp.filter((actor) => actor.profile_path !== null);
    // });
  }
  onRegresar() {
    this.location.back();
  }
}
