import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/Product.interface';
import { ItemNotFoundComponent } from '../item-not-found/item-not-found.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent,ItemNotFoundComponent,MatProgressSpinnerModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  // @Input() product!:Product;
  products:Product[]=[];
  isEmpty:boolean=true;
  isLoading:boolean=true;

    constructor(private _ProductsService:ProductsService){

    }
    getProducts(){
      this._ProductsService.getProducts().subscribe({
        next:(res)=>{
          console.log(res)
          this.products=res.recipes;
          this.isLoading=false;
          console.log(this.products)
        },
        error:(err)=>{console.log(err)},
        complete:()=>{
          console.log("Done")
          if(this.products.length) this.isEmpty=false;
          this.isLoading=false;
        }
      })
    }

  ngOnInit(): void {
    this.getProducts();

  }
}
