import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ImportsModule } from '../../imports';
import  headerData  from '../../../assets/data/headerData.json'

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  templateUrl: './mega-menu.html',
  styleUrls: ['./mega-menu.scss'],
  imports: [CommonModule, ImportsModule, FormsModule],
})
export class MegaMenu {

  header = (headerData as any).header;

  activeDropdown: string | null = null;
  isMobileMenuOpen = false;
  activeMobileDropdown: string | null = null;

  toggleDropdown(key: string) {
    this.activeDropdown = this.activeDropdown === key ? null : key;
  }

  closeDropdown() {
    this.activeDropdown = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeMobileDropdown = null;
    }
  }

  toggleMobileDropdown(key: string) {
    this.activeMobileDropdown =
      this.activeMobileDropdown === key ? null : key;
  }

  activeIndex = 0;

  tabs = [
    { label: 'Overview', id: 'overview' },
    { label: 'Info & Prices', id: 'info' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'House Rules', id: 'rules' },
    { label: 'Guest Reviews', id: 'reviews' },
  ];

   scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

