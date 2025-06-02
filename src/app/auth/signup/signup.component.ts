import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string= '';
  role: string ='guest';

  constructor(private router: Router) {}

  signup(){
    // Load existing users from localStorage or create empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    if (users.find((u: any) => u.username === this.username)) {
      alert('Username already exists!');
      return;
    }

    // Add new user
    users.push({
      username: this.username,
      password: this.password,
      role: this.role
    });

    // Save updated user list
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please login.');
    this.router.navigate(['/login']);
  }
}


