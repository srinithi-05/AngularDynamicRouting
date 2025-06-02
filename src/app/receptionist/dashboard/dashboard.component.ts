import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class ReceptionistDashboardComponent {

  bookings = [
  { guest: 'srinithi', room: 'Deluxe', status: 'Booked' },
  { guest: 'raj', room: 'Suite', status: 'Checked-In' }
];

}
