import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User.interface';
import {DecodedToken} from '../interfaces/DecodedToken.interface';
import { Router } from '@angular/router';
import {jwtDecode } from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private _Router:Router){ }

  // isUserLoggedIn:boolean=false;
  decodedUser!:DecodedToken;
  

  getCurrentUserId():String{
    return this.decodedUser._id;
  }

  isAdmin():boolean{
    return this.decodedUser.role === "admin";
  }

  login(loginData:any):Observable<any>{
    return this._HttpClient.post(`http://localhost:3000/users/login`,loginData,
      {headers: new HttpHeaders(
        {'Authorization':`Bearer ${localStorage.getItem("token")}`}
      )}
    )
  }

  isUserLoggedIn():boolean{
    const token = localStorage.getItem("token");
    if(token){
      const decoded:DecodedToken=jwtDecode(token)
      this.decodedUser=decoded;
      console.log(decoded)
      if(decoded._id&&decoded.role&&decoded.iat)return true
    }
    return false;
  }

  logout():void{
    localStorage.removeItem("token");
    // this.isUserLoggedIn=false;
    this._Router.navigate(['/login'])
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