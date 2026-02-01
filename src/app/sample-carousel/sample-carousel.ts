import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ImportsModule } from '../imports';


@Component({
  selector: 'app-sample-carousel',
  standalone: true,
  templateUrl: './sample-carousel.html',
  styleUrl: './sample-carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ImportsModule]

})
export class SampleCarousel implements AfterViewInit {

  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  ngAfterViewInit() {
    Object.assign(this.swiperEl.nativeElement, {
      loop: true,
      effect: 'coverflow',
      //autoHeight: true,
      speed: 1500,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      grabCursor: true,
      loopedSlides: 3,
      navigation: true,

      keyboard: {
        enabled: true,
      },

      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
   
// navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
      coverflowEffect: {
        rotate: 42,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },

      // navigation: {
      //   nextEl: '.destination-slider-next',
      //   prevEl: '.destination-slider-prev',
      // },

      // IMPORTANT: Add on object for events
    on: {
      init: function() {
        console.log('Swiper initialized');
      },
      autoplayStart: function() {
        console.log('Autoplay started');
      },
      autoplayStop: function() {
        console.log('Autoplay stopped');
      }
    },

      breakpoints: {
        350: { slidesPerView: 1 },
        577: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        991: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 4 },
      }
    });

    this.swiperEl.nativeElement.initialize();
  }
}
