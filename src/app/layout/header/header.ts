import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../imports';
import { HeaderActionsModules } from '../../components/header-actions';

type DropdownKey =
  | 'destinations'
  | 'resources'
  | 'industries'
  | 'pricing'
  | null;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ImportsModule, HeaderActionsModules],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeDropdown: DropdownKey = null;
  activeMobileDropdown: DropdownKey = null;
  isMobileMenuOpen = false;

  //Mega Menu
  toggleDropdown(key: DropdownKey) {
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

  toggleMobileDropdown(key: DropdownKey) {
    this.activeMobileDropdown =
      this.activeMobileDropdown === key ? null : key;
  }

}
