import { Component, Input } from '@angular/core';
import { ImportsModule } from '../imports';
import { ImportIconsModule } from '../importIcons';
import { Carousel } from './Carousel';
import { PropertyCard } from '../model/property-card.model';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [ImportsModule, ImportIconsModule, Carousel],
  template: `
    <p-card class="relative border-1 border-200 mb-2">
      <div class="mx-auto">
        <app-carousel></app-carousel>
      </div>

      <div class="mb-4">
        <div class="flex justify-content-between">
          <div>
            <div class="font-medium mb-1">{{ data.code }}</div>
            <p class="font-semibold text-lg pb-2">{{ data.title }}</p>
          </div>

          <div class="flex align-items-center gap-1">
            <i class="pi pi-star-fill text-yellow-500"></i>
            <span class="font-semibold">
              {{ data.rating }} ({{ data.reviews }})
            </span>
          </div>
        </div>

        <p class="text-sm pb-2">
          <i class="pi pi-map-marker mr-1"></i>
          {{ data.location }}
        </p>

        <div class="absolute shadow-md favorite-icon">
          <app-fav-icon />
        </div>

        <ul class="flex flex-wrap gap-2 m-0 p-0 list-none my-2">
          <li class="text-sm flex gap-2">
            <app-guest-icon /> {{ data.sleeps }} sleeps |
          </li>
          <li class="text-sm flex gap-2">
            <app-bedroom-icon /> {{ data.bedrooms }} bedrooms |
          </li>
          <li class="text-sm flex gap-2">
            <app-bath-icon /> {{ data.bathrooms }} bathrooms |
          </li>
          <li class="text-sm flex gap-2">
            <app-interior-icon /> {{ data.areaSqft }} sq.ft. interior
          </li>
        </ul>
      </div>

      <div class="flex justify-content-between align-items-center">
        <p-button
          class="font-semibold text-xl"
          label="Check Availability"
          icon="pi pi-arrow-up-right"
          iconPos="right">
        </p-button>

        <div>
          <p>From</p>
          <p class="font-semibold text-xl">
            {{ data.pricePerNight }}/night
          </p>
        </div>
      </div>

      <p-divider />

      <ul class="flex flex-wrap gap-4 m-0 p-0 list-none mt-2 align-items-center justify-content-between">
        <li class="text-sm flex gap-2 align-items-center">
          <a href=""><i class="pi pi-bookmark"></i> Save </a>
        </li>
        <li class="text-sm flex gap-2 align-items-center">
          <a href=""><i class="pi pi-info-circle"></i> Contact </a>
        </li>
        <li class="text-sm flex gap-2 align-items-center">
         <a href=""> <i class="pi pi-share-alt"></i> Share </a>
        </li>
        <li class="text-sm flex gap-2 align-items-center">
          <a href=""><i class="pi pi-map-marker"></i> View on Map </a>
        </li>
      </ul>
    </p-card>
  `,
  styles: [`
    .favorite-icon {
      top: 1.5rem;
      right: 2rem;
      padding: 0.5rem;
    }
  `]
})
export class CardGridComponent {
  @Input() data!: PropertyCard;
}
