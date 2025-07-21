import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private _HttpClient:HttpClient){ }

  private products:Product[]=[];

  getProductsArray():any{
    return this.products;
  }
  setProductsArray(arr:any):void{
    this.products=arr;
  }
  deleteProductFromArray(id:any):void{
    this.products.filter(item => item._id !== id);
  }
  updateProductFromArray(product:any):void{
    let index = this.products.findIndex(p => p._id === product._id);
    if(index !== -1){
      this.products[index] = product;
      console.log("array updated", this.products[index]);
    } 
  }
  addProductToArray(product:any):void{
    this.products.push(product)
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'token': `${token}`
    });
  }

  getProducts():Observable<any>{
    return this._HttpClient.get(`http://localhost:3000/products`,
      {headers: this.getHeaders()})
    // .subscribe({
    //   next:()=>{},
    //   error:()=>{},
    //   complete:()=>{}
    // })/do this on the used component

  }
  

  addProducts(product:Product):Observable<any>{
    return this._HttpClient.post('http://localhost:3000/products', product, 
      {headers: this.getHeaders()})
  }

  updateProducts(product:Product):Observable<any>{
    return this._HttpClient.put(`http://localhost:3000/products/${product._id}`, product,
      {headers: this.getHeaders()})
  }

  deleteProducts(product:Product):Observable<any>{
    return this._HttpClient.delete(`http://localhost:3000/products/${product._id}`,
      {headers: this.getHeaders()})
  }
}

//Observable                                             Promise
//httpClient                                             fetch
//subscribe(next(),error(),complete())                  .then,.catch,.finally
//map,reduce,forEach...                                  N/A
//sync or async                                          only async
