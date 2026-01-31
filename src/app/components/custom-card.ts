import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { ImportIconsModule } from '../importIcons';
import { Carousel } from './Carousel';


@Component({
  selector: 'app-custom-card',
  imports: [ImportsModule, ImportIconsModule, Carousel],
  template: `
    <p-card class="relative border-1 border-200 mb-2">
            <div class=" mx-auto">
                     <app-carousel></app-carousel>          
                

            </div>
            <div class="mb-4">
                <div class="flex justify-content-between">
                    <div>
                        <div class="font-medium mb-1">HCT-26C</div>
                        <p class="font-semibold text-lg pb-2">Hidden Creek </p>
                    </div>
                    <div class="flex align-items-center gap-1">
                        <i class="pi pi-star-fill text-yellow-500"></i>
                        <span class="font-semibold">4.98 (20)</span>
                    </div>

                </div>

                <p class="text-sm pb-2">
                    <i class="pi pi-map-marker mr-1"></i>
                    HCT Canyons, Park City, Park City, UT, US
                </p>
                <div class="absolute shadow-md favorite-icon">
                    <app-fav-icon />
                </div>


                <ul class="flex flex-wrap gap-2 m-0 p-0 list-none my-2">
                    <li class="text-sm flex gap-2"><app-guest-icon /> 10 sleeps |</li>
                    <li class="text-sm flex gap-2"><app-bedroom-icon /> 4 bedrooms | </li>
                    <li class="text-sm flex gap-2"><app-bath-icon /> 2 bathrooms |</li>
                    <li class="text-sm flex gap-2"> <app-interior-icon /> 1,742 sq.ft. interior </li>
                </ul>


            </div>
            <div class="flex justify-content-between align-items-center">
                <p-button class="font-semibold text-xl" label="Check Availability" icon="pi pi-arrow-up-right"
                    iconPos="right"></p-button>
                <div>
                    <p class=""> From</p>
                    <p class="font-semibold text-xl">$125/night</p>
                </div>
            </div>
            <p-divider />

            <ul class="flex flex-wrap gap-4 m-0 p-0 list-none mt-2 align-items-center">
                <li class="text-sm flex gap-2 align-items-center"><i class="pi pi-bookmark"></i> Save </li>
                <li class="text-sm flex gap-2 align-items-center"><i class="pi pi-info-circle"></i> Contact  </li>
                <li class="text-sm flex gap-2 align-items-center"><i class="pi pi-share-alt"></i> share </li>
            </ul>
        </p-card>
  `,
  styles: `
  
   .favorite-icon {
    top: 1.5rem;
    right: 2rem;
    padding: 0.5rem;
  }
  `
})
export class CustomCardModule {

}
