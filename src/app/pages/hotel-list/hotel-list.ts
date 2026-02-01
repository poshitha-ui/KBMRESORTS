import { Component, OnInit, inject, Input } from '@angular/core';
import { ImportsModule } from '../../imports';
import { ImportIconsModule } from '../../importIcons';
import { CustomCardModule } from '../../components/custom-card';
import { MenuItem, MessageService } from 'primeng/api';
import { LeftMenuModule } from '../../components/left-menu';
import { CardGridComponent } from '../../components/card-grid';
import { PropertyCard } from '../../model/property-card.model';

@Component({
  selector: 'app-hotel-list',
  imports: [ImportsModule, ImportIconsModule, CustomCardModule, LeftMenuModule, CardGridComponent],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.scss',
  standalone: true,
  providers: [MessageService]
})
export class HotelList implements OnInit {
  @Input() data!: PropertyCard;


  properties: PropertyCard[] = [
    {
      id: "1",
      code: 'VIN-14',
      title: 'Vintage on the Strand',
      rating: 5.00,
      reviews: 20,
      location: 'Mountain View, Park City, Canyons',
      sleeps: 7,
      bedrooms: 2,
      bathrooms: 2,
      areaSqft: 1476,
      pricePerNight: 499
    },
    {
      id: "2",
      code: 'HCT-24C',
      title: 'Hidden Creek',
      rating: 5.00,
      reviews: 19,
      location: 'Mountain View, Park City, Canyons',
      sleeps: 10,
      bedrooms: 4,
      bathrooms: 2,
      areaSqft: 1742,
      pricePerNight: 369
    },
    {
      id: "3",
      code: 'TWL-12C',
      title: 'Timber Wolf Lodge',
      rating: 5.00,
      reviews: 24,
      location: 'Nature View, Park City, Canyons',
      sleeps: 8,
      bedrooms: 2,
      bathrooms: 2.5,
      areaSqft: 1583,
      pricePerNight: 199
    },
    {
      id: "4",
      code: 'PCO-184M',
      title: 'The Colony',
      rating: 5.00,
      reviews: 19,
      location: 'Mountain View, Park City, Canyons',
      sleeps: 15,
      bedrooms: 6,
      bathrooms: 5.5,
      areaSqft: 14000,
      pricePerNight: 8000
    },
    {
      id: "5",
      code: 'TWL-5B',
      title: 'Timber Wolf Lodge',
      rating: 5.00,
      reviews: 24,
      location: 'Nature View, Park City, Canyons',
      sleeps: 6,
      bedrooms: 3,
      bathrooms: 2.5,
      areaSqft: 1583,
      pricePerNight: 199
    },
    {
      id: "6",
      code: 'PCO-184G',
      title: 'The Colony',
      rating: 5.00,
      reviews: 9,
      location: 'Mountain View, Park City, Canyons',
      sleeps: 15,
      bedrooms: 3,
      bathrooms: 3.5,
      areaSqft: 5983,
      pricePerNight: 3000
    }

  ]

  //sort by menu
  private messageService = inject(MessageService);
  sortItems: MenuItem[] | undefined;

  ngOnInit() {
    this.sortItems = [
      {
        items: [
          {
            label: 'Recommended',
          },
          {
            label: 'Bedrooms low to high',
          },
          {
            label: 'Bedrooms high to low',
          },
          {
            label: 'price low to high',
          },
          {
            label: 'price hign to low',
          },
          {
            label: 'Guest reviews',
          }
        ]
      }

    ]
  }
}
