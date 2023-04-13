import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string): string {
    if (!poster) {
      return 'assets/no-image.jpg';
    }
    if(poster === 'null') {
      return 'assets/no-image.jpg';
    }
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    return `${imgUrl}/${poster}`;
  }

}

