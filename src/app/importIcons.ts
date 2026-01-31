import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InteriorIconComponent } from '../assets/icons/interior.component';
import { GuestIconComponent } from '../assets/icons/guest.component';
import { BedroomIconComponent } from '../assets/icons/bedroom.component';
import { BathIconComponent } from '../assets/icons/bath.component';
import { FavIconComponent } from '../assets/icons/favourite.component';


@NgModule ({
    imports: [CommonModule, InputIconModule, IconFieldModule, InteriorIconComponent, GuestIconComponent,FavIconComponent,
                BathIconComponent, BedroomIconComponent],
    exports: [InputIconModule, IconFieldModule, InteriorIconComponent, GuestIconComponent,FavIconComponent,
                BathIconComponent, BedroomIconComponent],
    providers: []
})

export class ImportIconsModule {}
