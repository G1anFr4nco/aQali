// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
