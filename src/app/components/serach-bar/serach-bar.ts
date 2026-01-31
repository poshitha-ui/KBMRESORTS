import { Component, ViewChild } from '@angular/core';
import { ImportsModule } from '../../imports';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule, DatePicker } from 'primeng/datepicker';


@Component({
  selector: 'app-search-bar',
  imports: [InputTextModule, ImportsModule, DatePickerModule, ],
  templateUrl: './serach-bar.html',
  styleUrl: './serach-bar.scss',
  standalone: true
})
export class SearchBarComponent {
  location = 'Cox\'s Bazar';
  

  @ViewChild('dp') datePicker!: DatePicker;

  range: Date[] | null = null;
  dateLabel = '';

   openCalendar() {
    this.datePicker.toggle(); 
  }

  onDateSelect() {
    if (this.range && this.range[0] && this.range[1]) {
      this.dateLabel =
        this.range[0].toLocaleDateString() +
        ' - ' +
        this.range[1].toLocaleDateString();
    }
  }
// for Guset
  showGuests = false;
  guests = [
    { label: 'Adults', sub: 'Ages 13 or above', count: 0 },
    { label: 'Children', sub: 'Ages 2–12', count: 0 }
    // { label: 'Infants', sub: 'Under 2', count: 0 }
  ];
  toggleGuests(event: Event) {
    event.stopPropagation();
    this.showGuests = !this.showGuests;
  }

  closeGuests() {
    this.showGuests = false;
  }

  increment(guest: any) {
    guest.count++;
    this.updateSummary();
  }

  decrement(guest: any) {
    if (guest.count > 0) {
      guest.count--;
      this.updateSummary();
    }
  }
  get guestSummary(): string {
    const parts = [];

    const adults = this.guests[0].count;
    const children = this.guests[1].count;
    // const infants = this.guests[2].count;

    if (adults) parts.push(`${adults} adult${adults > 1 ? 's' : ''}`);
    if (children) parts.push(`${children} child${children > 1 ? 'ren' : ''}`);
    // if (infants) parts.push(`${infants} infant${infants > 1 ? 's' : ''}`);

    return parts.join(' · ');
  }

  updateSummary() {
    // getter recalculates automatically
  }
}
