import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/Product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  // @Input() product!:Product;
  products:Product[]=[];

    constructor(private _ProductsService:ProductsService){

    }
    getProducts(){
      this._ProductsService.getProducts().subscribe({
        next:(res)=>{
          console.log(res)
          this.products=res.recipes;
          console.log(this.products)
        },
        error:(err)=>{console.log(err)},
        complete:()=>{console.log("Done")}
      })
    }

  ngOnInit(): void {
    this.getProducts();
  }
}
