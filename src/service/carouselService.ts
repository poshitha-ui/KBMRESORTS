import { Injectable } from '@angular/core';
    
@Injectable()
export class ProductService {
    getProductsData() {
        return [
            {
                id: '1000',
                image: 'vacation-rentals-townhome-utah-null-park-city-hidden-creek-hct-26c-122351.jpeg',
            },
            
            {
                id: '1001',
                image: 'vacation-rentals-townhome-utah-null-park-city-hidden-creek-hct-26c-122456.jpeg',
            },
            {
                id: '1002',
                image: 'vacation-rentals-townhome-utah-null-park-city-hidden-creek-hct-26c-122519.jpeg',
            },
            {
                id: '1003',
                image: 'vacation-rentals-townhome-utah-null-park-city-hidden-creek-hct-26c-122528.jpeg',
            },
            {
                id: '1004',
                image: 'vacation-rentals-townhome-utah-null-park-city-hidden-creek-hct-26c-122579.jpeg',
            },
        ]
    }
}