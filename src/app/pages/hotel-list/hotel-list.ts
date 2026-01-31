import { Component, OnInit, inject } from '@angular/core';
import { ImportsModule } from '../../imports';
import { ImportIconsModule } from '../../importIcons';
import { CustomCardModule } from '../../components/custom-card';
import { MenuItem, MessageService } from 'primeng/api';
import { LeftMenuModule } from '../../components/left-menu';

@Component({
  selector: 'app-hotel-list',
  imports: [ImportsModule, ImportIconsModule, CustomCardModule, LeftMenuModule],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.scss',
  standalone: true,
  providers: [MessageService]
})
export class HotelList implements OnInit{
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
