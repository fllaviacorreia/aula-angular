import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    if(email === "dimas@gmail.com" && password === "dimasfoguete"){
      this.isLoggedIn = true;
      this.router.navigate(['home'])
      return this.isLoggedIn;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['login'])
  }

  isAuthenticated(): boolean{
    return this.isLoggedIn;
  }
}
