import { Component } from '@angular/core';
import { ImportsModule } from '../imports';
import { MenuItem } from 'primeng/api';
import { SearchBarComponent } from './serach-bar/serach-bar';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [ImportsModule, SearchBarComponent],
    template: `
        <section class="hotel-banner">
            <div class="app-container-fluid">
                <div class="banner-content flex flex-column align-items-center">
                    <h2 class="text-white text-5xl">Luxury Hotel</h2>
                    <div class="flex justify-center">
                        <p-breadcrumb [model]="breadcrumbItems">
                            <ng-template pTemplate="separator">
                                <span class="breadcrumb-dot text-white">•</span>
                            </ng-template>
                        </p-breadcrumb>
                    </div>
                </div>
            </div>
        </section>
        <section class="filter-section">
            <div class="app-container-fluid">
                <app-search-bar></app-search-bar>
            </div>
        </section>
        
    `,
    styles:`
        :host ::ng-deep .p-breadcrumb {
            background: transparent;
        }

        :host ::ng-deep .p-breadcrumb-item-link {
            color: #fff
        }
        :host ::ng-deep .p-breadcrumb-list
        > li.p-breadcrumb-item:last-of-type
        .p-breadcrumb-item-label {
            text-decoration: underline;
        }

        .filter-section{
            margin-top: -50px;
        }
    `

})
export class BannerModule {
//Breadcrumb Menu
  breadcrumbItems: MenuItem[] = [
    { label: 'Home', routerLink: '/' },
    { label: 'Destinatin', routerLink: '/destination' },
    { label: 'Park City', }
  ];
}
