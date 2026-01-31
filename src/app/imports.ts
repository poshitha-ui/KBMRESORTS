import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { Overlay } from 'primeng/overlay';
import { MegaMenuModule } from 'primeng/megamenu';
import { Avatar } from 'primeng/avatar';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { PanelMenu } from 'primeng/panelmenu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    ProgressBarModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DatePicker,
    Overlay,
    MegaMenuModule,
    Avatar,
    InputGroup,
    InputGroupAddon,
    PanelMenu, 
    PanelMenuModule,
    MenuModule,
    DividerModule,
    CarouselModule,
    CheckboxModule,
    SliderModule,
    BreadcrumbModule
    
  ],
  exports: [
    CommonModule,
    TabsModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    ProgressBarModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DatePicker,
    Overlay,
    MegaMenuModule,
    Avatar,
    InputGroup,
    InputGroupAddon,
    PanelMenu, 
    PanelMenuModule,
    MenuModule,
    DividerModule,
    CarouselModule,
    CheckboxModule,
    SliderModule,
    BreadcrumbModule
  ],
   providers: [  ]
})

export class ImportsModule {}
