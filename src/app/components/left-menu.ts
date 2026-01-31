import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { AmenitiesModule } from './amenities';
import { TripModule } from './trip';
import { LocationviewModule } from './location-view';
import { PremiumModule } from './premium';
import { PriceRangeModule } from './price-range';
import { RoomsModule } from './rooms-beds';

@Component({
  selector: 'app-left-menu',
  imports: [ImportsModule, AmenitiesModule, TripModule, LocationviewModule, PremiumModule, PriceRangeModule, RoomsModule],
  template: `
  <app-rooms-beds></app-rooms-beds> <p-divider />
  <app-price-range></app-price-range> <p-divider />
  <app-premium></app-premium> <p-divider />
    <app-location-view></app-location-view> <p-divider />
    <app-amenities></app-amenities> <p-divider />
    <app-trip></app-trip>
  `,
  styles: `
  
   .favorite-icon {
    top: 1.5rem;
    right: 2rem;
    padding: 0.5rem;
  }
  `
})
export class LeftMenuModule {

}