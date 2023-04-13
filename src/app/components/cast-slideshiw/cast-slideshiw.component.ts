import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/interfaces/cast-response';
import Swiper from 'swiper';
import { register } from 'swiper/element';

@Component({
  selector: 'app-cast-slideshiw',
  templateUrl: './cast-slideshiw.component.html',
  styleUrls: ['./cast-slideshiw.component.css'],
})
export class CastSlideshiwComponent {
  @Input() cast: Cast[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.cast);
  }
  ngAfterViewInit(): void {
    register();
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
