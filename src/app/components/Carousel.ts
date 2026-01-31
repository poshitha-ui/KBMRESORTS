import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../imports';
import { ProductService } from '../../service/carouselService';
import { Product } from '../../domain/product';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [CommonModule, ImportsModule],
    providers: [ProductService],
    template: `
        <p-carousel [value]="products ?? []" [numVisible]="1" [numScroll]="1" [responsiveOptions]="responsiveOptions"
            class="kbm-carousel">
            <ng-template let-product #item>
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="mb-3">
                            <img [src]="'assets/images/' + product.image" [alt]="product.title"
                                class="carousel-image w-full border-round-xl" />
                        </div>
                    </div>
                </div>
            </ng-template>
        </p-carousel>
    `,
    styles: `
      :host ::ng-deep .kbm-carousel {
	 position: relative;
}
 :host ::ng-deep .kbm-carousel .p-carousel-indicator-list {
	 position: absolute;
	 bottom: 10px;
	 width: 100%;
}
 :host ::ng-deep .kbm-carousel .p-carousel-indicator-list .p-carousel-indicator-button {
	 width: 8px;
	 height: 8px;
	 border-radius: 50%;
	 background: rgba(255, 255, 255, 0.6);
}
 :host ::ng-deep .kbm-carousel .p-carousel-indicator-list .p-carousel-indicator-active .p-carousel-indicator-button {
	 background: var(--p-button-primary-background);
}
 :host ::ng-deep .kbm-carousel .p-carousel-prev-button, :host ::ng-deep .kbm-carousel .p-carousel-next-button {
	 position: absolute;
}
 :host ::ng-deep .kbm-carousel .p-carousel-prev-button .p-button, :host ::ng-deep .kbm-carousel .p-carousel-next-button .p-button {
	 background: #fff b3;
}
 :host ::ng-deep .kbm-carousel .p-carousel-prev-button {
	 left: 10px;
	 z-index: 1;
}
 :host ::ng-deep .kbm-carousel .p-carousel-next-button {
	 right: 10px;
}
    `

})
export class Carousel {
    products: Product[] | undefined;
    responsiveOptions: any[] | undefined;
    constructor(private productService: ProductService) { }
    ngOnInit() {
        this.products = this.productService.getProductsData();
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }



}