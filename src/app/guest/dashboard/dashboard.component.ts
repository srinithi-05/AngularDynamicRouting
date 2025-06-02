import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class GuestDashboardComponent {

  user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

    bookings = [
    { room: 'Deluxe', checkIn: '2025-06-01', checkOut: '2025-06-05', status: 'Booked' }
  ];

}
