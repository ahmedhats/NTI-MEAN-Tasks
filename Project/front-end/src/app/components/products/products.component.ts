import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interfaces/Product.interface';
import { AuthService } from '../core/services/auth.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent, ProductFormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isEmpty: boolean = true;
  isLoading: boolean = true;
  isAdmin: boolean = false;

  //  Modal management properties
  showProductModal: boolean = false;
  selectedProduct: Product | null = null;
  isEditMode: boolean = false;

  constructor(
    private _ProductsService: ProductsService, 
    private _AuthService: AuthService
  ) {}

  getProducts() {
    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.isLoading = false;
        console.log(this.products)
      },
      error: (err) => { console.log(err) },
      complete: () => {
        console.log("Done")
        if (this.products.length) this.isEmpty = false;
        this.isLoading = false;
      }
    })
  }


  openAddProductModal() {
    this.isEditMode = false;
    this.selectedProduct = null;
    this.showProductModal = true;
  }


  openEditProductModal(product: Product) {
    this.isEditMode = true;
    this.selectedProduct = product;
    this.showProductModal = true;
  }


  closeProductModal() {
    this.showProductModal = false;
    this.selectedProduct = null;
    this.isEditMode = false;
  }


  deleteProduct(product: Product) {
    if (confirm('Are you sure you want to delete this product?')) {
      this._ProductsService.deleteProducts(product).subscribe(
        {
          next:()=>{console.log(product , "deleted")},
          complete:()=>{this.products = this.products.filter(item => item._id !== product._id);}
        }
      )
      this.getProducts();
    }
  }

  ngOnInit(): void {
    this.getProducts();
    this.isAdmin = this._AuthService.isAdmin();
    this.isAdmin = true; // for now
  }
}
