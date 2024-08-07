import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.email = ""
    this.password = ""
    this.errorMessage = ""
  }

  login(): void {
    if (!this.authService.login(this.email, this.password)) {
      this.errorMessage = "Email ou senha inválidos."
      this.email = ""
      this.password = ""

    }
  }
}
