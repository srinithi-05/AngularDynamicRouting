import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === this.username && u.password === this.password);

    if (!user) {
      alert('Invalid username or password');
      // return; -- code after this won't work
    }

    // Store logged-in user info in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Redirect based on role
    switch (user.role) {
      case 'admin':
        this.router.navigate(['/admin/dashboard']);
        break;
      case 'receptionist':
        this.router.navigate(['/receptionist/dashboard']);
        break;
      case 'guest':
        this.router.navigate(['/guest/dashboard']);
        break;
      default:
        alert('Invalid role');
        break;
    }

  }
}
