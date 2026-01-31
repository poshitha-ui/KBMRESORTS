import { Component } from '@angular/core';
import { ImportsModule } from '../imports';

@Component({
  selector: 'app-rooms-beds',
  imports: [ImportsModule],
  template: `
    <div class="surface-card py-4 px-4 border-round-lg w-full">
        <h3 class="text-xl font-semibold mb-4">Rooms and beds</h3>

        <!-- Bedrooms -->
        <div class="flex align-items-center justify-content-between py-2">
            <span class="text-lg">Bedrooms</span>

            <div class="flex align-items-center gap-3">
                <p-button icon="pi pi-minus" [rounded]="true" [outlined]="true" size="small" [disabled]="bedrooms === null"
                    (onClick)="decrease('bedrooms')">
                </p-button>

                <span class="w-2rem text-center">
                    {{ display(bedrooms) }}
                </span>

                <p-button icon="pi pi-plus" [rounded]="true" [outlined]="true" size="small" (onClick)="increase('bedrooms')">
                </p-button>
            </div>

        </div>

        <!-- Beds -->
        <div class="flex align-items-center justify-content-between py-2">
            <span class="text-lg">Beds</span>

            <div class="flex align-items-center gap-3">
                <p-button icon="pi pi-minus" [rounded]="true" [outlined]="true" size="small" [disabled]="beds === null"
                    (onClick)="decrease('beds')">
                </p-button>

                <span class="w-2rem text-center">
                    {{ display(beds) }}
                </span>

                <p-button icon="pi pi-plus" [rounded]="true" [outlined]="true" size="small" (onClick)="increase('beds')">
                </p-button>
            </div>
        </div>

        <!-- Bathrooms -->
        <div class="flex align-items-center justify-content-between py-2">
            <span class="text-lg">Bathrooms</span>

            <div class="flex align-items-center gap-3">
                <p-button icon="pi pi-minus" [rounded]="true" [outlined]="true" size="small" [disabled]="bathrooms === null"
                    (onClick)="decrease('bathrooms')">
                </p-button>

                <span class="w-2rem text-center">
                    {{ display(bathrooms) }}
                </span>

                <p-button icon="pi pi-plus" [rounded]="true" [outlined]="true" size="small" (onClick)="increase('bathrooms')">
                </p-button>
            </div>
        </div>
    </div>

  `,
  standalone: true
})
export class RoomsModule {

  bedrooms: number | null = null;
  beds: number | null = null;
  bathrooms: number | null = null;

  increase(type: 'bedrooms' | 'beds' | 'bathrooms') {
    if (this[type] === null) this[type] = 1;
    else this[type]!++;
  }

  decrease(type: 'bedrooms' | 'beds' | 'bathrooms') {
    if (this[type] === null) return;

    if (this[type]! > 1) {
      this[type]!--;
    } else {
      this[type] = null;
    }
  }

  display(value: number | null, isBedroom = false) {
    if (isBedroom) return value + '+';
    return value === null ? 'Any' : value;
  }

}
