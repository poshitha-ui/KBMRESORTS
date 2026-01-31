// banner.component.ts - COMPLETE FIXED VERSION
import { Component, signal, computed, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  description: string;
  location: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="zoom-slider position-relative overflow-hidden">
      <!-- ALL slides are positioned absolutely -->
      <div
        *ngFor="let image of images(); let idx = index; trackBy: trackByImage"
        class="slide position-absolute"
        [class.active]="idx === currentSlide()"
        [attr.data-slide]="idx"
        [ngStyle]="{'background-image': 'url(' + image + ')'}"
      ></div>
      
      <!-- Navigation dots (clickable) -->
      <div class="dots position-absolute bottom-4 start-50 translate-middle-x d-flex gap-2 z-20">
        <button 
          *ngFor="let image of images(); let idx = index"
          class="dot rounded-circle border-0"
          [class.active]="idx === currentSlide()"
          (click)="goToSlide(idx)"
          [attr.data-dot]="idx"
        ></button>
      </div>
      
      <!-- Overlay Text -->
      <div class="overlay-text text-center text-white z-20">
        <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
          <p class="location mb-3 fs-6"><span>📍</span> {{ getCurrentSlide()?.location }}</p>
          <h1 class="title mb-4">{{ getCurrentSlide()?.title }}</h1>
          <p class="description mb-4">{{ getCurrentSlide()?.description }}</p>
          <button class="btn bg-custom-primary-dark text-white px-4 py-2 fs-6 fw-semibold rounded-pill shadow-lg">
            <span> Explore Now </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Debug info (remove after testing) -->
      <div class="debug position-absolute top-0 end-0 p-2 bg-dark text-white text-xs z-30">
        Slide: {{ currentSlide() + 1 }} / {{ images().length }}
      </div>
    </div>
  `,
  styles: [`
  :host { display: block; width: 100%; }

  .zoom-slider {
    height: 60vh; min-height: 500px;
    position: relative; overflow: hidden;
    width: 100%; background: #000; /* Container fallback */
  }

  .slide {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: #000 !important;
    background-color: #000 !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    opacity: 0; z-index: 1;
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .slide.active {
    opacity: 1 !important; 
    z-index: 10 !important;
    animation: zoomEffect 25s linear infinite;
  }

  @keyframes zoomEffect {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.12); }
  }

  .dots { bottom: 2rem; z-index: 20; }
  .dot { 
    width: 14px; height: 14px; 
    border: 2px solid rgba(255,255,255,0.6); 
    transition: all 0.3s ease; background: transparent;
  }
  .dot.active, .dot:hover { 
    transform: scale(1.3); border-color: #fff; 
    background: rgba(255,255,255,0.3);
  }

  .overlay-text {
    position: absolute; inset: 0; z-index: 20; padding: 2rem;
  }

  /* Rest of your styles unchanged... */
  .dots { bottom: 2rem; z-index: 20; }
  .dot { 
    width: 14px; height: 14px; 
    border: 2px solid rgba(255,255,255,0.6); 
    transition: all 0.3s ease; 
  }
  .dot.active, .dot:hover { 
    transform: scale(1.3); border-color: #fff; 
  }
  .overlay-text {
    position: absolute; inset: 0; z-index: 20; padding: 2rem;
  }
  .overlay-text .title {
    font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800;
    margin-bottom: 1.5rem; text-shadow: 0 4px 20px rgba(0,0,0,0.9);
    line-height: 1.1; max-width: 800px;
  }
  .overlay-text .description {
    font-size: clamp(1.2rem, 3vw, 1.6rem); max-width: 700px;
    opacity: 0.95; text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    margin-bottom: 2rem;
  }
  .overlay-text button {
    padding: 1rem 2.5rem; font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  .overlay-text button:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.4) !important;
  }
  .debug {
    position: absolute; top: 0; right: 0; 
    padding: 0.5rem; background: rgba(0,0,0,0.8);
    font-size: 0.8rem; color: white; z-index: 30;
  }

  @media (max-width: 768px) {
    .zoom-slider { height: 55vh; min-height: 400px; }
    .overlay-text { padding: 1.5rem; }
    .overlay-text .title { font-size: 2.2rem !important; }
  }
`]

})


export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {
  slides = signal<Slide[]>([
    {
      image: 'https://www.thehotelguru.com/_images/cd/3e/cd3ec428c48f286b88b28cff00c28ad1/s1654x900.jpg',
      title: 'Your Luxury Paradise Awaits.',
      description: 'Find Your Perfect Getaway Today.',
      location: 'Montage Kapalua Bay, Maui | Hawaii',
    },
    {
      image: 'https://images.pexels.com/photos/30073297/pexels-photo-30073297.jpeg',
      title: 'Stay Longer, Explore More',
      description: 'Booking Hawaii? Stay 6+ nights & get a FREE rental car!',
      location: 'Kaanapali | Hawaii',
    },
    {
      image: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
      title: 'Ski. Stay. Savor.',
      description: 'Your Park City Winter Escape Starts Here',
      location: 'Canyons | Park City',
    }
  ]);

  images = computed(() => this.slides().map(s => s.image));
  currentSlide = signal(0);
  private intervalId?: number;

  trackByImage(index: number, image: string): string {
    return image;
  }

  getCurrentSlide(): Slide | undefined {
    return this.slides()[this.currentSlide()];
  }

  nextSlide() {
    this.currentSlide.update(val => (val + 1) % this.images().length);
  }

  goToSlide(idx: number) {
    this.currentSlide.set(idx);
  }

  ngOnInit() {
    // Start auto-slide after DOM is ready
    setTimeout(() => {
      this.intervalId = window.setInterval(() => {
        this.nextSlide();
      }, 5000);
    }, 1000);
  }

  ngAfterViewInit() {
    // Ensure first slide shows immediately
    //this.currentSlide.set(0);
    // Preload all images
  this.slides().forEach(slide => {
    const img = new Image();
    img.src = slide.image;
  });
  this.currentSlide.set(0);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }
}
