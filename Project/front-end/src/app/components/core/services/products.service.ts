import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private _HttpClient:HttpClient){ }


  getProducts():Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/products`)
    // .subscribe({
    //   next:()=>{},
    //   error:()=>{},
    //   complete:()=>{}
    // })/do this on the used component

  }
  

  addProducts(product:Product):Observable<any>{
    return this._HttpClient.post('http://localhost:3000/products',product)
  }

  updateProducts(product:Product):Observable<any>{
    return this._HttpClient.put(`http://localhost:3000/products/${product._id}`,product)
  }

  deleteProducts(product:Product):Observable<any>{
    return this._HttpClient.delete(`http://localhost:3000/products/${product._id}`)
  }
}

//Observable                                             Promise
//httpClient                                             fetch
//subscribe(next(),error(),complete())                  .then,.catch,.finally
//map,reduce,forEach...                                  N/A
//sync or async                                          only async
