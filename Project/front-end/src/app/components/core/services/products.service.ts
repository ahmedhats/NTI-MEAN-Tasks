import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  testArr = ['ahmed','medhat','mohamed','said']
  
  constructor(private _HttpClient:HttpClient){

  }

  getProducts():Observable<any>{
    return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
    // .subscribe({
    //   next:()=>{},
    //   error:()=>{},
    //   complete:()=>{}
    // })/do this on the used component

  }
}

//Observable                                             Promise
//httpClient                                             fetch
//subscribe(next(),error(),complete())                  .then,.catch,.finally
//map,reduce,forEach...                                  N/A
//sync or async                                          only async
