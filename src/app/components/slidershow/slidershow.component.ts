import { Component, Input } from '@angular/core';
import { Result } from 'src/app/interfaces/peliculas-response';
import Swiper from 'swiper';
import {register} from 'swiper/element/bundle';

@Component({
  selector: 'app-slidershow',
  templateUrl: './slidershow.component.html',
  styleUrls: ['./slidershow.component.css'],
})
export class SlidershowComponent {
  @Input() movies: Result[] = [];
  constructor() {}
  ngAfterViewInit(): void {
    register();
    const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
