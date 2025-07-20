import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private readonly _AuthService:AuthService){}
  isLoggedIn!:boolean;

  logout():void{
   this._AuthService.logout();
  }
  ngOnInit():void{
    this.isLoggedIn=this._AuthService.isUserLoggedIn();
  }
}
