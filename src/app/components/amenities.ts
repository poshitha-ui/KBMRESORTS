import { Component } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'app-amenities',
  imports: [ImportsModule],
  template: `
    <div class="surface-card p-4 border-round-lg w-full">
  <h3 class="text-xl font-semibold mb-4">Amenities</h3>

  <div class="flex flex-column gap-4">
    <div
      *ngFor="let amenity of amenitiesList"
      class="flex align-items-center gap-3">

      <p-checkbox
        name="amenities"
        [value]="amenity"
        [(ngModel)]="selectedAmenities"
        inputId="{{ amenity }}">
      </p-checkbox>

      <label
        for="{{ amenity }}"
        class="text-lg text-700 cursor-pointer">
        {{ amenity }}
      </label>

    </div>
  </div>

</div>

  `,
  standalone: true
})
export class AmenitiesModule {

  amenitiesList = [
    'Air Conditioning',
    'Swimming Pool',
    'Hot Tub',
    'Fireplace',
    'Firepit',
    'BBQ Grill',
    'Fitness Center',
    'Family Friendly',
    'Elevator',
    'Washer & Dryer'
  ];

  selectedAmenities: string[] = [];
}
