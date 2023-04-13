import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlidershowComponent } from './slidershow/slidershow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { StarRatingModule } from 'angular-star-rating';
import { PipesModule } from '../pipes/pipes.module';
import { LoadingComponent } from './loading/loading.component';
import { CastSlideshiwComponent } from './cast-slideshiw/cast-slideshiw.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlidershowComponent,
    PeliculasPosterGridComponent,
    LoadingComponent,
    CastSlideshiwComponent,
  ],
  exports: [
    NavbarComponent,
    SlidershowComponent,
    PeliculasPosterGridComponent,
    LoadingComponent,
    CastSlideshiwComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    StarRatingModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {
  constructor() {}
}
