import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../core/services/products.service.js';
import { Product } from '../core/interfaces/Product.interface.js';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnChanges {
  constructor(private _ProductsService:ProductsService){}
  @Input() isVisible: boolean = false;
  @Input() product: any = null; 
  @Input() isEditMode: boolean = false; 

  @Output() closeModal = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<void>();

  productForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    image: new FormControl(null, [Validators.required]),
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product && this.isEditMode) {
      this.productForm.patchValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        image: this.product.image,
      });
    } else if (changes['isEditMode'] && !this.isEditMode) {
      this.productForm.reset();
    }
  }

  onClose() {
    this.closeModal.emit();
    this.productForm.reset();
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData: any = this.productForm.value;
      console.log(formData)
      if (this.isEditMode && this.product) {
        formData._id = this.product._id;
        this._ProductsService.updateProducts(formData).subscribe({
              next:(data)=>{
                this._ProductsService.updateProductFromArray(formData)
                console.log(data,"updated successfully")
              },
              error:()=>{},
              complete:()=>{
                this.formSubmit.emit();
              }
            })
      }
      else{
        console.log("i am in add")
        this._ProductsService.addProducts(formData).subscribe({
          next:(data)=>{
             console.log(data,"updated successfully")
             this._ProductsService.addProductToArray(formData);
          },
          error:()=>{},
          complete:()=>{this.formSubmit.emit();}
        })
      }
      this.onClose();
    }
  }

  onModalClick(event: Event) {
    event.stopPropagation();
  }
} 