import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { ChipModule } from 'primeng/chip';

interface PropertyType {
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-premium',
  imports: [ImportsModule, ChipModule],
  template: `
   <div class="p-4">
    <h4 class="text-xl font-semibold mb-4">Premium Options</h4>
    <div class="flex gap-3 flex-wrap">
        <p-chip *ngFor="let type of types" (click)="toggle(type)"
            class="cursor-pointer px-4 py-2 border-round-3xl flex align-items-center gap-2" [ngClass]="{
      'surface-0 border-1 border-200': !type.selected,
      'bg-primary-500 border-0 text-white': type.selected
    }">

            <span class="text-lg">{{ type.label }}</span>

        </p-chip>
    </div>
</div>

  `,
  standalone: true
})

export class PremiumModule {
  types: PropertyType[] = [
    { label: 'Luxury Private Homes', selected: false },
    { label: 'Platinum',  selected: false }
  ];

  toggle(type: PropertyType) {
    type.selected = !type.selected;
  }
}
