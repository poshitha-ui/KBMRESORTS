import { Component } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'app-trip',
  imports: [ImportsModule],
  template: `
    <div class="surface-card p-4 border-round-lg w-full">
  <h3 class="text-xl font-semibold mb-4">Themes / Trip Type</h3>
  <div class="flex flex-column gap-4">
    <div
      *ngFor="let trip of tripList"
      class="flex align-items-center gap-3">

      <p-checkbox
        name="trips"
        [value]="trip"
        [(ngModel)]="selectedTrips"
        inputId="{{ trip }}">
      </p-checkbox>

      <label
        for="{{ trip }}"
        class="text-lg text-700 cursor-pointer">
        {{ trip }}
      </label>

    </div>
  </div>

</div>


  `,
  standalone: true
})
export class TripModule {
  tripList = [
    'Family & Groups (Multiple Villas)',
    'Ski Trips (Seasonal)',
    'Couples Retreat',
    'Golf Getaway'
  ];

  selectedTrips: string[] = [];
}
