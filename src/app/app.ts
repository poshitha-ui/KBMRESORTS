import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { BannerModule } from './components/Banner';
import { Footer } from './layout/footer/footer';
import { HotelList } from './pages/hotel-list/hotel-list';
import { SampleCarousel } from './sample-carousel/sample-carousel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BannerModule, Footer, HotelList,SampleCarousel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('primeng-app');
}
