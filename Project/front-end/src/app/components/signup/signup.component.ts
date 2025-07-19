import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  // constructor(private readonly userServi)
  private _AuthService = Inject(AuthService)
  register = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    age: new FormControl(null,[Validators.required,Validators.min(12),Validators.max(100)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required]),
  })
  isBtnSubmit:boolean=false

  sendData(){
    console.log(this.register)
  }

  signup(){
    this.isBtnSubmit=true
    this._AuthService.signupService(this.register.value).subscribe({

    })
  }
}
