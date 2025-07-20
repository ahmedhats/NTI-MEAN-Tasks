import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient){ }
    
  private currentUser!:User;

  setUser(user:User){
    this.currentUser=user;
  }

  getCurrentUser():User{
    return this.currentUser;
  }

  isAdmin():boolean{
    return this.currentUser?.email === "ahmedhatdev@gmail.com";
  }

  login(loginData:any){
    return this._HttpClient.post(`http://localhost:3000/users/login`,loginData)
  }

  signup(user:User):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/users/signup`,user)
    // .subscribe({
    //   next:()=>{},
    //   error:()=>{},
    //   complete:()=>{}
    // })/do this on the used component
  }
}