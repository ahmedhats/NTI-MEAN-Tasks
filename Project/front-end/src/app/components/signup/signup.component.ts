import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  isBtnSubmit: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private readonly _AuthService: AuthService,
    private readonly _Router: Router
  ) {}

  register = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    age: new FormControl(null, [Validators.required, Validators.min(12), Validators.max(100)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

  sendData() {
    if (this.register.valid) {
      this.errorMessage = '';
      this.successMessage = '';
      this.signup(this.register.value);
    } else {
      this.errorMessage = 'Please fill all required fields correctly';
    }
  }

  signup(data: any) {
    this.isBtnSubmit = true;
    this._AuthService.signup(data).subscribe({
      next: (response) => {
        console.log("Signup successful", response);
        this.successMessage = 'Account created successfully!';
        this.isBtnSubmit = false;
        setTimeout(() => {
          this._Router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        console.log("Signup error", error);
        this.errorMessage = error.error?.message || 'Signup failed. Please try again.';
        this.isBtnSubmit = false;
      }
    })
  }
}
