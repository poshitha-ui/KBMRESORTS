import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-price-range',
  imports: [ImportsModule, SliderModule],
  template: `
    <div class="surface-card p-4 border-round-lg w-full">
  <h3 class="text-xl font-semibold mb-4">Pricing</h3>

  <!-- Slider -->
  <p-slider [(ngModel)]="priceRange" [range]="true" [min]="min" [max]="max" class="w-full mb-4">
  </p-slider>

  <!-- Values -->
  <div class="flex justify-content-between text-lg font-semibold">
    <span>{{ priceRange[0] | currency:'USD':'symbol':'1.0-0' }}</span>
<span>{{ priceRange[1] | currency:'USD':'symbol':'1.0-0' }}</span>
  </div>
</div>
  `,
  styles: `
  .p-slider {
  height: 6px !important;
}
  `,
  standalone: true
})

export class PriceRangeModule {
  priceRange: number[] = [100, 5000];

  min = 1;
  max = 1500;
}