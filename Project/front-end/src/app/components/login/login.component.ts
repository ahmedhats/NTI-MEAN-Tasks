import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isBtnSubmit: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private readonly _AuthService: AuthService,
    private readonly _Router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

  sendData() {
    if (this.loginForm.valid) {
      this.errorMessage = '';
      this.successMessage = '';
      this.login(this.loginForm.value);
    } else {
      this.errorMessage = 'Please enter valid credentials';
    }
  }

  login(data: any) {
    this.isBtnSubmit = true;
    this._AuthService.login(data).subscribe({
      next: (response: any) => {
        console.log("login successful", response);
        this.successMessage = response.message;
        this.isBtnSubmit = false;
        // this._AuthService.setUser(response.token);
        window.localStorage.setItem("token",response.token)
        this._AuthService.isUserLoggedIn=true;
        setTimeout(() => {
          this._Router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        console.log("login error", error);
        this.errorMessage = error.error?.message || 'Login failed. Please try again.';
        this.isBtnSubmit = false;
      }
    })
  }
}

    

