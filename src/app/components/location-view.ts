import { Component } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'app-location-view',
  imports: [ImportsModule],
  template: `
   <div class="surface-card p-4 border-round-lg w-full">
  <h3 class="text-xl font-semibold mb-4">Location & View </h3>

  <div class="flex flex-column gap-4">
    <div
      *ngFor="let locationView of locationViewList"
      class="flex align-items-center gap-3">

      <p-checkbox
        name="locationViews"
        [value]="locationView"
        [(ngModel)]="selectedLocationView"
        inputId="{{ locationView }}">
      </p-checkbox>

      <label
        for="{{ locationView }}"
        class="text-lg text-700 cursor-pointer">
        {{ locationView }}
      </label>

    </div>
  </div>

</div>

  `,
  standalone: true
})
export class LocationviewModule {
  locationViewList = [
    'Ocean View & Oceanfront',
    'Golf Course View',
    'Ski In / Ski Out',
    'Ground Floor (No Stairs)',
    'Single Level'
  ];

  selectedLocationView: string[] = [];

}