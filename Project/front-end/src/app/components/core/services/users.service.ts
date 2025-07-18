import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService{
    
    constructor(private _HttpClient:HttpClient){

    }

    login(loginData:any){
      this._HttpClient.post(`http://localhost:3000/usr/login`,loginData)
    }
} 